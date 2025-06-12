// 0 GET_GLOBAL → stack[0] = document
// 3 DUP → stack[1] = stack[0]
// 3 GET_PROP_NAME stack[1] ← stack[1]["createElement"]
// 5 PUSH_STRING → stack[2] = "canvas"
// 8 CALL func.apply(thisArg, [1 args]) → stack[0]
// 10 SET_VAR scope[0][2] ← stack[0]
// 13 PUSH_NULL → stack[0] = null
// 14 SET_VAR scope[0][3] ← stack[0]
// 17 GET_VAR → stack[0] = scope[0][2]
// 20 DUP → stack[1] = stack[0]
// 20 GET_PROP_NAME stack[1] ← stack[1]["getContext"]
// 22 PUSH_STRING → stack[2] = "webgl"
// 25 CALL func.apply(thisArg, [1 args]) → stack[0]
// 26 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=36 else POP
// 29 GET_VAR → stack[0] = scope[0][2]
// 32 DUP → stack[1] = stack[0]
// 32 GET_PROP_NAME stack[1] ← stack[1]["getContext"]
// 34 PUSH_STRING → stack[2] = "experimental-webgl"
// 37 CALL func.apply(thisArg, [1 args]) → stack[0]
// 39 SET_VAR scope[0][3] ← stack[0]
// 41 JUMP → JUMP_TO=45
// 44 SET_VAR scope[0][4] ← stack[-1]
// 47 GET_VAR → stack[-1] = scope[0][3]
// 50 NOT stack[-1] = !stack[-1]
// 50 JUMP_IF_FALSE if (!stack[-1]) JUMP_TO=54
// 53 PUSH_NULL → stack[-1] = null
// 54 SET_VAR scope[0][3] ← stack[-1]
// 57 GET_VAR → stack[-1] = scope[0][3]
// 60 RETURN stack[-1]
