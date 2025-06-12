// 0 PUSH_CONST → stack[0] = 1664525
// 3 SET_VAR scope[0][3] ← stack[0]
// 5 PUSH_CONST → stack[0] = 1013904223
// 8 SET_VAR scope[0][4] ← stack[0]
// 10 GET_GLOBAL → stack[0] = Math
// 13 DUP → stack[1] = stack[0]
// 13 GET_PROP_NAME stack[1] ← stack[1]["pow"]
// 15 PUSH_CONST → stack[2] = 2
// 17 PUSH_CONST → stack[3] = 32
// 20 CALL func.apply(thisArg, [2 args]) → stack[0]
// 22 SET_VAR scope[0][5] ← stack[0]
// 24 PUSH_FUNCTION → stack[0] = function[252]
// 27 RETURN stack[0]
