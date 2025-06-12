// 0 PUSH_STRING → stack[0] = ""
// 3 SET_VAR scope[0][2] ← stack[0]
// 6 PUSH_NULL → stack[0] = null
// 7 SET_VAR scope[0][3] ← stack[0]
// 10 PUSH_UNDEFINED → stack[0] = undefined
// 11 GET_VAR → stack[1] = scope[4][0]
// 14 GET_VAR → stack[2] = scope[1][10]
// 17 GET_VAR → stack[3] = scope[1][21]
// 20 GET_PROP stack[2] = stack[2][stack[3]]
// 21 CALL func.apply(thisArg, [1 args]) → stack[0]
// 22 PUSH_STRING → stack[1] = "object"
// 25 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 25 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=51
// 28 GET_VAR → stack[0] = scope[1][10]
// 31 GET_VAR → stack[1] = scope[1][21]
// 34 GET_PROP stack[0] = stack[0][stack[1]]
// 34 GET_PROP_NAME stack[0] ← stack[0]["URL"]
// 37 SET_VAR scope[0][2] ← stack[0]
// 40 GET_VAR → stack[0] = scope[1][10]
// 43 GET_VAR → stack[1] = scope[1][21]
// 46 GET_PROP stack[0] = stack[0][stack[1]]
// 46 GET_PROP_NAME stack[0] ← stack[0]["Hash"]
// 49 SET_VAR scope[0][3] ← stack[0]
// 51 JUMP → JUMP_TO=62
// 54 GET_VAR → stack[0] = scope[1][10]
// 57 GET_VAR → stack[1] = scope[1][21]
// 60 GET_PROP stack[0] = stack[0][stack[1]]
// 61 SET_VAR scope[0][2] ← stack[0]
// 64 PUSH_UNDEFINED → stack[0] = undefined
// 65 GET_VAR → stack[1] = scope[3][5]
// 68 GET_VAR → stack[2] = scope[0][2]
// 71 GET_VAR → stack[3] = scope[0][3]
// 73 PUSH_FUNCTION → stack[4] = function[215]
// 76 CALL func.apply(thisArg, [3 args]) → stack[0]
// 78 POP stack[0]
// 79 PUSH_UNDEFINED → stack[0] = undefined
// 80 RETURN stack[0]
