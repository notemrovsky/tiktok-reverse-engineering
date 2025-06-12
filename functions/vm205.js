// 1 GET_VAR → stack[0] = scope[0][4]
// 4 NOT stack[0] = !stack[0]
// 4 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=25
// 7 NEW_OBJECT → stack[0] = {}
// 8 SET_VAR scope[0][4] ← stack[0]
// 11 GET_VAR → stack[0] = scope[0][4]
// 13 PUSH_CONST → stack[1] = 1
// 15 PUSH_CONST → stack[2] = 1000
// 18 MUL stack[1] = stack[1] * stack[2]
// 18 SET_GLOBAL_PROP stack[1]["interval"] ← stack[0]
// 21 GET_VAR → stack[0] = scope[0][4]
// 23 PUSH_CONST → stack[1] = 0
// 25 SET_GLOBAL_PROP stack[1]["times"] ← stack[0]
// 27 GET_GLOBAL → stack[0] = XMLHttpRequest
// 30 FUNCTION_BIND_APPLY → stack[0] = new stack[0](0 args)
// 32 SET_VAR scope[0][5] ← stack[0]
// 35 GET_VAR → stack[0] = scope[0][5]
// 38 PUSH_TRUE → stack[1] = true
// 38 SET_GLOBAL_PROP stack[1]["withCredentials"] ← stack[0]
// 41 GET_VAR → stack[0] = scope[0][5]
// 44 DUP → stack[1] = stack[0]
// 44 GET_PROP_NAME stack[1] ← stack[1]["open"]
// 46 PUSH_STRING → stack[2] = "GET"
// 49 GET_VAR → stack[3] = scope[0][2]
// 52 PUSH_TRUE → stack[4] = true
// 53 CALL func.apply(thisArg, [3 args]) → stack[0]
// 55 POP stack[0]
// 56 GET_VAR → stack[0] = scope[0][5]
// 58 PUSH_STRING → stack[1] = "json"
// 60 SET_GLOBAL_PROP stack[1]["responseType"] ← stack[0]
// 63 GET_VAR → stack[0] = scope[0][5]
// 65 PUSH_FUNCTION → stack[1] = function[206]
// 67 SET_GLOBAL_PROP stack[1]["onreadystatechange"] ← stack[0]
// 70 GET_VAR → stack[0] = scope[0][5]
// 73 DUP → stack[1] = stack[0]
// 73 GET_PROP_NAME stack[1] ← stack[1]["send"]
// 76 CALL func.apply(thisArg, [0 args]) → stack[0]
// 78 POP stack[0]
// 79 PUSH_UNDEFINED → stack[0] = undefined
// 80 RETURN stack[0]
