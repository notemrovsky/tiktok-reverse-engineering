// 0 GET_GLOBAL → stack[0] = Object
// 3 DUP → stack[1] = stack[0]
// 3 GET_PROP_NAME stack[1] ← stack[1]["getOwnPropertyNames"]
// 5 GET_GLOBAL → stack[2] = window
// 8 CALL func.apply(thisArg, [1 args]) → stack[0]
// 10 SET_VAR scope[0][2] ← stack[0]
// 13 PUSH_UNDEFINED → stack[0] = undefined
// 14 GET_VAR → stack[1] = scope[1][5]
// 16 GET_GLOBAL → stack[2] = window
// 19 GET_VAR → stack[3] = scope[0][2]
// 22 CALL func.apply(thisArg, [2 args]) → stack[0]
// 24 SET_VAR scope[0][3] ← stack[0]
// 27 PUSH_UNDEFINED → stack[0] = undefined
// 28 GET_VAR → stack[1] = scope[2][0]
// 31 GET_VAR → stack[2] = scope[0][3]
// 33 PUSH_CONST → stack[3] = 2
// 36 CALL func.apply(thisArg, [2 args]) → stack[0]
// 38 SET_VAR scope[0][4] ← stack[0]
// 41 GET_VAR → stack[0] = scope[0][4]
// 43 GET_PROP_NAME stack[0] ← stack[0]["0"]
// 46 SET_VAR scope[0][5] ← stack[0]
// 49 GET_VAR → stack[0] = scope[0][4]
// 51 GET_PROP_NAME stack[0] ← stack[0]["1"]
// 54 SET_VAR scope[0][6] ← stack[0]
// 57 PUSH_UNDEFINED → stack[0] = undefined
// 58 GET_VAR → stack[1] = scope[1][4]
// 61 CALL func.apply(thisArg, [0 args]) → stack[0]
// 63 SET_VAR scope[0][7] ← stack[0]
// 66 PUSH_UNDEFINED → stack[0] = undefined
// 67 GET_VAR → stack[1] = scope[2][0]
// 70 GET_VAR → stack[2] = scope[0][7]
// 72 PUSH_CONST → stack[3] = 3
// 75 CALL func.apply(thisArg, [2 args]) → stack[0]
// 77 SET_VAR scope[0][8] ← stack[0]
// 80 GET_VAR → stack[0] = scope[0][8]
// 82 GET_PROP_NAME stack[0] ← stack[0]["0"]
// 85 SET_VAR scope[0][9] ← stack[0]
// 88 GET_VAR → stack[0] = scope[0][8]
// 90 GET_PROP_NAME stack[0] ← stack[0]["1"]
// 93 SET_VAR scope[0][10] ← stack[0]
// 96 GET_VAR → stack[0] = scope[0][8]
// 98 GET_PROP_NAME stack[0] ← stack[0]["2"]
// 101 SET_VAR scope[0][11] ← stack[0]
// 104 NEW_OBJECT → stack[0] = {}
// 105 NEW_OBJECT → stack[1] = {}
// 106 GET_VAR → stack[2] = scope[0][2]
// 108 GET_PROP_NAME stack[2] ← stack[2]["length"]
// 110 DEFINE_PROP Object.defineProperty(stack[1], "a", stack[2])
// 113 GET_VAR → stack[2] = scope[0][9]
// 115 DEFINE_PROP Object.defineProperty(stack[1], "b", stack[2])
// 118 GET_VAR → stack[2] = scope[0][5]
// 120 DEFINE_PROP Object.defineProperty(stack[1], "c", stack[2])
// 123 GET_VAR → stack[2] = scope[0][6]
// 125 DEFINE_PROP Object.defineProperty(stack[1], "d", stack[2])
// 128 GET_VAR → stack[2] = scope[0][10]
// 130 DEFINE_PROP Object.defineProperty(stack[1], "e", stack[2])
// 133 GET_VAR → stack[2] = scope[0][11]
// 135 DEFINE_PROP Object.defineProperty(stack[1], "f", stack[2])
// 137 DEFINE_PROP Object.defineProperty(stack[0], "data", stack[1])
// 140 RETURN stack[0]
