// 0 GET_GLOBAL → stack[0] = document
// 3 SET_VAR scope[0][2] ← stack[0]
// 5 GET_GLOBAL → stack[0] = window
// 7 GET_PROP_NAME stack[0] ← stack[0]["screen"]
// 10 SET_VAR scope[0][3] ← stack[0]
// 12 GET_GLOBAL → stack[0] = window
// 14 GET_PROP_NAME stack[0] ← stack[0]["innerWidth"]
// 16 PUSH_CONST → stack[1] = 0
// 19 UNSIGNED_RIGHT_SHIFT stack[0] = stack[0] >>> stack[1]
// 20 SET_VAR scope[0][4] ← stack[0]
// 22 GET_GLOBAL → stack[0] = window
// 24 GET_PROP_NAME stack[0] ← stack[0]["innerHeight"]
// 26 PUSH_CONST → stack[1] = 0
// 29 UNSIGNED_RIGHT_SHIFT stack[0] = stack[0] >>> stack[1]
// 30 SET_VAR scope[0][5] ← stack[0]
// 32 GET_GLOBAL → stack[0] = window
// 34 GET_PROP_NAME stack[0] ← stack[0]["outerWidth"]
// 36 PUSH_CONST → stack[1] = 0
// 39 UNSIGNED_RIGHT_SHIFT stack[0] = stack[0] >>> stack[1]
// 40 SET_VAR scope[0][6] ← stack[0]
// 42 GET_GLOBAL → stack[0] = window
// 44 GET_PROP_NAME stack[0] ← stack[0]["outerHeight"]
// 46 PUSH_CONST → stack[1] = 0
// 49 UNSIGNED_RIGHT_SHIFT stack[0] = stack[0] >>> stack[1]
// 50 SET_VAR scope[0][7] ← stack[0]
// 52 GET_GLOBAL → stack[0] = Math
// 55 DUP → stack[1] = stack[0]
// 55 GET_PROP_NAME stack[1] ← stack[1]["floor"]
// 57 GET_GLOBAL → stack[2] = window
// 59 GET_PROP_NAME stack[2] ← stack[2]["screenX"]
// 62 CALL func.apply(thisArg, [1 args]) → stack[0]
// 64 SET_VAR scope[0][8] ← stack[0]
// 66 GET_GLOBAL → stack[0] = Math
// 69 DUP → stack[1] = stack[0]
// 69 GET_PROP_NAME stack[1] ← stack[1]["floor"]
// 71 GET_GLOBAL → stack[2] = window
// 73 GET_PROP_NAME stack[2] ← stack[2]["screenY"]
// 76 CALL func.apply(thisArg, [1 args]) → stack[0]
// 78 SET_VAR scope[0][9] ← stack[0]
// 80 GET_GLOBAL → stack[0] = Math
// 83 DUP → stack[1] = stack[0]
// 83 GET_PROP_NAME stack[1] ← stack[1]["max"]
// 85 PUSH_CONST → stack[2] = 0
// 87 GET_GLOBAL → stack[3] = Math
// 90 DUP → stack[4] = stack[3]
// 90 GET_PROP_NAME stack[4] ← stack[4]["floor"]
// 92 GET_GLOBAL → stack[5] = window
// 94 GET_PROP_NAME stack[5] ← stack[5]["pageXOffset"]
// 97 CALL func.apply(thisArg, [1 args]) → stack[3]
// 99 CALL func.apply(thisArg, [2 args]) → stack[0]
// 101 SET_VAR scope[0][10] ← stack[0]
// 103 GET_GLOBAL → stack[0] = Math
// 106 DUP → stack[1] = stack[0]
// 106 GET_PROP_NAME stack[1] ← stack[1]["max"]
// 108 PUSH_CONST → stack[2] = 0
// 110 GET_GLOBAL → stack[3] = Math
// 113 DUP → stack[4] = stack[3]
// 113 GET_PROP_NAME stack[4] ← stack[4]["floor"]
// 115 GET_GLOBAL → stack[5] = window
// 117 GET_PROP_NAME stack[5] ← stack[5]["pageYOffset"]
// 120 CALL func.apply(thisArg, [1 args]) → stack[3]
// 122 CALL func.apply(thisArg, [2 args]) → stack[0]
// 124 SET_VAR scope[0][11] ← stack[0]
// 127 GET_VAR → stack[0] = scope[0][3]
// 129 GET_PROP_NAME stack[0] ← stack[0]["availWidth"]
// 131 PUSH_CONST → stack[1] = 0
// 134 UNSIGNED_RIGHT_SHIFT stack[0] = stack[0] >>> stack[1]
// 135 SET_VAR scope[0][12] ← stack[0]
// 138 GET_VAR → stack[0] = scope[0][3]
// 140 GET_PROP_NAME stack[0] ← stack[0]["availHeight"]
// 142 PUSH_CONST → stack[1] = 0
// 145 UNSIGNED_RIGHT_SHIFT stack[0] = stack[0] >>> stack[1]
// 146 SET_VAR scope[0][13] ← stack[0]
// 149 GET_VAR → stack[0] = scope[0][3]
// 151 GET_PROP_NAME stack[0] ← stack[0]["width"]
// 153 PUSH_CONST → stack[1] = 0
// 156 UNSIGNED_RIGHT_SHIFT stack[0] = stack[0] >>> stack[1]
// 157 SET_VAR scope[0][14] ← stack[0]
// 160 GET_VAR → stack[0] = scope[0][3]
// 162 GET_PROP_NAME stack[0] ← stack[0]["height"]
// 164 PUSH_CONST → stack[1] = 0
// 167 UNSIGNED_RIGHT_SHIFT stack[0] = stack[0] >>> stack[1]
// 168 SET_VAR scope[0][15] ← stack[0]
// 171 NEW_OBJECT → stack[0] = {}
// 171 PUSH_CONST → stack[1] = 0
// 174 SET_UNDEFINED stack[1] = undefined
// 175 GET_VAR → stack[2] = scope[0][4]
// 178 STRICT_NOT_EQUAL stack[1] = stack[1] !== stack[2]
// 178 JUMP_IF_FALSE if (!stack[1]) JUMP_TO=183
// 181 GET_VAR → stack[1] = scope[0][4]
// 183 JUMP → JUMP_TO=187
// 185 PUSH_CONST → stack[2] = 1
// 188 NEGATE stack[2] = -stack[2]
// 188 DEFINE_PROP Object.defineProperty(stack[1], "innerWidth", stack[2])
// 190 PUSH_CONST → stack[2] = 0
// 193 SET_UNDEFINED stack[2] = undefined
// 194 GET_VAR → stack[3] = scope[0][4]
// 197 STRICT_NOT_EQUAL stack[2] = stack[2] !== stack[3]
// 197 JUMP_IF_FALSE if (!stack[2]) JUMP_TO=202
// 200 GET_VAR → stack[2] = scope[0][5]
// 202 JUMP → JUMP_TO=206
// 204 PUSH_CONST → stack[3] = 1
// 207 NEGATE stack[3] = -stack[3]
// 207 DEFINE_PROP Object.defineProperty(stack[2], "innerHeight", stack[3])
// 209 PUSH_CONST → stack[3] = 0
// 212 SET_UNDEFINED stack[3] = undefined
// 213 GET_VAR → stack[4] = scope[0][6]
// 216 STRICT_NOT_EQUAL stack[3] = stack[3] !== stack[4]
// 216 JUMP_IF_FALSE if (!stack[3]) JUMP_TO=221
// 219 GET_VAR → stack[3] = scope[0][6]
// 221 JUMP → JUMP_TO=225
// 223 PUSH_CONST → stack[4] = 1
// 226 NEGATE stack[4] = -stack[4]
// 226 DEFINE_PROP Object.defineProperty(stack[3], "outerWidth", stack[4])
// 228 PUSH_CONST → stack[4] = 0
// 231 SET_UNDEFINED stack[4] = undefined
// 232 GET_VAR → stack[5] = scope[0][7]
// 235 STRICT_NOT_EQUAL stack[4] = stack[4] !== stack[5]
// 235 JUMP_IF_FALSE if (!stack[4]) JUMP_TO=240
// 238 GET_VAR → stack[4] = scope[0][7]
// 240 JUMP → JUMP_TO=244
// 242 PUSH_CONST → stack[5] = 1
// 245 NEGATE stack[5] = -stack[5]
// 245 DEFINE_PROP Object.defineProperty(stack[4], "outerHeight", stack[5])
// 247 PUSH_CONST → stack[5] = 0
// 250 SET_UNDEFINED stack[5] = undefined
// 251 GET_VAR → stack[6] = scope[0][8]
// 254 STRICT_NOT_EQUAL stack[5] = stack[5] !== stack[6]
// 254 JUMP_IF_FALSE if (!stack[5]) JUMP_TO=259
// 257 GET_VAR → stack[5] = scope[0][8]
// 259 JUMP → JUMP_TO=263
// 261 PUSH_CONST → stack[6] = 1
// 264 NEGATE stack[6] = -stack[6]
// 264 DEFINE_PROP Object.defineProperty(stack[5], "screenX", stack[6])
// 266 PUSH_CONST → stack[6] = 0
// 269 SET_UNDEFINED stack[6] = undefined
// 270 GET_VAR → stack[7] = scope[0][9]
// 273 STRICT_NOT_EQUAL stack[6] = stack[6] !== stack[7]
// 273 JUMP_IF_FALSE if (!stack[6]) JUMP_TO=278
// 276 GET_VAR → stack[6] = scope[0][9]
// 278 JUMP → JUMP_TO=282
// 280 PUSH_CONST → stack[7] = 1
// 283 NEGATE stack[7] = -stack[7]
// 283 DEFINE_PROP Object.defineProperty(stack[6], "screenY", stack[7])
// 285 PUSH_CONST → stack[7] = 0
// 288 SET_UNDEFINED stack[7] = undefined
// 289 GET_VAR → stack[8] = scope[0][10]
// 292 STRICT_NOT_EQUAL stack[7] = stack[7] !== stack[8]
// 292 JUMP_IF_FALSE if (!stack[7]) JUMP_TO=297
// 295 GET_VAR → stack[7] = scope[0][10]
// 297 JUMP → JUMP_TO=301
// 299 PUSH_CONST → stack[8] = 1
// 302 NEGATE stack[8] = -stack[8]
// 302 DEFINE_PROP Object.defineProperty(stack[7], "pageXOffset", stack[8])
// 304 PUSH_CONST → stack[8] = 0
// 307 SET_UNDEFINED stack[8] = undefined
// 308 GET_VAR → stack[9] = scope[0][11]
// 311 STRICT_NOT_EQUAL stack[8] = stack[8] !== stack[9]
// 311 JUMP_IF_FALSE if (!stack[8]) JUMP_TO=316
// 314 GET_VAR → stack[8] = scope[0][11]
// 316 JUMP → JUMP_TO=320
// 318 PUSH_CONST → stack[9] = 1
// 321 NEGATE stack[9] = -stack[9]
// 321 DEFINE_PROP Object.defineProperty(stack[8], "pageYOffset", stack[9])
// 323 PUSH_CONST → stack[9] = 0
// 326 SET_UNDEFINED stack[9] = undefined
// 327 GET_VAR → stack[10] = scope[0][12]
// 330 STRICT_NOT_EQUAL stack[9] = stack[9] !== stack[10]
// 330 JUMP_IF_FALSE if (!stack[9]) JUMP_TO=335
// 333 GET_VAR → stack[9] = scope[0][12]
// 335 JUMP → JUMP_TO=339
// 337 PUSH_CONST → stack[10] = 1
// 340 NEGATE stack[10] = -stack[10]
// 340 DEFINE_PROP Object.defineProperty(stack[9], "availWidth", stack[10])
// 342 PUSH_CONST → stack[10] = 0
// 345 SET_UNDEFINED stack[10] = undefined
// 346 GET_VAR → stack[11] = scope[0][13]
// 349 STRICT_NOT_EQUAL stack[10] = stack[10] !== stack[11]
// 349 JUMP_IF_FALSE if (!stack[10]) JUMP_TO=354
// 352 GET_VAR → stack[10] = scope[0][13]
// 354 JUMP → JUMP_TO=358
// 356 PUSH_CONST → stack[11] = 1
// 359 NEGATE stack[11] = -stack[11]
// 359 DEFINE_PROP Object.defineProperty(stack[10], "availHeight", stack[11])
// 361 PUSH_CONST → stack[11] = 0
// 364 SET_UNDEFINED stack[11] = undefined
// 365 GET_VAR → stack[12] = scope[0][14]
// 368 STRICT_NOT_EQUAL stack[11] = stack[11] !== stack[12]
// 368 JUMP_IF_FALSE if (!stack[11]) JUMP_TO=373
// 371 GET_VAR → stack[11] = scope[0][14]
// 373 JUMP → JUMP_TO=377
// 375 PUSH_CONST → stack[12] = 1
// 378 NEGATE stack[12] = -stack[12]
// 378 DEFINE_PROP Object.defineProperty(stack[11], "sizeWidth", stack[12])
// 380 PUSH_CONST → stack[12] = 0
// 383 SET_UNDEFINED stack[12] = undefined
// 384 GET_VAR → stack[13] = scope[0][15]
// 387 STRICT_NOT_EQUAL stack[12] = stack[12] !== stack[13]
// 387 JUMP_IF_FALSE if (!stack[12]) JUMP_TO=392
// 390 GET_VAR → stack[12] = scope[0][15]
// 392 JUMP → JUMP_TO=396
// 394 PUSH_CONST → stack[13] = 1
// 397 NEGATE stack[13] = -stack[13]
// 397 DEFINE_PROP Object.defineProperty(stack[12], "sizeHeight", stack[13])
// 400 GET_VAR → stack[13] = scope[0][2]
// 402 GET_PROP_NAME stack[13] ← stack[13]["body"]
// 404 JUMP_IF_FALSE if (!stack[13]) JUMP_TO=416
// 407 GET_VAR → stack[13] = scope[0][2]
// 409 GET_PROP_NAME stack[13] ← stack[13]["body"]
// 411 GET_PROP_NAME stack[13] ← stack[13]["clientWidth"]
// 413 PUSH_CONST → stack[14] = 0
// 416 UNSIGNED_RIGHT_SHIFT stack[13] = stack[13] >>> stack[14]
// 416 JUMP → JUMP_TO=420
// 418 PUSH_CONST → stack[14] = 1
// 421 NEGATE stack[14] = -stack[14]
// 421 DEFINE_PROP Object.defineProperty(stack[13], "clientWidth", stack[14])
// 424 GET_VAR → stack[14] = scope[0][2]
// 426 GET_PROP_NAME stack[14] ← stack[14]["body"]
// 428 JUMP_IF_FALSE if (!stack[14]) JUMP_TO=440
// 431 GET_VAR → stack[14] = scope[0][2]
// 433 GET_PROP_NAME stack[14] ← stack[14]["body"]
// 435 GET_PROP_NAME stack[14] ← stack[14]["clientHeight"]
// 437 PUSH_CONST → stack[15] = 0
// 440 UNSIGNED_RIGHT_SHIFT stack[14] = stack[14] >>> stack[15]
// 440 JUMP → JUMP_TO=444
// 442 PUSH_CONST → stack[15] = 1
// 445 NEGATE stack[15] = -stack[15]
// 445 DEFINE_PROP Object.defineProperty(stack[14], "clientHeight", stack[15])
// 448 GET_VAR → stack[15] = scope[0][3]
// 450 GET_PROP_NAME stack[15] ← stack[15]["colorDepth"]
// 452 PUSH_CONST → stack[16] = 0
// 455 UNSIGNED_RIGHT_SHIFT stack[15] = stack[15] >>> stack[16]
// 455 DEFINE_PROP Object.defineProperty(stack[14], "colorDepth", stack[15])
// 458 GET_VAR → stack[15] = scope[0][3]
// 460 GET_PROP_NAME stack[15] ← stack[15]["pixelDepth"]
// 462 PUSH_CONST → stack[16] = 0
// 465 UNSIGNED_RIGHT_SHIFT stack[15] = stack[15] >>> stack[16]
// 465 DEFINE_PROP Object.defineProperty(stack[14], "pixelDepth", stack[15])
// 468 GET_VAR → stack[15] = scope[0][2]
// 471 DUP → stack[16] = stack[15]
// 471 GET_PROP_NAME stack[16] ← stack[16]["hasFocus"]
// 474 CALL func.apply(thisArg, [0 args]) → stack[15]
// 475 JUMP_IF_FALSE if (!stack[15]) JUMP_TO=479
// 477 PUSH_CONST → stack[15] = 1
// 479 JUMP → JUMP_TO=482
// 481 PUSH_CONST → stack[16] = 2
// 483 DEFINE_PROP Object.defineProperty(stack[15], "focus", stack[16])
// 486 GET_VAR → stack[16] = scope[0][2]
// 488 GET_PROP_NAME stack[16] ← stack[16]["hidden"]
// 490 JUMP_IF_FALSE if (!stack[16]) JUMP_TO=494
// 492 PUSH_CONST → stack[16] = 1
// 494 JUMP → JUMP_TO=497
// 496 PUSH_CONST → stack[17] = 2
// 498 DEFINE_PROP Object.defineProperty(stack[16], "hidden", stack[17])
// 501 GET_VAR → stack[17] = scope[0][2]
// 503 GET_PROP_NAME stack[17] ← stack[17]["visibilityState"]
// 505 DEFINE_PROP Object.defineProperty(stack[16], "visibilityState", stack[17])
// 507 TYPEOF_GLOBAL → stack[17] = typeof global["locationbar"]
// 509 PUSH_STRING → stack[18] = "undefined"
// 512 STRICT_EQUAL stack[17] = stack[17] === stack[18]
// 512 JUMP_IF_FALSE if (!stack[17]) JUMP_TO=516
// 514 PUSH_STRING → stack[17] = "undefined"
// 516 JUMP → JUMP_TO=525
// 519 PUSH_UNDEFINED → stack[18] = undefined
// 520 GET_VAR → stack[19] = scope[2][0]
// 522 GET_GLOBAL → stack[20] = locationbar
// 525 CALL func.apply(thisArg, [1 args]) → stack[18]
// 526 PUSH_STRING → stack[19] = "object"
// 529 STRICT_NOT_EQUAL stack[18] = stack[18] !== stack[19]
// 529 JUMP_IF_FALSE if (!stack[18]) JUMP_TO=533
// 531 PUSH_CONST → stack[18] = 0
// 533 JUMP → JUMP_TO=546
// 535 GET_GLOBAL → stack[19] = locationbar
// 537 GET_PROP_NAME stack[19] ← stack[19]["visible"]
// 539 JUMP_IF_FALSE if (!stack[19]) JUMP_TO=543
// 541 PUSH_CONST → stack[19] = 1
// 543 JUMP → JUMP_TO=546
// 545 PUSH_CONST → stack[20] = 2
// 547 DEFINE_PROP Object.defineProperty(stack[19], "location", stack[20])
// 549 TYPEOF_GLOBAL → stack[20] = typeof global["menubar"]
// 551 PUSH_STRING → stack[21] = "undefined"
// 554 STRICT_EQUAL stack[20] = stack[20] === stack[21]
// 554 JUMP_IF_FALSE if (!stack[20]) JUMP_TO=558
// 556 PUSH_STRING → stack[20] = "undefined"
// 558 JUMP → JUMP_TO=567
// 561 PUSH_UNDEFINED → stack[21] = undefined
// 562 GET_VAR → stack[22] = scope[2][0]
// 564 GET_GLOBAL → stack[23] = menubar
// 567 CALL func.apply(thisArg, [1 args]) → stack[21]
// 568 PUSH_STRING → stack[22] = "object"
// 571 STRICT_NOT_EQUAL stack[21] = stack[21] !== stack[22]
// 571 JUMP_IF_FALSE if (!stack[21]) JUMP_TO=575
// 573 PUSH_CONST → stack[21] = 0
// 575 JUMP → JUMP_TO=588
// 577 GET_GLOBAL → stack[22] = locationbar
// 579 GET_PROP_NAME stack[22] ← stack[22]["visible"]
// 581 JUMP_IF_FALSE if (!stack[22]) JUMP_TO=585
// 583 PUSH_CONST → stack[22] = 1
// 585 JUMP → JUMP_TO=588
// 587 PUSH_CONST → stack[23] = 2
// 589 DEFINE_PROP Object.defineProperty(stack[22], "menubar", stack[23])
// 591 TYPEOF_GLOBAL → stack[23] = typeof global["scrollbar"]
// 593 PUSH_STRING → stack[24] = "undefined"
// 596 STRICT_EQUAL stack[23] = stack[23] === stack[24]
// 596 JUMP_IF_FALSE if (!stack[23]) JUMP_TO=600
// 598 PUSH_STRING → stack[23] = "undefined"
// 600 JUMP → JUMP_TO=609
// 603 PUSH_UNDEFINED → stack[24] = undefined
// 604 GET_VAR → stack[25] = scope[2][0]
// 606 GET_GLOBAL → stack[26] = scrollbar
// 609 CALL func.apply(thisArg, [1 args]) → stack[24]
// 610 PUSH_STRING → stack[25] = "object"
// 613 STRICT_NOT_EQUAL stack[24] = stack[24] !== stack[25]
// 613 JUMP_IF_FALSE if (!stack[24]) JUMP_TO=617
// 615 PUSH_CONST → stack[24] = 0
// 617 JUMP → JUMP_TO=630
// 619 GET_GLOBAL → stack[25] = scrollbars
// 621 GET_PROP_NAME stack[25] ← stack[25]["visible"]
// 623 JUMP_IF_FALSE if (!stack[25]) JUMP_TO=627
// 625 PUSH_CONST → stack[25] = 1
// 627 JUMP → JUMP_TO=630
// 629 PUSH_CONST → stack[26] = 2
// 631 DEFINE_PROP Object.defineProperty(stack[25], "scrollbar", stack[26])
// 634 PUSH_UNDEFINED → stack[26] = undefined
// 635 GET_VAR → stack[27] = scope[2][0]
// 638 GET_VAR → stack[28] = scope[0][3]
// 640 GET_PROP_NAME stack[28] ← stack[28]["orientation"]
// 643 CALL func.apply(thisArg, [1 args]) → stack[26]
// 644 PUSH_STRING → stack[27] = "object"
// 647 STRICT_NOT_EQUAL stack[26] = stack[26] !== stack[27]
// 647 JUMP_IF_FALSE if (!stack[26]) JUMP_TO=651
// 649 PUSH_STRING → stack[26] = "undefined"
// 651 JUMP → JUMP_TO=659
// 654 GET_VAR → stack[27] = scope[0][3]
// 656 GET_PROP_NAME stack[27] ← stack[27]["orientation"]
// 658 GET_PROP_NAME stack[27] ← stack[27]["type"]
// 660 DEFINE_PROP Object.defineProperty(stack[26], "orientation", stack[27])
// 663 SET_VAR scope[0][16] ← stack[26]
// 666 GET_VAR → stack[26] = scope[0][16]
// 669 RETURN stack[26]
// 669 JUMP → JUMP_TO=694
// 672 SET_VAR scope[0][17] ← stack[25]
// 675 GET_VAR → stack[25] = scope[1][11]
// 678 DUP → stack[26] = stack[25]
// 678 GET_PROP_NAME stack[26] ← stack[26]["push"]
// 681 NEW_OBJECT → stack[27] = {}
// 682 GET_VAR → stack[28] = scope[0][17]
// 684 DEFINE_PROP Object.defineProperty(stack[27], "err", stack[28])
// 686 PUSH_STRING → stack[28] = "d_s"
// 688 DEFINE_PROP Object.defineProperty(stack[27], "type", stack[28])
// 691 CALL func.apply(thisArg, [1 args]) → stack[25]
// 693 POP stack[25]
// 694 NEW_OBJECT → stack[25] = {}
// 695 RETURN stack[25]
// 696 PUSH_UNDEFINED → stack[25] = undefined
// 697 RETURN stack[25]
