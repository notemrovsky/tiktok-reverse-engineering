// 1 GET_VAR → stack[0] = scope[1][2]
// 4 DUP → stack[1] = stack[0]
// 4 GET_PROP_NAME stack[1] ← stack[1]["join"]
// 6 PUSH_STRING → stack[2] = ""
// 9 CALL func.apply(thisArg, [1 args]) → stack[0]
// 11 GET_VAR → stack[1] = scope[2][2]
// 13 GET_PROP_NAME stack[1] ← stack[1]["wID"]
// 15 PUSH_STRING → stack[2] = "nap"
// 18 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 19 RETURN stack[0]
