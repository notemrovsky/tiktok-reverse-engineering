// 0 PUSH_FUNCTION → stack[0] = function[191]
// 3 SET_VAR scope[0][3] ← stack[0]
// 6 PUSH_NULL → stack[0] = null
// 7 SET_VAR scope[0][2] ← stack[0]
// 10 PUSH_UNDEFINED → stack[0] = undefined
// 11 GET_VAR → stack[1] = scope[1][1]
// 13 PUSH_CONST → stack[2] = 10
// 16 CALL func.apply(thisArg, [1 args]) → stack[0]
// 18 SET_VAR scope[1][3] ← stack[0]
// 21 PUSH_UNDEFINED → stack[0] = undefined
// 22 GET_VAR → stack[1] = scope[1][0]
// 25 GET_VAR → stack[2] = scope[1][3]
// 28 GET_VAR → stack[3] = scope[0][3]
// 31 PUSH_UNDEFINED → stack[4] = undefined
// 32 PUSH_UNDEFINED → stack[5] = undefined
// 33 PUSH_UNDEFINED → stack[6] = undefined
// 34 PUSH_UNDEFINED → stack[7] = undefined
// 35 CALL func.apply(thisArg, [6 args]) → stack[0]
// 37 SET_VAR scope[1][4] ← stack[0]
// 40 PUSH_UNDEFINED → stack[0] = undefined
// 41 RETURN stack[0]
