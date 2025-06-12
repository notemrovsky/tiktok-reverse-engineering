// 0 PUSH_STRING → stack[0] = "characterSet"
// 2 PUSH_STRING → stack[1] = "compatMode"
// 4 PUSH_STRING → stack[2] = "documentMode"
// 6 PUSH_STRING → stack[3] = "layers"
// 8 PUSH_STRING → stack[4] = "images"
// 11 NEW_ARRAY → stack[0] = [...top 5 elements]
// 13 SET_VAR scope[0][2] ← stack[0]
// 16 PUSH_UNDEFINED → stack[0] = undefined
// 17 GET_VAR → stack[1] = scope[1][2]
// 19 GET_GLOBAL → stack[2] = document
// 22 GET_VAR → stack[3] = scope[0][2]
// 25 CALL func.apply(thisArg, [2 args]) → stack[0]
// 27 SET_VAR scope[0][3] ← stack[0]
// 30 PUSH_UNDEFINED → stack[0] = undefined
// 31 GET_VAR → stack[1] = scope[2][0]
// 33 GET_GLOBAL → stack[2] = document
// 35 GET_PROP_NAME stack[2] ← stack[2]["location"]
// 38 CALL func.apply(thisArg, [1 args]) → stack[0]
// 39 PUSH_STRING → stack[1] = "object"
// 42 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 42 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=53
// 45 GET_VAR → stack[0] = scope[0][3]
// 47 GET_GLOBAL → stack[1] = document
// 49 GET_PROP_NAME stack[1] ← stack[1]["location"]
// 51 GET_PROP_NAME stack[1] ← stack[1]["host"]
// 53 SET_GLOBAL_PROP stack[1]["location"] ← stack[0]
// 56 GET_VAR → stack[0] = scope[0][3]
// 59 RETURN stack[0]
