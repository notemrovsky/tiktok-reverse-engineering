// 0 GET_GLOBAL → stack[0] = document
// 3 DUP → stack[1] = stack[0]
// 3 GET_PROP_NAME stack[1] ← stack[1]["createElement"]
// 5 PUSH_STRING → stack[2] = "canvas"
// 8 CALL func.apply(thisArg, [1 args]) → stack[0]
// 10 SET_VAR scope[0][2] ← stack[0]
// 13 GET_VAR → stack[0] = scope[0][2]
// 15 PUSH_CONST → stack[1] = 48
// 17 SET_GLOBAL_PROP stack[1]["width"] ← stack[0]
// 20 GET_VAR → stack[0] = scope[0][2]
// 22 PUSH_CONST → stack[1] = 16
// 24 SET_GLOBAL_PROP stack[1]["height"] ← stack[0]
// 27 GET_VAR → stack[0] = scope[0][2]
// 30 DUP → stack[1] = stack[0]
// 30 GET_PROP_NAME stack[1] ← stack[1]["getContext"]
// 32 PUSH_STRING → stack[2] = "2d"
// 35 CALL func.apply(thisArg, [1 args]) → stack[0]
// 37 SET_VAR scope[0][3] ← stack[0]
// 40 GET_VAR → stack[0] = scope[0][3]
// 42 PUSH_STRING → stack[1] = "14px serif"
// 44 SET_GLOBAL_PROP stack[1]["font"] ← stack[0]
// 47 GET_VAR → stack[0] = scope[0][3]
// 50 DUP → stack[1] = stack[0]
// 50 GET_PROP_NAME stack[1] ← stack[1]["fillText"]
// 52 PUSH_STRING → stack[2] = "龘ฑภ경"
// 54 PUSH_CONST → stack[3] = 2
// 56 PUSH_CONST → stack[4] = 12
// 59 CALL func.apply(thisArg, [3 args]) → stack[0]
// 61 POP stack[0]
// 62 GET_VAR → stack[0] = scope[0][3]
// 64 PUSH_CONST → stack[1] = 2
// 66 SET_GLOBAL_PROP stack[1]["shadowBlur"] ← stack[0]
// 69 GET_VAR → stack[0] = scope[0][3]
// 71 PUSH_CONST → stack[1] = 1
// 73 SET_GLOBAL_PROP stack[1]["showOffsetX"] ← stack[0]
// 76 GET_VAR → stack[0] = scope[0][3]
// 78 PUSH_STRING → stack[1] = "lime"
// 80 SET_GLOBAL_PROP stack[1]["showColor"] ← stack[0]
// 83 GET_VAR → stack[0] = scope[0][3]
// 86 DUP → stack[1] = stack[0]
// 86 GET_PROP_NAME stack[1] ← stack[1]["arc"]
// 88 PUSH_CONST → stack[2] = 8
// 90 PUSH_CONST → stack[3] = 8
// 92 PUSH_CONST → stack[4] = 8
// 94 PUSH_CONST → stack[5] = 0
// 96 PUSH_CONST → stack[6] = 2
// 99 CALL func.apply(thisArg, [5 args]) → stack[0]
// 101 POP stack[0]
// 102 GET_VAR → stack[0] = scope[0][3]
// 105 DUP → stack[1] = stack[0]
// 105 GET_PROP_NAME stack[1] ← stack[1]["stroke"]
// 108 CALL func.apply(thisArg, [0 args]) → stack[0]
// 110 POP stack[0]
// 111 GET_VAR → stack[0] = scope[0][2]
// 114 DUP → stack[1] = stack[0]
// 114 GET_PROP_NAME stack[1] ← stack[1]["toDataURL"]
// 117 CALL func.apply(thisArg, [0 args]) → stack[0]
// 119 SET_VAR scope[0][4] ← stack[0]
// 122 PUSH_UNDEFINED → stack[0] = undefined
// 123 GET_VAR → stack[1] = scope[2][0]
// 126 GET_VAR → stack[2] = scope[0][4]
// 129 CALL func.apply(thisArg, [1 args]) → stack[0]
// 131 RETURN stack[0]
