// 0 PUSH_CONST → stack[0] = 0
// 3 SET_VAR scope[0][3] ← stack[0]
// 5 GET_GLOBAL → stack[0] = URL
// 8 PUSH_SCOPE → stack[1] = scope
// 8 GET_PROP_NAME stack[1] ← stack[1]["responseURL"]
// 11 FUNCTION_BIND_APPLY → stack[0] = new stack[1](1 args)
// 13 SET_VAR scope[0][4] ← stack[0]
// 16 PUSH_UNDEFINED → stack[0] = undefined
// 17 GET_VAR → stack[1] = scope[4][14]
// 20 GET_VAR → stack[2] = scope[0][4]
// 22 GET_PROP_NAME stack[2] ← stack[2]["href"]
// 25 CALL func.apply(thisArg, [1 args]) → stack[0]
// 26 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=31
// 28 PUSH_CONST → stack[0] = 1
// 31 SET_VAR scope[0][3] ← stack[0]
// 34 GET_VAR → stack[0] = scope[0][4]
// 36 GET_PROP_NAME stack[0] ← stack[0]["host"]
// 39 DUP → stack[1] = stack[0]
// 39 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 41 GET_GLOBAL → stack[2] = window
// 43 GET_PROP_NAME stack[2] ← stack[2]["location"]
// 45 GET_PROP_NAME stack[2] ← stack[2]["host"]
// 48 CALL func.apply(thisArg, [1 args]) → stack[0]
// 49 PUSH_CONST → stack[1] = 1
// 52 NEGATE stack[1] = -stack[1]
// 53 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 53 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=58
// 55 PUSH_CONST → stack[0] = 2
// 58 SET_VAR scope[0][3] ← stack[0]
// 60 JUMP → JUMP_TO=64
// 63 SET_VAR scope[0][7] ← stack[-1]
// 66 GET_VAR → stack[-1] = scope[0][3]
// 68 PUSH_CONST → stack[0] = 0
// 71 GREATER_THAN stack[-1] = stack[-1] > stack[0]
// 71 JUMP_IF_FALSE if (!stack[-1]) JUMP_TO=288
// 74 PUSH_SCOPE → stack[-1] = scope
// 75 DUP → stack[0] = stack[-1]
// 75 GET_PROP_NAME stack[0] ← stack[0]["getResponseHeader"]
// 77 PUSH_STRING → stack[1] = "x-ms-token"
// 80 CALL func.apply(thisArg, [1 args]) → stack[-1]
// 82 SET_VAR scope[0][5] ← stack[-1]
// 85 GET_VAR → stack[-1] = scope[0][5]
// 87 JUMP_IF_FALSE if (!stack[-1]) JUMP_TO=288
// 90 PUSH_UNDEFINED → stack[-1] = undefined
// 91 GET_VAR → stack[0] = scope[4][11]
// 94 PUSH_SCOPE → stack[1] = scope
// 94 GET_PROP_NAME stack[1] ← stack[1]["_byted_url"]
// 97 CALL func.apply(thisArg, [1 args]) → stack[-1]
// 99 SET_VAR scope[0][6] ← stack[-1]
// 102 GET_VAR → stack[-1] = scope[0][6]
// 105 GET_VAR → stack[0] = scope[4][5]
// 107 GET_PROP_NAME stack[0] ← stack[0]["sec"]
// 110 STRICT_EQUAL stack[-1] = stack[-1] === stack[0]
// 110 JUMP_IF_FALSE if (!stack[-1]) JUMP_TO=184
// 113 GET_VAR → stack[-1] = scope[4][3]
// 116 GET_VAR → stack[0] = scope[0][5]
// 118 SET_GLOBAL_PROP stack[0]["msToken"] ← stack[-1]
// 121 GET_VAR → stack[-1] = scope[4][3]
// 124 GET_VAR → stack[0] = scope[0][6]
// 126 SET_GLOBAL_PROP stack[0]["msStatus"] ← stack[-1]
// 129 PUSH_UNDEFINED → stack[-1] = undefined
// 130 GET_VAR → stack[0] = scope[4][8]
// 132 PUSH_STRING → stack[1] = "msToken"
// 135 GET_VAR → stack[2] = scope[0][5]
// 138 CALL func.apply(thisArg, [2 args]) → stack[-1]
// 140 POP stack[-1]
// 141 PUSH_UNDEFINED → stack[-1] = undefined
// 142 GET_VAR → stack[0] = scope[4][6]
// 145 GET_VAR → stack[1] = scope[0][5]
// 148 CALL func.apply(thisArg, [1 args]) → stack[-1]
// 150 POP stack[-1]
// 151 GET_VAR → stack[-1] = scope[0][6]
// 154 GET_VAR → stack[0] = scope[1][14]
// 157 GREATER_THAN stack[-1] = stack[-1] > stack[0]
// 157 JUMP_IF_FALSE if (!stack[-1]) JUMP_TO=182
// 160 GET_VAR → stack[-1] = scope[4][3]
// 162 GET_PROP_NAME stack[-1] ← stack[-1]["msNewTokenList"]
// 164 GET_PROP_NAME stack[-1] ← stack[-1]["length"]
// 166 PUSH_CONST → stack[0] = 0
// 169 GREATER_THAN stack[-1] = stack[-1] > stack[0]
// 169 JUMP_IF_FALSE if (!stack[-1]) JUMP_TO=182
// 172 PUSH_UNDEFINED → stack[-1] = undefined
// 172 GET_GLOBAL → stack[0] = setTimeout
// 174 PUSH_FUNCTION → stack[1] = function[69]
// 176 PUSH_CONST → stack[2] = 2
// 178 PUSH_CONST → stack[3] = 1000
// 181 MUL stack[2] = stack[2] * stack[3]
// 182 CALL func.apply(thisArg, [2 args]) → stack[-1]
// 184 POP stack[-1]
// 184 JUMP → JUMP_TO=204
// 187 GET_VAR → stack[-1] = scope[1][14]
// 190 GET_VAR → stack[0] = scope[4][3]
// 192 GET_PROP_NAME stack[0] ← stack[0]["msStatus"]
// 195 GREATER_EQUAL stack[-1] = stack[-1] >= stack[0]
// 195 JUMP_IF_FALSE if (!stack[-1]) JUMP_TO=203
// 198 GET_VAR → stack[-1] = scope[4][3]
// 201 GET_VAR → stack[0] = scope[0][5]
// 203 SET_GLOBAL_PROP stack[0]["msToken"] ← stack[-1]
// 206 GET_VAR → stack[-1] = scope[1][14]
// 209 GET_VAR → stack[0] = scope[4][5]
// 211 GET_PROP_NAME stack[0] ← stack[0]["init"]
// 214 STRICT_EQUAL stack[-1] = stack[-1] === stack[0]
// 214 JUMP_IF_FALSE_OR_POP if (stack[-1]) POP else JUMP_TO=224
// 217 GET_VAR → stack[-1] = scope[4][3]
// 219 GET_PROP_NAME stack[-1] ← stack[-1]["msNewTokenList"]
// 221 GET_PROP_NAME stack[-1] ← stack[-1]["length"]
// 223 PUSH_CONST → stack[0] = 10
// 226 LESS_THAN stack[-1] = stack[-1] < stack[0]
// 226 JUMP_IF_FALSE if (!stack[-1]) JUMP_TO=288
// 229 GET_VAR → stack[-1] = scope[4][3]
// 231 GET_PROP_NAME stack[-1] ← stack[-1]["msNewTokenList"]
// 234 DUP → stack[0] = stack[-1]
// 234 GET_PROP_NAME stack[0] ← stack[0]["push"]
// 237 GET_VAR → stack[1] = scope[0][5]
// 240 CALL func.apply(thisArg, [1 args]) → stack[-1]
// 242 POP stack[-1]
// 243 GET_VAR → stack[-1] = scope[4][4]
// 245 GET_PROP_NAME stack[-1] ← stack[-1]["msNewTokenList"]
// 248 DUP → stack[0] = stack[-1]
// 248 GET_PROP_NAME stack[0] ← stack[0]["push"]
// 251 GET_VAR → stack[1] = scope[0][5]
// 254 CALL func.apply(thisArg, [1 args]) → stack[-1]
// 256 POP stack[-1]
// 257 GET_VAR → stack[-1] = scope[4][3]
// 259 GET_PROP_NAME stack[-1] ← stack[-1]["msNewTokenList"]
// 261 GET_PROP_NAME stack[-1] ← stack[-1]["length"]
// 263 PUSH_CONST → stack[0] = 1
// 266 STRICT_EQUAL stack[-1] = stack[-1] === stack[0]
// 266 JUMP_IF_FALSE if (!stack[-1]) JUMP_TO=288
// 269 PUSH_UNDEFINED → stack[-1] = undefined
// 270 GET_VAR → stack[0] = scope[4][6]
// 273 GET_VAR → stack[1] = scope[0][5]
// 276 CALL func.apply(thisArg, [1 args]) → stack[-1]
// 278 POP stack[-1]
// 279 PUSH_UNDEFINED → stack[-1] = undefined
// 280 GET_VAR → stack[0] = scope[4][8]
// 282 PUSH_STRING → stack[1] = "msToken"
// 285 GET_VAR → stack[2] = scope[0][5]
// 288 CALL func.apply(thisArg, [2 args]) → stack[-1]
// 290 POP stack[-1]
// 291 GET_VAR → stack[-1] = scope[1][7]
// 293 JUMP_IF_FALSE if (!stack[-1]) JUMP_TO=303
// 296 PUSH_UNDEFINED → stack[-1] = undefined
// 297 GET_VAR → stack[0] = scope[1][7]
// 300 GET_VAR → stack[1] = scope[0][2]
// 303 CALL func.apply(thisArg, [1 args]) → stack[-1]
// 305 POP stack[-1]
// 306 PUSH_UNDEFINED → stack[-1] = undefined
// 307 RETURN stack[-1]
