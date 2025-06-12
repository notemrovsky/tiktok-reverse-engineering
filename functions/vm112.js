// 1 PUSH_UNDEFINED → stack[0] = undefined
// 2 GET_VAR → stack[1] = scope[2][1]
// 5 GET_VAR → stack[2] = scope[0][2]
// 8 GET_VAR → stack[3] = scope[2][0]
// 11 CALL func.apply(thisArg, [2 args]) → stack[0]
// 13 POP stack[0]
// 14 PUSH_UNDEFINED → stack[0] = undefined
// 15 GET_VAR → stack[1] = scope[1][15]
// 18 GET_VAR → stack[2] = scope[1][7]
// 21 NEW_OBJECT → stack[3] = {}
// 21 GET_GLOBAL → stack[4] = Date
// 24 DUP → stack[5] = stack[4]
// 24 GET_PROP_NAME stack[5] ← stack[5]["now"]
// 27 CALL func.apply(thisArg, [0 args]) → stack[4]
// 28 DEFINE_PROP Object.defineProperty(stack[3], "d", stack[4])
// 31 CALL func.apply(thisArg, [2 args]) → stack[0]
// 33 POP stack[0]
// 34 PUSH_UNDEFINED → stack[0] = undefined
// 35 RETURN stack[0]
