// 1 GET_VAR → stack[0] = scope[0][2]
// 3 PUSH_CONST → stack[1] = 513
// 6 LESS_THAN stack[0] = stack[0] < stack[1]
// 6 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=12 else POP
// 9 GET_VAR → stack[0] = scope[0][2]
// 11 PUSH_CONST → stack[1] = 519
// 14 GREATER_THAN stack[0] = stack[0] > stack[1]
// 14 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=22
// 17 PUSH_UNDEFINED → stack[0] = undefined
// 17 GET_GLOBAL → stack[1] = Error
// 19 PUSH_STRING → stack[2] = "unsupport privacy mode"
// 22 CALL func.apply(thisArg, [1 args]) → stack[0]
// 24 THROW stack[0]
// 25 GET_VAR → stack[0] = scope[2][0]
// 28 GET_VAR → stack[1] = scope[0][2]
// 30 SET_GLOBAL_PROP stack[1]["umode"] ← stack[0]
// 32 GET_GLOBAL → stack[0] = window
// 34 GET_PROP_NAME stack[0] ← stack[0]["_mssdk"]
// 36 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=42
// 38 GET_GLOBAL → stack[0] = window
// 40 GET_PROP_NAME stack[0] ← stack[0]["_mssdk"]
// 42 GET_PROP_NAME stack[0] ← stack[0]["cacheOpts"]
// 44 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=56
// 46 GET_GLOBAL → stack[0] = window
// 48 GET_PROP_NAME stack[0] ← stack[0]["_mssdk"]
// 50 GET_PROP_NAME stack[0] ← stack[0]["cacheOpts"]
// 53 GET_VAR → stack[1] = scope[2][0]
// 55 GET_PROP_NAME stack[1] ← stack[1]["aid"]
// 58 GET_PROP stack[0] = stack[0][stack[1]]
// 58 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=75
// 60 GET_GLOBAL → stack[0] = window
// 62 GET_PROP_NAME stack[0] ← stack[0]["_mssdk"]
// 64 GET_PROP_NAME stack[0] ← stack[0]["cacheOpts"]
// 67 GET_VAR → stack[1] = scope[2][0]
// 69 GET_PROP_NAME stack[1] ← stack[1]["aid"]
// 72 GET_PROP stack[0] = stack[0][stack[1]]
// 73 GET_VAR → stack[1] = scope[0][2]
// 75 SET_GLOBAL_PROP stack[1]["mode"] ← stack[0]
// 77 GET_GLOBAL → stack[0] = window
// 79 GET_PROP_NAME stack[0] ← stack[0]["_mssdk"]
// 82 GET_VAR → stack[1] = scope[0][2]
// 84 SET_GLOBAL_PROP stack[1]["umode"] ← stack[0]
// 87 PUSH_UNDEFINED → stack[0] = undefined
// 88 GET_VAR → stack[1] = scope[2][14]
// 91 GET_VAR → stack[2] = scope[2][8]
// 94 GET_VAR → stack[3] = scope[2][9]
// 96 GET_PROP_NAME stack[3] ← stack[3]["slardarErrs"]
// 99 CALL func.apply(thisArg, [2 args]) → stack[0]
// 101 POP stack[0]
// 102 PUSH_UNDEFINED → stack[0] = undefined
// 103 GET_VAR → stack[1] = scope[2][16]
// 106 CALL func.apply(thisArg, [0 args]) → stack[0]
// 108 POP stack[0]
// 109 GET_VAR → stack[0] = scope[2][4]
// 112 DUP → stack[1] = stack[0]
// 112 GET_PROP_NAME stack[1] ← stack[1]["bind"]
// 115 PUSH_NULL → stack[2] = null
// 116 GET_VAR → stack[3] = scope[2][8]
// 119 GET_VAR → stack[4] = scope[2][9]
// 121 GET_PROP_NAME stack[4] ← stack[4]["slardarErrs"]
// 124 GET_VAR → stack[5] = scope[2][0]
// 127 PUSH_FALSE → stack[6] = false
// 128 PUSH_NULL → stack[7] = null
// 129 CALL func.apply(thisArg, [6 args]) → stack[0]
// 131 SET_VAR scope[0][3] ← stack[0]
// 134 PUSH_UNDEFINED → stack[0] = undefined
// 135 GET_VAR → stack[1] = scope[2][15]
// 138 GET_VAR → stack[2] = scope[0][3]
// 141 CALL func.apply(thisArg, [1 args]) → stack[0]
// 143 POP stack[0]
// 144 PUSH_UNDEFINED → stack[0] = undefined
// 144 GET_GLOBAL → stack[1] = setTimeout
// 146 PUSH_FUNCTION → stack[2] = function[7]
// 148 PUSH_CONST → stack[3] = 8
// 150 PUSH_CONST → stack[4] = 1000
// 153 MUL stack[3] = stack[3] * stack[4]
// 154 CALL func.apply(thisArg, [2 args]) → stack[0]
// 156 POP stack[0]
// 157 PUSH_UNDEFINED → stack[0] = undefined
// 158 RETURN stack[0]
