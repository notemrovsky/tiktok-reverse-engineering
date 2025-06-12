// 1 GET_VAR → stack[0] = scope[0][3]
// 3 GET_PROP_NAME stack[0] ← stack[0]["length"]
// 6 SET_VAR scope[0][4] ← stack[0]
// 8 GET_GLOBAL → stack[0] = ArrayBuffer
// 11 GET_VAR → stack[1] = scope[0][4]
// 13 PUSH_CONST → stack[2] = 1
// 16 ADD stack[1] = stack[1] + stack[2]
// 17 FUNCTION_BIND_APPLY → stack[0] = new stack[1](1 args)
// 19 SET_VAR scope[0][5] ← stack[0]
// 21 GET_GLOBAL → stack[0] = Uint8Array
// 24 GET_VAR → stack[1] = scope[0][5]
// 27 FUNCTION_BIND_APPLY → stack[0] = new stack[1](1 args)
// 29 SET_VAR scope[0][6] ← stack[0]
// 31 PUSH_CONST → stack[0] = 0
// 34 SET_VAR scope[0][7] ← stack[0]
// 36 PUSH_CONST → stack[0] = 0
// 39 SET_VAR scope[0][8] ← stack[0]
// 42 GET_VAR → stack[0] = scope[0][8]
// 45 GET_VAR → stack[1] = scope[0][4]
// 48 LESS_THAN stack[0] = stack[0] < stack[1]
// 48 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=85
// 51 GET_VAR → stack[0] = scope[0][6]
// 54 GET_VAR → stack[1] = scope[0][8]
// 57 GET_VAR → stack[2] = scope[0][3]
// 60 GET_VAR → stack[3] = scope[0][8]
// 63 GET_PROP stack[2] = stack[2][stack[3]]
// 64 SET_PROP stack[0][stack[1]] = stack[2]
// 65 GET_VAR → stack[0] = scope[0][7]
// 68 GET_VAR → stack[1] = scope[0][3]
// 71 GET_VAR → stack[2] = scope[0][8]
// 74 GET_PROP stack[1] = stack[1][stack[2]]
// 75 XOR stack[0] = stack[0] ^ stack[1]
// 75 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 7
// 79 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 80 POP stack[0]
// 80 PUSH_SCOPE_REF → stack[0] = scope[0], stack[1] = 8
// 84 POST_INC stack[0] = stack[0][stack[1]]++ (old value)
// 85 POP stack[0]
// 85 JUMP → JUMP_TO=40
// 88 GET_VAR → stack[0] = scope[0][6]
// 91 GET_VAR → stack[1] = scope[0][4]
// 94 GET_VAR → stack[2] = scope[0][7]
// 97 SET_PROP stack[0][stack[1]] = stack[2]
// 97 GET_GLOBAL → stack[0] = Math
// 100 DUP → stack[1] = stack[0]
// 100 GET_PROP_NAME stack[1] ← stack[1]["floor"]
// 102 GET_GLOBAL → stack[2] = Math
// 105 DUP → stack[3] = stack[2]
// 105 GET_PROP_NAME stack[3] ← stack[3]["random"]
// 108 CALL func.apply(thisArg, [0 args]) → stack[2]
// 109 PUSH_CONST → stack[3] = 255
// 112 MUL stack[2] = stack[2] * stack[3]
// 113 CALL func.apply(thisArg, [1 args]) → stack[0]
// 114 PUSH_CONST → stack[1] = 255
// 117 BITWISE_AND stack[0] = stack[0] & stack[1]
// 118 SET_VAR scope[0][9] ← stack[0]
// 120 GET_GLOBAL → stack[0] = String
// 122 GET_PROP_NAME stack[0] ← stack[0]["fromCharCode"]
// 125 DUP → stack[1] = stack[0]
// 125 GET_PROP_NAME stack[1] ← stack[1]["apply"]
// 128 PUSH_NULL → stack[2] = null
// 129 GET_VAR → stack[3] = scope[0][6]
// 132 CALL func.apply(thisArg, [2 args]) → stack[0]
// 134 SET_VAR scope[0][10] ← stack[0]
// 137 PUSH_UNDEFINED → stack[0] = undefined
// 138 GET_VAR → stack[1] = scope[2][9]
// 140 GET_GLOBAL → stack[2] = String
// 143 DUP → stack[3] = stack[2]
// 143 GET_PROP_NAME stack[3] ← stack[3]["fromCharCode"]
// 146 GET_VAR → stack[4] = scope[0][9]
// 149 CALL func.apply(thisArg, [1 args]) → stack[2]
// 151 GET_VAR → stack[3] = scope[0][10]
// 154 CALL func.apply(thisArg, [2 args]) → stack[0]
// 156 SET_VAR scope[0][11] ← stack[0]
// 158 PUSH_STRING → stack[0] = ""
// 161 SET_VAR scope[0][12] ← stack[0]
// 164 GET_VAR → stack[0] = scope[0][12]
// 166 GET_GLOBAL → stack[1] = String
// 169 DUP → stack[2] = stack[1]
// 169 GET_PROP_NAME stack[2] ← stack[2]["fromCharCode"]
// 172 GET_VAR → stack[3] = scope[0][2]
// 175 CALL func.apply(thisArg, [1 args]) → stack[1]
// 177 ADD stack[0] = stack[0] + stack[1]
// 177 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 12
// 181 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 182 POP stack[0]
// 183 GET_VAR → stack[0] = scope[0][12]
// 185 GET_GLOBAL → stack[1] = String
// 188 DUP → stack[2] = stack[1]
// 188 GET_PROP_NAME stack[2] ← stack[2]["fromCharCode"]
// 191 GET_VAR → stack[3] = scope[0][9]
// 194 CALL func.apply(thisArg, [1 args]) → stack[1]
// 196 ADD stack[0] = stack[0] + stack[1]
// 196 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 12
// 200 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 201 POP stack[0]
// 202 GET_VAR → stack[0] = scope[0][12]
// 205 GET_VAR → stack[1] = scope[0][11]
// 208 ADD stack[0] = stack[0] + stack[1]
// 208 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 12
// 212 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 213 POP stack[0]
// 214 PUSH_UNDEFINED → stack[0] = undefined
// 215 GET_VAR → stack[1] = scope[2][4]
// 218 GET_VAR → stack[2] = scope[0][12]
// 220 PUSH_STRING → stack[3] = "s1"
// 223 CALL func.apply(thisArg, [2 args]) → stack[0]
// 225 RETURN stack[0]
