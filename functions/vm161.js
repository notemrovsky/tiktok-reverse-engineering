// 1 NEW_OBJECT → stack[0] = {}
// 1 GET_GLOBAL → stack[1] = eval
// 4 DUP → stack[2] = stack[1]
// 4 GET_PROP_NAME stack[2] ← stack[2]["toString"]
// 7 CALL func.apply(thisArg, [0 args]) → stack[1]
// 8 GET_PROP_NAME stack[1] ← stack[1]["length"]
// 10 DEFINE_PROP Object.defineProperty(stack[0], "data", stack[1])
// 13 RETURN stack[0]
