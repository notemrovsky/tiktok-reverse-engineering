// 1 GET_VAR → stack[0] = scope[0][2]
// 4 PUSH_NULL → stack[1] = null
// 5 NOT_EQUAL stack[0] = stack[0] != stack[1]
// 5 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=10
// 8 GET_VAR → stack[0] = scope[0][3]
// 11 PUSH_NULL → stack[1] = null
// 12 NOT_EQUAL stack[0] = stack[0] != stack[1]
// 12 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=40
// 15 GET_VAR → stack[0] = scope[0][2]
// 18 GET_VAR → stack[1] = scope[0][3]
// 21 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 21 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=24
// 23 PUSH_CONST → stack[0] = 5
// 26 RETURN stack[0]
// 27 GET_VAR → stack[0] = scope[0][2]
// 29 GET_PROP_NAME stack[0] ← stack[0]["toString"]
// 32 GET_VAR → stack[1] = scope[0][3]
// 34 GET_PROP_NAME stack[1] ← stack[1]["toString"]
// 37 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 37 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=40
// 39 PUSH_CONST → stack[0] = 6
// 42 RETURN stack[0]
// 42 PUSH_CONST → stack[0] = 1
// 45 RETURN stack[0]
