// 0 PUSH_CONST → stack[0] = 0
// 3 SET_VAR scope[0][2] ← stack[0]
// 6 GET_VAR → stack[0] = scope[0][2]
// 9 GET_VAR → stack[1] = scope[1][4]
// 12 LESS_THAN stack[0] = stack[0] < stack[1]
// 12 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=59
// 14 GET_GLOBAL → stack[0] = Math
// 17 DUP → stack[1] = stack[0]
// 17 GET_PROP_NAME stack[1] ← stack[1]["random"]
// 20 CALL func.apply(thisArg, [0 args]) → stack[0]
// 22 SET_VAR scope[0][3] ← stack[0]
// 25 GET_VAR → stack[0] = scope[1][6]
// 28 DUP → stack[1] = stack[0]
// 28 GET_PROP_NAME stack[1] ← stack[1]["includes"]
// 31 GET_VAR → stack[2] = scope[0][3]
// 34 CALL func.apply(thisArg, [1 args]) → stack[0]
// 35 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=40
// 37 PUSH_CONST → stack[0] = 2
// 40 SET_VAR scope[1][7] ← stack[0]
// 43 GET_VAR → stack[0] = scope[1][6]
// 46 DUP → stack[1] = stack[0]
// 46 GET_PROP_NAME stack[1] ← stack[1]["push"]
// 49 GET_VAR → stack[2] = scope[0][3]
// 52 CALL func.apply(thisArg, [1 args]) → stack[0]
// 54 POP stack[0]
// 54 PUSH_SCOPE_REF → stack[0] = scope[0], stack[1] = 2
// 58 POST_INC stack[0] = stack[0][stack[1]]++ (old value)
// 59 POP stack[0]
// 59 JUMP → JUMP_TO=4
// 62 PUSH_UNDEFINED → stack[0] = undefined
// 63 RETURN stack[0]
