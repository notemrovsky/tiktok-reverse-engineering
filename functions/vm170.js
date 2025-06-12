// 0 PUSH_STRING → stack[0] = "contextMenu"
// 3 NEW_ARRAY → stack[0] = [...top 1 elements]
// 5 SET_VAR scope[0][3] ← stack[0]
// 8 PUSH_UNDEFINED → stack[0] = undefined
// 9 GET_VAR → stack[1] = scope[2][2]
// 11 GET_GLOBAL → stack[2] = document
// 13 GET_PROP_NAME stack[2] ← stack[2]["documentElement"]
// 16 GET_VAR → stack[3] = scope[0][3]
// 18 PUSH_CONST → stack[4] = 0
// 21 CALL func.apply(thisArg, [3 args]) → stack[0]
// 23 SET_VAR scope[0][2] ← stack[0]
// 26 NEW_OBJECT → stack[0] = {}
// 27 GET_VAR → stack[1] = scope[0][2]
// 29 DEFINE_PROP Object.defineProperty(stack[0], "data", stack[1])
// 32 RETURN stack[0]
