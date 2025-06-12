// 1 PUSH_UNDEFINED → stack[0] = undefined
// 2 GET_VAR → stack[1] = scope[3][4]
// 5 GET_VAR → stack[2] = scope[2][2]
// 8 GET_VAR → stack[3] = scope[2][3]
// 11 GET_VAR → stack[4] = scope[2][4]
// 14 CALL func.apply(thisArg, [3 args]) → stack[0]
// 16 POP stack[0]
// 17 PUSH_UNDEFINED → stack[0] = undefined
// 18 RETURN stack[0]
