// 0 PUSH_STRING → stack[0] = "="
// 3 SET_VAR scope[0][4] ← stack[0]
// 6 NEW_OBJECT → stack[0] = {}
// 7 SET_VAR scope[0][5] ← stack[0]
// 10 GET_VAR → stack[0] = scope[0][5]
// 12 PUSH_STRING → stack[1] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
// 14 SET_GLOBAL_PROP stack[1]["s0"] ← stack[0]
// 17 GET_VAR → stack[0] = scope[0][5]
// 19 PUSH_STRING → stack[1] = "Dkdpgh4ZKsQB80/Mfvw36XI1R25+WUAlEi7NLboqYTOPuzmFjJnryx9HVGcaStCe="
// 21 SET_GLOBAL_PROP stack[1]["s1"] ← stack[0]
// 24 GET_VAR → stack[0] = scope[0][5]
// 26 PUSH_STRING → stack[1] = "Dkdpgh4ZKsQB80/Mfvw36XI1R25-WUAlEi7NLboqYTOPuzmFjJnryx9HVGcaStCe="
// 28 SET_GLOBAL_PROP stack[1]["s2"] ← stack[0]
// 31 GET_VAR → stack[0] = scope[0][5]
// 33 PUSH_STRING → stack[1] = "u09tbS3UvgDEe6r-ZVMXzLpsAohTn7mdINQlW412GqBjfYiyk8JORCF5/xKHwacP="
// 35 SET_GLOBAL_PROP stack[1]["s3"] ← stack[0]
// 38 GET_VAR → stack[0] = scope[0][5]
// 41 GET_VAR → stack[1] = scope[0][3]
// 44 GET_PROP stack[0] = stack[0][stack[1]]
// 45 SET_VAR scope[0][6] ← stack[0]
// 47 PUSH_STRING → stack[0] = ""
// 50 SET_VAR scope[0][7] ← stack[0]
// 52 PUSH_CONST → stack[0] = 0
// 55 SET_VAR scope[0][9] ← stack[0]
// 58 GET_VAR → stack[0] = scope[0][2]
// 60 GET_PROP_NAME stack[0] ← stack[0]["length"]
// 63 GET_VAR → stack[1] = scope[0][9]
// 65 PUSH_CONST → stack[2] = 3
// 68 ADD stack[1] = stack[1] + stack[2]
// 69 GREATER_EQUAL stack[0] = stack[0] >= stack[1]
// 69 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=228
// 72 GET_VAR → stack[0] = scope[0][2]
// 75 DUP → stack[1] = stack[0]
// 75 GET_PROP_NAME stack[1] ← stack[1]["charCodeAt"]
// 77 PUSH_SCOPE_REF → stack[2] = scope[0], stack[3] = 9
// 81 POST_INC stack[2] = stack[2][stack[3]]++ (old value)
// 82 CALL func.apply(thisArg, [1 args]) → stack[0]
// 83 PUSH_CONST → stack[1] = 255
// 86 BITWISE_AND stack[0] = stack[0] & stack[1]
// 86 PUSH_CONST → stack[1] = 16
// 89 LEFT_SHIFT stack[0] = stack[0] << stack[1]
// 90 GET_VAR → stack[1] = scope[0][2]
// 93 DUP → stack[2] = stack[1]
// 93 GET_PROP_NAME stack[2] ← stack[2]["charCodeAt"]
// 95 PUSH_SCOPE_REF → stack[3] = scope[0], stack[4] = 9
// 99 POST_INC stack[3] = stack[3][stack[4]]++ (old value)
// 100 CALL func.apply(thisArg, [1 args]) → stack[1]
// 101 PUSH_CONST → stack[2] = 255
// 104 BITWISE_AND stack[1] = stack[1] & stack[2]
// 104 PUSH_CONST → stack[2] = 8
// 107 LEFT_SHIFT stack[1] = stack[1] << stack[2]
// 108 BITWISE_OR stack[0] = stack[0] | stack[1]
// 109 GET_VAR → stack[1] = scope[0][2]
// 112 DUP → stack[2] = stack[1]
// 112 GET_PROP_NAME stack[2] ← stack[2]["charCodeAt"]
// 114 PUSH_SCOPE_REF → stack[3] = scope[0], stack[4] = 9
// 118 POST_INC stack[3] = stack[3][stack[4]]++ (old value)
// 119 CALL func.apply(thisArg, [1 args]) → stack[1]
// 120 PUSH_CONST → stack[2] = 255
// 123 BITWISE_AND stack[1] = stack[1] & stack[2]
// 124 BITWISE_OR stack[0] = stack[0] | stack[1]
// 125 SET_VAR scope[0][8] ← stack[0]
// 128 GET_VAR → stack[0] = scope[0][7]
// 131 GET_VAR → stack[1] = scope[0][6]
// 134 DUP → stack[2] = stack[1]
// 134 GET_PROP_NAME stack[2] ← stack[2]["charAt"]
// 137 GET_VAR → stack[3] = scope[0][8]
// 139 PUSH_CONST → stack[4] = 16515072
// 142 BITWISE_AND stack[3] = stack[3] & stack[4]
// 142 PUSH_CONST → stack[4] = 18
// 145 RIGHT_SHIFT stack[3] = stack[3] >> stack[4]
// 146 CALL func.apply(thisArg, [1 args]) → stack[1]
// 148 ADD stack[0] = stack[0] + stack[1]
// 148 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 7
// 152 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 153 POP stack[0]
// 154 GET_VAR → stack[0] = scope[0][7]
// 157 GET_VAR → stack[1] = scope[0][6]
// 160 DUP → stack[2] = stack[1]
// 160 GET_PROP_NAME stack[2] ← stack[2]["charAt"]
// 163 GET_VAR → stack[3] = scope[0][8]
// 165 PUSH_CONST → stack[4] = 258048
// 168 BITWISE_AND stack[3] = stack[3] & stack[4]
// 168 PUSH_CONST → stack[4] = 12
// 171 RIGHT_SHIFT stack[3] = stack[3] >> stack[4]
// 172 CALL func.apply(thisArg, [1 args]) → stack[1]
// 174 ADD stack[0] = stack[0] + stack[1]
// 174 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 7
// 178 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 179 POP stack[0]
// 180 GET_VAR → stack[0] = scope[0][7]
// 183 GET_VAR → stack[1] = scope[0][6]
// 186 DUP → stack[2] = stack[1]
// 186 GET_PROP_NAME stack[2] ← stack[2]["charAt"]
// 189 GET_VAR → stack[3] = scope[0][8]
// 191 PUSH_CONST → stack[4] = 4032
// 194 BITWISE_AND stack[3] = stack[3] & stack[4]
// 194 PUSH_CONST → stack[4] = 6
// 197 RIGHT_SHIFT stack[3] = stack[3] >> stack[4]
// 198 CALL func.apply(thisArg, [1 args]) → stack[1]
// 200 ADD stack[0] = stack[0] + stack[1]
// 200 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 7
// 204 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 205 POP stack[0]
// 206 GET_VAR → stack[0] = scope[0][7]
// 209 GET_VAR → stack[1] = scope[0][6]
// 212 DUP → stack[2] = stack[1]
// 212 GET_PROP_NAME stack[2] ← stack[2]["charAt"]
// 215 GET_VAR → stack[3] = scope[0][8]
// 217 PUSH_CONST → stack[4] = 63
// 220 BITWISE_AND stack[3] = stack[3] & stack[4]
// 221 CALL func.apply(thisArg, [1 args]) → stack[1]
// 223 ADD stack[0] = stack[0] + stack[1]
// 223 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 7
// 227 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 228 POP stack[0]
// 228 JUMP → JUMP_TO=56
// 231 GET_VAR → stack[0] = scope[0][2]
// 233 GET_PROP_NAME stack[0] ← stack[0]["length"]
// 236 GET_VAR → stack[1] = scope[0][9]
// 239 SUB stack[0] = stack[0] - stack[1]
// 239 PUSH_CONST → stack[1] = 0
// 242 GREATER_THAN stack[0] = stack[0] > stack[1]
// 242 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=402
// 245 GET_VAR → stack[0] = scope[0][2]
// 248 DUP → stack[1] = stack[0]
// 248 GET_PROP_NAME stack[1] ← stack[1]["charCodeAt"]
// 250 PUSH_SCOPE_REF → stack[2] = scope[0], stack[3] = 9
// 254 POST_INC stack[2] = stack[2][stack[3]]++ (old value)
// 255 CALL func.apply(thisArg, [1 args]) → stack[0]
// 256 PUSH_CONST → stack[1] = 255
// 259 BITWISE_AND stack[0] = stack[0] & stack[1]
// 259 PUSH_CONST → stack[1] = 16
// 262 LEFT_SHIFT stack[0] = stack[0] << stack[1]
// 263 GET_VAR → stack[1] = scope[0][2]
// 265 GET_PROP_NAME stack[1] ← stack[1]["length"]
// 268 GET_VAR → stack[2] = scope[0][9]
// 271 GREATER_THAN stack[1] = stack[1] > stack[2]
// 271 JUMP_IF_FALSE if (!stack[1]) JUMP_TO=290
// 274 GET_VAR → stack[1] = scope[0][2]
// 277 DUP → stack[2] = stack[1]
// 277 GET_PROP_NAME stack[2] ← stack[2]["charCodeAt"]
// 280 GET_VAR → stack[3] = scope[0][9]
// 283 CALL func.apply(thisArg, [1 args]) → stack[1]
// 284 PUSH_CONST → stack[2] = 255
// 287 BITWISE_AND stack[1] = stack[1] & stack[2]
// 287 PUSH_CONST → stack[2] = 8
// 290 LEFT_SHIFT stack[1] = stack[1] << stack[2]
// 290 JUMP → JUMP_TO=293
// 292 PUSH_CONST → stack[2] = 0
// 295 BITWISE_OR stack[1] = stack[1] | stack[2]
// 296 SET_VAR scope[0][8] ← stack[1]
// 299 GET_VAR → stack[1] = scope[0][7]
// 302 GET_VAR → stack[2] = scope[0][6]
// 305 DUP → stack[3] = stack[2]
// 305 GET_PROP_NAME stack[3] ← stack[3]["charAt"]
// 308 GET_VAR → stack[4] = scope[0][8]
// 310 PUSH_CONST → stack[5] = 16515072
// 313 BITWISE_AND stack[4] = stack[4] & stack[5]
// 313 PUSH_CONST → stack[5] = 18
// 316 RIGHT_SHIFT stack[4] = stack[4] >> stack[5]
// 317 CALL func.apply(thisArg, [1 args]) → stack[2]
// 319 ADD stack[1] = stack[1] + stack[2]
// 319 PUSH_SCOPE_REF → stack[2] = scope[0], stack[3] = 7
// 323 SET_PROP_NO_POP stack[2][stack[3]] = stack[1] (keep value)
// 324 POP stack[1]
// 325 GET_VAR → stack[1] = scope[0][7]
// 328 GET_VAR → stack[2] = scope[0][6]
// 331 DUP → stack[3] = stack[2]
// 331 GET_PROP_NAME stack[3] ← stack[3]["charAt"]
// 334 GET_VAR → stack[4] = scope[0][8]
// 336 PUSH_CONST → stack[5] = 258048
// 339 BITWISE_AND stack[4] = stack[4] & stack[5]
// 339 PUSH_CONST → stack[5] = 12
// 342 RIGHT_SHIFT stack[4] = stack[4] >> stack[5]
// 343 CALL func.apply(thisArg, [1 args]) → stack[2]
// 345 ADD stack[1] = stack[1] + stack[2]
// 345 PUSH_SCOPE_REF → stack[2] = scope[0], stack[3] = 7
// 349 SET_PROP_NO_POP stack[2][stack[3]] = stack[1] (keep value)
// 350 POP stack[1]
// 351 GET_VAR → stack[1] = scope[0][7]
// 354 GET_VAR → stack[2] = scope[0][2]
// 356 GET_PROP_NAME stack[2] ← stack[2]["length"]
// 359 GET_VAR → stack[3] = scope[0][9]
// 362 GREATER_THAN stack[2] = stack[2] > stack[3]
// 362 JUMP_IF_FALSE if (!stack[2]) JUMP_TO=381
// 365 GET_VAR → stack[2] = scope[0][6]
// 368 DUP → stack[3] = stack[2]
// 368 GET_PROP_NAME stack[3] ← stack[3]["charAt"]
// 371 GET_VAR → stack[4] = scope[0][8]
// 373 PUSH_CONST → stack[5] = 4032
// 376 BITWISE_AND stack[4] = stack[4] & stack[5]
// 376 PUSH_CONST → stack[5] = 6
// 379 RIGHT_SHIFT stack[4] = stack[4] >> stack[5]
// 380 CALL func.apply(thisArg, [1 args]) → stack[2]
// 381 JUMP → JUMP_TO=385
// 384 GET_VAR → stack[3] = scope[0][4]
// 387 ADD stack[2] = stack[2] + stack[3]
// 387 PUSH_SCOPE_REF → stack[3] = scope[0], stack[4] = 7
// 391 SET_PROP_NO_POP stack[3][stack[4]] = stack[2] (keep value)
// 392 POP stack[2]
// 393 GET_VAR → stack[2] = scope[0][7]
// 396 GET_VAR → stack[3] = scope[0][4]
// 399 ADD stack[2] = stack[2] + stack[3]
// 399 PUSH_SCOPE_REF → stack[3] = scope[0], stack[4] = 7
// 403 SET_PROP_NO_POP stack[3][stack[4]] = stack[2] (keep value)
// 404 POP stack[2]
// 405 GET_VAR → stack[2] = scope[0][7]
// 408 RETURN stack[2]
