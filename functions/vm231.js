// 0 PUSH_STRING → stack[0] = "Dkdpgh4ZKsQB80/Mfvw36XI1R25+WUAlEi7NLboqYTOPuzmFjJnryx9HVGcaStCe"
// 3 SET_VAR scope[0][5] ← stack[0]
// 5 PUSH_STRING → stack[0] = "="
// 8 SET_VAR scope[0][6] ← stack[0]
// 11 GET_VAR → stack[0] = scope[0][4]
// 13 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=18
// 15 PUSH_STRING → stack[0] = ""
// 18 SET_VAR scope[0][6] ← stack[0]
// 21 GET_VAR → stack[0] = scope[0][3]
// 23 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=29
// 26 GET_VAR → stack[0] = scope[0][3]
// 29 SET_VAR scope[0][5] ← stack[0]
// 31 PUSH_STRING → stack[0] = ""
// 34 SET_VAR scope[0][7] ← stack[0]
// 36 PUSH_CONST → stack[0] = 0
// 39 SET_VAR scope[0][9] ← stack[0]
// 42 GET_VAR → stack[0] = scope[0][2]
// 44 GET_PROP_NAME stack[0] ← stack[0]["length"]
// 47 GET_VAR → stack[1] = scope[0][9]
// 49 PUSH_CONST → stack[2] = 3
// 52 ADD stack[1] = stack[1] + stack[2]
// 53 GREATER_EQUAL stack[0] = stack[0] >= stack[1]
// 53 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=212
// 56 GET_VAR → stack[0] = scope[0][2]
// 59 DUP → stack[1] = stack[0]
// 59 GET_PROP_NAME stack[1] ← stack[1]["charCodeAt"]
// 61 PUSH_SCOPE_REF → stack[2] = scope[0], stack[3] = 9
// 65 POST_INC stack[2] = stack[2][stack[3]]++ (old value)
// 66 CALL func.apply(thisArg, [1 args]) → stack[0]
// 67 PUSH_CONST → stack[1] = 255
// 70 BITWISE_AND stack[0] = stack[0] & stack[1]
// 70 PUSH_CONST → stack[1] = 16
// 73 LEFT_SHIFT stack[0] = stack[0] << stack[1]
// 74 GET_VAR → stack[1] = scope[0][2]
// 77 DUP → stack[2] = stack[1]
// 77 GET_PROP_NAME stack[2] ← stack[2]["charCodeAt"]
// 79 PUSH_SCOPE_REF → stack[3] = scope[0], stack[4] = 9
// 83 POST_INC stack[3] = stack[3][stack[4]]++ (old value)
// 84 CALL func.apply(thisArg, [1 args]) → stack[1]
// 85 PUSH_CONST → stack[2] = 255
// 88 BITWISE_AND stack[1] = stack[1] & stack[2]
// 88 PUSH_CONST → stack[2] = 8
// 91 LEFT_SHIFT stack[1] = stack[1] << stack[2]
// 92 BITWISE_OR stack[0] = stack[0] | stack[1]
// 93 GET_VAR → stack[1] = scope[0][2]
// 96 DUP → stack[2] = stack[1]
// 96 GET_PROP_NAME stack[2] ← stack[2]["charCodeAt"]
// 98 PUSH_SCOPE_REF → stack[3] = scope[0], stack[4] = 9
// 102 POST_INC stack[3] = stack[3][stack[4]]++ (old value)
// 103 CALL func.apply(thisArg, [1 args]) → stack[1]
// 104 PUSH_CONST → stack[2] = 255
// 107 BITWISE_AND stack[1] = stack[1] & stack[2]
// 108 BITWISE_OR stack[0] = stack[0] | stack[1]
// 109 SET_VAR scope[0][8] ← stack[0]
// 112 GET_VAR → stack[0] = scope[0][7]
// 115 GET_VAR → stack[1] = scope[0][5]
// 118 DUP → stack[2] = stack[1]
// 118 GET_PROP_NAME stack[2] ← stack[2]["charAt"]
// 121 GET_VAR → stack[3] = scope[0][8]
// 123 PUSH_CONST → stack[4] = 16515072
// 126 BITWISE_AND stack[3] = stack[3] & stack[4]
// 126 PUSH_CONST → stack[4] = 18
// 129 RIGHT_SHIFT stack[3] = stack[3] >> stack[4]
// 130 CALL func.apply(thisArg, [1 args]) → stack[1]
// 132 ADD stack[0] = stack[0] + stack[1]
// 132 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 7
// 136 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 137 POP stack[0]
// 138 GET_VAR → stack[0] = scope[0][7]
// 141 GET_VAR → stack[1] = scope[0][5]
// 144 DUP → stack[2] = stack[1]
// 144 GET_PROP_NAME stack[2] ← stack[2]["charAt"]
// 147 GET_VAR → stack[3] = scope[0][8]
// 149 PUSH_CONST → stack[4] = 258048
// 152 BITWISE_AND stack[3] = stack[3] & stack[4]
// 152 PUSH_CONST → stack[4] = 12
// 155 RIGHT_SHIFT stack[3] = stack[3] >> stack[4]
// 156 CALL func.apply(thisArg, [1 args]) → stack[1]
// 158 ADD stack[0] = stack[0] + stack[1]
// 158 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 7
// 162 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 163 POP stack[0]
// 164 GET_VAR → stack[0] = scope[0][7]
// 167 GET_VAR → stack[1] = scope[0][5]
// 170 DUP → stack[2] = stack[1]
// 170 GET_PROP_NAME stack[2] ← stack[2]["charAt"]
// 173 GET_VAR → stack[3] = scope[0][8]
// 175 PUSH_CONST → stack[4] = 4032
// 178 BITWISE_AND stack[3] = stack[3] & stack[4]
// 178 PUSH_CONST → stack[4] = 6
// 181 RIGHT_SHIFT stack[3] = stack[3] >> stack[4]
// 182 CALL func.apply(thisArg, [1 args]) → stack[1]
// 184 ADD stack[0] = stack[0] + stack[1]
// 184 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 7
// 188 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 189 POP stack[0]
// 190 GET_VAR → stack[0] = scope[0][7]
// 193 GET_VAR → stack[1] = scope[0][5]
// 196 DUP → stack[2] = stack[1]
// 196 GET_PROP_NAME stack[2] ← stack[2]["charAt"]
// 199 GET_VAR → stack[3] = scope[0][8]
// 201 PUSH_CONST → stack[4] = 63
// 204 BITWISE_AND stack[3] = stack[3] & stack[4]
// 205 CALL func.apply(thisArg, [1 args]) → stack[1]
// 207 ADD stack[0] = stack[0] + stack[1]
// 207 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 7
// 211 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 212 POP stack[0]
// 212 JUMP → JUMP_TO=40
// 215 GET_VAR → stack[0] = scope[0][2]
// 217 GET_PROP_NAME stack[0] ← stack[0]["length"]
// 220 GET_VAR → stack[1] = scope[0][9]
// 223 SUB stack[0] = stack[0] - stack[1]
// 223 PUSH_CONST → stack[1] = 0
// 226 GREATER_THAN stack[0] = stack[0] > stack[1]
// 226 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=386
// 229 GET_VAR → stack[0] = scope[0][2]
// 232 DUP → stack[1] = stack[0]
// 232 GET_PROP_NAME stack[1] ← stack[1]["charCodeAt"]
// 234 PUSH_SCOPE_REF → stack[2] = scope[0], stack[3] = 9
// 238 POST_INC stack[2] = stack[2][stack[3]]++ (old value)
// 239 CALL func.apply(thisArg, [1 args]) → stack[0]
// 240 PUSH_CONST → stack[1] = 255
// 243 BITWISE_AND stack[0] = stack[0] & stack[1]
// 243 PUSH_CONST → stack[1] = 16
// 246 LEFT_SHIFT stack[0] = stack[0] << stack[1]
// 247 GET_VAR → stack[1] = scope[0][2]
// 249 GET_PROP_NAME stack[1] ← stack[1]["length"]
// 252 GET_VAR → stack[2] = scope[0][9]
// 255 GREATER_THAN stack[1] = stack[1] > stack[2]
// 255 JUMP_IF_FALSE if (!stack[1]) JUMP_TO=274
// 258 GET_VAR → stack[1] = scope[0][2]
// 261 DUP → stack[2] = stack[1]
// 261 GET_PROP_NAME stack[2] ← stack[2]["charCodeAt"]
// 264 GET_VAR → stack[3] = scope[0][9]
// 267 CALL func.apply(thisArg, [1 args]) → stack[1]
// 268 PUSH_CONST → stack[2] = 255
// 271 BITWISE_AND stack[1] = stack[1] & stack[2]
// 271 PUSH_CONST → stack[2] = 8
// 274 LEFT_SHIFT stack[1] = stack[1] << stack[2]
// 274 JUMP → JUMP_TO=277
// 276 PUSH_CONST → stack[2] = 0
// 279 BITWISE_OR stack[1] = stack[1] | stack[2]
// 280 SET_VAR scope[0][8] ← stack[1]
// 283 GET_VAR → stack[1] = scope[0][7]
// 286 GET_VAR → stack[2] = scope[0][5]
// 289 DUP → stack[3] = stack[2]
// 289 GET_PROP_NAME stack[3] ← stack[3]["charAt"]
// 292 GET_VAR → stack[4] = scope[0][8]
// 294 PUSH_CONST → stack[5] = 16515072
// 297 BITWISE_AND stack[4] = stack[4] & stack[5]
// 297 PUSH_CONST → stack[5] = 18
// 300 RIGHT_SHIFT stack[4] = stack[4] >> stack[5]
// 301 CALL func.apply(thisArg, [1 args]) → stack[2]
// 303 ADD stack[1] = stack[1] + stack[2]
// 303 PUSH_SCOPE_REF → stack[2] = scope[0], stack[3] = 7
// 307 SET_PROP_NO_POP stack[2][stack[3]] = stack[1] (keep value)
// 308 POP stack[1]
// 309 GET_VAR → stack[1] = scope[0][7]
// 312 GET_VAR → stack[2] = scope[0][5]
// 315 DUP → stack[3] = stack[2]
// 315 GET_PROP_NAME stack[3] ← stack[3]["charAt"]
// 318 GET_VAR → stack[4] = scope[0][8]
// 320 PUSH_CONST → stack[5] = 258048
// 323 BITWISE_AND stack[4] = stack[4] & stack[5]
// 323 PUSH_CONST → stack[5] = 12
// 326 RIGHT_SHIFT stack[4] = stack[4] >> stack[5]
// 327 CALL func.apply(thisArg, [1 args]) → stack[2]
// 329 ADD stack[1] = stack[1] + stack[2]
// 329 PUSH_SCOPE_REF → stack[2] = scope[0], stack[3] = 7
// 333 SET_PROP_NO_POP stack[2][stack[3]] = stack[1] (keep value)
// 334 POP stack[1]
// 335 GET_VAR → stack[1] = scope[0][7]
// 338 GET_VAR → stack[2] = scope[0][2]
// 340 GET_PROP_NAME stack[2] ← stack[2]["length"]
// 343 GET_VAR → stack[3] = scope[0][9]
// 346 GREATER_THAN stack[2] = stack[2] > stack[3]
// 346 JUMP_IF_FALSE if (!stack[2]) JUMP_TO=365
// 349 GET_VAR → stack[2] = scope[0][5]
// 352 DUP → stack[3] = stack[2]
// 352 GET_PROP_NAME stack[3] ← stack[3]["charAt"]
// 355 GET_VAR → stack[4] = scope[0][8]
// 357 PUSH_CONST → stack[5] = 4032
// 360 BITWISE_AND stack[4] = stack[4] & stack[5]
// 360 PUSH_CONST → stack[5] = 6
// 363 RIGHT_SHIFT stack[4] = stack[4] >> stack[5]
// 364 CALL func.apply(thisArg, [1 args]) → stack[2]
// 365 JUMP → JUMP_TO=369
// 368 GET_VAR → stack[3] = scope[0][6]
// 371 ADD stack[2] = stack[2] + stack[3]
// 371 PUSH_SCOPE_REF → stack[3] = scope[0], stack[4] = 7
// 375 SET_PROP_NO_POP stack[3][stack[4]] = stack[2] (keep value)
// 376 POP stack[2]
// 377 GET_VAR → stack[2] = scope[0][7]
// 380 GET_VAR → stack[3] = scope[0][6]
// 383 ADD stack[2] = stack[2] + stack[3]
// 383 PUSH_SCOPE_REF → stack[3] = scope[0], stack[4] = 7
// 387 SET_PROP_NO_POP stack[3][stack[4]] = stack[2] (keep value)
// 388 POP stack[2]
// 389 GET_VAR → stack[2] = scope[0][7]
// 392 RETURN stack[2]
