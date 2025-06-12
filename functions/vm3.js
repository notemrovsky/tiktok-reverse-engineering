// 1 GET_VAR → stack[0] = scope[1][8]
// 4 GET_VAR → stack[1] = scope[0][2]
// 7 FUNCTION_BIND_APPLY → stack[0] = new stack[1](1 args)
// 9 SET_VAR scope[0][3] ← stack[0]
// 12 GET_VAR → stack[0] = scope[0][3]
// 15 RETURN stack[0]
