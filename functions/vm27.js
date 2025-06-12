// 1 GET_VAR → stack[0] = scope[0][2]
// 3 GET_PROP_NAME stack[0] ← stack[0]["state"]
// 5 PUSH_STRING → stack[1] = "prompt"
// 7 SWITCH_CASE if (stack[0] === stack[1]) { POP; JUMP_TO=19 }
// 9 PUSH_STRING → stack[1] = "granted"
// 11 SWITCH_CASE if (stack[0] === stack[1]) { POP; JUMP_TO=30 }
// 13 PUSH_STRING → stack[1] = "denied"
// 15 SWITCH_CASE if (stack[0] === stack[1]) { POP; JUMP_TO=41 }
// 18 POP stack[0]
// 18 JUMP → JUMP_TO=52
// 21 GET_VAR → stack[0] = scope[2][2]
// 24 GET_VAR → stack[1] = scope[1][3]
// 26 PUSH_CONST → stack[2] = 1
// 29 SET_PROP stack[0][stack[1]] = stack[2]
// 29 JUMP → JUMP_TO=61
// 32 GET_VAR → stack[0] = scope[2][2]
// 35 GET_VAR → stack[1] = scope[1][3]
// 37 PUSH_CONST → stack[2] = 2
// 40 SET_PROP stack[0][stack[1]] = stack[2]
// 40 JUMP → JUMP_TO=61
// 43 GET_VAR → stack[0] = scope[2][2]
// 46 GET_VAR → stack[1] = scope[1][3]
// 48 PUSH_CONST → stack[2] = 0
// 51 SET_PROP stack[0][stack[1]] = stack[2]
// 51 JUMP → JUMP_TO=61
// 54 GET_VAR → stack[0] = scope[2][2]
// 57 GET_VAR → stack[1] = scope[1][3]
// 59 PUSH_CONST → stack[2] = 5
// 62 SET_PROP stack[0][stack[1]] = stack[2]
// 63 GET_VAR → stack[0] = scope[1][3]
// 65 PUSH_CONST → stack[1] = 1
// 68 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 68 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=80
// 71 GET_VAR → stack[0] = scope[3][2]
// 73 GET_PROP_NAME stack[0] ← stack[0]["wID"]
// 76 GET_VAR → stack[1] = scope[0][2]
// 78 GET_PROP_NAME stack[1] ← stack[1]["state"]
// 80 SET_GLOBAL_PROP stack[1]["permState"] ← stack[0]
// 83 PUSH_UNDEFINED → stack[0] = undefined
// 84 RETURN stack[0]
