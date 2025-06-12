// 1 PUSH_SCOPE → stack[0] = scope
// 2 NEW_OBJECT → stack[1] = {}
// 2 PUSH_STRING → stack[2] = "open"
// 4 DEFINE_PROP Object.defineProperty(stack[1], "func", stack[2])
// 7 GET_VAR → stack[2] = scope[0][1]
// 9 DEFINE_PROP Object.defineProperty(stack[1], "arguments", stack[2])
// 12 NEW_ARRAY → stack[1] = [...top 1 elements]
// 13 SET_GLOBAL_PROP stack[1]["_byted_intercept_list"] ← stack[0]
// 16 PUSH_SCOPE → stack[0] = scope
// 17 GET_VAR → stack[1] = scope[0][2]
// 20 DUP → stack[2] = stack[1]
// 20 GET_PROP_NAME stack[2] ← stack[2]["toUpperCase"]
// 23 CALL func.apply(thisArg, [0 args]) → stack[1]
// 24 SET_GLOBAL_PROP stack[1]["_byted_method"] ← stack[0]
// 27 PUSH_SCOPE → stack[0] = scope
// 28 GET_VAR → stack[1] = scope[0][3]
// 30 SET_GLOBAL_PROP stack[1]["_byted_url"] ← stack[0]
// 33 GET_VAR → stack[0] = scope[1][3]
// 36 DUP → stack[1] = stack[0]
// 36 GET_PROP_NAME stack[1] ← stack[1]["apply"]
// 39 PUSH_SCOPE → stack[2] = scope
// 40 GET_VAR → stack[3] = scope[0][1]
// 43 CALL func.apply(thisArg, [2 args]) → stack[0]
// 45 RETURN stack[0]
