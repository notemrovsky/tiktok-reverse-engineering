// 1 PUSH_UNDEFINED → stack[0] = undefined
// 2 GET_VAR → stack[1] = scope[2][5]
// 5 CALL func.apply(thisArg, [0 args]) → stack[0]
// 7 POP stack[0]
// 8 PUSH_UNDEFINED → stack[0] = undefined
// 9 GET_VAR → stack[1] = scope[2][2]
// 12 CALL func.apply(thisArg, [0 args]) → stack[0]
// 14 POP stack[0]
// 15 GET_VAR → stack[0] = scope[0][5]
// 18 PUSH_UNDEFINED → stack[1] = undefined
// 19 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 19 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=25
// 22 GET_VAR → stack[0] = scope[0][5]
// 24 PUSH_STRING → stack[1] = ""
// 27 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 27 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=32
// 29 PUSH_STRING → stack[0] = ""
// 32 SET_VAR scope[0][5] ← stack[0]
// 35 PUSH_UNDEFINED → stack[0] = undefined
// 36 GET_VAR → stack[1] = scope[2][7]
// 39 GET_VAR → stack[2] = scope[0][5]
// 42 CALL func.apply(thisArg, [1 args]) → stack[0]
// 44 SET_VAR scope[0][7] ← stack[0]
// 47 GET_VAR → stack[0] = scope[0][6]
// 50 NOT stack[0] = !stack[0]
// 50 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=55
// 52 PUSH_STRING → stack[0] = "00000000000000000000000000000000"
// 55 SET_VAR scope[0][6] ← stack[0]
// 57 PUSH_CONST → stack[0] = 0
// 60 SET_VAR scope[0][8] ← stack[0]
// 62 PUSH_CONST → stack[0] = 0
// 65 SET_VAR scope[0][9] ← stack[0]
// 67 PUSH_CONST → stack[0] = 8
// 69 PUSH_CONST → stack[1] = 1
// 72 ADD stack[0] = stack[0] + stack[1]
// 73 SET_VAR scope[0][10] ← stack[0]
// 75 GET_GLOBAL → stack[0] = ArrayBuffer
// 78 GET_VAR → stack[1] = scope[0][10]
// 81 FUNCTION_BIND_APPLY → stack[0] = new stack[1](1 args)
// 83 SET_VAR scope[0][11] ← stack[0]
// 85 GET_GLOBAL → stack[0] = Uint8Array
// 88 GET_VAR → stack[1] = scope[0][11]
// 91 FUNCTION_BIND_APPLY → stack[0] = new stack[1](1 args)
// 93 SET_VAR scope[0][12] ← stack[0]
// 95 GET_GLOBAL → stack[0] = Math
// 98 DUP → stack[1] = stack[0]
// 98 GET_PROP_NAME stack[1] ← stack[1]["floor"]
// 100 GET_GLOBAL → stack[2] = Math
// 103 DUP → stack[3] = stack[2]
// 103 GET_PROP_NAME stack[3] ← stack[3]["random"]
// 106 CALL func.apply(thisArg, [0 args]) → stack[2]
// 107 PUSH_CONST → stack[3] = 100
// 110 MUL stack[2] = stack[2] * stack[3]
// 111 CALL func.apply(thisArg, [1 args]) → stack[0]
// 112 PUSH_CONST → stack[1] = 1
// 115 BITWISE_AND stack[0] = stack[0] & stack[1]
// 116 SET_VAR scope[0][13] ← stack[0]
// 119 GET_VAR → stack[0] = scope[0][8]
// 121 PUSH_CONST → stack[1] = 7
// 124 LEFT_SHIFT stack[0] = stack[0] << stack[1]
// 125 GET_VAR → stack[1] = scope[0][2]
// 127 PUSH_CONST → stack[2] = 6
// 130 LEFT_SHIFT stack[1] = stack[1] << stack[2]
// 131 BITWISE_OR stack[0] = stack[0] | stack[1]
// 132 GET_VAR → stack[1] = scope[0][3]
// 134 PUSH_CONST → stack[2] = 5
// 137 LEFT_SHIFT stack[1] = stack[1] << stack[2]
// 138 BITWISE_OR stack[0] = stack[0] | stack[1]
// 139 GET_VAR → stack[1] = scope[0][13]
// 141 PUSH_CONST → stack[2] = 4
// 144 LEFT_SHIFT stack[1] = stack[1] << stack[2]
// 145 BITWISE_OR stack[0] = stack[0] | stack[1]
// 146 GET_VAR → stack[1] = scope[0][9]
// 149 BITWISE_OR stack[0] = stack[0] | stack[1]
// 150 SET_VAR scope[0][14] ← stack[0]
// 153 GET_VAR → stack[0] = scope[2][6]
// 155 PUSH_STRING → stack[1] = "bogusIndex"
// 158 POST_INC stack[0] = stack[0][stack[1]]++ (old value)
// 159 POP stack[0]
// 160 GET_VAR → stack[0] = scope[2][6]
// 162 GET_PROP_NAME stack[0] ← stack[0]["bogusIndex"]
// 164 PUSH_CONST → stack[1] = 63
// 167 BITWISE_AND stack[0] = stack[0] & stack[1]
// 168 SET_VAR scope[0][15] ← stack[0]
// 171 GET_VAR → stack[0] = scope[0][12]
// 174 GET_VAR → stack[1] = scope[0][4]
// 176 PUSH_CONST → stack[2] = 6
// 179 LEFT_SHIFT stack[1] = stack[1] << stack[2]
// 180 GET_VAR → stack[2] = scope[0][15]
// 183 BITWISE_OR stack[1] = stack[1] | stack[2]
// 183 SET_GLOBAL_PROP stack[1]["0"] ← stack[0]
// 186 GET_VAR → stack[0] = scope[0][12]
// 189 GET_VAR → stack[1] = scope[2][6]
// 191 GET_PROP_NAME stack[1] ← stack[1]["envcode"]
// 193 PUSH_CONST → stack[2] = 8
// 196 RIGHT_SHIFT stack[1] = stack[1] >> stack[2]
// 196 PUSH_CONST → stack[2] = 255
// 199 BITWISE_AND stack[1] = stack[1] & stack[2]
// 199 SET_GLOBAL_PROP stack[1]["1"] ← stack[0]
// 202 GET_VAR → stack[0] = scope[0][12]
// 205 GET_VAR → stack[1] = scope[2][6]
// 207 GET_PROP_NAME stack[1] ← stack[1]["envcode"]
// 209 PUSH_CONST → stack[2] = 255
// 212 BITWISE_AND stack[1] = stack[1] & stack[2]
// 212 SET_GLOBAL_PROP stack[1]["2"] ← stack[0]
// 215 GET_VAR → stack[0] = scope[0][12]
// 218 GET_VAR → stack[1] = scope[2][3]
// 220 GET_PROP_NAME stack[1] ← stack[1]["ubcode"]
// 222 SET_GLOBAL_PROP stack[1]["3"] ← stack[0]
// 225 GET_VAR → stack[0] = scope[2][8]
// 228 DUP → stack[1] = stack[0]
// 228 GET_PROP_NAME stack[1] ← stack[1]["decode"]
// 231 PUSH_UNDEFINED → stack[2] = undefined
// 232 GET_VAR → stack[3] = scope[2][7]
// 235 GET_VAR → stack[4] = scope[2][8]
// 238 DUP → stack[5] = stack[4]
// 238 GET_PROP_NAME stack[5] ← stack[5]["decode"]
// 241 GET_VAR → stack[6] = scope[0][7]
// 244 CALL func.apply(thisArg, [1 args]) → stack[4]
// 246 CALL func.apply(thisArg, [1 args]) → stack[2]
// 248 CALL func.apply(thisArg, [1 args]) → stack[0]
// 250 SET_VAR scope[0][16] ← stack[0]
// 253 GET_VAR → stack[0] = scope[0][12]
// 256 GET_VAR → stack[1] = scope[0][16]
// 258 GET_PROP_NAME stack[1] ← stack[1]["14"]
// 260 SET_GLOBAL_PROP stack[1]["4"] ← stack[0]
// 263 GET_VAR → stack[0] = scope[0][12]
// 266 GET_VAR → stack[1] = scope[0][16]
// 268 GET_PROP_NAME stack[1] ← stack[1]["15"]
// 270 SET_GLOBAL_PROP stack[1]["5"] ← stack[0]
// 273 GET_VAR → stack[0] = scope[2][8]
// 276 DUP → stack[1] = stack[0]
// 276 GET_PROP_NAME stack[1] ← stack[1]["decode"]
// 279 PUSH_UNDEFINED → stack[2] = undefined
// 280 GET_VAR → stack[3] = scope[2][7]
// 283 GET_VAR → stack[4] = scope[2][8]
// 286 DUP → stack[5] = stack[4]
// 286 GET_PROP_NAME stack[5] ← stack[5]["decode"]
// 289 GET_VAR → stack[6] = scope[0][6]
// 292 CALL func.apply(thisArg, [1 args]) → stack[4]
// 294 CALL func.apply(thisArg, [1 args]) → stack[2]
// 296 CALL func.apply(thisArg, [1 args]) → stack[0]
// 298 SET_VAR scope[0][17] ← stack[0]
// 301 GET_VAR → stack[0] = scope[0][12]
// 304 GET_VAR → stack[1] = scope[0][17]
// 306 GET_PROP_NAME stack[1] ← stack[1]["14"]
// 308 SET_GLOBAL_PROP stack[1]["6"] ← stack[0]
// 311 GET_VAR → stack[0] = scope[0][12]
// 314 GET_VAR → stack[1] = scope[0][17]
// 316 GET_PROP_NAME stack[1] ← stack[1]["15"]
// 318 SET_GLOBAL_PROP stack[1]["7"] ← stack[0]
// 321 GET_VAR → stack[0] = scope[0][12]
// 323 GET_GLOBAL → stack[1] = Math
// 326 DUP → stack[2] = stack[1]
// 326 GET_PROP_NAME stack[2] ← stack[2]["floor"]
// 328 GET_GLOBAL → stack[3] = Math
// 331 DUP → stack[4] = stack[3]
// 331 GET_PROP_NAME stack[4] ← stack[4]["random"]
// 334 CALL func.apply(thisArg, [0 args]) → stack[3]
// 335 PUSH_CONST → stack[4] = 255
// 338 MUL stack[3] = stack[3] * stack[4]
// 339 CALL func.apply(thisArg, [1 args]) → stack[1]
// 340 PUSH_CONST → stack[2] = 255
// 343 BITWISE_AND stack[1] = stack[1] & stack[2]
// 343 SET_GLOBAL_PROP stack[1]["8"] ← stack[0]
// 346 PUSH_UNDEFINED → stack[0] = undefined
// 347 GET_VAR → stack[1] = scope[1][2]
// 350 GET_VAR → stack[2] = scope[0][14]
// 353 GET_VAR → stack[3] = scope[0][12]
// 356 CALL func.apply(thisArg, [2 args]) → stack[0]
// 358 RETURN stack[0]
