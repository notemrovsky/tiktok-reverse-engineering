// 1 GET_VAR → stack[0] = scope[0][1]
// 3 GET_PROP_NAME stack[0] ← stack[0]["length"]
// 5 PUSH_CONST → stack[1] = 0
// 8 GREATER_THAN stack[0] = stack[0] > stack[1]
// 8 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=15
// 11 GET_VAR → stack[0] = scope[0][1]
// 13 GET_PROP_NAME stack[0] ← stack[0]["0"]
// 16 PUSH_UNDEFINED → stack[1] = undefined
// 17 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 17 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=24
// 20 GET_VAR → stack[0] = scope[0][1]
// 22 GET_PROP_NAME stack[0] ← stack[0]["0"]
// 24 JUMP → JUMP_TO=26
// 27 PUSH_FALSE → stack[1] = false
// 28 SET_VAR scope[0][2] ← stack[1]
// 31 PUSH_UNDEFINED → stack[1] = undefined
// 32 GET_VAR → stack[2] = scope[2][5]
// 35 GET_VAR → stack[3] = scope[0][2]
// 38 CALL func.apply(thisArg, [1 args]) → stack[1]
// 40 SET_VAR scope[0][3] ← stack[1]
// 43 GET_VAR → stack[1] = scope[0][3]
// 45 GET_PROP_NAME stack[1] ← stack[1]["data"]
// 47 GET_PROP_NAME stack[1] ← stack[1]["webglData"]
// 50 SET_VAR scope[0][4] ← stack[1]
// 53 NEW_OBJECT → stack[1] = {}
// 54 GET_VAR → stack[2] = scope[0][4]
// 56 DEFINE_PROP Object.defineProperty(stack[1], "data", stack[2])
// 59 RETURN stack[1]
