// 0 PUSH_FUNCTION → stack[0] = function[50]
// 3 SET_VAR scope[0][3] ← stack[0]
// 5 PUSH_FUNCTION → stack[0] = function[51]
// 8 SET_VAR scope[1][6] ← stack[0]
// 10 PUSH_FUNCTION → stack[0] = function[52]
// 13 SET_VAR scope[1][5] ← stack[0]
// 16 PUSH_UNDEFINED → stack[0] = undefined
// 17 GET_VAR → stack[1] = scope[1][2]
// 19 PUSH_CONST → stack[2] = 10
// 22 CALL func.apply(thisArg, [1 args]) → stack[0]
// 24 SET_VAR scope[1][3] ← stack[0]
// 26 PUSH_CONST → stack[0] = 0
// 29 SET_VAR scope[0][2] ← stack[0]
// 32 PUSH_UNDEFINED → stack[0] = undefined
// 33 GET_VAR → stack[1] = scope[1][1]
// 36 GET_VAR → stack[2] = scope[1][3]
// 39 PUSH_UNDEFINED → stack[3] = undefined
// 40 PUSH_UNDEFINED → stack[4] = undefined
// 41 GET_VAR → stack[5] = scope[1][6]
// 44 PUSH_UNDEFINED → stack[6] = undefined
// 45 PUSH_UNDEFINED → stack[7] = undefined
// 46 CALL func.apply(thisArg, [6 args]) → stack[0]
// 48 SET_VAR scope[1][4] ← stack[0]
// 51 PUSH_UNDEFINED → stack[0] = undefined
// 52 RETURN stack[0]
