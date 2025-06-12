// 0 GET_GLOBAL → stack[0] = String
// 3 DUP → stack[1] = stack[0]
// 3 GET_PROP_NAME stack[1] ← stack[1]["fromCharCode"]
// 6 GET_VAR → stack[2] = scope[0][2]
// 9 CALL func.apply(thisArg, [1 args]) → stack[0]
// 11 RETURN stack[0]
