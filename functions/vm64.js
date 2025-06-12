// 1 PUSH_SCOPE → stack[0] = scope
// 1 GET_PROP_NAME stack[0] ← stack[0]["_send"]
// 4 NOT stack[0] = !stack[0]
// 4 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=77
// 7 PUSH_SCOPE → stack[0] = scope
// 7 GET_PROP_NAME stack[0] ← stack[0]["_byted_intercept_list"]
// 10 NOT stack[0] = !stack[0]
// 10 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=15
// 13 PUSH_SCOPE → stack[0] = scope
// 14 NEW_ARRAY → stack[1] = [...top 0 elements]
// 15 SET_GLOBAL_PROP stack[1]["_byted_intercept_list"] ← stack[0]
// 18 PUSH_SCOPE → stack[0] = scope
// 18 GET_PROP_NAME stack[0] ← stack[0]["_byted_intercept_list"]
// 21 DUP → stack[1] = stack[0]
// 21 GET_PROP_NAME stack[1] ← stack[1]["push"]
// 24 NEW_OBJECT → stack[2] = {}
// 24 PUSH_STRING → stack[3] = "setRequestHeader"
// 26 DEFINE_PROP Object.defineProperty(stack[2], "func", stack[3])
// 29 GET_VAR → stack[3] = scope[0][1]
// 31 DEFINE_PROP Object.defineProperty(stack[2], "arguments", stack[3])
// 34 CALL func.apply(thisArg, [1 args]) → stack[0]
// 36 POP stack[0]
// 36 GET_GLOBAL → stack[0] = RegExp
// 38 PUSH_STRING → stack[1] = "^content-type$"
// 40 PUSH_STRING → stack[2] = "i"
// 43 FUNCTION_BIND_APPLY → stack[0] = new stack[2](2 args)
// 45 DUP → stack[1] = stack[0]
// 45 GET_PROP_NAME stack[1] ← stack[1]["test"]
// 48 GET_VAR → stack[2] = scope[0][2]
// 51 CALL func.apply(thisArg, [1 args]) → stack[0]
// 52 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=77
// 55 PUSH_SCOPE → stack[0] = scope
// 56 GET_VAR → stack[1] = scope[0][3]
// 59 DUP → stack[2] = stack[1]
// 59 GET_PROP_NAME stack[2] ← stack[2]["toString"]
// 62 CALL func.apply(thisArg, [0 args]) → stack[1]
// 64 DUP → stack[2] = stack[1]
// 64 GET_PROP_NAME stack[2] ← stack[2]["toLowerCase"]
// 67 CALL func.apply(thisArg, [0 args]) → stack[1]
// 69 DUP → stack[2] = stack[1]
// 69 GET_PROP_NAME stack[2] ← stack[2]["split"]
// 71 PUSH_STRING → stack[3] = ";"
// 74 CALL func.apply(thisArg, [1 args]) → stack[1]
// 75 GET_PROP_NAME stack[1] ← stack[1]["0"]
// 77 SET_GLOBAL_PROP stack[1]["_byted_content"] ← stack[0]
// 80 GET_VAR → stack[0] = scope[1][4]
// 83 DUP → stack[1] = stack[0]
// 83 GET_PROP_NAME stack[1] ← stack[1]["apply"]
// 86 PUSH_SCOPE → stack[2] = scope
// 87 GET_VAR → stack[3] = scope[0][1]
// 90 CALL func.apply(thisArg, [2 args]) → stack[0]
// 92 RETURN stack[0]
