// 0 PUSH_CONST → stack[0] = 0
// 3 SET_VAR scope[0][4] ← stack[0]
// 5 PUSH_CONST → stack[0] = 0
// 8 SET_VAR scope[0][5] ← stack[0]
// 10 PUSH_CONST → stack[0] = 0
// 13 SET_VAR scope[0][6] ← stack[0]
// 16 GET_VAR → stack[0] = scope[0][6]
// 19 GET_VAR → stack[1] = scope[0][3]
// 21 GET_PROP_NAME stack[1] ← stack[1]["length"]
// 24 LESS_THAN stack[0] = stack[0] < stack[1]
// 24 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=97
// 27 GET_VAR → stack[0] = scope[0][3]
// 30 GET_VAR → stack[1] = scope[0][6]
// 33 GET_PROP stack[0] = stack[0][stack[1]]
// 34 SET_VAR scope[0][7] ← stack[0]
// 37 GET_VAR → stack[0] = scope[0][2]
// 40 GET_VAR → stack[1] = scope[0][7]
// 43 GET_PROP stack[0] = stack[0][stack[1]]
// 44 TYPEOF stack[0] = typeof stack[0]
// 44 PUSH_STRING → stack[1] = "function"
// 47 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 47 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=90
// 50 GET_VAR → stack[0] = scope[1][3]
// 53 DUP → stack[1] = stack[0]
// 53 GET_PROP_NAME stack[1] ← stack[1]["call"]
// 56 GET_VAR → stack[2] = scope[0][2]
// 59 GET_VAR → stack[3] = scope[0][7]
// 62 GET_PROP stack[2] = stack[2][stack[3]]
// 63 CALL func.apply(thisArg, [1 args]) → stack[0]
// 65 SET_VAR scope[0][8] ← stack[0]
// 68 GET_VAR → stack[0] = scope[1][2]
// 71 DUP → stack[1] = stack[0]
// 71 GET_PROP_NAME stack[1] ← stack[1]["test"]
// 74 GET_VAR → stack[2] = scope[0][8]
// 77 CALL func.apply(thisArg, [1 args]) → stack[0]
// 78 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=85
// 80 PUSH_SCOPE_REF → stack[0] = scope[0], stack[1] = 4
// 84 POST_INC stack[0] = stack[0][stack[1]]++ (old value)
// 85 POP stack[0]
// 85 JUMP → JUMP_TO=91
// 87 PUSH_SCOPE_REF → stack[0] = scope[0], stack[1] = 5
// 91 POST_INC stack[0] = stack[0][stack[1]]++ (old value)
// 92 POP stack[0]
// 92 PUSH_SCOPE_REF → stack[0] = scope[0], stack[1] = 6
// 96 POST_INC stack[0] = stack[0][stack[1]]++ (old value)
// 97 POP stack[0]
// 97 JUMP → JUMP_TO=14
// 100 GET_VAR → stack[0] = scope[0][4]
// 103 GET_VAR → stack[1] = scope[0][5]
// 106 NEW_ARRAY → stack[0] = [...top 2 elements]
// 108 RETURN stack[0]
