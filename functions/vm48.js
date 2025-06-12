// 1 GET_VAR → stack[0] = scope[0][2]
// 3 PUSH_STRING → stack[1] = "cefSharp"
// 6 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 6 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=12 else POP
// 9 GET_VAR → stack[0] = scope[0][2]
// 11 PUSH_STRING → stack[1] = "CefSharp"
// 14 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 14 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=20 else POP
// 17 GET_VAR → stack[0] = scope[0][2]
// 19 PUSH_STRING → stack[1] = "eoapi"
// 22 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 22 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=28 else POP
// 25 GET_VAR → stack[0] = scope[0][2]
// 27 PUSH_STRING → stack[1] = "eoWebBrowserDispatcher"
// 30 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 30 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=32
// 33 PUSH_TRUE → stack[0] = true
// 34 RETURN stack[0]
// 34 GET_GLOBAL → stack[0] = window
// 37 GET_VAR → stack[1] = scope[0][2]
// 40 GET_PROP stack[0] = stack[0][stack[1]]
// 40 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=62
// 42 GET_GLOBAL → stack[0] = window
// 45 GET_VAR → stack[1] = scope[0][2]
// 48 GET_PROP stack[0] = stack[0][stack[1]]
// 48 GET_PROP_NAME stack[0] ← stack[0]["bindObjectAsync"]
// 51 PUSH_UNDEFINED → stack[1] = undefined
// 52 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 52 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=62 else POP
// 54 GET_GLOBAL → stack[0] = window
// 57 GET_VAR → stack[1] = scope[0][2]
// 60 GET_PROP stack[0] = stack[0][stack[1]]
// 60 GET_PROP_NAME stack[0] ← stack[0]["isEOWebBrowser"]
// 63 PUSH_UNDEFINED → stack[1] = undefined
// 64 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 64 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=66
// 67 PUSH_TRUE → stack[0] = true
// 68 RETURN stack[0]
// 68 JUMP → JUMP_TO=72
// 71 SET_VAR scope[0][3] ← stack[-1]
// 74 PUSH_UNDEFINED → stack[-1] = undefined
// 75 RETURN stack[-1]
