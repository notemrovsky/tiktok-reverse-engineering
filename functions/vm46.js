// 1 GET_VAR → stack[0] = scope[1][2]
// 4 PUSH_TRUE → stack[1] = true
// 5 EQUAL stack[0] = stack[0] == stack[1]
// 5 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=7
// 8 PUSH_TRUE → stack[0] = true
// 9 RETURN stack[0]
// 9 GET_GLOBAL → stack[0] = navigator
// 11 GET_PROP_NAME stack[0] ← stack[0]["webdriver"]
// 13 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=15
// 16 PUSH_TRUE → stack[0] = true
// 17 RETURN stack[0]
// 17 PUSH_STRING → stack[0] = "getOwnPropertyNames"
// 19 GET_GLOBAL → stack[1] = Object
// 22 IN stack[0] = stack[0] in stack[1]
// 22 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=66
// 24 GET_GLOBAL → stack[0] = Object
// 27 DUP → stack[1] = stack[0]
// 27 GET_PROP_NAME stack[1] ← stack[1]["getOwnPropertyNames"]
// 29 GET_GLOBAL → stack[2] = navigator
// 32 CALL func.apply(thisArg, [1 args]) → stack[0]
// 34 SET_VAR scope[0][2] ← stack[0]
// 37 GET_VAR → stack[0] = scope[0][2]
// 40 DUP → stack[1] = stack[0]
// 40 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 42 PUSH_STRING → stack[2] = "webdriver"
// 45 CALL func.apply(thisArg, [1 args]) → stack[0]
// 46 PUSH_CONST → stack[1] = 0
// 49 GREATER_EQUAL stack[0] = stack[0] >= stack[1]
// 49 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=62 else POP
// 52 GET_VAR → stack[0] = scope[0][2]
// 55 DUP → stack[1] = stack[0]
// 55 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 57 PUSH_STRING → stack[2] = "languages"
// 60 CALL func.apply(thisArg, [1 args]) → stack[0]
// 61 PUSH_CONST → stack[1] = 0
// 64 GREATER_EQUAL stack[0] = stack[0] >= stack[1]
// 64 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=66
// 67 PUSH_TRUE → stack[0] = true
// 68 RETURN stack[0]
// 68 GET_GLOBAL → stack[0] = window
// 70 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=74
// 72 GET_GLOBAL → stack[0] = window
// 74 GET_PROP_NAME stack[0] ← stack[0]["chrome"]
// 76 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=82
// 78 GET_GLOBAL → stack[0] = window
// 80 GET_PROP_NAME stack[0] ← stack[0]["chrome"]
// 82 GET_PROP_NAME stack[0] ← stack[0]["runtime"]
// 84 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=92
// 86 GET_GLOBAL → stack[0] = window
// 88 GET_PROP_NAME stack[0] ← stack[0]["chrome"]
// 90 GET_PROP_NAME stack[0] ← stack[0]["runtime"]
// 92 GET_PROP_NAME stack[0] ← stack[0]["connect"]
// 94 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=116
// 96 GET_GLOBAL → stack[0] = window
// 98 GET_PROP_NAME stack[0] ← stack[0]["chrome"]
// 100 GET_PROP_NAME stack[0] ← stack[0]["runtime"]
// 103 DUP → stack[1] = stack[0]
// 103 GET_PROP_NAME stack[1] ← stack[1]["connect"]
// 106 CALL func.apply(thisArg, [0 args]) → stack[0]
// 108 PUSH_UNDEFINED → stack[1] = undefined
// 109 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 109 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=111
// 112 PUSH_TRUE → stack[0] = true
// 113 RETURN stack[0]
// 113 JUMP → JUMP_TO=117
// 116 SET_VAR scope[0][13] ← stack[-1]
// 118 PUSH_STRING → stack[-1] = "__webdriver_evaluate"
// 120 PUSH_STRING → stack[0] = "__selenium_evaluate"
// 122 PUSH_STRING → stack[1] = "__webdriver_script_function"
// 124 PUSH_STRING → stack[2] = "__webdriver_script_func"
// 126 PUSH_STRING → stack[3] = "__webdriver_script_fn"
// 128 PUSH_STRING → stack[4] = "__fxdriver_evaluate"
// 130 PUSH_STRING → stack[5] = "__driver_unwrapped"
// 132 PUSH_STRING → stack[6] = "__webdriver_unwrapped"
// 134 PUSH_STRING → stack[7] = "__driver_evaluate"
// 136 PUSH_STRING → stack[8] = "__selenium_unwrapped"
// 138 PUSH_STRING → stack[9] = "__fxdriver_unwrapped"
// 140 PUSH_STRING → stack[10] = "$chrome_asyncScriptInfo"
// 142 PUSH_STRING → stack[11] = "__$webdriverAsyncExecutor"
// 145 NEW_ARRAY → stack[-1] = [...top 13 elements]
// 147 SET_VAR scope[0][3] ← stack[-1]
// 149 PUSH_STRING → stack[-1] = "_selenium"
// 151 PUSH_STRING → stack[0] = "callSelenium"
// 153 PUSH_STRING → stack[1] = "_Selenium_IDE_Recorder"
// 155 PUSH_STRING → stack[2] = "domAutomation"
// 157 PUSH_STRING → stack[3] = "domAutomationController"
// 159 PUSH_STRING → stack[4] = "__webdriverFunc"
// 161 PUSH_STRING → stack[5] = "webdriver"
// 163 PUSH_STRING → stack[6] = "__lastWatirAlert"
// 165 PUSH_STRING → stack[7] = "__lastWatirConfirm"
// 167 PUSH_STRING → stack[8] = "__lastWatirPrompt"
// 169 PUSH_STRING → stack[9] = "_WEBDRIVER_ELEM_CACHE"
// 172 NEW_ARRAY → stack[-1] = [...top 11 elements]
// 174 SET_VAR scope[0][4] ← stack[-1]
// 176 PUSH_CONST → stack[-1] = 0
// 179 SET_VAR scope[0][5] ← stack[-1]
// 182 GET_VAR → stack[-1] = scope[0][5]
// 185 GET_VAR → stack[0] = scope[0][4]
// 187 GET_PROP_NAME stack[0] ← stack[0]["length"]
// 190 LESS_THAN stack[-1] = stack[-1] < stack[0]
// 190 JUMP_IF_FALSE if (!stack[-1]) JUMP_TO=217
// 193 GET_VAR → stack[-1] = scope[0][4]
// 196 GET_VAR → stack[0] = scope[0][5]
// 199 GET_PROP stack[-1] = stack[-1][stack[0]]
// 200 SET_VAR scope[0][6] ← stack[-1]
// 202 GET_GLOBAL → stack[-1] = window
// 205 GET_VAR → stack[0] = scope[0][6]
// 208 GET_PROP stack[-1] = stack[-1][stack[0]]
// 208 JUMP_IF_FALSE if (!stack[-1]) JUMP_TO=210
// 211 PUSH_TRUE → stack[-1] = true
// 212 RETURN stack[-1]
// 212 PUSH_SCOPE_REF → stack[-1] = scope[0], stack[0] = 5
// 216 POST_INC stack[-1] = stack[-1][stack[0]]++ (old value)
// 217 POP stack[-1]
// 217 JUMP → JUMP_TO=180
// 219 PUSH_CONST → stack[-1] = 0
// 222 SET_VAR scope[0][7] ← stack[-1]
// 225 GET_VAR → stack[-1] = scope[0][7]
// 228 GET_VAR → stack[0] = scope[0][3]
// 230 GET_PROP_NAME stack[0] ← stack[0]["length"]
// 233 LESS_THAN stack[-1] = stack[-1] < stack[0]
// 233 JUMP_IF_FALSE if (!stack[-1]) JUMP_TO=262
// 236 GET_VAR → stack[-1] = scope[0][3]
// 239 GET_VAR → stack[0] = scope[0][7]
// 242 GET_PROP stack[-1] = stack[-1][stack[0]]
// 243 SET_VAR scope[0][8] ← stack[-1]
// 245 GET_GLOBAL → stack[-1] = window
// 247 GET_PROP_NAME stack[-1] ← stack[-1]["document"]
// 250 GET_VAR → stack[0] = scope[0][8]
// 253 GET_PROP stack[-1] = stack[-1][stack[0]]
// 253 JUMP_IF_FALSE if (!stack[-1]) JUMP_TO=255
// 256 PUSH_TRUE → stack[-1] = true
// 257 RETURN stack[-1]
// 257 PUSH_SCOPE_REF → stack[-1] = scope[0], stack[0] = 7
// 261 POST_INC stack[-1] = stack[-1][stack[0]]++ (old value)
// 262 POP stack[-1]
// 262 JUMP → JUMP_TO=223
// 264 GET_GLOBAL → stack[-1] = Object
// 267 DUP → stack[0] = stack[-1]
// 267 GET_PROP_NAME stack[0] ← stack[0]["keys"]
// 269 GET_GLOBAL → stack[1] = window
// 271 GET_PROP_NAME stack[1] ← stack[1]["document"]
// 274 CALL func.apply(thisArg, [1 args]) → stack[-1]
// 276 SET_VAR scope[0][9] ← stack[-1]
// 278 PUSH_CONST → stack[-1] = 0
// 281 SET_VAR scope[0][10] ← stack[-1]
// 284 GET_VAR → stack[-1] = scope[0][9]
// 287 SET_VAR scope[0][11] ← stack[-1]
// 290 GET_VAR → stack[-1] = scope[0][10]
// 293 GET_VAR → stack[0] = scope[0][11]
// 295 GET_PROP_NAME stack[0] ← stack[0]["length"]
// 298 LESS_THAN stack[-1] = stack[-1] < stack[0]
// 298 JUMP_IF_FALSE if (!stack[-1]) JUMP_TO=345
// 301 GET_VAR → stack[-1] = scope[0][11]
// 304 GET_VAR → stack[0] = scope[0][10]
// 307 GET_PROP stack[-1] = stack[-1][stack[0]]
// 308 SET_VAR scope[0][12] ← stack[-1]
// 311 GET_VAR → stack[-1] = scope[0][12]
// 314 DUP → stack[0] = stack[-1]
// 314 GET_PROP_NAME stack[0] ← stack[0]["match"]
// 316 GET_GLOBAL → stack[1] = RegExp
// 318 PUSH_STRING → stack[2] = "\$[a-z]dc_"
// 321 FUNCTION_BIND_APPLY → stack[1] = new stack[2](1 args)
// 323 CALL func.apply(thisArg, [1 args]) → stack[-1]
// 324 JUMP_IF_FALSE_OR_POP if (stack[-1]) POP else JUMP_TO=334
// 326 GET_GLOBAL → stack[-1] = window
// 328 GET_PROP_NAME stack[-1] ← stack[-1]["document"]
// 331 GET_VAR → stack[0] = scope[0][12]
// 334 GET_PROP stack[-1] = stack[-1][stack[0]]
// 334 GET_PROP_NAME stack[-1] ← stack[-1]["cache_"]
// 336 JUMP_IF_FALSE if (!stack[-1]) JUMP_TO=338
// 339 PUSH_TRUE → stack[-1] = true
// 340 RETURN stack[-1]
// 340 PUSH_SCOPE_REF → stack[-1] = scope[0], stack[0] = 10
// 344 POST_INC stack[-1] = stack[-1][stack[0]]++ (old value)
// 345 POP stack[-1]
// 345 JUMP → JUMP_TO=288
// 347 GET_GLOBAL → stack[-1] = document
// 349 GET_PROP_NAME stack[-1] ← stack[-1]["cookie"]
// 352 DUP → stack[0] = stack[-1]
// 352 GET_PROP_NAME stack[0] ← stack[0]["indexOf"]
// 354 PUSH_STRING → stack[1] = "ChromeDriverwjers908fljsdf37459fsdfgdfwru="
// 357 CALL func.apply(thisArg, [1 args]) → stack[-1]
// 358 PUSH_CONST → stack[0] = 1
// 361 NEGATE stack[0] = -stack[0]
// 362 GREATER_THAN stack[-1] = stack[-1] > stack[0]
// 362 JUMP_IF_FALSE if (!stack[-1]) JUMP_TO=364
// 365 PUSH_TRUE → stack[-1] = true
// 366 RETURN stack[-1]
// 366 JUMP → JUMP_TO=370
// 369 SET_VAR scope[0][14] ← stack[-2]
// 372 PUSH_FALSE → stack[-2] = false
// 373 RETURN stack[-2]
