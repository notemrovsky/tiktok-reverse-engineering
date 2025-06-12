// 0 PUSH_STRING → stack[0] = "d41d8cd98f00b204e9800998ecf8427e"
// 3 SET_VAR scope[0][4] ← stack[0]
// 6 GET_VAR → stack[0] = scope[0][3]
// 8 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=30
// 11 PUSH_UNDEFINED → stack[0] = undefined
// 12 GET_VAR → stack[1] = scope[2][1]
// 15 GET_VAR → stack[2] = scope[0][3]
// 18 CALL func.apply(thisArg, [1 args]) → stack[0]
// 20 SET_VAR scope[0][4] ← stack[0]
// 22 JUMP → JUMP_TO=31
// 25 SET_VAR scope[0][20] ← stack[-1]
// 27 PUSH_STRING → stack[-1] = "ffffffffffffffffffffffffffffffff"
// 30 SET_VAR scope[0][4] ← stack[-1]
// 33 PUSH_UNDEFINED → stack[-1] = undefined
// 34 GET_VAR → stack[0] = scope[2][6]
// 37 CALL func.apply(thisArg, [0 args]) → stack[-1]
// 39 POP stack[-1]
// 40 PUSH_UNDEFINED → stack[-1] = undefined
// 41 GET_VAR → stack[0] = scope[2][3]
// 44 CALL func.apply(thisArg, [0 args]) → stack[-1]
// 46 POP stack[-1]
// 47 GET_VAR → stack[-1] = scope[2][4]
// 49 GET_PROP_NAME stack[-1] ← stack[-1]["ubcode"]
// 52 SET_VAR scope[0][5] ← stack[-1]
// 55 GET_VAR → stack[-1] = scope[2][5]
// 57 GET_PROP_NAME stack[-1] ← stack[-1]["envcode"]
// 60 SET_VAR scope[0][6] ← stack[-1]
// 63 PUSH_UNDEFINED → stack[-1] = undefined
// 64 GET_VAR → stack[0] = scope[2][1]
// 67 GET_VAR → stack[1] = scope[0][2]
// 70 CALL func.apply(thisArg, [1 args]) → stack[-1]
// 72 SET_VAR scope[0][7] ← stack[-1]
// 74 GET_GLOBAL → stack[-1] = navigator
// 76 GET_PROP_NAME stack[-1] ← stack[-1]["userAgent"]
// 79 SET_VAR scope[0][8] ← stack[-1]
// 82 PUSH_UNDEFINED → stack[-1] = undefined
// 83 GET_VAR → stack[0] = scope[2][1]
// 86 GET_VAR → stack[1] = scope[0][8]
// 89 CALL func.apply(thisArg, [1 args]) → stack[-1]
// 91 SET_VAR scope[0][9] ← stack[-1]
// 93 GET_GLOBAL → stack[-1] = Math
// 96 DUP → stack[0] = stack[-1]
// 96 GET_PROP_NAME stack[0] ← stack[0]["floor"]
// 98 GET_GLOBAL → stack[1] = Date
// 101 FUNCTION_BIND_APPLY → stack[1] = new stack[1](0 args)
// 103 DUP → stack[2] = stack[1]
// 103 GET_PROP_NAME stack[2] ← stack[2]["getTime"]
// 106 CALL func.apply(thisArg, [0 args]) → stack[1]
// 107 PUSH_CONST → stack[2] = 1000
// 110 DIV stack[1] = stack[1] / stack[2]
// 111 CALL func.apply(thisArg, [1 args]) → stack[-1]
// 113 SET_VAR scope[0][10] ← stack[-1]
// 116 PUSH_UNDEFINED → stack[-1] = undefined
// 117 GET_VAR → stack[0] = scope[2][2]
// 120 GET_VAR → stack[1] = scope[2][0]
// 122 GET_PROP_NAME stack[1] ← stack[1]["perf"]
// 125 CALL func.apply(thisArg, [1 args]) → stack[-1]
// 126 GET_PROP_NAME stack[-1] ← stack[-1]["data"]
// 129 SET_VAR scope[0][11] ← stack[-1]
// 131 PUSH_CONST → stack[-1] = 0
// 133 PUSH_CONST → stack[0] = 0
// 136 NEW_ARRAY → stack[-1] = [...top 2 elements]
// 137 PUSH_CONST → stack[0] = 1
// 140 GET_VAR → stack[1] = scope[0][6]
// 143 NEW_ARRAY → stack[0] = [...top 2 elements]
// 144 PUSH_CONST → stack[1] = 2
// 147 GET_VAR → stack[2] = scope[0][5]
// 150 NEW_ARRAY → stack[1] = [...top 2 elements]
// 151 PUSH_CONST → stack[2] = 3
// 154 GET_VAR → stack[3] = scope[0][7]
// 157 NEW_ARRAY → stack[2] = [...top 2 elements]
// 158 PUSH_CONST → stack[3] = 4
// 161 GET_VAR → stack[4] = scope[0][4]
// 164 NEW_ARRAY → stack[3] = [...top 2 elements]
// 165 PUSH_CONST → stack[4] = 5
// 168 GET_VAR → stack[5] = scope[0][9]
// 171 NEW_ARRAY → stack[4] = [...top 2 elements]
// 172 PUSH_CONST → stack[5] = 6
// 175 GET_VAR → stack[6] = scope[0][10]
// 178 NEW_ARRAY → stack[5] = [...top 2 elements]
// 179 PUSH_CONST → stack[6] = 7
// 182 GET_VAR → stack[7] = scope[0][11]
// 185 NEW_ARRAY → stack[6] = [...top 2 elements]
// 186 PUSH_CONST → stack[7] = 8
// 189 GET_VAR → stack[8] = scope[1][2]
// 192 NEW_ARRAY → stack[7] = [...top 2 elements]
// 193 PUSH_CONST → stack[8] = 9
// 195 PUSH_STRING → stack[9] = "5.1.0"
// 198 NEW_ARRAY → stack[8] = [...top 2 elements]
// 200 NEW_ARRAY → stack[-1] = [...top 10 elements]
// 202 SET_VAR scope[0][12] ← stack[-1]
// 205 PUSH_UNDEFINED → stack[-1] = undefined
// 206 GET_VAR → stack[0] = scope[1][3]
// 209 GET_VAR → stack[1] = scope[0][12]
// 212 DUP → stack[2] = stack[1]
// 212 GET_PROP_NAME stack[2] ← stack[2]["map"]
// 214 PUSH_FUNCTION → stack[3] = function[250]
// 217 CALL func.apply(thisArg, [1 args]) → stack[1]
// 219 CALL func.apply(thisArg, [1 args]) → stack[-1]
// 221 SET_VAR scope[0][13] ← stack[-1]
// 224 GET_VAR → stack[-1] = scope[0][12]
// 226 PUSH_CONST → stack[0] = 0
// 229 GET_VAR → stack[1] = scope[0][13]
// 232 NEW_ARRAY → stack[0] = [...top 2 elements]
// 233 SET_GLOBAL_PROP stack[0]["0"] ← stack[-1]
// 236 PUSH_UNDEFINED → stack[-1] = undefined
// 237 GET_VAR → stack[0] = scope[1][4]
// 240 GET_VAR → stack[1] = scope[1][2]
// 243 CALL func.apply(thisArg, [1 args]) → stack[-1]
// 245 SET_VAR scope[0][14] ← stack[-1]
// 248 GET_VAR → stack[-1] = scope[0][12]
// 250 GET_PROP_NAME stack[-1] ← stack[-1]["length"]
// 252 PUSH_CONST → stack[0] = 1
// 255 SUB stack[-1] = stack[-1] - stack[0]
// 256 SET_VAR scope[0][15] ← stack[-1]
// 259 GET_VAR → stack[-1] = scope[0][15]
// 261 PUSH_CONST → stack[0] = 0
// 264 GREATER_THAN stack[-1] = stack[-1] > stack[0]
// 264 JUMP_IF_FALSE if (!stack[-1]) JUMP_TO=337
// 266 GET_GLOBAL → stack[-1] = Math
// 269 DUP → stack[0] = stack[-1]
// 269 GET_PROP_NAME stack[0] ← stack[0]["floor"]
// 272 PUSH_UNDEFINED → stack[1] = undefined
// 273 GET_VAR → stack[2] = scope[0][14]
// 276 CALL func.apply(thisArg, [0 args]) → stack[1]
// 278 GET_VAR → stack[2] = scope[0][15]
// 280 PUSH_CONST → stack[3] = 1
// 283 ADD stack[2] = stack[2] + stack[3]
// 284 MUL stack[1] = stack[1] * stack[2]
// 285 CALL func.apply(thisArg, [1 args]) → stack[-1]
// 287 SET_VAR scope[0][16] ← stack[-1]
// 290 GET_VAR → stack[-1] = scope[0][12]
// 293 GET_VAR → stack[0] = scope[0][16]
// 296 GET_PROP stack[-1] = stack[-1][stack[0]]
// 297 GET_VAR → stack[0] = scope[0][12]
// 300 GET_VAR → stack[1] = scope[0][15]
// 303 GET_PROP stack[0] = stack[0][stack[1]]
// 304 NEW_ARRAY → stack[-1] = [...top 2 elements]
// 306 SET_VAR scope[0][17] ← stack[-1]
// 309 GET_VAR → stack[-1] = scope[0][12]
// 312 GET_VAR → stack[0] = scope[0][15]
// 315 GET_VAR → stack[1] = scope[0][17]
// 317 GET_PROP_NAME stack[1] ← stack[1]["0"]
// 320 SET_PROP stack[-1][stack[0]] = stack[1]
// 321 GET_VAR → stack[-1] = scope[0][12]
// 324 GET_VAR → stack[0] = scope[0][16]
// 327 GET_VAR → stack[1] = scope[0][17]
// 329 GET_PROP_NAME stack[1] ← stack[1]["1"]
// 332 SET_PROP stack[-1][stack[0]] = stack[1]
// 332 PUSH_SCOPE_REF → stack[-1] = scope[0], stack[0] = 15
// 336 POST_DEC stack[-1] = stack[0][stack[1]]-- (old value)
// 337 POP stack[-1]
// 337 JUMP → JUMP_TO=257
// 340 PUSH_UNDEFINED → stack[-1] = undefined
// 341 GET_VAR → stack[0] = scope[2][8]
// 344 GET_VAR → stack[1] = scope[0][12]
// 347 CALL func.apply(thisArg, [1 args]) → stack[-1]
// 349 SET_VAR scope[0][18] ← stack[-1]
// 352 PUSH_UNDEFINED → stack[-1] = undefined
// 353 GET_VAR → stack[0] = scope[2][7]
// 356 GET_VAR → stack[1] = scope[0][18]
// 358 PUSH_CONST → stack[2] = 1
// 360 PUSH_STRING → stack[3] = "s3"
// 363 PUSH_FALSE → stack[4] = false
// 364 CALL func.apply(thisArg, [4 args]) → stack[-1]
// 366 SET_VAR scope[0][19] ← stack[-1]
// 369 GET_VAR → stack[-1] = scope[0][19]
// 372 RETURN stack[-1]
