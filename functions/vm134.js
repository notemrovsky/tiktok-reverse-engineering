// 0 PUSH_STRING → stack[0] = "🐼OynG@%tp$"
// 3 SET_VAR scope[0][2] ← stack[0]
// 5 PUSH_STRING → stack[0] = "rgba(47, 211, 69, .99)"
// 8 SET_VAR scope[0][3] ← stack[0]
// 10 PUSH_STRING → stack[0] = "*+(}#?🐼 🎅"
// 13 SET_VAR scope[0][4] ← stack[0]
// 15 PUSH_STRING → stack[0] = "rgba(150, 32, 170, .97)"
// 18 SET_VAR scope[0][5] ← stack[0]
// 20 PUSH_STRING → stack[0] = "rgba(255, 12, 220, 1)"
// 23 SET_VAR scope[0][6] ← stack[0]
// 25 PUSH_CONST → stack[0] = 94
// 28 SET_VAR scope[0][7] ← stack[0]
// 30 PUSH_CONST → stack[0] = 31
// 33 SET_VAR scope[0][8] ← stack[0]
// 35 PUSH_CONST → stack[0] = 3
// 38 SET_VAR scope[0][9] ← stack[0]
// 40 PUSH_CONST → stack[0] = 18
// 43 SET_VAR scope[0][10] ← stack[0]
// 46 NEW_ARRAY → stack[0] = [...top 0 elements]
// 48 SET_VAR scope[0][11] ← stack[0]
// 50 PUSH_STRING → stack[0] = ""
// 53 SET_VAR scope[0][12] ← stack[0]
// 55 PUSH_CONST → stack[0] = 1
// 58 NEGATE stack[0] = -stack[0]
// 59 SET_VAR scope[0][13] ← stack[0]
// 62 NEW_ARRAY → stack[0] = [...top 0 elements]
// 64 SET_VAR scope[0][14] ← stack[0]
// 66 PUSH_STRING → stack[0] = ""
// 69 SET_VAR scope[0][15] ← stack[0]
// 71 PUSH_CONST → stack[0] = 1
// 74 NEGATE stack[0] = -stack[0]
// 75 SET_VAR scope[0][16] ← stack[0]
// 77 PUSH_CONST → stack[0] = 1
// 80 SET_VAR scope[0][17] ← stack[0]
// 82 GET_GLOBAL → stack[0] = document
// 85 DUP → stack[1] = stack[0]
// 85 GET_PROP_NAME stack[1] ← stack[1]["createElement"]
// 87 PUSH_STRING → stack[2] = "canvas"
// 90 CALL func.apply(thisArg, [1 args]) → stack[0]
// 92 SET_VAR scope[0][18] ← stack[0]
// 95 GET_VAR → stack[0] = scope[0][18]
// 98 GET_VAR → stack[1] = scope[0][7]
// 100 SET_GLOBAL_PROP stack[1]["width"] ← stack[0]
// 103 GET_VAR → stack[0] = scope[0][18]
// 106 GET_VAR → stack[1] = scope[0][8]
// 108 SET_GLOBAL_PROP stack[1]["height"] ← stack[0]
// 111 GET_VAR → stack[0] = scope[0][18]
// 114 DUP → stack[1] = stack[0]
// 114 GET_PROP_NAME stack[1] ← stack[1]["getContext"]
// 116 PUSH_STRING → stack[2] = "2d"
// 119 CALL func.apply(thisArg, [1 args]) → stack[0]
// 121 SET_VAR scope[0][19] ← stack[0]
// 124 GET_VAR → stack[0] = scope[0][19]
// 126 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=526
// 129 GET_VAR → stack[0] = scope[0][19]
// 132 DUP → stack[1] = stack[0]
// 132 GET_PROP_NAME stack[1] ← stack[1]["createLinearGradient"]
// 134 PUSH_CONST → stack[2] = 10
// 136 PUSH_CONST → stack[3] = 0
// 138 PUSH_CONST → stack[4] = 180
// 140 PUSH_CONST → stack[5] = 1
// 143 CALL func.apply(thisArg, [4 args]) → stack[0]
// 145 SET_VAR scope[0][20] ← stack[0]
// 148 GET_VAR → stack[0] = scope[0][20]
// 151 DUP → stack[1] = stack[0]
// 151 GET_PROP_NAME stack[1] ← stack[1]["addColorStop"]
// 153 PUSH_CONST → stack[2] = 0
// 155 PUSH_STRING → stack[3] = "red"
// 158 CALL func.apply(thisArg, [2 args]) → stack[0]
// 160 POP stack[0]
// 161 GET_VAR → stack[0] = scope[0][20]
// 164 DUP → stack[1] = stack[0]
// 164 GET_PROP_NAME stack[1] ← stack[1]["addColorStop"]
// 166 PUSH_MAGIC_NUMBER → stack[2] = 0.1
// 168 PUSH_STRING → stack[3] = "white"
// 171 CALL func.apply(thisArg, [2 args]) → stack[0]
// 173 POP stack[0]
// 174 GET_VAR → stack[0] = scope[0][20]
// 177 DUP → stack[1] = stack[0]
// 177 GET_PROP_NAME stack[1] ← stack[1]["addColorStop"]
// 179 PUSH_MAGIC_NUMBER → stack[2] = 0.2
// 181 PUSH_STRING → stack[3] = "blue"
// 184 CALL func.apply(thisArg, [2 args]) → stack[0]
// 186 POP stack[0]
// 187 GET_VAR → stack[0] = scope[0][20]
// 190 DUP → stack[1] = stack[0]
// 190 GET_PROP_NAME stack[1] ← stack[1]["addColorStop"]
// 192 PUSH_MAGIC_NUMBER → stack[2] = 0.3
// 194 PUSH_STRING → stack[3] = "yellow"
// 197 CALL func.apply(thisArg, [2 args]) → stack[0]
// 199 POP stack[0]
// 200 GET_VAR → stack[0] = scope[0][20]
// 203 DUP → stack[1] = stack[0]
// 203 GET_PROP_NAME stack[1] ← stack[1]["addColorStop"]
// 205 PUSH_MAGIC_NUMBER → stack[2] = 0.4
// 207 PUSH_STRING → stack[3] = "purple"
// 210 CALL func.apply(thisArg, [2 args]) → stack[0]
// 212 POP stack[0]
// 213 GET_VAR → stack[0] = scope[0][20]
// 216 DUP → stack[1] = stack[0]
// 216 GET_PROP_NAME stack[1] ← stack[1]["addColorStop"]
// 218 PUSH_MAGIC_NUMBER → stack[2] = 0.7
// 220 PUSH_STRING → stack[3] = "orange"
// 223 CALL func.apply(thisArg, [2 args]) → stack[0]
// 225 POP stack[0]
// 226 GET_VAR → stack[0] = scope[0][20]
// 229 DUP → stack[1] = stack[0]
// 229 GET_PROP_NAME stack[1] ← stack[1]["addColorStop"]
// 231 PUSH_CONST → stack[2] = 1
// 233 PUSH_STRING → stack[3] = "magenta"
// 236 CALL func.apply(thisArg, [2 args]) → stack[0]
// 238 POP stack[0]
// 239 GET_VAR → stack[0] = scope[0][19]
// 242 GET_VAR → stack[1] = scope[0][20]
// 244 SET_GLOBAL_PROP stack[1]["fillStyle"] ← stack[0]
// 247 GET_VAR → stack[0] = scope[0][19]
// 250 DUP → stack[1] = stack[0]
// 250 GET_PROP_NAME stack[1] ← stack[1]["fillRect"]
// 252 PUSH_CONST → stack[2] = 0
// 254 PUSH_CONST → stack[3] = 10
// 256 PUSH_CONST → stack[4] = 100
// 258 PUSH_CONST → stack[5] = 6
// 261 CALL func.apply(thisArg, [4 args]) → stack[0]
// 263 POP stack[0]
// 264 GET_VAR → stack[0] = scope[0][19]
// 267 DUP → stack[1] = stack[0]
// 267 GET_PROP_NAME stack[1] ← stack[1]["createLinearGradient"]
// 269 PUSH_CONST → stack[2] = 0
// 271 PUSH_CONST → stack[3] = 0
// 273 PUSH_CONST → stack[4] = 100
// 275 PUSH_CONST → stack[5] = 100
// 278 CALL func.apply(thisArg, [4 args]) → stack[0]
// 280 SET_VAR scope[0][21] ← stack[0]
// 283 GET_VAR → stack[0] = scope[0][21]
// 286 DUP → stack[1] = stack[0]
// 286 GET_PROP_NAME stack[1] ← stack[1]["addColorStop"]
// 288 PUSH_CONST → stack[2] = 0
// 290 PUSH_STRING → stack[3] = "green"
// 293 CALL func.apply(thisArg, [2 args]) → stack[0]
// 295 POP stack[0]
// 296 GET_VAR → stack[0] = scope[0][21]
// 299 DUP → stack[1] = stack[0]
// 299 GET_PROP_NAME stack[1] ← stack[1]["addColorStop"]
// 301 PUSH_MAGIC_NUMBER → stack[2] = 0.5
// 303 PUSH_STRING → stack[3] = "yellow"
// 306 CALL func.apply(thisArg, [2 args]) → stack[0]
// 308 POP stack[0]
// 309 GET_VAR → stack[0] = scope[0][21]
// 312 DUP → stack[1] = stack[0]
// 312 GET_PROP_NAME stack[1] ← stack[1]["addColorStop"]
// 314 PUSH_MAGIC_NUMBER → stack[2] = 0.7
// 316 PUSH_STRING → stack[3] = "orange"
// 319 CALL func.apply(thisArg, [2 args]) → stack[0]
// 321 POP stack[0]
// 322 GET_VAR → stack[0] = scope[0][21]
// 325 DUP → stack[1] = stack[0]
// 325 GET_PROP_NAME stack[1] ← stack[1]["addColorStop"]
// 327 PUSH_CONST → stack[2] = 1
// 329 PUSH_STRING → stack[3] = "magenta"
// 332 CALL func.apply(thisArg, [2 args]) → stack[0]
// 334 POP stack[0]
// 335 GET_VAR → stack[0] = scope[0][19]
// 338 DUP → stack[1] = stack[0]
// 338 GET_PROP_NAME stack[1] ← stack[1]["beginPath"]
// 341 CALL func.apply(thisArg, [0 args]) → stack[0]
// 343 POP stack[0]
// 344 GET_VAR → stack[0] = scope[0][19]
// 347 GET_VAR → stack[1] = scope[0][21]
// 349 SET_GLOBAL_PROP stack[1]["fillStyle"] ← stack[0]
// 352 GET_VAR → stack[0] = scope[0][19]
// 355 DUP → stack[1] = stack[0]
// 355 GET_PROP_NAME stack[1] ← stack[1]["arc"]
// 357 PUSH_CONST → stack[2] = 50
// 359 PUSH_CONST → stack[3] = 10
// 361 PUSH_CONST → stack[4] = 25
// 363 PUSH_CONST → stack[5] = 0
// 365 PUSH_CONST → stack[6] = 2
// 367 GET_GLOBAL → stack[7] = Math
// 369 GET_PROP_NAME stack[7] ← stack[7]["PI"]
// 372 MUL stack[6] = stack[6] * stack[7]
// 373 CALL func.apply(thisArg, [5 args]) → stack[0]
// 375 POP stack[0]
// 376 GET_VAR → stack[0] = scope[0][19]
// 379 DUP → stack[1] = stack[0]
// 379 GET_PROP_NAME stack[1] ← stack[1]["stroke"]
// 382 CALL func.apply(thisArg, [0 args]) → stack[0]
// 384 POP stack[0]
// 385 GET_VAR → stack[0] = scope[0][19]
// 388 GET_VAR → stack[1] = scope[0][5]
// 390 SET_GLOBAL_PROP stack[1]["fillStyle"] ← stack[0]
// 393 GET_VAR → stack[0] = scope[0][19]
// 395 PUSH_STRING → stack[1] = "12px Sans"
// 397 SET_GLOBAL_PROP stack[1]["font"] ← stack[0]
// 400 GET_VAR → stack[0] = scope[0][19]
// 402 PUSH_STRING → stack[1] = "top"
// 404 SET_GLOBAL_PROP stack[1]["textBaseline"] ← stack[0]
// 407 GET_VAR → stack[0] = scope[0][19]
// 410 DUP → stack[1] = stack[0]
// 410 GET_PROP_NAME stack[1] ← stack[1]["fillText"]
// 413 GET_VAR → stack[2] = scope[0][4]
// 416 GET_VAR → stack[3] = scope[0][10]
// 419 GET_VAR → stack[4] = scope[0][10]
// 422 CALL func.apply(thisArg, [3 args]) → stack[0]
// 424 POP stack[0]
// 425 GET_VAR → stack[0] = scope[0][19]
// 427 PUSH_CONST → stack[1] = 1
// 429 SET_GLOBAL_PROP stack[1]["shadowBlur"] ← stack[0]
// 432 GET_VAR → stack[0] = scope[0][19]
// 434 PUSH_CONST → stack[1] = 1
// 436 SET_GLOBAL_PROP stack[1]["showOffsetX"] ← stack[0]
// 439 GET_VAR → stack[0] = scope[0][19]
// 442 GET_VAR → stack[1] = scope[0][3]
// 444 SET_GLOBAL_PROP stack[1]["fillStyle"] ← stack[0]
// 447 GET_VAR → stack[0] = scope[0][19]
// 449 PUSH_STRING → stack[1] = "14px Sans"
// 451 SET_GLOBAL_PROP stack[1]["font"] ← stack[0]
// 454 GET_VAR → stack[0] = scope[0][19]
// 456 PUSH_STRING → stack[1] = "top"
// 458 SET_GLOBAL_PROP stack[1]["textBaseline"] ← stack[0]
// 461 GET_VAR → stack[0] = scope[0][19]
// 464 DUP → stack[1] = stack[0]
// 464 GET_PROP_NAME stack[1] ← stack[1]["fillText"]
// 467 GET_VAR → stack[2] = scope[0][2]
// 470 GET_VAR → stack[3] = scope[0][9]
// 473 GET_VAR → stack[4] = scope[0][9]
// 476 CALL func.apply(thisArg, [3 args]) → stack[0]
// 478 POP stack[0]
// 479 GET_VAR → stack[0] = scope[0][19]
// 482 DUP → stack[1] = stack[0]
// 482 GET_PROP_NAME stack[1] ← stack[1]["beginPath"]
// 485 CALL func.apply(thisArg, [0 args]) → stack[0]
// 487 POP stack[0]
// 488 GET_VAR → stack[0] = scope[0][19]
// 491 DUP → stack[1] = stack[0]
// 491 GET_PROP_NAME stack[1] ← stack[1]["arc"]
// 493 PUSH_CONST → stack[2] = 30
// 495 PUSH_CONST → stack[3] = 10
// 497 PUSH_CONST → stack[4] = 20
// 499 PUSH_CONST → stack[5] = 0
// 501 PUSH_CONST → stack[6] = 2
// 503 GET_GLOBAL → stack[7] = Math
// 505 GET_PROP_NAME stack[7] ← stack[7]["PI"]
// 508 MUL stack[6] = stack[6] * stack[7]
// 509 CALL func.apply(thisArg, [5 args]) → stack[0]
// 511 POP stack[0]
// 512 GET_VAR → stack[0] = scope[0][19]
// 515 GET_VAR → stack[1] = scope[0][6]
// 517 SET_GLOBAL_PROP stack[1]["strokeStyle"] ← stack[0]
// 520 GET_VAR → stack[0] = scope[0][19]
// 523 DUP → stack[1] = stack[0]
// 523 GET_PROP_NAME stack[1] ← stack[1]["stroke"]
// 526 CALL func.apply(thisArg, [0 args]) → stack[0]
// 528 POP stack[0]
// 529 GET_VAR → stack[0] = scope[0][18]
// 532 DUP → stack[1] = stack[0]
// 532 GET_PROP_NAME stack[1] ← stack[1]["toDataURL"]
// 534 PUSH_STRING → stack[2] = "image/png"
// 537 CALL func.apply(thisArg, [1 args]) → stack[0]
// 539 SET_VAR scope[0][12] ← stack[0]
// 542 PUSH_UNDEFINED → stack[0] = undefined
// 543 GET_VAR → stack[1] = scope[2][1]
// 546 GET_VAR → stack[2] = scope[0][12]
// 549 CALL func.apply(thisArg, [1 args]) → stack[0]
// 551 SET_VAR scope[0][13] ← stack[0]
// 554 GET_VAR → stack[0] = scope[0][19]
// 557 DUP → stack[1] = stack[0]
// 557 GET_PROP_NAME stack[1] ← stack[1]["getImageData"]
// 559 PUSH_CONST → stack[2] = 0
// 561 PUSH_CONST → stack[3] = 0
// 564 GET_VAR → stack[4] = scope[0][7]
// 567 GET_VAR → stack[5] = scope[0][8]
// 570 CALL func.apply(thisArg, [4 args]) → stack[0]
// 572 SET_VAR scope[0][11] ← stack[0]
// 574 JUMP → JUMP_TO=583
// 577 SET_VAR scope[0][30] ← stack[-1]
// 579 PUSH_CONST → stack[-1] = 2
// 582 SET_VAR scope[0][17] ← stack[-1]
// 584 GET_GLOBAL → stack[-1] = document
// 587 DUP → stack[0] = stack[-1]
// 587 GET_PROP_NAME stack[0] ← stack[0]["createElement"]
// 589 PUSH_STRING → stack[1] = "canvas"
// 592 CALL func.apply(thisArg, [1 args]) → stack[-1]
// 594 SET_VAR scope[0][22] ← stack[-1]
// 597 GET_VAR → stack[-1] = scope[0][22]
// 600 GET_VAR → stack[0] = scope[0][7]
// 602 SET_GLOBAL_PROP stack[0]["width"] ← stack[-1]
// 605 GET_VAR → stack[-1] = scope[0][22]
// 608 GET_VAR → stack[0] = scope[0][8]
// 610 SET_GLOBAL_PROP stack[0]["height"] ← stack[-1]
// 613 GET_VAR → stack[-1] = scope[0][22]
// 616 DUP → stack[0] = stack[-1]
// 616 GET_PROP_NAME stack[0] ← stack[0]["getContext"]
// 618 PUSH_STRING → stack[1] = "2d"
// 621 CALL func.apply(thisArg, [1 args]) → stack[-1]
// 623 SET_VAR scope[0][23] ← stack[-1]
// 626 GET_VAR → stack[-1] = scope[0][23]
// 628 JUMP_IF_FALSE if (!stack[-1]) JUMP_TO=1028
// 631 GET_VAR → stack[-1] = scope[0][23]
// 634 DUP → stack[0] = stack[-1]
// 634 GET_PROP_NAME stack[0] ← stack[0]["createLinearGradient"]
// 636 PUSH_CONST → stack[1] = 10
// 638 PUSH_CONST → stack[2] = 0
// 640 PUSH_CONST → stack[3] = 180
// 642 PUSH_CONST → stack[4] = 1
// 645 CALL func.apply(thisArg, [4 args]) → stack[-1]
// 647 SET_VAR scope[0][24] ← stack[-1]
// 650 GET_VAR → stack[-1] = scope[0][24]
// 653 DUP → stack[0] = stack[-1]
// 653 GET_PROP_NAME stack[0] ← stack[0]["addColorStop"]
// 655 PUSH_CONST → stack[1] = 0
// 657 PUSH_STRING → stack[2] = "red"
// 660 CALL func.apply(thisArg, [2 args]) → stack[-1]
// 662 POP stack[-1]
// 663 GET_VAR → stack[-1] = scope[0][24]
// 666 DUP → stack[0] = stack[-1]
// 666 GET_PROP_NAME stack[0] ← stack[0]["addColorStop"]
// 668 PUSH_MAGIC_NUMBER → stack[1] = 0.1
// 670 PUSH_STRING → stack[2] = "white"
// 673 CALL func.apply(thisArg, [2 args]) → stack[-1]
// 675 POP stack[-1]
// 676 GET_VAR → stack[-1] = scope[0][24]
// 679 DUP → stack[0] = stack[-1]
// 679 GET_PROP_NAME stack[0] ← stack[0]["addColorStop"]
// 681 PUSH_MAGIC_NUMBER → stack[1] = 0.2
// 683 PUSH_STRING → stack[2] = "blue"
// 686 CALL func.apply(thisArg, [2 args]) → stack[-1]
// 688 POP stack[-1]
// 689 GET_VAR → stack[-1] = scope[0][24]
// 692 DUP → stack[0] = stack[-1]
// 692 GET_PROP_NAME stack[0] ← stack[0]["addColorStop"]
// 694 PUSH_MAGIC_NUMBER → stack[1] = 0.3
// 696 PUSH_STRING → stack[2] = "yellow"
// 699 CALL func.apply(thisArg, [2 args]) → stack[-1]
// 701 POP stack[-1]
// 702 GET_VAR → stack[-1] = scope[0][24]
// 705 DUP → stack[0] = stack[-1]
// 705 GET_PROP_NAME stack[0] ← stack[0]["addColorStop"]
// 707 PUSH_MAGIC_NUMBER → stack[1] = 0.4
// 709 PUSH_STRING → stack[2] = "purple"
// 712 CALL func.apply(thisArg, [2 args]) → stack[-1]
// 714 POP stack[-1]
// 715 GET_VAR → stack[-1] = scope[0][24]
// 718 DUP → stack[0] = stack[-1]
// 718 GET_PROP_NAME stack[0] ← stack[0]["addColorStop"]
// 720 PUSH_MAGIC_NUMBER → stack[1] = 0.7
// 722 PUSH_STRING → stack[2] = "orange"
// 725 CALL func.apply(thisArg, [2 args]) → stack[-1]
// 727 POP stack[-1]
// 728 GET_VAR → stack[-1] = scope[0][24]
// 731 DUP → stack[0] = stack[-1]
// 731 GET_PROP_NAME stack[0] ← stack[0]["addColorStop"]
// 733 PUSH_CONST → stack[1] = 1
// 735 PUSH_STRING → stack[2] = "magenta"
// 738 CALL func.apply(thisArg, [2 args]) → stack[-1]
// 740 POP stack[-1]
// 741 GET_VAR → stack[-1] = scope[0][23]
// 744 GET_VAR → stack[0] = scope[0][24]
// 746 SET_GLOBAL_PROP stack[0]["fillStyle"] ← stack[-1]
// 749 GET_VAR → stack[-1] = scope[0][23]
// 752 DUP → stack[0] = stack[-1]
// 752 GET_PROP_NAME stack[0] ← stack[0]["fillRect"]
// 754 PUSH_CONST → stack[1] = 0
// 756 PUSH_CONST → stack[2] = 10
// 758 PUSH_CONST → stack[3] = 100
// 760 PUSH_CONST → stack[4] = 6
// 763 CALL func.apply(thisArg, [4 args]) → stack[-1]
// 765 POP stack[-1]
// 766 GET_VAR → stack[-1] = scope[0][23]
// 769 DUP → stack[0] = stack[-1]
// 769 GET_PROP_NAME stack[0] ← stack[0]["createLinearGradient"]
// 771 PUSH_CONST → stack[1] = 0
// 773 PUSH_CONST → stack[2] = 0
// 775 PUSH_CONST → stack[3] = 100
// 777 PUSH_CONST → stack[4] = 100
// 780 CALL func.apply(thisArg, [4 args]) → stack[-1]
// 782 SET_VAR scope[0][25] ← stack[-1]
// 785 GET_VAR → stack[-1] = scope[0][25]
// 788 DUP → stack[0] = stack[-1]
// 788 GET_PROP_NAME stack[0] ← stack[0]["addColorStop"]
// 790 PUSH_CONST → stack[1] = 0
// 792 PUSH_STRING → stack[2] = "green"
// 795 CALL func.apply(thisArg, [2 args]) → stack[-1]
// 797 POP stack[-1]
// 798 GET_VAR → stack[-1] = scope[0][25]
// 801 DUP → stack[0] = stack[-1]
// 801 GET_PROP_NAME stack[0] ← stack[0]["addColorStop"]
// 803 PUSH_MAGIC_NUMBER → stack[1] = 0.5
// 805 PUSH_STRING → stack[2] = "yellow"
// 808 CALL func.apply(thisArg, [2 args]) → stack[-1]
// 810 POP stack[-1]
// 811 GET_VAR → stack[-1] = scope[0][25]
// 814 DUP → stack[0] = stack[-1]
// 814 GET_PROP_NAME stack[0] ← stack[0]["addColorStop"]
// 816 PUSH_MAGIC_NUMBER → stack[1] = 0.7
// 818 PUSH_STRING → stack[2] = "orange"
// 821 CALL func.apply(thisArg, [2 args]) → stack[-1]
// 823 POP stack[-1]
// 824 GET_VAR → stack[-1] = scope[0][25]
// 827 DUP → stack[0] = stack[-1]
// 827 GET_PROP_NAME stack[0] ← stack[0]["addColorStop"]
// 829 PUSH_CONST → stack[1] = 1
// 831 PUSH_STRING → stack[2] = "magenta"
// 834 CALL func.apply(thisArg, [2 args]) → stack[-1]
// 836 POP stack[-1]
// 837 GET_VAR → stack[-1] = scope[0][23]
// 840 DUP → stack[0] = stack[-1]
// 840 GET_PROP_NAME stack[0] ← stack[0]["beginPath"]
// 843 CALL func.apply(thisArg, [0 args]) → stack[-1]
// 845 POP stack[-1]
// 846 GET_VAR → stack[-1] = scope[0][23]
// 849 GET_VAR → stack[0] = scope[0][25]
// 851 SET_GLOBAL_PROP stack[0]["fillStyle"] ← stack[-1]
// 854 GET_VAR → stack[-1] = scope[0][23]
// 857 DUP → stack[0] = stack[-1]
// 857 GET_PROP_NAME stack[0] ← stack[0]["arc"]
// 859 PUSH_CONST → stack[1] = 50
// 861 PUSH_CONST → stack[2] = 10
// 863 PUSH_CONST → stack[3] = 25
// 865 PUSH_CONST → stack[4] = 0
// 867 PUSH_CONST → stack[5] = 2
// 869 GET_GLOBAL → stack[6] = Math
// 871 GET_PROP_NAME stack[6] ← stack[6]["PI"]
// 874 MUL stack[5] = stack[5] * stack[6]
// 875 CALL func.apply(thisArg, [5 args]) → stack[-1]
// 877 POP stack[-1]
// 878 GET_VAR → stack[-1] = scope[0][23]
// 881 DUP → stack[0] = stack[-1]
// 881 GET_PROP_NAME stack[0] ← stack[0]["stroke"]
// 884 CALL func.apply(thisArg, [0 args]) → stack[-1]
// 886 POP stack[-1]
// 887 GET_VAR → stack[-1] = scope[0][23]
// 890 GET_VAR → stack[0] = scope[0][5]
// 892 SET_GLOBAL_PROP stack[0]["fillStyle"] ← stack[-1]
// 895 GET_VAR → stack[-1] = scope[0][23]
// 897 PUSH_STRING → stack[0] = "12px Sans"
// 899 SET_GLOBAL_PROP stack[0]["font"] ← stack[-1]
// 902 GET_VAR → stack[-1] = scope[0][23]
// 904 PUSH_STRING → stack[0] = "top"
// 906 SET_GLOBAL_PROP stack[0]["textBaseline"] ← stack[-1]
// 909 GET_VAR → stack[-1] = scope[0][23]
// 912 DUP → stack[0] = stack[-1]
// 912 GET_PROP_NAME stack[0] ← stack[0]["fillText"]
// 915 GET_VAR → stack[1] = scope[0][4]
// 918 GET_VAR → stack[2] = scope[0][10]
// 921 GET_VAR → stack[3] = scope[0][10]
// 924 CALL func.apply(thisArg, [3 args]) → stack[-1]
// 926 POP stack[-1]
// 927 GET_VAR → stack[-1] = scope[0][23]
// 929 PUSH_CONST → stack[0] = 1
// 931 SET_GLOBAL_PROP stack[0]["shadowBlur"] ← stack[-1]
// 934 GET_VAR → stack[-1] = scope[0][23]
// 936 PUSH_CONST → stack[0] = 1
// 938 SET_GLOBAL_PROP stack[0]["showOffsetX"] ← stack[-1]
// 941 GET_VAR → stack[-1] = scope[0][23]
// 944 GET_VAR → stack[0] = scope[0][3]
// 946 SET_GLOBAL_PROP stack[0]["fillStyle"] ← stack[-1]
// 949 GET_VAR → stack[-1] = scope[0][23]
// 951 PUSH_STRING → stack[0] = "14px Sans"
// 953 SET_GLOBAL_PROP stack[0]["font"] ← stack[-1]
// 956 GET_VAR → stack[-1] = scope[0][23]
// 958 PUSH_STRING → stack[0] = "top"
// 960 SET_GLOBAL_PROP stack[0]["textBaseline"] ← stack[-1]
// 963 GET_VAR → stack[-1] = scope[0][23]
// 966 DUP → stack[0] = stack[-1]
// 966 GET_PROP_NAME stack[0] ← stack[0]["fillText"]
// 969 GET_VAR → stack[1] = scope[0][2]
// 972 GET_VAR → stack[2] = scope[0][9]
// 975 GET_VAR → stack[3] = scope[0][9]
// 978 CALL func.apply(thisArg, [3 args]) → stack[-1]
// 980 POP stack[-1]
// 981 GET_VAR → stack[-1] = scope[0][23]
// 984 DUP → stack[0] = stack[-1]
// 984 GET_PROP_NAME stack[0] ← stack[0]["beginPath"]
// 987 CALL func.apply(thisArg, [0 args]) → stack[-1]
// 989 POP stack[-1]
// 990 GET_VAR → stack[-1] = scope[0][23]
// 993 DUP → stack[0] = stack[-1]
// 993 GET_PROP_NAME stack[0] ← stack[0]["arc"]
// 995 PUSH_CONST → stack[1] = 30
// 997 PUSH_CONST → stack[2] = 10
// 999 PUSH_CONST → stack[3] = 20
// 1001 PUSH_CONST → stack[4] = 0
// 1003 PUSH_CONST → stack[5] = 2
// 1005 GET_GLOBAL → stack[6] = Math
// 1007 GET_PROP_NAME stack[6] ← stack[6]["PI"]
// 1010 MUL stack[5] = stack[5] * stack[6]
// 1011 CALL func.apply(thisArg, [5 args]) → stack[-1]
// 1013 POP stack[-1]
// 1014 GET_VAR → stack[-1] = scope[0][23]
// 1017 GET_VAR → stack[0] = scope[0][6]
// 1019 SET_GLOBAL_PROP stack[0]["strokeStyle"] ← stack[-1]
// 1022 GET_VAR → stack[-1] = scope[0][23]
// 1025 DUP → stack[0] = stack[-1]
// 1025 GET_PROP_NAME stack[0] ← stack[0]["stroke"]
// 1028 CALL func.apply(thisArg, [0 args]) → stack[-1]
// 1030 POP stack[-1]
// 1031 GET_VAR → stack[-1] = scope[0][22]
// 1034 DUP → stack[0] = stack[-1]
// 1034 GET_PROP_NAME stack[0] ← stack[0]["toDataURL"]
// 1036 PUSH_STRING → stack[1] = "image/png"
// 1039 CALL func.apply(thisArg, [1 args]) → stack[-1]
// 1041 SET_VAR scope[0][15] ← stack[-1]
// 1044 PUSH_UNDEFINED → stack[-1] = undefined
// 1045 GET_VAR → stack[0] = scope[2][1]
// 1048 GET_VAR → stack[1] = scope[0][15]
// 1051 CALL func.apply(thisArg, [1 args]) → stack[-1]
// 1053 SET_VAR scope[0][16] ← stack[-1]
// 1056 GET_VAR → stack[-1] = scope[0][23]
// 1059 DUP → stack[0] = stack[-1]
// 1059 GET_PROP_NAME stack[0] ← stack[0]["getImageData"]
// 1061 PUSH_CONST → stack[1] = 0
// 1063 PUSH_CONST → stack[2] = 0
// 1066 GET_VAR → stack[3] = scope[0][7]
// 1069 GET_VAR → stack[4] = scope[0][8]
// 1072 CALL func.apply(thisArg, [4 args]) → stack[-1]
// 1074 SET_VAR scope[0][14] ← stack[-1]
// 1076 JUMP → JUMP_TO=1085
// 1079 SET_VAR scope[0][31] ← stack[-2]
// 1081 PUSH_CONST → stack[-2] = 2
// 1084 SET_VAR scope[0][17] ← stack[-2]
// 1087 GET_VAR → stack[-2] = scope[0][13]
// 1090 GET_VAR → stack[-1] = scope[0][16]
// 1093 STRICT_EQUAL stack[-2] = stack[-2] === stack[-1]
// 1093 JUMP_IF_FALSE if (!stack[-2]) JUMP_TO=1097
// 1095 PUSH_CONST → stack[-2] = 1
// 1097 JUMP → JUMP_TO=1100
// 1099 PUSH_CONST → stack[-1] = 2
// 1102 SET_VAR scope[0][26] ← stack[-1]
// 1105 GET_VAR → stack[-1] = scope[0][12]
// 1108 GET_VAR → stack[0] = scope[0][15]
// 1111 STRICT_EQUAL stack[-1] = stack[-1] === stack[0]
// 1111 JUMP_IF_FALSE if (!stack[-1]) JUMP_TO=1115
// 1113 PUSH_CONST → stack[-1] = 1
// 1115 JUMP → JUMP_TO=1118
// 1117 PUSH_CONST → stack[0] = 2
// 1120 SET_VAR scope[0][27] ← stack[0]
// 1123 PUSH_UNDEFINED → stack[0] = undefined
// 1124 GET_VAR → stack[1] = scope[1][3]
// 1127 GET_VAR → stack[2] = scope[0][11]
// 1130 GET_VAR → stack[3] = scope[0][14]
// 1133 CALL func.apply(thisArg, [2 args]) → stack[0]
// 1134 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=1138
// 1136 PUSH_CONST → stack[0] = 1
// 1138 JUMP → JUMP_TO=1141
// 1140 PUSH_CONST → stack[1] = 2
// 1143 SET_VAR scope[0][28] ← stack[1]
// 1146 NEW_OBJECT → stack[1] = {}
// 1147 GET_VAR → stack[2] = scope[0][26]
// 1149 DEFINE_PROP Object.defineProperty(stack[1], "a", stack[2])
// 1152 GET_VAR → stack[2] = scope[0][27]
// 1154 DEFINE_PROP Object.defineProperty(stack[1], "b", stack[2])
// 1157 GET_VAR → stack[2] = scope[0][28]
// 1159 DEFINE_PROP Object.defineProperty(stack[1], "c", stack[2])
// 1162 GET_VAR → stack[2] = scope[0][13]
// 1165 DUP → stack[3] = stack[2]
// 1165 GET_PROP_NAME stack[3] ← stack[3]["toString"]
// 1168 CALL func.apply(thisArg, [0 args]) → stack[2]
// 1170 GET_VAR → stack[3] = scope[0][16]
// 1173 DUP → stack[4] = stack[3]
// 1173 GET_PROP_NAME stack[4] ← stack[4]["toString"]
// 1176 CALL func.apply(thisArg, [0 args]) → stack[3]
// 1178 NEW_ARRAY → stack[2] = [...top 2 elements]
// 1179 DEFINE_PROP Object.defineProperty(stack[1], "d", stack[2])
// 1182 GET_VAR → stack[2] = scope[0][17]
// 1184 DEFINE_PROP Object.defineProperty(stack[1], "e", stack[2])
// 1187 SET_VAR scope[0][29] ← stack[1]
// 1190 NEW_OBJECT → stack[1] = {}
// 1191 GET_VAR → stack[2] = scope[0][29]
// 1193 DEFINE_PROP Object.defineProperty(stack[1], "data", stack[2])
// 1196 RETURN stack[1]
