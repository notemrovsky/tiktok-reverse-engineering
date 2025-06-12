// 0 PUSH_CONST → stack[0] = 0
// 3 SET_VAR scope[0][5] ← stack[0]
// 5 PUSH_CONST → stack[0] = 0
// 8 SET_VAR scope[0][6] ← stack[0]
// 11 GET_VAR → stack[0] = scope[0][6]
// 14 GET_VAR → stack[1] = scope[0][3]
// 16 GET_PROP_NAME stack[1] ← stack[1]["length"]
// 19 LESS_THAN stack[0] = stack[0] < stack[1]
// 19 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=94
// 22 PUSH_UNDEFINED → stack[0] = undefined
// 23 GET_VAR → stack[1] = scope[2][0]
// 26 GET_VAR → stack[2] = scope[0][2]
// 29 GET_VAR → stack[3] = scope[0][3]
// 32 GET_VAR → stack[4] = scope[0][6]
// 35 GET_PROP stack[3] = stack[3][stack[4]]
// 36 CALL func.apply(thisArg, [2 args]) → stack[0]
// 38 SET_VAR scope[0][7] ← stack[0]
// 41 GET_VAR → stack[0] = scope[0][7]
// 43 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=87
// 46 GET_VAR → stack[0] = scope[0][5]
// 49 GET_VAR → stack[1] = scope[0][7]
// 52 GET_VAR → stack[2] = scope[0][4]
// 55 GET_VAR → stack[3] = scope[0][6]
// 58 ADD stack[2] = stack[2] + stack[3]
// 59 LEFT_SHIFT stack[1] = stack[1] << stack[2]
// 60 BITWISE_OR stack[0] = stack[0] | stack[1]
// 60 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 5
// 64 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 65 POP stack[0]
// 66 GET_VAR → stack[0] = scope[0][4]
// 69 GET_VAR → stack[1] = scope[0][6]
// 72 ADD stack[0] = stack[0] + stack[1]
// 72 PUSH_CONST → stack[1] = 32
// 75 GREATER_EQUAL stack[0] = stack[0] >= stack[1]
// 75 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=87
// 77 GET_GLOBAL → stack[0] = console
// 80 DUP → stack[1] = stack[0]
// 80 GET_PROP_NAME stack[1] ← stack[1]["error"]
// 82 PUSH_STRING → stack[2] = "abort 32"
// 85 CALL func.apply(thisArg, [1 args]) → stack[0]
// 87 POP stack[0]
// 87 JUMP → JUMP_TO=95
// 89 PUSH_SCOPE_REF → stack[0] = scope[0], stack[1] = 6
// 93 POST_INC stack[0] = stack[0][stack[1]]++ (old value)
// 94 POP stack[0]
// 94 JUMP → JUMP_TO=9
// 97 GET_VAR → stack[0] = scope[0][5]
// 100 RETURN stack[0]
