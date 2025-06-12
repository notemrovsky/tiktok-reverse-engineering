// 0 PUSH_CONST → stack[0] = 0
// 3 SET_VAR scope[0][5] ← stack[0]
// 5 PUSH_CONST → stack[0] = 0
// 8 SET_VAR scope[0][6] ← stack[0]
// 11 GET_VAR → stack[0] = scope[0][2]
// 13 GET_PROP_NAME stack[0] ← stack[0]["length"]
// 16 GET_VAR → stack[1] = scope[0][3]
// 19 GREATER_THAN stack[0] = stack[0] > stack[1]
// 19 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=206
// 22 NEW_ARRAY → stack[0] = [...top 0 elements]
// 24 SET_VAR scope[0][7] ← stack[0]
// 26 PUSH_CONST → stack[0] = 0
// 29 SET_VAR scope[0][8] ← stack[0]
// 32 GET_VAR → stack[0] = scope[0][8]
// 35 GET_VAR → stack[1] = scope[0][2]
// 37 GET_PROP_NAME stack[1] ← stack[1]["length"]
// 39 PUSH_CONST → stack[2] = 1
// 42 SUB stack[1] = stack[1] - stack[2]
// 43 LESS_THAN stack[0] = stack[0] < stack[1]
// 43 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=169
// 46 GET_VAR → stack[0] = scope[0][2]
// 49 GET_VAR → stack[1] = scope[0][8]
// 51 PUSH_CONST → stack[2] = 1
// 54 ADD stack[1] = stack[1] + stack[2]
// 55 GET_PROP stack[0] = stack[0][stack[1]]
// 56 SET_VAR scope[0][9] ← stack[0]
// 59 GET_VAR → stack[0] = scope[0][2]
// 62 GET_VAR → stack[1] = scope[0][8]
// 65 GET_PROP stack[0] = stack[0][stack[1]]
// 66 SET_VAR scope[0][10] ← stack[0]
// 69 GET_VAR → stack[0] = scope[0][9]
// 71 GET_PROP_NAME stack[0] ← stack[0]["d"]
// 74 GET_VAR → stack[1] = scope[0][10]
// 76 GET_PROP_NAME stack[1] ← stack[1]["d"]
// 79 SUB stack[0] = stack[0] - stack[1]
// 80 SET_VAR scope[0][11] ← stack[0]
// 83 GET_VAR → stack[0] = scope[0][11]
// 85 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=162
// 88 GET_VAR → stack[0] = scope[0][4]
// 90 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=107
// 93 GET_VAR → stack[0] = scope[0][7]
// 96 DUP → stack[1] = stack[0]
// 96 GET_PROP_NAME stack[1] ← stack[1]["push"]
// 98 PUSH_CONST → stack[2] = 1
// 101 GET_VAR → stack[3] = scope[0][11]
// 104 DIV stack[2] = stack[2] / stack[3]
// 105 CALL func.apply(thisArg, [1 args]) → stack[0]
// 107 POP stack[0]
// 107 JUMP → JUMP_TO=163
// 110 GET_VAR → stack[0] = scope[0][7]
// 113 DUP → stack[1] = stack[0]
// 113 GET_PROP_NAME stack[1] ← stack[1]["push"]
// 115 GET_GLOBAL → stack[2] = Math
// 118 DUP → stack[3] = stack[2]
// 118 GET_PROP_NAME stack[3] ← stack[3]["sqrt"]
// 121 PUSH_UNDEFINED → stack[4] = undefined
// 122 GET_VAR → stack[5] = scope[1][9]
// 125 GET_VAR → stack[6] = scope[0][9]
// 127 GET_PROP_NAME stack[6] ← stack[6]["x"]
// 130 GET_VAR → stack[7] = scope[0][10]
// 132 GET_PROP_NAME stack[7] ← stack[7]["x"]
// 135 SUB stack[6] = stack[6] - stack[7]
// 136 CALL func.apply(thisArg, [1 args]) → stack[4]
// 138 PUSH_UNDEFINED → stack[5] = undefined
// 139 GET_VAR → stack[6] = scope[1][9]
// 142 GET_VAR → stack[7] = scope[0][9]
// 144 GET_PROP_NAME stack[7] ← stack[7]["y"]
// 147 GET_VAR → stack[8] = scope[0][10]
// 149 GET_PROP_NAME stack[8] ← stack[8]["y"]
// 152 SUB stack[7] = stack[7] - stack[8]
// 153 CALL func.apply(thisArg, [1 args]) → stack[5]
// 155 ADD stack[4] = stack[4] + stack[5]
// 156 CALL func.apply(thisArg, [1 args]) → stack[2]
// 158 GET_VAR → stack[3] = scope[0][11]
// 161 DIV stack[2] = stack[2] / stack[3]
// 162 CALL func.apply(thisArg, [1 args]) → stack[0]
// 164 POP stack[0]
// 164 PUSH_SCOPE_REF → stack[0] = scope[0], stack[1] = 8
// 168 POST_INC stack[0] = stack[0][stack[1]]++ (old value)
// 169 POP stack[0]
// 169 JUMP → JUMP_TO=30
// 172 PUSH_UNDEFINED → stack[0] = undefined
// 173 GET_VAR → stack[1] = scope[1][12]
// 176 GET_VAR → stack[2] = scope[0][7]
// 179 CALL func.apply(thisArg, [1 args]) → stack[0]
// 181 SET_VAR scope[0][5] ← stack[0]
// 184 PUSH_UNDEFINED → stack[0] = undefined
// 185 GET_VAR → stack[1] = scope[1][13]
// 188 GET_VAR → stack[2] = scope[0][7]
// 191 CALL func.apply(thisArg, [1 args]) → stack[0]
// 193 SET_VAR scope[0][6] ← stack[0]
// 196 GET_VAR → stack[0] = scope[0][6]
// 198 PUSH_CONST → stack[1] = 0
// 201 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 201 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=206
// 203 PUSH_MAGIC_NUMBER → stack[0] = 0.01
// 206 SET_VAR scope[0][6] ← stack[0]
// 209 GET_VAR → stack[0] = scope[0][5]
// 212 GET_VAR → stack[1] = scope[0][6]
// 215 NEW_ARRAY → stack[0] = [...top 2 elements]
// 217 RETURN stack[0]
