// 1 PUSH_UNDEFINED → stack[0] = undefined
// 2 GET_VAR → stack[1] = scope[1][4]
// 5 CALL func.apply(thisArg, [0 args]) → stack[0]
// 7 POP stack[0]
// 8 PUSH_UNDEFINED → stack[0] = undefined
// 9 GET_VAR → stack[1] = scope[1][5]
// 12 CALL func.apply(thisArg, [0 args]) → stack[0]
// 14 POP stack[0]
// 15 PUSH_UNDEFINED → stack[0] = undefined
// 16 GET_VAR → stack[1] = scope[1][6]
// 19 CALL func.apply(thisArg, [0 args]) → stack[0]
// 21 POP stack[0]
// 22 PUSH_UNDEFINED → stack[0] = undefined
// 23 RETURN stack[0]
