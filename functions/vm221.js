// 1 GET_VAR → stack[0] = scope[0][2]
// 4 DUP → stack[1] = stack[0]
// 4 GET_PROP_NAME stack[1] ← stack[1]["toString"]
// 7 CALL func.apply(thisArg, [0 args]) → stack[0]
// 8 PUSH_STRING → stack[1] = "[object SafariRemoteNotification]"
// 11 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 12 RETURN stack[0]
