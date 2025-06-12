// 0 PUSH_STRING → stack[0] = ""
// 3 SET_VAR scope[0][3] ← stack[0]
// 6 PUSH_UNDEFINED → stack[0] = undefined
// 7 GET_VAR → stack[1] = scope[2][1]
// 10 GET_VAR → stack[2] = scope[0][2]
// 13 CALL func.apply(thisArg, [1 args]) → stack[0]
// 15 SET_VAR scope[0][3] ← stack[0]
// 17 JUMP → JUMP_TO=26
// 20 SET_VAR scope[0][4] ← stack[-1]
// 22 PUSH_STRING → stack[-1] = "ffffffffffffffffffffffffffffffff"
// 25 SET_VAR scope[0][3] ← stack[-1]
// 28 GET_VAR → stack[-1] = scope[0][3]
// 31 RETURN stack[-1]
