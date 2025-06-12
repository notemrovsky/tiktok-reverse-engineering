// 0 GET_GLOBAL → stack[0] = RegExp
// 2 PUSH_STRING → stack[1] = "constructor"
// 4 PUSH_STRING → stack[2] = "i"
// 7 FUNCTION_BIND_APPLY → stack[0] = new stack[2](2 args)
// 9 DUP → stack[1] = stack[0]
// 9 GET_PROP_NAME stack[1] ← stack[1]["test"]
// 11 GET_GLOBAL → stack[2] = window
// 13 GET_PROP_NAME stack[2] ← stack[2]["HTMLElement"]
// 16 CALL func.apply(thisArg, [1 args]) → stack[0]
// 17 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=40 else POP
// 20 PUSH_UNDEFINED → stack[0] = undefined
// 20 PUSH_FUNCTION → stack[1] = function[221]
// 22 GET_GLOBAL → stack[2] = window
// 24 GET_PROP_NAME stack[2] ← stack[2]["safari"]
// 27 NOT stack[2] = !stack[2]
// 27 JUMP_IF_TRUE_OR_POP if (stack[2]) JUMP_TO=38 else POP
// 29 TYPEOF_GLOBAL → stack[2] = typeof global["safari"]
// 31 PUSH_STRING → stack[3] = "undefined"
// 34 STRICT_NOT_EQUAL stack[2] = stack[2] !== stack[3]
// 34 JUMP_IF_FALSE_OR_POP if (stack[2]) POP else JUMP_TO=38
// 36 GET_GLOBAL → stack[2] = safari
// 38 GET_PROP_NAME stack[2] ← stack[2]["pushNotification"]
// 41 CALL func.apply(thisArg, [1 args]) → stack[0]
// 43 RETURN stack[0]
// 43 JUMP → JUMP_TO=47
// 46 SET_VAR scope[0][2] ← stack[-1]
// 49 PUSH_UNDEFINED → stack[-1] = undefined
// 50 RETURN stack[-1]
