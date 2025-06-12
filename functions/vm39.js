// 0 GET_GLOBAL → stack[0] = Date
// 3 FUNCTION_BIND_APPLY → stack[0] = new stack[0](0 args)
// 5 SET_VAR scope[0][2] ← stack[0]
// 7 PUSH_STRING → stack[0] = "XDomainRequest"
// 9 PUSH_STRING → stack[1] = "createPopup"
// 11 PUSH_STRING → stack[2] = "removeEventListener"
// 13 PUSH_STRING → stack[3] = "globalStorage"
// 15 PUSH_STRING → stack[4] = "openDatabase"
// 17 PUSH_STRING → stack[5] = "indexedDB"
// 19 PUSH_STRING → stack[6] = "attachEvent"
// 21 PUSH_STRING → stack[7] = "ActiveXObject"
// 23 PUSH_STRING → stack[8] = "dispatchEvent"
// 25 PUSH_STRING → stack[9] = "addBehavior"
// 27 PUSH_STRING → stack[10] = "addEventListener"
// 29 PUSH_STRING → stack[11] = "detachEvent"
// 31 PUSH_STRING → stack[12] = "fireEvent"
// 33 PUSH_STRING → stack[13] = "MutationObserver"
// 35 PUSH_STRING → stack[14] = "HTMLMenuItemElement"
// 37 PUSH_STRING → stack[15] = "Int8Array"
// 39 PUSH_STRING → stack[16] = "postMessage"
// 41 PUSH_STRING → stack[17] = "querySelector"
// 44 NEW_ARRAY → stack[0] = [...top 18 elements]
// 46 SET_VAR scope[0][5] ← stack[0]
// 49 PUSH_UNDEFINED → stack[0] = undefined
// 50 GET_VAR → stack[1] = scope[2][24]
// 52 GET_GLOBAL → stack[2] = window
// 55 GET_VAR → stack[3] = scope[0][5]
// 57 PUSH_CONST → stack[4] = 0
// 60 CALL func.apply(thisArg, [3 args]) → stack[0]
// 62 SET_VAR scope[0][3] ← stack[0]
// 65 GET_VAR → stack[0] = scope[0][3]
// 68 PUSH_UNDEFINED → stack[1] = undefined
// 69 GET_VAR → stack[2] = scope[2][24]
// 71 GET_GLOBAL → stack[3] = window
// 73 GET_PROP_NAME stack[3] ← stack[3]["performance"]
// 75 PUSH_STRING → stack[4] = "now"
// 78 NEW_ARRAY → stack[4] = [...top 1 elements]
// 80 GET_VAR → stack[5] = scope[0][5]
// 82 GET_PROP_NAME stack[5] ← stack[5]["length"]
// 85 CALL func.apply(thisArg, [3 args]) → stack[1]
// 87 BITWISE_OR stack[0] = stack[0] | stack[1]
// 87 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 3
// 91 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 92 POP stack[0]
// 92 PUSH_STRING → stack[0] = "contextMenu"
// 95 NEW_ARRAY → stack[0] = [...top 1 elements]
// 97 SET_VAR scope[0][6] ← stack[0]
// 100 PUSH_UNDEFINED → stack[0] = undefined
// 101 GET_VAR → stack[1] = scope[2][24]
// 103 GET_GLOBAL → stack[2] = document
// 105 GET_PROP_NAME stack[2] ← stack[2]["documentElement"]
// 108 GET_VAR → stack[3] = scope[0][6]
// 110 PUSH_CONST → stack[4] = 0
// 113 CALL func.apply(thisArg, [3 args]) → stack[0]
// 115 SET_VAR scope[0][4] ← stack[0]
// 118 NEW_OBJECT → stack[0] = {}
// 119 SET_VAR scope[0][7] ← stack[0]
// 122 GET_VAR → stack[0] = scope[0][7]
// 125 GET_VAR → stack[1] = scope[3][28]
// 128 GET_VAR → stack[2] = scope[3][29]
// 131 GET_PROP stack[1] = stack[1][stack[2]]
// 131 SET_GLOBAL_PROP stack[1]["nativeLength"] ← stack[0]
// 134 GET_VAR → stack[0] = scope[0][7]
// 137 GET_VAR → stack[1] = scope[3][28]
// 140 GET_VAR → stack[2] = scope[3][30]
// 143 GET_PROP stack[1] = stack[1][stack[2]]
// 143 SET_GLOBAL_PROP stack[1]["nativeName"] ← stack[0]
// 146 GET_VAR → stack[0] = scope[0][7]
// 149 GET_VAR → stack[1] = scope[3][28]
// 152 GET_VAR → stack[2] = scope[3][2]
// 155 GET_PROP stack[1] = stack[1][stack[2]]
// 155 SET_GLOBAL_PROP stack[1]["jsFontsList"] ← stack[0]
// 157 JUMP → JUMP_TO=180
// 160 SET_VAR scope[0][10] ← stack[-1]
// 163 GET_VAR → stack[-1] = scope[2][11]
// 166 DUP → stack[0] = stack[-1]
// 166 GET_PROP_NAME stack[0] ← stack[0]["push"]
// 169 NEW_OBJECT → stack[1] = {}
// 170 GET_VAR → stack[2] = scope[0][10]
// 172 DEFINE_PROP Object.defineProperty(stack[1], "err", stack[2])
// 174 PUSH_STRING → stack[2] = "d_w_f"
// 176 DEFINE_PROP Object.defineProperty(stack[1], "type", stack[2])
// 179 CALL func.apply(thisArg, [1 args]) → stack[-1]
// 181 POP stack[-1]
// 182 GET_VAR → stack[-1] = scope[0][7]
// 185 GET_VAR → stack[0] = scope[3][28]
// 188 GET_VAR → stack[1] = scope[3][1]
// 191 GET_PROP stack[0] = stack[0][stack[1]]
// 191 SET_GLOBAL_PROP stack[0]["syntaxError"] ← stack[-1]
// 194 GET_VAR → stack[-1] = scope[0][7]
// 196 PUSH_STRING → stack[0] = ""
// 198 GET_GLOBAL → stack[1] = Date
// 201 FUNCTION_BIND_APPLY → stack[1] = new stack[1](0 args)
// 203 DUP → stack[2] = stack[1]
// 203 GET_PROP_NAME stack[2] ← stack[2]["getTime"]
// 206 CALL func.apply(thisArg, [0 args]) → stack[1]
// 208 ADD stack[0] = stack[0] + stack[1]
// 208 SET_GLOBAL_PROP stack[0]["timestamp"] ← stack[-1]
// 211 GET_VAR → stack[-1] = scope[0][7]
// 213 GET_GLOBAL → stack[0] = Math
// 216 DUP → stack[1] = stack[0]
// 216 GET_PROP_NAME stack[1] ← stack[1]["floor"]
// 219 GET_VAR → stack[2] = scope[0][2]
// 222 DUP → stack[3] = stack[2]
// 222 GET_PROP_NAME stack[3] ← stack[3]["getTimezoneOffset"]
// 225 CALL func.apply(thisArg, [0 args]) → stack[2]
// 227 NEGATE stack[2] = -stack[2]
// 227 PUSH_CONST → stack[3] = 60
// 230 DIV stack[2] = stack[2] / stack[3]
// 231 CALL func.apply(thisArg, [1 args]) → stack[0]
// 232 SET_GLOBAL_PROP stack[0]["timezone"] ← stack[-1]
// 235 GET_VAR → stack[-1] = scope[0][7]
// 238 GET_VAR → stack[0] = scope[3][28]
// 241 GET_VAR → stack[1] = scope[3][31]
// 244 GET_PROP stack[0] = stack[0][stack[1]]
// 244 SET_GLOBAL_PROP stack[0]["magic"] ← stack[-1]
// 247 GET_VAR → stack[-1] = scope[0][7]
// 250 GET_VAR → stack[0] = scope[3][28]
// 253 GET_VAR → stack[1] = scope[3][5]
// 256 GET_PROP stack[0] = stack[0][stack[1]]
// 256 PUSH_STRING → stack[1] = ""
// 259 ADD stack[0] = stack[0] + stack[1]
// 259 SET_GLOBAL_PROP stack[0]["canvas"] ← stack[-1]
// 262 GET_VAR → stack[-1] = scope[0][7]
// 265 GET_VAR → stack[0] = scope[3][28]
// 268 GET_VAR → stack[1] = scope[3][32]
// 271 GET_PROP stack[0] = stack[0][stack[1]]
// 271 SET_GLOBAL_PROP stack[0]["wProps"] ← stack[-1]
// 274 GET_VAR → stack[-1] = scope[0][7]
// 277 GET_VAR → stack[0] = scope[3][28]
// 280 GET_VAR → stack[1] = scope[3][33]
// 283 GET_PROP stack[0] = stack[0][stack[1]]
// 283 SET_GLOBAL_PROP stack[0]["dProps"] ← stack[-1]
// 286 GET_VAR → stack[-1] = scope[0][7]
// 288 PUSH_STRING → stack[0] = ""
// 290 SET_GLOBAL_PROP stack[0]["jsv"] ← stack[-1]
// 293 GET_VAR → stack[-1] = scope[0][7]
// 296 GET_VAR → stack[0] = scope[3][28]
// 299 GET_VAR → stack[1] = scope[3][34]
// 302 GET_PROP stack[0] = stack[0][stack[1]]
// 302 SET_GLOBAL_PROP stack[0]["browserType"] ← stack[-1]
// 305 GET_VAR → stack[-1] = scope[0][7]
// 308 GET_VAR → stack[0] = scope[3][28]
// 311 GET_VAR → stack[1] = scope[3][35]
// 314 GET_PROP stack[0] = stack[0][stack[1]]
// 314 SET_GLOBAL_PROP stack[0]["iframe"] ← stack[-1]
// 317 GET_VAR → stack[-1] = scope[0][7]
// 319 GET_GLOBAL → stack[0] = window
// 321 GET_PROP_NAME stack[0] ← stack[0]["_mssdk"]
// 323 GET_PROP_NAME stack[0] ← stack[0]["pppt"]
// 325 SET_GLOBAL_PROP stack[0]["pppt"] ← stack[-1]
// 328 GET_VAR → stack[-1] = scope[0][7]
// 331 GET_VAR → stack[0] = scope[3][28]
// 334 GET_VAR → stack[1] = scope[3][36]
// 337 GET_PROP stack[0] = stack[0][stack[1]]
// 337 SET_GLOBAL_PROP stack[0]["rtt"] ← stack[-1]
// 340 GET_VAR → stack[-1] = scope[0][7]
// 343 GET_VAR → stack[0] = scope[3][28]
// 346 GET_VAR → stack[1] = scope[3][37]
// 349 GET_PROP stack[0] = stack[0][stack[1]]
// 349 SET_GLOBAL_PROP stack[0]["notifyPerm"] ← stack[-1]
// 352 GET_VAR → stack[-1] = scope[0][7]
// 354 PUSH_STRING → stack[0] = "5.1.0"
// 356 SET_GLOBAL_PROP stack[0]["sdkVersion"] ← stack[-1]
// 359 GET_VAR → stack[-1] = scope[0][7]
// 361 PUSH_STRING → stack[0] = "1.0.0.290"
// 363 SET_GLOBAL_PROP stack[0]["scmVersion"] ← stack[-1]
// 365 PUSH_CONST → stack[-1] = 1
// 368 SET_VAR scope[0][8] ← stack[-1]
// 371 GET_VAR → stack[-1] = scope[0][7]
// 374 GET_VAR → stack[0] = scope[2][10]
// 376 GET_PROP_NAME stack[0] ← stack[0]["aid"]
// 378 SET_GLOBAL_PROP stack[0]["aid"] ← stack[-1]
// 381 GET_VAR → stack[-1] = scope[0][7]
// 384 PUSH_UNDEFINED → stack[0] = undefined
// 385 GET_VAR → stack[1] = scope[3][4]
// 387 PUSH_STRING → stack[2] = "ttcid"
// 390 CALL func.apply(thisArg, [1 args]) → stack[0]
// 391 SET_GLOBAL_PROP stack[0]["client"] ← stack[-1]
// 394 GET_VAR → stack[-1] = scope[0][7]
// 397 PUSH_UNDEFINED → stack[0] = undefined
// 398 GET_VAR → stack[1] = scope[3][4]
// 400 PUSH_STRING → stack[2] = "tt_scid"
// 403 CALL func.apply(thisArg, [1 args]) → stack[0]
// 404 SET_GLOBAL_PROP stack[0]["token"] ← stack[-1]
// 407 GET_VAR → stack[-1] = scope[0][7]
// 410 GET_VAR → stack[0] = scope[0][8]
// 412 SET_GLOBAL_PROP stack[0]["msgType"] ← stack[-1]
// 415 GET_VAR → stack[-1] = scope[0][7]
// 418 PUSH_UNDEFINED → stack[0] = undefined
// 419 GET_VAR → stack[1] = scope[3][21]
// 422 CALL func.apply(thisArg, [0 args]) → stack[0]
// 423 SET_GLOBAL_PROP stack[0]["privacyMode"] ← stack[-1]
// 426 GET_VAR → stack[-1] = scope[0][7]
// 429 GET_VAR → stack[0] = scope[2][9]
// 431 GET_PROP_NAME stack[0] ← stack[0]["aidList"]
// 433 SET_GLOBAL_PROP stack[0]["aidList"] ← stack[-1]
// 436 GET_VAR → stack[-1] = scope[0][7]
// 439 GET_VAR → stack[0] = scope[3][28]
// 442 GET_VAR → stack[1] = scope[3][38]
// 445 GET_PROP stack[0] = stack[0][stack[1]]
// 445 SET_GLOBAL_PROP stack[0]["isf"] ← stack[-1]
// 448 GET_VAR → stack[-1] = scope[0][7]
// 451 GET_VAR → stack[0] = scope[3][28]
// 454 GET_VAR → stack[1] = scope[3][17]
// 457 GET_PROP stack[0] = stack[0][stack[1]]
// 457 SET_GLOBAL_PROP stack[0]["env"] ← stack[-1]
// 460 GET_VAR → stack[-1] = scope[0][7]
// 463 GET_VAR → stack[0] = scope[3][28]
// 466 GET_VAR → stack[1] = scope[3][23]
// 469 GET_PROP stack[0] = stack[0][stack[1]]
// 469 SET_GLOBAL_PROP stack[0]["propLength"] ← stack[-1]
// 472 GET_VAR → stack[-1] = scope[0][7]
// 475 GET_VAR → stack[0] = scope[3][28]
// 478 GET_VAR → stack[1] = scope[3][18]
// 481 GET_PROP stack[0] = stack[0][stack[1]]
// 481 SET_GLOBAL_PROP stack[0]["objProx"] ← stack[-1]
// 484 GET_VAR → stack[-1] = scope[0][7]
// 487 GET_VAR → stack[0] = scope[3][24]
// 489 SET_GLOBAL_PROP stack[0]["sri"] ← stack[-1]
// 492 GET_VAR → stack[-1] = scope[0][7]
// 495 GET_VAR → stack[0] = scope[3][28]
// 498 GET_VAR → stack[1] = scope[3][26]
// 501 GET_PROP stack[0] = stack[0][stack[1]]
// 501 SET_GLOBAL_PROP stack[0]["ucwd"] ← stack[-1]
// 504 GET_VAR → stack[-1] = scope[0][7]
// 507 PUSH_UNDEFINED → stack[0] = undefined
// 508 GET_VAR → stack[1] = scope[3][27]
// 511 CALL func.apply(thisArg, [0 args]) → stack[0]
// 512 SET_GLOBAL_PROP stack[0]["dups"] ← stack[-1]
// 515 GET_VAR → stack[-1] = scope[0][7]
// 517 GET_GLOBAL → stack[0] = history
// 519 GET_PROP_NAME stack[0] ← stack[0]["length"]
// 521 SET_GLOBAL_PROP stack[0]["hl"] ← stack[-1]
// 524 NEW_OBJECT → stack[-1] = {}
// 525 SET_VAR scope[0][9] ← stack[-1]
// 527 GET_GLOBAL → stack[-1] = Intl
// 530 DUP → stack[0] = stack[-1]
// 530 GET_PROP_NAME stack[0] ← stack[0]["DateTimeFormat"]
// 533 CALL func.apply(thisArg, [0 args]) → stack[-1]
// 535 DUP → stack[0] = stack[-1]
// 535 GET_PROP_NAME stack[0] ← stack[0]["resolvedOptions"]
// 538 CALL func.apply(thisArg, [0 args]) → stack[-1]
// 539 JUMP_IF_FALSE if (!stack[-1]) JUMP_TO=553
// 541 GET_GLOBAL → stack[-1] = Intl
// 544 DUP → stack[0] = stack[-1]
// 544 GET_PROP_NAME stack[0] ← stack[0]["DateTimeFormat"]
// 547 CALL func.apply(thisArg, [0 args]) → stack[-1]
// 549 DUP → stack[0] = stack[-1]
// 549 GET_PROP_NAME stack[0] ← stack[0]["resolvedOptions"]
// 552 CALL func.apply(thisArg, [0 args]) → stack[-1]
// 553 JUMP → JUMP_TO=555
// 556 NEW_OBJECT → stack[0] = {}
// 557 SET_VAR scope[0][9] ← stack[0]
// 559 JUMP → JUMP_TO=563
// 562 SET_VAR scope[0][11] ← stack[-1]
// 565 GET_VAR → stack[-1] = scope[0][7]
// 568 GET_VAR → stack[0] = scope[0][9]
// 570 GET_PROP_NAME stack[0] ← stack[0]["timeZone"]
// 572 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=579
// 575 GET_VAR → stack[0] = scope[0][9]
// 577 GET_PROP_NAME stack[0] ← stack[0]["timeZone"]
// 579 JUMP → JUMP_TO=582
// 581 PUSH_STRING → stack[1] = ""
// 583 SET_GLOBAL_PROP stack[1]["tz"] ← stack[0]
// 586 GET_VAR → stack[0] = scope[0][7]
// 589 GET_VAR → stack[1] = scope[0][9]
// 591 GET_PROP_NAME stack[1] ← stack[1]["numberingSystem"]
// 593 JUMP_IF_FALSE if (!stack[1]) JUMP_TO=600
// 596 GET_VAR → stack[1] = scope[0][9]
// 598 GET_PROP_NAME stack[1] ← stack[1]["numberingSystem"]
// 600 JUMP → JUMP_TO=603
// 602 PUSH_STRING → stack[2] = ""
// 604 SET_GLOBAL_PROP stack[2]["tzS"] ← stack[1]
// 607 GET_VAR → stack[1] = scope[0][7]
// 610 GET_VAR → stack[2] = scope[0][9]
// 612 GET_PROP_NAME stack[2] ← stack[2]["calendar"]
// 614 JUMP_IF_FALSE if (!stack[2]) JUMP_TO=621
// 617 GET_VAR → stack[2] = scope[0][9]
// 619 GET_PROP_NAME stack[2] ← stack[2]["calendar"]
// 621 JUMP → JUMP_TO=624
// 623 PUSH_STRING → stack[3] = ""
// 625 SET_GLOBAL_PROP stack[3]["tzC"] ← stack[2]
// 628 GET_VAR → stack[2] = scope[0][7]
// 631 GET_VAR → stack[3] = scope[0][9]
// 633 GET_PROP_NAME stack[3] ← stack[3]["locale"]
// 635 JUMP_IF_FALSE if (!stack[3]) JUMP_TO=642
// 638 GET_VAR → stack[3] = scope[0][9]
// 640 GET_PROP_NAME stack[3] ← stack[3]["locale"]
// 642 JUMP → JUMP_TO=645
// 644 PUSH_STRING → stack[4] = ""
// 646 SET_GLOBAL_PROP stack[4]["tzL"] ← stack[3]
// 649 GET_VAR → stack[3] = scope[0][7]
// 652 GET_VAR → stack[4] = scope[3][28]
// 655 GET_VAR → stack[5] = scope[3][39]
// 658 GET_PROP stack[4] = stack[4][stack[5]]
// 658 SET_GLOBAL_PROP stack[4]["perf"] ← stack[3]
// 661 GET_VAR → stack[3] = scope[0][7]
// 664 GET_VAR → stack[4] = scope[3][28]
// 667 GET_VAR → stack[5] = scope[3][40]
// 670 GET_PROP stack[4] = stack[4][stack[5]]
// 670 SET_GLOBAL_PROP stack[4]["iframeInfo"] ← stack[3]
// 673 GET_VAR → stack[3] = scope[0][7]
// 676 GET_VAR → stack[4] = scope[3][28]
// 679 GET_VAR → stack[5] = scope[3][41]
// 682 GET_PROP stack[4] = stack[4][stack[5]]
// 682 SET_GLOBAL_PROP stack[4]["bb"] ← stack[3]
// 685 GET_VAR → stack[3] = scope[0][7]
// 688 GET_VAR → stack[4] = scope[3][28]
// 691 GET_VAR → stack[5] = scope[3][43]
// 694 GET_PROP stack[4] = stack[4][stack[5]]
// 694 SET_GLOBAL_PROP stack[4]["aFP"] ← stack[3]
// 697 GET_VAR → stack[3] = scope[0][7]
// 700 GET_VAR → stack[4] = scope[3][28]
// 703 GET_VAR → stack[5] = scope[3][42]
// 706 GET_PROP stack[4] = stack[4][stack[5]]
// 706 SET_GLOBAL_PROP stack[4]["intP"] ← stack[3]
// 709 GET_VAR → stack[3] = scope[0][7]
// 712 RETURN stack[3]
