// 1 GET_VAR → stack[0] = scope[1][4]
// 4 SET_VAR scope[1][3] ← stack[0]
// 7 PUSH_UNDEFINED → stack[0] = undefined
// 8 GET_VAR → stack[1] = scope[1][9]
// 11 GET_VAR → stack[2] = scope[1][2]
// 13 PUSH_CONST → stack[3] = 26
// 16 LEFT_SHIFT stack[2] = stack[2] << stack[3]
// 17 GET_VAR → stack[3] = scope[0][2]
// 19 PUSH_CONST → stack[4] = 6
// 22 UNSIGNED_RIGHT_SHIFT stack[3] = stack[3] >>> stack[4]
// 23 BITWISE_OR stack[2] = stack[2] | stack[3]
// 24 CALL func.apply(thisArg, [1 args]) → stack[0]
// 26 PUSH_UNDEFINED → stack[1] = undefined
// 27 GET_VAR → stack[2] = scope[1][8]
// 30 GET_VAR → stack[3] = scope[0][2]
// 33 CALL func.apply(thisArg, [1 args]) → stack[1]
// 35 ADD stack[0] = stack[0] + stack[1]
// 36 RETURN stack[0]
