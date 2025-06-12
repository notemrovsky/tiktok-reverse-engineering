// 1 PUSH_FALSE → stack[0] = false
// 2 SET_VAR scope[0][2] ← stack[0]
// 5 PUSH_FALSE → stack[0] = false
// 6 SET_VAR scope[0][3] ← stack[0]
// 9 PUSH_FALSE → stack[0] = false
// 10 SET_VAR scope[0][4] ← stack[0]
// 13 PUSH_FALSE → stack[0] = false
// 14 SET_VAR scope[0][5] ← stack[0]
// 17 PUSH_FALSE → stack[0] = false
// 18 SET_VAR scope[0][6] ← stack[0]
// 21 PUSH_FALSE → stack[0] = false
// 22 SET_VAR scope[0][7] ← stack[0]
// 25 PUSH_FALSE → stack[0] = false
// 26 SET_VAR scope[0][8] ← stack[0]
// 29 PUSH_FALSE → stack[0] = false
// 30 SET_VAR scope[0][9] ← stack[0]
// 33 PUSH_FALSE → stack[0] = false
// 34 SET_VAR scope[0][10] ← stack[0]
// 37 PUSH_FALSE → stack[0] = false
// 38 SET_VAR scope[0][11] ← stack[0]
// 41 PUSH_FALSE → stack[0] = false
// 42 SET_VAR scope[0][12] ← stack[0]
// 45 PUSH_UNDEFINED → stack[0] = undefined
// 46 GET_VAR → stack[1] = scope[2][4]
// 49 CALL func.apply(thisArg, [0 args]) → stack[0]
// 51 SET_VAR scope[0][5] ← stack[0]
// 53 JUMP → JUMP_TO=78
// 56 SET_VAR scope[0][14] ← stack[-1]
// 59 GET_VAR → stack[-1] = scope[2][3]
// 61 GET_PROP_NAME stack[-1] ← stack[-1]["slardarErrs"]
// 64 DUP → stack[0] = stack[-1]
// 64 GET_PROP_NAME stack[0] ← stack[0]["push"]
// 67 NEW_OBJECT → stack[1] = {}
// 68 GET_VAR → stack[2] = scope[0][14]
// 70 DEFINE_PROP Object.defineProperty(stack[1], "err", stack[2])
// 72 PUSH_STRING → stack[2] = "s_d"
// 74 DEFINE_PROP Object.defineProperty(stack[1], "type", stack[2])
// 77 CALL func.apply(thisArg, [1 args]) → stack[-1]
// 79 POP stack[-1]
// 80 GET_VAR → stack[-1] = scope[0][5]
// 83 NOT stack[-1] = !stack[-1]
// 83 JUMP_IF_FALSE if (!stack[-1]) JUMP_TO=398
// 86 PUSH_UNDEFINED → stack[-1] = undefined
// 87 GET_VAR → stack[0] = scope[2][0]
// 90 CALL func.apply(thisArg, [0 args]) → stack[-1]
// 92 SET_VAR scope[0][6] ← stack[-1]
// 94 JUMP → JUMP_TO=119
// 97 SET_VAR scope[0][15] ← stack[-2]
// 100 GET_VAR → stack[-2] = scope[2][3]
// 102 GET_PROP_NAME stack[-2] ← stack[-2]["slardarErrs"]
// 105 DUP → stack[-1] = stack[-2]
// 105 GET_PROP_NAME stack[-1] ← stack[-1]["push"]
// 108 NEW_OBJECT → stack[0] = {}
// 109 GET_VAR → stack[1] = scope[0][15]
// 111 DEFINE_PROP Object.defineProperty(stack[0], "err", stack[1])
// 113 PUSH_STRING → stack[1] = "s_de"
// 115 DEFINE_PROP Object.defineProperty(stack[0], "type", stack[1])
// 118 CALL func.apply(thisArg, [1 args]) → stack[-2]
// 120 POP stack[-2]
// 121 PUSH_UNDEFINED → stack[-2] = undefined
// 122 GET_VAR → stack[-1] = scope[2][7]
// 125 CALL func.apply(thisArg, [0 args]) → stack[-2]
// 127 SET_VAR scope[0][10] ← stack[-2]
// 129 JUMP → JUMP_TO=154
// 132 SET_VAR scope[0][16] ← stack[-3]
// 135 GET_VAR → stack[-3] = scope[2][3]
// 137 GET_PROP_NAME stack[-3] ← stack[-3]["slardarErrs"]
// 140 DUP → stack[-2] = stack[-3]
// 140 GET_PROP_NAME stack[-2] ← stack[-2]["push"]
// 143 NEW_OBJECT → stack[-1] = {}
// 144 GET_VAR → stack[0] = scope[0][16]
// 146 DEFINE_PROP Object.defineProperty(stack[-1], "err", stack[0])
// 148 PUSH_STRING → stack[0] = "s_i"
// 150 DEFINE_PROP Object.defineProperty(stack[-1], "type", stack[0])
// 153 CALL func.apply(thisArg, [1 args]) → stack[-3]
// 155 POP stack[-3]
// 156 PUSH_UNDEFINED → stack[-3] = undefined
// 157 GET_VAR → stack[-2] = scope[2][1]
// 160 CALL func.apply(thisArg, [0 args]) → stack[-3]
// 162 SET_VAR scope[0][7] ← stack[-3]
// 164 JUMP → JUMP_TO=189
// 167 SET_VAR scope[0][17] ← stack[-4]
// 170 GET_VAR → stack[-4] = scope[2][3]
// 172 GET_PROP_NAME stack[-4] ← stack[-4]["slardarErrs"]
// 175 DUP → stack[-3] = stack[-4]
// 175 GET_PROP_NAME stack[-3] ← stack[-3]["push"]
// 178 NEW_OBJECT → stack[-2] = {}
// 179 GET_VAR → stack[-1] = scope[0][17]
// 181 DEFINE_PROP Object.defineProperty(stack[-2], "err", stack[-1])
// 183 PUSH_STRING → stack[-1] = "s_n"
// 185 DEFINE_PROP Object.defineProperty(stack[-2], "type", stack[-1])
// 188 CALL func.apply(thisArg, [1 args]) → stack[-4]
// 190 POP stack[-4]
// 191 PUSH_UNDEFINED → stack[-4] = undefined
// 192 GET_VAR → stack[-3] = scope[2][5]
// 195 CALL func.apply(thisArg, [0 args]) → stack[-4]
// 197 SET_VAR scope[0][8] ← stack[-4]
// 199 JUMP → JUMP_TO=224
// 202 SET_VAR scope[0][18] ← stack[-5]
// 205 GET_VAR → stack[-5] = scope[2][3]
// 207 GET_PROP_NAME stack[-5] ← stack[-5]["slardarErrs"]
// 210 DUP → stack[-4] = stack[-5]
// 210 GET_PROP_NAME stack[-4] ← stack[-4]["push"]
// 213 NEW_OBJECT → stack[-3] = {}
// 214 GET_VAR → stack[-2] = scope[0][18]
// 216 DEFINE_PROP Object.defineProperty(stack[-3], "err", stack[-2])
// 218 PUSH_STRING → stack[-2] = "s_p"
// 220 DEFINE_PROP Object.defineProperty(stack[-3], "type", stack[-2])
// 223 CALL func.apply(thisArg, [1 args]) → stack[-5]
// 225 POP stack[-5]
// 226 PUSH_UNDEFINED → stack[-5] = undefined
// 227 GET_VAR → stack[-4] = scope[2][6]
// 230 CALL func.apply(thisArg, [0 args]) → stack[-5]
// 232 SET_VAR scope[0][9] ← stack[-5]
// 234 JUMP → JUMP_TO=259
// 237 SET_VAR scope[0][19] ← stack[-6]
// 240 GET_VAR → stack[-6] = scope[2][3]
// 242 GET_PROP_NAME stack[-6] ← stack[-6]["slardarErrs"]
// 245 DUP → stack[-5] = stack[-6]
// 245 GET_PROP_NAME stack[-5] ← stack[-5]["push"]
// 248 NEW_OBJECT → stack[-4] = {}
// 249 GET_VAR → stack[-3] = scope[0][19]
// 251 DEFINE_PROP Object.defineProperty(stack[-4], "err", stack[-3])
// 253 PUSH_STRING → stack[-3] = "s_w"
// 255 DEFINE_PROP Object.defineProperty(stack[-4], "type", stack[-3])
// 258 CALL func.apply(thisArg, [1 args]) → stack[-6]
// 260 POP stack[-6]
// 261 PUSH_UNDEFINED → stack[-6] = undefined
// 262 GET_VAR → stack[-5] = scope[2][8]
// 265 CALL func.apply(thisArg, [0 args]) → stack[-6]
// 267 SET_VAR scope[0][11] ← stack[-6]
// 269 JUMP → JUMP_TO=294
// 272 SET_VAR scope[0][20] ← stack[-7]
// 275 GET_VAR → stack[-7] = scope[2][3]
// 277 GET_PROP_NAME stack[-7] ← stack[-7]["slardarErrs"]
// 280 DUP → stack[-6] = stack[-7]
// 280 GET_PROP_NAME stack[-6] ← stack[-6]["push"]
// 283 NEW_OBJECT → stack[-5] = {}
// 284 GET_VAR → stack[-4] = scope[0][20]
// 286 DEFINE_PROP Object.defineProperty(stack[-5], "err", stack[-4])
// 288 PUSH_STRING → stack[-4] = "s_h"
// 290 DEFINE_PROP Object.defineProperty(stack[-5], "type", stack[-4])
// 293 CALL func.apply(thisArg, [1 args]) → stack[-7]
// 295 POP stack[-7]
// 296 PUSH_UNDEFINED → stack[-7] = undefined
// 297 GET_VAR → stack[-6] = scope[2][9]
// 300 CALL func.apply(thisArg, [0 args]) → stack[-7]
// 302 SET_VAR scope[0][3] ← stack[-7]
// 304 JUMP → JUMP_TO=329
// 307 SET_VAR scope[0][21] ← stack[-8]
// 310 GET_VAR → stack[-8] = scope[2][3]
// 312 GET_PROP_NAME stack[-8] ← stack[-8]["slardarErrs"]
// 315 DUP → stack[-7] = stack[-8]
// 315 GET_PROP_NAME stack[-7] ← stack[-7]["push"]
// 318 NEW_OBJECT → stack[-6] = {}
// 319 GET_VAR → stack[-5] = scope[0][21]
// 321 DEFINE_PROP Object.defineProperty(stack[-6], "err", stack[-5])
// 323 PUSH_STRING → stack[-5] = "s_l"
// 325 DEFINE_PROP Object.defineProperty(stack[-6], "type", stack[-5])
// 328 CALL func.apply(thisArg, [1 args]) → stack[-8]
// 330 POP stack[-8]
// 331 PUSH_UNDEFINED → stack[-8] = undefined
// 332 GET_VAR → stack[-7] = scope[2][11]
// 335 CALL func.apply(thisArg, [0 args]) → stack[-8]
// 337 SET_VAR scope[0][2] ← stack[-8]
// 339 JUMP → JUMP_TO=364
// 342 SET_VAR scope[0][22] ← stack[-9]
// 345 GET_VAR → stack[-9] = scope[2][3]
// 347 GET_PROP_NAME stack[-9] ← stack[-9]["slardarErrs"]
// 350 DUP → stack[-8] = stack[-9]
// 350 GET_PROP_NAME stack[-8] ← stack[-8]["push"]
// 353 NEW_OBJECT → stack[-7] = {}
// 354 GET_VAR → stack[-6] = scope[0][22]
// 356 DEFINE_PROP Object.defineProperty(stack[-7], "err", stack[-6])
// 358 PUSH_STRING → stack[-6] = "s_c"
// 360 DEFINE_PROP Object.defineProperty(stack[-7], "type", stack[-6])
// 363 CALL func.apply(thisArg, [1 args]) → stack[-9]
// 365 POP stack[-9]
// 366 PUSH_UNDEFINED → stack[-9] = undefined
// 367 GET_VAR → stack[-8] = scope[2][10]
// 370 CALL func.apply(thisArg, [0 args]) → stack[-9]
// 372 SET_VAR scope[0][12] ← stack[-9]
// 374 JUMP → JUMP_TO=399
// 377 SET_VAR scope[0][23] ← stack[-10]
// 380 GET_VAR → stack[-10] = scope[2][3]
// 382 GET_PROP_NAME stack[-10] ← stack[-10]["slardarErrs"]
// 385 DUP → stack[-9] = stack[-10]
// 385 GET_PROP_NAME stack[-9] ← stack[-9]["push"]
// 388 NEW_OBJECT → stack[-8] = {}
// 389 GET_VAR → stack[-7] = scope[0][23]
// 391 DEFINE_PROP Object.defineProperty(stack[-8], "err", stack[-7])
// 393 PUSH_STRING → stack[-7] = "s_u"
// 395 DEFINE_PROP Object.defineProperty(stack[-8], "type", stack[-7])
// 398 CALL func.apply(thisArg, [1 args]) → stack[-10]
// 400 POP stack[-10]
// 400 PUSH_CONST → stack[-10] = 0
// 403 SET_VAR scope[0][13] ← stack[-10]
// 406 GET_VAR → stack[-10] = scope[0][13]
// 408 PUSH_CONST → stack[-9] = 1
// 411 BITWISE_OR stack[-10] = stack[-10] | stack[-9]
// 411 PUSH_SCOPE_REF → stack[-9] = scope[0], stack[-8] = 13
// 415 SET_PROP_NO_POP stack[-9][stack[-8]] = stack[-10] (keep value)
// 416 POP stack[-10]
// 417 GET_VAR → stack[-10] = scope[0][13]
// 420 GET_VAR → stack[-9] = scope[0][11]
// 422 PUSH_CONST → stack[-8] = 1
// 425 LEFT_SHIFT stack[-9] = stack[-9] << stack[-8]
// 426 BITWISE_OR stack[-10] = stack[-10] | stack[-9]
// 426 PUSH_SCOPE_REF → stack[-9] = scope[0], stack[-8] = 13
// 430 SET_PROP_NO_POP stack[-9][stack[-8]] = stack[-10] (keep value)
// 431 POP stack[-10]
// 432 GET_VAR → stack[-10] = scope[0][13]
// 435 GET_VAR → stack[-9] = scope[0][10]
// 437 PUSH_CONST → stack[-8] = 2
// 440 LEFT_SHIFT stack[-9] = stack[-9] << stack[-8]
// 441 BITWISE_OR stack[-10] = stack[-10] | stack[-9]
// 441 PUSH_SCOPE_REF → stack[-9] = scope[0], stack[-8] = 13
// 445 SET_PROP_NO_POP stack[-9][stack[-8]] = stack[-10] (keep value)
// 446 POP stack[-10]
// 447 GET_VAR → stack[-10] = scope[0][13]
// 450 GET_VAR → stack[-9] = scope[0][9]
// 452 PUSH_CONST → stack[-8] = 3
// 455 LEFT_SHIFT stack[-9] = stack[-9] << stack[-8]
// 456 BITWISE_OR stack[-10] = stack[-10] | stack[-9]
// 456 PUSH_SCOPE_REF → stack[-9] = scope[0], stack[-8] = 13
// 460 SET_PROP_NO_POP stack[-9][stack[-8]] = stack[-10] (keep value)
// 461 POP stack[-10]
// 462 GET_VAR → stack[-10] = scope[0][13]
// 465 GET_VAR → stack[-9] = scope[0][8]
// 467 PUSH_CONST → stack[-8] = 4
// 470 LEFT_SHIFT stack[-9] = stack[-9] << stack[-8]
// 471 BITWISE_OR stack[-10] = stack[-10] | stack[-9]
// 471 PUSH_SCOPE_REF → stack[-9] = scope[0], stack[-8] = 13
// 475 SET_PROP_NO_POP stack[-9][stack[-8]] = stack[-10] (keep value)
// 476 POP stack[-10]
// 477 GET_VAR → stack[-10] = scope[0][13]
// 480 GET_VAR → stack[-9] = scope[0][7]
// 482 PUSH_CONST → stack[-8] = 5
// 485 LEFT_SHIFT stack[-9] = stack[-9] << stack[-8]
// 486 BITWISE_OR stack[-10] = stack[-10] | stack[-9]
// 486 PUSH_SCOPE_REF → stack[-9] = scope[0], stack[-8] = 13
// 490 SET_PROP_NO_POP stack[-9][stack[-8]] = stack[-10] (keep value)
// 491 POP stack[-10]
// 492 GET_VAR → stack[-10] = scope[0][13]
// 495 GET_VAR → stack[-9] = scope[0][6]
// 497 PUSH_CONST → stack[-8] = 6
// 500 LEFT_SHIFT stack[-9] = stack[-9] << stack[-8]
// 501 BITWISE_OR stack[-10] = stack[-10] | stack[-9]
// 501 PUSH_SCOPE_REF → stack[-9] = scope[0], stack[-8] = 13
// 505 SET_PROP_NO_POP stack[-9][stack[-8]] = stack[-10] (keep value)
// 506 POP stack[-10]
// 507 GET_VAR → stack[-10] = scope[0][13]
// 510 GET_VAR → stack[-9] = scope[0][5]
// 512 PUSH_CONST → stack[-8] = 7
// 515 LEFT_SHIFT stack[-9] = stack[-9] << stack[-8]
// 516 BITWISE_OR stack[-10] = stack[-10] | stack[-9]
// 516 PUSH_SCOPE_REF → stack[-9] = scope[0], stack[-8] = 13
// 520 SET_PROP_NO_POP stack[-9][stack[-8]] = stack[-10] (keep value)
// 521 POP stack[-10]
// 522 GET_VAR → stack[-10] = scope[0][13]
// 525 GET_VAR → stack[-9] = scope[0][4]
// 527 PUSH_CONST → stack[-8] = 8
// 530 LEFT_SHIFT stack[-9] = stack[-9] << stack[-8]
// 531 BITWISE_OR stack[-10] = stack[-10] | stack[-9]
// 531 PUSH_SCOPE_REF → stack[-9] = scope[0], stack[-8] = 13
// 535 SET_PROP_NO_POP stack[-9][stack[-8]] = stack[-10] (keep value)
// 536 POP stack[-10]
// 537 GET_VAR → stack[-10] = scope[0][13]
// 540 GET_VAR → stack[-9] = scope[0][3]
// 542 PUSH_CONST → stack[-8] = 9
// 545 LEFT_SHIFT stack[-9] = stack[-9] << stack[-8]
// 546 BITWISE_OR stack[-10] = stack[-10] | stack[-9]
// 546 PUSH_SCOPE_REF → stack[-9] = scope[0], stack[-8] = 13
// 550 SET_PROP_NO_POP stack[-9][stack[-8]] = stack[-10] (keep value)
// 551 POP stack[-10]
// 552 GET_VAR → stack[-10] = scope[0][13]
// 555 GET_VAR → stack[-9] = scope[0][2]
// 557 PUSH_CONST → stack[-8] = 10
// 560 LEFT_SHIFT stack[-9] = stack[-9] << stack[-8]
// 561 BITWISE_OR stack[-10] = stack[-10] | stack[-9]
// 561 PUSH_SCOPE_REF → stack[-9] = scope[0], stack[-8] = 13
// 565 SET_PROP_NO_POP stack[-9][stack[-8]] = stack[-10] (keep value)
// 566 POP stack[-10]
// 567 GET_VAR → stack[-10] = scope[0][13]
// 570 GET_VAR → stack[-9] = scope[0][12]
// 572 PUSH_CONST → stack[-8] = 12
// 575 LEFT_SHIFT stack[-9] = stack[-9] << stack[-8]
// 576 BITWISE_OR stack[-10] = stack[-10] | stack[-9]
// 576 PUSH_SCOPE_REF → stack[-9] = scope[0], stack[-8] = 13
// 580 SET_PROP_NO_POP stack[-9][stack[-8]] = stack[-10] (keep value)
// 581 POP stack[-10]
// 582 GET_VAR → stack[-10] = scope[2][2]
// 584 GET_PROP_NAME stack[-10] ← stack[-10]["envcode"]
// 587 GET_VAR → stack[-9] = scope[0][13]
// 590 BITWISE_OR stack[-10] = stack[-10] | stack[-9]
// 591 GET_VAR → stack[-9] = scope[2][2]
// 593 PUSH_STRING → stack[-8] = "envcode"
// 596 SET_PROP_NO_POP stack[-9][stack[-8]] = stack[-10] (keep value)
// 597 POP stack[-10]
// 598 NEW_OBJECT → stack[-10] = {}
// 599 GET_VAR → stack[-9] = scope[0][11]
// 601 DEFINE_PROP Object.defineProperty(stack[-10], "hook", stack[-9])
// 604 GET_VAR → stack[-9] = scope[0][10]
// 606 DEFINE_PROP Object.defineProperty(stack[-10], "incognito", stack[-9])
// 609 GET_VAR → stack[-9] = scope[0][9]
// 611 DEFINE_PROP Object.defineProperty(stack[-10], "webdriver", stack[-9])
// 614 GET_VAR → stack[-9] = scope[0][8]
// 616 DEFINE_PROP Object.defineProperty(stack[-10], "phantom", stack[-9])
// 619 GET_VAR → stack[-9] = scope[0][7]
// 621 DEFINE_PROP Object.defineProperty(stack[-10], "node", stack[-9])
// 624 GET_VAR → stack[-9] = scope[0][6]
// 626 DEFINE_PROP Object.defineProperty(stack[-10], "debugger_", stack[-9])
// 629 GET_VAR → stack[-9] = scope[0][5]
// 631 DEFINE_PROP Object.defineProperty(stack[-10], "dom", stack[-9])
// 634 GET_VAR → stack[-9] = scope[0][4]
// 636 DEFINE_PROP Object.defineProperty(stack[-10], "switch_", stack[-9])
// 639 GET_VAR → stack[-9] = scope[0][3]
// 641 DEFINE_PROP Object.defineProperty(stack[-10], "location", stack[-9])
// 644 GET_VAR → stack[-9] = scope[0][2]
// 646 DEFINE_PROP Object.defineProperty(stack[-10], "consistent", stack[-9])
// 649 GET_VAR → stack[-9] = scope[0][12]
// 651 DEFINE_PROP Object.defineProperty(stack[-10], "undetectChromeDriver", stack[-9])
// 654 RETURN stack[-10]
