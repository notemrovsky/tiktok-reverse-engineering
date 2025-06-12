// 1 PUSH_UNDEFINED → stack[0] = undefined
// 2 GET_VAR → stack[1] = scope[2][7]
// 5 GET_VAR → stack[2] = scope[0][2]
// 8 GET_VAR → stack[3] = scope[0][3]
// 11 CALL func.apply(thisArg, [2 args]) → stack[0]
// 13 RETURN stack[0]
