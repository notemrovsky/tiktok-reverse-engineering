// 0 PUSH_FUNCTION → stack[0] = function[129]
// 3 SET_VAR scope[0][3] ← stack[0]
// 5 PUSH_FUNCTION → stack[0] = function[130]
// 8 SET_VAR scope[0][4] ← stack[0]
// 10 PUSH_FUNCTION → stack[0] = function[131]
// 13 SET_VAR scope[1][5] ← stack[0]
// 15 GET_GLOBAL → stack[0] = Function
// 17 GET_PROP_NAME stack[0] ← stack[0]["prototype"]
// 19 GET_PROP_NAME stack[0] ← stack[0]["toString"]
// 22 SET_VAR scope[0][2] ← stack[0]
// 25 PUSH_UNDEFINED → stack[0] = undefined
// 26 GET_VAR → stack[1] = scope[1][1]
// 28 PUSH_CONST → stack[2] = 10
// 31 CALL func.apply(thisArg, [1 args]) → stack[0]
// 33 SET_VAR scope[1][3] ← stack[0]
// 36 PUSH_UNDEFINED → stack[0] = undefined
// 37 GET_VAR → stack[1] = scope[1][2]
// 40 GET_VAR → stack[2] = scope[1][3]
// 43 PUSH_UNDEFINED → stack[3] = undefined
// 44 GET_VAR → stack[4] = scope[1][5]
// 47 PUSH_UNDEFINED → stack[5] = undefined
// 48 PUSH_UNDEFINED → stack[6] = undefined
// 49 CALL func.apply(thisArg, [5 args]) → stack[0]
// 51 SET_VAR scope[1][4] ← stack[0]
// 54 PUSH_UNDEFINED → stack[0] = undefined
// 55 RETURN stack[0]
