// 0 GET_GLOBAL → stack[0] = Date
// 2 GET_PROP_NAME stack[0] ← stack[0]["prototype"]
// 4 GET_PROP_NAME stack[0] ← stack[0]["toString"]
// 7 DUP → stack[1] = stack[0]
// 7 GET_PROP_NAME stack[1] ← stack[1]["call"]
// 10 GET_VAR → stack[2] = scope[0][2]
// 13 CALL func.apply(thisArg, [1 args]) → stack[0]
// 15 POP stack[0]
// 15 JUMP → JUMP_TO=54
// 18 SET_VAR scope[0][3] ← stack[-1]
// 21 GET_VAR → stack[-1] = scope[0][3]
// 23 GET_PROP_NAME stack[-1] ← stack[-1]["stack"]
// 26 DUP → stack[0] = stack[-1]
// 26 GET_PROP_NAME stack[0] ← stack[0]["includes"]
// 28 PUSH_STRING → stack[1] = "Proxy."
// 31 CALL func.apply(thisArg, [1 args]) → stack[-1]
// 32 JUMP_IF_TRUE_OR_POP if (stack[-1]) JUMP_TO=44 else POP
// 35 GET_VAR → stack[-1] = scope[0][3]
// 37 GET_PROP_NAME stack[-1] ← stack[-1]["stack"]
// 40 DUP → stack[0] = stack[-1]
// 40 GET_PROP_NAME stack[0] ← stack[0]["includes"]
// 42 PUSH_STRING → stack[1] = "proxy."
// 45 CALL func.apply(thisArg, [1 args]) → stack[-1]
// 46 JUMP_IF_FALSE if (!stack[-1]) JUMP_TO=50
// 48 PUSH_CONST → stack[-1] = 2
// 50 JUMP → JUMP_TO=53
// 52 PUSH_CONST → stack[0] = 1
// 55 RETURN stack[0]
// 55 PUSH_CONST → stack[0] = 1
// 58 RETURN stack[0]
