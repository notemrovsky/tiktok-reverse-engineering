// 0 GET_GLOBAL → stack[0] = window
// 2 GET_PROP_NAME stack[0] ← stack[0]["location"]
// 5 DUP → stack[1] = stack[0]
// 5 GET_PROP_NAME stack[1] ← stack[1]["reload"]
// 8 CALL func.apply(thisArg, [0 args]) → stack[0]
// 10 RETURN stack[0]
