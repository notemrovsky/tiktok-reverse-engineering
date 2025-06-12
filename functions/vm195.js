// 1 GET_VAR → stack[0] = scope[1][2]
// 3 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=8
// 6 GET_VAR → stack[0] = scope[1][3]
// 8 JUMP → JUMP_TO=24
// 11 PUSH_UNDEFINED → stack[1] = undefined
// 12 GET_VAR → stack[2] = scope[1][4]
// 15 CALL func.apply(thisArg, [0 args]) → stack[1]
// 16 GET_PROP_NAME stack[1] ← stack[1]["data"]
// 19 DUP → stack[2] = stack[1]
// 19 GET_PROP_NAME stack[2] ← stack[2]["includes"]
// 21 PUSH_STRING → stack[3] = "2"
// 24 CALL func.apply(thisArg, [1 args]) → stack[1]
// 26 RETURN stack[1]
