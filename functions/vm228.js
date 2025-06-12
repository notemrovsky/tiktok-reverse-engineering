// 1 GET_VAR → stack[0] = scope[1][3]
// 3 PUSH_CONST → stack[1] = 0
// 6 GREATER_THAN stack[0] = stack[0] > stack[1]
// 6 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=18
// 9 GET_VAR → stack[0] = scope[1][2]
// 12 DUP → stack[1] = stack[0]
// 12 GET_PROP_NAME stack[1] ← stack[1]["push"]
// 15 GET_VAR → stack[2] = scope[1][4]
// 18 CALL func.apply(thisArg, [1 args]) → stack[0]
// 20 POP stack[0]
// 21 PUSH_UNDEFINED → stack[0] = undefined
// 22 RETURN stack[0]
