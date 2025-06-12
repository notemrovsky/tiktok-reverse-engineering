// 1 GET_VAR → stack[0] = scope[0][2]
// 3 GET_PROP_NAME stack[0] ← stack[0]["0"]
// 6 SET_VAR scope[0][3] ← stack[0]
// 9 GET_VAR → stack[0] = scope[0][2]
// 11 GET_PROP_NAME stack[0] ← stack[0]["1"]
// 14 SET_VAR scope[0][4] ← stack[0]
// 17 GET_VAR → stack[0] = scope[0][2]
// 19 GET_PROP_NAME stack[0] ← stack[0]["2"]
// 22 SET_VAR scope[0][5] ← stack[0]
// 25 GET_VAR → stack[0] = scope[1][5]
// 27 PUSH_STRING → stack[1] = "multipart/form-data"
// 30 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 30 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=58
// 33 PUSH_UNDEFINED → stack[0] = undefined
// 34 GET_VAR → stack[1] = scope[5][10]
// 37 GET_VAR → stack[2] = scope[2][5]
// 39 GET_GLOBAL → stack[3] = Uint8Array
// 42 GET_VAR → stack[4] = scope[0][4]
// 45 FUNCTION_BIND_APPLY → stack[3] = new stack[4](1 args)
// 46 GET_GLOBAL → stack[4] = Uint8Array
// 49 GET_VAR → stack[5] = scope[0][5]
// 52 FUNCTION_BIND_APPLY → stack[4] = new stack[5](1 args)
// 54 CALL func.apply(thisArg, [3 args]) → stack[0]
// 56 SET_VAR scope[0][6] ← stack[0]
// 58 JUMP → JUMP_TO=85
// 61 PUSH_UNDEFINED → stack[0] = undefined
// 62 GET_VAR → stack[1] = scope[5][10]
// 65 GET_VAR → stack[2] = scope[2][5]
// 67 GET_GLOBAL → stack[3] = Uint8Array
// 70 GET_VAR → stack[4] = scope[0][4]
// 73 FUNCTION_BIND_APPLY → stack[3] = new stack[4](1 args)
// 74 GET_GLOBAL → stack[4] = Uint8Array
// 77 GET_VAR → stack[5] = scope[0][5]
// 80 FUNCTION_BIND_APPLY → stack[4] = new stack[5](1 args)
// 82 CALL func.apply(thisArg, [3 args]) → stack[0]
// 84 SET_VAR scope[0][6] ← stack[0]
// 86 GET_GLOBAL → stack[0] = Request
// 89 GET_VAR → stack[1] = scope[0][6]
// 92 NEW_OBJECT → stack[2] = {}
// 93 GET_VAR → stack[3] = scope[2][2]
// 95 GET_PROP_NAME stack[3] ← stack[3]["method"]
// 97 DEFINE_PROP Object.defineProperty(stack[2], "method", stack[3])
// 100 GET_VAR → stack[3] = scope[1][4]
// 102 DEFINE_PROP Object.defineProperty(stack[2], "headers", stack[3])
// 105 GET_VAR → stack[3] = scope[0][3]
// 107 DEFINE_PROP Object.defineProperty(stack[2], "body", stack[3])
// 110 GET_VAR → stack[3] = scope[2][2]
// 112 GET_PROP_NAME stack[3] ← stack[3]["referrer"]
// 114 DEFINE_PROP Object.defineProperty(stack[2], "referrer", stack[3])
// 117 GET_VAR → stack[3] = scope[2][2]
// 119 GET_PROP_NAME stack[3] ← stack[3]["referrerPolicy"]
// 121 DEFINE_PROP Object.defineProperty(stack[2], "referrerPolicy", stack[3])
// 124 GET_VAR → stack[3] = scope[2][2]
// 126 GET_PROP_NAME stack[3] ← stack[3]["mode"]
// 128 DEFINE_PROP Object.defineProperty(stack[2], "mode", stack[3])
// 131 GET_VAR → stack[3] = scope[2][2]
// 133 GET_PROP_NAME stack[3] ← stack[3]["credentials"]
// 135 DEFINE_PROP Object.defineProperty(stack[2], "credentials", stack[3])
// 138 GET_VAR → stack[3] = scope[2][2]
// 140 GET_PROP_NAME stack[3] ← stack[3]["cache"]
// 142 DEFINE_PROP Object.defineProperty(stack[2], "cache", stack[3])
// 145 GET_VAR → stack[3] = scope[2][2]
// 147 GET_PROP_NAME stack[3] ← stack[3]["redirect"]
// 149 DEFINE_PROP Object.defineProperty(stack[2], "redirect", stack[3])
// 152 GET_VAR → stack[3] = scope[2][2]
// 154 GET_PROP_NAME stack[3] ← stack[3]["integrity"]
// 156 DEFINE_PROP Object.defineProperty(stack[2], "integrity", stack[3])
// 159 FUNCTION_BIND_APPLY → stack[0] = new stack[2](2 args)
// 161 SET_VAR scope[0][7] ← stack[0]
// 164 PUSH_UNDEFINED → stack[0] = undefined
// 165 GET_VAR → stack[1] = scope[3][3]
// 168 GET_VAR → stack[2] = scope[0][7]
// 171 GET_VAR → stack[3] = scope[2][3]
// 174 GET_VAR → stack[4] = scope[1][3]
// 177 CALL func.apply(thisArg, [3 args]) → stack[0]
// 179 RETURN stack[0]
