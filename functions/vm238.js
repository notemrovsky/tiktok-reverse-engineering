// 1 GET_VAR → stack[0] = scope[1][6]
// 4 SET_VAR scope[1][3] ← stack[0]
// 7 GET_VAR → stack[0] = scope[1][2]
// 9 PUSH_CONST → stack[1] = 28
// 12 LEFT_SHIFT stack[0] = stack[0] << stack[1]
// 13 GET_VAR → stack[1] = scope[0][2]
// 15 PUSH_CONST → stack[2] = 4
// 18 UNSIGNED_RIGHT_SHIFT stack[1] = stack[1] >>> stack[2]
// 19 BITWISE_OR stack[0] = stack[0] | stack[1]
// 20 SET_VAR scope[0][3] ← stack[0]
// 23 GET_VAR → stack[0] = scope[0][2]
// 26 SET_VAR scope[1][2] ← stack[0]
// 29 PUSH_UNDEFINED → stack[0] = undefined
// 30 GET_VAR → stack[1] = scope[1][9]
// 33 GET_VAR → stack[2] = scope[0][3]
// 36 CALL func.apply(thisArg, [1 args]) → stack[0]
// 38 RETURN stack[0]
