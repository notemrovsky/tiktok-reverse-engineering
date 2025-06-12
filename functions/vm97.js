// 1 PUSH_NULL → stack[0] = null
// 2 SET_VAR scope[0][3] ← stack[0]
// 4 PUSH_CONST → stack[0] = 0
// 7 SET_VAR scope[0][4] ← stack[0]
// 9 PUSH_STRING → stack[0] = "X-MS-STUB"
// 12 SET_VAR scope[0][5] ← stack[0]
// 14 PUSH_STRING → stack[0] = "X-MS-PAYLOAD"
// 17 SET_VAR scope[0][6] ← stack[0]
// 20 GET_VAR → stack[0] = scope[0][2]
// 23 GET_VAR → stack[1] = scope[0][5]
// 26 GET_PROP stack[0] = stack[0][stack[1]]
// 26 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=38
// 29 GET_VAR → stack[0] = scope[0][2]
// 32 GET_VAR → stack[1] = scope[0][5]
// 35 GET_PROP stack[0] = stack[0][stack[1]]
// 36 SET_VAR scope[0][3] ← stack[0]
// 38 JUMP → JUMP_TO=71
// 41 GET_VAR → stack[0] = scope[0][2]
// 44 GET_VAR → stack[1] = scope[0][6]
// 47 GET_PROP stack[0] = stack[0][stack[1]]
// 47 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=65
// 50 PUSH_UNDEFINED → stack[0] = undefined
// 51 GET_VAR → stack[1] = scope[2][2]
// 54 GET_VAR → stack[2] = scope[0][2]
// 57 GET_VAR → stack[3] = scope[0][6]
// 60 GET_PROP stack[2] = stack[2][stack[3]]
// 61 CALL func.apply(thisArg, [1 args]) → stack[0]
// 63 SET_VAR scope[0][3] ← stack[0]
// 65 JUMP → JUMP_TO=71
// 67 PUSH_STRING → stack[0] = "00000000000000000000000000000000"
// 70 SET_VAR scope[0][3] ← stack[0]
// 73 PUSH_UNDEFINED → stack[0] = undefined
// 74 GET_VAR → stack[1] = scope[2][0]
// 77 GET_VAR → stack[2] = scope[0][4]
// 80 PUSH_NULL → stack[3] = null
// 81 GET_VAR → stack[4] = scope[0][3]
// 84 CALL func.apply(thisArg, [3 args]) → stack[0]
// 86 SET_VAR scope[0][7] ← stack[0]
// 89 GET_VAR → stack[0] = scope[0][7]
// 92 RETURN stack[0]
