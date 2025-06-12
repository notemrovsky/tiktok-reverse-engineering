// 1 NEW_OBJECT → stack[0] = {}
// 2 SET_VAR scope[1][1] ← stack[0]
// 5 GET_VAR → stack[0] = scope[1][1]
// 7 PUSH_CONST → stack[1] = 9
// 9 SET_GLOBAL_PROP stack[1]["sec"] ← stack[0]
// 12 GET_VAR → stack[0] = scope[1][1]
// 14 PUSH_CONST → stack[1] = 5
// 16 SET_GLOBAL_PROP stack[1]["asgw"] ← stack[0]
// 19 GET_VAR → stack[0] = scope[1][1]
// 21 PUSH_CONST → stack[1] = 0
// 23 SET_GLOBAL_PROP stack[1]["init"] ← stack[0]
// 26 NEW_OBJECT → stack[0] = {}
// 27 NEW_ARRAY → stack[1] = [...top 0 elements]
// 28 DEFINE_PROP Object.defineProperty(stack[0], "aidList", stack[1])
// 30 PUSH_CONST → stack[1] = 0
// 32 DEFINE_PROP Object.defineProperty(stack[0], "bogusIndex", stack[1])
// 35 NEW_ARRAY → stack[1] = [...top 0 elements]
// 36 DEFINE_PROP Object.defineProperty(stack[0], "msNewTokenList", stack[1])
// 38 PUSH_CONST → stack[1] = 1
// 40 DEFINE_PROP Object.defineProperty(stack[0], "isTrusted", stack[1])
// 43 NEW_ARRAY → stack[1] = [...top 0 elements]
// 44 DEFINE_PROP Object.defineProperty(stack[0], "slardarErrs", stack[1])
// 47 NEW_OBJECT → stack[1] = {}
// 47 DEFINE_PROP Object.defineProperty(stack[0], "WEBGL", stack[1])
// 50 SET_VAR scope[1][0] ← stack[0]
// 53 GET_VAR → stack[0] = scope[1][0]
// 55 PUSH_CONST → stack[1] = 0
// 57 SET_GLOBAL_PROP stack[1]["envcode"] ← stack[0]
// 60 GET_VAR → stack[0] = scope[1][0]
// 62 PUSH_STRING → stack[1] = ""
// 64 SET_GLOBAL_PROP stack[1]["msToken"] ← stack[0]
// 67 GET_VAR → stack[0] = scope[1][0]
// 70 GET_VAR → stack[1] = scope[1][1]
// 72 GET_PROP_NAME stack[1] ← stack[1]["init"]
// 74 SET_GLOBAL_PROP stack[1]["msStatus"] ← stack[0]
// 77 GET_VAR → stack[0] = scope[1][0]
// 79 PUSH_STRING → stack[1] = ""
// 81 SET_GLOBAL_PROP stack[1]["__ac_testid"] ← stack[0]
// 84 GET_VAR → stack[0] = scope[1][0]
// 86 PUSH_STRING → stack[1] = ""
// 88 SET_GLOBAL_PROP stack[1]["ttwid"] ← stack[0]
// 91 GET_VAR → stack[0] = scope[1][0]
// 93 PUSH_STRING → stack[1] = ""
// 95 SET_GLOBAL_PROP stack[1]["tt_webid"] ← stack[0]
// 98 GET_VAR → stack[0] = scope[1][0]
// 100 PUSH_STRING → stack[1] = ""
// 102 SET_GLOBAL_PROP stack[1]["tt_webid_v2"] ← stack[0]
// 105 NEW_OBJECT → stack[0] = {}
// 106 NEW_ARRAY → stack[1] = [...top 0 elements]
// 107 DEFINE_PROP Object.defineProperty(stack[0], "slardarErrs", stack[1])
// 109 PUSH_STRING → stack[1] = ""
// 111 DEFINE_PROP Object.defineProperty(stack[0], "ttwid", stack[1])
// 113 PUSH_STRING → stack[1] = ""
// 115 DEFINE_PROP Object.defineProperty(stack[0], "tt_webid", stack[1])
// 117 PUSH_STRING → stack[1] = ""
// 119 DEFINE_PROP Object.defineProperty(stack[0], "tt_webid_v2", stack[1])
// 122 NEW_ARRAY → stack[1] = [...top 0 elements]
// 123 DEFINE_PROP Object.defineProperty(stack[0], "msNewTokenList", stack[1])
// 126 SET_VAR scope[1][2] ← stack[0]
// 129 PUSH_UNDEFINED → stack[0] = undefined
// 130 RETURN stack[0]
