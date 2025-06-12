// 0 GET_GLOBAL → stack[0] = window
// 2 GET_PROP_NAME stack[0] ← stack[0]["grecaptcha"]
// 4 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=10
// 6 GET_GLOBAL → stack[0] = window
// 8 GET_PROP_NAME stack[0] ← stack[0]["grecaptcha"]
// 10 GET_PROP_NAME stack[0] ← stack[0]["enterprise"]
// 12 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=28
// 14 GET_GLOBAL → stack[0] = window
// 16 GET_PROP_NAME stack[0] ← stack[0]["grecaptcha"]
// 18 GET_PROP_NAME stack[0] ← stack[0]["enterprise"]
// 21 DUP → stack[1] = stack[0]
// 21 GET_PROP_NAME stack[1] ← stack[1]["ready"]
// 23 PUSH_FUNCTION → stack[2] = function[92]
// 26 CALL func.apply(thisArg, [1 args]) → stack[0]
// 28 POP stack[0]
// 28 JUMP → JUMP_TO=38
// 31 PUSH_UNDEFINED → stack[0] = undefined
// 32 GET_VAR → stack[1] = scope[0][3]
// 34 PUSH_STRING → stack[2] = "not loaded"
// 37 CALL func.apply(thisArg, [1 args]) → stack[0]
// 39 POP stack[0]
// 40 PUSH_UNDEFINED → stack[0] = undefined
// 41 RETURN stack[0]
