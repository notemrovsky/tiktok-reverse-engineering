// 0 GET_GLOBAL → stack[0] = Array
// 3 DUP → stack[1] = stack[0]
// 3 GET_PROP_NAME stack[1] ← stack[1]["isArray"]
// 5 GET_GLOBAL → stack[2] = window
// 7 GET_PROP_NAME stack[2] ← stack[2]["_mssdk"]
// 10 CALL func.apply(thisArg, [1 args]) → stack[0]
// 12 NOT stack[0] = !stack[0]
// 12 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=18
// 14 GET_GLOBAL → stack[0] = window
// 17 NEW_ARRAY → stack[1] = [...top 0 elements]
// 18 SET_GLOBAL_PROP stack[1]["_mssdk"] ← stack[0]
// 20 GET_GLOBAL → stack[0] = window
// 22 GET_PROP_NAME stack[0] ← stack[0]["_mssdk"]
// 25 GET_VAR → stack[1] = scope[1][12]
// 27 SET_GLOBAL_PROP stack[1]["_sharedCache"] ← stack[0]
// 30 PUSH_UNDEFINED → stack[0] = undefined
// 31 GET_VAR → stack[1] = scope[1][14]
// 34 CALL func.apply(thisArg, [0 args]) → stack[0]
// 36 SET_VAR scope[0][2] ← stack[0]
// 39 GET_VAR → stack[0] = scope[0][2]
// 41 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=59
// 44 GET_VAR → stack[0] = scope[1][10]
// 47 GET_VAR → stack[1] = scope[0][2]
// 49 SET_GLOBAL_PROP stack[1]["msToken"] ← stack[0]
// 52 GET_VAR → stack[0] = scope[1][10]
// 55 GET_VAR → stack[1] = scope[1][11]
// 57 GET_PROP_NAME stack[1] ← stack[1]["asgw"]
// 59 SET_GLOBAL_PROP stack[1]["msStatus"] ← stack[0]
// 62 PUSH_UNDEFINED → stack[0] = undefined
// 62 GET_GLOBAL → stack[1] = setTimeout
// 64 PUSH_FUNCTION → stack[2] = function[1]
// 66 PUSH_CONST → stack[3] = 1000
// 69 CALL func.apply(thisArg, [2 args]) → stack[0]
// 71 POP stack[0]
// 72 PUSH_UNDEFINED → stack[0] = undefined
// 72 GET_GLOBAL → stack[1] = setTimeout
// 74 PUSH_FUNCTION → stack[2] = function[2]
// 76 PUSH_CONST → stack[3] = 3
// 78 PUSH_CONST → stack[4] = 1000
// 81 MUL stack[3] = stack[3] * stack[4]
// 82 CALL func.apply(thisArg, [2 args]) → stack[0]
// 84 POP stack[0]
// 85 PUSH_UNDEFINED → stack[0] = undefined
// 86 GET_VAR → stack[1] = scope[1][0]
// 89 CALL func.apply(thisArg, [0 args]) → stack[0]
// 91 POP stack[0]
// 92 PUSH_UNDEFINED → stack[0] = undefined
// 93 GET_VAR → stack[1] = scope[1][18]
// 95 PUSH_STRING → stack[2] = "/web/report"
// 97 PUSH_STRING → stack[3] = "/web/common"
// 100 NEW_ARRAY → stack[2] = [...top 2 elements]
// 102 CALL func.apply(thisArg, [1 args]) → stack[0]
// 104 POP stack[0]
// 105 PUSH_UNDEFINED → stack[0] = undefined
// 106 RETURN stack[0]
