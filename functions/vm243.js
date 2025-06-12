// 1 NEW_OBJECT → stack[0] = {}
// 2 PUSH_UNDEFINED → stack[1] = undefined
// 3 GET_VAR → stack[2] = scope[1][3]
// 6 GET_VAR → stack[3] = scope[2][0]
// 8 GET_PROP_NAME stack[3] ← stack[3]["kWebsocket"]
// 11 GET_VAR → stack[4] = scope[2][1]
// 13 GET_PROP_NAME stack[4] ← stack[4]["initialized"]
// 16 GET_VAR → stack[5] = scope[0][2]
// 19 PUSH_NULL → stack[6] = null
// 19 PUSH_SCOPE_REF → stack[7] = scope[0], stack[8] = 3
// 23 SET_PROP_NO_POP stack[7][stack[8]] = stack[6] (keep value)
// 24 GET_VAR → stack[7] = scope[0][4]
// 27 CALL func.apply(thisArg, [5 args]) → stack[1]
// 28 DEFINE_PROP Object.defineProperty(stack[0], "X-Bogus", stack[1])
// 31 RETURN stack[0]
