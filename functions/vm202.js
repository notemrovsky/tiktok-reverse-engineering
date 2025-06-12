// 1 NEW_OBJECT → stack[0] = {}
// 2 SET_VAR scope[0][2] ← stack[0]
// 5 GET_VAR → stack[0] = scope[2][2]
// 7 GET_PROP_NAME stack[0] ← stack[0]["SECINFO"]
// 9 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=19
// 12 GET_VAR → stack[0] = scope[2][2]
// 14 GET_PROP_NAME stack[0] ← stack[0]["SECINFO"]
// 17 SET_VAR scope[0][2] ← stack[0]
// 19 JUMP → JUMP_TO=29
// 22 PUSH_UNDEFINED → stack[0] = undefined
// 23 GET_VAR → stack[1] = scope[2][9]
// 26 CALL func.apply(thisArg, [0 args]) → stack[0]
// 28 SET_VAR scope[0][2] ← stack[0]
// 31 GET_VAR → stack[0] = scope[0][2]
// 33 GET_GLOBAL → stack[1] = Date
// 36 DUP → stack[2] = stack[1]
// 36 GET_PROP_NAME stack[2] ← stack[2]["now"]
// 39 CALL func.apply(thisArg, [0 args]) → stack[1]
// 40 SET_GLOBAL_PROP stack[1]["timestamp"] ← stack[0]
// 43 PUSH_UNDEFINED → stack[0] = undefined
// 44 GET_VAR → stack[1] = scope[2][6]
// 46 PUSH_CONST → stack[2] = 4
// 49 CALL func.apply(thisArg, [1 args]) → stack[0]
// 51 SET_VAR scope[0][3] ← stack[0]
// 54 GET_VAR → stack[0] = scope[0][3]
// 57 PUSH_UNDEFINED → stack[1] = undefined
// 58 GET_VAR → stack[2] = scope[2][5]
// 61 PUSH_UNDEFINED → stack[3] = undefined
// 62 GET_VAR → stack[4] = scope[2][4]
// 65 PUSH_UNDEFINED → stack[5] = undefined
// 66 GET_VAR → stack[6] = scope[2][7]
// 69 GET_VAR → stack[7] = scope[0][2]
// 72 CALL func.apply(thisArg, [1 args]) → stack[5]
// 74 GET_VAR → stack[6] = scope[0][3]
// 77 CALL func.apply(thisArg, [2 args]) → stack[3]
// 78 PUSH_STRING → stack[4] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-."
// 81 CALL func.apply(thisArg, [2 args]) → stack[1]
// 83 ADD stack[0] = stack[0] + stack[1]
// 84 SET_VAR scope[0][4] ← stack[0]
// 87 GET_VAR → stack[0] = scope[0][4]
// 90 RETURN stack[0]
