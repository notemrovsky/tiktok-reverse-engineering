// 0 PUSH_STRING → stack[0] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
// 3 DUP → stack[1] = stack[0]
// 3 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 6 GET_VAR → stack[2] = scope[0][2]
// 9 CALL func.apply(thisArg, [1 args]) → stack[0]
// 11 RETURN stack[0]
