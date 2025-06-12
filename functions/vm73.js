// 0 PUSH_FUNCTION → stack[0] = function[74]
// 3 SET_VAR scope[0][3] ← stack[0]
// 5 PUSH_FUNCTION → stack[0] = function[79]
// 8 SET_VAR scope[0][4] ← stack[0]
// 10 TYPEOF_GLOBAL → stack[0] = typeof global["fetch"]
// 12 PUSH_STRING → stack[1] = "function"
// 15 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 15 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=17
// 18 PUSH_UNDEFINED → stack[0] = undefined
// 19 RETURN stack[0]
// 19 GET_GLOBAL → stack[0] = window
// 21 GET_PROP_NAME stack[0] ← stack[0]["__ac_intercepted_fetch"]
// 23 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=25
// 26 PUSH_UNDEFINED → stack[0] = undefined
// 27 RETURN stack[0]
// 27 GET_GLOBAL → stack[0] = window
// 30 PUSH_TRUE → stack[1] = true
// 30 SET_GLOBAL_PROP stack[1]["__ac_intercepted_fetch"] ← stack[0]
// 32 GET_GLOBAL → stack[0] = window
// 34 GET_PROP_NAME stack[0] ← stack[0]["fetch"]
// 37 SET_VAR scope[0][2] ← stack[0]
// 39 GET_GLOBAL → stack[0] = window
// 42 GET_VAR → stack[1] = scope[0][2]
// 44 SET_GLOBAL_PROP stack[1]["_fetch"] ← stack[0]
// 46 GET_GLOBAL → stack[0] = window
// 49 GET_VAR → stack[1] = scope[0][4]
// 51 SET_GLOBAL_PROP stack[1]["fetch"] ← stack[0]
// 54 PUSH_UNDEFINED → stack[0] = undefined
// 55 RETURN stack[0]
