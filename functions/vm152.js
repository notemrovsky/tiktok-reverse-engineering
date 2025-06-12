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
// 31 NEW_ARRAY → stack[0] = [...top 0 elements]
// 33 SET_VAR scope[0][4] ← stack[0]
// 36 GET_VAR → stack[0] = scope[0][3]
// 38 GET_PROP_NAME stack[0] ← stack[0]["length"]
// 41 SET_VAR scope[0][5] ← stack[0]
// 43 PUSH_CONST → stack[0] = 0
// 46 SET_VAR scope[0][6] ← stack[0]
// 49 GET_VAR → stack[0] = scope[0][6]
// 52 GET_VAR → stack[1] = scope[0][5]
// 55 LESS_THAN stack[0] = stack[0] < stack[1]
// 55 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=119
// 58 PUSH_UNDEFINED → stack[0] = undefined
// 59 GET_VAR → stack[1] = scope[1][8]
// 62 GET_VAR → stack[2] = scope[0][2]
// 64 PUSH_STRING → stack[3] = ""
// 67 DUP → stack[4] = stack[3]
// 67 GET_PROP_NAME stack[4] ← stack[4]["concat"]
// 70 GET_VAR → stack[5] = scope[0][6]
// 73 CALL func.apply(thisArg, [1 args]) → stack[3]
// 75 GET_VAR → stack[4] = scope[0][3]
// 78 CALL func.apply(thisArg, [3 args]) → stack[0]
// 80 SET_VAR scope[0][7] ← stack[0]
// 83 GET_VAR → stack[0] = scope[0][7]
// 86 PUSH_UNDEFINED → stack[1] = undefined
// 87 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 87 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=100
// 90 GET_VAR → stack[0] = scope[0][4]
// 93 DUP → stack[1] = stack[0]
// 93 GET_PROP_NAME stack[1] ← stack[1]["push"]
// 95 PUSH_STRING → stack[2] = "null"
// 98 CALL func.apply(thisArg, [1 args]) → stack[0]
// 100 POP stack[0]
// 100 JUMP → JUMP_TO=113
// 103 GET_VAR → stack[0] = scope[0][4]
// 106 DUP → stack[1] = stack[0]
// 106 GET_PROP_NAME stack[1] ← stack[1]["push"]
// 109 GET_VAR → stack[2] = scope[0][7]
// 112 CALL func.apply(thisArg, [1 args]) → stack[0]
// 114 POP stack[0]
// 114 PUSH_SCOPE_REF → stack[0] = scope[0], stack[1] = 6
// 118 POST_INC stack[0] = stack[0][stack[1]]++ (old value)
// 119 POP stack[0]
// 119 JUMP → JUMP_TO=47
// 122 GET_VAR → stack[0] = scope[0][4]
// 124 GET_PROP_NAME stack[0] ← stack[0]["length"]
// 126 PUSH_CONST → stack[1] = 0
// 129 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 129 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=136
// 131 PUSH_STRING → stack[0] = "[]"
// 134 SET_VAR scope[0][8] ← stack[0]
// 136 JUMP → JUMP_TO=162
// 139 GET_VAR → stack[0] = scope[0][4]
// 142 DUP → stack[1] = stack[0]
// 142 GET_PROP_NAME stack[1] ← stack[1]["join"]
// 144 PUSH_STRING → stack[2] = ","
// 147 CALL func.apply(thisArg, [1 args]) → stack[0]
// 149 SET_VAR scope[0][9] ← stack[0]
// 151 PUSH_STRING → stack[0] = "["
// 154 GET_VAR → stack[1] = scope[0][9]
// 157 ADD stack[0] = stack[0] + stack[1]
// 157 PUSH_STRING → stack[1] = "]"
// 160 ADD stack[0] = stack[0] + stack[1]
// 161 SET_VAR scope[0][8] ← stack[0]
// 164 GET_VAR → stack[0] = scope[0][2]
// 167 DUP → stack[1] = stack[0]
// 167 GET_PROP_NAME stack[1] ← stack[1]["pop"]
// 170 CALL func.apply(thisArg, [0 args]) → stack[0]
// 172 POP stack[0]
// 173 GET_VAR → stack[0] = scope[0][8]
// 176 RETURN stack[0]
