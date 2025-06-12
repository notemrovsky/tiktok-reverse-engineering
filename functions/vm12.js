// 1 PUSH_UNDEFINED → stack[0] = undefined
// 2 GET_VAR → stack[1] = scope[3][11]
// 5 CALL func.apply(thisArg, [0 args]) → stack[0]
// 7 POP stack[0]
// 7 JUMP → JUMP_TO=11
// 10 SET_VAR scope[0][2] ← stack[-1]
// 13 PUSH_UNDEFINED → stack[-1] = undefined
// 14 RETURN stack[-1]
