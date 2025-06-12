// 1 GET_VAR → stack[0] = scope[0][1]
// 3 GET_PROP_NAME stack[0] ← stack[0]["length"]
// 5 PUSH_CONST → stack[1] = 0
// 8 GREATER_THAN stack[0] = stack[0] > stack[1]
// 8 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=15
// 11 GET_VAR → stack[0] = scope[0][1]
// 13 GET_PROP_NAME stack[0] ← stack[0]["0"]
// 16 PUSH_UNDEFINED → stack[1] = undefined
// 17 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 17 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=24
// 20 GET_VAR → stack[0] = scope[0][1]
// 22 GET_PROP_NAME stack[0] ← stack[0]["0"]
// 24 JUMP → JUMP_TO=26
// 27 PUSH_FALSE → stack[1] = false
// 28 SET_VAR scope[0][2] ← stack[1]
// 31 GET_VAR → stack[1] = scope[1][3]
// 33 PUSH_CONST → stack[2] = 1
// 36 ADD stack[1] = stack[1] + stack[2]
// 36 PUSH_SCOPE_REF → stack[2] = scope[1], stack[3] = 3
// 40 SET_PROP_NO_POP stack[2][stack[3]] = stack[1] (keep value)
// 41 POP stack[1]
// 42 NEW_OBJECT → stack[1] = {}
// 43 SET_VAR scope[0][3] ← stack[1]
// 45 PUSH_STRING → stack[1] = ""
// 48 SET_VAR scope[0][4] ← stack[1]
// 51 GET_VAR → stack[1] = scope[1][2]
// 53 JUMP_IF_FALSE_OR_POP if (stack[1]) POP else JUMP_TO=58
// 56 GET_VAR → stack[1] = scope[1][2]
// 58 GET_PROP_NAME stack[1] ← stack[1]["WEBGL"]
// 60 JUMP_IF_FALSE_OR_POP if (stack[1]) POP else JUMP_TO=65
// 63 GET_VAR → stack[1] = scope[1][2]
// 65 GET_PROP_NAME stack[1] ← stack[1]["VENDOR"]
// 67 JUMP_IF_FALSE_OR_POP if (stack[1]) POP else JUMP_TO=72
// 70 GET_VAR → stack[1] = scope[1][2]
// 72 GET_PROP_NAME stack[1] ← stack[1]["RENDERER"]
// 74 JUMP_IF_FALSE if (!stack[1]) JUMP_TO=101
// 77 GET_VAR → stack[1] = scope[1][2]
// 79 GET_PROP_NAME stack[1] ← stack[1]["WEBGL"]
// 82 SET_VAR scope[0][3] ← stack[1]
// 85 GET_VAR → stack[1] = scope[1][2]
// 87 GET_PROP_NAME stack[1] ← stack[1]["VENDOR"]
// 89 PUSH_STRING → stack[2] = "/"
// 92 ADD stack[1] = stack[1] + stack[2]
// 93 GET_VAR → stack[2] = scope[1][2]
// 95 GET_PROP_NAME stack[2] ← stack[2]["RENDERER"]
// 98 ADD stack[1] = stack[1] + stack[2]
// 99 SET_VAR scope[0][4] ← stack[1]
// 101 JUMP → JUMP_TO=504
// 104 PUSH_UNDEFINED → stack[1] = undefined
// 105 GET_VAR → stack[2] = scope[1][5]
// 108 CALL func.apply(thisArg, [0 args]) → stack[1]
// 110 SET_VAR scope[0][5] ← stack[1]
// 113 GET_VAR → stack[1] = scope[0][5]
// 116 NOT stack[1] = !stack[1]
// 116 JUMP_IF_FALSE if (!stack[1]) JUMP_TO=128
// 119 NEW_OBJECT → stack[1] = {}
// 120 NEW_OBJECT → stack[2] = {}
// 121 NEW_OBJECT → stack[3] = {}
// 121 DEFINE_PROP Object.defineProperty(stack[2], "webglData", stack[3])
// 123 PUSH_STRING → stack[3] = ""
// 125 DEFINE_PROP Object.defineProperty(stack[2], "gpu", stack[3])
// 127 DEFINE_PROP Object.defineProperty(stack[1], "data", stack[2])
// 130 RETURN stack[1]
// 131 NEW_OBJECT → stack[1] = {}
// 132 GET_VAR → stack[2] = scope[0][5]
// 135 DUP → stack[3] = stack[2]
// 135 GET_PROP_NAME stack[3] ← stack[3]["getSupportedExtensions"]
// 138 CALL func.apply(thisArg, [0 args]) → stack[2]
// 139 JUMP_IF_TRUE_OR_POP if (stack[2]) JUMP_TO=141 else POP
// 142 NEW_ARRAY → stack[2] = [...top 0 elements]
// 143 DEFINE_PROP Object.defineProperty(stack[1], "supportedExtensions", stack[2])
// 146 GET_VAR → stack[2] = scope[0][5]
// 149 DUP → stack[3] = stack[2]
// 149 GET_PROP_NAME stack[3] ← stack[3]["getContextAttributes"]
// 152 CALL func.apply(thisArg, [0 args]) → stack[2]
// 153 GET_PROP_NAME stack[2] ← stack[2]["antialias"]
// 155 JUMP_IF_FALSE if (!stack[2]) JUMP_TO=159
// 157 PUSH_CONST → stack[2] = 1
// 159 JUMP → JUMP_TO=162
// 161 PUSH_CONST → stack[3] = 2
// 163 DEFINE_PROP Object.defineProperty(stack[2], "antialias", stack[3])
// 166 GET_VAR → stack[3] = scope[0][5]
// 169 DUP → stack[4] = stack[3]
// 169 GET_PROP_NAME stack[4] ← stack[4]["getParameter"]
// 172 GET_VAR → stack[5] = scope[0][5]
// 174 GET_PROP_NAME stack[5] ← stack[5]["BLUE_BITS"]
// 177 CALL func.apply(thisArg, [1 args]) → stack[3]
// 178 DEFINE_PROP Object.defineProperty(stack[2], "blueBits", stack[3])
// 181 GET_VAR → stack[3] = scope[0][5]
// 184 DUP → stack[4] = stack[3]
// 184 GET_PROP_NAME stack[4] ← stack[4]["getParameter"]
// 187 GET_VAR → stack[5] = scope[0][5]
// 189 GET_PROP_NAME stack[5] ← stack[5]["DEPTH_BITS"]
// 192 CALL func.apply(thisArg, [1 args]) → stack[3]
// 193 DEFINE_PROP Object.defineProperty(stack[2], "depthBits", stack[3])
// 196 GET_VAR → stack[3] = scope[0][5]
// 199 DUP → stack[4] = stack[3]
// 199 GET_PROP_NAME stack[4] ← stack[4]["getParameter"]
// 202 GET_VAR → stack[5] = scope[0][5]
// 204 GET_PROP_NAME stack[5] ← stack[5]["GREEN_BITS"]
// 207 CALL func.apply(thisArg, [1 args]) → stack[3]
// 208 DEFINE_PROP Object.defineProperty(stack[2], "greenBits", stack[3])
// 211 PUSH_UNDEFINED → stack[3] = undefined
// 212 GET_VAR → stack[4] = scope[1][6]
// 215 GET_VAR → stack[5] = scope[0][5]
// 218 CALL func.apply(thisArg, [1 args]) → stack[3]
// 219 DEFINE_PROP Object.defineProperty(stack[2], "maxAnisotropy", stack[3])
// 222 GET_VAR → stack[3] = scope[0][5]
// 225 DUP → stack[4] = stack[3]
// 225 GET_PROP_NAME stack[4] ← stack[4]["getParameter"]
// 228 GET_VAR → stack[5] = scope[0][5]
// 230 GET_PROP_NAME stack[5] ← stack[5]["MAX_COMBINED_TEXTURE_IMAGE_UNITS"]
// 233 CALL func.apply(thisArg, [1 args]) → stack[3]
// 234 DEFINE_PROP Object.defineProperty(stack[2], "maxCombinedTextureImageUnits", stack[3])
// 237 GET_VAR → stack[3] = scope[0][5]
// 240 DUP → stack[4] = stack[3]
// 240 GET_PROP_NAME stack[4] ← stack[4]["getParameter"]
// 243 GET_VAR → stack[5] = scope[0][5]
// 245 GET_PROP_NAME stack[5] ← stack[5]["MAX_CUBE_MAP_TEXTURE_SIZE"]
// 248 CALL func.apply(thisArg, [1 args]) → stack[3]
// 249 DEFINE_PROP Object.defineProperty(stack[2], "maxCubeMapTextureSize", stack[3])
// 252 GET_VAR → stack[3] = scope[0][5]
// 255 DUP → stack[4] = stack[3]
// 255 GET_PROP_NAME stack[4] ← stack[4]["getParameter"]
// 258 GET_VAR → stack[5] = scope[0][5]
// 260 GET_PROP_NAME stack[5] ← stack[5]["MAX_FRAGMENT_UNIFORM_VECTORS"]
// 263 CALL func.apply(thisArg, [1 args]) → stack[3]
// 264 DEFINE_PROP Object.defineProperty(stack[2], "maxFragmentUniformVectors", stack[3])
// 267 GET_VAR → stack[3] = scope[0][5]
// 270 DUP → stack[4] = stack[3]
// 270 GET_PROP_NAME stack[4] ← stack[4]["getParameter"]
// 273 GET_VAR → stack[5] = scope[0][5]
// 275 GET_PROP_NAME stack[5] ← stack[5]["MAX_RENDERBUFFER_SIZE"]
// 278 CALL func.apply(thisArg, [1 args]) → stack[3]
// 279 DEFINE_PROP Object.defineProperty(stack[2], "maxRenderbufferSize", stack[3])
// 282 GET_VAR → stack[3] = scope[0][5]
// 285 DUP → stack[4] = stack[3]
// 285 GET_PROP_NAME stack[4] ← stack[4]["getParameter"]
// 288 GET_VAR → stack[5] = scope[0][5]
// 290 GET_PROP_NAME stack[5] ← stack[5]["MAX_TEXTURE_IMAGE_UNITS"]
// 293 CALL func.apply(thisArg, [1 args]) → stack[3]
// 294 DEFINE_PROP Object.defineProperty(stack[2], "maxTextureImageUnits", stack[3])
// 297 GET_VAR → stack[3] = scope[0][5]
// 300 DUP → stack[4] = stack[3]
// 300 GET_PROP_NAME stack[4] ← stack[4]["getParameter"]
// 303 GET_VAR → stack[5] = scope[0][5]
// 305 GET_PROP_NAME stack[5] ← stack[5]["MAX_TEXTURE_SIZE"]
// 308 CALL func.apply(thisArg, [1 args]) → stack[3]
// 309 DEFINE_PROP Object.defineProperty(stack[2], "maxTextureSize", stack[3])
// 312 GET_VAR → stack[3] = scope[0][5]
// 315 DUP → stack[4] = stack[3]
// 315 GET_PROP_NAME stack[4] ← stack[4]["getParameter"]
// 318 GET_VAR → stack[5] = scope[0][5]
// 320 GET_PROP_NAME stack[5] ← stack[5]["MAX_VARYING_VECTORS"]
// 323 CALL func.apply(thisArg, [1 args]) → stack[3]
// 324 DEFINE_PROP Object.defineProperty(stack[2], "maxVaryingVectors", stack[3])
// 327 GET_VAR → stack[3] = scope[0][5]
// 330 DUP → stack[4] = stack[3]
// 330 GET_PROP_NAME stack[4] ← stack[4]["getParameter"]
// 333 GET_VAR → stack[5] = scope[0][5]
// 335 GET_PROP_NAME stack[5] ← stack[5]["MAX_VERTEX_ATTRIBS"]
// 338 CALL func.apply(thisArg, [1 args]) → stack[3]
// 339 DEFINE_PROP Object.defineProperty(stack[2], "maxVertexAttribs", stack[3])
// 342 GET_VAR → stack[3] = scope[0][5]
// 345 DUP → stack[4] = stack[3]
// 345 GET_PROP_NAME stack[4] ← stack[4]["getParameter"]
// 348 GET_VAR → stack[5] = scope[0][5]
// 350 GET_PROP_NAME stack[5] ← stack[5]["MAX_VERTEX_TEXTURE_IMAGE_UNITS"]
// 353 CALL func.apply(thisArg, [1 args]) → stack[3]
// 354 DEFINE_PROP Object.defineProperty(stack[2], "maxVertexTextureImageUnits", stack[3])
// 357 GET_VAR → stack[3] = scope[0][5]
// 360 DUP → stack[4] = stack[3]
// 360 GET_PROP_NAME stack[4] ← stack[4]["getParameter"]
// 363 GET_VAR → stack[5] = scope[0][5]
// 365 GET_PROP_NAME stack[5] ← stack[5]["MAX_VERTEX_UNIFORM_VECTORS"]
// 368 CALL func.apply(thisArg, [1 args]) → stack[3]
// 369 DEFINE_PROP Object.defineProperty(stack[2], "maxVertexUniformVectors", stack[3])
// 372 GET_VAR → stack[3] = scope[0][5]
// 375 DUP → stack[4] = stack[3]
// 375 GET_PROP_NAME stack[4] ← stack[4]["getParameter"]
// 378 GET_VAR → stack[5] = scope[0][5]
// 380 GET_PROP_NAME stack[5] ← stack[5]["SHADING_LANGUAGE_VERSION"]
// 383 CALL func.apply(thisArg, [1 args]) → stack[3]
// 384 DEFINE_PROP Object.defineProperty(stack[2], "shadingLanguageVersion", stack[3])
// 387 GET_VAR → stack[3] = scope[0][5]
// 390 DUP → stack[4] = stack[3]
// 390 GET_PROP_NAME stack[4] ← stack[4]["getParameter"]
// 393 GET_VAR → stack[5] = scope[0][5]
// 395 GET_PROP_NAME stack[5] ← stack[5]["STENCIL_BITS"]
// 398 CALL func.apply(thisArg, [1 args]) → stack[3]
// 399 DEFINE_PROP Object.defineProperty(stack[2], "stencilBits", stack[3])
// 402 GET_VAR → stack[3] = scope[0][5]
// 405 DUP → stack[4] = stack[3]
// 405 GET_PROP_NAME stack[4] ← stack[4]["getParameter"]
// 408 GET_VAR → stack[5] = scope[0][5]
// 410 GET_PROP_NAME stack[5] ← stack[5]["VERSION"]
// 413 CALL func.apply(thisArg, [1 args]) → stack[3]
// 414 DEFINE_PROP Object.defineProperty(stack[2], "version", stack[3])
// 417 SET_VAR scope[0][3] ← stack[2]
// 420 GET_VAR → stack[2] = scope[0][5]
// 423 DUP → stack[3] = stack[2]
// 423 GET_PROP_NAME stack[3] ← stack[3]["getExtension"]
// 425 PUSH_STRING → stack[4] = "WEBGL_debug_renderer_info"
// 428 CALL func.apply(thisArg, [1 args]) → stack[2]
// 430 SET_VAR scope[0][6] ← stack[2]
// 433 GET_VAR → stack[2] = scope[0][5]
// 436 DUP → stack[3] = stack[2]
// 436 GET_PROP_NAME stack[3] ← stack[3]["getParameter"]
// 439 GET_VAR → stack[4] = scope[0][6]
// 441 GET_PROP_NAME stack[4] ← stack[4]["UNMASKED_VENDOR_WEBGL"]
// 444 CALL func.apply(thisArg, [1 args]) → stack[2]
// 446 SET_VAR scope[0][7] ← stack[2]
// 449 GET_VAR → stack[2] = scope[0][5]
// 452 DUP → stack[3] = stack[2]
// 452 GET_PROP_NAME stack[3] ← stack[3]["getParameter"]
// 455 GET_VAR → stack[4] = scope[0][6]
// 457 GET_PROP_NAME stack[4] ← stack[4]["UNMASKED_RENDERER_WEBGL"]
// 460 CALL func.apply(thisArg, [1 args]) → stack[2]
// 462 SET_VAR scope[0][8] ← stack[2]
// 465 GET_VAR → stack[2] = scope[1][2]
// 468 GET_VAR → stack[3] = scope[0][8]
// 470 SET_GLOBAL_PROP stack[3]["RENDERER"] ← stack[2]
// 473 GET_VAR → stack[2] = scope[1][2]
// 476 GET_VAR → stack[3] = scope[0][7]
// 478 SET_GLOBAL_PROP stack[3]["VENDOR"] ← stack[2]
// 481 GET_VAR → stack[2] = scope[1][2]
// 483 GET_PROP_NAME stack[2] ← stack[2]["VENDOR"]
// 485 PUSH_STRING → stack[3] = "/"
// 488 ADD stack[2] = stack[2] + stack[3]
// 489 GET_VAR → stack[3] = scope[1][2]
// 491 GET_PROP_NAME stack[3] ← stack[3]["RENDERER"]
// 494 ADD stack[2] = stack[2] + stack[3]
// 495 SET_VAR scope[0][4] ← stack[2]
// 498 GET_VAR → stack[2] = scope[1][2]
// 501 GET_VAR → stack[3] = scope[0][3]
// 503 SET_GLOBAL_PROP stack[3]["WEBGL"] ← stack[2]
// 506 GET_VAR → stack[2] = scope[0][2]
// 508 JUMP_IF_FALSE if (!stack[2]) JUMP_TO=555
// 511 NEW_OBJECT → stack[2] = {}
// 512 SET_VAR scope[0][9] ← stack[2]
// 515 PUSH_UNDEFINED → stack[2] = undefined
// 516 GET_VAR → stack[3] = scope[2][0]
// 519 GET_VAR → stack[4] = scope[0][9]
// 522 GET_VAR → stack[5] = scope[0][3]
// 525 CALL func.apply(thisArg, [2 args]) → stack[2]
// 527 POP stack[2]
// 528 GET_VAR → stack[2] = scope[0][9]
// 531 GET_VAR → stack[3] = scope[0][3]
// 533 GET_PROP_NAME stack[3] ← stack[3]["antialias"]
// 535 PUSH_CONST → stack[4] = 1
// 538 STRICT_EQUAL stack[3] = stack[3] === stack[4]
// 538 SET_GLOBAL_PROP stack[3]["antialias"] ← stack[2]
// 541 NEW_OBJECT → stack[2] = {}
// 542 NEW_OBJECT → stack[3] = {}
// 543 GET_VAR → stack[4] = scope[0][9]
// 545 DEFINE_PROP Object.defineProperty(stack[3], "webglData", stack[4])
// 548 GET_VAR → stack[4] = scope[0][4]
// 550 DEFINE_PROP Object.defineProperty(stack[3], "gpu", stack[4])
// 552 DEFINE_PROP Object.defineProperty(stack[2], "data", stack[3])
// 555 RETURN stack[2]
// 555 JUMP → JUMP_TO=576
// 558 GET_VAR → stack[2] = scope[0][3]
// 561 GET_VAR → stack[3] = scope[1][2]
// 563 GET_PROP_NAME stack[3] ← stack[3]["VENDOR"]
// 565 SET_GLOBAL_PROP stack[3]["vendor"] ← stack[2]
// 568 GET_VAR → stack[2] = scope[0][3]
// 571 GET_VAR → stack[3] = scope[1][2]
// 573 GET_PROP_NAME stack[3] ← stack[3]["RENDERER"]
// 575 SET_GLOBAL_PROP stack[3]["renderer"] ← stack[2]
// 578 NEW_OBJECT → stack[2] = {}
// 579 NEW_OBJECT → stack[3] = {}
// 580 GET_VAR → stack[4] = scope[0][3]
// 582 DEFINE_PROP Object.defineProperty(stack[3], "webglData", stack[4])
// 585 GET_VAR → stack[4] = scope[0][4]
// 587 DEFINE_PROP Object.defineProperty(stack[3], "gpu", stack[4])
// 589 DEFINE_PROP Object.defineProperty(stack[2], "data", stack[3])
// 592 RETURN stack[2]
