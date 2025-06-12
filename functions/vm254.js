// 1 GET_VAR → stack[0] = scope[1][2]
// 3 PUSH_CONST → stack[1] = 0
// 6 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 6 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=103
// 8 PUSH_CONST → stack[0] = 1
// 11 NEGATE stack[0] = -stack[0]
// 12 SET_VAR scope[1][2] ← stack[0]
// 14 GET_GLOBAL → stack[0] = RegExp
// 16 PUSH_STRING → stack[1] = "chrome\/\d+\."
// 18 PUSH_STRING → stack[2] = "gi"
// 21 FUNCTION_BIND_APPLY → stack[0] = new stack[2](2 args)
// 23 SET_VAR scope[0][2] ← stack[0]
// 25 GET_GLOBAL → stack[0] = navigator
// 27 GET_PROP_NAME stack[0] ← stack[0]["userAgent"]
// 30 DUP → stack[1] = stack[0]
// 30 GET_PROP_NAME stack[1] ← stack[1]["toLowerCase"]
// 33 CALL func.apply(thisArg, [0 args]) → stack[0]
// 35 SET_VAR scope[0][3] ← stack[0]
// 38 GET_VAR → stack[0] = scope[0][3]
// 41 DUP → stack[1] = stack[0]
// 41 GET_PROP_NAME stack[1] ← stack[1]["match"]
// 44 GET_VAR → stack[2] = scope[0][2]
// 47 CALL func.apply(thisArg, [1 args]) → stack[0]
// 49 SET_VAR scope[0][4] ← stack[0]
// 52 GET_VAR → stack[0] = scope[0][4]
// 54 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=103
// 57 GET_VAR → stack[0] = scope[0][4]
// 59 GET_PROP_NAME stack[0] ← stack[0]["0"]
// 62 DUP → stack[1] = stack[0]
// 62 GET_PROP_NAME stack[1] ← stack[1]["replace"]
// 64 PUSH_STRING → stack[2] = "chrome/"
// 66 PUSH_STRING → stack[3] = ""
// 69 CALL func.apply(thisArg, [2 args]) → stack[0]
// 71 DUP → stack[1] = stack[0]
// 71 GET_PROP_NAME stack[1] ← stack[1]["replace"]
// 73 PUSH_STRING → stack[2] = "."
// 75 PUSH_STRING → stack[3] = ""
// 78 CALL func.apply(thisArg, [2 args]) → stack[0]
// 80 SET_VAR scope[0][5] ← stack[0]
// 83 PUSH_UNDEFINED → stack[0] = undefined
// 83 GET_GLOBAL → stack[1] = parseInt
// 86 GET_VAR → stack[2] = scope[0][5]
// 89 CALL func.apply(thisArg, [1 args]) → stack[0]
// 90 PUSH_CONST → stack[1] = 91
// 93 GREATER_EQUAL stack[0] = stack[0] >= stack[1]
// 93 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=98
// 95 PUSH_CONST → stack[0] = 1
// 98 SET_VAR scope[1][2] ← stack[0]
// 100 JUMP → JUMP_TO=104
// 103 SET_VAR scope[0][6] ← stack[-1]
// 106 GET_VAR → stack[-1] = scope[1][2]
// 108 PUSH_CONST → stack[0] = 1
// 111 STRICT_EQUAL stack[-1] = stack[-1] === stack[0]
// 111 JUMP_IF_FALSE if (!stack[-1]) JUMP_TO=113
// 114 PUSH_TRUE → stack[-1] = true
// 115 RETURN stack[-1]
// 116 PUSH_FALSE → stack[-1] = false
// 117 RETURN stack[-1]
