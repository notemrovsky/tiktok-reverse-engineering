// 1 GET_VAR → stack[0] = scope[4][2]
// 3 PUSH_CONST → stack[1] = 0
// 6 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 6 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=11
// 8 PUSH_CONST → stack[0] = 2
// 11 SET_VAR scope[5][7] ← stack[0]
// 14 GET_VAR → stack[0] = scope[1][2]
// 17 DUP → stack[1] = stack[0]
// 17 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 19 PUSH_STRING → stack[2] = "webmssdk_ex"
// 22 CALL func.apply(thisArg, [1 args]) → stack[0]
// 23 PUSH_CONST → stack[1] = 1
// 26 NEGATE stack[1] = -stack[1]
// 27 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 27 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=105
// 29 GET_GLOBAL → stack[0] = window
// 31 GET_PROP_NAME stack[0] ← stack[0]["_xex"]
// 33 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=39
// 35 GET_GLOBAL → stack[0] = window
// 37 GET_PROP_NAME stack[0] ← stack[0]["_xex"]
// 39 GET_PROP_NAME stack[0] ← stack[0]["i"]
// 41 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=105
// 43 GET_GLOBAL → stack[0] = window
// 45 GET_PROP_NAME stack[0] ← stack[0]["_mssdk"]
// 47 GET_PROP_NAME stack[0] ← stack[0]["cacheOpts"]
// 49 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=105
// 51 GET_GLOBAL → stack[0] = Object
// 54 DUP → stack[1] = stack[0]
// 54 GET_PROP_NAME stack[1] ← stack[1]["values"]
// 56 GET_GLOBAL → stack[2] = window
// 58 GET_PROP_NAME stack[2] ← stack[2]["_mssdk"]
// 60 GET_PROP_NAME stack[2] ← stack[2]["cacheOpts"]
// 63 CALL func.apply(thisArg, [1 args]) → stack[0]
// 65 SET_VAR scope[0][2] ← stack[0]
// 67 PUSH_CONST → stack[0] = 0
// 70 SET_VAR scope[0][3] ← stack[0]
// 73 GET_VAR → stack[0] = scope[0][3]
// 76 GET_VAR → stack[1] = scope[0][2]
// 78 GET_PROP_NAME stack[1] ← stack[1]["length"]
// 81 LESS_THAN stack[0] = stack[0] < stack[1]
// 81 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=105
// 83 GET_GLOBAL → stack[0] = window
// 85 GET_PROP_NAME stack[0] ← stack[0]["_xex"]
// 88 DUP → stack[1] = stack[0]
// 88 GET_PROP_NAME stack[1] ← stack[1]["i"]
// 91 GET_VAR → stack[2] = scope[0][2]
// 94 GET_VAR → stack[3] = scope[0][3]
// 97 GET_PROP stack[2] = stack[2][stack[3]]
// 98 CALL func.apply(thisArg, [1 args]) → stack[0]
// 100 POP stack[0]
// 100 PUSH_SCOPE_REF → stack[0] = scope[0], stack[1] = 3
// 104 POST_INC stack[0] = stack[0][stack[1]]++ (old value)
// 105 POP stack[0]
// 105 JUMP → JUMP_TO=71
// 108 PUSH_UNDEFINED → stack[0] = undefined
// 109 RETURN stack[0]
