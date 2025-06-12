// 1 GET_VAR → stack[0] = scope[1][2]
// 3 GET_PROP_NAME stack[0] ← stack[0]["wID"]
// 5 PUSH_CONST → stack[1] = 0
// 7 SET_GLOBAL_PROP stack[1]["load"] ← stack[0]
// 9 GET_GLOBAL → stack[0] = window
// 11 GET_PROP_NAME stack[0] ← stack[0]["Image"]
// 14 TYPEOF stack[0] = typeof stack[0]
// 14 PUSH_STRING → stack[1] = "function"
// 17 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 17 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=59
// 19 GET_GLOBAL → stack[0] = window
// 21 GET_PROP_NAME stack[0] ← stack[0]["Image"]
// 24 FUNCTION_BIND_APPLY → stack[0] = new stack[0](0 args)
// 26 SET_VAR scope[0][2] ← stack[0]
// 28 GET_GLOBAL → stack[0] = document
// 31 DUP → stack[1] = stack[0]
// 31 GET_PROP_NAME stack[1] ← stack[1]["createElement"]
// 33 PUSH_STRING → stack[2] = "canvas"
// 36 CALL func.apply(thisArg, [1 args]) → stack[0]
// 38 DUP → stack[1] = stack[0]
// 38 GET_PROP_NAME stack[1] ← stack[1]["getContext"]
// 40 PUSH_STRING → stack[2] = "2d"
// 43 CALL func.apply(thisArg, [1 args]) → stack[0]
// 45 SET_VAR scope[0][3] ← stack[0]
// 48 GET_VAR → stack[0] = scope[0][2]
// 50 PUSH_FUNCTION → stack[1] = function[24]
// 52 SET_GLOBAL_PROP stack[1]["onload"] ← stack[0]
// 55 GET_VAR → stack[0] = scope[0][2]
// 57 PUSH_STRING → stack[1] = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
// 59 SET_GLOBAL_PROP stack[1]["src"] ← stack[0]
// 61 JUMP → JUMP_TO=74
// 64 SET_VAR scope[0][4] ← stack[-1]
// 67 GET_VAR → stack[-1] = scope[1][2]
// 69 GET_PROP_NAME stack[-1] ← stack[-1]["wID"]
// 71 PUSH_CONST → stack[0] = 1
// 73 SET_GLOBAL_PROP stack[0]["load"] ← stack[-1]
// 76 PUSH_UNDEFINED → stack[-1] = undefined
// 77 RETURN stack[-1]
