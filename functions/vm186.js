// 0 GET_GLOBAL → stack[0] = Object
// 3 DUP → stack[1] = stack[0]
// 3 GET_PROP_NAME stack[1] ← stack[1]["getOwnPropertyNames"]
// 5 GET_GLOBAL → stack[2] = window
// 8 CALL func.apply(thisArg, [1 args]) → stack[0]
// 10 SET_VAR scope[0][2] ← stack[0]
// 12 PUSH_CONST → stack[0] = 1
// 15 NEGATE stack[0] = -stack[0]
// 16 SET_VAR scope[0][3] ← stack[0]
// 18 PUSH_CONST → stack[0] = 1
// 21 NEGATE stack[0] = -stack[0]
// 22 SET_VAR scope[0][4] ← stack[0]
// 25 GET_VAR → stack[0] = scope[0][2]
// 28 DUP → stack[1] = stack[0]
// 28 GET_PROP_NAME stack[1] ← stack[1]["forEach"]
// 30 PUSH_FUNCTION → stack[2] = function[187]
// 33 CALL func.apply(thisArg, [1 args]) → stack[0]
// 35 POP stack[0]
// 36 NEW_OBJECT → stack[0] = {}
// 37 NEW_OBJECT → stack[1] = {}
// 38 GET_VAR → stack[2] = scope[0][3]
// 40 DEFINE_PROP Object.defineProperty(stack[1], "a", stack[2])
// 43 GET_VAR → stack[2] = scope[0][4]
// 45 DEFINE_PROP Object.defineProperty(stack[1], "b", stack[2])
// 48 GET_VAR → stack[2] = scope[2][2]
// 51 DUP → stack[3] = stack[2]
// 51 GET_PROP_NAME stack[3] ← stack[3]["test"]
// 53 GET_GLOBAL → stack[4] = HTMLMediaElement
// 55 GET_PROP_NAME stack[4] ← stack[4]["prototype"]
// 57 GET_PROP_NAME stack[4] ← stack[4]["play"]
// 60 DUP → stack[5] = stack[4]
// 60 GET_PROP_NAME stack[5] ← stack[5]["toString"]
// 63 CALL func.apply(thisArg, [0 args]) → stack[4]
// 65 CALL func.apply(thisArg, [1 args]) → stack[2]
// 66 JUMP_IF_FALSE if (!stack[2]) JUMP_TO=70
// 68 PUSH_CONST → stack[2] = 1
// 70 JUMP → JUMP_TO=73
// 72 PUSH_CONST → stack[3] = 2
// 74 DEFINE_PROP Object.defineProperty(stack[2], "c", stack[3])
// 76 DEFINE_PROP Object.defineProperty(stack[1], "data", stack[2])
// 79 RETURN stack[1]
