// 1 PUSH_UNDEFINED → stack[0] = undefined
// 2 GET_VAR → stack[1] = scope[1][3]
// 5 GET_VAR → stack[2] = scope[0][2]
// 8 CALL func.apply(thisArg, [1 args]) → stack[0]
// 10 PUSH_UNDEFINED → stack[1] = undefined
// 11 GET_VAR → stack[2] = scope[1][3]
// 14 GET_VAR → stack[3] = scope[0][3]
// 17 CALL func.apply(thisArg, [1 args]) → stack[1]
// 19 ADD stack[0] = stack[0] + stack[1]
// 20 GET_VAR → stack[1] = scope[0][4]
// 23 ADD stack[0] = stack[0] + stack[1]
// 24 RETURN stack[0]
