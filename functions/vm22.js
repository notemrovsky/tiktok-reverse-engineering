// 1 GET_VAR → stack[0] = scope[3][7]
// 4 NOT stack[0] = !stack[0]
// 4 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=71
// 6 GET_GLOBAL → stack[0] = Error
// 8 PUSH_STRING → stack[1] = "test err"
// 11 FUNCTION_BIND_APPLY → stack[0] = new stack[1](1 args)
// 13 SET_VAR scope[0][2] ← stack[0]
// 16 GET_VAR → stack[0] = scope[0][2]
// 18 GET_PROP_NAME stack[0] ← stack[0]["stack"]
// 21 DUP → stack[1] = stack[0]
// 21 GET_PROP_NAME stack[1] ← stack[1]["toString"]
// 24 CALL func.apply(thisArg, [0 args]) → stack[0]
// 26 DUP → stack[1] = stack[0]
// 26 GET_PROP_NAME stack[1] ← stack[1]["includes"]
// 28 PUSH_STRING → stack[2] = "puppeteer"
// 31 CALL func.apply(thisArg, [1 args]) → stack[0]
// 32 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=40
// 34 GET_GLOBAL → stack[0] = window
// 36 GET_PROP_NAME stack[0] ← stack[0]["_mssdk"]
// 38 PUSH_CONST → stack[1] = 1
// 40 SET_GLOBAL_PROP stack[1]["pppt"] ← stack[0]
// 42 GET_GLOBAL → stack[0] = Date
// 45 FUNCTION_BIND_APPLY → stack[0] = new stack[0](0 args)
// 47 DUP → stack[1] = stack[0]
// 47 GET_PROP_NAME stack[1] ← stack[1]["getTime"]
// 50 CALL func.apply(thisArg, [0 args]) → stack[0]
// 52 SET_VAR scope[0][3] ← stack[0]
// 55 GET_VAR → stack[0] = scope[0][3]
// 58 GET_VAR → stack[1] = scope[3][8]
// 61 SUB stack[0] = stack[0] - stack[1]
// 61 PUSH_CONST → stack[1] = 3
// 63 PUSH_CONST → stack[2] = 1000
// 66 MUL stack[1] = stack[1] * stack[2]
// 67 GREATER_THAN stack[0] = stack[0] > stack[1]
// 67 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=71
// 70 PUSH_TRUE → stack[0] = true
// 71 SET_VAR scope[3][7] ← stack[0]
// 74 GET_VAR → stack[0] = scope[1][2]
// 77 DUP → stack[1] = stack[0]
// 77 GET_PROP_NAME stack[1] ← stack[1]["apply"]
// 80 PUSH_SCOPE → stack[2] = scope
// 81 GET_VAR → stack[3] = scope[0][1]
// 84 CALL func.apply(thisArg, [2 args]) → stack[0]
// 86 RETURN stack[0]
