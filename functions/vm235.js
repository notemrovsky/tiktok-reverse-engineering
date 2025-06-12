// 1 GET_VAR → stack[0] = scope[0][2]
// 3 PUSH_CONST → stack[1] = 63
// 6 BITWISE_AND stack[0] = stack[0] & stack[1]
// 6 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 2
// 10 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 11 POP stack[0]
// 11 GET_GLOBAL → stack[0] = String
// 14 DUP → stack[1] = stack[0]
// 14 GET_PROP_NAME stack[1] ← stack[1]["fromCharCode"]
// 17 GET_VAR → stack[2] = scope[0][2]
// 20 GET_VAR → stack[3] = scope[0][2]
// 22 PUSH_CONST → stack[4] = 26
// 25 LESS_THAN stack[3] = stack[3] < stack[4]
// 25 JUMP_IF_FALSE if (!stack[3]) JUMP_TO=29
// 27 PUSH_CONST → stack[3] = 65
// 29 JUMP → JUMP_TO=58
// 32 GET_VAR → stack[4] = scope[0][2]
// 34 PUSH_CONST → stack[5] = 52
// 37 LESS_THAN stack[4] = stack[4] < stack[5]
// 37 JUMP_IF_FALSE if (!stack[4]) JUMP_TO=41
// 39 PUSH_CONST → stack[4] = 71
// 41 JUMP → JUMP_TO=58
// 44 GET_VAR → stack[5] = scope[0][2]
// 46 PUSH_CONST → stack[6] = 62
// 49 LESS_THAN stack[5] = stack[5] < stack[6]
// 49 JUMP_IF_FALSE if (!stack[5]) JUMP_TO=54
// 51 PUSH_CONST → stack[5] = 4
// 54 NEGATE stack[5] = -stack[5]
// 54 JUMP → JUMP_TO=58
// 56 PUSH_CONST → stack[6] = 17
// 59 NEGATE stack[6] = -stack[6]
// 60 ADD stack[5] = stack[5] + stack[6]
// 61 CALL func.apply(thisArg, [1 args]) → stack[3]
// 63 RETURN stack[3]
