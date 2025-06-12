// 0 GET_GLOBAL → stack[0] = navigator
// 2 GET_PROP_NAME stack[0] ← stack[0]["userAgent"]
// 5 DUP → stack[1] = stack[0]
// 5 GET_PROP_NAME stack[1] ← stack[1]["toLowerCase"]
// 8 CALL func.apply(thisArg, [0 args]) → stack[0]
// 10 SET_VAR scope[0][2] ← stack[0]
// 12 GET_GLOBAL → stack[0] = navigator
// 14 GET_PROP_NAME stack[0] ← stack[0]["platform"]
// 17 DUP → stack[1] = stack[0]
// 17 GET_PROP_NAME stack[1] ← stack[1]["toLowerCase"]
// 20 CALL func.apply(thisArg, [0 args]) → stack[0]
// 22 SET_VAR scope[0][3] ← stack[0]
// 24 PUSH_CONST → stack[0] = 0
// 27 SET_VAR scope[0][4] ← stack[0]
// 29 PUSH_CONST → stack[0] = 1
// 32 SET_VAR scope[0][5] ← stack[0]
// 34 PUSH_CONST → stack[0] = 2
// 37 SET_VAR scope[0][6] ← stack[0]
// 39 PUSH_CONST → stack[0] = 3
// 42 SET_VAR scope[0][7] ← stack[0]
// 44 PUSH_CONST → stack[0] = 4
// 47 SET_VAR scope[0][8] ← stack[0]
// 49 PUSH_CONST → stack[0] = 5
// 52 SET_VAR scope[0][9] ← stack[0]
// 55 GET_VAR → stack[0] = scope[0][9]
// 58 SET_VAR scope[0][10] ← stack[0]
// 60 PUSH_STRING → stack[0] = "windows"
// 63 SET_VAR scope[0][11] ← stack[0]
// 65 PUSH_STRING → stack[0] = "win"
// 68 SET_VAR scope[0][12] ← stack[0]
// 70 PUSH_STRING → stack[0] = "android"
// 73 SET_VAR scope[0][13] ← stack[0]
// 75 PUSH_STRING → stack[0] = "linux"
// 78 SET_VAR scope[0][14] ← stack[0]
// 80 PUSH_STRING → stack[0] = "iphone"
// 83 SET_VAR scope[0][15] ← stack[0]
// 85 PUSH_STRING → stack[0] = "ipad"
// 88 SET_VAR scope[0][16] ← stack[0]
// 90 PUSH_STRING → stack[0] = "ipod"
// 93 SET_VAR scope[0][17] ← stack[0]
// 95 PUSH_STRING → stack[0] = "mac"
// 98 SET_VAR scope[0][18] ← stack[0]
// 101 GET_VAR → stack[0] = scope[0][2]
// 104 DUP → stack[1] = stack[0]
// 104 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 106 PUSH_STRING → stack[2] = "macintosh"
// 109 CALL func.apply(thisArg, [1 args]) → stack[0]
// 110 PUSH_CONST → stack[1] = 0
// 113 GREATER_EQUAL stack[0] = stack[0] >= stack[1]
// 113 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=126 else POP
// 116 GET_VAR → stack[0] = scope[0][2]
// 119 DUP → stack[1] = stack[0]
// 119 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 121 PUSH_STRING → stack[2] = "mac_powerpc)"
// 124 CALL func.apply(thisArg, [1 args]) → stack[0]
// 125 PUSH_CONST → stack[1] = 0
// 128 GREATER_EQUAL stack[0] = stack[0] >= stack[1]
// 128 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=136
// 131 GET_VAR → stack[0] = scope[0][8]
// 134 SET_VAR scope[0][10] ← stack[0]
// 136 JUMP → JUMP_TO=331
// 139 GET_VAR → stack[0] = scope[0][2]
// 142 DUP → stack[1] = stack[0]
// 142 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 145 GET_VAR → stack[2] = scope[0][11]
// 148 CALL func.apply(thisArg, [1 args]) → stack[0]
// 149 PUSH_CONST → stack[1] = 0
// 152 GREATER_EQUAL stack[0] = stack[0] >= stack[1]
// 152 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=160
// 155 GET_VAR → stack[0] = scope[0][4]
// 158 SET_VAR scope[0][10] ← stack[0]
// 160 JUMP → JUMP_TO=331
// 163 GET_VAR → stack[0] = scope[0][2]
// 166 DUP → stack[1] = stack[0]
// 166 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 169 GET_VAR → stack[2] = scope[0][13]
// 172 CALL func.apply(thisArg, [1 args]) → stack[0]
// 173 PUSH_CONST → stack[1] = 0
// 176 GREATER_EQUAL stack[0] = stack[0] >= stack[1]
// 176 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=184
// 179 GET_VAR → stack[0] = scope[0][5]
// 182 SET_VAR scope[0][10] ← stack[0]
// 184 JUMP → JUMP_TO=331
// 187 GET_VAR → stack[0] = scope[0][2]
// 190 DUP → stack[1] = stack[0]
// 190 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 193 GET_VAR → stack[2] = scope[0][14]
// 196 CALL func.apply(thisArg, [1 args]) → stack[0]
// 197 PUSH_CONST → stack[1] = 0
// 200 GREATER_EQUAL stack[0] = stack[0] >= stack[1]
// 200 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=213 else POP
// 203 GET_VAR → stack[0] = scope[0][2]
// 206 DUP → stack[1] = stack[0]
// 206 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 208 PUSH_STRING → stack[2] = "cros"
// 211 CALL func.apply(thisArg, [1 args]) → stack[0]
// 212 PUSH_CONST → stack[1] = 0
// 215 GREATER_EQUAL stack[0] = stack[0] >= stack[1]
// 215 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=228 else POP
// 218 GET_VAR → stack[0] = scope[0][2]
// 221 DUP → stack[1] = stack[0]
// 221 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 223 PUSH_STRING → stack[2] = "x11"
// 226 CALL func.apply(thisArg, [1 args]) → stack[0]
// 227 PUSH_CONST → stack[1] = 0
// 230 GREATER_EQUAL stack[0] = stack[0] >= stack[1]
// 230 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=238
// 233 GET_VAR → stack[0] = scope[0][6]
// 236 SET_VAR scope[0][10] ← stack[0]
// 238 JUMP → JUMP_TO=331
// 241 GET_VAR → stack[0] = scope[0][2]
// 244 DUP → stack[1] = stack[0]
// 244 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 247 GET_VAR → stack[2] = scope[0][15]
// 250 CALL func.apply(thisArg, [1 args]) → stack[0]
// 251 PUSH_CONST → stack[1] = 0
// 254 GREATER_EQUAL stack[0] = stack[0] >= stack[1]
// 254 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=268 else POP
// 257 GET_VAR → stack[0] = scope[0][2]
// 260 DUP → stack[1] = stack[0]
// 260 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 263 GET_VAR → stack[2] = scope[0][16]
// 266 CALL func.apply(thisArg, [1 args]) → stack[0]
// 267 PUSH_CONST → stack[1] = 0
// 270 GREATER_EQUAL stack[0] = stack[0] >= stack[1]
// 270 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=284 else POP
// 273 GET_VAR → stack[0] = scope[0][2]
// 276 DUP → stack[1] = stack[0]
// 276 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 279 GET_VAR → stack[2] = scope[0][17]
// 282 CALL func.apply(thisArg, [1 args]) → stack[0]
// 283 PUSH_CONST → stack[1] = 0
// 286 GREATER_EQUAL stack[0] = stack[0] >= stack[1]
// 286 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=299 else POP
// 289 GET_VAR → stack[0] = scope[0][2]
// 292 DUP → stack[1] = stack[0]
// 292 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 294 PUSH_STRING → stack[2] = "crios"
// 297 CALL func.apply(thisArg, [1 args]) → stack[0]
// 298 PUSH_CONST → stack[1] = 0
// 301 GREATER_EQUAL stack[0] = stack[0] >= stack[1]
// 301 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=314 else POP
// 304 GET_VAR → stack[0] = scope[0][2]
// 307 DUP → stack[1] = stack[0]
// 307 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 309 PUSH_STRING → stack[2] = "fxios"
// 312 CALL func.apply(thisArg, [1 args]) → stack[0]
// 313 PUSH_CONST → stack[1] = 0
// 316 GREATER_EQUAL stack[0] = stack[0] >= stack[1]
// 316 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=324
// 319 GET_VAR → stack[0] = scope[0][7]
// 322 SET_VAR scope[0][10] ← stack[0]
// 324 JUMP → JUMP_TO=331
// 327 GET_VAR → stack[0] = scope[0][9]
// 330 SET_VAR scope[0][10] ← stack[0]
// 333 GET_VAR → stack[0] = scope[0][3]
// 336 DUP → stack[1] = stack[0]
// 336 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 339 GET_VAR → stack[2] = scope[0][12]
// 342 CALL func.apply(thisArg, [1 args]) → stack[0]
// 343 PUSH_CONST → stack[1] = 0
// 346 GREATER_EQUAL stack[0] = stack[0] >= stack[1]
// 346 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=353
// 349 GET_VAR → stack[0] = scope[0][10]
// 352 GET_VAR → stack[1] = scope[0][4]
// 355 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 355 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=359
// 358 PUSH_TRUE → stack[0] = true
// 359 RETURN stack[0]
// 359 JUMP → JUMP_TO=627
// 362 GET_VAR → stack[0] = scope[0][3]
// 365 DUP → stack[1] = stack[0]
// 365 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 368 GET_VAR → stack[2] = scope[0][14]
// 371 CALL func.apply(thisArg, [1 args]) → stack[0]
// 372 PUSH_CONST → stack[1] = 0
// 375 GREATER_EQUAL stack[0] = stack[0] >= stack[1]
// 375 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=389 else POP
// 378 GET_VAR → stack[0] = scope[0][3]
// 381 DUP → stack[1] = stack[0]
// 381 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 384 GET_VAR → stack[2] = scope[0][13]
// 387 CALL func.apply(thisArg, [1 args]) → stack[0]
// 388 PUSH_CONST → stack[1] = 0
// 391 GREATER_EQUAL stack[0] = stack[0] >= stack[1]
// 391 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=404 else POP
// 394 GET_VAR → stack[0] = scope[0][3]
// 397 DUP → stack[1] = stack[0]
// 397 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 399 PUSH_STRING → stack[2] = "pike"
// 402 CALL func.apply(thisArg, [1 args]) → stack[0]
// 403 PUSH_CONST → stack[1] = 0
// 406 GREATER_EQUAL stack[0] = stack[0] >= stack[1]
// 406 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=413
// 409 GET_VAR → stack[0] = scope[0][10]
// 412 GET_VAR → stack[1] = scope[0][6]
// 415 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 415 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=422
// 418 GET_VAR → stack[0] = scope[0][10]
// 421 GET_VAR → stack[1] = scope[0][5]
// 424 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 424 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=428
// 427 PUSH_TRUE → stack[0] = true
// 428 RETURN stack[0]
// 428 JUMP → JUMP_TO=627
// 431 GET_VAR → stack[0] = scope[0][3]
// 434 DUP → stack[1] = stack[0]
// 434 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 437 GET_VAR → stack[2] = scope[0][18]
// 440 CALL func.apply(thisArg, [1 args]) → stack[0]
// 441 PUSH_CONST → stack[1] = 0
// 444 GREATER_EQUAL stack[0] = stack[0] >= stack[1]
// 444 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=458 else POP
// 447 GET_VAR → stack[0] = scope[0][3]
// 450 DUP → stack[1] = stack[0]
// 450 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 453 GET_VAR → stack[2] = scope[0][16]
// 456 CALL func.apply(thisArg, [1 args]) → stack[0]
// 457 PUSH_CONST → stack[1] = 0
// 460 GREATER_EQUAL stack[0] = stack[0] >= stack[1]
// 460 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=474 else POP
// 463 GET_VAR → stack[0] = scope[0][3]
// 466 DUP → stack[1] = stack[0]
// 466 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 469 GET_VAR → stack[2] = scope[0][17]
// 472 CALL func.apply(thisArg, [1 args]) → stack[0]
// 473 PUSH_CONST → stack[1] = 0
// 476 GREATER_EQUAL stack[0] = stack[0] >= stack[1]
// 476 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=490 else POP
// 479 GET_VAR → stack[0] = scope[0][3]
// 482 DUP → stack[1] = stack[0]
// 482 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 485 GET_VAR → stack[2] = scope[0][15]
// 488 CALL func.apply(thisArg, [1 args]) → stack[0]
// 489 PUSH_CONST → stack[1] = 0
// 492 GREATER_EQUAL stack[0] = stack[0] >= stack[1]
// 492 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=499
// 495 GET_VAR → stack[0] = scope[0][10]
// 498 GET_VAR → stack[1] = scope[0][8]
// 501 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 501 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=508
// 504 GET_VAR → stack[0] = scope[0][10]
// 507 GET_VAR → stack[1] = scope[0][7]
// 510 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 510 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=514
// 513 PUSH_TRUE → stack[0] = true
// 514 RETURN stack[0]
// 514 JUMP → JUMP_TO=627
// 517 GET_VAR → stack[0] = scope[0][3]
// 520 DUP → stack[1] = stack[0]
// 520 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 523 GET_VAR → stack[2] = scope[0][12]
// 526 CALL func.apply(thisArg, [1 args]) → stack[0]
// 527 PUSH_CONST → stack[1] = 0
// 530 LESS_THAN stack[0] = stack[0] < stack[1]
// 530 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=544
// 533 GET_VAR → stack[0] = scope[0][3]
// 536 DUP → stack[1] = stack[0]
// 536 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 539 GET_VAR → stack[2] = scope[0][14]
// 542 CALL func.apply(thisArg, [1 args]) → stack[0]
// 543 PUSH_CONST → stack[1] = 0
// 546 LESS_THAN stack[0] = stack[0] < stack[1]
// 546 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=560
// 549 GET_VAR → stack[0] = scope[0][3]
// 552 DUP → stack[1] = stack[0]
// 552 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 555 GET_VAR → stack[2] = scope[0][18]
// 558 CALL func.apply(thisArg, [1 args]) → stack[0]
// 559 PUSH_CONST → stack[1] = 0
// 562 LESS_THAN stack[0] = stack[0] < stack[1]
// 562 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=576
// 565 GET_VAR → stack[0] = scope[0][3]
// 568 DUP → stack[1] = stack[0]
// 568 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 571 GET_VAR → stack[2] = scope[0][15]
// 574 CALL func.apply(thisArg, [1 args]) → stack[0]
// 575 PUSH_CONST → stack[1] = 0
// 578 LESS_THAN stack[0] = stack[0] < stack[1]
// 578 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=592
// 581 GET_VAR → stack[0] = scope[0][3]
// 584 DUP → stack[1] = stack[0]
// 584 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 587 GET_VAR → stack[2] = scope[0][16]
// 590 CALL func.apply(thisArg, [1 args]) → stack[0]
// 591 PUSH_CONST → stack[1] = 0
// 594 LESS_THAN stack[0] = stack[0] < stack[1]
// 594 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=608
// 597 GET_VAR → stack[0] = scope[0][3]
// 600 DUP → stack[1] = stack[0]
// 600 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 603 GET_VAR → stack[2] = scope[0][17]
// 606 CALL func.apply(thisArg, [1 args]) → stack[0]
// 607 PUSH_CONST → stack[1] = 0
// 610 LESS_THAN stack[0] = stack[0] < stack[1]
// 611 SET_VAR scope[0][19] ← stack[0]
// 614 GET_VAR → stack[0] = scope[0][19]
// 617 GET_VAR → stack[1] = scope[0][10]
// 620 GET_VAR → stack[2] = scope[0][9]
// 623 STRICT_EQUAL stack[1] = stack[1] === stack[2]
// 624 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 624 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=626
// 627 PUSH_TRUE → stack[0] = true
// 628 RETURN stack[0]
// 628 PUSH_CONST → stack[0] = 0
// 631 SET_VAR scope[0][20] ← stack[0]
// 633 PUSH_CONST → stack[0] = 1
// 636 SET_VAR scope[0][21] ← stack[0]
// 638 PUSH_CONST → stack[0] = 2
// 641 SET_VAR scope[0][22] ← stack[0]
// 643 PUSH_CONST → stack[0] = 4
// 646 SET_VAR scope[0][23] ← stack[0]
// 648 PUSH_CONST → stack[0] = 5
// 651 SET_VAR scope[0][24] ← stack[0]
// 654 GET_VAR → stack[0] = scope[0][24]
// 657 SET_VAR scope[0][25] ← stack[0]
// 660 GET_VAR → stack[0] = scope[0][2]
// 663 DUP → stack[1] = stack[0]
// 663 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 665 PUSH_STRING → stack[2] = "firefox/"
// 668 CALL func.apply(thisArg, [1 args]) → stack[0]
// 669 PUSH_CONST → stack[1] = 0
// 672 GREATER_EQUAL stack[0] = stack[0] >= stack[1]
// 672 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=680
// 675 GET_VAR → stack[0] = scope[0][22]
// 678 SET_VAR scope[0][25] ← stack[0]
// 680 JUMP → JUMP_TO=798
// 683 GET_VAR → stack[0] = scope[0][2]
// 686 DUP → stack[1] = stack[0]
// 686 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 688 PUSH_STRING → stack[2] = "opera/"
// 691 CALL func.apply(thisArg, [1 args]) → stack[0]
// 692 PUSH_CONST → stack[1] = 0
// 695 GREATER_EQUAL stack[0] = stack[0] >= stack[1]
// 695 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=708 else POP
// 698 GET_VAR → stack[0] = scope[0][2]
// 701 DUP → stack[1] = stack[0]
// 701 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 703 PUSH_STRING → stack[2] = " opr/"
// 706 CALL func.apply(thisArg, [1 args]) → stack[0]
// 707 PUSH_CONST → stack[1] = 0
// 710 GREATER_EQUAL stack[0] = stack[0] >= stack[1]
// 710 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=720 else POP
// 713 GET_VAR → stack[0] = scope[0][2]
// 716 DUP → stack[1] = stack[0]
// 716 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 718 PUSH_STRING → stack[2] = " opt/"
// 721 CALL func.apply(thisArg, [1 args]) → stack[0]
// 722 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=730
// 725 GET_VAR → stack[0] = scope[0][21]
// 728 SET_VAR scope[0][25] ← stack[0]
// 730 JUMP → JUMP_TO=798
// 733 GET_VAR → stack[0] = scope[0][2]
// 736 DUP → stack[1] = stack[0]
// 736 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 738 PUSH_STRING → stack[2] = "chrome/"
// 741 CALL func.apply(thisArg, [1 args]) → stack[0]
// 742 PUSH_CONST → stack[1] = 0
// 745 GREATER_EQUAL stack[0] = stack[0] >= stack[1]
// 745 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=753
// 748 GET_VAR → stack[0] = scope[0][20]
// 751 SET_VAR scope[0][25] ← stack[0]
// 753 JUMP → JUMP_TO=798
// 756 GET_VAR → stack[0] = scope[0][2]
// 759 DUP → stack[1] = stack[0]
// 759 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 761 PUSH_STRING → stack[2] = "trident/"
// 764 CALL func.apply(thisArg, [1 args]) → stack[0]
// 765 PUSH_CONST → stack[1] = 0
// 768 GREATER_EQUAL stack[0] = stack[0] >= stack[1]
// 768 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=781 else POP
// 771 GET_VAR → stack[0] = scope[0][2]
// 774 DUP → stack[1] = stack[0]
// 774 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 776 PUSH_STRING → stack[2] = "msie"
// 779 CALL func.apply(thisArg, [1 args]) → stack[0]
// 780 PUSH_CONST → stack[1] = 0
// 783 GREATER_EQUAL stack[0] = stack[0] >= stack[1]
// 783 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=791
// 786 GET_VAR → stack[0] = scope[0][23]
// 789 SET_VAR scope[0][25] ← stack[0]
// 791 JUMP → JUMP_TO=798
// 794 GET_VAR → stack[0] = scope[0][24]
// 797 SET_VAR scope[0][25] ← stack[0]
// 800 PUSH_UNDEFINED → stack[0] = undefined
// 801 GET_VAR → stack[1] = scope[2][0]
// 804 GET_VAR → stack[2] = scope[2][2]
// 807 GET_VAR → stack[3] = scope[2][3]
// 809 GET_PROP_NAME stack[3] ← stack[3]["slardarErrs"]
// 812 CALL func.apply(thisArg, [2 args]) → stack[0]
// 814 DUP → stack[1] = stack[0]
// 814 GET_PROP_NAME stack[1] ← stack[1]["toLowerCase"]
// 817 CALL func.apply(thisArg, [0 args]) → stack[0]
// 819 SET_VAR scope[0][26] ← stack[0]
// 822 PUSH_UNDEFINED → stack[0] = undefined
// 823 GET_VAR → stack[1] = scope[2][1]
// 826 PUSH_FALSE → stack[2] = false
// 827 CALL func.apply(thisArg, [1 args]) → stack[0]
// 829 SET_VAR scope[0][27] ← stack[0]
// 832 GET_VAR → stack[0] = scope[0][27]
// 834 GET_PROP_NAME stack[0] ← stack[0]["data"]
// 836 GET_PROP_NAME stack[0] ← stack[0]["gpu"]
// 839 SET_VAR scope[0][28] ← stack[0]
// 842 GET_VAR → stack[0] = scope[0][28]
// 845 DUP → stack[1] = stack[0]
// 845 GET_PROP_NAME stack[1] ← stack[1]["toLowerCase"]
// 848 CALL func.apply(thisArg, [0 args]) → stack[0]
// 850 SET_VAR scope[0][29] ← stack[0]
// 853 GET_VAR → stack[0] = scope[0][25]
// 856 GET_VAR → stack[1] = scope[0][20]
// 859 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 859 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=866
// 862 GET_VAR → stack[0] = scope[0][25]
// 865 GET_VAR → stack[1] = scope[0][21]
// 868 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 868 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=893
// 870 GET_GLOBAL → stack[0] = window
// 872 GET_PROP_NAME stack[0] ← stack[0]["chrome"]
// 874 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=893 else POP
// 876 GET_GLOBAL → stack[0] = navigator
// 878 GET_PROP_NAME stack[0] ← stack[0]["vendor"]
// 881 DUP → stack[1] = stack[0]
// 881 GET_PROP_NAME stack[1] ← stack[1]["toString"]
// 884 CALL func.apply(thisArg, [0 args]) → stack[0]
// 886 DUP → stack[1] = stack[0]
// 886 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 888 PUSH_STRING → stack[2] = "Google"
// 891 CALL func.apply(thisArg, [1 args]) → stack[0]
// 892 PUSH_CONST → stack[1] = 0
// 895 GREATER_EQUAL stack[0] = stack[0] >= stack[1]
// 895 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=897
// 898 PUSH_TRUE → stack[0] = true
// 899 RETURN stack[0]
// 900 GET_VAR → stack[0] = scope[0][25]
// 903 GET_VAR → stack[1] = scope[0][20]
// 906 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 906 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=913
// 909 GET_VAR → stack[0] = scope[0][25]
// 912 GET_VAR → stack[1] = scope[0][21]
// 915 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 915 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=928
// 918 GET_VAR → stack[0] = scope[0][26]
// 921 DUP → stack[1] = stack[0]
// 921 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 923 PUSH_STRING → stack[2] = "chrome"
// 926 CALL func.apply(thisArg, [1 args]) → stack[0]
// 927 PUSH_CONST → stack[1] = 0
// 930 GREATER_EQUAL stack[0] = stack[0] >= stack[1]
// 930 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=932
// 933 PUSH_TRUE → stack[0] = true
// 934 RETURN stack[0]
// 935 GET_VAR → stack[0] = scope[0][25]
// 938 GET_VAR → stack[1] = scope[0][23]
// 941 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 941 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=947
// 944 GET_VAR → stack[0] = scope[0][29]
// 946 PUSH_STRING → stack[1] = ""
// 949 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 949 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=951
// 952 PUSH_TRUE → stack[0] = true
// 953 RETURN stack[0]
// 954 PUSH_FALSE → stack[0] = false
// 955 RETURN stack[0]
