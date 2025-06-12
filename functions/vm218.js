// 0 GET_GLOBAL → stack[0] = navigator
// 2 GET_PROP_NAME stack[0] ← stack[0]["userAgent"]
// 5 DUP → stack[1] = stack[0]
// 5 GET_PROP_NAME stack[1] ← stack[1]["toLowerCase"]
// 8 CALL func.apply(thisArg, [0 args]) → stack[0]
// 10 DUP → stack[1] = stack[0]
// 10 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 12 PUSH_STRING → stack[2] = "MSIE"
// 15 CALL func.apply(thisArg, [1 args]) → stack[0]
// 16 PUSH_CONST → stack[1] = 0
// 19 GREATER_EQUAL stack[0] = stack[0] >= stack[1]
// 19 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=25 else POP
// 21 GET_GLOBAL → stack[0] = document
// 23 GET_PROP_NAME stack[0] ← stack[0]["documentMode"]
// 26 NOT stack[0] = !stack[0]
// 27 NOT stack[0] = !stack[0]
// 28 RETURN stack[0]
