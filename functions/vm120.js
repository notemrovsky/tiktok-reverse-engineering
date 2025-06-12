// 1 GET_VAR → stack[0] = scope[0][1]
// 3 GET_PROP_NAME stack[0] ← stack[0]["length"]
// 5 PUSH_CONST → stack[1] = 3
// 8 GREATER_THAN stack[0] = stack[0] > stack[1]
// 8 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=15
// 11 GET_VAR → stack[0] = scope[0][1]
// 13 GET_PROP_NAME stack[0] ← stack[0]["3"]
// 16 PUSH_UNDEFINED → stack[1] = undefined
// 17 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 17 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=24
// 20 GET_VAR → stack[0] = scope[0][1]
// 22 GET_PROP_NAME stack[0] ← stack[0]["3"]
// 24 JUMP → JUMP_TO=26
// 27 PUSH_TRUE → stack[1] = true
// 28 SET_VAR scope[0][5] ← stack[1]
// 31 GET_VAR → stack[1] = scope[1][2]
// 34 SET_VAR scope[0][6] ← stack[1]
// 37 GET_VAR → stack[1] = scope[0][2]
// 40 SET_VAR scope[0][7] ← stack[1]
// 43 GET_VAR → stack[1] = scope[0][5]
// 45 JUMP_IF_FALSE if (!stack[1]) JUMP_TO=92
// 47 GET_GLOBAL → stack[1] = String
// 49 GET_PROP_NAME stack[1] ← stack[1]["fromCharCode"]
// 52 DUP → stack[2] = stack[1]
// 52 GET_PROP_NAME stack[2] ← stack[2]["apply"]
// 55 PUSH_NULL → stack[3] = null
// 56 PUSH_UNDEFINED → stack[4] = undefined
// 57 GET_VAR → stack[5] = scope[2][4]
// 60 GET_VAR → stack[6] = scope[0][2]
// 63 CALL func.apply(thisArg, [1 args]) → stack[4]
// 65 CALL func.apply(thisArg, [2 args]) → stack[1]
// 67 SET_VAR scope[0][7] ← stack[1]
// 70 GET_VAR → stack[1] = scope[0][7]
// 72 GET_PROP_NAME stack[1] ← stack[1]["length"]
// 75 GET_VAR → stack[2] = scope[0][2]
// 77 GET_PROP_NAME stack[2] ← stack[2]["length"]
// 80 LESS_THAN stack[1] = stack[1] < stack[2]
// 80 JUMP_IF_FALSE if (!stack[1]) JUMP_TO=92
// 83 GET_VAR → stack[1] = scope[1][3]
// 86 SET_VAR scope[0][6] ← stack[1]
// 89 GET_VAR → stack[1] = scope[0][7]
// 92 SET_VAR scope[0][2] ← stack[1]
// 94 GET_GLOBAL → stack[1] = String
// 97 DUP → stack[2] = stack[1]
// 97 GET_PROP_NAME stack[2] ← stack[2]["fromCharCode"]
// 99 PUSH_CONST → stack[3] = 255
// 102 GET_VAR → stack[4] = scope[0][3]
// 104 PUSH_CONST → stack[5] = 6
// 107 LEFT_SHIFT stack[4] = stack[4] << stack[5]
// 108 GET_VAR → stack[5] = scope[1][4]
// 110 PUSH_CONST → stack[6] = 3
// 113 LEFT_SHIFT stack[5] = stack[5] << stack[6]
// 114 BITWISE_OR stack[4] = stack[4] | stack[5]
// 115 GET_VAR → stack[5] = scope[0][6]
// 118 BITWISE_OR stack[4] = stack[4] | stack[5]
// 119 BITWISE_AND stack[3] = stack[3] & stack[4]
// 120 CALL func.apply(thisArg, [1 args]) → stack[1]
// 122 SET_VAR scope[0][8] ← stack[1]
// 125 PUSH_UNDEFINED → stack[1] = undefined
// 126 GET_VAR → stack[2] = scope[1][6]
// 129 CALL func.apply(thisArg, [0 args]) → stack[1]
// 131 SET_VAR scope[0][9] ← stack[1]
// 134 GET_VAR → stack[1] = scope[0][9]
// 136 GET_PROP_NAME stack[1] ← stack[1]["key"]
// 139 SET_VAR scope[0][10] ← stack[1]
// 142 GET_VAR → stack[1] = scope[0][9]
// 144 GET_PROP_NAME stack[1] ← stack[1]["rounds"]
// 147 SET_VAR scope[0][11] ← stack[1]
// 150 GET_VAR → stack[1] = scope[0][9]
// 152 GET_PROP_NAME stack[1] ← stack[1]["keyString"]
// 155 SET_VAR scope[0][12] ← stack[1]
// 158 PUSH_UNDEFINED → stack[1] = undefined
// 159 GET_VAR → stack[2] = scope[2][6]
// 162 GET_VAR → stack[3] = scope[0][10]
// 165 GET_VAR → stack[4] = scope[0][11]
// 168 GET_VAR → stack[5] = scope[0][2]
// 171 CALL func.apply(thisArg, [3 args]) → stack[1]
// 173 SET_VAR scope[0][13] ← stack[1]
// 176 PUSH_UNDEFINED → stack[1] = undefined
// 177 GET_VAR → stack[2] = scope[1][5]
// 180 GET_VAR → stack[3] = scope[0][13]
// 183 GET_VAR → stack[4] = scope[0][12]
// 186 CALL func.apply(thisArg, [2 args]) → stack[1]
// 188 SET_VAR scope[0][13] ← stack[1]
// 191 GET_VAR → stack[1] = scope[0][8]
// 194 GET_VAR → stack[2] = scope[0][13]
// 197 ADD stack[1] = stack[1] + stack[2]
// 198 SET_VAR scope[0][14] ← stack[1]
// 201 PUSH_UNDEFINED → stack[1] = undefined
// 202 GET_VAR → stack[2] = scope[2][2]
// 205 GET_VAR → stack[3] = scope[0][14]
// 208 GET_VAR → stack[4] = scope[0][4]
// 211 CALL func.apply(thisArg, [2 args]) → stack[1]
// 213 RETURN stack[1]
