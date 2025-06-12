// 1 PUSH_UNDEFINED → stack[0] = undefined
// 2 GET_VAR → stack[1] = scope[2][3]
// 5 GET_VAR → stack[2] = scope[0][2]
// 8 CALL func.apply(thisArg, [1 args]) → stack[0]
// 10 POP stack[0]
// 11 PUSH_UNDEFINED → stack[0] = undefined
// 12 RETURN stack[0]
