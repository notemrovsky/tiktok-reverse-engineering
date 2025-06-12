// 1 GET_VAR → stack[0] = scope[0][2]
// 4 DUP → stack[1] = stack[0]
// 4 GET_PROP_NAME stack[1] ← stack[1]["includes"]
// 7 GET_VAR → stack[2] = scope[0][3]
// 10 CALL func.apply(thisArg, [1 args]) → stack[0]
// 11 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=16
// 13 GET_GLOBAL → stack[0] = TypeError
// 16 FUNCTION_BIND_APPLY → stack[0] = new stack[0](0 args)
// 18 THROW stack[0]
// 19 GET_VAR → stack[0] = scope[0][2]
// 22 DUP → stack[1] = stack[0]
// 22 GET_PROP_NAME stack[1] ← stack[1]["push"]
// 25 GET_VAR → stack[2] = scope[0][3]
// 28 CALL func.apply(thisArg, [1 args]) → stack[0]
// 30 POP stack[0]
// 30 GET_GLOBAL → stack[0] = Object
// 33 DUP → stack[1] = stack[0]
// 33 GET_PROP_NAME stack[1] ← stack[1]["keys"]
// 36 GET_VAR → stack[2] = scope[0][3]
// 39 CALL func.apply(thisArg, [1 args]) → stack[0]
// 41 SET_VAR scope[0][4] ← stack[0]
// 44 NEW_ARRAY → stack[0] = [...top 0 elements]
// 46 SET_VAR scope[0][5] ← stack[0]
// 48 PUSH_CONST → stack[0] = 0
// 51 SET_VAR scope[0][6] ← stack[0]
// 54 GET_VAR → stack[0] = scope[0][6]
// 57 GET_VAR → stack[1] = scope[0][4]
// 59 GET_PROP_NAME stack[1] ← stack[1]["length"]
// 62 LESS_THAN stack[0] = stack[0] < stack[1]
// 62 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=135
// 65 GET_VAR → stack[0] = scope[0][4]
// 68 GET_VAR → stack[1] = scope[0][6]
// 71 GET_PROP stack[0] = stack[0][stack[1]]
// 72 SET_VAR scope[0][7] ← stack[0]
// 75 PUSH_UNDEFINED → stack[0] = undefined
// 76 GET_VAR → stack[1] = scope[1][8]
// 79 GET_VAR → stack[2] = scope[0][2]
// 82 GET_VAR → stack[3] = scope[0][7]
// 85 GET_VAR → stack[4] = scope[0][3]
// 88 CALL func.apply(thisArg, [3 args]) → stack[0]
// 90 SET_VAR scope[0][8] ← stack[0]
// 93 GET_VAR → stack[0] = scope[0][8]
// 96 PUSH_UNDEFINED → stack[1] = undefined
// 97 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 97 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=128
// 100 PUSH_UNDEFINED → stack[0] = undefined
// 101 GET_VAR → stack[1] = scope[1][4]
// 104 GET_VAR → stack[2] = scope[0][7]
// 107 CALL func.apply(thisArg, [1 args]) → stack[0]
// 108 PUSH_STRING → stack[1] = ":"
// 111 ADD stack[0] = stack[0] + stack[1]
// 112 GET_VAR → stack[1] = scope[0][8]
// 115 ADD stack[0] = stack[0] + stack[1]
// 116 SET_VAR scope[0][9] ← stack[0]
// 119 GET_VAR → stack[0] = scope[0][5]
// 122 DUP → stack[1] = stack[0]
// 122 GET_PROP_NAME stack[1] ← stack[1]["push"]
// 125 GET_VAR → stack[2] = scope[0][9]
// 128 CALL func.apply(thisArg, [1 args]) → stack[0]
// 130 POP stack[0]
// 130 PUSH_SCOPE_REF → stack[0] = scope[0], stack[1] = 6
// 134 POST_INC stack[0] = stack[0][stack[1]]++ (old value)
// 135 POP stack[0]
// 135 JUMP → JUMP_TO=52
// 137 PUSH_STRING → stack[0] = ""
// 140 SET_VAR scope[0][10] ← stack[0]
// 143 GET_VAR → stack[0] = scope[0][5]
// 145 GET_PROP_NAME stack[0] ← stack[0]["length"]
// 147 PUSH_CONST → stack[1] = 0
// 150 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 150 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=157
// 152 PUSH_STRING → stack[0] = "{}"
// 155 SET_VAR scope[0][10] ← stack[0]
// 157 JUMP → JUMP_TO=183
// 160 GET_VAR → stack[0] = scope[0][5]
// 163 DUP → stack[1] = stack[0]
// 163 GET_PROP_NAME stack[1] ← stack[1]["join"]
// 165 PUSH_STRING → stack[2] = ","
// 168 CALL func.apply(thisArg, [1 args]) → stack[0]
// 170 SET_VAR scope[0][11] ← stack[0]
// 172 PUSH_STRING → stack[0] = "{"
// 175 GET_VAR → stack[1] = scope[0][11]
// 178 ADD stack[0] = stack[0] + stack[1]
// 178 PUSH_STRING → stack[1] = "}"
// 181 ADD stack[0] = stack[0] + stack[1]
// 182 SET_VAR scope[0][10] ← stack[0]
// 185 GET_VAR → stack[0] = scope[0][2]
// 188 DUP → stack[1] = stack[0]
// 188 GET_PROP_NAME stack[1] ← stack[1]["pop"]
// 191 CALL func.apply(thisArg, [0 args]) → stack[0]
// 193 POP stack[0]
// 194 GET_VAR → stack[0] = scope[0][10]
// 197 RETURN stack[0]
