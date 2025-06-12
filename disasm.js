const {fetchInstructions} = require("./bytearray")
const fs = require('fs');

function OpHandler(instructionSet, strings) {
    let index = 0;
    let pointer = -1;
    let instruction = instructionSet[0];
    let strictMode = instructionSet[2];
    let exceptionHandlers = instructionSet[3];
    let devirtOutput = "";

    while (true) {
        var opcode = instruction[index++];
        if (opcode == undefined) {
            return devirtOutput
        }

        switch (opcode) {
            case 0:
                pointer--;
                devirtOutput += `// ${index} SUB stack[${pointer}] = stack[${pointer}] - stack[${pointer+1}]\n`;
                break;
            case 1:
                pointer--;
                var offset = instruction[index++];
                devirtOutput += `// ${index-2} JUMP_IF_FALSE if (!stack[${pointer+1}]) JUMP_TO=${offset+index-2}\n`;
                break;
            case 2:
                var argCount = instruction[index++];
                pointer -= (argCount + 1);
                devirtOutput += `// ${index-1} CALL func.apply(thisArg, [${argCount} args]) → stack[${pointer}]\n`;
                break;
            case 3:
                var offset = instruction[index++];
                devirtOutput += `// ${index-2} JUMP → JUMP_TO=${offset+index-1}\n`;
                break;
            case 4:
                devirtOutput += `// ${index} TO_NUMBER stack[${pointer}] = +stack[${pointer}]\n`;
                break;
            case 5:
                pointer--;
                devirtOutput += `// ${index} STRICT_EQUAL stack[${pointer}] = stack[${pointer}] === stack[${pointer+1}]\n`;
                break;
            case 6:
                pointer++;
                var result = instruction[index++];
                devirtOutput += `// ${index-2} PUSH_CONST → stack[${pointer}] = ${JSON.stringify(result)}\n`;
                break;
            case 7:
                pointer++;
                var funcIndex = instruction[index++];
                devirtOutput += `// ${index-2} PUSH_FUNCTION → stack[${pointer}] = function[${funcIndex}]\n`;
                break;
            case 8:
                pointer--;
                devirtOutput += `// ${index} UNSIGNED_RIGHT_SHIFT stack[${pointer}] = stack[${pointer}] >>> stack[${pointer+1}]\n`;
                break;
            case 9:
                pointer--;
                devirtOutput += `// ${index} POP stack[${pointer+1}]\n`;
                break;
            case 10:
                var scopeIndex = instruction[index++];
                pointer--;
                devirtOutput += `// ${index-2} FOR_IN_SETUP scope[${scopeIndex}] = [Object.keys(stack[${pointer+1}]), stack[${pointer+1}]]\n`;
                break;
            case 11:
                pointer--;
                devirtOutput += `// ${index} LEFT_SHIFT stack[${pointer}] = stack[${pointer}] << stack[${pointer+1}]\n`;
                break;
            case 12:
                pointer--;
                devirtOutput += `// ${index} XOR stack[${pointer}] = stack[${pointer}] ^ stack[${pointer+1}]\n`;
                break;
            case 13:
                devirtOutput += `// ${index} NEGATE stack[${pointer}] = -stack[${pointer}]\n`;
                break;
            case 14:
                devirtOutput += `// ${index} TYPEOF stack[${pointer}] = typeof stack[${pointer}]\n`;
                break;
            case 15:
                var scopeIndex = instruction[index++];
                pointer--;
                devirtOutput += `// ${index-2} FOR_IN_NEXT stack[${pointer+2}][stack[${pointer+1}]] = next_key_from_scope[${scopeIndex}]; stack[${pointer}] = has_more\n`;
                break;
            case 16:
                devirtOutput += `// ${index} SET_PROP stack[${pointer-2}][stack[${pointer-1}]] = stack[${pointer}]\n`;
                pointer -= 3;
                break;
            case 17:
                pointer--;
                devirtOutput += `// ${index} DELETE_PROP stack[${pointer}] = delete stack[${pointer}][stack[${pointer+1}]\n`;
                break;
            case 18:
                pointer--;
                devirtOutput += `// ${index} POST_DEC stack[${pointer}] = stack[${pointer+1}][stack[${pointer+2}]]-- (old value)\n`;
                break;
            case 20:
                pointer--;
                var offset = instruction[index++];
                devirtOutput += `// ${index-2} JUMP_IF_FALSE_OR_POP if (stack[${pointer+1}]) POP else JUMP_TO=${offset+index-2}\n`;
                break;
            case 21:
                pointer++;
                devirtOutput += `// ${index} PUSH_SCOPE → stack[${pointer}] = scope\n`;
                break;
            case 22:
                pointer--;
                devirtOutput += `// ${index} MUL stack[${pointer}] = stack[${pointer}] * stack[${pointer+1}]\n`;
                break;
            case 23:
                pointer++;
                devirtOutput += `// ${index} PUSH_FALSE → stack[${pointer}] = false\n`;
                break;
            case 24:
                pointer--;
                devirtOutput += `// ${index} LESS_THAN stack[${pointer}] = stack[${pointer}] < stack[${pointer+1}]\n`;
                break;
            case 26:
                pointer--;
                var offset = instruction[index++];
                devirtOutput += `// ${index-2} JUMP_IF_TRUE_OR_POP if (stack[${pointer+1}]) JUMP_TO=${offset+index-2} else POP\n`;
                break;
            case 27:
                pointer--;
                devirtOutput += `// ${index} GREATER_EQUAL stack[${pointer}] = stack[${pointer}] >= stack[${pointer+1}]\n`;
                break;
            case 28:
                pointer--;
                devirtOutput += `// ${index} POST_INC stack[${pointer}] = stack[${pointer}][stack[${pointer+1}]]++ (old value)\n`;
                break;
            case 29:
                var offset = instruction[index++];
                pointer--;
                devirtOutput += `// ${index-2} SWITCH_CASE if (stack[${pointer}] === stack[${pointer+1}]) { POP; JUMP_TO=${offset+index-1} }\n`;
                break;
            case 30:
                pointer++;
                var globalIndex = instruction[index++];
                var deobstring = strings[globalIndex];
                devirtOutput += `// ${index-2} GET_GLOBAL → stack[${pointer}] = ${deobstring}\n`;
                break;
            case 32:
                pointer -= 2;
                var propIndex = instruction[index++];
                var deobstring = strings[propIndex];
                devirtOutput += `// ${index-2} SET_GLOBAL_PROP stack[${pointer+2}]["${deobstring}"] ← stack[${pointer+1}]\n`;
                break;
            case 33:
                pointer--;
                devirtOutput += `// ${index} EQUAL stack[${pointer}] = stack[${pointer}] == stack[${pointer+1}]\n`;
                break;
            case 34:
                pointer--;
                devirtOutput += `// ${index} BITWISE_OR stack[${pointer}] = stack[${pointer}] | stack[${pointer+1}]\n`;
                break;
            case 35:
                var propIndex = instruction[index++];
                var deobstring = strings[propIndex];
                devirtOutput += `// ${index-2} GET_PROP_NAME stack[${pointer}] ← stack[${pointer}]["${deobstring}"]\n`;
                break;
            case 36:
                pointer--;
                var propIndex = instruction[index++];
                var deobstring = strings[propIndex];
                devirtOutput += `// ${index-2} DEFINE_PROP Object.defineProperty(stack[${pointer}], "${deobstring}", stack[${pointer+1}])\n`;
                break;
            case 37:
                pointer++;
                var stringIndex = instruction[index++];
                var deobstring = strings[stringIndex];
                devirtOutput += `// ${index-2} PUSH_STRING → stack[${pointer}] = "${deobstring}"\n`;
                break;
            case 38:
                devirtOutput += `// ${index} NOT stack[${pointer}] = !stack[${pointer}]\n`;
                break;
            case 39:
                pointer++;
                devirtOutput += `// ${index} PUSH_UNDEFINED → stack[${pointer}] = undefined\n`;
                break;
            case 40:
                pointer++;
                devirtOutput += `// ${index} PUSH_NULL → stack[${pointer}] = null\n`;
                break;
            case 41:
                pointer--;
                devirtOutput += `// ${index} ADD stack[${pointer}] = stack[${pointer}] + stack[${pointer+1}]\n`;
                break;
            case 42:
                pointer--;
                devirtOutput += `// ${index} PRE_DEC stack[${pointer}] = --stack[${pointer+1}][stack[${pointer+2}]] (new value)\n`;
                break;
            case 43:
                pointer--;
                devirtOutput += `// ${index} IN stack[${pointer}] = stack[${pointer}] in stack[${pointer+1}]\n`;
                break;
            case 44:
                pointer--;
                devirtOutput += `// ${index} INSTANCEOF stack[${pointer}] = stack[${pointer}] instanceof stack[${pointer+1}]\n`;
                break;
            case 45:
                pointer--;
                devirtOutput += `// ${index} PRE_INC stack[${pointer}] = ++stack[${pointer+1}][stack[${pointer+2}]] (new value)\n`;
                break;
            case 47:
                pointer--;
                var depth = instruction[index++];
                var varIndex = instruction[index++];
                devirtOutput += `// ${index-2} SET_VAR scope[${depth}][${varIndex}] ← stack[${pointer+1}]\n`;
                break;
            case 48:
                devirtOutput += `// ${index} THROW stack[${pointer}]\n`;
                pointer--;
                break;
            case 49:
                pointer++;
                devirtOutput += `// ${index} NEW_OBJECT → stack[${pointer}] = {}\n`;
                break;
            case 50:
                pointer--;
                devirtOutput += `// ${index} NOT_EQUAL stack[${pointer}] = stack[${pointer}] != stack[${pointer+1}]\n`;
                break;
            case 51:
                var length = instruction[index++];
                pointer -= (length - 1);
                devirtOutput += `// ${index-1} NEW_ARRAY → stack[${pointer}] = [...top ${length} elements]\n`;
                break;
            case 52:
                pointer++;
                devirtOutput += `// ${index} DUP → stack[${pointer}] = stack[${pointer-1}]\n`;
                break;
            case 53:
                devirtOutput += `// ${index} SET_UNDEFINED stack[${pointer}] = undefined\n`;
                break;
            case 54:
                pointer--;
                devirtOutput += `// ${index} STRICT_NOT_EQUAL stack[${pointer}] = stack[${pointer}] !== stack[${pointer+1}]\n`;
                break;
            case 55:
                var depth = instruction[index++];
                var refIndex = instruction[index++];
                pointer += 2;
                devirtOutput += `// ${index-3} PUSH_SCOPE_REF → stack[${pointer-1}] = scope[${depth}], stack[${pointer}] = ${refIndex}\n`;
                break;
            case 57:
                var numberIndex = instruction[index++];
                var numberValue = +strings[numberIndex];
                pointer++;
                devirtOutput += `// ${index-2} PUSH_MAGIC_NUMBER → stack[${pointer}] = ${numberValue}\n`;
                break;
            case 58:
                devirtOutput += `// ${index} RETURN stack[${pointer}]\n`;
                pointer--;
                break;
            case 60:
                pointer--;
                devirtOutput += `// ${index} MOD stack[${pointer}] = stack[${pointer}] % stack[${pointer+1}]\n`;
                break;
            case 61:
                pointer++;
                devirtOutput += `// ${index} PUSH_TRUE → stack[${pointer}] = true\n`;
                break;
            case 62:
                var nameIndex = instruction[index++];
                var globalName = strings[nameIndex];
                pointer++;
                devirtOutput += `// ${index-2} TYPEOF_GLOBAL → stack[${pointer}] = typeof global["${globalName}"]\n`;
                break;
            case 63:
                pointer--;
                devirtOutput += `// ${index} BITWISE_AND stack[${pointer}] = stack[${pointer}] & stack[${pointer+1}]\n`;
                break;
            case 64:
                pointer--;
                devirtOutput += `// ${index} GREATER_THAN stack[${pointer}] = stack[${pointer}] > stack[${pointer+1}]\n`;
                break;
            case 65:
                pointer--;
                devirtOutput += `// ${index} GET_PROP stack[${pointer}] = stack[${pointer}][stack[${pointer+1}]]\n`;
                break;
            case 66:
                pointer++;
                var depth = instruction[index++];
                var varIndex = instruction[index++];
                devirtOutput += `// ${index-2} GET_VAR → stack[${pointer}] = scope[${depth}][${varIndex}]\n`;
                break;
            case 67:
                pointer--;
                devirtOutput += `// ${index} DIV stack[${pointer}] = stack[${pointer}] / stack[${pointer+1}]\n`;
                break;
            case 71:
                pointer -= 2;
                devirtOutput += `// ${index} SET_PROP_NO_POP stack[${pointer+1}][stack[${pointer+2}]] = stack[${pointer}] (keep value)\n`;
                break;
            case 72:
                pointer--;
                devirtOutput += `// ${index} RIGHT_SHIFT stack[${pointer}] = stack[${pointer}] >> stack[${pointer+1}]\n`;
                break;
            case 74:
                pointer--;
                devirtOutput += `// ${index} LESS_EQUAL stack[${pointer}] = stack[${pointer}] <= stack[${pointer+1}]\n`;
                break;
            case 75:
                var argCount = instruction[index++];
                pointer -= argCount;
                devirtOutput += `// ${index-1} FUNCTION_BIND_APPLY → stack[${pointer}] = new stack[${pointer+argCount}](${argCount} args)\n`;
                break;
            default:
                console.log(devirtOutput)
                throw new Error("Unknown opcode: " + opcode);
                exit()
        }
    }
}

function disassemble() {
    const start = performance.now();
    let result = fetchInstructions();
    
    for (const [index, instruction] of result.instructions.entries()) {
        var result_ = OpHandler(instruction, result.strings);
        if (instruction[0].length == 86) {
            console.log(index)
        }
        const path = `functions/vm${index}.js`;
        fs.writeFileSync(path, result_);
    }
    
    const end = performance.now();
    console.log(`disassemble took ${(end - start).toFixed(2)} ms`);
}

disassemble();