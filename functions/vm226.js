// 0 PUSH_CONST → stack[0] = 0
// 3 SET_VAR scope[0][3] ← stack[0]
// 5 PUSH_CONST → stack[0] = 0
// 8 SET_VAR scope[0][4] ← stack[0]
// 11 NEW_OBJECT → stack[0] = {}
// 11 PUSH_FUNCTION → stack[1] = function[227]
// 14 DUP → stack[2] = stack[1]
// 15 SET_VAR scope[0][5] ← stack[2]
// 17 DEFINE_PROP Object.defineProperty(stack[0], "write", stack[1])
// 19 PUSH_FUNCTION → stack[1] = function[228]
// 22 DUP → stack[2] = stack[1]
// 23 SET_VAR scope[0][6] ← stack[2]
// 25 DEFINE_PROP Object.defineProperty(stack[0], "finalize", stack[1])
// 28 RETURN stack[0]
