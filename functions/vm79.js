// 0 PUSH_FUNCTION → stack[0] = function[82]
// 3 SET_VAR scope[0][13] ← stack[0]
// 5 PUSH_FUNCTION → stack[0] = function[87]
// 8 SET_VAR scope[0][14] ← stack[0]
// 11 GET_VAR → stack[0] = scope[0][3]
// 13 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=14 else POP
// 16 NEW_OBJECT → stack[0] = {}
// 17 SET_VAR scope[0][3] ← stack[0]
// 20 GET_VAR → stack[0] = scope[2][2]
// 22 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=28
// 25 GET_VAR → stack[0] = scope[0][2]
// 27 GET_GLOBAL → stack[1] = Request
// 30 INSTANCEOF stack[0] = stack[0] instanceof stack[1]
// 31 SET_VAR scope[0][4] ← stack[0]
// 33 PUSH_STRING → stack[0] = ""
// 36 SET_VAR scope[0][5] ← stack[0]
// 38 PUSH_STRING → stack[0] = "GET"
// 41 SET_VAR scope[0][6] ← stack[0]
// 44 GET_VAR → stack[0] = scope[0][4]
// 46 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=242
// 49 GET_VAR → stack[0] = scope[0][2]
// 51 GET_PROP_NAME stack[0] ← stack[0]["url"]
// 54 SET_VAR scope[0][5] ← stack[0]
// 57 GET_VAR → stack[0] = scope[0][2]
// 59 GET_PROP_NAME stack[0] ← stack[0]["method"]
// 61 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=68
// 64 GET_VAR → stack[0] = scope[0][2]
// 66 GET_PROP_NAME stack[0] ← stack[0]["method"]
// 68 JUMP → JUMP_TO=71
// 70 PUSH_STRING → stack[1] = "GET"
// 73 SET_VAR scope[0][6] ← stack[1]
// 76 PUSH_UNDEFINED → stack[1] = undefined
// 77 GET_VAR → stack[2] = scope[3][13]
// 80 GET_VAR → stack[3] = scope[0][5]
// 83 CALL func.apply(thisArg, [1 args]) → stack[1]
// 84 JUMP_IF_FALSE_OR_POP if (stack[1]) POP else JUMP_TO=98
// 87 GET_VAR → stack[1] = scope[0][6]
// 89 PUSH_STRING → stack[2] = "GET"
// 92 STRICT_EQUAL stack[1] = stack[1] === stack[2]
// 92 JUMP_IF_TRUE_OR_POP if (stack[1]) JUMP_TO=98 else POP
// 95 GET_VAR → stack[1] = scope[0][6]
// 97 PUSH_STRING → stack[2] = "POST"
// 100 STRICT_EQUAL stack[1] = stack[1] === stack[2]
// 100 JUMP_IF_FALSE if (!stack[1]) JUMP_TO=227
// 102 GET_GLOBAL → stack[1] = URL
// 105 GET_VAR → stack[2] = scope[0][5]
// 108 FUNCTION_BIND_APPLY → stack[1] = new stack[2](1 args)
// 110 SET_VAR scope[0][7] ← stack[1]
// 113 GET_VAR → stack[1] = scope[3][1]
// 115 GET_PROP_NAME stack[1] ← stack[1]["grecaptcha"]
// 117 JUMP_IF_FALSE_OR_POP if (stack[1]) POP else JUMP_TO=124
// 120 GET_VAR → stack[1] = scope[3][1]
// 122 GET_PROP_NAME stack[1] ← stack[1]["grecaptcha"]
// 124 GET_PROP_NAME stack[1] ← stack[1]["enabledPaths"]
// 126 JUMP_IF_FALSE_OR_POP if (stack[1]) POP else JUMP_TO=143
// 129 GET_VAR → stack[1] = scope[3][1]
// 131 GET_PROP_NAME stack[1] ← stack[1]["grecaptcha"]
// 133 GET_PROP_NAME stack[1] ← stack[1]["enabledPaths"]
// 136 DUP → stack[2] = stack[1]
// 136 GET_PROP_NAME stack[2] ← stack[2]["includes"]
// 139 GET_VAR → stack[3] = scope[0][7]
// 141 GET_PROP_NAME stack[3] ← stack[3]["pathname"]
// 144 CALL func.apply(thisArg, [1 args]) → stack[1]
// 145 JUMP_IF_FALSE if (!stack[1]) JUMP_TO=218
// 148 GET_VAR → stack[1] = scope[3][1]
// 150 GET_PROP_NAME stack[1] ← stack[1]["grecaptcha"]
// 152 GET_PROP_NAME stack[1] ← stack[1]["enabledPathActionMap"]
// 155 SET_VAR scope[0][8] ← stack[1]
// 158 GET_VAR → stack[1] = scope[0][8]
// 161 GET_VAR → stack[2] = scope[0][7]
// 163 GET_PROP_NAME stack[2] ← stack[2]["pathname"]
// 166 GET_PROP stack[1] = stack[1][stack[2]]
// 166 JUMP_IF_FALSE if (!stack[1]) JUMP_TO=177
// 169 GET_VAR → stack[1] = scope[0][8]
// 172 GET_VAR → stack[2] = scope[0][7]
// 174 GET_PROP_NAME stack[2] ← stack[2]["pathname"]
// 177 GET_PROP stack[1] = stack[1][stack[2]]
// 177 JUMP → JUMP_TO=183
// 180 GET_VAR → stack[2] = scope[0][7]
// 182 GET_PROP_NAME stack[2] ← stack[2]["pathname"]
// 185 SET_VAR scope[0][9] ← stack[2]
// 188 PUSH_UNDEFINED → stack[2] = undefined
// 189 GET_VAR → stack[3] = scope[2][7]
// 192 GET_VAR → stack[4] = scope[3][1]
// 194 GET_PROP_NAME stack[4] ← stack[4]["grecaptcha"]
// 196 GET_PROP_NAME stack[4] ← stack[4]["siteKey"]
// 199 GET_VAR → stack[5] = scope[0][9]
// 202 CALL func.apply(thisArg, [2 args]) → stack[2]
// 204 DUP → stack[3] = stack[2]
// 204 GET_PROP_NAME stack[3] ← stack[3]["then"]
// 206 PUSH_FUNCTION → stack[4] = function[80]
// 209 CALL func.apply(thisArg, [1 args]) → stack[2]
// 211 DUP → stack[3] = stack[2]
// 211 GET_PROP_NAME stack[3] ← stack[3]["catch"]
// 213 PUSH_FUNCTION → stack[4] = function[81]
// 216 CALL func.apply(thisArg, [1 args]) → stack[2]
// 218 RETURN stack[2]
// 218 JUMP → JUMP_TO=226
// 221 PUSH_UNDEFINED → stack[2] = undefined
// 222 GET_VAR → stack[3] = scope[0][13]
// 225 CALL func.apply(thisArg, [0 args]) → stack[2]
// 227 RETURN stack[2]
// 227 JUMP → JUMP_TO=241
// 230 PUSH_UNDEFINED → stack[2] = undefined
// 231 GET_VAR → stack[3] = scope[1][2]
// 234 GET_VAR → stack[4] = scope[0][2]
// 237 GET_VAR → stack[5] = scope[0][3]
// 240 CALL func.apply(thisArg, [2 args]) → stack[2]
// 242 RETURN stack[2]
// 242 JUMP → JUMP_TO=480
// 245 GET_VAR → stack[2] = scope[0][3]
// 247 GET_PROP_NAME stack[2] ← stack[2]["headers"]
// 250 NOT stack[2] = !stack[2]
// 250 JUMP_IF_FALSE if (!stack[2]) JUMP_TO=259
// 253 GET_VAR → stack[2] = scope[0][3]
// 255 GET_GLOBAL → stack[3] = Headers
// 258 FUNCTION_BIND_APPLY → stack[3] = new stack[3](0 args)
// 259 SET_GLOBAL_PROP stack[3]["headers"] ← stack[2]
// 262 GET_VAR → stack[2] = scope[0][2]
// 265 SET_VAR scope[0][5] ← stack[2]
// 268 GET_VAR → stack[2] = scope[0][3]
// 270 GET_PROP_NAME stack[2] ← stack[2]["method"]
// 272 JUMP_IF_FALSE if (!stack[2]) JUMP_TO=284
// 275 GET_VAR → stack[2] = scope[0][3]
// 277 GET_PROP_NAME stack[2] ← stack[2]["method"]
// 280 DUP → stack[3] = stack[2]
// 280 GET_PROP_NAME stack[3] ← stack[3]["toUpperCase"]
// 283 CALL func.apply(thisArg, [0 args]) → stack[2]
// 284 JUMP → JUMP_TO=287
// 286 PUSH_STRING → stack[3] = "GET"
// 289 SET_VAR scope[0][6] ← stack[3]
// 292 PUSH_UNDEFINED → stack[3] = undefined
// 293 GET_VAR → stack[4] = scope[3][13]
// 296 GET_VAR → stack[5] = scope[0][5]
// 299 CALL func.apply(thisArg, [1 args]) → stack[3]
// 300 JUMP_IF_FALSE_OR_POP if (stack[3]) POP else JUMP_TO=314
// 303 GET_VAR → stack[3] = scope[0][6]
// 305 PUSH_STRING → stack[4] = "GET"
// 308 STRICT_EQUAL stack[3] = stack[3] === stack[4]
// 308 JUMP_IF_TRUE_OR_POP if (stack[3]) JUMP_TO=314 else POP
// 311 GET_VAR → stack[3] = scope[0][6]
// 313 PUSH_STRING → stack[4] = "POST"
// 316 STRICT_EQUAL stack[3] = stack[3] === stack[4]
// 316 JUMP_IF_FALSE if (!stack[3]) JUMP_TO=466
// 318 PUSH_STRING → stack[3] = ""
// 321 SET_VAR scope[0][10] ← stack[3]
// 323 GET_GLOBAL → stack[3] = RegExp
// 325 PUSH_STRING → stack[4] = "^\/.+\/.+$"
// 328 FUNCTION_BIND_APPLY → stack[3] = new stack[4](1 args)
// 330 DUP → stack[4] = stack[3]
// 330 GET_PROP_NAME stack[4] ← stack[4]["test"]
// 333 GET_VAR → stack[5] = scope[0][5]
// 336 CALL func.apply(thisArg, [1 args]) → stack[3]
// 337 JUMP_IF_FALSE if (!stack[3]) JUMP_TO=345
// 340 GET_VAR → stack[3] = scope[0][5]
// 343 SET_VAR scope[0][10] ← stack[3]
// 345 JUMP → JUMP_TO=358
// 347 GET_GLOBAL → stack[3] = URL
// 350 GET_VAR → stack[4] = scope[0][5]
// 353 FUNCTION_BIND_APPLY → stack[3] = new stack[4](1 args)
// 354 GET_PROP_NAME stack[3] ← stack[3]["pathname"]
// 357 SET_VAR scope[0][10] ← stack[3]
// 360 GET_VAR → stack[3] = scope[3][1]
// 362 GET_PROP_NAME stack[3] ← stack[3]["grecaptcha"]
// 364 JUMP_IF_FALSE_OR_POP if (stack[3]) POP else JUMP_TO=371
// 367 GET_VAR → stack[3] = scope[3][1]
// 369 GET_PROP_NAME stack[3] ← stack[3]["grecaptcha"]
// 371 GET_PROP_NAME stack[3] ← stack[3]["enabledPaths"]
// 373 JUMP_IF_FALSE_OR_POP if (stack[3]) POP else JUMP_TO=388
// 376 GET_VAR → stack[3] = scope[3][1]
// 378 GET_PROP_NAME stack[3] ← stack[3]["grecaptcha"]
// 380 GET_PROP_NAME stack[3] ← stack[3]["enabledPaths"]
// 383 DUP → stack[4] = stack[3]
// 383 GET_PROP_NAME stack[4] ← stack[4]["includes"]
// 386 GET_VAR → stack[5] = scope[0][10]
// 389 CALL func.apply(thisArg, [1 args]) → stack[3]
// 390 JUMP_IF_FALSE if (!stack[3]) JUMP_TO=457
// 393 GET_VAR → stack[3] = scope[3][1]
// 395 GET_PROP_NAME stack[3] ← stack[3]["grecaptcha"]
// 397 GET_PROP_NAME stack[3] ← stack[3]["enabledPathActionMap"]
// 400 SET_VAR scope[0][11] ← stack[3]
// 403 GET_VAR → stack[3] = scope[0][11]
// 406 GET_VAR → stack[4] = scope[0][10]
// 409 GET_PROP stack[3] = stack[3][stack[4]]
// 409 JUMP_IF_FALSE if (!stack[3]) JUMP_TO=418
// 412 GET_VAR → stack[3] = scope[0][11]
// 415 GET_VAR → stack[4] = scope[0][10]
// 418 GET_PROP stack[3] = stack[3][stack[4]]
// 418 JUMP → JUMP_TO=422
// 421 GET_VAR → stack[4] = scope[0][10]
// 424 SET_VAR scope[0][12] ← stack[4]
// 427 PUSH_UNDEFINED → stack[4] = undefined
// 428 GET_VAR → stack[5] = scope[2][7]
// 431 GET_VAR → stack[6] = scope[3][1]
// 433 GET_PROP_NAME stack[6] ← stack[6]["grecaptcha"]
// 435 GET_PROP_NAME stack[6] ← stack[6]["siteKey"]
// 438 GET_VAR → stack[7] = scope[0][12]
// 441 CALL func.apply(thisArg, [2 args]) → stack[4]
// 443 DUP → stack[5] = stack[4]
// 443 GET_PROP_NAME stack[5] ← stack[5]["then"]
// 445 PUSH_FUNCTION → stack[6] = function[85]
// 448 CALL func.apply(thisArg, [1 args]) → stack[4]
// 450 DUP → stack[5] = stack[4]
// 450 GET_PROP_NAME stack[5] ← stack[5]["catch"]
// 452 PUSH_FUNCTION → stack[6] = function[86]
// 455 CALL func.apply(thisArg, [1 args]) → stack[4]
// 457 RETURN stack[4]
// 457 JUMP → JUMP_TO=465
// 460 PUSH_UNDEFINED → stack[4] = undefined
// 461 GET_VAR → stack[5] = scope[0][14]
// 464 CALL func.apply(thisArg, [0 args]) → stack[4]
// 466 RETURN stack[4]
// 466 JUMP → JUMP_TO=480
// 469 PUSH_UNDEFINED → stack[4] = undefined
// 470 GET_VAR → stack[5] = scope[1][2]
// 473 GET_VAR → stack[6] = scope[0][2]
// 476 GET_VAR → stack[7] = scope[0][3]
// 479 CALL func.apply(thisArg, [2 args]) → stack[4]
// 481 RETURN stack[4]
// 482 PUSH_UNDEFINED → stack[4] = undefined
// 483 RETURN stack[4]
