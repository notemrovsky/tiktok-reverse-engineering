// 1 PUSH_UNDEFINED → stack[0] = undefined
// 2 GET_VAR → stack[1] = scope[3][7]
// 5 GET_VAR → stack[2] = scope[1][6]
// 8 GET_VAR → stack[3] = scope[1][5]
// 11 NEW_OBJECT → stack[4] = {}
// 12 PUSH_TRUE → stack[5] = true
// 13 CALL func.apply(thisArg, [4 args]) → stack[0]
// 15 RETURN stack[0]
