// 1 GET_VAR → stack[0] = scope[1][8]
// 4 SET_VAR scope[0][3] ← stack[0]
// 7 PUSH_UNDEFINED → stack[0] = undefined
// 8 GET_VAR → stack[1] = scope[0][3]
// 11 GET_VAR → stack[2] = scope[0][2]
// 13 PUSH_CONST → stack[3] = 24
// 16 RIGHT_SHIFT stack[2] = stack[2] >> stack[3]
// 17 CALL func.apply(thisArg, [1 args]) → stack[0]
// 19 PUSH_UNDEFINED → stack[1] = undefined
// 20 GET_VAR → stack[2] = scope[0][3]
// 23 GET_VAR → stack[3] = scope[0][2]
// 25 PUSH_CONST → stack[4] = 18
// 28 RIGHT_SHIFT stack[3] = stack[3] >> stack[4]
// 29 CALL func.apply(thisArg, [1 args]) → stack[1]
// 31 ADD stack[0] = stack[0] + stack[1]
// 32 PUSH_UNDEFINED → stack[1] = undefined
// 33 GET_VAR → stack[2] = scope[0][3]
// 36 GET_VAR → stack[3] = scope[0][2]
// 38 PUSH_CONST → stack[4] = 12
// 41 RIGHT_SHIFT stack[3] = stack[3] >> stack[4]
// 42 CALL func.apply(thisArg, [1 args]) → stack[1]
// 44 ADD stack[0] = stack[0] + stack[1]
// 45 PUSH_UNDEFINED → stack[1] = undefined
// 46 GET_VAR → stack[2] = scope[0][3]
// 49 GET_VAR → stack[3] = scope[0][2]
// 51 PUSH_CONST → stack[4] = 6
// 54 RIGHT_SHIFT stack[3] = stack[3] >> stack[4]
// 55 CALL func.apply(thisArg, [1 args]) → stack[1]
// 57 ADD stack[0] = stack[0] + stack[1]
// 58 PUSH_UNDEFINED → stack[1] = undefined
// 59 GET_VAR → stack[2] = scope[0][3]
// 62 GET_VAR → stack[3] = scope[0][2]
// 65 CALL func.apply(thisArg, [1 args]) → stack[1]
// 67 ADD stack[0] = stack[0] + stack[1]
// 68 RETURN stack[0]
