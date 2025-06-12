// 0 PUSH_STRING → stack[0] = "null"
// 3 SET_VAR scope[0][5] ← stack[0]
// 5 PUSH_STRING → stack[0] = "true"
// 8 SET_VAR scope[0][6] ← stack[0]
// 10 PUSH_STRING → stack[0] = "false"
// 13 SET_VAR scope[0][7] ← stack[0]
// 16 GET_VAR → stack[0] = scope[0][4]
// 19 GET_VAR → stack[1] = scope[0][3]
// 22 GET_PROP stack[0] = stack[0][stack[1]]
// 23 SET_VAR scope[0][8] ← stack[0]
// 26 GET_VAR → stack[0] = scope[0][8]
// 29 PUSH_NULL → stack[1] = null
// 30 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 30 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=36
// 33 GET_VAR → stack[0] = scope[0][5]
// 36 RETURN stack[0]
// 36 JUMP → JUMP_TO=212
// 39 GET_VAR → stack[0] = scope[0][8]
// 42 PUSH_TRUE → stack[1] = true
// 43 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 43 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=49
// 46 GET_VAR → stack[0] = scope[0][6]
// 49 RETURN stack[0]
// 49 JUMP → JUMP_TO=212
// 52 GET_VAR → stack[0] = scope[0][8]
// 55 PUSH_FALSE → stack[1] = false
// 56 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 56 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=62
// 59 GET_VAR → stack[0] = scope[0][7]
// 62 RETURN stack[0]
// 62 JUMP → JUMP_TO=212
// 65 GET_VAR → stack[0] = scope[0][8]
// 68 TYPEOF stack[0] = typeof stack[0]
// 68 PUSH_STRING → stack[1] = "string"
// 71 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 71 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=83
// 74 PUSH_UNDEFINED → stack[0] = undefined
// 75 GET_VAR → stack[1] = scope[1][4]
// 78 GET_VAR → stack[2] = scope[0][8]
// 81 CALL func.apply(thisArg, [1 args]) → stack[0]
// 83 RETURN stack[0]
// 83 JUMP → JUMP_TO=212
// 86 GET_VAR → stack[0] = scope[0][8]
// 89 TYPEOF stack[0] = typeof stack[0]
// 89 PUSH_STRING → stack[1] = "number"
// 92 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 92 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=119
// 94 GET_GLOBAL → stack[0] = Number
// 97 DUP → stack[1] = stack[0]
// 97 GET_PROP_NAME stack[1] ← stack[1]["isFinite"]
// 100 GET_VAR → stack[2] = scope[0][8]
// 103 CALL func.apply(thisArg, [1 args]) → stack[0]
// 104 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=113
// 106 PUSH_STRING → stack[0] = ""
// 109 GET_VAR → stack[1] = scope[0][8]
// 112 ADD stack[0] = stack[0] + stack[1]
// 113 RETURN stack[0]
// 113 JUMP → JUMP_TO=118
// 116 GET_VAR → stack[0] = scope[0][5]
// 119 RETURN stack[0]
// 119 JUMP → JUMP_TO=212
// 122 GET_VAR → stack[0] = scope[0][8]
// 125 TYPEOF stack[0] = typeof stack[0]
// 125 PUSH_STRING → stack[1] = "bigint"
// 128 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 128 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=141
// 130 GET_GLOBAL → stack[0] = JSON
// 133 DUP → stack[1] = stack[0]
// 133 GET_PROP_NAME stack[1] ← stack[1]["stringify"]
// 136 GET_VAR → stack[2] = scope[0][8]
// 139 CALL func.apply(thisArg, [1 args]) → stack[0]
// 141 RETURN stack[0]
// 141 JUMP → JUMP_TO=212
// 144 PUSH_UNDEFINED → stack[0] = undefined
// 145 GET_VAR → stack[1] = scope[2][0]
// 148 GET_VAR → stack[2] = scope[0][8]
// 151 CALL func.apply(thisArg, [1 args]) → stack[0]
// 152 PUSH_STRING → stack[1] = "object"
// 155 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 155 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=211
// 158 GET_VAR → stack[0] = scope[0][8]
// 160 GET_PROP_NAME stack[0] ← stack[0]["toJSON"]
// 162 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=173
// 164 GET_GLOBAL → stack[0] = JSON
// 167 DUP → stack[1] = stack[0]
// 167 GET_PROP_NAME stack[1] ← stack[1]["stringify"]
// 170 GET_VAR → stack[2] = scope[0][8]
// 173 CALL func.apply(thisArg, [1 args]) → stack[0]
// 175 RETURN stack[0]
// 175 GET_GLOBAL → stack[0] = Array
// 178 DUP → stack[1] = stack[0]
// 178 GET_PROP_NAME stack[1] ← stack[1]["isArray"]
// 181 GET_VAR → stack[2] = scope[0][8]
// 184 CALL func.apply(thisArg, [1 args]) → stack[0]
// 185 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=198
// 188 PUSH_UNDEFINED → stack[0] = undefined
// 189 GET_VAR → stack[1] = scope[1][7]
// 192 GET_VAR → stack[2] = scope[0][2]
// 195 GET_VAR → stack[3] = scope[0][8]
// 198 CALL func.apply(thisArg, [2 args]) → stack[0]
// 200 RETURN stack[0]
// 201 PUSH_UNDEFINED → stack[0] = undefined
// 202 GET_VAR → stack[1] = scope[1][6]
// 205 GET_VAR → stack[2] = scope[0][2]
// 208 GET_VAR → stack[3] = scope[0][8]
// 211 CALL func.apply(thisArg, [2 args]) → stack[0]
// 213 RETURN stack[0]
// 214 PUSH_UNDEFINED → stack[0] = undefined
// 215 RETURN stack[0]
