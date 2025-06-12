// 1 NEW_ARRAY → stack[0] = [...top 0 elements]
// 3 SET_VAR scope[0][2] ← stack[0]
// 6 NEW_ARRAY → stack[0] = [...top 0 elements]
// 8 SET_VAR scope[0][3] ← stack[0]
// 10 PUSH_CONST → stack[0] = 0
// 13 SET_VAR scope[0][4] ← stack[0]
// 15 PUSH_CONST → stack[0] = 0
// 18 SET_VAR scope[0][5] ← stack[0]
// 21 GET_VAR → stack[0] = scope[0][5]
// 23 PUSH_CONST → stack[1] = 12
// 26 LESS_THAN stack[0] = stack[0] < stack[1]
// 26 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=131
// 28 GET_GLOBAL → stack[0] = Math
// 31 DUP → stack[1] = stack[0]
// 31 GET_PROP_NAME stack[1] ← stack[1]["floor"]
// 34 GET_VAR → stack[2] = scope[2][5]
// 37 DUP → stack[3] = stack[2]
// 37 GET_PROP_NAME stack[3] ← stack[3]["rand"]
// 40 CALL func.apply(thisArg, [0 args]) → stack[2]
// 41 GET_GLOBAL → stack[3] = Math
// 44 DUP → stack[4] = stack[3]
// 44 GET_PROP_NAME stack[4] ← stack[4]["pow"]
// 46 PUSH_CONST → stack[5] = 2
// 48 PUSH_CONST → stack[6] = 32
// 51 CALL func.apply(thisArg, [2 args]) → stack[3]
// 53 MUL stack[2] = stack[2] * stack[3]
// 54 CALL func.apply(thisArg, [1 args]) → stack[0]
// 56 SET_VAR scope[0][6] ← stack[0]
// 59 GET_VAR → stack[0] = scope[0][2]
// 62 GET_VAR → stack[1] = scope[0][5]
// 65 GET_VAR → stack[2] = scope[0][6]
// 68 SET_PROP stack[0][stack[1]] = stack[2]
// 69 GET_VAR → stack[0] = scope[0][6]
// 71 PUSH_CONST → stack[1] = 15
// 74 BITWISE_AND stack[0] = stack[0] & stack[1]
// 75 GET_VAR → stack[1] = scope[0][4]
// 78 ADD stack[0] = stack[0] + stack[1]
// 78 PUSH_CONST → stack[1] = 15
// 81 BITWISE_AND stack[0] = stack[0] & stack[1]
// 82 SET_VAR scope[0][4] ← stack[0]
// 85 GET_VAR → stack[0] = scope[0][3]
// 88 DUP → stack[1] = stack[0]
// 88 GET_PROP_NAME stack[1] ← stack[1]["push"]
// 91 GET_VAR → stack[2] = scope[0][6]
// 93 PUSH_CONST → stack[3] = 255
// 96 BITWISE_AND stack[2] = stack[2] & stack[3]
// 97 GET_VAR → stack[3] = scope[0][6]
// 99 PUSH_CONST → stack[4] = 8
// 102 UNSIGNED_RIGHT_SHIFT stack[3] = stack[3] >>> stack[4]
// 102 PUSH_CONST → stack[4] = 255
// 105 BITWISE_AND stack[3] = stack[3] & stack[4]
// 106 GET_VAR → stack[4] = scope[0][6]
// 108 PUSH_CONST → stack[5] = 16
// 111 UNSIGNED_RIGHT_SHIFT stack[4] = stack[4] >>> stack[5]
// 111 PUSH_CONST → stack[5] = 255
// 114 BITWISE_AND stack[4] = stack[4] & stack[5]
// 115 GET_VAR → stack[5] = scope[0][6]
// 117 PUSH_CONST → stack[6] = 24
// 120 UNSIGNED_RIGHT_SHIFT stack[5] = stack[5] >>> stack[6]
// 120 PUSH_CONST → stack[6] = 255
// 123 BITWISE_AND stack[5] = stack[5] & stack[6]
// 124 CALL func.apply(thisArg, [4 args]) → stack[0]
// 126 POP stack[0]
// 126 PUSH_SCOPE_REF → stack[0] = scope[0], stack[1] = 5
// 130 PRE_INC stack[0] = ++stack[1][stack[2]] (new value)
// 131 POP stack[0]
// 131 JUMP → JUMP_TO=19
// 134 GET_VAR → stack[0] = scope[0][4]
// 136 PUSH_CONST → stack[1] = 5
// 139 ADD stack[0] = stack[0] + stack[1]
// 139 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 4
// 143 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 144 POP stack[0]
// 145 NEW_OBJECT → stack[0] = {}
// 146 GET_VAR → stack[1] = scope[0][2]
// 148 DEFINE_PROP Object.defineProperty(stack[0], "key", stack[1])
// 151 GET_VAR → stack[1] = scope[0][4]
// 153 DEFINE_PROP Object.defineProperty(stack[0], "rounds", stack[1])
// 156 GET_VAR → stack[1] = scope[0][3]
// 158 DEFINE_PROP Object.defineProperty(stack[0], "keyString", stack[1])
// 161 RETURN stack[0]
