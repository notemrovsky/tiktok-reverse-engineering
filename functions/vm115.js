// 0 PUSH_CONST → stack[0] = 0
// 3 SET_VAR scope[0][2] ← stack[0]
// 6 GET_VAR → stack[0] = scope[1][11]
// 9 NOT stack[0] = !stack[0]
// 9 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=11
// 12 PUSH_UNDEFINED → stack[0] = undefined
// 13 RETURN stack[0]
// 14 PUSH_UNDEFINED → stack[0] = undefined
// 15 GET_VAR → stack[1] = scope[1][14]
// 18 GET_VAR → stack[2] = scope[1][5]
// 20 PUSH_CONST → stack[3] = 2
// 23 CALL func.apply(thisArg, [2 args]) → stack[0]
// 25 SET_VAR scope[0][3] ← stack[0]
// 28 PUSH_UNDEFINED → stack[0] = undefined
// 29 GET_VAR → stack[1] = scope[1][14]
// 32 GET_VAR → stack[2] = scope[1][7]
// 34 PUSH_CONST → stack[3] = 5
// 37 PUSH_TRUE → stack[4] = true
// 38 CALL func.apply(thisArg, [3 args]) → stack[0]
// 40 SET_VAR scope[0][4] ← stack[0]
// 42 PUSH_CONST → stack[0] = 1
// 45 SET_VAR scope[0][5] ← stack[0]
// 48 GET_VAR → stack[0] = scope[1][4]
// 51 NOT stack[0] = !stack[0]
// 51 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=54
// 54 GET_VAR → stack[0] = scope[1][3]
// 56 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=81
// 59 GET_VAR → stack[0] = scope[0][5]
// 61 PUSH_CONST → stack[1] = 64
// 64 BITWISE_OR stack[0] = stack[0] | stack[1]
// 64 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 5
// 68 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 69 POP stack[0]
// 70 GET_VAR → stack[0] = scope[0][2]
// 73 GET_VAR → stack[1] = scope[1][2]
// 75 GET_PROP_NAME stack[1] ← stack[1]["kFakeOperations"]
// 78 BITWISE_OR stack[0] = stack[0] | stack[1]
// 78 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 2
// 82 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 83 POP stack[0]
// 84 GET_VAR → stack[0] = scope[2][0]
// 86 GET_PROP_NAME stack[0] ← stack[0]["isTrusted"]
// 88 PUSH_CONST → stack[1] = 1
// 91 NOT_EQUAL stack[0] = stack[0] != stack[1]
// 91 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=116
// 94 GET_VAR → stack[0] = scope[0][5]
// 96 PUSH_CONST → stack[1] = 128
// 99 BITWISE_OR stack[0] = stack[0] | stack[1]
// 99 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 5
// 103 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 104 POP stack[0]
// 105 GET_VAR → stack[0] = scope[0][2]
// 108 GET_VAR → stack[1] = scope[1][2]
// 110 GET_PROP_NAME stack[1] ← stack[1]["kUntrusted"]
// 113 BITWISE_OR stack[0] = stack[0] | stack[1]
// 113 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 2
// 117 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 118 POP stack[0]
// 119 GET_VAR → stack[0] = scope[1][5]
// 121 GET_PROP_NAME stack[0] ← stack[0]["length"]
// 123 PUSH_CONST → stack[1] = 0
// 126 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 126 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=153
// 129 GET_VAR → stack[0] = scope[0][5]
// 131 PUSH_CONST → stack[1] = 2
// 134 BITWISE_OR stack[0] = stack[0] | stack[1]
// 134 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 5
// 138 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 139 POP stack[0]
// 140 GET_VAR → stack[0] = scope[0][2]
// 143 GET_VAR → stack[1] = scope[1][2]
// 145 GET_PROP_NAME stack[1] ← stack[1]["kNoMove"]
// 148 BITWISE_OR stack[0] = stack[0] | stack[1]
// 148 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 2
// 152 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 153 POP stack[0]
// 153 JUMP → JUMP_TO=189
// 156 GET_VAR → stack[0] = scope[0][3]
// 158 GET_PROP_NAME stack[0] ← stack[0]["0"]
// 160 PUSH_CONST → stack[1] = 50
// 163 GREATER_THAN stack[0] = stack[0] > stack[1]
// 163 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=188
// 166 GET_VAR → stack[0] = scope[0][5]
// 168 PUSH_CONST → stack[1] = 16
// 171 BITWISE_OR stack[0] = stack[0] | stack[1]
// 171 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 5
// 175 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 176 POP stack[0]
// 177 GET_VAR → stack[0] = scope[0][2]
// 180 GET_VAR → stack[1] = scope[1][2]
// 182 GET_PROP_NAME stack[1] ← stack[1]["kMoveFast"]
// 185 BITWISE_OR stack[0] = stack[0] | stack[1]
// 185 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 2
// 189 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 190 POP stack[0]
// 191 GET_VAR → stack[0] = scope[1][6]
// 193 GET_PROP_NAME stack[0] ← stack[0]["length"]
// 195 PUSH_CONST → stack[1] = 0
// 198 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 198 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=223
// 201 GET_VAR → stack[0] = scope[0][5]
// 203 PUSH_CONST → stack[1] = 4
// 206 BITWISE_OR stack[0] = stack[0] | stack[1]
// 206 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 5
// 210 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 211 POP stack[0]
// 212 GET_VAR → stack[0] = scope[0][2]
// 215 GET_VAR → stack[1] = scope[1][2]
// 217 GET_PROP_NAME stack[1] ← stack[1]["kNoClickTouch"]
// 220 BITWISE_OR stack[0] = stack[0] | stack[1]
// 220 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 2
// 224 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 225 POP stack[0]
// 226 GET_VAR → stack[0] = scope[1][7]
// 228 GET_PROP_NAME stack[0] ← stack[0]["length"]
// 230 PUSH_CONST → stack[1] = 0
// 233 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 233 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=260
// 236 GET_VAR → stack[0] = scope[0][5]
// 238 PUSH_CONST → stack[1] = 8
// 241 BITWISE_OR stack[0] = stack[0] | stack[1]
// 241 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 5
// 245 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 246 POP stack[0]
// 247 GET_VAR → stack[0] = scope[0][2]
// 250 GET_VAR → stack[1] = scope[1][2]
// 252 GET_PROP_NAME stack[1] ← stack[1]["kNoKeyboardEvent"]
// 255 BITWISE_OR stack[0] = stack[0] | stack[1]
// 255 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 2
// 259 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 260 POP stack[0]
// 260 JUMP → JUMP_TO=296
// 263 GET_VAR → stack[0] = scope[0][4]
// 265 GET_PROP_NAME stack[0] ← stack[0]["0"]
// 267 PUSH_MAGIC_NUMBER → stack[1] = 0.5
// 270 GREATER_THAN stack[0] = stack[0] > stack[1]
// 270 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=295
// 273 GET_VAR → stack[0] = scope[0][5]
// 275 PUSH_CONST → stack[1] = 32
// 278 BITWISE_OR stack[0] = stack[0] | stack[1]
// 278 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 5
// 282 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 283 POP stack[0]
// 284 GET_VAR → stack[0] = scope[0][2]
// 287 GET_VAR → stack[1] = scope[1][2]
// 289 GET_PROP_NAME stack[1] ← stack[1]["kKeyboardFast"]
// 292 BITWISE_OR stack[0] = stack[0] | stack[1]
// 292 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 2
// 296 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 297 POP stack[0]
// 298 GET_VAR → stack[0] = scope[2][5]
// 301 GET_VAR → stack[1] = scope[0][2]
// 303 SET_GLOBAL_PROP stack[1]["ubcode"] ← stack[0]
// 306 GET_VAR → stack[0] = scope[0][5]
// 309 DUP → stack[1] = stack[0]
// 309 GET_PROP_NAME stack[1] ← stack[1]["toString"]
// 311 PUSH_CONST → stack[2] = 32
// 314 CALL func.apply(thisArg, [1 args]) → stack[0]
// 316 SET_VAR scope[0][6] ← stack[0]
// 319 GET_VAR → stack[0] = scope[0][6]
// 321 GET_PROP_NAME stack[0] ← stack[0]["length"]
// 323 PUSH_CONST → stack[1] = 1
// 326 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 326 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=337
// 328 PUSH_STRING → stack[0] = "00"
// 331 GET_VAR → stack[1] = scope[0][6]
// 334 ADD stack[0] = stack[0] + stack[1]
// 335 SET_VAR scope[0][6] ← stack[0]
// 337 JUMP → JUMP_TO=357
// 340 GET_VAR → stack[0] = scope[0][6]
// 342 GET_PROP_NAME stack[0] ← stack[0]["length"]
// 344 PUSH_CONST → stack[1] = 2
// 347 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 347 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=356
// 349 PUSH_STRING → stack[0] = "0"
// 352 GET_VAR → stack[1] = scope[0][6]
// 355 ADD stack[0] = stack[0] + stack[1]
// 356 SET_VAR scope[0][6] ← stack[0]
// 359 GET_VAR → stack[0] = scope[0][6]
// 362 RETURN stack[0]
