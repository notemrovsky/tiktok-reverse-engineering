// 0 PUSH_FUNCTION → stack[0] = function[21]
// 3 SET_VAR scope[0][2] ← stack[0]
// 6 GET_VAR → stack[0] = scope[1][6]
// 8 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=10
// 11 PUSH_UNDEFINED → stack[0] = undefined
// 12 RETURN stack[0]
// 13 PUSH_TRUE → stack[0] = true
// 14 SET_VAR scope[1][6] ← stack[0]
// 16 GET_GLOBAL → stack[0] = Date
// 19 FUNCTION_BIND_APPLY → stack[0] = new stack[0](0 args)
// 21 DUP → stack[1] = stack[0]
// 21 GET_PROP_NAME stack[1] ← stack[1]["getTime"]
// 24 CALL func.apply(thisArg, [0 args]) → stack[0]
// 26 SET_VAR scope[1][8] ← stack[0]
// 28 GET_GLOBAL → stack[0] = window
// 30 GET_PROP_NAME stack[0] ← stack[0]["_mssdk"]
// 32 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=39
// 34 GET_GLOBAL → stack[0] = window
// 36 GET_PROP_NAME stack[0] ← stack[0]["_mssdk"]
// 38 GET_PROP_NAME stack[0] ← stack[0]["pppt"]
// 41 NOT stack[0] = !stack[0]
// 41 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=49
// 43 GET_GLOBAL → stack[0] = window
// 45 GET_PROP_NAME stack[0] ← stack[0]["_mssdk"]
// 47 PUSH_CONST → stack[1] = 2
// 49 SET_GLOBAL_PROP stack[1]["pppt"] ← stack[0]
// 51 GET_GLOBAL → stack[0] = document
// 53 GET_PROP_NAME stack[0] ← stack[0]["querySelector"]
// 56 SET_VAR scope[1][4] ← stack[0]
// 58 GET_GLOBAL → stack[0] = document
// 61 PUSH_UNDEFINED → stack[1] = undefined
// 62 GET_VAR → stack[2] = scope[0][2]
// 65 GET_VAR → stack[3] = scope[1][4]
// 68 CALL func.apply(thisArg, [1 args]) → stack[1]
// 69 SET_GLOBAL_PROP stack[1]["querySelector"] ← stack[0]
// 71 GET_GLOBAL → stack[0] = document
// 73 GET_PROP_NAME stack[0] ← stack[0]["evaluate"]
// 76 SET_VAR scope[1][5] ← stack[0]
// 78 GET_GLOBAL → stack[0] = document
// 81 PUSH_UNDEFINED → stack[1] = undefined
// 82 GET_VAR → stack[2] = scope[0][2]
// 85 GET_VAR → stack[3] = scope[1][5]
// 88 CALL func.apply(thisArg, [1 args]) → stack[1]
// 89 SET_GLOBAL_PROP stack[1]["evaluate"] ← stack[0]
// 92 PUSH_UNDEFINED → stack[0] = undefined
// 93 RETURN stack[0]
