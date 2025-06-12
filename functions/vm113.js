// 1 PUSH_UNDEFINED → stack[0] = undefined
// 2 GET_VAR → stack[1] = scope[2][1]
// 5 GET_VAR → stack[2] = scope[0][2]
// 8 GET_VAR → stack[3] = scope[2][0]
// 11 CALL func.apply(thisArg, [2 args]) → stack[0]
// 13 POP stack[0]
// 14 GET_VAR → stack[0] = scope[0][2]
// 17 SET_VAR scope[0][3] ← stack[0]
// 20 GET_VAR → stack[0] = scope[0][2]
// 22 GET_PROP_NAME stack[0] ← stack[0]["type"]
// 24 PUSH_STRING → stack[1] = "touchstart"
// 27 EQUAL stack[0] = stack[0] == stack[1]
// 27 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=41
// 30 PUSH_TRUE → stack[0] = true
// 31 SET_VAR scope[1][3] ← stack[0]
// 34 GET_VAR → stack[0] = scope[0][2]
// 36 GET_PROP_NAME stack[0] ← stack[0]["changedTouches"]
// 38 GET_PROP_NAME stack[0] ← stack[0]["0"]
// 41 SET_VAR scope[0][3] ← stack[0]
// 44 PUSH_UNDEFINED → stack[0] = undefined
// 45 GET_VAR → stack[1] = scope[1][15]
// 48 GET_VAR → stack[2] = scope[1][6]
// 51 NEW_OBJECT → stack[3] = {}
// 51 GET_GLOBAL → stack[4] = Date
// 54 DUP → stack[5] = stack[4]
// 54 GET_PROP_NAME stack[5] ← stack[5]["now"]
// 57 CALL func.apply(thisArg, [0 args]) → stack[4]
// 58 DEFINE_PROP Object.defineProperty(stack[3], "d", stack[4])
// 60 GET_GLOBAL → stack[4] = Math
// 63 DUP → stack[5] = stack[4]
// 63 GET_PROP_NAME stack[5] ← stack[5]["floor"]
// 66 GET_VAR → stack[6] = scope[0][3]
// 68 GET_PROP_NAME stack[6] ← stack[6]["clientX"]
// 71 CALL func.apply(thisArg, [1 args]) → stack[4]
// 72 DEFINE_PROP Object.defineProperty(stack[3], "x", stack[4])
// 74 GET_GLOBAL → stack[4] = Math
// 77 DUP → stack[5] = stack[4]
// 77 GET_PROP_NAME stack[5] ← stack[5]["floor"]
// 80 GET_VAR → stack[6] = scope[0][3]
// 82 GET_PROP_NAME stack[6] ← stack[6]["clientY"]
// 85 CALL func.apply(thisArg, [1 args]) → stack[4]
// 86 DEFINE_PROP Object.defineProperty(stack[3], "y", stack[4])
// 89 CALL func.apply(thisArg, [2 args]) → stack[0]
// 91 POP stack[0]
// 92 PUSH_UNDEFINED → stack[0] = undefined
// 93 RETURN stack[0]
