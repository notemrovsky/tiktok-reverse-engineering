// 0 GET_GLOBAL → stack[0] = window
// 2 GET_PROP_NAME stack[0] ← stack[0]["grecaptcha"]
// 4 GET_PROP_NAME stack[0] ← stack[0]["enterprise"]
// 7 DUP → stack[1] = stack[0]
// 7 GET_PROP_NAME stack[1] ← stack[1]["execute"]
// 10 GET_VAR → stack[2] = scope[2][2]
// 13 NEW_OBJECT → stack[3] = {}
// 14 GET_VAR → stack[4] = scope[2][3]
// 16 DEFINE_PROP Object.defineProperty(stack[3], "action", stack[4])
// 19 CALL func.apply(thisArg, [2 args]) → stack[0]
// 21 DUP → stack[1] = stack[0]
// 21 GET_PROP_NAME stack[1] ← stack[1]["then"]
// 23 PUSH_FUNCTION → stack[2] = function[93]
// 26 CALL func.apply(thisArg, [1 args]) → stack[0]
// 28 DUP → stack[1] = stack[0]
// 28 GET_PROP_NAME stack[1] ← stack[1]["catch"]
// 30 PUSH_FUNCTION → stack[2] = function[94]
// 33 CALL func.apply(thisArg, [1 args]) → stack[0]
// 35 POP stack[0]
// 36 PUSH_UNDEFINED → stack[0] = undefined
// 37 RETURN stack[0]
