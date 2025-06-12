// 0 GET_GLOBAL → stack[0] = Uint8Array
// 2 PUSH_CONST → stack[1] = 3
// 5 FUNCTION_BIND_APPLY → stack[0] = new stack[1](1 args)
// 7 SET_VAR scope[0][4] ← stack[0]
// 10 GET_VAR → stack[0] = scope[0][4]
// 13 GET_VAR → stack[1] = scope[0][2]
// 15 PUSH_CONST → stack[2] = 256
// 18 DIV stack[1] = stack[1] / stack[2]
// 18 SET_GLOBAL_PROP stack[1]["0"] ← stack[0]
// 21 GET_VAR → stack[0] = scope[0][4]
// 24 GET_VAR → stack[1] = scope[0][2]
// 26 PUSH_CONST → stack[2] = 256
// 29 MOD stack[1] = stack[1] % stack[2]
// 29 SET_GLOBAL_PROP stack[1]["1"] ← stack[0]
// 32 GET_VAR → stack[0] = scope[0][4]
// 35 GET_VAR → stack[1] = scope[0][3]
// 37 PUSH_CONST → stack[2] = 256
// 40 MOD stack[1] = stack[1] % stack[2]
// 40 SET_GLOBAL_PROP stack[1]["2"] ← stack[0]
// 42 GET_GLOBAL → stack[0] = String
// 44 GET_PROP_NAME stack[0] ← stack[0]["fromCharCode"]
// 47 DUP → stack[1] = stack[0]
// 47 GET_PROP_NAME stack[1] ← stack[1]["apply"]
// 50 PUSH_NULL → stack[2] = null
// 51 GET_VAR → stack[3] = scope[0][4]
// 54 CALL func.apply(thisArg, [2 args]) → stack[0]
// 56 RETURN stack[0]
