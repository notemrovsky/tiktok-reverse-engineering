// 1 GET_VAR → stack[0] = scope[0][2]
// 4 SET_VAR scope[0][5] ← stack[0]
// 7 PUSH_UNDEFINED → stack[0] = undefined
// 8 GET_VAR → stack[1] = scope[3][13]
// 11 GET_VAR → stack[2] = scope[0][2]
// 14 CALL func.apply(thisArg, [1 args]) → stack[0]
// 15 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=29
// 18 PUSH_UNDEFINED → stack[0] = undefined
// 19 GET_VAR → stack[1] = scope[3][9]
// 22 GET_VAR → stack[2] = scope[0][2]
// 24 PUSH_STRING → stack[3] = ""
// 27 CALL func.apply(thisArg, [2 args]) → stack[0]
// 29 SET_VAR scope[0][5] ← stack[0]
// 32 PUSH_UNDEFINED → stack[0] = undefined
// 33 GET_VAR → stack[1] = scope[1][2]
// 36 GET_VAR → stack[2] = scope[0][5]
// 39 GET_VAR → stack[3] = scope[0][3]
// 42 GET_VAR → stack[4] = scope[0][4]
// 45 CALL func.apply(thisArg, [3 args]) → stack[0]
// 47 RETURN stack[0]
