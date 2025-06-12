// 1 PUSH_UNDEFINED → stack[0] = undefined
// 2 GET_VAR → stack[1] = scope[1][8]
// 5 NEW_ARRAY → stack[2] = [...top 0 elements]
// 6 PUSH_STRING → stack[3] = ""
// 9 NEW_OBJECT → stack[4] = {}
// 10 GET_VAR → stack[5] = scope[0][2]
// 12 DEFINE_PROP Object.defineProperty(stack[4], "", stack[5])
// 15 CALL func.apply(thisArg, [3 args]) → stack[0]
// 17 RETURN stack[0]
