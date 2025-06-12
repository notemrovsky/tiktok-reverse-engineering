// 0 GET_GLOBAL → stack[0] = Math
// 3 DUP → stack[1] = stack[0]
// 3 GET_PROP_NAME stack[1] ← stack[1]["random"]
// 6 CALL func.apply(thisArg, [0 args]) → stack[0]
// 8 SET_VAR scope[0][2] ← stack[0]
// 11 GET_VAR → stack[0] = scope[1][6]
// 14 DUP → stack[1] = stack[0]
// 14 GET_PROP_NAME stack[1] ← stack[1]["includes"]
// 17 GET_VAR → stack[2] = scope[0][2]
// 20 CALL func.apply(thisArg, [1 args]) → stack[0]
// 21 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=26
// 23 PUSH_CONST → stack[0] = 2
// 26 SET_VAR scope[1][7] ← stack[0]
// 29 GET_VAR → stack[0] = scope[1][6]
// 32 DUP → stack[1] = stack[0]
// 32 GET_PROP_NAME stack[1] ← stack[1]["push"]
// 35 GET_VAR → stack[2] = scope[0][2]
// 38 CALL func.apply(thisArg, [1 args]) → stack[0]
// 40 POP stack[0]
// 40 GET_GLOBAL → stack[0] = Math
// 43 DUP → stack[1] = stack[0]
// 43 GET_PROP_NAME stack[1] ← stack[1]["floor"]
// 45 GET_GLOBAL → stack[2] = Math
// 48 DUP → stack[3] = stack[2]
// 48 GET_PROP_NAME stack[3] ← stack[3]["random"]
// 51 CALL func.apply(thisArg, [0 args]) → stack[2]
// 53 GET_VAR → stack[3] = scope[1][3]
// 56 GET_VAR → stack[4] = scope[1][2]
// 59 SUB stack[3] = stack[3] - stack[4]
// 59 PUSH_CONST → stack[4] = 1
// 62 ADD stack[3] = stack[3] + stack[4]
// 63 MUL stack[2] = stack[2] * stack[3]
// 64 GET_VAR → stack[3] = scope[1][2]
// 67 ADD stack[2] = stack[2] + stack[3]
// 68 CALL func.apply(thisArg, [1 args]) → stack[0]
// 70 SET_VAR scope[0][3] ← stack[0]
// 73 GET_VAR → stack[0] = scope[1][8]
// 75 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=90
// 78 PUSH_UNDEFINED → stack[0] = undefined
// 78 GET_GLOBAL → stack[1] = setTimeout
// 81 GET_VAR → stack[2] = scope[1][10]
// 84 GET_VAR → stack[3] = scope[0][3]
// 86 PUSH_CONST → stack[4] = 1000
// 89 MUL stack[3] = stack[3] * stack[4]
// 90 CALL func.apply(thisArg, [2 args]) → stack[0]
// 92 POP stack[0]
// 93 PUSH_UNDEFINED → stack[0] = undefined
// 94 RETURN stack[0]
