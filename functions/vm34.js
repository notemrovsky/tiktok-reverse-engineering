// 1 NEW_OBJECT → stack[0] = {}
// 2 SET_VAR scope[0][3] ← stack[0]
// 5 NEW_OBJECT → stack[0] = {}
// 6 GET_VAR → stack[1] = scope[0][2]
// 8 GET_PROP_NAME stack[1] ← stack[1]["charging"]
// 10 JUMP_IF_FALSE if (!stack[1]) JUMP_TO=14
// 12 PUSH_CONST → stack[1] = 1
// 14 JUMP → JUMP_TO=17
// 16 PUSH_CONST → stack[2] = 2
// 18 DEFINE_PROP Object.defineProperty(stack[1], "charging", stack[2])
// 20 GET_GLOBAL → stack[2] = Math
// 23 DUP → stack[3] = stack[2]
// 23 GET_PROP_NAME stack[3] ← stack[3]["round"]
// 26 GET_VAR → stack[4] = scope[0][2]
// 28 GET_PROP_NAME stack[4] ← stack[4]["level"]
// 30 PUSH_CONST → stack[5] = 100
// 33 MUL stack[4] = stack[4] * stack[5]
// 34 CALL func.apply(thisArg, [1 args]) → stack[2]
// 35 DEFINE_PROP Object.defineProperty(stack[1], "level", stack[2])
// 37 PUSH_STRING → stack[2] = ""
// 40 GET_VAR → stack[3] = scope[0][2]
// 42 GET_PROP_NAME stack[3] ← stack[3]["chargingTime"]
// 45 ADD stack[2] = stack[2] + stack[3]
// 45 DEFINE_PROP Object.defineProperty(stack[1], "chargingTime", stack[2])
// 47 PUSH_STRING → stack[2] = ""
// 50 GET_VAR → stack[3] = scope[0][2]
// 52 GET_PROP_NAME stack[3] ← stack[3]["dischargingTime"]
// 55 ADD stack[2] = stack[2] + stack[3]
// 55 DEFINE_PROP Object.defineProperty(stack[1], "dischargingTime", stack[2])
// 58 SET_VAR scope[0][3] ← stack[1]
// 60 JUMP → JUMP_TO=83
// 63 SET_VAR scope[0][4] ← stack[0]
// 66 GET_VAR → stack[0] = scope[3][11]
// 69 DUP → stack[1] = stack[0]
// 69 GET_PROP_NAME stack[1] ← stack[1]["push"]
// 72 NEW_OBJECT → stack[2] = {}
// 73 GET_VAR → stack[3] = scope[0][4]
// 75 DEFINE_PROP Object.defineProperty(stack[2], "err", stack[3])
// 77 PUSH_STRING → stack[3] = "d_b"
// 79 DEFINE_PROP Object.defineProperty(stack[2], "type", stack[3])
// 82 CALL func.apply(thisArg, [1 args]) → stack[0]
// 84 POP stack[0]
// 85 GET_VAR → stack[0] = scope[0][3]
// 88 RETURN stack[0]
