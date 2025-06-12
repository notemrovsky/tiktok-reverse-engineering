// 1 PUSH_UNDEFINED → stack[0] = undefined
// 2 GET_VAR → stack[1] = scope[2][22]
// 5 GET_VAR → stack[2] = scope[0][2]
// 8 CALL func.apply(thisArg, [1 args]) → stack[0]
// 10 SET_VAR scope[0][3] ← stack[0]
// 13 PUSH_UNDEFINED → stack[0] = undefined
// 14 GET_VAR → stack[1] = scope[2][8]
// 17 GET_VAR → stack[2] = scope[0][3]
// 20 GET_VAR → stack[3] = scope[2][9]
// 22 GET_PROP_NAME stack[3] ← stack[3]["json"]
// 24 PUSH_STRING → stack[4] = "s1"
// 27 CALL func.apply(thisArg, [3 args]) → stack[0]
// 29 SET_VAR scope[0][4] ← stack[0]
// 32 PUSH_UNDEFINED → stack[0] = undefined
// 33 GET_VAR → stack[1] = scope[2][10]
// 36 GET_VAR → stack[2] = scope[2][11]
// 38 GET_PROP_NAME stack[2] ← stack[2]["WEB_DEVICE_INFO"]
// 41 GET_VAR → stack[3] = scope[0][4]
// 44 CALL func.apply(thisArg, [2 args]) → stack[0]
// 46 SET_VAR scope[0][5] ← stack[0]
// 49 GET_VAR → stack[0] = scope[1][10]
// 51 GET_PROP_NAME stack[0] ← stack[0]["regionConf"]
// 53 GET_PROP_NAME stack[0] ← stack[0]["reportUrls"]
// 56 SET_VAR scope[0][6] ← stack[0]
// 59 GET_VAR → stack[0] = scope[1][3]
// 61 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=74
// 64 GET_VAR → stack[0] = scope[1][3]
// 67 DUP → stack[1] = stack[0]
// 67 GET_PROP_NAME stack[1] ← stack[1]["then"]
// 69 PUSH_FUNCTION → stack[2] = function[41]
// 72 CALL func.apply(thisArg, [1 args]) → stack[0]
// 74 POP stack[0]
// 74 JUMP → JUMP_TO=90
// 77 PUSH_UNDEFINED → stack[0] = undefined
// 78 GET_VAR → stack[1] = scope[2][7]
// 81 GET_VAR → stack[2] = scope[0][6]
// 84 GET_VAR → stack[3] = scope[0][5]
// 87 NEW_OBJECT → stack[4] = {}
// 88 PUSH_TRUE → stack[5] = true
// 89 CALL func.apply(thisArg, [4 args]) → stack[0]
// 91 POP stack[0]
// 92 PUSH_TRUE → stack[0] = true
// 93 SET_VAR scope[1][12] ← stack[0]
// 96 PUSH_UNDEFINED → stack[0] = undefined
// 97 RETURN stack[0]
