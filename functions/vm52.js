// 1 GET_VAR → stack[0] = scope[1][2]
// 3 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=7
// 6 GET_VAR → stack[0] = scope[1][2]
// 9 RETURN stack[0]
// 10 PUSH_UNDEFINED → stack[0] = undefined
// 11 GET_VAR → stack[1] = scope[1][3]
// 13 PUSH_MAGIC_NUMBER → stack[2] = 3735928559
// 16 CALL func.apply(thisArg, [1 args]) → stack[0]
// 18 SET_VAR scope[1][2] ← stack[0]
// 21 PUSH_UNDEFINED → stack[0] = undefined
// 22 RETURN stack[0]
