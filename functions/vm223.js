// 1 GET_VAR → stack[0] = scope[0][2]
// 4 TYPEOF stack[0] = typeof stack[0]
// 4 PUSH_STRING → stack[1] = "undefined"
// 7 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 7 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=12 else POP
// 10 GET_VAR → stack[0] = scope[0][2]
// 13 PUSH_NULL → stack[1] = null
// 14 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 14 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=17
// 16 PUSH_STRING → stack[0] = ""
// 19 RETURN stack[0]
// 20 GET_VAR → stack[0] = scope[0][2]
// 23 TYPEOF stack[0] = typeof stack[0]
// 23 PUSH_STRING → stack[1] = "boolean"
// 26 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 26 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=38
// 29 GET_VAR → stack[0] = scope[0][2]
// 31 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=35
// 33 PUSH_STRING → stack[0] = "1"
// 35 JUMP → JUMP_TO=38
// 37 PUSH_STRING → stack[1] = "0"
// 40 RETURN stack[1]
// 41 GET_VAR → stack[1] = scope[0][2]
// 44 RETURN stack[1]
