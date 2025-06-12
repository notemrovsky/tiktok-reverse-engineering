// 1 GET_VAR → stack[0] = scope[0][2]
// 3 GET_PROP_NAME stack[0] ← stack[0]["length"]
// 5 PUSH_CONST → stack[1] = 200
// 8 GREATER_THAN stack[0] = stack[0] > stack[1]
// 8 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=21
// 11 GET_VAR → stack[0] = scope[0][2]
// 14 DUP → stack[1] = stack[0]
// 14 GET_PROP_NAME stack[1] ← stack[1]["splice"]
// 16 PUSH_CONST → stack[2] = 0
// 18 PUSH_CONST → stack[3] = 100
// 21 CALL func.apply(thisArg, [2 args]) → stack[0]
// 23 POP stack[0]
// 24 GET_VAR → stack[0] = scope[0][2]
// 26 GET_PROP_NAME stack[0] ← stack[0]["length"]
// 28 PUSH_CONST → stack[1] = 0
// 31 GREATER_THAN stack[0] = stack[0] > stack[1]
// 31 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=71
// 34 GET_VAR → stack[0] = scope[0][2]
// 37 GET_VAR → stack[1] = scope[0][2]
// 39 GET_PROP_NAME stack[1] ← stack[1]["length"]
// 41 PUSH_CONST → stack[2] = 1
// 44 SUB stack[1] = stack[1] - stack[2]
// 45 GET_PROP stack[0] = stack[0][stack[1]]
// 46 SET_VAR scope[0][4] ← stack[0]
// 48 GET_GLOBAL → stack[0] = JSON
// 51 DUP → stack[1] = stack[0]
// 51 GET_PROP_NAME stack[1] ← stack[1]["stringify"]
// 54 GET_VAR → stack[2] = scope[0][4]
// 57 CALL func.apply(thisArg, [1 args]) → stack[0]
// 58 GET_GLOBAL → stack[1] = JSON
// 61 DUP → stack[2] = stack[1]
// 61 GET_PROP_NAME stack[2] ← stack[2]["stringify"]
// 64 GET_VAR → stack[3] = scope[0][3]
// 67 CALL func.apply(thisArg, [1 args]) → stack[1]
// 69 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 69 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=71
// 72 PUSH_UNDEFINED → stack[0] = undefined
// 73 RETURN stack[0]
// 74 GET_VAR → stack[0] = scope[0][2]
// 77 DUP → stack[1] = stack[0]
// 77 GET_PROP_NAME stack[1] ← stack[1]["push"]
// 80 GET_VAR → stack[2] = scope[0][3]
// 83 CALL func.apply(thisArg, [1 args]) → stack[0]
// 85 POP stack[0]
// 86 PUSH_UNDEFINED → stack[0] = undefined
// 87 RETURN stack[0]
