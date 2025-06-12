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
// 29 GET_GLOBAL → stack[0] = RegExp
// 31 PUSH_STRING → stack[1] = "^https?:\/\/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})"
// 34 FUNCTION_BIND_APPLY → stack[0] = new stack[1](1 args)
// 36 SET_VAR scope[0][3] ← stack[0]
// 38 GET_GLOBAL → stack[0] = window
// 40 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=44
// 42 GET_GLOBAL → stack[0] = window
// 44 GET_PROP_NAME stack[0] ← stack[0]["location"]
// 46 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=52
// 48 GET_GLOBAL → stack[0] = window
// 50 GET_PROP_NAME stack[0] ← stack[0]["location"]
// 52 GET_PROP_NAME stack[0] ← stack[0]["href"]
// 54 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=108
// 56 GET_GLOBAL → stack[0] = window
// 58 GET_PROP_NAME stack[0] ← stack[0]["location"]
// 60 GET_PROP_NAME stack[0] ← stack[0]["href"]
// 63 SET_VAR scope[0][4] ← stack[0]
// 66 GET_VAR → stack[0] = scope[0][4]
// 69 DUP → stack[1] = stack[0]
// 69 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 71 PUSH_STRING → stack[2] = "file"
// 74 CALL func.apply(thisArg, [1 args]) → stack[0]
// 75 PUSH_CONST → stack[1] = 0
// 78 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 78 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=91 else POP
// 81 GET_VAR → stack[0] = scope[0][4]
// 84 DUP → stack[1] = stack[0]
// 84 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 86 PUSH_STRING → stack[2] = "http://localhost"
// 89 CALL func.apply(thisArg, [1 args]) → stack[0]
// 90 PUSH_CONST → stack[1] = 0
// 93 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 93 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=104 else POP
// 96 GET_VAR → stack[0] = scope[0][3]
// 99 DUP → stack[1] = stack[0]
// 99 GET_PROP_NAME stack[1] ← stack[1]["test"]
// 102 GET_VAR → stack[2] = scope[0][4]
// 105 CALL func.apply(thisArg, [1 args]) → stack[0]
// 106 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=108
// 109 PUSH_TRUE → stack[0] = true
// 110 RETURN stack[0]
// 111 PUSH_FALSE → stack[0] = false
// 112 RETURN stack[0]
