// 1 GET_VAR → stack[0] = scope[0][2]
// 3 GET_PROP_NAME stack[0] ← stack[0]["ok"]
// 5 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=287
// 8 GET_VAR → stack[0] = scope[0][2]
// 10 GET_PROP_NAME stack[0] ← stack[0]["url"]
// 13 NOT stack[0] = !stack[0]
// 13 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=17
// 16 GET_VAR → stack[0] = scope[0][2]
// 19 RETURN stack[0]
// 19 GET_GLOBAL → stack[0] = URL
// 22 GET_VAR → stack[1] = scope[0][2]
// 24 GET_PROP_NAME stack[1] ← stack[1]["url"]
// 27 FUNCTION_BIND_APPLY → stack[0] = new stack[1](1 args)
// 29 SET_VAR scope[0][3] ← stack[0]
// 32 GET_VAR → stack[0] = scope[0][3]
// 34 GET_PROP_NAME stack[0] ← stack[0]["host"]
// 37 DUP → stack[1] = stack[0]
// 37 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 39 GET_GLOBAL → stack[2] = window
// 41 GET_PROP_NAME stack[2] ← stack[2]["location"]
// 43 GET_PROP_NAME stack[2] ← stack[2]["host"]
// 46 CALL func.apply(thisArg, [1 args]) → stack[0]
// 47 PUSH_CONST → stack[1] = 1
// 50 NEGATE stack[1] = -stack[1]
// 51 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 51 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=62 else POP
// 54 PUSH_UNDEFINED → stack[0] = undefined
// 55 GET_VAR → stack[1] = scope[4][14]
// 58 GET_VAR → stack[2] = scope[0][3]
// 60 GET_PROP_NAME stack[2] ← stack[2]["href"]
// 63 CALL func.apply(thisArg, [1 args]) → stack[0]
// 64 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=287
// 67 GET_VAR → stack[0] = scope[0][2]
// 69 GET_PROP_NAME stack[0] ← stack[0]["headers"]
// 72 DUP → stack[1] = stack[0]
// 72 GET_PROP_NAME stack[1] ← stack[1]["get"]
// 74 PUSH_STRING → stack[2] = "x-ms-token"
// 77 CALL func.apply(thisArg, [1 args]) → stack[0]
// 79 SET_VAR scope[0][4] ← stack[0]
// 82 GET_VAR → stack[0] = scope[0][4]
// 84 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=287
// 87 PUSH_UNDEFINED → stack[0] = undefined
// 88 GET_VAR → stack[1] = scope[4][11]
// 91 GET_VAR → stack[2] = scope[0][2]
// 93 GET_PROP_NAME stack[2] ← stack[2]["url"]
// 96 CALL func.apply(thisArg, [1 args]) → stack[0]
// 98 SET_VAR scope[0][5] ← stack[0]
// 101 GET_VAR → stack[0] = scope[0][5]
// 104 GET_VAR → stack[1] = scope[4][5]
// 106 GET_PROP_NAME stack[1] ← stack[1]["sec"]
// 109 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 109 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=183
// 112 GET_VAR → stack[0] = scope[4][3]
// 115 GET_VAR → stack[1] = scope[0][4]
// 117 SET_GLOBAL_PROP stack[1]["msToken"] ← stack[0]
// 120 GET_VAR → stack[0] = scope[4][3]
// 123 GET_VAR → stack[1] = scope[0][5]
// 125 SET_GLOBAL_PROP stack[1]["msStatus"] ← stack[0]
// 128 PUSH_UNDEFINED → stack[0] = undefined
// 129 GET_VAR → stack[1] = scope[4][8]
// 131 PUSH_STRING → stack[2] = "msToken"
// 134 GET_VAR → stack[3] = scope[0][4]
// 137 CALL func.apply(thisArg, [2 args]) → stack[0]
// 139 POP stack[0]
// 140 PUSH_UNDEFINED → stack[0] = undefined
// 141 GET_VAR → stack[1] = scope[4][6]
// 144 GET_VAR → stack[2] = scope[0][4]
// 147 CALL func.apply(thisArg, [1 args]) → stack[0]
// 149 POP stack[0]
// 150 GET_VAR → stack[0] = scope[0][5]
// 153 GET_VAR → stack[1] = scope[1][4]
// 156 GREATER_THAN stack[0] = stack[0] > stack[1]
// 156 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=181
// 159 GET_VAR → stack[0] = scope[4][3]
// 161 GET_PROP_NAME stack[0] ← stack[0]["msNewTokenList"]
// 163 GET_PROP_NAME stack[0] ← stack[0]["length"]
// 165 PUSH_CONST → stack[1] = 0
// 168 GREATER_THAN stack[0] = stack[0] > stack[1]
// 168 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=181
// 171 PUSH_UNDEFINED → stack[0] = undefined
// 171 GET_GLOBAL → stack[1] = setTimeout
// 173 PUSH_FUNCTION → stack[2] = function[76]
// 175 PUSH_CONST → stack[3] = 2
// 177 PUSH_CONST → stack[4] = 1000
// 180 MUL stack[3] = stack[3] * stack[4]
// 181 CALL func.apply(thisArg, [2 args]) → stack[0]
// 183 POP stack[0]
// 183 JUMP → JUMP_TO=203
// 186 GET_VAR → stack[0] = scope[1][4]
// 189 GET_VAR → stack[1] = scope[4][3]
// 191 GET_PROP_NAME stack[1] ← stack[1]["msStatus"]
// 194 GREATER_EQUAL stack[0] = stack[0] >= stack[1]
// 194 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=202
// 197 GET_VAR → stack[0] = scope[4][3]
// 200 GET_VAR → stack[1] = scope[0][4]
// 202 SET_GLOBAL_PROP stack[1]["msToken"] ← stack[0]
// 205 GET_VAR → stack[0] = scope[1][4]
// 208 GET_VAR → stack[1] = scope[4][5]
// 210 GET_PROP_NAME stack[1] ← stack[1]["init"]
// 213 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 213 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=223
// 216 GET_VAR → stack[0] = scope[4][3]
// 218 GET_PROP_NAME stack[0] ← stack[0]["msNewTokenList"]
// 220 GET_PROP_NAME stack[0] ← stack[0]["length"]
// 222 PUSH_CONST → stack[1] = 10
// 225 LESS_THAN stack[0] = stack[0] < stack[1]
// 225 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=287
// 228 GET_VAR → stack[0] = scope[4][3]
// 230 GET_PROP_NAME stack[0] ← stack[0]["msNewTokenList"]
// 233 DUP → stack[1] = stack[0]
// 233 GET_PROP_NAME stack[1] ← stack[1]["push"]
// 236 GET_VAR → stack[2] = scope[0][4]
// 239 CALL func.apply(thisArg, [1 args]) → stack[0]
// 241 POP stack[0]
// 242 GET_VAR → stack[0] = scope[4][4]
// 244 GET_PROP_NAME stack[0] ← stack[0]["msNewTokenList"]
// 247 DUP → stack[1] = stack[0]
// 247 GET_PROP_NAME stack[1] ← stack[1]["push"]
// 250 GET_VAR → stack[2] = scope[0][4]
// 253 CALL func.apply(thisArg, [1 args]) → stack[0]
// 255 POP stack[0]
// 256 GET_VAR → stack[0] = scope[4][3]
// 258 GET_PROP_NAME stack[0] ← stack[0]["msNewTokenList"]
// 260 GET_PROP_NAME stack[0] ← stack[0]["length"]
// 262 PUSH_CONST → stack[1] = 1
// 265 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 265 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=287
// 268 PUSH_UNDEFINED → stack[0] = undefined
// 269 GET_VAR → stack[1] = scope[4][6]
// 272 GET_VAR → stack[2] = scope[0][4]
// 275 CALL func.apply(thisArg, [1 args]) → stack[0]
// 277 POP stack[0]
// 278 PUSH_UNDEFINED → stack[0] = undefined
// 279 GET_VAR → stack[1] = scope[4][8]
// 281 PUSH_STRING → stack[2] = "msToken"
// 284 GET_VAR → stack[3] = scope[0][4]
// 287 CALL func.apply(thisArg, [2 args]) → stack[0]
// 289 POP stack[0]
// 290 GET_VAR → stack[0] = scope[0][2]
// 293 RETURN stack[0]
