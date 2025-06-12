// 0 GET_GLOBAL → stack[0] = Array
// 3 DUP → stack[1] = stack[0]
// 3 GET_PROP_NAME stack[1] ← stack[1]["isArray"]
// 5 GET_GLOBAL → stack[2] = window
// 7 GET_PROP_NAME stack[2] ← stack[2]["_mssdk"]
// 9 GET_PROP_NAME stack[2] ← stack[2]["_enablePathList"]
// 12 CALL func.apply(thisArg, [1 args]) → stack[0]
// 14 NOT stack[0] = !stack[0]
// 14 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=28 else POP
// 16 GET_GLOBAL → stack[0] = Array
// 19 DUP → stack[1] = stack[0]
// 19 GET_PROP_NAME stack[1] ← stack[1]["isArray"]
// 21 GET_GLOBAL → stack[2] = window
// 23 GET_PROP_NAME stack[2] ← stack[2]["_mssdk"]
// 25 GET_PROP_NAME stack[2] ← stack[2]["_enablePathListRegex"]
// 28 CALL func.apply(thisArg, [1 args]) → stack[0]
// 30 NOT stack[0] = !stack[0]
// 30 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=46
// 32 GET_GLOBAL → stack[0] = window
// 34 GET_PROP_NAME stack[0] ← stack[0]["_mssdk"]
// 37 NEW_ARRAY → stack[1] = [...top 0 elements]
// 38 SET_GLOBAL_PROP stack[1]["_enablePathList"] ← stack[0]
// 40 GET_GLOBAL → stack[0] = window
// 42 GET_PROP_NAME stack[0] ← stack[0]["_mssdk"]
// 45 NEW_ARRAY → stack[1] = [...top 0 elements]
// 46 SET_GLOBAL_PROP stack[1]["_enablePathListRegex"] ← stack[0]
// 48 PUSH_CONST → stack[0] = 0
// 51 SET_VAR scope[0][3] ← stack[0]
// 54 GET_VAR → stack[0] = scope[0][3]
// 57 GET_VAR → stack[1] = scope[0][2]
// 59 GET_PROP_NAME stack[1] ← stack[1]["length"]
// 62 LESS_THAN stack[0] = stack[0] < stack[1]
// 62 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=144
// 65 GET_VAR → stack[0] = scope[0][2]
// 68 GET_VAR → stack[1] = scope[0][3]
// 71 GET_PROP stack[0] = stack[0][stack[1]]
// 71 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=137
// 73 GET_GLOBAL → stack[0] = window
// 75 GET_PROP_NAME stack[0] ← stack[0]["_mssdk"]
// 77 GET_PROP_NAME stack[0] ← stack[0]["_enablePathList"]
// 80 DUP → stack[1] = stack[0]
// 80 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 83 GET_VAR → stack[2] = scope[0][2]
// 86 GET_VAR → stack[3] = scope[0][3]
// 89 GET_PROP stack[2] = stack[2][stack[3]]
// 90 CALL func.apply(thisArg, [1 args]) → stack[0]
// 91 PUSH_CONST → stack[1] = 1
// 94 NEGATE stack[1] = -stack[1]
// 95 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 95 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=137
// 97 GET_GLOBAL → stack[0] = window
// 99 GET_PROP_NAME stack[0] ← stack[0]["_mssdk"]
// 101 GET_PROP_NAME stack[0] ← stack[0]["_enablePathList"]
// 104 DUP → stack[1] = stack[0]
// 104 GET_PROP_NAME stack[1] ← stack[1]["push"]
// 107 GET_VAR → stack[2] = scope[0][2]
// 110 GET_VAR → stack[3] = scope[0][3]
// 113 GET_PROP stack[2] = stack[2][stack[3]]
// 114 CALL func.apply(thisArg, [1 args]) → stack[0]
// 116 POP stack[0]
// 116 GET_GLOBAL → stack[0] = window
// 118 GET_PROP_NAME stack[0] ← stack[0]["_mssdk"]
// 120 GET_PROP_NAME stack[0] ← stack[0]["_enablePathListRegex"]
// 123 DUP → stack[1] = stack[0]
// 123 GET_PROP_NAME stack[1] ← stack[1]["push"]
// 125 GET_GLOBAL → stack[2] = RegExp
// 128 GET_VAR → stack[3] = scope[0][2]
// 131 GET_VAR → stack[4] = scope[0][3]
// 134 GET_PROP stack[3] = stack[3][stack[4]]
// 135 FUNCTION_BIND_APPLY → stack[2] = new stack[3](1 args)
// 137 CALL func.apply(thisArg, [1 args]) → stack[0]
// 139 POP stack[0]
// 139 PUSH_SCOPE_REF → stack[0] = scope[0], stack[1] = 3
// 143 POST_INC stack[0] = stack[0][stack[1]]++ (old value)
// 144 POP stack[0]
// 144 JUMP → JUMP_TO=52
// 147 PUSH_UNDEFINED → stack[0] = undefined
// 148 RETURN stack[0]
