// 0 PUSH_FUNCTION → stack[0] = function[157]
// 3 SET_VAR scope[0][4] ← stack[0]
// 5 PUSH_FUNCTION → stack[0] = function[158]
// 8 SET_VAR scope[0][5] ← stack[0]
// 10 PUSH_FUNCTION → stack[0] = function[159]
// 13 SET_VAR scope[0][6] ← stack[0]
// 15 GET_GLOBAL → stack[0] = RegExp
// 17 PUSH_STRING → stack[1] = "\s*\(\)\s*{\s*\[\s*native\s+code\s*]\s*}\s*$"
// 20 FUNCTION_BIND_APPLY → stack[0] = new stack[1](1 args)
// 22 SET_VAR scope[0][2] ← stack[0]
// 24 GET_GLOBAL → stack[0] = Function
// 26 GET_PROP_NAME stack[0] ← stack[0]["prototype"]
// 28 GET_PROP_NAME stack[0] ← stack[0]["toString"]
// 31 SET_VAR scope[0][3] ← stack[0]
// 34 PUSH_UNDEFINED → stack[0] = undefined
// 35 GET_VAR → stack[1] = scope[1][1]
// 37 PUSH_CONST → stack[2] = 10
// 40 CALL func.apply(thisArg, [1 args]) → stack[0]
// 42 SET_VAR scope[1][3] ← stack[0]
// 45 PUSH_UNDEFINED → stack[0] = undefined
// 46 GET_VAR → stack[1] = scope[1][2]
// 49 GET_VAR → stack[2] = scope[1][3]
// 52 PUSH_UNDEFINED → stack[3] = undefined
// 53 PUSH_UNDEFINED → stack[4] = undefined
// 54 GET_VAR → stack[5] = scope[0][6]
// 57 PUSH_UNDEFINED → stack[6] = undefined
// 58 CALL func.apply(thisArg, [5 args]) → stack[0]
// 60 SET_VAR scope[1][4] ← stack[0]
// 63 PUSH_UNDEFINED → stack[0] = undefined
// 64 RETURN stack[0]
