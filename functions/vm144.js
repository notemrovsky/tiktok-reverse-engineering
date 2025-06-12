// 1 GET_VAR → stack[0] = scope[0][3]
// 4 GET_VAR → stack[1] = scope[0][4]
// 6 PUSH_CONST → stack[2] = 1
// 9 SUB stack[1] = stack[1] - stack[2]
// 10 LESS_THAN stack[0] = stack[0] < stack[1]
// 10 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=149
// 12 GET_GLOBAL → stack[0] = Math
// 15 DUP → stack[1] = stack[0]
// 15 GET_PROP_NAME stack[1] ← stack[1]["floor"]
// 18 GET_VAR → stack[2] = scope[0][3]
// 21 GET_VAR → stack[3] = scope[0][4]
// 24 ADD stack[2] = stack[2] + stack[3]
// 24 PUSH_CONST → stack[3] = 2
// 27 DIV stack[2] = stack[2] / stack[3]
// 28 CALL func.apply(thisArg, [1 args]) → stack[0]
// 30 SET_VAR scope[0][6] ← stack[0]
// 32 GET_GLOBAL → stack[0] = window
// 35 DUP → stack[1] = stack[0]
// 35 GET_PROP_NAME stack[1] ← stack[1]["matchMedia"]
// 37 PUSH_STRING → stack[2] = "("
// 40 DUP → stack[3] = stack[2]
// 40 GET_PROP_NAME stack[3] ← stack[3]["concat"]
// 43 GET_VAR → stack[4] = scope[0][2]
// 45 PUSH_STRING → stack[5] = ": "
// 48 CALL func.apply(thisArg, [2 args]) → stack[2]
// 50 DUP → stack[3] = stack[2]
// 50 GET_PROP_NAME stack[3] ← stack[3]["concat"]
// 53 GET_VAR → stack[4] = scope[0][6]
// 56 CALL func.apply(thisArg, [1 args]) → stack[2]
// 58 DUP → stack[3] = stack[2]
// 58 GET_PROP_NAME stack[3] ← stack[3]["concat"]
// 61 GET_VAR → stack[4] = scope[0][5]
// 63 PUSH_STRING → stack[5] = ")"
// 66 CALL func.apply(thisArg, [2 args]) → stack[2]
// 68 CALL func.apply(thisArg, [1 args]) → stack[0]
// 69 GET_PROP_NAME stack[0] ← stack[0]["matches"]
// 72 SET_VAR scope[0][7] ← stack[0]
// 75 GET_VAR → stack[0] = scope[0][7]
// 77 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=120
// 79 GET_GLOBAL → stack[0] = window
// 82 DUP → stack[1] = stack[0]
// 82 GET_PROP_NAME stack[1] ← stack[1]["matchMedia"]
// 84 PUSH_STRING → stack[2] = "("
// 87 DUP → stack[3] = stack[2]
// 87 GET_PROP_NAME stack[3] ← stack[3]["concat"]
// 90 GET_VAR → stack[4] = scope[0][2]
// 92 PUSH_STRING → stack[5] = ": "
// 95 CALL func.apply(thisArg, [2 args]) → stack[2]
// 97 DUP → stack[3] = stack[2]
// 97 GET_PROP_NAME stack[3] ← stack[3]["concat"]
// 100 GET_VAR → stack[4] = scope[0][6]
// 102 PUSH_CONST → stack[5] = 1
// 105 SUB stack[4] = stack[4] - stack[5]
// 106 CALL func.apply(thisArg, [1 args]) → stack[2]
// 108 DUP → stack[3] = stack[2]
// 108 GET_PROP_NAME stack[3] ← stack[3]["concat"]
// 111 GET_VAR → stack[4] = scope[0][5]
// 113 PUSH_STRING → stack[5] = ")"
// 116 CALL func.apply(thisArg, [2 args]) → stack[2]
// 118 CALL func.apply(thisArg, [1 args]) → stack[0]
// 119 GET_PROP_NAME stack[0] ← stack[0]["matches"]
// 122 NOT stack[0] = !stack[0]
// 122 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=126
// 125 GET_VAR → stack[0] = scope[0][6]
// 128 RETURN stack[0]
// 129 GET_VAR → stack[0] = scope[0][7]
// 132 PUSH_TRUE → stack[1] = true
// 133 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 133 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=141
// 136 GET_VAR → stack[0] = scope[0][6]
// 139 SET_VAR scope[0][4] ← stack[0]
// 141 JUMP → JUMP_TO=148
// 144 GET_VAR → stack[0] = scope[0][6]
// 147 SET_VAR scope[0][3] ← stack[0]
// 149 JUMP → JUMP_TO=-1
// 151 PUSH_CONST → stack[0] = 1
// 154 NEGATE stack[0] = -stack[0]
// 155 RETURN stack[0]
