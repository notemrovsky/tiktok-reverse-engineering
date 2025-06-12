// 1 GET_VAR → stack[0] = scope[0][3]
// 3 PUSH_CONST → stack[1] = 0
// 6 GREATER_THAN stack[0] = stack[0] > stack[1]
// 6 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=82
// 9 GET_VAR → stack[0] = scope[0][2]
// 11 PUSH_CONST → stack[1] = 1
// 14 BITWISE_AND stack[0] = stack[0] & stack[1]
// 14 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=29
// 17 GET_VAR → stack[0] = scope[1][4]
// 19 PUSH_CONST → stack[1] = 1
// 22 GET_VAR → stack[2] = scope[1][3]
// 25 LEFT_SHIFT stack[1] = stack[1] << stack[2]
// 26 BITWISE_OR stack[0] = stack[0] | stack[1]
// 26 PUSH_SCOPE_REF → stack[1] = scope[1], stack[2] = 4
// 30 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 31 POP stack[0]
// 32 GET_VAR → stack[0] = scope[0][2]
// 34 PUSH_CONST → stack[1] = 1
// 37 RIGHT_SHIFT stack[0] = stack[0] >> stack[1]
// 37 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 2
// 41 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 42 POP stack[0]
// 42 PUSH_SCOPE_REF → stack[0] = scope[1], stack[1] = 3
// 46 PRE_INC stack[0] = ++stack[1][stack[2]] (new value)
// 47 POP stack[0]
// 48 GET_VAR → stack[0] = scope[1][3]
// 50 PUSH_CONST → stack[1] = 8
// 53 EQUAL stack[0] = stack[0] == stack[1]
// 53 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=75
// 56 GET_VAR → stack[0] = scope[1][2]
// 59 DUP → stack[1] = stack[0]
// 59 GET_PROP_NAME stack[1] ← stack[1]["push"]
// 62 GET_VAR → stack[2] = scope[1][4]
// 65 CALL func.apply(thisArg, [1 args]) → stack[0]
// 67 POP stack[0]
// 67 PUSH_CONST → stack[0] = 0
// 70 SET_VAR scope[1][3] ← stack[0]
// 72 PUSH_CONST → stack[0] = 0
// 75 SET_VAR scope[1][4] ← stack[0]
// 77 PUSH_SCOPE_REF → stack[0] = scope[0], stack[1] = 3
// 81 PRE_DEC stack[0] = --stack[1][stack[2]] (new value)
// 82 POP stack[0]
// 82 JUMP → JUMP_TO=-1
// 85 PUSH_UNDEFINED → stack[0] = undefined
// 86 RETURN stack[0]
