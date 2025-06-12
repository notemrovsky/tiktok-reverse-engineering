// 0 PUSH_CONST → stack[0] = 0
// 3 SET_VAR scope[0][2] ← stack[0]
// 5 GET_GLOBAL → stack[0] = window
// 7 GET_PROP_NAME stack[0] ← stack[0]["opera"]
// 9 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=23 else POP
// 11 GET_GLOBAL → stack[0] = navigator
// 13 GET_PROP_NAME stack[0] ← stack[0]["userAgent"]
// 16 DUP → stack[1] = stack[0]
// 16 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 18 PUSH_STRING → stack[2] = " OPR/"
// 21 CALL func.apply(thisArg, [1 args]) → stack[0]
// 22 PUSH_CONST → stack[1] = 0
// 25 GREATER_EQUAL stack[0] = stack[0] >= stack[1]
// 25 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=29
// 27 PUSH_STRING → stack[0] = "Opera"
// 29 JUMP → JUMP_TO=32
// 31 PUSH_CONST → stack[1] = 0
// 34 SET_VAR scope[0][3] ← stack[1]
// 36 PUSH_STRING → stack[1] = "undefined"
// 38 TYPEOF_GLOBAL → stack[2] = typeof global["InstallTrigger"]
// 41 NOT_EQUAL stack[1] = stack[1] != stack[2]
// 41 JUMP_IF_FALSE if (!stack[1]) JUMP_TO=45
// 43 PUSH_STRING → stack[1] = "Firefox"
// 45 JUMP → JUMP_TO=48
// 47 PUSH_CONST → stack[2] = 0
// 50 SET_VAR scope[0][4] ← stack[2]
// 52 GET_GLOBAL → stack[2] = Object
// 54 GET_PROP_NAME stack[2] ← stack[2]["prototype"]
// 56 GET_PROP_NAME stack[2] ← stack[2]["toString"]
// 59 DUP → stack[3] = stack[2]
// 59 GET_PROP_NAME stack[3] ← stack[3]["call"]
// 61 GET_GLOBAL → stack[4] = window
// 63 GET_PROP_NAME stack[4] ← stack[4]["HTMLElement"]
// 66 CALL func.apply(thisArg, [1 args]) → stack[2]
// 68 DUP → stack[3] = stack[2]
// 68 GET_PROP_NAME stack[3] ← stack[3]["indexOf"]
// 70 PUSH_STRING → stack[4] = "Constructor"
// 73 CALL func.apply(thisArg, [1 args]) → stack[2]
// 74 PUSH_CONST → stack[3] = 0
// 77 GREATER_THAN stack[2] = stack[2] > stack[3]
// 77 JUMP_IF_TRUE_OR_POP if (stack[2]) JUMP_TO=105 else POP
// 79 GET_GLOBAL → stack[2] = window
// 81 GET_PROP_NAME stack[2] ← stack[2]["safari"]
// 83 JUMP_IF_FALSE_OR_POP if (stack[2]) POP else JUMP_TO=89
// 85 GET_GLOBAL → stack[2] = window
// 87 GET_PROP_NAME stack[2] ← stack[2]["safari"]
// 89 GET_PROP_NAME stack[2] ← stack[2]["pushNotification"]
// 91 JUMP_IF_FALSE_OR_POP if (stack[2]) POP else JUMP_TO=105
// 93 PUSH_STRING → stack[2] = "[object SafariRemoteNotification]"
// 95 GET_GLOBAL → stack[3] = window
// 97 GET_PROP_NAME stack[3] ← stack[3]["safari"]
// 99 GET_PROP_NAME stack[3] ← stack[3]["pushNotification"]
// 102 DUP → stack[4] = stack[3]
// 102 GET_PROP_NAME stack[4] ← stack[4]["toString"]
// 105 CALL func.apply(thisArg, [0 args]) → stack[3]
// 107 STRICT_EQUAL stack[2] = stack[2] === stack[3]
// 107 JUMP_IF_TRUE_OR_POP if (stack[2]) JUMP_TO=111 else POP
// 109 GET_GLOBAL → stack[2] = window
// 111 GET_PROP_NAME stack[2] ← stack[2]["ApplePaySession"]
// 114 SET_VAR scope[0][5] ← stack[2]
// 117 GET_VAR → stack[2] = scope[0][5]
// 119 JUMP_IF_FALSE if (!stack[2]) JUMP_TO=123
// 121 PUSH_STRING → stack[2] = "Safari"
// 123 JUMP → JUMP_TO=126
// 125 PUSH_CONST → stack[3] = 0
// 128 SET_VAR scope[0][5] ← stack[3]
// 131 GET_VAR → stack[3] = scope[0][5]
// 133 JUMP_IF_FALSE_OR_POP if (stack[3]) POP else JUMP_TO=144
// 135 GET_GLOBAL → stack[3] = navigator
// 137 GET_PROP_NAME stack[3] ← stack[3]["userAgent"]
// 140 DUP → stack[4] = stack[3]
// 140 GET_PROP_NAME stack[4] ← stack[4]["match"]
// 142 PUSH_STRING → stack[5] = "CriOS"
// 145 CALL func.apply(thisArg, [1 args]) → stack[3]
// 146 JUMP_IF_FALSE if (!stack[3]) JUMP_TO=150
// 148 PUSH_STRING → stack[3] = "Chrome IOS"
// 150 JUMP → JUMP_TO=153
// 152 PUSH_CONST → stack[4] = 0
// 155 SET_VAR scope[0][6] ← stack[4]
// 157 GET_GLOBAL → stack[4] = window
// 159 GET_PROP_NAME stack[4] ← stack[4]["chrome"]
// 161 JUMP_IF_FALSE_OR_POP if (stack[4]) POP else JUMP_TO=165
// 164 GET_VAR → stack[4] = scope[0][3]
// 167 NOT stack[4] = !stack[4]
// 167 JUMP_IF_FALSE if (!stack[4]) JUMP_TO=171
// 169 PUSH_STRING → stack[4] = "Chrome"
// 171 JUMP → JUMP_TO=174
// 173 PUSH_CONST → stack[5] = 0
// 176 SET_VAR scope[0][7] ← stack[5]
// 179 PUSH_UNDEFINED → stack[5] = undefined
// 180 GET_VAR → stack[6] = scope[2][0]
// 183 CALL func.apply(thisArg, [0 args]) → stack[5]
// 184 JUMP_IF_FALSE if (!stack[5]) JUMP_TO=188
// 186 PUSH_STRING → stack[5] = "IE"
// 188 JUMP → JUMP_TO=191
// 190 PUSH_CONST → stack[6] = 0
// 193 SET_VAR scope[0][8] ← stack[6]
// 196 GET_VAR → stack[6] = scope[0][8]
// 199 NOT stack[6] = !stack[6]
// 199 JUMP_IF_FALSE_OR_POP if (stack[6]) POP else JUMP_TO=203
// 201 GET_GLOBAL → stack[6] = window
// 203 GET_PROP_NAME stack[6] ← stack[6]["StyleMedia"]
// 205 JUMP_IF_FALSE if (!stack[6]) JUMP_TO=209
// 207 PUSH_STRING → stack[6] = "Edge"
// 209 JUMP → JUMP_TO=212
// 211 PUSH_CONST → stack[7] = 0
// 214 SET_VAR scope[0][9] ← stack[7]
// 216 PUSH_STRING → stack[7] = ""
// 219 SET_VAR scope[0][10] ← stack[7]
// 222 GET_VAR → stack[7] = scope[0][3]
// 224 JUMP_IF_FALSE if (!stack[7]) JUMP_TO=235
// 227 GET_VAR → stack[7] = scope[0][2]
// 229 PUSH_CONST → stack[8] = 1
// 232 BITWISE_OR stack[7] = stack[7] | stack[8]
// 232 PUSH_SCOPE_REF → stack[8] = scope[0], stack[9] = 2
// 236 SET_PROP_NO_POP stack[8][stack[9]] = stack[7] (keep value)
// 237 POP stack[7]
// 238 GET_VAR → stack[7] = scope[0][4]
// 240 JUMP_IF_FALSE if (!stack[7]) JUMP_TO=254
// 243 GET_VAR → stack[7] = scope[0][2]
// 245 PUSH_CONST → stack[8] = 1
// 247 PUSH_CONST → stack[9] = 1
// 250 LEFT_SHIFT stack[8] = stack[8] << stack[9]
// 251 BITWISE_OR stack[7] = stack[7] | stack[8]
// 251 PUSH_SCOPE_REF → stack[8] = scope[0], stack[9] = 2
// 255 SET_PROP_NO_POP stack[8][stack[9]] = stack[7] (keep value)
// 256 POP stack[7]
// 257 GET_VAR → stack[7] = scope[0][9]
// 259 JUMP_IF_FALSE if (!stack[7]) JUMP_TO=273
// 262 GET_VAR → stack[7] = scope[0][2]
// 264 PUSH_CONST → stack[8] = 1
// 266 PUSH_CONST → stack[9] = 2
// 269 LEFT_SHIFT stack[8] = stack[8] << stack[9]
// 270 BITWISE_OR stack[7] = stack[7] | stack[8]
// 270 PUSH_SCOPE_REF → stack[8] = scope[0], stack[9] = 2
// 274 SET_PROP_NO_POP stack[8][stack[9]] = stack[7] (keep value)
// 275 POP stack[7]
// 276 GET_VAR → stack[7] = scope[0][8]
// 278 JUMP_IF_FALSE if (!stack[7]) JUMP_TO=292
// 281 GET_VAR → stack[7] = scope[0][2]
// 283 PUSH_CONST → stack[8] = 1
// 285 PUSH_CONST → stack[9] = 3
// 288 LEFT_SHIFT stack[8] = stack[8] << stack[9]
// 289 BITWISE_OR stack[7] = stack[7] | stack[8]
// 289 PUSH_SCOPE_REF → stack[8] = scope[0], stack[9] = 2
// 293 SET_PROP_NO_POP stack[8][stack[9]] = stack[7] (keep value)
// 294 POP stack[7]
// 295 GET_VAR → stack[7] = scope[0][7]
// 297 JUMP_IF_FALSE if (!stack[7]) JUMP_TO=311
// 300 GET_VAR → stack[7] = scope[0][2]
// 302 PUSH_CONST → stack[8] = 1
// 304 PUSH_CONST → stack[9] = 4
// 307 LEFT_SHIFT stack[8] = stack[8] << stack[9]
// 308 BITWISE_OR stack[7] = stack[7] | stack[8]
// 308 PUSH_SCOPE_REF → stack[8] = scope[0], stack[9] = 2
// 312 SET_PROP_NO_POP stack[8][stack[9]] = stack[7] (keep value)
// 313 POP stack[7]
// 314 GET_VAR → stack[7] = scope[0][6]
// 316 JUMP_IF_FALSE if (!stack[7]) JUMP_TO=330
// 319 GET_VAR → stack[7] = scope[0][2]
// 321 PUSH_CONST → stack[8] = 1
// 323 PUSH_CONST → stack[9] = 5
// 326 LEFT_SHIFT stack[8] = stack[8] << stack[9]
// 327 BITWISE_OR stack[7] = stack[7] | stack[8]
// 327 PUSH_SCOPE_REF → stack[8] = scope[0], stack[9] = 2
// 331 SET_PROP_NO_POP stack[8][stack[9]] = stack[7] (keep value)
// 332 POP stack[7]
// 333 GET_VAR → stack[7] = scope[0][5]
// 335 JUMP_IF_FALSE if (!stack[7]) JUMP_TO=349
// 338 GET_VAR → stack[7] = scope[0][2]
// 340 PUSH_CONST → stack[8] = 1
// 342 PUSH_CONST → stack[9] = 6
// 345 LEFT_SHIFT stack[8] = stack[8] << stack[9]
// 346 BITWISE_OR stack[7] = stack[7] | stack[8]
// 346 PUSH_SCOPE_REF → stack[8] = scope[0], stack[9] = 2
// 350 SET_PROP_NO_POP stack[8][stack[9]] = stack[7] (keep value)
// 351 POP stack[7]
// 352 NEW_OBJECT → stack[7] = {}
// 353 GET_VAR → stack[8] = scope[0][2]
// 355 DEFINE_PROP Object.defineProperty(stack[7], "data", stack[8])
// 358 RETURN stack[7]
// 358 JUMP → JUMP_TO=381
// 361 SET_VAR scope[0][11] ← stack[6]
// 364 NEW_OBJECT → stack[6] = {}
// 364 PUSH_CONST → stack[7] = 1
// 367 NEGATE stack[7] = -stack[7]
// 367 DEFINE_PROP Object.defineProperty(stack[6], "data", stack[7])
// 370 NEW_OBJECT → stack[7] = {}
// 371 GET_VAR → stack[8] = scope[0][11]
// 373 DEFINE_PROP Object.defineProperty(stack[7], "err", stack[8])
// 375 PUSH_STRING → stack[8] = "d_w_b"
// 377 DEFINE_PROP Object.defineProperty(stack[7], "type", stack[8])
// 379 DEFINE_PROP Object.defineProperty(stack[6], "error", stack[7])
// 382 RETURN stack[6]
// 383 PUSH_UNDEFINED → stack[6] = undefined
// 384 RETURN stack[6]
