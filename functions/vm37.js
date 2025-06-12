// 1 GET_VAR → stack[0] = scope[4][2]
// 3 GET_PROP_NAME stack[0] ← stack[0]["wID"]
// 6 GET_VAR → stack[1] = scope[0][2]
// 8 SET_GLOBAL_PROP stack[1]["rtcIP"] ← stack[0]
// 11 PUSH_UNDEFINED → stack[0] = undefined
// 12 RETURN stack[0]
