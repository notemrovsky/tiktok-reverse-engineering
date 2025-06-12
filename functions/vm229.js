// 1 NEW_ARRAY → stack[0] = [...top 0 elements]
// 3 SET_VAR scope[0][3] ← stack[0]
// 6 PUSH_UNDEFINED → stack[0] = undefined
// 7 GET_VAR → stack[1] = scope[1][2]
// 10 GET_VAR → stack[2] = scope[0][3]
// 13 CALL func.apply(thisArg, [1 args]) → stack[0]
// 15 SET_VAR scope[0][4] ← stack[0]
// 17 GET_GLOBAL → stack[0] = Object
// 20 DUP → stack[1] = stack[0]
// 20 GET_PROP_NAME stack[1] ← stack[1]["create"]
// 23 PUSH_NULL → stack[2] = null
// 24 CALL func.apply(thisArg, [1 args]) → stack[0]
// 26 SET_VAR scope[0][5] ← stack[0]
// 28 PUSH_CONST → stack[0] = 0
// 31 SET_VAR scope[0][6] ← stack[0]
// 34 GET_VAR → stack[0] = scope[0][6]
// 36 PUSH_CONST → stack[1] = 256
// 39 LESS_THAN stack[0] = stack[0] < stack[1]
// 39 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=63
// 42 GET_VAR → stack[0] = scope[0][5]
// 44 GET_GLOBAL → stack[1] = String
// 47 DUP → stack[2] = stack[1]
// 47 GET_PROP_NAME stack[2] ← stack[2]["fromCharCode"]
// 50 GET_VAR → stack[3] = scope[0][6]
// 53 CALL func.apply(thisArg, [1 args]) → stack[1]
// 55 GET_VAR → stack[2] = scope[0][6]
// 58 SET_PROP stack[0][stack[1]] = stack[2]
// 58 PUSH_SCOPE_REF → stack[0] = scope[0], stack[1] = 6
// 62 PRE_INC stack[0] = ++stack[1][stack[2]] (new value)
// 63 POP stack[0]
// 63 JUMP → JUMP_TO=32
// 65 PUSH_CONST → stack[0] = 8
// 68 SET_VAR scope[0][7] ← stack[0]
// 70 PUSH_CONST → stack[0] = 255
// 73 SET_VAR scope[0][8] ← stack[0]
// 75 PUSH_CONST → stack[0] = 0
// 78 SET_VAR scope[0][9] ← stack[0]
// 81 GET_VAR → stack[0] = scope[0][9]
// 84 GET_VAR → stack[1] = scope[0][2]
// 86 GET_PROP_NAME stack[1] ← stack[1]["length"]
// 89 LESS_THAN stack[0] = stack[0] < stack[1]
// 89 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=247
// 92 GET_VAR → stack[0] = scope[0][2]
// 95 GET_VAR → stack[1] = scope[0][9]
// 98 GET_PROP stack[0] = stack[0][stack[1]]
// 99 SET_VAR scope[0][10] ← stack[0]
// 102 GET_VAR → stack[0] = scope[0][9]
// 104 PUSH_CONST → stack[1] = 1
// 107 ADD stack[0] = stack[0] + stack[1]
// 108 GET_VAR → stack[1] = scope[0][2]
// 110 GET_PROP_NAME stack[1] ← stack[1]["length"]
// 113 LESS_THAN stack[0] = stack[0] < stack[1]
// 113 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=131
// 116 GET_VAR → stack[0] = scope[0][5]
// 119 GET_VAR → stack[1] = scope[0][10]
// 122 GET_VAR → stack[2] = scope[0][2]
// 125 GET_VAR → stack[3] = scope[0][9]
// 127 PUSH_CONST → stack[4] = 1
// 130 ADD stack[3] = stack[3] + stack[4]
// 131 GET_PROP stack[2] = stack[2][stack[3]]
// 132 ADD stack[1] = stack[1] + stack[2]
// 133 GET_PROP stack[0] = stack[0][stack[1]]
// 133 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=159
// 136 GET_VAR → stack[0] = scope[0][10]
// 139 GET_VAR → stack[1] = scope[0][2]
// 142 GET_VAR → stack[2] = scope[0][9]
// 144 PUSH_CONST → stack[3] = 1
// 147 ADD stack[2] = stack[2] + stack[3]
// 148 GET_PROP stack[1] = stack[1][stack[2]]
// 149 ADD stack[0] = stack[0] + stack[1]
// 149 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 10
// 153 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 154 POP stack[0]
// 154 PUSH_SCOPE_REF → stack[0] = scope[0], stack[1] = 9
// 158 PRE_INC stack[0] = ++stack[1][stack[2]] (new value)
// 159 POP stack[0]
// 159 JUMP → JUMP_TO=100
// 162 GET_VAR → stack[0] = scope[0][4]
// 165 DUP → stack[1] = stack[0]
// 165 GET_PROP_NAME stack[1] ← stack[1]["write"]
// 168 GET_VAR → stack[2] = scope[0][5]
// 171 GET_VAR → stack[3] = scope[0][10]
// 174 GET_PROP stack[2] = stack[2][stack[3]]
// 175 GET_VAR → stack[3] = scope[0][7]
// 178 CALL func.apply(thisArg, [2 args]) → stack[0]
// 180 POP stack[0]
// 181 GET_VAR → stack[0] = scope[0][9]
// 183 PUSH_CONST → stack[1] = 1
// 186 ADD stack[0] = stack[0] + stack[1]
// 187 GET_VAR → stack[1] = scope[0][2]
// 189 GET_PROP_NAME stack[1] ← stack[1]["length"]
// 192 EQUAL stack[0] = stack[0] == stack[1]
// 192 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=194
// 194 JUMP → JUMP_TO=248
// 196 PUSH_SCOPE_REF → stack[0] = scope[0], stack[1] = 8
// 200 PRE_INC stack[0] = ++stack[1][stack[2]] (new value)
// 201 POP stack[0]
// 202 GET_VAR → stack[0] = scope[0][8]
// 205 GET_VAR → stack[1] = scope[0][8]
// 207 PUSH_CONST → stack[2] = 1
// 210 SUB stack[1] = stack[1] - stack[2]
// 211 BITWISE_AND stack[0] = stack[0] & stack[1]
// 211 PUSH_CONST → stack[1] = 0
// 214 EQUAL stack[0] = stack[0] == stack[1]
// 214 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=219
// 216 PUSH_SCOPE_REF → stack[0] = scope[0], stack[1] = 7
// 220 PRE_INC stack[0] = ++stack[1][stack[2]] (new value)
// 221 POP stack[0]
// 222 GET_VAR → stack[0] = scope[0][5]
// 225 GET_VAR → stack[1] = scope[0][10]
// 228 GET_VAR → stack[2] = scope[0][2]
// 231 GET_VAR → stack[3] = scope[0][9]
// 233 PUSH_CONST → stack[4] = 1
// 236 ADD stack[3] = stack[3] + stack[4]
// 237 GET_PROP stack[2] = stack[2][stack[3]]
// 238 ADD stack[1] = stack[1] + stack[2]
// 239 GET_VAR → stack[2] = scope[0][8]
// 242 SET_PROP stack[0][stack[1]] = stack[2]
// 242 PUSH_SCOPE_REF → stack[0] = scope[0], stack[1] = 9
// 246 PRE_INC stack[0] = ++stack[1][stack[2]] (new value)
// 247 POP stack[0]
// 247 JUMP → JUMP_TO=79
// 250 GET_VAR → stack[0] = scope[0][4]
// 253 DUP → stack[1] = stack[0]
// 253 GET_PROP_NAME stack[1] ← stack[1]["finalize"]
// 256 CALL func.apply(thisArg, [0 args]) → stack[0]
// 258 POP stack[0]
// 259 GET_VAR → stack[0] = scope[0][3]
// 262 RETURN stack[0]
