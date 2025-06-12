// 0 PUSH_CONST → stack[0] = 0
// 3 SET_VAR scope[0][5] ← stack[0]
// 6 GET_VAR → stack[0] = scope[0][5]
// 9 GET_VAR → stack[1] = scope[0][3]
// 11 GET_PROP_NAME stack[1] ← stack[1]["length"]
// 14 LESS_THAN stack[0] = stack[0] < stack[1]
// 14 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=74
// 16 GET_GLOBAL → stack[0] = window
// 19 DUP → stack[1] = stack[0]
// 19 GET_PROP_NAME stack[1] ← stack[1]["matchMedia"]
// 21 PUSH_STRING → stack[2] = "("
// 24 DUP → stack[3] = stack[2]
// 24 GET_PROP_NAME stack[3] ← stack[3]["concat"]
// 27 GET_VAR → stack[4] = scope[0][2]
// 29 PUSH_STRING → stack[5] = ": "
// 32 CALL func.apply(thisArg, [2 args]) → stack[2]
// 34 DUP → stack[3] = stack[2]
// 34 GET_PROP_NAME stack[3] ← stack[3]["concat"]
// 37 GET_VAR → stack[4] = scope[0][3]
// 40 GET_VAR → stack[5] = scope[0][5]
// 43 GET_PROP stack[4] = stack[4][stack[5]]
// 44 CALL func.apply(thisArg, [1 args]) → stack[2]
// 46 DUP → stack[3] = stack[2]
// 46 GET_PROP_NAME stack[3] ← stack[3]["concat"]
// 49 GET_VAR → stack[4] = scope[0][4]
// 51 PUSH_STRING → stack[5] = ")"
// 54 CALL func.apply(thisArg, [2 args]) → stack[2]
// 56 CALL func.apply(thisArg, [1 args]) → stack[0]
// 57 GET_PROP_NAME stack[0] ← stack[0]["matches"]
// 59 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=67
// 62 GET_VAR → stack[0] = scope[0][3]
// 65 GET_VAR → stack[1] = scope[0][5]
// 68 GET_PROP stack[0] = stack[0][stack[1]]
// 69 RETURN stack[0]
// 69 PUSH_SCOPE_REF → stack[0] = scope[0], stack[1] = 5
// 73 POST_INC stack[0] = stack[0][stack[1]]++ (old value)
// 74 POP stack[0]
// 74 JUMP → JUMP_TO=4
// 77 PUSH_UNDEFINED → stack[0] = undefined
// 78 RETURN stack[0]
