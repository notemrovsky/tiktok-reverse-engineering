// 0 GET_GLOBAL → stack[0] = navigator
// 2 GET_PROP_NAME stack[0] ← stack[0]["permissions"]
// 5 DUP → stack[1] = stack[0]
// 5 GET_PROP_NAME stack[1] ← stack[1]["query"]
// 8 NEW_OBJECT → stack[2] = {}
// 9 GET_VAR → stack[3] = scope[0][2]
// 11 DEFINE_PROP Object.defineProperty(stack[2], "name", stack[3])
// 14 CALL func.apply(thisArg, [1 args]) → stack[0]
// 16 DUP → stack[1] = stack[0]
// 16 GET_PROP_NAME stack[1] ← stack[1]["then"]
// 18 PUSH_FUNCTION → stack[2] = function[27]
// 21 CALL func.apply(thisArg, [1 args]) → stack[0]
// 23 DUP → stack[1] = stack[0]
// 23 GET_PROP_NAME stack[1] ← stack[1]["catch"]
// 25 PUSH_FUNCTION → stack[2] = function[28]
// 28 CALL func.apply(thisArg, [1 args]) → stack[0]
// 30 RETURN stack[0]
