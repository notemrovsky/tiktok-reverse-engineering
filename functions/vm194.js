// 0 GET_GLOBAL → stack[0] = Object
// 3 DUP → stack[1] = stack[0]
// 3 GET_PROP_NAME stack[1] ← stack[1]["getOwnPropertyDescriptor"]
// 5 GET_GLOBAL → stack[2] = navigator
// 7 PUSH_STRING → stack[3] = "maxTouchPoints"
// 10 CALL func.apply(thisArg, [2 args]) → stack[0]
// 11 GET_PROP_NAME stack[0] ← stack[0]["get"]
// 14 TYPEOF stack[0] = typeof stack[0]
// 14 PUSH_STRING → stack[1] = "function"
// 17 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 17 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=21
// 19 PUSH_CONST → stack[0] = 2
// 21 JUMP → JUMP_TO=24
// 23 PUSH_CONST → stack[1] = 3
// 26 SET_VAR scope[0][2] ← stack[1]
// 28 JUMP → JUMP_TO=37
// 31 SET_VAR scope[0][6] ← stack[0]
// 33 PUSH_CONST → stack[0] = 1
// 36 SET_VAR scope[0][2] ← stack[0]
// 39 PUSH_UNDEFINED → stack[0] = undefined
// 40 GET_VAR → stack[1] = scope[2][1]
// 42 GET_GLOBAL → stack[2] = navigator
// 45 CALL func.apply(thisArg, [1 args]) → stack[0]
// 47 SET_VAR scope[0][3] ← stack[0]
// 50 PUSH_UNDEFINED → stack[0] = undefined
// 51 GET_VAR → stack[1] = scope[2][0]
// 53 GET_GLOBAL → stack[2] = Object
// 56 DUP → stack[3] = stack[2]
// 56 GET_PROP_NAME stack[3] ← stack[3]["getOwnPropertyDescriptor"]
// 58 GET_GLOBAL → stack[4] = navigator
// 60 GET_PROP_NAME stack[4] ← stack[4]["connection"]
// 62 PUSH_STRING → stack[5] = "rtt"
// 65 CALL func.apply(thisArg, [2 args]) → stack[2]
// 67 CALL func.apply(thisArg, [1 args]) → stack[0]
// 68 PUSH_STRING → stack[1] = "object"
// 71 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 71 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=75
// 73 PUSH_CONST → stack[0] = 2
// 75 JUMP → JUMP_TO=78
// 77 PUSH_CONST → stack[1] = 1
// 80 SET_VAR scope[0][4] ← stack[1]
// 82 JUMP → JUMP_TO=91
// 85 SET_VAR scope[0][7] ← stack[0]
// 87 PUSH_CONST → stack[0] = 3
// 90 SET_VAR scope[0][4] ← stack[0]
// 92 PUSH_STRING → stack[0] = ""
// 95 GET_VAR → stack[1] = scope[0][2]
// 98 ADD stack[0] = stack[0] + stack[1]
// 99 GET_VAR → stack[1] = scope[0][3]
// 102 ADD stack[0] = stack[0] + stack[1]
// 103 GET_VAR → stack[1] = scope[0][4]
// 106 ADD stack[0] = stack[0] + stack[1]
// 107 SET_VAR scope[0][5] ← stack[0]
// 110 GET_VAR → stack[0] = scope[0][5]
// 113 DUP → stack[1] = stack[0]
// 113 GET_PROP_NAME stack[1] ← stack[1]["includes"]
// 115 PUSH_STRING → stack[2] = "2"
// 118 CALL func.apply(thisArg, [1 args]) → stack[0]
// 120 SET_VAR scope[1][3] ← stack[0]
// 123 PUSH_TRUE → stack[0] = true
// 124 SET_VAR scope[1][2] ← stack[0]
// 127 NEW_OBJECT → stack[0] = {}
// 128 GET_VAR → stack[1] = scope[0][5]
// 130 DEFINE_PROP Object.defineProperty(stack[0], "data", stack[1])
// 133 RETURN stack[0]
