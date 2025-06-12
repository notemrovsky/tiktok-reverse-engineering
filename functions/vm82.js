// 1 GET_VAR → stack[0] = scope[4][3]
// 3 GET_PROP_NAME stack[0] ← stack[0]["msStatus"]
// 6 SET_VAR scope[0][3] ← stack[0]
// 9 GET_VAR → stack[0] = scope[1][2]
// 11 GET_PROP_NAME stack[0] ← stack[0]["headers"]
// 14 SET_VAR scope[0][4] ← stack[0]
// 17 GET_VAR → stack[0] = scope[4][1]
// 19 GET_PROP_NAME stack[0] ← stack[0]["sdi"]
// 21 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=41
// 24 GET_VAR → stack[0] = scope[0][4]
// 27 DUP → stack[1] = stack[0]
// 27 GET_PROP_NAME stack[1] ← stack[1]["set"]
// 30 GET_VAR → stack[2] = scope[4][0]
// 32 GET_PROP_NAME stack[2] ← stack[2]["secInfoHeader"]
// 35 PUSH_UNDEFINED → stack[3] = undefined
// 36 GET_VAR → stack[4] = scope[4][2]
// 39 CALL func.apply(thisArg, [0 args]) → stack[3]
// 41 CALL func.apply(thisArg, [2 args]) → stack[0]
// 43 POP stack[0]
// 44 GET_VAR → stack[0] = scope[0][2]
// 46 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=63
// 49 GET_VAR → stack[0] = scope[0][4]
// 52 DUP → stack[1] = stack[0]
// 52 GET_PROP_NAME stack[1] ← stack[1]["set"]
// 55 GET_VAR → stack[2] = scope[4][0]
// 57 GET_PROP_NAME stack[2] ← stack[2]["googleRecaptcha"]
// 60 GET_VAR → stack[3] = scope[0][2]
// 63 CALL func.apply(thisArg, [2 args]) → stack[0]
// 65 POP stack[0]
// 66 GET_VAR → stack[0] = scope[1][6]
// 68 PUSH_STRING → stack[1] = "POST"
// 71 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 71 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=211
// 74 PUSH_UNDEFINED → stack[0] = undefined
// 75 GET_VAR → stack[1] = scope[4][12]
// 78 GET_VAR → stack[2] = scope[1][2]
// 81 GET_VAR → stack[3] = scope[1][3]
// 84 GET_VAR → stack[4] = scope[3][2]
// 87 GET_VAR → stack[5] = scope[3][3]
// 90 CALL func.apply(thisArg, [4 args]) → stack[0]
// 92 DUP → stack[1] = stack[0]
// 92 GET_PROP_NAME stack[1] ← stack[1]["split"]
// 94 PUSH_STRING → stack[2] = ";"
// 97 CALL func.apply(thisArg, [1 args]) → stack[0]
// 98 GET_PROP_NAME stack[0] ← stack[0]["0"]
// 101 DUP → stack[1] = stack[0]
// 101 GET_PROP_NAME stack[1] ← stack[1]["toLowerCase"]
// 104 CALL func.apply(thisArg, [0 args]) → stack[0]
// 106 SET_VAR scope[0][5] ← stack[0]
// 109 GET_VAR → stack[0] = scope[1][2]
// 112 DUP → stack[1] = stack[0]
// 112 GET_PROP_NAME stack[1] ← stack[1]["clone"]
// 115 CALL func.apply(thisArg, [0 args]) → stack[0]
// 117 SET_VAR scope[0][6] ← stack[0]
// 120 GET_VAR → stack[0] = scope[0][5]
// 122 PUSH_STRING → stack[1] = "multipart/form-data"
// 125 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 125 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=138
// 128 GET_VAR → stack[0] = scope[0][6]
// 131 DUP → stack[1] = stack[0]
// 131 GET_PROP_NAME stack[1] ← stack[1]["blob"]
// 134 CALL func.apply(thisArg, [0 args]) → stack[0]
// 136 SET_VAR scope[0][7] ← stack[0]
// 138 JUMP → JUMP_TO=150
// 141 GET_VAR → stack[0] = scope[0][6]
// 144 DUP → stack[1] = stack[0]
// 144 GET_PROP_NAME stack[1] ← stack[1]["text"]
// 147 CALL func.apply(thisArg, [0 args]) → stack[0]
// 149 SET_VAR scope[0][7] ← stack[0]
// 152 GET_VAR → stack[0] = scope[1][2]
// 155 DUP → stack[1] = stack[0]
// 155 GET_PROP_NAME stack[1] ← stack[1]["clone"]
// 158 CALL func.apply(thisArg, [0 args]) → stack[0]
// 160 DUP → stack[1] = stack[0]
// 160 GET_PROP_NAME stack[1] ← stack[1]["arrayBuffer"]
// 163 CALL func.apply(thisArg, [0 args]) → stack[0]
// 165 SET_VAR scope[0][8] ← stack[0]
// 168 GET_VAR → stack[0] = scope[1][2]
// 171 DUP → stack[1] = stack[0]
// 171 GET_PROP_NAME stack[1] ← stack[1]["clone"]
// 174 CALL func.apply(thisArg, [0 args]) → stack[0]
// 176 DUP → stack[1] = stack[0]
// 176 GET_PROP_NAME stack[1] ← stack[1]["arrayBuffer"]
// 179 CALL func.apply(thisArg, [0 args]) → stack[0]
// 181 SET_VAR scope[0][9] ← stack[0]
// 183 GET_GLOBAL → stack[0] = Promise
// 186 DUP → stack[1] = stack[0]
// 186 GET_PROP_NAME stack[1] ← stack[1]["all"]
// 189 GET_VAR → stack[2] = scope[0][7]
// 192 GET_VAR → stack[3] = scope[0][8]
// 195 GET_VAR → stack[4] = scope[0][9]
// 198 NEW_ARRAY → stack[2] = [...top 3 elements]
// 200 CALL func.apply(thisArg, [1 args]) → stack[0]
// 202 DUP → stack[1] = stack[0]
// 202 GET_PROP_NAME stack[1] ← stack[1]["then"]
// 204 PUSH_FUNCTION → stack[2] = function[83]
// 206 PUSH_FUNCTION → stack[3] = function[84]
// 209 CALL func.apply(thisArg, [2 args]) → stack[0]
// 211 RETURN stack[0]
// 211 JUMP → JUMP_TO=310
// 214 PUSH_UNDEFINED → stack[0] = undefined
// 215 GET_VAR → stack[1] = scope[4][9]
// 218 GET_VAR → stack[2] = scope[1][5]
// 220 PUSH_STRING → stack[3] = ""
// 223 CALL func.apply(thisArg, [2 args]) → stack[0]
// 225 SET_VAR scope[0][10] ← stack[0]
// 227 GET_GLOBAL → stack[0] = Request
// 230 GET_VAR → stack[1] = scope[0][10]
// 233 NEW_OBJECT → stack[2] = {}
// 234 GET_VAR → stack[3] = scope[0][4]
// 236 DEFINE_PROP Object.defineProperty(stack[2], "headers", stack[3])
// 239 PUSH_UNDEFINED → stack[3] = undefined
// 239 DEFINE_PROP Object.defineProperty(stack[2], "body", stack[3])
// 242 GET_VAR → stack[3] = scope[1][2]
// 244 GET_PROP_NAME stack[3] ← stack[3]["referrer"]
// 246 DEFINE_PROP Object.defineProperty(stack[2], "referrer", stack[3])
// 249 GET_VAR → stack[3] = scope[1][2]
// 251 GET_PROP_NAME stack[3] ← stack[3]["referrerPolicy"]
// 253 DEFINE_PROP Object.defineProperty(stack[2], "referrerPolicy", stack[3])
// 256 GET_VAR → stack[3] = scope[1][2]
// 258 GET_PROP_NAME stack[3] ← stack[3]["mode"]
// 260 DEFINE_PROP Object.defineProperty(stack[2], "mode", stack[3])
// 263 GET_VAR → stack[3] = scope[1][2]
// 265 GET_PROP_NAME stack[3] ← stack[3]["credentials"]
// 267 DEFINE_PROP Object.defineProperty(stack[2], "credentials", stack[3])
// 270 GET_VAR → stack[3] = scope[1][2]
// 272 GET_PROP_NAME stack[3] ← stack[3]["cache"]
// 274 DEFINE_PROP Object.defineProperty(stack[2], "cache", stack[3])
// 277 GET_VAR → stack[3] = scope[1][2]
// 279 GET_PROP_NAME stack[3] ← stack[3]["redirect"]
// 281 DEFINE_PROP Object.defineProperty(stack[2], "redirect", stack[3])
// 284 GET_VAR → stack[3] = scope[1][2]
// 286 GET_PROP_NAME stack[3] ← stack[3]["integrity"]
// 288 DEFINE_PROP Object.defineProperty(stack[2], "integrity", stack[3])
// 291 FUNCTION_BIND_APPLY → stack[0] = new stack[2](2 args)
// 293 SET_VAR scope[0][11] ← stack[0]
// 296 PUSH_UNDEFINED → stack[0] = undefined
// 297 GET_VAR → stack[1] = scope[2][3]
// 300 GET_VAR → stack[2] = scope[0][11]
// 303 GET_VAR → stack[3] = scope[1][3]
// 306 GET_VAR → stack[4] = scope[0][3]
// 309 CALL func.apply(thisArg, [3 args]) → stack[0]
// 311 RETURN stack[0]
// 312 PUSH_UNDEFINED → stack[0] = undefined
// 313 RETURN stack[0]
