// 0 PUSH_STRING → stack[0] = ""
// 3 SET_VAR scope[0][3] ← stack[0]
// 5 PUSH_CONST → stack[0] = 0
// 7 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 4
// 11 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 12 POP stack[0]
// 13 GET_VAR → stack[0] = scope[0][4]
// 16 GET_VAR → stack[1] = scope[0][2]
// 18 GET_PROP_NAME stack[1] ← stack[1]["length"]
// 20 PUSH_CONST → stack[2] = 3
// 23 SUB stack[1] = stack[1] - stack[2]
// 24 LESS_THAN stack[0] = stack[0] < stack[1]
// 24 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=257
// 27 PUSH_UNDEFINED → stack[0] = undefined
// 28 GET_VAR → stack[1] = scope[1][7]
// 31 GET_VAR → stack[2] = scope[0][2]
// 34 DUP → stack[3] = stack[2]
// 34 GET_PROP_NAME stack[3] ← stack[3]["charAt"]
// 37 GET_VAR → stack[4] = scope[0][4]
// 40 CALL func.apply(thisArg, [1 args]) → stack[2]
// 42 CALL func.apply(thisArg, [1 args]) → stack[0]
// 44 SET_VAR scope[0][5] ← stack[0]
// 47 PUSH_UNDEFINED → stack[0] = undefined
// 48 GET_VAR → stack[1] = scope[1][7]
// 51 GET_VAR → stack[2] = scope[0][2]
// 54 DUP → stack[3] = stack[2]
// 54 GET_PROP_NAME stack[3] ← stack[3]["charAt"]
// 57 GET_VAR → stack[4] = scope[0][4]
// 59 PUSH_CONST → stack[5] = 1
// 62 ADD stack[4] = stack[4] + stack[5]
// 63 CALL func.apply(thisArg, [1 args]) → stack[2]
// 65 CALL func.apply(thisArg, [1 args]) → stack[0]
// 67 SET_VAR scope[0][6] ← stack[0]
// 70 PUSH_UNDEFINED → stack[0] = undefined
// 71 GET_VAR → stack[1] = scope[1][7]
// 74 GET_VAR → stack[2] = scope[0][2]
// 77 DUP → stack[3] = stack[2]
// 77 GET_PROP_NAME stack[3] ← stack[3]["charAt"]
// 80 GET_VAR → stack[4] = scope[0][4]
// 82 PUSH_CONST → stack[5] = 2
// 85 ADD stack[4] = stack[4] + stack[5]
// 86 CALL func.apply(thisArg, [1 args]) → stack[2]
// 88 CALL func.apply(thisArg, [1 args]) → stack[0]
// 90 SET_VAR scope[0][7] ← stack[0]
// 93 PUSH_UNDEFINED → stack[0] = undefined
// 94 GET_VAR → stack[1] = scope[1][7]
// 97 GET_VAR → stack[2] = scope[0][2]
// 100 DUP → stack[3] = stack[2]
// 100 GET_PROP_NAME stack[3] ← stack[3]["charAt"]
// 103 GET_VAR → stack[4] = scope[0][4]
// 105 PUSH_CONST → stack[5] = 3
// 108 ADD stack[4] = stack[4] + stack[5]
// 109 CALL func.apply(thisArg, [1 args]) → stack[2]
// 111 CALL func.apply(thisArg, [1 args]) → stack[0]
// 113 SET_VAR scope[0][8] ← stack[0]
// 116 GET_VAR → stack[0] = scope[0][3]
// 118 GET_GLOBAL → stack[1] = String
// 121 DUP → stack[2] = stack[1]
// 121 GET_PROP_NAME stack[2] ← stack[2]["fromCharCode"]
// 124 GET_VAR → stack[3] = scope[0][5]
// 126 PUSH_CONST → stack[4] = 2
// 129 LEFT_SHIFT stack[3] = stack[3] << stack[4]
// 130 GET_VAR → stack[4] = scope[0][6]
// 132 PUSH_CONST → stack[5] = 4
// 135 UNSIGNED_RIGHT_SHIFT stack[4] = stack[4] >>> stack[5]
// 136 BITWISE_OR stack[3] = stack[3] | stack[4]
// 137 CALL func.apply(thisArg, [1 args]) → stack[1]
// 139 ADD stack[0] = stack[0] + stack[1]
// 139 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 3
// 143 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 144 POP stack[0]
// 145 GET_VAR → stack[0] = scope[0][2]
// 148 DUP → stack[1] = stack[0]
// 148 GET_PROP_NAME stack[1] ← stack[1]["charAt"]
// 151 GET_VAR → stack[2] = scope[0][4]
// 153 PUSH_CONST → stack[3] = 2
// 156 ADD stack[2] = stack[2] + stack[3]
// 157 CALL func.apply(thisArg, [1 args]) → stack[0]
// 158 PUSH_STRING → stack[1] = "="
// 161 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 161 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=196
// 164 GET_VAR → stack[0] = scope[0][3]
// 166 GET_GLOBAL → stack[1] = String
// 169 DUP → stack[2] = stack[1]
// 169 GET_PROP_NAME stack[2] ← stack[2]["fromCharCode"]
// 172 GET_VAR → stack[3] = scope[0][6]
// 174 PUSH_CONST → stack[4] = 4
// 177 LEFT_SHIFT stack[3] = stack[3] << stack[4]
// 177 PUSH_CONST → stack[4] = 240
// 180 BITWISE_AND stack[3] = stack[3] & stack[4]
// 181 GET_VAR → stack[4] = scope[0][7]
// 183 PUSH_CONST → stack[5] = 2
// 186 UNSIGNED_RIGHT_SHIFT stack[4] = stack[4] >>> stack[5]
// 186 PUSH_CONST → stack[5] = 15
// 189 BITWISE_AND stack[4] = stack[4] & stack[5]
// 190 BITWISE_OR stack[3] = stack[3] | stack[4]
// 191 CALL func.apply(thisArg, [1 args]) → stack[1]
// 193 ADD stack[0] = stack[0] + stack[1]
// 193 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 3
// 197 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 198 POP stack[0]
// 199 GET_VAR → stack[0] = scope[0][2]
// 202 DUP → stack[1] = stack[0]
// 202 GET_PROP_NAME stack[1] ← stack[1]["charAt"]
// 205 GET_VAR → stack[2] = scope[0][4]
// 207 PUSH_CONST → stack[3] = 3
// 210 ADD stack[2] = stack[2] + stack[3]
// 211 CALL func.apply(thisArg, [1 args]) → stack[0]
// 212 PUSH_STRING → stack[1] = "="
// 215 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 215 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=244
// 218 GET_VAR → stack[0] = scope[0][3]
// 220 GET_GLOBAL → stack[1] = String
// 223 DUP → stack[2] = stack[1]
// 223 GET_PROP_NAME stack[2] ← stack[2]["fromCharCode"]
// 226 GET_VAR → stack[3] = scope[0][7]
// 228 PUSH_CONST → stack[4] = 6
// 231 LEFT_SHIFT stack[3] = stack[3] << stack[4]
// 231 PUSH_CONST → stack[4] = 192
// 234 BITWISE_AND stack[3] = stack[3] & stack[4]
// 235 GET_VAR → stack[4] = scope[0][8]
// 238 BITWISE_OR stack[3] = stack[3] | stack[4]
// 239 CALL func.apply(thisArg, [1 args]) → stack[1]
// 241 ADD stack[0] = stack[0] + stack[1]
// 241 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 3
// 245 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 246 POP stack[0]
// 247 GET_VAR → stack[0] = scope[0][4]
// 249 PUSH_CONST → stack[1] = 4
// 252 ADD stack[0] = stack[0] + stack[1]
// 252 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 4
// 256 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 257 POP stack[0]
// 257 JUMP → JUMP_TO=11
// 260 GET_VAR → stack[0] = scope[0][3]
// 263 RETURN stack[0]
