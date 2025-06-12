// 0 GET_GLOBAL → stack[0] = Object
// 3 DUP → stack[1] = stack[0]
// 3 GET_PROP_NAME stack[1] ← stack[1]["getOwnPropertyNames"]
// 5 GET_GLOBAL → stack[2] = window
// 8 CALL func.apply(thisArg, [1 args]) → stack[0]
// 10 DUP → stack[1] = stack[0]
// 10 GET_PROP_NAME stack[1] ← stack[1]["some"]
// 12 PUSH_FUNCTION → stack[2] = function[48]
// 15 CALL func.apply(thisArg, [1 args]) → stack[0]
// 17 SET_VAR scope[1][2] ← stack[0]
// 20 PUSH_UNDEFINED → stack[0] = undefined
// 21 RETURN stack[0]
