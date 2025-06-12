// 1 NEW_OBJECT → stack[0] = {}
// 1 PUSH_CONST → stack[1] = 0
// 3 DEFINE_PROP Object.defineProperty(stack[0], "aid", stack[1])
// 6 PUSH_TRUE → stack[1] = true
// 6 DEFINE_PROP Object.defineProperty(stack[0], "isSDK", stack[1])
// 9 NEW_ARRAY → stack[1] = [...top 0 elements]
// 10 DEFINE_PROP Object.defineProperty(stack[0], "enablePathList", stack[1])
// 13 NEW_ARRAY → stack[1] = [...top 0 elements]
// 14 DEFINE_PROP Object.defineProperty(stack[0], "urlRewriteRules", stack[1])
// 17 PUSH_FALSE → stack[1] = false
// 17 DEFINE_PROP Object.defineProperty(stack[0], "sdi", stack[1])
// 19 PUSH_STRING → stack[1] = ""
// 21 DEFINE_PROP Object.defineProperty(stack[0], "region", stack[1])
// 24 PUSH_FALSE → stack[1] = false
// 24 DEFINE_PROP Object.defineProperty(stack[0], "dev", stack[1])
// 26 PUSH_CONST → stack[1] = 0
// 28 DEFINE_PROP Object.defineProperty(stack[0], "mode", stack[1])
// 31 NEW_OBJECT → stack[1] = {}
// 32 PUSH_TRUE → stack[2] = true
// 32 DEFINE_PROP Object.defineProperty(stack[1], "enableSlardar", stack[2])
// 35 PUSH_FALSE → stack[2] = false
// 35 DEFINE_PROP Object.defineProperty(stack[1], "enableLazyload", stack[2])
// 37 PUSH_CONST → stack[2] = 0
// 39 DEFINE_PROP Object.defineProperty(stack[1], "settingLocation", stack[2])
// 41 DEFINE_PROP Object.defineProperty(stack[0], "slardarConfig", stack[1])
// 44 SET_VAR scope[0][3] ← stack[0]
// 47 PUSH_UNDEFINED → stack[0] = undefined
// 48 GET_VAR → stack[1] = scope[2][12]
// 51 GET_VAR → stack[2] = scope[0][3]
// 54 GET_VAR → stack[3] = scope[0][2]
// 57 CALL func.apply(thisArg, [2 args]) → stack[0]
// 59 POP stack[0]
// 60 GET_VAR → stack[0] = scope[2][0]
// 63 GET_VAR → stack[1] = scope[0][3]
// 65 GET_PROP_NAME stack[1] ← stack[1]["slardarConfig"]
// 67 SET_GLOBAL_PROP stack[1]["slardarConfig"] ← stack[0]
// 70 GET_VAR → stack[0] = scope[0][3]
// 72 GET_PROP_NAME stack[0] ← stack[0]["aid"]
// 74 PUSH_CONST → stack[1] = 0
// 77 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 77 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=95 else POP
// 79 GET_GLOBAL → stack[0] = Math
// 82 DUP → stack[1] = stack[0]
// 82 GET_PROP_NAME stack[1] ← stack[1]["floor"]
// 85 GET_VAR → stack[2] = scope[0][3]
// 87 GET_PROP_NAME stack[2] ← stack[2]["aid"]
// 90 CALL func.apply(thisArg, [1 args]) → stack[0]
// 92 GET_VAR → stack[1] = scope[0][3]
// 94 GET_PROP_NAME stack[1] ← stack[1]["aid"]
// 97 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 97 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=105
// 100 GET_VAR → stack[0] = scope[2][2]
// 102 PUSH_STRING → stack[1] = "option aid(Integer) is needed!"
// 105 FUNCTION_BIND_APPLY → stack[0] = new stack[1](1 args)
// 107 THROW stack[0]
// 108 GET_VAR → stack[0] = scope[2][8]
// 110 GET_PROP_NAME stack[0] ← stack[0]["aidList"]
// 113 DUP → stack[1] = stack[0]
// 113 GET_PROP_NAME stack[1] ← stack[1]["push"]
// 116 GET_VAR → stack[2] = scope[0][3]
// 118 GET_PROP_NAME stack[2] ← stack[2]["aid"]
// 121 CALL func.apply(thisArg, [1 args]) → stack[0]
// 123 POP stack[0]
// 124 GET_VAR → stack[0] = scope[2][0]
// 126 GET_PROP_NAME stack[0] ← stack[0]["aid"]
// 128 PUSH_CONST → stack[1] = 0
// 131 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 131 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=141
// 134 GET_VAR → stack[0] = scope[2][0]
// 137 GET_VAR → stack[1] = scope[0][3]
// 139 GET_PROP_NAME stack[1] ← stack[1]["aid"]
// 141 SET_GLOBAL_PROP stack[1]["aid"] ← stack[0]
// 144 GET_VAR → stack[0] = scope[0][3]
// 146 GET_PROP_NAME stack[0] ← stack[0]["isSDK"]
// 149 NOT stack[0] = !stack[0]
// 149 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=318
// 152 GET_VAR → stack[0] = scope[0][3]
// 154 GET_PROP_NAME stack[0] ← stack[0]["region"]
// 156 PUSH_STRING → stack[1] = ""
// 159 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 159 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=167
// 162 GET_VAR → stack[0] = scope[2][2]
// 164 PUSH_STRING → stack[1] = "region is null!"
// 167 FUNCTION_BIND_APPLY → stack[0] = new stack[1](1 args)
// 169 THROW stack[0]
// 170 GET_VAR → stack[0] = scope[0][3]
// 172 GET_PROP_NAME stack[0] ← stack[0]["region"]
// 174 PUSH_STRING → stack[1] = "cn"
// 177 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 177 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=185
// 180 GET_VAR → stack[0] = scope[2][2]
// 182 PUSH_STRING → stack[1] = "region is invalid!"
// 185 FUNCTION_BIND_APPLY → stack[0] = new stack[1](1 args)
// 187 THROW stack[0]
// 188 GET_VAR → stack[0] = scope[2][0]
// 191 GET_VAR → stack[1] = scope[0][3]
// 193 GET_PROP_NAME stack[1] ← stack[1]["region"]
// 195 SET_GLOBAL_PROP stack[1]["region"] ← stack[0]
// 198 GET_VAR → stack[0] = scope[2][0]
// 201 PUSH_UNDEFINED → stack[1] = undefined
// 202 GET_VAR → stack[2] = scope[2][5]
// 205 GET_VAR → stack[3] = scope[0][3]
// 207 GET_PROP_NAME stack[3] ← stack[3]["region"]
// 210 GET_VAR → stack[4] = scope[0][3]
// 212 GET_PROP_NAME stack[4] ← stack[4]["boe"]
// 215 GET_VAR → stack[5] = scope[0][3]
// 217 GET_PROP_NAME stack[5] ← stack[5]["dev"]
// 220 GET_VAR → stack[6] = scope[0][3]
// 222 GET_PROP_NAME stack[6] ← stack[6]["apiHost"]
// 225 CALL func.apply(thisArg, [4 args]) → stack[1]
// 226 SET_GLOBAL_PROP stack[1]["regionConf"] ← stack[0]
// 229 PUSH_UNDEFINED → stack[0] = undefined
// 230 GET_VAR → stack[1] = scope[2][24]
// 233 GET_VAR → stack[2] = scope[0][3]
// 235 GET_PROP_NAME stack[2] ← stack[2]["mode"]
// 238 CALL func.apply(thisArg, [1 args]) → stack[0]
// 240 POP stack[0]
// 241 PUSH_UNDEFINED → stack[0] = undefined
// 242 GET_VAR → stack[1] = scope[1][4]
// 245 GET_VAR → stack[2] = scope[0][2]
// 248 CALL func.apply(thisArg, [1 args]) → stack[0]
// 250 POP stack[0]
// 251 GET_VAR → stack[0] = scope[0][2]
// 253 GET_PROP_NAME stack[0] ← stack[0]["apiHost"]
// 255 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=284
// 258 GET_VAR → stack[0] = scope[2][0]
// 260 GET_PROP_NAME stack[0] ← stack[0]["regionConf"]
// 263 GET_VAR → stack[1] = scope[0][2]
// 265 GET_PROP_NAME stack[1] ← stack[1]["apiHost"]
// 267 SET_GLOBAL_PROP stack[1]["host"] ← stack[0]
// 270 PUSH_UNDEFINED → stack[0] = undefined
// 271 GET_VAR → stack[1] = scope[2][19]
// 274 GET_VAR → stack[2] = scope[2][0]
// 276 GET_PROP_NAME stack[2] ← stack[2]["aid"]
// 279 GET_VAR → stack[3] = scope[0][2]
// 281 GET_PROP_NAME stack[3] ← stack[3]["apiHost"]
// 284 CALL func.apply(thisArg, [2 args]) → stack[0]
// 286 POP stack[0]
// 287 GET_VAR → stack[0] = scope[0][3]
// 289 GET_PROP_NAME stack[0] ← stack[0]["custom"]
// 291 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=318
// 294 GET_VAR → stack[0] = scope[2][0]
// 297 GET_VAR → stack[1] = scope[0][3]
// 299 GET_PROP_NAME stack[1] ← stack[1]["custom"]
// 301 SET_GLOBAL_PROP stack[1]["custom"] ← stack[0]
// 304 PUSH_UNDEFINED → stack[0] = undefined
// 305 GET_VAR → stack[1] = scope[2][20]
// 308 GET_VAR → stack[2] = scope[2][0]
// 310 GET_PROP_NAME stack[2] ← stack[2]["aid"]
// 313 GET_VAR → stack[3] = scope[0][2]
// 315 GET_PROP_NAME stack[3] ← stack[3]["custom"]
// 318 CALL func.apply(thisArg, [2 args]) → stack[0]
// 320 POP stack[0]
// 321 GET_VAR → stack[0] = scope[0][3]
// 323 GET_PROP_NAME stack[0] ← stack[0]["perf"]
// 325 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=349
// 328 GET_VAR → stack[0] = scope[2][0]
// 331 GET_VAR → stack[1] = scope[0][3]
// 333 GET_PROP_NAME stack[1] ← stack[1]["perf"]
// 335 SET_GLOBAL_PROP stack[1]["perf"] ← stack[0]
// 338 PUSH_UNDEFINED → stack[0] = undefined
// 338 GET_GLOBAL → stack[1] = setTimeout
// 341 GET_VAR → stack[2] = scope[2][7]
// 343 PUSH_CONST → stack[3] = 5
// 345 PUSH_CONST → stack[4] = 1000
// 348 MUL stack[3] = stack[3] * stack[4]
// 349 CALL func.apply(thisArg, [2 args]) → stack[0]
// 351 POP stack[0]
// 352 PUSH_SCOPE → stack[0] = scope
// 353 GET_VAR → stack[1] = scope[0][3]
// 355 SET_GLOBAL_PROP stack[1]["options"] ← stack[0]
// 358 PUSH_UNDEFINED → stack[0] = undefined
// 359 GET_VAR → stack[1] = scope[2][1]
// 362 CALL func.apply(thisArg, [0 args]) → stack[0]
// 364 POP stack[0]
// 365 PUSH_UNDEFINED → stack[0] = undefined
// 366 GET_VAR → stack[1] = scope[2][25]
// 369 GET_VAR → stack[2] = scope[0][3]
// 371 GET_PROP_NAME stack[2] ← stack[2]["enablePathList"]
// 374 CALL func.apply(thisArg, [1 args]) → stack[0]
// 376 POP stack[0]
// 377 PUSH_UNDEFINED → stack[0] = undefined
// 378 GET_VAR → stack[1] = scope[1][3]
// 381 GET_VAR → stack[2] = scope[0][3]
// 383 GET_PROP_NAME stack[2] ← stack[2]["urlRewriteRules"]
// 386 CALL func.apply(thisArg, [1 args]) → stack[0]
// 388 POP stack[0]
// 389 PUSH_UNDEFINED → stack[0] = undefined
// 390 GET_VAR → stack[1] = scope[2][13]
// 393 CALL func.apply(thisArg, [0 args]) → stack[0]
// 395 POP stack[0]
// 396 PUSH_UNDEFINED → stack[0] = undefined
// 397 GET_VAR → stack[1] = scope[2][10]
// 400 CALL func.apply(thisArg, [0 args]) → stack[0]
// 402 POP stack[0]
// 403 GET_VAR → stack[0] = scope[0][3]
// 405 GET_PROP_NAME stack[0] ← stack[0]["sdi"]
// 407 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=431
// 410 GET_VAR → stack[0] = scope[2][0]
// 413 GET_VAR → stack[1] = scope[0][3]
// 415 GET_PROP_NAME stack[1] ← stack[1]["sdi"]
// 417 SET_GLOBAL_PROP stack[1]["sdi"] ← stack[0]
// 420 PUSH_UNDEFINED → stack[0] = undefined
// 420 GET_GLOBAL → stack[1] = setTimeout
// 423 GET_VAR → stack[2] = scope[2][6]
// 425 PUSH_CONST → stack[3] = 5
// 427 PUSH_CONST → stack[4] = 1000
// 430 MUL stack[3] = stack[3] * stack[4]
// 431 CALL func.apply(thisArg, [2 args]) → stack[0]
// 433 POP stack[0]
// 434 GET_VAR → stack[0] = scope[2][0]
// 437 PUSH_TRUE → stack[1] = true
// 437 SET_GLOBAL_PROP stack[1]["initialized"] ← stack[0]
// 440 GET_VAR → stack[0] = scope[1][2]
// 443 NOT stack[0] = !stack[0]
// 443 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=622
// 446 PUSH_UNDEFINED → stack[0] = undefined
// 447 GET_VAR → stack[1] = scope[2][17]
// 450 GET_VAR → stack[2] = scope[0][3]
// 452 GET_PROP_NAME stack[2] ← stack[2]["slardarConfig"]
// 455 CALL func.apply(thisArg, [1 args]) → stack[0]
// 457 POP stack[0]
// 458 GET_VAR → stack[0] = scope[0][3]
// 460 GET_PROP_NAME stack[0] ← stack[0]["slardarConfig"]
// 462 GET_PROP_NAME stack[0] ← stack[0]["enableSlardar"]
// 464 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=472
// 467 GET_VAR → stack[0] = scope[0][3]
// 469 GET_PROP_NAME stack[0] ← stack[0]["slardarConfig"]
// 471 GET_PROP_NAME stack[0] ← stack[0]["enableLazyload"]
// 474 NOT stack[0] = !stack[0]
// 474 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=618
// 477 GET_VAR → stack[0] = scope[0][3]
// 479 GET_PROP_NAME stack[0] ← stack[0]["slardarConfig"]
// 481 GET_PROP_NAME stack[0] ← stack[0]["settingLocation"]
// 483 PUSH_CONST → stack[1] = 0
// 486 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 486 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=539
// 489 GET_VAR → stack[0] = scope[2][0]
// 491 GET_PROP_NAME stack[0] ← stack[0]["regionConf"]
// 493 GET_PROP_NAME stack[0] ← stack[0]["slardarDomain"]
// 496 SET_VAR scope[0][4] ← stack[0]
// 499 GET_VAR → stack[0] = scope[2][0]
// 501 GET_PROP_NAME stack[0] ← stack[0]["regionConf"]
// 503 GET_PROP_NAME stack[0] ← stack[0]["pluginPathPrefix"]
// 506 SET_VAR scope[0][5] ← stack[0]
// 509 PUSH_UNDEFINED → stack[0] = undefined
// 510 GET_VAR → stack[1] = scope[2][18]
// 513 GET_VAR → stack[2] = scope[0][4]
// 516 GET_VAR → stack[3] = scope[0][5]
// 519 CALL func.apply(thisArg, [2 args]) → stack[0]
// 521 POP stack[0]
// 522 PUSH_UNDEFINED → stack[0] = undefined
// 523 GET_VAR → stack[1] = scope[2][21]
// 526 GET_VAR → stack[2] = scope[2][0]
// 528 GET_PROP_NAME stack[2] ← stack[2]["aid"]
// 531 GET_VAR → stack[3] = scope[0][4]
// 534 GET_VAR → stack[4] = scope[0][5]
// 537 CALL func.apply(thisArg, [3 args]) → stack[0]
// 539 POP stack[0]
// 539 JUMP → JUMP_TO=619
// 542 GET_VAR → stack[0] = scope[0][3]
// 544 GET_PROP_NAME stack[0] ← stack[0]["slardarConfig"]
// 546 GET_PROP_NAME stack[0] ← stack[0]["settingLocation"]
// 548 PUSH_CONST → stack[1] = 4
// 551 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 551 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=618
// 554 GET_VAR → stack[0] = scope[0][3]
// 556 GET_PROP_NAME stack[0] ← stack[0]["slardarConfig"]
// 558 GET_PROP_NAME stack[0] ← stack[0]["initConfigOverrides"]
// 560 GET_PROP_NAME stack[0] ← stack[0]["slardarDomain"]
// 563 SET_VAR scope[0][6] ← stack[0]
// 566 GET_VAR → stack[0] = scope[0][3]
// 568 GET_PROP_NAME stack[0] ← stack[0]["slardarConfig"]
// 570 GET_PROP_NAME stack[0] ← stack[0]["initConfigOverrides"]
// 572 GET_PROP_NAME stack[0] ← stack[0]["slardarPluginPrefixPath"]
// 575 SET_VAR scope[0][7] ← stack[0]
// 578 PUSH_UNDEFINED → stack[0] = undefined
// 579 GET_VAR → stack[1] = scope[2][18]
// 582 GET_VAR → stack[2] = scope[0][6]
// 585 GET_VAR → stack[3] = scope[0][7]
// 588 CALL func.apply(thisArg, [2 args]) → stack[0]
// 590 POP stack[0]
// 591 PUSH_UNDEFINED → stack[0] = undefined
// 592 GET_VAR → stack[1] = scope[2][21]
// 595 GET_VAR → stack[2] = scope[2][0]
// 597 GET_PROP_NAME stack[2] ← stack[2]["aid"]
// 600 GET_VAR → stack[3] = scope[0][6]
// 603 GET_VAR → stack[4] = scope[0][7]
// 606 CALL func.apply(thisArg, [3 args]) → stack[0]
// 608 POP stack[0]
// 608 JUMP → JUMP_TO=619
// 611 SET_VAR scope[0][8] ← stack[-1]
// 613 GET_GLOBAL → stack[-1] = Error
// 615 PUSH_STRING → stack[0] = "Invalid slardarConfig setting, required you set initConfigOverrides.slardarDomain and slardarPluginPrefixPath configs"
// 618 FUNCTION_BIND_APPLY → stack[-1] = new stack[0](1 args)
// 620 THROW stack[-1]
// 621 PUSH_TRUE → stack[-1] = true
// 622 SET_VAR scope[1][2] ← stack[-1]
// 625 PUSH_UNDEFINED → stack[-1] = undefined
// 626 RETURN stack[-1]
