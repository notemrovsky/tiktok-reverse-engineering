// 0 PUSH_FUNCTION → stack[0] = function[63]
// 3 SET_VAR scope[0][4] ← stack[0]
// 5 PUSH_FUNCTION → stack[0] = function[73]
// 8 SET_VAR scope[0][5] ← stack[0]
// 10 PUSH_FUNCTION → stack[0] = function[88]
// 13 SET_VAR scope[0][6] ← stack[0]
// 15 PUSH_FUNCTION → stack[0] = function[90]
// 18 SET_VAR scope[0][7] ← stack[0]
// 20 PUSH_FUNCTION → stack[0] = function[95]
// 23 SET_VAR scope[1][15] ← stack[0]
// 25 GET_GLOBAL → stack[0] = Request
// 27 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=32
// 29 GET_GLOBAL → stack[0] = Request
// 31 GET_GLOBAL → stack[1] = Object
// 34 INSTANCEOF stack[0] = stack[0] instanceof stack[1]
// 35 SET_VAR scope[0][2] ← stack[0]
// 37 GET_GLOBAL → stack[0] = Headers
// 39 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=44
// 41 GET_GLOBAL → stack[0] = Headers
// 43 GET_GLOBAL → stack[1] = Object
// 46 INSTANCEOF stack[0] = stack[0] instanceof stack[1]
// 47 SET_VAR scope[0][3] ← stack[0]
// 50 PUSH_UNDEFINED → stack[0] = undefined
// 51 RETURN stack[0]
