// 1 PUSH_SCOPE → stack[0] = scope
// 2 GET_VAR → stack[1] = scope[0][1]
// 4 SET_GLOBAL_PROP stack[1]["_overrideMimeTypeArgs"] ← stack[0]
// 7 GET_VAR → stack[0] = scope[1][6]
// 10 DUP → stack[1] = stack[0]
// 10 GET_PROP_NAME stack[1] ← stack[1]["apply"]
// 13 PUSH_SCOPE → stack[2] = scope
// 14 GET_VAR → stack[3] = scope[0][1]
// 17 CALL func.apply(thisArg, [2 args]) → stack[0]
// 19 RETURN stack[0]
