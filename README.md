<sub>**Sponsor**: [OutpostProxies.com](https://outpostproxies.com) - Premium USA/Global proxies for security research. HTTP/SOCKS5 support, unlimited bandwidth, flexible plans starting at $2/GB. [Updates](https://t.me/outpostupdates) | [Support](https://t.me/outpostproxies)</sub>




---

# TikTok Stack-Based Virtual Machine Reverse Engineering

Reverse engineering analysis of TikTok's client-side stack-based virtual machine implementation, including string deobfuscation, bytecode parsing, and instruction disassembly.

## Overview

This repo contains tools and analysis for reverse engineering TikTok's JavaScript virtual machine used for client-side protection and code obfuscation. The VM implements a stack-based architecture with 77 different opcodes and uses custom bytecode interpretation.

**Note: This entire analysis was completed in 5-6 hours, so there may be some mistakes or areas for improvement. Feel free to contribute and fix any issues.**

I'm not planning to continue working on this project because after making the devirtualizer my interest is totally gone (most of the time when I work on VMs). I wanted to help people who are struggling with VM reverse engineering, so I'm sharing all my work here.

**Important**: If TikTok is not happy about this repository, please contact me first instead of sending a DMCA takedown:
- Discord: emrovsky
- Email: eemrovsky@proton.me

## Table of Contents

- [String Deobfuscation](#string-deobfuscation)
- [Bytecode Analysis](#bytecode-analysis)
- [Control Flow Handling](#control-flow-handling)
- [Virtual Machine Architecture](#virtual-machine-architecture)
- [Finding Encryption Functions](#finding-encryption-functions)
- [Usage](#usage)
- [Contributing](#contributing)

## String Deobfuscation

First thing I had to deal with was the heavily obfuscated strings. TikTok's code uses multiple string arrays to hide what's actually going on.

### How the obfuscation works

The original code had references like:
```javascript
// Obfuscated references
Kg[123]  // References to main string array
aa[45]   // References to numeric constants array
```

### My approach

1. **Found the string arrays**: Located the main arrays (`giggernigger` and `aa`) containing 1000+ encoded strings
2. **Used Babel for static analysis**: Traversed the AST to find all `MemberExpression` nodes referencing these arrays
3. **Direct replacement**: Just replaced the array lookups with actual values

```javascript
// deobf.js - The core deobfuscation logic
const deobfuscateEncodedStringVisitor = {
  MemberExpression(path) {
    if (path.node && path.node.object && path.node.object.name == "Kg") {
      toReplace = giggernigger[path.node.property.value]
      path.replaceWith(t.valueToNode(toReplace))
    }
    
    if (path.node && path.node.object && path.node.object.name == "aa") {
      toReplace = aa[path.node.property.value]
      path.replaceWith(t.valueToNode(toReplace))
    }
  },
};
```

### Results

After running this, meaningless array references became readable:
```javascript
// Before: Kg[123]
// After: "navigator"

// Before: aa[45] 
// After: 2654435769
```

## Bytecode Analysis

### Understanding the instruction format

The VM uses custom bytecode stored in `Uint8Array`. Each instruction has:
- **Opcode** (1 byte): Operation type (0-76)
- **Operands** (variable): Immediate values, offsets, or indices

### The fetchInstructions function

This function parses the binary format. I had to reverse engineer how it reads the bytecode:

```javascript
function fetchInstructions() {
    var R = [];
    var r = blabla(t);  // Read string count
    
    j = []
    for (var n = 0; n < r; ++n) {
        j.push(decodestring(t));  // Decode strings
    }
    
    var o = blabla(t);  // Read instruction count
    
    for (n = 0; n < o; ++n) {
        var i = blabla(t);        // Function index
        var u = Boolean(blabla(t)); // Strict mode flag
        var a = new Array();
        var s = blabla(t);
        for (var c = 0; c < s; ++c) {
            a.push([blabla(t), blabla(t), blabla(t), blabla(t)]); // Exception handlers
        }
        var f = new Array();
        var d = blabla(t);
        for (var l = 0; l < d; ++l) {
            f.push(blabla(t));  // Bytecode instructions
        }
        R.push([f, i, u, a]);
    }
    
    return {strings: j, instructions: R}
}
```

### Why I hardcoded the bytecode

Instead of implementing the zip decompression algorithm (which would have taken more time), I just extracted the bytecode and hardcoded it for quicker static analysis:

```javascript
t = { 
    d: new Uint8Array([/* extracted bytecode */]),
    i: 0
}
```

This let me focus on the VM analysis rather than spending time on decompression implementation.

## Control Flow Handling

### Manual analysis approach

I did this part manually because automated control flow analysis would have taken way longer. Here's what I did:

1. **Mapped all opcodes**: Created a complete list of all 77 opcodes and what they do
2. **Traced jumps**: Followed conditional and unconditional jumps manually
3. **Exception handlers**: Figured out how try-catch-finally blocks work
4. **Function calls**: Tracked how functions call each other

### Converting nested conditionals to clean opcodes

The original VM code was a mess of nested if-else statements that made it hard to understand. I converted this:

```javascript
function h() {
  while (true) {
    var e = o[c++];
    if (e < 38) {
      if (e < 19) {
        if (e < 9) {
          if (e < 4) {
            if (e < 2) {
              if (e === 0) {
                var t = v[l--];
                v[l] -= t;
              } else {
                var r = o[c++];
                if (!v[l--]) {
                  c += r;
                }
              }
            } else if (e === 2) {
              var n = o[c++];
              l -= n;
              var h = v.slice(l + 1, l + n + 1);
              var m = v[l--];
              var b = v[l--];
              // ... more nested code
```

Into a clean switch statement:

```javascript
function h() {
  while (true) {
    var opcode = o[c++];
    
    switch (opcode) {
      case 0: //SUB
        var t = v[l--];
        v[l] -= t;
        break;
        
      case 1: //JUMP_IF_FALSE
        var offset = o[c++];
        if (!v[l--]) {
          c += offset;
        }
        break;
        
      case 2: //CALL
        var argCount = o[c++];
        l -= argCount;
        var args = v.slice(l + 1, l + argCount + 1);
        var func = v[l--];
        var thisArg = v[l--];
        if (typeof func != "function") {
          f = 3;
          d = new TypeError(typeof func + " is not a function");
          return;
        }
        var w = C.get(func);
        if (w) {
          g.push([o, i, u, a, s, c, f, d]);
          Ag[1](w[0], thisArg, args, w[1]);
        } else {
          var result = func.apply(thisArg, args);
          v[++l] = result;
        }
        break;
        
      // ... 74 more cases
    }
  }
}
```

### Key control flow instructions

| Opcode | Instruction | What it does |
|--------|-------------|-------------|
| 1 | JUMP_IF_FALSE | Jump if top of stack is falsy |
| 3 | JUMP | Unconditional jump |
| 19 | TRY | Set up exception handler |
| 20 | JUMP_IF_FALSE_OR_POP | Jump or pop based on condition |
| 26 | JUMP_IF_TRUE_OR_POP | Jump or pop based on condition |
| 29 | SWITCH_CASE | Switch statement case handling |
| 31 | JUMP_IF_TRUE | Jump if top of stack is truthy |

## Virtual Machine Architecture

### Stack-based design

The VM is a classic stack machine with these components:

- **Evaluation Stack** (`v`): Where operands go for computations
- **Stack Pointer** (`l`): Points to current top of stack  
- **Program Counter** (`c`): Current instruction being executed
- **Scope Chain** (`a`): Handles variable scoping
- **Exception State** (`f`, `d`): For error handling

### The main VM loop

```javascript
function h() {
  while (true) {
    var opcode = o[c++];
    
    switch (opcode) {
      case 0: // SUB
        var t = v[l--];
        v[l] -= t;
        break;
        
      case 2: // CALL
        var argCount = o[c++];
        l -= argCount;
        var args = v.slice(l + 1, l + argCount + 1);
        var func = v[l--];
        var thisArg = v[l--];
        var result = func.apply(thisArg, args);
        v[++l] = result;
        break;
        
      // ... 75 more opcodes
    }
  }
}
```

### Instruction types

The VM supports these categories of instructions:

**Stack Operations**: PUSH_*, POP, DUP  
**Arithmetic**: ADD, SUB, MUL, DIV, MOD  
**Bitwise**: AND, OR, XOR, NOT, SHIFT  
**Comparison**: EQ, NEQ, LT, GT, LTE, GTE  
**Control Flow**: JUMP*, CALL, RETURN, TRY  
**Object Operations**: GET_PROP, SET_PROP, NEW_OBJECT  
**Variable Access**: GET_VAR, SET_VAR, GET_GLOBAL

## Finding Encryption Functions

One of the main goals was to find where TikTok handles request signing and encryption. Here's the methodology I used to track down these functions:

### Step 1: Finding the entry points

I started by locating where the tokens are actually generated. Through debugging, I found these key calls:

```javascript
a = yn(u, new Uint8Array(t));  // a is the X-Bogus token
s = bn(u, new Uint8Array(r));  // s is the X-Gnarly token
```

### Step 2: VM execution tracing

Then I put a breakpoint in the main VM execution loop and added logging to track what's happening:

```javascript
while (true) {
    var opcode = o[c++];  // <-- Breakpoint here
    
    if (window.thatarray) {
        console.log(`[VM] Opcode ${opcode} at position ${c-1}, stack level: ${l}, instruction length ${o.length}`);
        window.thatarray.push(`[VM] Opcode ${opcode} at position ${c-1}, stack level: ${l}, instruction length ${o.length}`);
    }
    
    if (window.oparrays) {
        for (let i = 0; i < R.length; i++) {
            if (R[i][0] === o) {
                window.oparrays.push(`${i}`)
            }
        }
    }
    // ... rest of VM loop
}
```

### Step 3: Finding strData function

For the strData function, I used a slightly different approach. I found this return statement in the code:

```javascript
return xe({
    magic: 538969122,
    version: 1,
    dataType: e,
    strData: t,           // <-- This is what I was looking for
    tspFromClient: new Date().getTime()
});
```

I put a breakpoint here, then stepped back a bit in the execution to trace where the `strData` value was coming from. Using the same logging approach with `window.thatarray` and `window.oparrays`, I tracked the execution flow to find which VM function was responsible for generating that data.

### Step 4: A small debugging advantage

Here's where it gets interesting - if you trace back a bit from the breakpoint, you can actually see the raw version of strData before it gets processed by the VM. This is a small oversight that's quite useful for browser engineers who want to understand what data is being fed into the encryption process.

While you still need to reverse engineer the actual encryption algorithm, being able to see the input data makes it easier to understand the data flow and validate your analysis.

### Step 5: Collecting execution traces

To track which VM functions are involved in token generation:

1. Set `window.thatarray = [];` to collect opcode execution info
2. Set `window.oparrays = [];` to collect function indices being used
3. Resume execution from the breakpoint
4. Use `[...new Set(window.oparrays)]` to get unique function indices

### Step 6: Results

After tracing the execution during token generation, I identified these key functions:

```
vm249 | "X-Gnarly"
vm103 | "X-Bogus" 
vm42  | strData
```

These functions are the starting points of the flow for token generation - they handle the generation of request headers that TikTok uses for API authentication and anti-bot protection. The "X-Bogus" and "X-Gnarly" headers contain encrypted request signatures that are critical for bypassing TikTok's protection mechanisms.

Note that the return can be another opcode depending on the execution path. You can check `debug_asf/bogus_flow.txt` for an example of a complete execution flow to see how the VM processes these functions step by step.
![VM Debugging Session](https://github.com/user-attachments/assets/26aec1a9-877f-4e8c-8f0e-5ba919ecec5b)

The beauty of this approach is that you can trace exactly which parts of the VM are involved in any specific operation just by setting up the logging arrays and following the execution flow. Whether you're tracking token generation or any other functionality, the same methodology applies - find the output, breakpoint there, trace backwards to see what VM functions contributed to that result.

In my opinion, the best approach is getting the execution flow and used opcodes from debugging, then matching those patterns with the disassembly output to build working signers. This gives you both the high-level understanding from the disasm and the real-world execution traces from debugging.

## Usage

### Running the deobfuscator

```bash
# Deobfuscate strings in JavaScript code
node deobf.js

# Generate disassembly from bytecode  
node disasm.js
```

### Analyzing VM functions

```bash
# The disassembler outputs individual function files
ls functions/
# vm0.js, vm1.js, vm2.js, ... vm271.js
```

### Example output

```assembly
------------------------103--------------------------
// 0 PUSH_STRING → stack[0] = "d41d8cd98f00b204e9800998ecf8427e"
// 3 SET_VAR scope[0][4] ← stack[0]
// 6 GET_VAR → stack[0] = scope[0][3]
// 9 PUSH_UNDEFINED → stack[1] = undefined
// 10 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
```

## Contributing

This was a quick analysis and there are definitely things that could be improved:

- Some opcode interpretations might be wrong
- Exception handling logic needs more work
- Variable scoping analysis could be better
- More test cases would be helpful

Feel free to submit PRs with fixes or improvements. If you find mistakes, just fix them - I probably missed some details in the rush.

## License

MIT License - Use this for educational and research purposes.

## Disclaimer

This project is for educational and research purposes only. Don't use it for anything malicious.

---

*This was a 5-6 hour speedrun, so double-check everything and improve what you can.*


---
