// 1 GET_VAR → stack[0] = scope[0][2]
// 3 GET_PROP_NAME stack[0] ← stack[0]["length"]
// 6 SET_VAR scope[0][3] ← stack[0]
// 9 GET_VAR → stack[0] = scope[0][3]
// 11 PUSH_CONST → stack[1] = 42
// 14 LESS_THAN stack[0] = stack[0] < stack[1]
// 14 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=210
// 16 PUSH_STRING → stack[0] = ""
// 19 SET_VAR scope[0][4] ← stack[0]
// 21 PUSH_CONST → stack[0] = 1
// 24 NEGATE stack[0] = -stack[0]
// 25 SET_VAR scope[0][5] ← stack[0]
// 27 PUSH_CONST → stack[0] = 255
// 30 SET_VAR scope[0][6] ← stack[0]
// 32 PUSH_CONST → stack[0] = 0
// 35 SET_VAR scope[0][7] ← stack[0]
// 38 GET_VAR → stack[0] = scope[0][7]
// 41 GET_VAR → stack[1] = scope[0][3]
// 44 LESS_THAN stack[0] = stack[0] < stack[1]
// 44 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=166
// 47 GET_VAR → stack[0] = scope[0][2]
// 50 DUP → stack[1] = stack[0]
// 50 GET_PROP_NAME stack[1] ← stack[1]["charCodeAt"]
// 53 GET_VAR → stack[2] = scope[0][7]
// 56 CALL func.apply(thisArg, [1 args]) → stack[0]
// 58 SET_VAR scope[0][6] ← stack[0]
// 61 GET_VAR → stack[0] = scope[0][6]
// 63 PUSH_CONST → stack[1] = 34
// 66 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 66 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=72 else POP
// 69 GET_VAR → stack[0] = scope[0][6]
// 71 PUSH_CONST → stack[1] = 92
// 74 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 74 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=124
// 77 GET_VAR → stack[0] = scope[0][5]
// 79 PUSH_CONST → stack[1] = 1
// 82 NEGATE stack[1] = -stack[1]
// 83 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 83 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=89
// 85 PUSH_CONST → stack[0] = 0
// 87 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 5
// 91 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 92 POP stack[0]
// 93 GET_VAR → stack[0] = scope[0][4]
// 96 GET_VAR → stack[1] = scope[0][2]
// 99 DUP → stack[2] = stack[1]
// 99 GET_PROP_NAME stack[2] ← stack[2]["slice"]
// 102 GET_VAR → stack[3] = scope[0][5]
// 105 GET_VAR → stack[4] = scope[0][7]
// 108 CALL func.apply(thisArg, [2 args]) → stack[1]
// 109 PUSH_STRING → stack[2] = "\"
// 112 ADD stack[1] = stack[1] + stack[2]
// 113 ADD stack[0] = stack[0] + stack[1]
// 113 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 4
// 117 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 118 POP stack[0]
// 119 GET_VAR → stack[0] = scope[0][7]
// 122 SET_VAR scope[0][5] ← stack[0]
// 124 JUMP → JUMP_TO=160
// 127 GET_VAR → stack[0] = scope[0][6]
// 129 PUSH_CONST → stack[1] = 32
// 132 LESS_THAN stack[0] = stack[0] < stack[1]
// 132 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=146 else POP
// 135 GET_VAR → stack[0] = scope[0][6]
// 137 PUSH_CONST → stack[1] = 55296
// 140 GREATER_EQUAL stack[0] = stack[0] >= stack[1]
// 140 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=146
// 143 GET_VAR → stack[0] = scope[0][6]
// 145 PUSH_CONST → stack[1] = 57343
// 148 LESS_EQUAL stack[0] = stack[0] <= stack[1]
// 148 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=159
// 150 GET_GLOBAL → stack[0] = JSON
// 153 DUP → stack[1] = stack[0]
// 153 GET_PROP_NAME stack[1] ← stack[1]["stringify"]
// 156 GET_VAR → stack[2] = scope[0][2]
// 159 CALL func.apply(thisArg, [1 args]) → stack[0]
// 161 RETURN stack[0]
// 161 PUSH_SCOPE_REF → stack[0] = scope[0], stack[1] = 7
// 165 POST_INC stack[0] = stack[0][stack[1]]++ (old value)
// 166 POP stack[0]
// 166 JUMP → JUMP_TO=36
// 169 GET_VAR → stack[0] = scope[0][5]
// 171 PUSH_CONST → stack[1] = 1
// 174 NEGATE stack[1] = -stack[1]
// 175 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 175 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=184
// 177 PUSH_STRING → stack[0] = """
// 180 GET_VAR → stack[1] = scope[0][2]
// 183 ADD stack[0] = stack[0] + stack[1]
// 183 PUSH_STRING → stack[1] = """
// 186 ADD stack[0] = stack[0] + stack[1]
// 186 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=207 else POP
// 188 PUSH_STRING → stack[0] = """
// 191 GET_VAR → stack[1] = scope[0][4]
// 194 ADD stack[0] = stack[0] + stack[1]
// 195 GET_VAR → stack[1] = scope[0][2]
// 198 DUP → stack[2] = stack[1]
// 198 GET_PROP_NAME stack[2] ← stack[2]["slice"]
// 201 GET_VAR → stack[3] = scope[0][5]
// 204 CALL func.apply(thisArg, [1 args]) → stack[1]
// 206 ADD stack[0] = stack[0] + stack[1]
// 206 PUSH_STRING → stack[1] = """
// 209 ADD stack[0] = stack[0] + stack[1]
// 210 RETURN stack[0]
// 210 JUMP → JUMP_TO=257
// 213 GET_VAR → stack[0] = scope[0][3]
// 215 PUSH_CONST → stack[1] = 5000
// 218 LESS_THAN stack[0] = stack[0] < stack[1]
// 218 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=231
// 221 GET_VAR → stack[0] = scope[1][2]
// 224 DUP → stack[1] = stack[0]
// 224 GET_PROP_NAME stack[1] ← stack[1]["test"]
// 227 GET_VAR → stack[2] = scope[0][2]
// 230 CALL func.apply(thisArg, [1 args]) → stack[0]
// 232 PUSH_FALSE → stack[1] = false
// 233 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 233 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=245
// 235 PUSH_STRING → stack[0] = """
// 238 GET_VAR → stack[1] = scope[0][2]
// 241 ADD stack[0] = stack[0] + stack[1]
// 241 PUSH_STRING → stack[1] = """
// 244 ADD stack[0] = stack[0] + stack[1]
// 245 RETURN stack[0]
// 245 JUMP → JUMP_TO=257
// 247 GET_GLOBAL → stack[0] = JSON
// 250 DUP → stack[1] = stack[0]
// 250 GET_PROP_NAME stack[1] ← stack[1]["stringify"]
// 253 GET_VAR → stack[2] = scope[0][2]
// 256 CALL func.apply(thisArg, [1 args]) → stack[0]
// 258 RETURN stack[0]
// 259 PUSH_UNDEFINED → stack[0] = undefined
// 260 RETURN stack[0]
