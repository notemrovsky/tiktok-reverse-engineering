// 1 GET_VAR → stack[0] = scope[1][5]
// 4 SET_VAR scope[1][3] ← stack[0]
// 7 GET_VAR → stack[0] = scope[0][2]
// 10 SET_VAR scope[1][2] ← stack[0]
// 13 PUSH_UNDEFINED → stack[0] = undefined
// 14 GET_VAR → stack[1] = scope[1][9]
// 17 GET_VAR → stack[2] = scope[0][2]
// 19 PUSH_CONST → stack[3] = 2
// 22 RIGHT_SHIFT stack[2] = stack[2] >> stack[3]
// 23 CALL func.apply(thisArg, [1 args]) → stack[0]
// 25 RETURN stack[0]
