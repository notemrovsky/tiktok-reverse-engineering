// 0 GET_GLOBAL → stack[0] = window
// 2 GET_PROP_NAME stack[0] ← stack[0]["_mssdk"]
// 4 GET_PROP_NAME stack[0] ← stack[0]["_loaderInit"]
// 7 NOT stack[0] = !stack[0]
// 7 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=31
// 9 GET_GLOBAL → stack[0] = window
// 11 GET_PROP_NAME stack[0] ← stack[0]["_mssdk"]
// 14 PUSH_TRUE → stack[1] = true
// 14 SET_GLOBAL_PROP stack[1]["_loaderInit"] ← stack[0]
// 16 GET_GLOBAL → stack[0] = window
// 18 GET_PROP_NAME stack[0] ← stack[0]["_mssdk"]
// 21 NEW_OBJECT → stack[1] = {}
// 21 SET_GLOBAL_PROP stack[1]["cacheOpts"] ← stack[0]
// 24 PUSH_UNDEFINED → stack[0] = undefined
// 24 GET_GLOBAL → stack[1] = setTimeout
// 26 PUSH_FUNCTION → stack[2] = function[12]
// 28 PUSH_CONST → stack[3] = 1000
// 31 CALL func.apply(thisArg, [2 args]) → stack[0]
// 33 POP stack[0]
// 33 GET_GLOBAL → stack[0] = Array
// 36 DUP → stack[1] = stack[0]
// 36 GET_PROP_NAME stack[1] ← stack[1]["isArray"]
// 38 GET_GLOBAL → stack[2] = window
// 40 GET_PROP_NAME stack[2] ← stack[2]["_mssdk"]
// 42 GET_PROP_NAME stack[2] ← stack[2]["opts"]
// 45 CALL func.apply(thisArg, [1 args]) → stack[0]
// 47 NOT stack[0] = !stack[0]
// 47 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=55
// 49 GET_GLOBAL → stack[0] = window
// 51 GET_PROP_NAME stack[0] ← stack[0]["_mssdk"]
// 54 NEW_ARRAY → stack[1] = [...top 0 elements]
// 55 SET_GLOBAL_PROP stack[1]["opts"] ← stack[0]
// 57 GET_GLOBAL → stack[0] = window
// 59 GET_PROP_NAME stack[0] ← stack[0]["_xex"]
// 61 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=67
// 63 GET_GLOBAL → stack[0] = window
// 65 GET_PROP_NAME stack[0] ← stack[0]["_xex"]
// 67 GET_PROP_NAME stack[0] ← stack[0]["i"]
// 69 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=82
// 71 GET_GLOBAL → stack[0] = window
// 73 GET_PROP_NAME stack[0] ← stack[0]["_xex"]
// 76 DUP → stack[1] = stack[0]
// 76 GET_PROP_NAME stack[1] ← stack[1]["i"]
// 79 GET_VAR → stack[2] = scope[0][2]
// 82 CALL func.apply(thisArg, [1 args]) → stack[0]
// 84 POP stack[0]
// 85 GET_VAR → stack[0] = scope[0][2]
// 87 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=109
// 90 GET_VAR → stack[0] = scope[0][2]
// 92 GET_PROP_NAME stack[0] ← stack[0]["aid"]
// 94 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=109
// 96 GET_GLOBAL → stack[0] = window
// 98 GET_PROP_NAME stack[0] ← stack[0]["_mssdk"]
// 100 GET_PROP_NAME stack[0] ← stack[0]["cacheOpts"]
// 103 GET_VAR → stack[1] = scope[0][2]
// 105 GET_PROP_NAME stack[1] ← stack[1]["aid"]
// 108 GET_VAR → stack[2] = scope[0][2]
// 111 SET_PROP stack[0][stack[1]] = stack[2]
// 111 JUMP → JUMP_TO=115
// 114 SET_VAR scope[0][3] ← stack[-1]
// 117 PUSH_UNDEFINED → stack[-1] = undefined
// 118 RETURN stack[-1]
