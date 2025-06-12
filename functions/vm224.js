// 0 PUSH_STRING → stack[0] = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
// 3 SET_VAR scope[0][3] ← stack[0]
// 5 PUSH_STRING → stack[0] = ""
// 8 SET_VAR scope[0][4] ← stack[0]
// 10 PUSH_CONST → stack[0] = 0
// 13 SET_VAR scope[0][5] ← stack[0]
// 16 GET_VAR → stack[0] = scope[0][5]
// 19 GET_VAR → stack[1] = scope[0][2]
// 22 LESS_THAN stack[0] = stack[0] < stack[1]
// 22 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=80
// 24 GET_GLOBAL → stack[0] = Math
// 27 DUP → stack[1] = stack[0]
// 27 GET_PROP_NAME stack[1] ← stack[1]["random"]
// 30 CALL func.apply(thisArg, [0 args]) → stack[0]
// 31 GET_GLOBAL → stack[1] = Date
// 34 FUNCTION_BIND_APPLY → stack[1] = new stack[1](0 args)
// 36 TO_NUMBER stack[1] = +stack[1]
// 37 ADD stack[0] = stack[0] + stack[1]
// 38 SET_VAR scope[0][6] ← stack[0]
// 41 GET_VAR → stack[0] = scope[0][4]
// 44 GET_VAR → stack[1] = scope[0][3]
// 46 GET_GLOBAL → stack[2] = Math
// 49 DUP → stack[3] = stack[2]
// 49 GET_PROP_NAME stack[3] ← stack[3]["floor"]
// 52 GET_VAR → stack[4] = scope[0][6]
// 55 GET_VAR → stack[5] = scope[0][3]
// 57 GET_PROP_NAME stack[5] ← stack[5]["length"]
// 60 MUL stack[4] = stack[4] * stack[5]
// 61 CALL func.apply(thisArg, [1 args]) → stack[2]
// 63 GET_VAR → stack[3] = scope[0][3]
// 65 GET_PROP_NAME stack[3] ← stack[3]["length"]
// 68 MOD stack[2] = stack[2] % stack[3]
// 69 GET_PROP stack[1] = stack[1][stack[2]]
// 70 ADD stack[0] = stack[0] + stack[1]
// 70 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 4
// 74 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 75 POP stack[0]
// 75 PUSH_SCOPE_REF → stack[0] = scope[0], stack[1] = 5
// 79 POST_INC stack[0] = stack[0][stack[1]]++ (old value)
// 80 POP stack[0]
// 80 JUMP → JUMP_TO=14
// 83 GET_VAR → stack[0] = scope[0][4]
// 86 RETURN stack[0]
