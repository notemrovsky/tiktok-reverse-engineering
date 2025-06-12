// 1 GET_VAR → stack[0] = scope[1][2]
// 4 DUP → stack[1] = stack[0]
// 4 GET_PROP_NAME stack[1] ← stack[1]["canPlayType"]
// 6 PUSH_STRING → stack[2] = "audio/"
// 9 GET_VAR → stack[3] = scope[0][2]
// 12 ADD stack[2] = stack[2] + stack[3]
// 13 CALL func.apply(thisArg, [1 args]) → stack[0]
// 15 SET_VAR scope[0][3] ← stack[0]
// 18 GET_VAR → stack[0] = scope[1][4]
// 21 GET_VAR → stack[1] = scope[0][3]
// 23 PUSH_STRING → stack[2] = ""
// 26 STRICT_EQUAL stack[1] = stack[1] === stack[2]
// 26 JUMP_IF_FALSE if (!stack[1]) JUMP_TO=30
// 28 PUSH_CONST → stack[1] = 1
// 30 JUMP → JUMP_TO=45
// 33 GET_VAR → stack[2] = scope[0][3]
// 35 PUSH_STRING → stack[3] = "maybe"
// 38 STRICT_EQUAL stack[2] = stack[2] === stack[3]
// 38 JUMP_IF_FALSE if (!stack[2]) JUMP_TO=42
// 40 PUSH_CONST → stack[2] = 2
// 42 JUMP → JUMP_TO=45
// 44 PUSH_CONST → stack[3] = 3
// 47 ADD stack[2] = stack[2] + stack[3]
// 47 PUSH_SCOPE_REF → stack[3] = scope[1], stack[4] = 4
// 51 SET_PROP_NO_POP stack[3][stack[4]] = stack[2] (keep value)
// 52 POP stack[2]
// 53 PUSH_UNDEFINED → stack[2] = undefined
// 54 RETURN stack[2]
