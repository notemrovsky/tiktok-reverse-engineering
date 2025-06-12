// 0 GET_GLOBAL → stack[0] = JSON
// 3 DUP → stack[1] = stack[0]
// 3 GET_PROP_NAME stack[1] ← stack[1]["parse"]
// 6 GET_VAR → stack[2] = scope[0][2]
// 9 CALL func.apply(thisArg, [1 args]) → stack[0]
// 11 SET_VAR scope[0][9] ← stack[0]
// 14 GET_VAR → stack[0] = scope[0][9]
// 16 GET_PROP_NAME stack[0] ← stack[0]["srilinks"]
// 18 PUSH_CONST → stack[1] = 0
// 21 SET_UNDEFINED stack[1] = undefined
// 22 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 22 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=32
// 25 GET_VAR → stack[0] = scope[0][9]
// 27 GET_PROP_NAME stack[0] ← stack[0]["srilinks"]
// 30 SET_VAR scope[0][10] ← stack[0]
// 32 JUMP → JUMP_TO=41
// 35 GET_VAR → stack[0] = scope[0][9]
// 37 GET_PROP_NAME stack[0] ← stack[0]["links"]
// 40 SET_VAR scope[0][10] ← stack[0]
// 43 GET_VAR → stack[0] = scope[3][1]
// 45 GET_PROP_NAME stack[0] ← stack[0]["slardarConfig"]
// 47 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 3
// 51 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 52 PUSH_NULL → stack[1] = null
// 53 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 53 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=60
// 56 GET_VAR → stack[0] = scope[0][3]
// 58 PUSH_CONST → stack[1] = 0
// 61 SET_UNDEFINED stack[1] = undefined
// 62 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 62 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=67
// 65 GET_VAR → stack[0] = scope[0][3]
// 67 GET_PROP_NAME stack[0] ← stack[0]["enableSlardar"]
// 69 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=80
// 72 GET_VAR → stack[0] = scope[3][1]
// 74 GET_PROP_NAME stack[0] ← stack[0]["slardarConfig"]
// 76 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 4
// 80 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 81 PUSH_NULL → stack[1] = null
// 82 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 82 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=89
// 85 GET_VAR → stack[0] = scope[0][4]
// 87 PUSH_CONST → stack[1] = 0
// 90 SET_UNDEFINED stack[1] = undefined
// 91 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 91 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=96
// 94 GET_VAR → stack[0] = scope[0][4]
// 96 GET_PROP_NAME stack[0] ← stack[0]["enableLazyload"]
// 98 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=438
// 101 GET_VAR → stack[0] = scope[3][1]
// 103 GET_PROP_NAME stack[0] ← stack[0]["slardarConfig"]
// 105 GET_PROP_NAME stack[0] ← stack[0]["settingLocation"]
// 108 SET_VAR scope[0][12] ← stack[0]
// 111 GET_VAR → stack[0] = scope[0][9]
// 113 GET_PROP_NAME stack[0] ← stack[0]["initconfig"]
// 115 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 11
// 119 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 120 PUSH_NULL → stack[1] = null
// 121 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 121 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=128 else POP
// 124 GET_VAR → stack[0] = scope[0][11]
// 126 PUSH_CONST → stack[1] = 0
// 129 SET_UNDEFINED stack[1] = undefined
// 130 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 130 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=141 else POP
// 133 GET_VAR → stack[0] = scope[0][11]
// 135 GET_PROP_NAME stack[0] ← stack[0]["0"]
// 137 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 11
// 141 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 142 PUSH_NULL → stack[1] = null
// 143 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 143 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=150 else POP
// 146 GET_VAR → stack[0] = scope[0][11]
// 148 PUSH_CONST → stack[1] = 0
// 151 SET_UNDEFINED stack[1] = undefined
// 152 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 152 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=157
// 154 PUSH_CONST → stack[0] = 0
// 157 SET_UNDEFINED stack[0] = undefined
// 157 JUMP → JUMP_TO=163
// 160 GET_VAR → stack[1] = scope[0][11]
// 162 GET_PROP_NAME stack[1] ← stack[1]["slardar_config"]
// 164 JUMP_IF_TRUE_OR_POP if (stack[1]) JUMP_TO=165 else POP
// 167 NEW_OBJECT → stack[1] = {}
// 168 SET_VAR scope[0][13] ← stack[1]
// 171 GET_VAR → stack[1] = scope[0][12]
// 173 PUSH_CONST → stack[2] = 1
// 175 SWITCH_CASE if (stack[1] === stack[2]) { POP; JUMP_TO=187 }
// 177 PUSH_CONST → stack[2] = 2
// 179 SWITCH_CASE if (stack[1] === stack[2]) { POP; JUMP_TO=263 }
// 181 PUSH_CONST → stack[2] = 3
// 183 SWITCH_CASE if (stack[1] === stack[2]) { POP; JUMP_TO=343 }
// 186 POP stack[1]
// 186 JUMP → JUMP_TO=392
// 189 GET_VAR → stack[1] = scope[0][13]
// 191 GET_PROP_NAME stack[1] ← stack[1]["slardar_api_domain"]
// 193 PUSH_SCOPE_REF → stack[2] = scope[0], stack[3] = 5
// 197 SET_PROP_NO_POP stack[2][stack[3]] = stack[1] (keep value)
// 198 PUSH_NULL → stack[2] = null
// 199 STRICT_NOT_EQUAL stack[1] = stack[1] !== stack[2]
// 199 JUMP_IF_FALSE_OR_POP if (stack[1]) POP else JUMP_TO=206
// 202 GET_VAR → stack[1] = scope[0][5]
// 204 PUSH_CONST → stack[2] = 0
// 207 SET_UNDEFINED stack[2] = undefined
// 208 STRICT_NOT_EQUAL stack[1] = stack[1] !== stack[2]
// 208 JUMP_IF_FALSE if (!stack[1]) JUMP_TO=213
// 211 GET_VAR → stack[1] = scope[0][5]
// 213 JUMP → JUMP_TO=221
// 216 GET_VAR → stack[2] = scope[3][1]
// 218 GET_PROP_NAME stack[2] ← stack[2]["regionConf"]
// 220 GET_PROP_NAME stack[2] ← stack[2]["slardarDomain"]
// 223 SET_VAR scope[0][14] ← stack[2]
// 226 GET_VAR → stack[2] = scope[0][13]
// 228 GET_PROP_NAME stack[2] ← stack[2]["plugin_path_prefix"]
// 230 PUSH_SCOPE_REF → stack[3] = scope[0], stack[4] = 6
// 234 SET_PROP_NO_POP stack[3][stack[4]] = stack[2] (keep value)
// 235 PUSH_NULL → stack[3] = null
// 236 STRICT_NOT_EQUAL stack[2] = stack[2] !== stack[3]
// 236 JUMP_IF_FALSE_OR_POP if (stack[2]) POP else JUMP_TO=243
// 239 GET_VAR → stack[2] = scope[0][6]
// 241 PUSH_CONST → stack[3] = 0
// 244 SET_UNDEFINED stack[3] = undefined
// 245 STRICT_NOT_EQUAL stack[2] = stack[2] !== stack[3]
// 245 JUMP_IF_FALSE if (!stack[2]) JUMP_TO=250
// 248 GET_VAR → stack[2] = scope[0][6]
// 250 JUMP → JUMP_TO=258
// 253 GET_VAR → stack[3] = scope[3][1]
// 255 GET_PROP_NAME stack[3] ← stack[3]["regionConf"]
// 257 GET_PROP_NAME stack[3] ← stack[3]["pluginPathPrefix"]
// 260 SET_VAR scope[0][15] ← stack[3]
// 262 JUMP → JUMP_TO=398
// 265 GET_VAR → stack[3] = scope[0][13]
// 267 GET_PROP_NAME stack[3] ← stack[3]["slardar_api_domain"]
// 269 PUSH_SCOPE_REF → stack[4] = scope[0], stack[5] = 7
// 273 SET_PROP_NO_POP stack[4][stack[5]] = stack[3] (keep value)
// 274 PUSH_NULL → stack[4] = null
// 275 STRICT_NOT_EQUAL stack[3] = stack[3] !== stack[4]
// 275 JUMP_IF_FALSE_OR_POP if (stack[3]) POP else JUMP_TO=282
// 278 GET_VAR → stack[3] = scope[0][7]
// 280 PUSH_CONST → stack[4] = 0
// 283 SET_UNDEFINED stack[4] = undefined
// 284 STRICT_NOT_EQUAL stack[3] = stack[3] !== stack[4]
// 284 JUMP_IF_FALSE if (!stack[3]) JUMP_TO=289
// 287 GET_VAR → stack[3] = scope[0][7]
// 289 JUMP → JUMP_TO=299
// 292 GET_VAR → stack[4] = scope[3][1]
// 294 GET_PROP_NAME stack[4] ← stack[4]["slardarConfig"]
// 296 GET_PROP_NAME stack[4] ← stack[4]["initConfigOverrides"]
// 298 GET_PROP_NAME stack[4] ← stack[4]["slardarDomain"]
// 301 SET_VAR scope[0][14] ← stack[4]
// 304 GET_VAR → stack[4] = scope[0][13]
// 306 GET_PROP_NAME stack[4] ← stack[4]["plugin_path_prefix"]
// 308 PUSH_SCOPE_REF → stack[5] = scope[0], stack[6] = 8
// 312 SET_PROP_NO_POP stack[5][stack[6]] = stack[4] (keep value)
// 313 PUSH_NULL → stack[5] = null
// 314 STRICT_NOT_EQUAL stack[4] = stack[4] !== stack[5]
// 314 JUMP_IF_FALSE_OR_POP if (stack[4]) POP else JUMP_TO=321
// 317 GET_VAR → stack[4] = scope[0][8]
// 319 PUSH_CONST → stack[5] = 0
// 322 SET_UNDEFINED stack[5] = undefined
// 323 STRICT_NOT_EQUAL stack[4] = stack[4] !== stack[5]
// 323 JUMP_IF_FALSE if (!stack[4]) JUMP_TO=328
// 326 GET_VAR → stack[4] = scope[0][8]
// 328 JUMP → JUMP_TO=338
// 331 GET_VAR → stack[5] = scope[3][1]
// 333 GET_PROP_NAME stack[5] ← stack[5]["slardarConfig"]
// 335 GET_PROP_NAME stack[5] ← stack[5]["initConfigOverrides"]
// 337 GET_PROP_NAME stack[5] ← stack[5]["slardarPluginPrefixPath"]
// 340 SET_VAR scope[0][15] ← stack[5]
// 342 JUMP → JUMP_TO=398
// 345 GET_VAR → stack[5] = scope[0][13]
// 347 GET_PROP_NAME stack[5] ← stack[5]["slardar_api_domain"]
// 350 SET_VAR scope[0][14] ← stack[5]
// 353 GET_VAR → stack[5] = scope[0][13]
// 355 GET_PROP_NAME stack[5] ← stack[5]["plugin_path_prefix"]
// 358 SET_VAR scope[0][15] ← stack[5]
// 361 GET_VAR → stack[5] = scope[0][14]
// 364 NOT stack[5] = !stack[5]
// 364 JUMP_IF_TRUE_OR_POP if (stack[5]) JUMP_TO=368 else POP
// 367 GET_VAR → stack[5] = scope[0][15]
// 370 NOT stack[5] = !stack[5]
// 370 JUMP_IF_FALSE if (!stack[5]) JUMP_TO=389
// 373 PUSH_UNDEFINED → stack[5] = undefined
// 374 GET_VAR → stack[6] = scope[3][5]
// 377 GET_VAR → stack[7] = scope[3][1]
// 379 GET_PROP_NAME stack[7] ← stack[7]["aid"]
// 381 PUSH_STRING → stack[8] = ""
// 383 PUSH_STRING → stack[9] = ""
// 386 PUSH_FALSE → stack[10] = false
// 387 CALL func.apply(thisArg, [4 args]) → stack[5]
// 389 POP stack[5]
// 389 JUMP → JUMP_TO=398
// 391 JUMP → JUMP_TO=398
// 393 PUSH_CONST → stack[5] = 0
// 396 SET_UNDEFINED stack[5] = undefined
// 397 POP stack[5]
// 397 JUMP → JUMP_TO=398
// 400 GET_VAR → stack[5] = scope[0][14]
// 402 JUMP_IF_FALSE_OR_POP if (stack[5]) POP else JUMP_TO=405
// 405 GET_VAR → stack[5] = scope[0][15]
// 407 JUMP_IF_FALSE if (!stack[5]) JUMP_TO=438
// 410 PUSH_UNDEFINED → stack[5] = undefined
// 411 GET_VAR → stack[6] = scope[3][4]
// 414 GET_VAR → stack[7] = scope[0][14]
// 417 GET_VAR → stack[8] = scope[0][15]
// 420 CALL func.apply(thisArg, [2 args]) → stack[5]
// 422 POP stack[5]
// 423 PUSH_UNDEFINED → stack[5] = undefined
// 424 GET_VAR → stack[6] = scope[3][5]
// 427 GET_VAR → stack[7] = scope[3][1]
// 429 GET_PROP_NAME stack[7] ← stack[7]["aid"]
// 432 GET_VAR → stack[8] = scope[0][14]
// 435 GET_VAR → stack[9] = scope[0][15]
// 438 CALL func.apply(thisArg, [3 args]) → stack[5]
// 440 POP stack[5]
// 441 GET_VAR → stack[5] = scope[0][9]
// 443 GET_PROP_NAME stack[5] ← stack[5]["initconfig"]
// 445 PUSH_CONST → stack[6] = 0
// 448 SET_UNDEFINED stack[6] = undefined
// 449 STRICT_NOT_EQUAL stack[5] = stack[5] !== stack[6]
// 449 JUMP_IF_FALSE_OR_POP if (stack[5]) POP else JUMP_TO=459
// 452 GET_VAR → stack[5] = scope[0][9]
// 454 GET_PROP_NAME stack[5] ← stack[5]["initconfig"]
// 456 GET_PROP_NAME stack[5] ← stack[5]["length"]
// 458 PUSH_CONST → stack[6] = 0
// 461 GREATER_THAN stack[5] = stack[5] > stack[6]
// 461 JUMP_IF_FALSE if (!stack[5]) JUMP_TO=568
// 464 GET_VAR → stack[5] = scope[0][9]
// 466 GET_PROP_NAME stack[5] ← stack[5]["initconfig"]
// 468 GET_PROP_NAME stack[5] ← stack[5]["0"]
// 470 GET_PROP_NAME stack[5] ← stack[5]["google_config"]
// 472 PUSH_CONST → stack[6] = 0
// 475 SET_UNDEFINED stack[6] = undefined
// 476 STRICT_NOT_EQUAL stack[5] = stack[5] !== stack[6]
// 476 JUMP_IF_FALSE if (!stack[5]) JUMP_TO=568
// 479 GET_VAR → stack[5] = scope[0][9]
// 481 GET_PROP_NAME stack[5] ← stack[5]["initconfig"]
// 483 GET_PROP_NAME stack[5] ← stack[5]["0"]
// 485 GET_PROP_NAME stack[5] ← stack[5]["google_config"]
// 488 SET_VAR scope[0][16] ← stack[5]
// 490 GET_GLOBAL → stack[5] = window
// 492 GET_PROP_NAME stack[5] ← stack[5]["_mssdk"]
// 494 PUSH_CONST → stack[6] = 0
// 497 SET_UNDEFINED stack[6] = undefined
// 498 STRICT_EQUAL stack[5] = stack[5] === stack[6]
// 498 JUMP_IF_FALSE if (!stack[5]) JUMP_TO=503
// 500 GET_GLOBAL → stack[5] = window
// 503 NEW_OBJECT → stack[6] = {}
// 503 SET_GLOBAL_PROP stack[6]["_mssdk"] ← stack[5]
// 506 GET_VAR → stack[5] = scope[0][16]
// 508 GET_PROP_NAME stack[5] ← stack[5]["siteKey"]
// 510 PUSH_CONST → stack[6] = 0
// 513 SET_UNDEFINED stack[6] = undefined
// 514 STRICT_NOT_EQUAL stack[5] = stack[5] !== stack[6]
// 514 JUMP_IF_FALSE_OR_POP if (stack[5]) POP else JUMP_TO=522
// 517 GET_VAR → stack[5] = scope[0][16]
// 519 GET_PROP_NAME stack[5] ← stack[5]["siteKey"]
// 521 PUSH_STRING → stack[6] = ""
// 524 STRICT_NOT_EQUAL stack[5] = stack[5] !== stack[6]
// 524 JUMP_IF_FALSE if (!stack[5]) JUMP_TO=568
// 526 GET_GLOBAL → stack[5] = window
// 528 GET_PROP_NAME stack[5] ← stack[5]["_mssdk"]
// 531 GET_VAR → stack[6] = scope[0][16]
// 533 GET_PROP_NAME stack[6] ← stack[6]["scriptFetchUrl"]
// 536 GET_VAR → stack[7] = scope[0][16]
// 538 GET_PROP_NAME stack[7] ← stack[7]["siteKey"]
// 541 ADD stack[6] = stack[6] + stack[7]
// 541 SET_GLOBAL_PROP stack[6]["_grecaptcha"] ← stack[5]
// 544 GET_VAR → stack[5] = scope[3][1]
// 547 GET_VAR → stack[6] = scope[0][16]
// 549 SET_GLOBAL_PROP stack[6]["grecaptcha"] ← stack[5]
// 552 GET_VAR → stack[5] = scope[3][1]
// 554 GET_PROP_NAME stack[5] ← stack[5]["grecaptcha"]
// 556 GET_GLOBAL → stack[6] = Object
// 559 DUP → stack[7] = stack[6]
// 559 GET_PROP_NAME stack[7] ← stack[7]["keys"]
// 562 GET_VAR → stack[8] = scope[0][16]
// 564 GET_PROP_NAME stack[8] ← stack[8]["enabledPathActionMap"]
// 567 CALL func.apply(thisArg, [1 args]) → stack[6]
// 568 SET_GLOBAL_PROP stack[6]["enabledPaths"] ← stack[5]
// 571 GET_VAR → stack[5] = scope[0][9]
// 573 GET_PROP_NAME stack[5] ← stack[5]["initconfig"]
// 575 PUSH_CONST → stack[6] = 0
// 578 SET_UNDEFINED stack[6] = undefined
// 579 STRICT_NOT_EQUAL stack[5] = stack[5] !== stack[6]
// 579 JUMP_IF_FALSE_OR_POP if (stack[5]) POP else JUMP_TO=589
// 582 GET_VAR → stack[5] = scope[0][9]
// 584 GET_PROP_NAME stack[5] ← stack[5]["initconfig"]
// 586 GET_PROP_NAME stack[5] ← stack[5]["length"]
// 588 PUSH_CONST → stack[6] = 0
// 591 GREATER_THAN stack[5] = stack[5] > stack[6]
// 591 JUMP_IF_FALSE_OR_POP if (stack[5]) POP else JUMP_TO=602
// 594 GET_VAR → stack[5] = scope[0][9]
// 596 GET_PROP_NAME stack[5] ← stack[5]["initconfig"]
// 598 GET_PROP_NAME stack[5] ← stack[5]["0"]
// 600 PUSH_CONST → stack[6] = 0
// 603 SET_UNDEFINED stack[6] = undefined
// 604 STRICT_NOT_EQUAL stack[5] = stack[5] !== stack[6]
// 604 JUMP_IF_FALSE if (!stack[5]) JUMP_TO=615
// 607 GET_VAR → stack[5] = scope[0][9]
// 609 GET_PROP_NAME stack[5] ← stack[5]["initconfig"]
// 611 GET_PROP_NAME stack[5] ← stack[5]["0"]
// 613 GET_PROP_NAME stack[5] ← stack[5]["refresh_interval"]
// 615 JUMP → JUMP_TO=617
// 618 PUSH_NULL → stack[6] = null
// 619 SET_VAR scope[0][17] ← stack[6]
// 622 GET_VAR → stack[6] = scope[0][17]
// 624 JUMP_IF_FALSE_OR_POP if (stack[6]) POP else JUMP_TO=631
// 627 GET_VAR → stack[6] = scope[0][17]
// 630 TYPEOF stack[6] = typeof stack[6]
// 630 PUSH_STRING → stack[7] = "number"
// 633 STRICT_EQUAL stack[6] = stack[6] === stack[7]
// 633 JUMP_IF_FALSE_OR_POP if (stack[6]) POP else JUMP_TO=639
// 636 GET_VAR → stack[6] = scope[0][17]
// 638 PUSH_CONST → stack[7] = 0
// 641 GREATER_THAN stack[6] = stack[6] > stack[7]
// 641 JUMP_IF_FALSE if (!stack[6]) JUMP_TO=679
// 643 PUSH_CONST → stack[6] = 6
// 645 PUSH_CONST → stack[7] = 3600
// 648 MUL stack[6] = stack[6] * stack[7]
// 649 SET_VAR scope[0][18] ← stack[6]
// 651 GET_GLOBAL → stack[6] = Math
// 654 DUP → stack[7] = stack[6]
// 654 GET_PROP_NAME stack[7] ← stack[7]["max"]
// 657 GET_VAR → stack[8] = scope[0][17]
// 660 GET_VAR → stack[9] = scope[0][18]
// 663 CALL func.apply(thisArg, [2 args]) → stack[6]
// 664 PUSH_CONST → stack[7] = 1000
// 667 MUL stack[6] = stack[6] * stack[7]
// 668 SET_VAR scope[0][19] ← stack[6]
// 671 PUSH_UNDEFINED → stack[6] = undefined
// 671 GET_GLOBAL → stack[7] = setTimeout
// 673 PUSH_FUNCTION → stack[8] = function[213]
// 676 GET_VAR → stack[9] = scope[0][19]
// 679 CALL func.apply(thisArg, [2 args]) → stack[6]
// 681 POP stack[6]
// 681 GET_GLOBAL → stack[6] = Array
// 684 DUP → stack[7] = stack[6]
// 684 GET_PROP_NAME stack[7] ← stack[7]["isArray"]
// 687 GET_VAR → stack[8] = scope[0][10]
// 690 CALL func.apply(thisArg, [1 args]) → stack[6]
// 691 JUMP_IF_FALSE_OR_POP if (stack[6]) POP else JUMP_TO=699
// 694 GET_VAR → stack[6] = scope[0][10]
// 696 GET_PROP_NAME stack[6] ← stack[6]["length"]
// 698 PUSH_CONST → stack[7] = 0
// 701 GREATER_THAN stack[6] = stack[6] > stack[7]
// 701 JUMP_IF_FALSE if (!stack[6]) JUMP_TO=740
// 703 PUSH_FUNCTION → stack[6] = function[214]
// 706 DUP → stack[7] = stack[6]
// 707 SET_VAR scope[0][22] ← stack[7]
// 710 SET_VAR scope[0][20] ← stack[6]
// 712 PUSH_CONST → stack[6] = 0
// 715 SET_VAR scope[0][21] ← stack[6]
// 718 GET_VAR → stack[6] = scope[0][21]
// 721 GET_VAR → stack[7] = scope[0][10]
// 723 GET_PROP_NAME stack[7] ← stack[7]["length"]
// 726 LESS_THAN stack[6] = stack[6] < stack[7]
// 726 JUMP_IF_FALSE if (!stack[6]) JUMP_TO=740
// 729 PUSH_UNDEFINED → stack[6] = undefined
// 730 GET_VAR → stack[7] = scope[0][20]
// 733 CALL func.apply(thisArg, [0 args]) → stack[6]
// 735 POP stack[6]
// 735 PUSH_SCOPE_REF → stack[6] = scope[0], stack[7] = 21
// 739 POST_INC stack[6] = stack[6][stack[7]]++ (old value)
// 740 POP stack[6]
// 740 JUMP → JUMP_TO=716
// 743 PUSH_UNDEFINED → stack[6] = undefined
// 744 RETURN stack[6]
