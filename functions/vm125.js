// 1 NEW_ARRAY → stack[0] = [...top 0 elements]
// 3 SET_VAR scope[0][3] ← stack[0]
// 6 NEW_OBJECT → stack[0] = {}
// 7 SET_VAR scope[0][4] ← stack[0]
// 9 PUSH_CONST → stack[0] = 0
// 12 SET_VAR scope[0][5] ← stack[0]
// 15 GET_VAR → stack[0] = scope[0][5]
// 18 GET_VAR → stack[1] = scope[0][2]
// 20 GET_PROP_NAME stack[1] ← stack[1]["length"]
// 23 LESS_THAN stack[0] = stack[0] < stack[1]
// 23 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=114
// 26 GET_VAR → stack[0] = scope[0][2]
// 29 GET_VAR → stack[1] = scope[0][5]
// 32 GET_PROP stack[0] = stack[0][stack[1]]
// 32 GET_PROP_NAME stack[0] ← stack[0]["0"]
// 35 SET_VAR scope[0][6] ← stack[0]
// 38 GET_VAR → stack[0] = scope[0][2]
// 41 GET_VAR → stack[1] = scope[0][5]
// 44 GET_PROP stack[0] = stack[0][stack[1]]
// 44 GET_PROP_NAME stack[0] ← stack[0]["1"]
// 47 SET_VAR scope[0][7] ← stack[0]
// 50 GET_VAR → stack[0] = scope[0][7]
// 53 TYPEOF stack[0] = typeof stack[0]
// 53 PUSH_STRING → stack[1] = "number"
// 56 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 56 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=81
// 59 GET_VAR → stack[0] = scope[0][7]
// 61 PUSH_CONST → stack[1] = 0
// 64 LESS_THAN stack[0] = stack[0] < stack[1]
// 64 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=73 else POP
// 67 GET_VAR → stack[0] = scope[0][7]
// 69 PUSH_CONST → stack[1] = 1
// 72 MOD stack[0] = stack[0] % stack[1]
// 72 PUSH_CONST → stack[1] = 0
// 75 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 75 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=81 else POP
// 78 GET_VAR → stack[0] = scope[0][7]
// 80 PUSH_MAGIC_NUMBER → stack[1] = 4294967296
// 83 GREATER_EQUAL stack[0] = stack[0] >= stack[1]
// 83 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=87
// 85 JUMP → JUMP_TO=108
// 87 JUMP → JUMP_TO=98
// 90 GET_VAR → stack[0] = scope[0][6]
// 92 PUSH_CONST → stack[1] = 255
// 95 GREATER_THAN stack[0] = stack[0] > stack[1]
// 95 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=97
// 97 JUMP → JUMP_TO=108
// 100 GET_VAR → stack[0] = scope[0][4]
// 103 GET_VAR → stack[1] = scope[0][6]
// 106 GET_VAR → stack[2] = scope[0][7]
// 109 SET_PROP stack[0][stack[1]] = stack[2]
// 109 PUSH_SCOPE_REF → stack[0] = scope[0], stack[1] = 5
// 113 POST_INC stack[0] = stack[0][stack[1]]++ (old value)
// 114 POP stack[0]
// 114 JUMP → JUMP_TO=13
// 117 GET_VAR → stack[0] = scope[0][3]
// 120 DUP → stack[1] = stack[0]
// 120 GET_PROP_NAME stack[1] ← stack[1]["push"]
// 122 GET_GLOBAL → stack[2] = Object
// 125 DUP → stack[3] = stack[2]
// 125 GET_PROP_NAME stack[3] ← stack[3]["keys"]
// 128 GET_VAR → stack[4] = scope[0][4]
// 131 CALL func.apply(thisArg, [1 args]) → stack[2]
// 132 GET_PROP_NAME stack[2] ← stack[2]["length"]
// 135 CALL func.apply(thisArg, [1 args]) → stack[0]
// 137 POP stack[0]
// 138 GET_VAR → stack[0] = scope[0][4]
// 140 FOR_IN_SETUP scope[20] = [Object.keys(stack[0]), stack[0]]
// 142 PUSH_SCOPE_REF → stack[0] = scope[0], stack[1] = 8
// 145 FOR_IN_NEXT stack[2][stack[1]] = next_key_from_scope[20]; stack[0] = has_more
// 147 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=431
// 150 GET_VAR → stack[0] = scope[0][4]
// 153 GET_VAR → stack[1] = scope[0][8]
// 156 GET_PROP stack[0] = stack[0][stack[1]]
// 157 SET_VAR scope[0][9] ← stack[0]
// 160 PUSH_UNDEFINED → stack[0] = undefined
// 160 GET_GLOBAL → stack[1] = parseInt
// 163 GET_VAR → stack[2] = scope[0][8]
// 166 CALL func.apply(thisArg, [1 args]) → stack[0]
// 168 SET_VAR scope[0][10] ← stack[0]
// 171 GET_VAR → stack[0] = scope[0][3]
// 174 DUP → stack[1] = stack[0]
// 174 GET_PROP_NAME stack[1] ← stack[1]["push"]
// 177 GET_VAR → stack[2] = scope[0][10]
// 180 CALL func.apply(thisArg, [1 args]) → stack[0]
// 182 POP stack[0]
// 183 GET_VAR → stack[0] = scope[0][9]
// 186 TYPEOF stack[0] = typeof stack[0]
// 186 PUSH_STRING → stack[1] = "number"
// 189 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 189 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=345
// 192 GET_VAR → stack[0] = scope[0][9]
// 194 PUSH_CONST → stack[1] = 65535
// 197 LESS_EQUAL stack[0] = stack[0] <= stack[1]
// 197 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=271
// 200 PUSH_UNDEFINED → stack[0] = undefined
// 201 GET_VAR → stack[1] = scope[1][8]
// 204 GET_VAR → stack[2] = scope[0][9]
// 207 CALL func.apply(thisArg, [1 args]) → stack[0]
// 209 SET_VAR scope[0][11] ← stack[0]
// 212 PUSH_UNDEFINED → stack[0] = undefined
// 213 GET_VAR → stack[1] = scope[1][8]
// 216 GET_VAR → stack[2] = scope[0][11]
// 218 GET_PROP_NAME stack[2] ← stack[2]["length"]
// 221 CALL func.apply(thisArg, [1 args]) → stack[0]
// 223 SET_VAR scope[0][12] ← stack[0]
// 226 GET_VAR → stack[0] = scope[0][3]
// 228 GET_PROP_NAME stack[0] ← stack[0]["push"]
// 231 DUP → stack[1] = stack[0]
// 231 GET_PROP_NAME stack[1] ← stack[1]["apply"]
// 234 GET_VAR → stack[2] = scope[0][3]
// 237 PUSH_UNDEFINED → stack[3] = undefined
// 238 GET_VAR → stack[4] = scope[2][0]
// 241 GET_VAR → stack[5] = scope[0][12]
// 244 CALL func.apply(thisArg, [1 args]) → stack[3]
// 246 CALL func.apply(thisArg, [2 args]) → stack[0]
// 248 POP stack[0]
// 249 GET_VAR → stack[0] = scope[0][3]
// 251 GET_PROP_NAME stack[0] ← stack[0]["push"]
// 254 DUP → stack[1] = stack[0]
// 254 GET_PROP_NAME stack[1] ← stack[1]["apply"]
// 257 GET_VAR → stack[2] = scope[0][3]
// 260 PUSH_UNDEFINED → stack[3] = undefined
// 261 GET_VAR → stack[4] = scope[2][0]
// 264 GET_VAR → stack[5] = scope[0][11]
// 267 CALL func.apply(thisArg, [1 args]) → stack[3]
// 269 CALL func.apply(thisArg, [2 args]) → stack[0]
// 271 POP stack[0]
// 271 JUMP → JUMP_TO=344
// 274 PUSH_UNDEFINED → stack[0] = undefined
// 275 GET_VAR → stack[1] = scope[1][7]
// 278 GET_VAR → stack[2] = scope[0][9]
// 281 CALL func.apply(thisArg, [1 args]) → stack[0]
// 283 SET_VAR scope[0][13] ← stack[0]
// 286 PUSH_UNDEFINED → stack[0] = undefined
// 287 GET_VAR → stack[1] = scope[1][8]
// 290 GET_VAR → stack[2] = scope[0][13]
// 292 GET_PROP_NAME stack[2] ← stack[2]["length"]
// 295 CALL func.apply(thisArg, [1 args]) → stack[0]
// 297 SET_VAR scope[0][14] ← stack[0]
// 300 GET_VAR → stack[0] = scope[0][3]
// 302 GET_PROP_NAME stack[0] ← stack[0]["push"]
// 305 DUP → stack[1] = stack[0]
// 305 GET_PROP_NAME stack[1] ← stack[1]["apply"]
// 308 GET_VAR → stack[2] = scope[0][3]
// 311 PUSH_UNDEFINED → stack[3] = undefined
// 312 GET_VAR → stack[4] = scope[2][0]
// 315 GET_VAR → stack[5] = scope[0][14]
// 318 CALL func.apply(thisArg, [1 args]) → stack[3]
// 320 CALL func.apply(thisArg, [2 args]) → stack[0]
// 322 POP stack[0]
// 323 GET_VAR → stack[0] = scope[0][3]
// 325 GET_PROP_NAME stack[0] ← stack[0]["push"]
// 328 DUP → stack[1] = stack[0]
// 328 GET_PROP_NAME stack[1] ← stack[1]["apply"]
// 331 GET_VAR → stack[2] = scope[0][3]
// 334 PUSH_UNDEFINED → stack[3] = undefined
// 335 GET_VAR → stack[4] = scope[2][0]
// 338 GET_VAR → stack[5] = scope[0][13]
// 341 CALL func.apply(thisArg, [1 args]) → stack[3]
// 343 CALL func.apply(thisArg, [2 args]) → stack[0]
// 345 POP stack[0]
// 345 JUMP → JUMP_TO=430
// 348 GET_VAR → stack[0] = scope[0][9]
// 351 TYPEOF stack[0] = typeof stack[0]
// 351 PUSH_STRING → stack[1] = "string"
// 354 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 354 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=429
// 356 GET_GLOBAL → stack[0] = TextEncoder
// 359 FUNCTION_BIND_APPLY → stack[0] = new stack[0](0 args)
// 361 DUP → stack[1] = stack[0]
// 361 GET_PROP_NAME stack[1] ← stack[1]["encode"]
// 364 GET_VAR → stack[2] = scope[0][9]
// 367 CALL func.apply(thisArg, [1 args]) → stack[0]
// 369 SET_VAR scope[0][15] ← stack[0]
// 372 PUSH_UNDEFINED → stack[0] = undefined
// 373 GET_VAR → stack[1] = scope[1][8]
// 376 GET_VAR → stack[2] = scope[0][15]
// 378 GET_PROP_NAME stack[2] ← stack[2]["length"]
// 381 CALL func.apply(thisArg, [1 args]) → stack[0]
// 383 SET_VAR scope[0][16] ← stack[0]
// 386 GET_VAR → stack[0] = scope[0][3]
// 388 GET_PROP_NAME stack[0] ← stack[0]["push"]
// 391 DUP → stack[1] = stack[0]
// 391 GET_PROP_NAME stack[1] ← stack[1]["apply"]
// 394 GET_VAR → stack[2] = scope[0][3]
// 397 PUSH_UNDEFINED → stack[3] = undefined
// 398 GET_VAR → stack[4] = scope[2][0]
// 401 GET_VAR → stack[5] = scope[0][16]
// 404 CALL func.apply(thisArg, [1 args]) → stack[3]
// 406 CALL func.apply(thisArg, [2 args]) → stack[0]
// 408 POP stack[0]
// 409 GET_VAR → stack[0] = scope[0][3]
// 411 GET_PROP_NAME stack[0] ← stack[0]["push"]
// 414 DUP → stack[1] = stack[0]
// 414 GET_PROP_NAME stack[1] ← stack[1]["apply"]
// 417 GET_VAR → stack[2] = scope[0][3]
// 420 PUSH_UNDEFINED → stack[3] = undefined
// 421 GET_VAR → stack[4] = scope[2][0]
// 424 GET_VAR → stack[5] = scope[0][15]
// 427 CALL func.apply(thisArg, [1 args]) → stack[3]
// 429 CALL func.apply(thisArg, [2 args]) → stack[0]
// 431 POP stack[0]
// 431 JUMP → JUMP_TO=141
// 433 GET_GLOBAL → stack[0] = Uint8Array
// 436 GET_VAR → stack[1] = scope[0][3]
// 439 FUNCTION_BIND_APPLY → stack[0] = new stack[1](1 args)
// 441 SET_VAR scope[0][17] ← stack[0]
// 443 PUSH_STRING → stack[0] = ""
// 446 SET_VAR scope[0][18] ← stack[0]
// 448 PUSH_CONST → stack[0] = 0
// 451 SET_VAR scope[0][19] ← stack[0]
// 454 GET_VAR → stack[0] = scope[0][19]
// 457 GET_VAR → stack[1] = scope[0][17]
// 459 GET_PROP_NAME stack[1] ← stack[1]["byteLength"]
// 462 LESS_THAN stack[0] = stack[0] < stack[1]
// 462 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=492
// 465 GET_VAR → stack[0] = scope[0][18]
// 467 GET_GLOBAL → stack[1] = String
// 470 DUP → stack[2] = stack[1]
// 470 GET_PROP_NAME stack[2] ← stack[2]["fromCharCode"]
// 473 GET_VAR → stack[3] = scope[0][17]
// 476 GET_VAR → stack[4] = scope[0][19]
// 479 GET_PROP stack[3] = stack[3][stack[4]]
// 480 CALL func.apply(thisArg, [1 args]) → stack[1]
// 482 ADD stack[0] = stack[0] + stack[1]
// 482 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 18
// 486 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 487 POP stack[0]
// 487 PUSH_SCOPE_REF → stack[0] = scope[0], stack[1] = 19
// 491 POST_INC stack[0] = stack[0][stack[1]]++ (old value)
// 492 POP stack[0]
// 492 JUMP → JUMP_TO=452
// 495 GET_VAR → stack[0] = scope[0][18]
// 498 RETURN stack[0]
