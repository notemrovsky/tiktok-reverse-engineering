// 0 GET_GLOBAL → stack[0] = navigator
// 2 GET_PROP_NAME stack[0] ← stack[0]["userAgent"]
// 5 DUP → stack[1] = stack[0]
// 5 GET_PROP_NAME stack[1] ← stack[1]["toLowerCase"]
// 8 CALL func.apply(thisArg, [0 args]) → stack[0]
// 10 SET_VAR scope[0][2] ← stack[0]
// 13 GET_VAR → stack[0] = scope[0][2]
// 16 DUP → stack[1] = stack[0]
// 16 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 18 PUSH_STRING → stack[2] = "electron"
// 21 CALL func.apply(thisArg, [1 args]) → stack[0]
// 22 PUSH_CONST → stack[1] = 0
// 25 GREATER_EQUAL stack[0] = stack[0] >= stack[1]
// 25 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=27
// 28 PUSH_FALSE → stack[0] = false
// 29 RETURN stack[0]
// 29 TYPEOF_GLOBAL → stack[0] = typeof global["global"]
// 31 PUSH_STRING → stack[1] = "undefined"
// 34 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 34 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=52
// 36 GET_GLOBAL → stack[0] = Object
// 38 GET_PROP_NAME stack[0] ← stack[0]["prototype"]
// 40 GET_PROP_NAME stack[0] ← stack[0]["toString"]
// 43 DUP → stack[1] = stack[0]
// 43 GET_PROP_NAME stack[1] ← stack[1]["call"]
// 45 GET_GLOBAL → stack[2] = global
// 47 GET_PROP_NAME stack[2] ← stack[2]["process"]
// 50 CALL func.apply(thisArg, [1 args]) → stack[0]
// 51 PUSH_STRING → stack[1] = "[object process]"
// 54 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 54 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=85 else POP
// 56 TYPEOF_GLOBAL → stack[0] = typeof global["process"]
// 58 PUSH_STRING → stack[1] = "undefined"
// 61 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 61 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=65
// 63 PUSH_STRING → stack[0] = "undefined"
// 65 JUMP → JUMP_TO=74
// 68 PUSH_UNDEFINED → stack[1] = undefined
// 69 GET_VAR → stack[2] = scope[2][0]
// 71 GET_GLOBAL → stack[3] = process
// 74 CALL func.apply(thisArg, [1 args]) → stack[1]
// 75 PUSH_STRING → stack[2] = "object"
// 78 STRICT_EQUAL stack[1] = stack[1] === stack[2]
// 78 JUMP_IF_FALSE_OR_POP if (stack[1]) POP else JUMP_TO=85
// 80 GET_GLOBAL → stack[1] = process
// 82 GET_PROP_NAME stack[1] ← stack[1]["title"]
// 84 PUSH_STRING → stack[2] = "node"
// 87 STRICT_EQUAL stack[1] = stack[1] === stack[2]
// 88 RETURN stack[1]
