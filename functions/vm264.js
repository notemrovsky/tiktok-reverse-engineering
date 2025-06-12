// 1 PUSH_FALSE → stack[0] = false
// 2 SET_VAR scope[0][2] ← stack[0]
// 5 PUSH_UNDEFINED → stack[0] = undefined
// 6 GET_VAR → stack[1] = scope[2][2]
// 9 CALL func.apply(thisArg, [0 args]) → stack[0]
// 10 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=29
// 12 GET_GLOBAL → stack[0] = indexedDB
// 15 DUP → stack[1] = stack[0]
// 15 GET_PROP_NAME stack[1] ← stack[1]["open"]
// 17 PUSH_STRING → stack[2] = "test"
// 20 CALL func.apply(thisArg, [1 args]) → stack[0]
// 22 SET_VAR scope[0][3] ← stack[0]
// 25 GET_VAR → stack[0] = scope[0][3]
// 27 PUSH_FUNCTION → stack[1] = function[265]
// 29 SET_GLOBAL_PROP stack[1]["onerror"] ← stack[0]
// 32 PUSH_UNDEFINED → stack[0] = undefined
// 33 GET_VAR → stack[1] = scope[2][0]
// 36 CALL func.apply(thisArg, [0 args]) → stack[0]
// 37 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=95
// 39 GET_GLOBAL → stack[0] = window
// 41 GET_PROP_NAME stack[0] ← stack[0]["sessionStorage"]
// 44 DUP → stack[1] = stack[0]
// 44 GET_PROP_NAME stack[1] ← stack[1]["setItem"]
// 46 PUSH_STRING → stack[2] = "someKeyHereByted"
// 48 PUSH_STRING → stack[3] = ""
// 51 CALL func.apply(thisArg, [2 args]) → stack[0]
// 53 POP stack[0]
// 53 GET_GLOBAL → stack[0] = window
// 55 GET_PROP_NAME stack[0] ← stack[0]["sessionStorage"]
// 58 DUP → stack[1] = stack[0]
// 58 GET_PROP_NAME stack[1] ← stack[1]["removeItem"]
// 60 PUSH_STRING → stack[2] = "someKeyHereByted"
// 63 CALL func.apply(thisArg, [1 args]) → stack[0]
// 65 POP stack[0]
// 65 JUMP → JUMP_TO=96
// 68 SET_VAR scope[0][4] ← stack[-1]
// 71 GET_VAR → stack[-1] = scope[0][4]
// 73 GET_PROP_NAME stack[-1] ← stack[-1]["code"]
// 75 GET_GLOBAL → stack[0] = DOMException
// 77 GET_PROP_NAME stack[0] ← stack[0]["QUOTA_EXCEEDED_ERR"]
// 80 STRICT_EQUAL stack[-1] = stack[-1] === stack[0]
// 80 JUMP_IF_FALSE_OR_POP if (stack[-1]) POP else JUMP_TO=89
// 82 GET_GLOBAL → stack[-1] = window
// 84 GET_PROP_NAME stack[-1] ← stack[-1]["sessionStorage"]
// 86 GET_PROP_NAME stack[-1] ← stack[-1]["length"]
// 88 PUSH_CONST → stack[0] = 0
// 91 STRICT_EQUAL stack[-1] = stack[-1] === stack[0]
// 91 JUMP_IF_FALSE if (!stack[-1]) JUMP_TO=95
// 94 PUSH_TRUE → stack[-1] = true
// 95 SET_VAR scope[0][2] ← stack[-1]
// 98 PUSH_UNDEFINED → stack[-1] = undefined
// 99 GET_VAR → stack[0] = scope[2][1]
// 102 CALL func.apply(thisArg, [0 args]) → stack[-1]
// 103 JUMP_IF_FALSE if (!stack[-1]) JUMP_TO=126
// 105 GET_GLOBAL → stack[-1] = window
// 107 GET_PROP_NAME stack[-1] ← stack[-1]["indexedDB"]
// 110 NOT stack[-1] = !stack[-1]
// 110 JUMP_IF_FALSE_OR_POP if (stack[-1]) POP else JUMP_TO=120
// 112 GET_GLOBAL → stack[-1] = window
// 114 GET_PROP_NAME stack[-1] ← stack[-1]["PointerEvent"]
// 116 JUMP_IF_TRUE_OR_POP if (stack[-1]) JUMP_TO=120 else POP
// 118 GET_GLOBAL → stack[-1] = window
// 120 GET_PROP_NAME stack[-1] ← stack[-1]["MSPointerEvent"]
// 122 JUMP_IF_FALSE if (!stack[-1]) JUMP_TO=126
// 125 PUSH_TRUE → stack[-1] = true
// 126 SET_VAR scope[0][2] ← stack[-1]
// 129 GET_VAR → stack[-1] = scope[0][2]
// 132 RETURN stack[-1]
