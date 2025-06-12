// 0 GET_GLOBAL → stack[0] = Object
// 3 DUP → stack[1] = stack[0]
// 3 GET_PROP_NAME stack[1] ← stack[1]["keys"]
// 6 GET_VAR → stack[2] = scope[0][2]
// 9 CALL func.apply(thisArg, [1 args]) → stack[0]
// 11 SET_VAR scope[0][3] ← stack[0]
// 13 PUSH_CONST → stack[0] = 0
// 16 SET_VAR scope[0][4] ← stack[0]
// 19 GET_VAR → stack[0] = scope[0][3]
// 21 GET_PROP_NAME stack[0] ← stack[0]["length"]
// 23 PUSH_CONST → stack[1] = 1
// 26 SUB stack[0] = stack[0] - stack[1]
// 27 SET_VAR scope[0][5] ← stack[0]
// 30 GET_VAR → stack[0] = scope[0][5]
// 32 PUSH_CONST → stack[1] = 0
// 35 GREATER_EQUAL stack[0] = stack[0] >= stack[1]
// 35 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=87
// 38 GET_VAR → stack[0] = scope[0][2]
// 41 GET_VAR → stack[1] = scope[0][3]
// 44 GET_VAR → stack[2] = scope[0][5]
// 47 GET_PROP stack[1] = stack[1][stack[2]]
// 48 GET_PROP stack[0] = stack[0][stack[1]]
// 48 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=52
// 50 PUSH_CONST → stack[0] = 1
// 52 JUMP → JUMP_TO=55
// 54 PUSH_CONST → stack[1] = 0
// 57 SET_VAR scope[0][6] ← stack[1]
// 60 GET_VAR → stack[1] = scope[0][6]
// 63 GET_VAR → stack[2] = scope[0][3]
// 65 GET_PROP_NAME stack[2] ← stack[2]["length"]
// 68 GET_VAR → stack[3] = scope[0][5]
// 71 SUB stack[2] = stack[2] - stack[3]
// 71 PUSH_CONST → stack[3] = 1
// 74 SUB stack[2] = stack[2] - stack[3]
// 75 LEFT_SHIFT stack[1] = stack[1] << stack[2]
// 76 GET_VAR → stack[2] = scope[0][4]
// 79 BITWISE_OR stack[1] = stack[1] | stack[2]
// 80 SET_VAR scope[0][4] ← stack[1]
// 82 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 5
// 86 POST_DEC stack[1] = stack[2][stack[3]]-- (old value)
// 87 POP stack[1]
// 87 JUMP → JUMP_TO=28
// 90 GET_VAR → stack[1] = scope[0][4]
// 93 RETURN stack[1]
