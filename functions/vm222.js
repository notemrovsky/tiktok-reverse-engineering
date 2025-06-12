// 0 GET_GLOBAL → stack[0] = Date
// 3 FUNCTION_BIND_APPLY → stack[0] = new stack[0](0 args)
// 5 DUP → stack[1] = stack[0]
// 5 GET_PROP_NAME stack[1] ← stack[1]["getTime"]
// 8 CALL func.apply(thisArg, [0 args]) → stack[0]
// 10 RETURN stack[0]
