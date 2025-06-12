// 0 PUSH_FUNCTION → stack[0] = function[89]
// 3 SET_VAR scope[0][3] ← stack[0]
// 5 GET_GLOBAL → stack[0] = window
// 7 GET_PROP_NAME stack[0] ← stack[0]["open"]
// 10 PUSH_UNDEFINED → stack[1] = undefined
// 11 EQUAL stack[0] = stack[0] == stack[1]
// 11 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=15 else POP
// 13 GET_GLOBAL → stack[0] = window
// 15 GET_PROP_NAME stack[0] ← stack[0]["__ac_intercepted_open"]
// 17 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=19
// 20 PUSH_UNDEFINED → stack[0] = undefined
// 21 RETURN stack[0]
// 21 GET_GLOBAL → stack[0] = window
// 23 GET_PROP_NAME stack[0] ← stack[0]["open"]
// 26 SET_VAR scope[0][2] ← stack[0]
// 28 GET_GLOBAL → stack[0] = window
// 31 GET_VAR → stack[1] = scope[0][2]
// 33 SET_GLOBAL_PROP stack[1]["_open"] ← stack[0]
// 35 GET_GLOBAL → stack[0] = window
// 38 PUSH_TRUE → stack[1] = true
// 38 SET_GLOBAL_PROP stack[1]["__ac_intercepted_open"] ← stack[0]
// 40 GET_GLOBAL → stack[0] = window
// 43 GET_VAR → stack[1] = scope[0][3]
// 45 SET_GLOBAL_PROP stack[1]["open"] ← stack[0]
// 48 PUSH_UNDEFINED → stack[0] = undefined
// 49 RETURN stack[0]
