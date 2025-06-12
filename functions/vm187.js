// 1 GET_VAR → stack[0] = scope[0][2]
// 3 PUSH_STRING → stack[1] = "Gyroscope"
// 6 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 6 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=14
// 9 GET_VAR → stack[0] = scope[0][3]
// 12 SET_VAR scope[1][3] ← stack[0]
// 14 JUMP → JUMP_TO=29
// 17 GET_VAR → stack[0] = scope[0][2]
// 19 PUSH_STRING → stack[1] = "GPU"
// 22 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 22 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=28
// 25 GET_VAR → stack[0] = scope[0][3]
// 28 SET_VAR scope[1][4] ← stack[0]
// 31 PUSH_UNDEFINED → stack[0] = undefined
// 32 RETURN stack[0]
