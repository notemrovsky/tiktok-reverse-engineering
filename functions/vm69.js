// 1 PUSH_UNDEFINED → stack[0] = undefined
// 2 GET_VAR → stack[1] = scope[5][7]
// 5 GET_VAR → stack[2] = scope[5][3]
// 8 GET_VAR → stack[3] = scope[5][4]
// 10 GET_PROP_NAME stack[3] ← stack[3]["slardarErrs"]
// 13 GET_VAR → stack[4] = scope[5][1]
// 16 PUSH_FALSE → stack[5] = false
// 17 PUSH_NULL → stack[6] = null
// 18 CALL func.apply(thisArg, [5 args]) → stack[0]
// 20 POP stack[0]
// 21 PUSH_UNDEFINED → stack[0] = undefined
// 22 RETURN stack[0]
