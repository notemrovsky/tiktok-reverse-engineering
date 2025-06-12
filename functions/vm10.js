// 0 GET_GLOBAL → stack[0] = Array
// 3 DUP → stack[1] = stack[0]
// 3 GET_PROP_NAME stack[1] ← stack[1]["isArray"]
// 5 GET_GLOBAL → stack[2] = window
// 7 GET_PROP_NAME stack[2] ← stack[2]["_mssdk"]
// 9 GET_PROP_NAME stack[2] ← stack[2]["_urlRewriteRules"]
// 12 CALL func.apply(thisArg, [1 args]) → stack[0]
// 14 NOT stack[0] = !stack[0]
// 14 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=22
// 16 GET_GLOBAL → stack[0] = window
// 18 GET_PROP_NAME stack[0] ← stack[0]["_mssdk"]
// 21 NEW_ARRAY → stack[1] = [...top 0 elements]
// 22 SET_GLOBAL_PROP stack[1]["_urlRewriteRules"] ← stack[0]
// 25 GET_VAR → stack[0] = scope[0][2]
// 28 PUSH_UNDEFINED → stack[1] = undefined
// 29 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 29 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=88
// 31 PUSH_CONST → stack[0] = 0
// 34 SET_VAR scope[0][3] ← stack[0]
// 37 GET_VAR → stack[0] = scope[0][3]
// 40 GET_VAR → stack[1] = scope[0][2]
// 42 GET_PROP_NAME stack[1] ← stack[1]["length"]
// 45 LESS_THAN stack[0] = stack[0] < stack[1]
// 45 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=88
// 47 GET_GLOBAL → stack[0] = window
// 49 GET_PROP_NAME stack[0] ← stack[0]["_mssdk"]
// 51 GET_PROP_NAME stack[0] ← stack[0]["_urlRewriteRules"]
// 54 DUP → stack[1] = stack[0]
// 54 GET_PROP_NAME stack[1] ← stack[1]["push"]
// 56 GET_GLOBAL → stack[2] = RegExp
// 59 GET_VAR → stack[3] = scope[0][2]
// 62 GET_VAR → stack[4] = scope[0][3]
// 65 GET_PROP stack[3] = stack[3][stack[4]]
// 65 GET_PROP_NAME stack[3] ← stack[3]["0"]
// 68 FUNCTION_BIND_APPLY → stack[2] = new stack[3](1 args)
// 70 GET_VAR → stack[3] = scope[0][2]
// 73 GET_VAR → stack[4] = scope[0][3]
// 76 GET_PROP stack[3] = stack[3][stack[4]]
// 76 GET_PROP_NAME stack[3] ← stack[3]["1"]
// 79 NEW_ARRAY → stack[2] = [...top 2 elements]
// 81 CALL func.apply(thisArg, [1 args]) → stack[0]
// 83 POP stack[0]
// 83 PUSH_SCOPE_REF → stack[0] = scope[0], stack[1] = 3
// 87 POST_INC stack[0] = stack[0][stack[1]]++ (old value)
// 88 POP stack[0]
// 88 JUMP → JUMP_TO=35
// 91 PUSH_UNDEFINED → stack[0] = undefined
// 92 RETURN stack[0]
