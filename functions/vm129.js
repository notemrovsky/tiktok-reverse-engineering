// 1 GET_VAR → stack[0] = scope[0][2]
// 4 PUSH_NULL → stack[1] = null
// 5 NOT_EQUAL stack[0] = stack[0] != stack[1]
// 5 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=83
// 8 GET_VAR → stack[0] = scope[1][2]
// 11 DUP → stack[1] = stack[0]
// 11 GET_PROP_NAME stack[1] ← stack[1]["call"]
// 14 GET_VAR → stack[2] = scope[0][2]
// 17 CALL func.apply(thisArg, [1 args]) → stack[0]
// 19 SET_VAR scope[0][3] ← stack[0]
// 22 GET_VAR → stack[0] = scope[0][2]
// 25 DUP → stack[1] = stack[0]
// 25 GET_PROP_NAME stack[1] ← stack[1]["toString"]
// 28 CALL func.apply(thisArg, [0 args]) → stack[0]
// 30 SET_VAR scope[0][4] ← stack[0]
// 33 GET_VAR → stack[0] = scope[2][0]
// 36 DUP → stack[1] = stack[0]
// 36 GET_PROP_NAME stack[1] ← stack[1]["test"]
// 39 GET_VAR → stack[2] = scope[0][3]
// 42 CALL func.apply(thisArg, [1 args]) → stack[0]
// 44 NOT stack[0] = !stack[0]
// 44 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=47
// 46 PUSH_CONST → stack[0] = 2
// 49 RETURN stack[0]
// 50 GET_VAR → stack[0] = scope[0][3]
// 53 GET_VAR → stack[1] = scope[0][4]
// 56 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 56 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=59
// 58 PUSH_CONST → stack[0] = 3
// 61 RETURN stack[0]
// 62 GET_VAR → stack[0] = scope[2][0]
// 65 DUP → stack[1] = stack[0]
// 65 GET_PROP_NAME stack[1] ← stack[1]["test"]
// 68 GET_VAR → stack[2] = scope[0][2]
// 70 GET_PROP_NAME stack[2] ← stack[2]["toString"]
// 73 DUP → stack[3] = stack[2]
// 73 GET_PROP_NAME stack[3] ← stack[3]["toString"]
// 76 CALL func.apply(thisArg, [0 args]) → stack[2]
// 78 CALL func.apply(thisArg, [1 args]) → stack[0]
// 80 NOT stack[0] = !stack[0]
// 80 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=83
// 82 PUSH_CONST → stack[0] = 4
// 85 RETURN stack[0]
// 85 PUSH_CONST → stack[0] = 1
// 88 RETURN stack[0]
