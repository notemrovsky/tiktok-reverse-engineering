// 1 PUSH_UNDEFINED → stack[0] = undefined
// 2 GET_VAR → stack[1] = scope[3][5]
// 5 GET_VAR → stack[2] = scope[2][2]
// 8 GET_VAR → stack[3] = scope[2][3]
// 11 GET_VAR → stack[4] = scope[2][4]
// 14 GET_VAR → stack[5] = scope[2][5]
// 17 CALL func.apply(thisArg, [4 args]) → stack[0]
// 19 POP stack[0]
// 20 PUSH_UNDEFINED → stack[0] = undefined
// 21 RETURN stack[0]
