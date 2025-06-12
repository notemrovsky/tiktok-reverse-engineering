// 0 GET_GLOBAL → stack[0] = window
// 2 GET_PROP_NAME stack[0] ← stack[0]["XMLHttpRequest"]
// 4 GET_PROP_NAME stack[0] ← stack[0]["prototype"]
// 7 SET_VAR scope[0][2] ← stack[0]
// 10 GET_VAR → stack[0] = scope[0][2]
// 12 GET_PROP_NAME stack[0] ← stack[0]["open"]
// 15 SET_VAR scope[0][3] ← stack[0]
// 18 GET_VAR → stack[0] = scope[0][2]
// 20 GET_PROP_NAME stack[0] ← stack[0]["setRequestHeader"]
// 23 SET_VAR scope[0][4] ← stack[0]
// 26 GET_VAR → stack[0] = scope[0][2]
// 28 GET_PROP_NAME stack[0] ← stack[0]["send"]
// 31 SET_VAR scope[0][5] ← stack[0]
// 34 GET_VAR → stack[0] = scope[0][2]
// 36 GET_PROP_NAME stack[0] ← stack[0]["overrideMimeType"]
// 39 SET_VAR scope[0][6] ← stack[0]
// 42 GET_VAR → stack[0] = scope[0][2]
// 44 GET_PROP_NAME stack[0] ← stack[0]["_ac_intercepted"]
// 46 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=48
// 49 PUSH_UNDEFINED → stack[0] = undefined
// 50 RETURN stack[0]
// 51 GET_VAR → stack[0] = scope[0][2]
// 54 PUSH_TRUE → stack[1] = true
// 54 SET_GLOBAL_PROP stack[1]["_ac_intercepted"] ← stack[0]
// 57 GET_VAR → stack[0] = scope[0][2]
// 59 PUSH_FUNCTION → stack[1] = function[64]
// 61 SET_GLOBAL_PROP stack[1]["setRequestHeader"] ← stack[0]
// 64 GET_VAR → stack[0] = scope[0][2]
// 66 PUSH_FUNCTION → stack[1] = function[65]
// 68 SET_GLOBAL_PROP stack[1]["overrideMimeType"] ← stack[0]
// 71 GET_VAR → stack[0] = scope[0][2]
// 73 PUSH_FUNCTION → stack[1] = function[66]
// 75 SET_GLOBAL_PROP stack[1]["open"] ← stack[0]
// 77 PUSH_STRING → stack[0] = "onabort"
// 79 PUSH_STRING → stack[1] = "onerror"
// 81 PUSH_STRING → stack[2] = "onload"
// 83 PUSH_STRING → stack[3] = "onloadend"
// 85 PUSH_STRING → stack[4] = "onloadstart"
// 87 PUSH_STRING → stack[5] = "onprogress"
// 89 PUSH_STRING → stack[6] = "ontimeout"
// 92 NEW_ARRAY → stack[0] = [...top 7 elements]
// 94 SET_VAR scope[0][7] ← stack[0]
// 96 PUSH_STRING → stack[0] = "GET"
// 98 PUSH_STRING → stack[1] = "POST"
// 101 NEW_ARRAY → stack[0] = [...top 2 elements]
// 103 SET_VAR scope[0][8] ← stack[0]
// 106 GET_VAR → stack[0] = scope[0][2]
// 108 PUSH_FUNCTION → stack[1] = function[67]
// 110 SET_GLOBAL_PROP stack[1]["_doRestOfXHRSend"] ← stack[0]
// 113 GET_VAR → stack[0] = scope[0][2]
// 115 PUSH_FUNCTION → stack[1] = function[70]
// 117 SET_GLOBAL_PROP stack[1]["send"] ← stack[0]
// 120 PUSH_UNDEFINED → stack[0] = undefined
// 121 RETURN stack[0]
