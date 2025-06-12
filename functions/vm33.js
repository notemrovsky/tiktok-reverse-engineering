// 1 GET_VAR → stack[0] = scope[3][2]
// 4 PUSH_UNDEFINED → stack[1] = undefined
// 5 GET_VAR → stack[2] = scope[1][3]
// 8 GET_VAR → stack[3] = scope[0][2]
// 11 CALL func.apply(thisArg, [1 args]) → stack[1]
// 12 SET_GLOBAL_PROP stack[1]["battery"] ← stack[0]
// 15 PUSH_UNDEFINED → stack[0] = undefined
// 16 RETURN stack[0]
