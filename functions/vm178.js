// 0 TYPEOF_GLOBAL → stack[0] = typeof global["Notification"]
// 2 PUSH_STRING → stack[1] = "function"
// 5 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 5 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=28
// 7 GET_GLOBAL → stack[0] = Notification
// 9 GET_PROP_NAME stack[0] ← stack[0]["permission"]
// 12 SET_VAR scope[0][2] ← stack[0]
// 15 GET_VAR → stack[0] = scope[0][2]
// 18 TYPEOF stack[0] = typeof stack[0]
// 18 PUSH_STRING → stack[1] = "string"
// 21 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 21 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=28
// 24 NEW_OBJECT → stack[0] = {}
// 25 GET_VAR → stack[1] = scope[0][2]
// 27 DEFINE_PROP Object.defineProperty(stack[0], "data", stack[1])
// 30 RETURN stack[0]
// 31 NEW_OBJECT → stack[0] = {}
// 31 PUSH_STRING → stack[1] = "undefined"
// 33 DEFINE_PROP Object.defineProperty(stack[0], "data", stack[1])
// 36 RETURN stack[0]
