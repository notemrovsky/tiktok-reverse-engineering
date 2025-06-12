// 0 PUSH_FUNCTION → stack[0] = function[39]
// 3 SET_VAR scope[0][2] ← stack[0]
// 5 PUSH_CONST → stack[0] = 513
// 8 SET_VAR scope[0][3] ← stack[0]
// 10 PUSH_CONST → stack[0] = 514
// 13 SET_VAR scope[0][4] ← stack[0]
// 15 PUSH_CONST → stack[0] = 515
// 18 SET_VAR scope[0][5] ← stack[0]
// 20 PUSH_CONST → stack[0] = 516
// 23 SET_VAR scope[0][6] ← stack[0]
// 25 PUSH_CONST → stack[0] = 518
// 28 SET_VAR scope[0][7] ← stack[0]
// 30 PUSH_CONST → stack[0] = 519
// 33 SET_VAR scope[0][8] ← stack[0]
// 36 GET_VAR → stack[0] = scope[0][3]
// 39 GET_VAR → stack[1] = scope[0][5]
// 42 GET_VAR → stack[2] = scope[0][4]
// 45 GET_VAR → stack[3] = scope[0][6]
// 48 GET_VAR → stack[4] = scope[0][7]
// 51 GET_VAR → stack[5] = scope[0][8]
// 54 NEW_ARRAY → stack[0] = [...top 6 elements]
// 56 DUP → stack[1] = stack[0]
// 56 GET_PROP_NAME stack[1] ← stack[1]["includes"]
// 59 PUSH_UNDEFINED → stack[2] = undefined
// 60 GET_VAR → stack[3] = scope[2][21]
// 63 CALL func.apply(thisArg, [0 args]) → stack[2]
// 65 CALL func.apply(thisArg, [1 args]) → stack[0]
// 67 NOT stack[0] = !stack[0]
// 67 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=69
// 70 PUSH_UNDEFINED → stack[0] = undefined
// 71 RETURN stack[0]
// 72 PUSH_UNDEFINED → stack[0] = undefined
// 73 GET_VAR → stack[1] = scope[1][13]
// 76 CALL func.apply(thisArg, [0 args]) → stack[0]
// 78 POP stack[0]
// 79 PUSH_UNDEFINED → stack[0] = undefined
// 80 GET_VAR → stack[1] = scope[1][14]
// 83 CALL func.apply(thisArg, [0 args]) → stack[0]
// 85 POP stack[0]
// 86 PUSH_UNDEFINED → stack[0] = undefined
// 87 GET_VAR → stack[1] = scope[1][16]
// 90 CALL func.apply(thisArg, [0 args]) → stack[0]
// 92 POP stack[0]
// 93 PUSH_UNDEFINED → stack[0] = undefined
// 94 GET_VAR → stack[1] = scope[2][25]
// 97 GET_VAR → stack[2] = scope[1][2]
// 99 GET_PROP_NAME stack[2] ← stack[2]["webgl"]
// 102 GET_VAR → stack[3] = scope[2][28]
// 105 GET_VAR → stack[4] = scope[2][19]
// 108 GET_PROP stack[3] = stack[3][stack[4]]
// 109 CALL func.apply(thisArg, [2 args]) → stack[0]
// 111 POP stack[0]
// 111 JUMP → JUMP_TO=134
// 114 SET_VAR scope[0][13] ← stack[-1]
// 117 GET_VAR → stack[-1] = scope[1][11]
// 120 DUP → stack[0] = stack[-1]
// 120 GET_PROP_NAME stack[0] ← stack[0]["push"]
// 123 NEW_OBJECT → stack[1] = {}
// 124 GET_VAR → stack[2] = scope[0][13]
// 126 DEFINE_PROP Object.defineProperty(stack[1], "err", stack[2])
// 128 PUSH_STRING → stack[2] = "d_we"
// 130 DEFINE_PROP Object.defineProperty(stack[1], "type", stack[2])
// 133 CALL func.apply(thisArg, [1 args]) → stack[-1]
// 135 POP stack[-1]
// 136 PUSH_UNDEFINED → stack[-1] = undefined
// 137 GET_VAR → stack[0] = scope[2][25]
// 140 GET_VAR → stack[1] = scope[1][2]
// 142 GET_PROP_NAME stack[1] ← stack[1]["wID"]
// 145 PUSH_UNDEFINED → stack[2] = undefined
// 146 GET_VAR → stack[3] = scope[0][2]
// 149 CALL func.apply(thisArg, [0 args]) → stack[2]
// 151 CALL func.apply(thisArg, [2 args]) → stack[-1]
// 153 POP stack[-1]
// 154 GET_VAR → stack[-1] = scope[0][4]
// 157 GET_VAR → stack[0] = scope[0][7]
// 160 NEW_ARRAY → stack[-1] = [...top 2 elements]
// 162 DUP → stack[0] = stack[-1]
// 162 GET_PROP_NAME stack[0] ← stack[0]["includes"]
// 165 PUSH_UNDEFINED → stack[1] = undefined
// 166 GET_VAR → stack[2] = scope[2][21]
// 169 CALL func.apply(thisArg, [0 args]) → stack[1]
// 171 CALL func.apply(thisArg, [1 args]) → stack[-1]
// 172 JUMP_IF_FALSE if (!stack[-1]) JUMP_TO=181
// 175 GET_VAR → stack[-1] = scope[1][2]
// 177 GET_PROP_NAME stack[-1] ← stack[-1]["wID"]
// 179 PUSH_STRING → stack[0] = ""
// 181 SET_GLOBAL_PROP stack[0]["rtcIP"] ← stack[-1]
// 184 PUSH_UNDEFINED → stack[-1] = undefined
// 185 GET_VAR → stack[0] = scope[2][25]
// 188 GET_VAR → stack[1] = scope[1][2]
// 190 GET_PROP_NAME stack[1] ← stack[1]["plugins"]
// 193 PUSH_UNDEFINED → stack[2] = undefined
// 194 GET_VAR → stack[3] = scope[1][18]
// 197 CALL func.apply(thisArg, [0 args]) → stack[2]
// 199 CALL func.apply(thisArg, [2 args]) → stack[-1]
// 201 POP stack[-1]
// 202 PUSH_UNDEFINED → stack[-1] = undefined
// 203 GET_VAR → stack[0] = scope[2][25]
// 206 GET_VAR → stack[1] = scope[1][2]
// 208 GET_PROP_NAME stack[1] ← stack[1]["screen"]
// 211 PUSH_UNDEFINED → stack[2] = undefined
// 212 GET_VAR → stack[3] = scope[1][15]
// 215 CALL func.apply(thisArg, [0 args]) → stack[2]
// 217 CALL func.apply(thisArg, [2 args]) → stack[-1]
// 219 POP stack[-1]
// 220 PUSH_UNDEFINED → stack[-1] = undefined
// 221 GET_VAR → stack[0] = scope[2][25]
// 224 GET_VAR → stack[1] = scope[1][2]
// 226 GET_PROP_NAME stack[1] ← stack[1]["canvasIntegrity"]
// 229 GET_VAR → stack[2] = scope[2][28]
// 232 GET_VAR → stack[3] = scope[2][16]
// 235 GET_PROP stack[2] = stack[2][stack[3]]
// 236 CALL func.apply(thisArg, [2 args]) → stack[-1]
// 238 POP stack[-1]
// 239 PUSH_UNDEFINED → stack[-1] = undefined
// 240 GET_VAR → stack[0] = scope[2][25]
// 243 GET_VAR → stack[1] = scope[1][2]
// 245 GET_PROP_NAME stack[1] ← stack[1]["mediaQuery"]
// 248 PUSH_UNDEFINED → stack[2] = undefined
// 249 GET_VAR → stack[3] = scope[2][20]
// 252 CALL func.apply(thisArg, [0 args]) → stack[2]
// 254 CALL func.apply(thisArg, [2 args]) → stack[-1]
// 256 POP stack[-1]
// 256 JUMP → JUMP_TO=279
// 259 SET_VAR scope[0][14] ← stack[-2]
// 262 GET_VAR → stack[-2] = scope[1][11]
// 265 DUP → stack[-1] = stack[-2]
// 265 GET_PROP_NAME stack[-1] ← stack[-1]["push"]
// 268 NEW_OBJECT → stack[0] = {}
// 269 GET_VAR → stack[1] = scope[0][14]
// 271 DEFINE_PROP Object.defineProperty(stack[0], "err", stack[1])
// 273 PUSH_STRING → stack[1] = "d_m"
// 275 DEFINE_PROP Object.defineProperty(stack[0], "type", stack[1])
// 278 CALL func.apply(thisArg, [1 args]) → stack[-2]
// 280 POP stack[-2]
// 281 GET_VAR → stack[-2] = scope[1][9]
// 283 GET_PROP_NAME stack[-2] ← stack[-2]["msNewTokenList"]
// 286 DUP → stack[-1] = stack[-2]
// 286 GET_PROP_NAME stack[-1] ← stack[-1]["splice"]
// 288 PUSH_CONST → stack[0] = 0
// 291 CALL func.apply(thisArg, [1 args]) → stack[-2]
// 293 SET_VAR scope[0][9] ← stack[-2]
// 296 NEW_OBJECT → stack[-2] = {}
// 297 GET_VAR → stack[-1] = scope[0][9]
// 299 DEFINE_PROP Object.defineProperty(stack[-2], "tokenList", stack[-1])
// 302 SET_VAR scope[0][10] ← stack[-2]
// 304 PUSH_STRING → stack[-2] = "xmsi"
// 307 SET_VAR scope[0][11] ← stack[-2]
// 310 PUSH_UNDEFINED → stack[-2] = undefined
// 310 GET_GLOBAL → stack[-1] = parseInt
// 313 PUSH_UNDEFINED → stack[0] = undefined
// 314 GET_VAR → stack[1] = scope[2][12]
// 317 GET_VAR → stack[2] = scope[0][11]
// 320 CALL func.apply(thisArg, [1 args]) → stack[0]
// 321 PUSH_CONST → stack[1] = 10
// 324 CALL func.apply(thisArg, [2 args]) → stack[-2]
// 326 SET_VAR scope[0][12] ← stack[-2]
// 329 GET_VAR → stack[-2] = scope[0][12]
// 331 JUMP_IF_FALSE if (!stack[-2]) JUMP_TO=344
// 334 GET_VAR → stack[-2] = scope[0][12]
// 336 PUSH_CONST → stack[-1] = 1
// 339 ADD stack[-2] = stack[-2] + stack[-1]
// 339 PUSH_SCOPE_REF → stack[-1] = scope[0], stack[0] = 12
// 343 SET_PROP_NO_POP stack[-1][stack[0]] = stack[-2] (keep value)
// 344 POP stack[-2]
// 344 JUMP → JUMP_TO=350
// 346 PUSH_CONST → stack[-2] = 1
// 349 SET_VAR scope[0][12] ← stack[-2]
// 352 PUSH_UNDEFINED → stack[-2] = undefined
// 353 GET_VAR → stack[-1] = scope[2][13]
// 356 GET_VAR → stack[0] = scope[0][11]
// 359 GET_VAR → stack[1] = scope[0][12]
// 362 CALL func.apply(thisArg, [2 args]) → stack[-2]
// 364 POP stack[-2]
// 365 GET_VAR → stack[-2] = scope[1][2]
// 367 GET_PROP_NAME stack[-2] ← stack[-2]["wID"]
// 370 GET_VAR → stack[-1] = scope[0][12]
// 372 SET_GLOBAL_PROP stack[-1]["index"] ← stack[-2]
// 375 PUSH_UNDEFINED → stack[-2] = undefined
// 376 GET_VAR → stack[-1] = scope[2][25]
// 379 GET_VAR → stack[0] = scope[0][10]
// 382 GET_VAR → stack[1] = scope[1][2]
// 385 CALL func.apply(thisArg, [2 args]) → stack[-2]
// 387 POP stack[-2]
// 388 GET_VAR → stack[-2] = scope[0][10]
// 391 RETURN stack[-2]
