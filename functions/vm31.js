// 0 PUSH_FUNCTION → stack[0] = function[32]
// 3 SET_VAR scope[0][2] ← stack[0]
// 5 PUSH_FUNCTION → stack[0] = function[35]
// 8 SET_VAR scope[0][3] ← stack[0]
// 11 PUSH_UNDEFINED → stack[0] = undefined
// 12 GET_VAR → stack[1] = scope[0][2]
// 15 CALL func.apply(thisArg, [0 args]) → stack[0]
// 17 POP stack[0]
// 18 PUSH_UNDEFINED → stack[0] = undefined
// 19 GET_VAR → stack[1] = scope[1][19]
// 22 CALL func.apply(thisArg, [0 args]) → stack[0]
// 24 POP stack[0]
// 25 PUSH_UNDEFINED → stack[0] = undefined
// 26 GET_VAR → stack[1] = scope[1][21]
// 29 CALL func.apply(thisArg, [0 args]) → stack[0]
// 31 POP stack[0]
// 32 PUSH_UNDEFINED → stack[0] = undefined
// 33 GET_VAR → stack[1] = scope[1][20]
// 36 CALL func.apply(thisArg, [0 args]) → stack[0]
// 38 POP stack[0]
// 38 GET_GLOBAL → stack[0] = Promise
// 40 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=49
// 43 PUSH_UNDEFINED → stack[0] = undefined
// 44 GET_VAR → stack[1] = scope[0][3]
// 47 CALL func.apply(thisArg, [0 args]) → stack[0]
// 49 SET_VAR scope[1][3] ← stack[0]
// 52 PUSH_UNDEFINED → stack[0] = undefined
// 53 RETURN stack[0]
