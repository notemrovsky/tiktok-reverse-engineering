// 1 GET_VAR → stack[0] = scope[2][2]
// 4 GET_VAR → stack[1] = scope[1][3]
// 6 PUSH_CONST → stack[2] = 1
// 9 NEGATE stack[2] = -stack[2]
// 10 GET_VAR → stack[3] = scope[0][2]
// 12 GET_PROP_NAME stack[3] ← stack[3]["message"]
// 15 DUP → stack[4] = stack[3]
// 15 GET_PROP_NAME stack[4] ← stack[4]["indexOf"]
// 17 PUSH_STRING → stack[5] = "is not a valid enum value of type PermissionName"
// 20 CALL func.apply(thisArg, [1 args]) → stack[3]
// 22 STRICT_NOT_EQUAL stack[2] = stack[2] !== stack[3]
// 22 JUMP_IF_FALSE if (!stack[2]) JUMP_TO=26
// 24 PUSH_CONST → stack[2] = 4
// 26 JUMP → JUMP_TO=29
// 28 PUSH_CONST → stack[3] = 3
// 31 SET_PROP stack[1][stack[2]] = stack[3]
// 32 PUSH_UNDEFINED → stack[1] = undefined
// 33 RETURN stack[1]
