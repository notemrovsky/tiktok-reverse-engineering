// 0 GET_GLOBAL → stack[0] = ArrayBuffer
// 2 PUSH_CONST → stack[1] = 4
// 5 FUNCTION_BIND_APPLY → stack[0] = new stack[1](1 args)
// 7 SET_VAR scope[0][3] ← stack[0]
// 9 GET_GLOBAL → stack[0] = DataView
// 12 GET_VAR → stack[1] = scope[0][3]
// 15 FUNCTION_BIND_APPLY → stack[0] = new stack[1](1 args)
// 17 SET_VAR scope[0][4] ← stack[0]
// 20 GET_VAR → stack[0] = scope[0][4]
// 23 DUP → stack[1] = stack[0]
// 23 GET_PROP_NAME stack[1] ← stack[1]["setUint32"]
// 25 PUSH_CONST → stack[2] = 0
// 28 GET_VAR → stack[3] = scope[0][2]
// 31 PUSH_FALSE → stack[4] = false
// 32 CALL func.apply(thisArg, [3 args]) → stack[0]
// 34 POP stack[0]
// 34 GET_GLOBAL → stack[0] = Uint8Array
// 37 GET_VAR → stack[1] = scope[0][3]
// 40 FUNCTION_BIND_APPLY → stack[0] = new stack[1](1 args)
// 42 RETURN stack[0]
