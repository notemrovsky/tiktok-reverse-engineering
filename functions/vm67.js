// 1 PUSH_SCOPE → stack[0] = scope
// 1 GET_PROP_NAME stack[0] ← stack[0]["_byted_url"]
// 4 DUP → stack[1] = stack[0]
// 4 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 6 PUSH_STRING → stack[2] = "_signature="
// 9 CALL func.apply(thisArg, [1 args]) → stack[0]
// 10 PUSH_CONST → stack[1] = 1
// 13 NEGATE stack[1] = -stack[1]
// 14 GREATER_THAN stack[0] = stack[0] > stack[1]
// 14 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=27
// 17 GET_VAR → stack[0] = scope[1][5]
// 20 DUP → stack[1] = stack[0]
// 20 GET_PROP_NAME stack[1] ← stack[1]["apply"]
// 23 PUSH_SCOPE → stack[2] = scope
// 24 GET_VAR → stack[3] = scope[0][1]
// 27 CALL func.apply(thisArg, [2 args]) → stack[0]
// 29 RETURN stack[0]
// 30 PUSH_SCOPE → stack[0] = scope
// 31 GET_VAR → stack[1] = scope[0][2]
// 33 SET_GLOBAL_PROP stack[1]["_byted_body"] ← stack[0]
// 36 PUSH_SCOPE → stack[0] = scope
// 36 GET_PROP_NAME stack[0] ← stack[0]["onreadystatechange"]
// 39 SET_VAR scope[0][4] ← stack[0]
// 42 PUSH_SCOPE → stack[0] = scope
// 42 GET_PROP_NAME stack[0] ← stack[0]["onabort"]
// 45 SET_VAR scope[0][5] ← stack[0]
// 48 PUSH_SCOPE → stack[0] = scope
// 48 GET_PROP_NAME stack[0] ← stack[0]["onerror"]
// 51 SET_VAR scope[0][6] ← stack[0]
// 54 PUSH_SCOPE → stack[0] = scope
// 54 GET_PROP_NAME stack[0] ← stack[0]["onload"]
// 57 SET_VAR scope[0][7] ← stack[0]
// 60 PUSH_SCOPE → stack[0] = scope
// 60 GET_PROP_NAME stack[0] ← stack[0]["onloadend"]
// 63 SET_VAR scope[0][8] ← stack[0]
// 66 PUSH_SCOPE → stack[0] = scope
// 66 GET_PROP_NAME stack[0] ← stack[0]["onloadstart"]
// 69 SET_VAR scope[0][9] ← stack[0]
// 72 PUSH_SCOPE → stack[0] = scope
// 72 GET_PROP_NAME stack[0] ← stack[0]["onprogress"]
// 75 SET_VAR scope[0][10] ← stack[0]
// 78 PUSH_SCOPE → stack[0] = scope
// 78 GET_PROP_NAME stack[0] ← stack[0]["ontimeout"]
// 81 SET_VAR scope[0][11] ← stack[0]
// 84 NEW_OBJECT → stack[0] = {}
// 85 SET_VAR scope[0][12] ← stack[0]
// 87 PUSH_CONST → stack[0] = 0
// 90 SET_VAR scope[0][13] ← stack[0]
// 93 GET_VAR → stack[0] = scope[0][13]
// 96 GET_VAR → stack[1] = scope[1][7]
// 98 GET_PROP_NAME stack[1] ← stack[1]["length"]
// 101 LESS_THAN stack[0] = stack[0] < stack[1]
// 101 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=130
// 104 GET_VAR → stack[0] = scope[0][12]
// 107 GET_VAR → stack[1] = scope[1][7]
// 110 GET_VAR → stack[2] = scope[0][13]
// 113 GET_PROP stack[1] = stack[1][stack[2]]
// 114 PUSH_SCOPE → stack[2] = scope
// 114 GET_PROP_NAME stack[2] ← stack[2]["upload"]
// 117 GET_VAR → stack[3] = scope[1][7]
// 120 GET_VAR → stack[4] = scope[0][13]
// 123 GET_PROP stack[3] = stack[3][stack[4]]
// 124 GET_PROP stack[2] = stack[2][stack[3]]
// 125 SET_PROP stack[0][stack[1]] = stack[2]
// 125 PUSH_SCOPE_REF → stack[0] = scope[0], stack[1] = 13
// 129 POST_INC stack[0] = stack[0][stack[1]]++ (old value)
// 130 POP stack[0]
// 130 JUMP → JUMP_TO=91
// 133 GET_VAR → stack[0] = scope[3][3]
// 135 GET_PROP_NAME stack[0] ← stack[0]["msStatus"]
// 138 SET_VAR scope[0][14] ← stack[0]
// 141 PUSH_UNDEFINED → stack[0] = undefined
// 142 GET_VAR → stack[1] = scope[3][9]
// 145 PUSH_SCOPE → stack[2] = scope
// 145 GET_PROP_NAME stack[2] ← stack[2]["_byted_url"]
// 148 PUSH_SCOPE → stack[3] = scope
// 148 GET_PROP_NAME stack[3] ← stack[3]["_byted_body"]
// 151 CALL func.apply(thisArg, [2 args]) → stack[0]
// 153 SET_VAR scope[0][15] ← stack[0]
// 156 PUSH_SCOPE → stack[0] = scope
// 156 GET_PROP_NAME stack[0] ← stack[0]["_byted_intercept_list"]
// 158 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=168
// 161 PUSH_SCOPE → stack[0] = scope
// 161 GET_PROP_NAME stack[0] ← stack[0]["_byted_intercept_list"]
// 163 GET_PROP_NAME stack[0] ← stack[0]["0"]
// 165 GET_PROP_NAME stack[0] ← stack[0]["func"]
// 167 PUSH_STRING → stack[1] = "open"
// 170 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 170 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=172
// 173 PUSH_NULL → stack[0] = null
// 174 RETURN stack[0]
// 175 PUSH_SCOPE → stack[0] = scope
// 175 GET_PROP_NAME stack[0] ← stack[0]["_byted_intercept_list"]
// 178 SET_VAR scope[0][16] ← stack[0]
// 180 PUSH_CONST → stack[0] = 0
// 183 SET_VAR scope[0][17] ← stack[0]
// 186 GET_VAR → stack[0] = scope[0][17]
// 189 GET_VAR → stack[1] = scope[0][16]
// 191 GET_PROP_NAME stack[1] ← stack[1]["length"]
// 194 LESS_THAN stack[0] = stack[0] < stack[1]
// 194 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=275
// 197 GET_VAR → stack[0] = scope[0][17]
// 199 PUSH_CONST → stack[1] = 0
// 202 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 202 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=241
// 205 GET_VAR → stack[0] = scope[0][16]
// 208 GET_VAR → stack[1] = scope[0][17]
// 211 GET_PROP stack[0] = stack[0][stack[1]]
// 211 GET_PROP_NAME stack[0] ← stack[0]["arguments"]
// 214 GET_VAR → stack[1] = scope[0][15]
// 216 SET_GLOBAL_PROP stack[1]["1"] ← stack[0]
// 219 PUSH_SCOPE → stack[0] = scope
// 220 PUSH_TRUE → stack[1] = true
// 220 SET_GLOBAL_PROP stack[1]["_send"] ← stack[0]
// 223 GET_VAR → stack[0] = scope[1][3]
// 226 DUP → stack[1] = stack[0]
// 226 GET_PROP_NAME stack[1] ← stack[1]["apply"]
// 229 PUSH_SCOPE → stack[2] = scope
// 230 GET_VAR → stack[3] = scope[0][16]
// 233 GET_VAR → stack[4] = scope[0][17]
// 236 GET_PROP stack[3] = stack[3][stack[4]]
// 236 GET_PROP_NAME stack[3] ← stack[3]["arguments"]
// 239 CALL func.apply(thisArg, [2 args]) → stack[0]
// 241 POP stack[0]
// 241 JUMP → JUMP_TO=269
// 244 PUSH_SCOPE → stack[0] = scope
// 245 GET_VAR → stack[1] = scope[0][16]
// 248 GET_VAR → stack[2] = scope[0][17]
// 251 GET_PROP stack[1] = stack[1][stack[2]]
// 251 GET_PROP_NAME stack[1] ← stack[1]["func"]
// 254 GET_PROP stack[0] = stack[0][stack[1]]
// 255 DUP → stack[1] = stack[0]
// 255 GET_PROP_NAME stack[1] ← stack[1]["apply"]
// 258 PUSH_SCOPE → stack[2] = scope
// 259 GET_VAR → stack[3] = scope[0][16]
// 262 GET_VAR → stack[4] = scope[0][17]
// 265 GET_PROP stack[3] = stack[3][stack[4]]
// 265 GET_PROP_NAME stack[3] ← stack[3]["arguments"]
// 268 CALL func.apply(thisArg, [2 args]) → stack[0]
// 270 POP stack[0]
// 270 PUSH_SCOPE_REF → stack[0] = scope[0], stack[1] = 17
// 274 POST_INC stack[0] = stack[0][stack[1]]++ (old value)
// 275 POP stack[0]
// 275 JUMP → JUMP_TO=184
// 278 PUSH_SCOPE → stack[0] = scope
// 278 GET_PROP_NAME stack[0] ← stack[0]["_overrideMimeTypeArgs"]
// 280 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=293
// 283 PUSH_SCOPE → stack[0] = scope
// 283 GET_PROP_NAME stack[0] ← stack[0]["overrideMimeType"]
// 286 DUP → stack[1] = stack[0]
// 286 GET_PROP_NAME stack[1] ← stack[1]["apply"]
// 289 PUSH_SCOPE → stack[2] = scope
// 290 PUSH_SCOPE → stack[3] = scope
// 290 GET_PROP_NAME stack[3] ← stack[3]["_overrideMimeTypeArgs"]
// 293 CALL func.apply(thisArg, [2 args]) → stack[0]
// 295 POP stack[0]
// 296 PUSH_SCOPE → stack[0] = scope
// 296 PUSH_STRING → stack[1] = "_byted_intercept_list"
// 299 DELETE_PROP stack[0] = delete stack[0][stack[1]
// 300 POP stack[0]
// 301 GET_VAR → stack[0] = scope[3][1]
// 303 GET_PROP_NAME stack[0] ← stack[0]["sdi"]
// 305 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=323
// 308 PUSH_SCOPE → stack[0] = scope
// 309 DUP → stack[1] = stack[0]
// 309 GET_PROP_NAME stack[1] ← stack[1]["setRequestHeader"]
// 312 GET_VAR → stack[2] = scope[3][0]
// 314 GET_PROP_NAME stack[2] ← stack[2]["secInfoHeader"]
// 317 PUSH_UNDEFINED → stack[3] = undefined
// 318 GET_VAR → stack[4] = scope[3][2]
// 321 CALL func.apply(thisArg, [0 args]) → stack[3]
// 323 CALL func.apply(thisArg, [2 args]) → stack[0]
// 325 POP stack[0]
// 326 GET_VAR → stack[0] = scope[0][3]
// 328 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=343
// 331 PUSH_SCOPE → stack[0] = scope
// 332 DUP → stack[1] = stack[0]
// 332 GET_PROP_NAME stack[1] ← stack[1]["setRequestHeader"]
// 335 GET_VAR → stack[2] = scope[3][0]
// 337 GET_PROP_NAME stack[2] ← stack[2]["googleRecaptcha"]
// 340 GET_VAR → stack[3] = scope[0][3]
// 343 CALL func.apply(thisArg, [2 args]) → stack[0]
// 345 POP stack[0]
// 346 PUSH_SCOPE → stack[0] = scope
// 347 GET_VAR → stack[1] = scope[0][4]
// 349 SET_GLOBAL_PROP stack[1]["onreadystatechange"] ← stack[0]
// 352 PUSH_SCOPE → stack[0] = scope
// 353 GET_VAR → stack[1] = scope[0][5]
// 355 SET_GLOBAL_PROP stack[1]["onabort"] ← stack[0]
// 358 PUSH_SCOPE → stack[0] = scope
// 359 GET_VAR → stack[1] = scope[0][6]
// 361 SET_GLOBAL_PROP stack[1]["onerror"] ← stack[0]
// 364 PUSH_SCOPE → stack[0] = scope
// 364 PUSH_FUNCTION → stack[1] = function[68]
// 366 SET_GLOBAL_PROP stack[1]["onload"] ← stack[0]
// 369 PUSH_SCOPE → stack[0] = scope
// 370 GET_VAR → stack[1] = scope[0][8]
// 372 SET_GLOBAL_PROP stack[1]["onloadend"] ← stack[0]
// 375 PUSH_SCOPE → stack[0] = scope
// 376 GET_VAR → stack[1] = scope[0][9]
// 378 SET_GLOBAL_PROP stack[1]["onloadstart"] ← stack[0]
// 381 PUSH_SCOPE → stack[0] = scope
// 382 GET_VAR → stack[1] = scope[0][10]
// 384 SET_GLOBAL_PROP stack[1]["onprogress"] ← stack[0]
// 387 PUSH_SCOPE → stack[0] = scope
// 388 GET_VAR → stack[1] = scope[0][11]
// 390 SET_GLOBAL_PROP stack[1]["ontimeout"] ← stack[0]
// 392 PUSH_CONST → stack[0] = 0
// 395 SET_VAR scope[0][18] ← stack[0]
// 398 GET_VAR → stack[0] = scope[0][18]
// 401 GET_VAR → stack[1] = scope[1][7]
// 403 GET_PROP_NAME stack[1] ← stack[1]["length"]
// 406 LESS_THAN stack[0] = stack[0] < stack[1]
// 406 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=435
// 409 PUSH_SCOPE → stack[0] = scope
// 409 GET_PROP_NAME stack[0] ← stack[0]["upload"]
// 412 GET_VAR → stack[1] = scope[1][7]
// 415 GET_VAR → stack[2] = scope[0][18]
// 418 GET_PROP stack[1] = stack[1][stack[2]]
// 419 GET_VAR → stack[2] = scope[0][12]
// 422 GET_VAR → stack[3] = scope[1][7]
// 425 GET_VAR → stack[4] = scope[0][18]
// 428 GET_PROP stack[3] = stack[3][stack[4]]
// 429 GET_PROP stack[2] = stack[2][stack[3]]
// 430 SET_PROP stack[0][stack[1]] = stack[2]
// 430 PUSH_SCOPE_REF → stack[0] = scope[0], stack[1] = 18
// 434 POST_INC stack[0] = stack[0][stack[1]]++ (old value)
// 435 POP stack[0]
// 435 JUMP → JUMP_TO=396
// 438 GET_VAR → stack[0] = scope[1][5]
// 441 DUP → stack[1] = stack[0]
// 441 GET_PROP_NAME stack[1] ← stack[1]["apply"]
// 444 PUSH_SCOPE → stack[2] = scope
// 445 GET_VAR → stack[3] = scope[0][1]
// 448 CALL func.apply(thisArg, [2 args]) → stack[0]
// 450 RETURN stack[0]
