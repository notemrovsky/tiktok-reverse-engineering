// 1 GET_VAR → stack[0] = scope[1][2]
// 3 GET_PROP_NAME stack[0] ← stack[0]["document"]
// 5 PUSH_STRING → stack[1] = ""
// 7 GET_GLOBAL → stack[2] = document
// 9 GET_PROP_NAME stack[2] ← stack[2]["characterSet"]
// 12 ADD stack[1] = stack[1] + stack[2]
// 12 SET_GLOBAL_PROP stack[1]["characterSet"] ← stack[0]
// 15 GET_VAR → stack[0] = scope[1][2]
// 17 GET_PROP_NAME stack[0] ← stack[0]["document"]
// 19 PUSH_STRING → stack[1] = ""
// 21 GET_GLOBAL → stack[2] = document
// 23 GET_PROP_NAME stack[2] ← stack[2]["compatMode"]
// 26 ADD stack[1] = stack[1] + stack[2]
// 26 SET_GLOBAL_PROP stack[1]["compatMode"] ← stack[0]
// 29 GET_VAR → stack[0] = scope[1][2]
// 31 GET_PROP_NAME stack[0] ← stack[0]["document"]
// 33 PUSH_STRING → stack[1] = ""
// 35 GET_GLOBAL → stack[2] = document
// 37 GET_PROP_NAME stack[2] ← stack[2]["documentMode"]
// 40 ADD stack[1] = stack[1] + stack[2]
// 40 SET_GLOBAL_PROP stack[1]["documentMode"] ← stack[0]
// 43 GET_VAR → stack[0] = scope[1][2]
// 45 GET_PROP_NAME stack[0] ← stack[0]["document"]
// 47 PUSH_STRING → stack[1] = ""
// 49 GET_GLOBAL → stack[2] = document
// 51 GET_PROP_NAME stack[2] ← stack[2]["URL"]
// 54 ADD stack[1] = stack[1] + stack[2]
// 54 SET_GLOBAL_PROP stack[1]["URL"] ← stack[0]
// 57 GET_VAR → stack[0] = scope[1][2]
// 59 GET_PROP_NAME stack[0] ← stack[0]["document"]
// 62 PUSH_UNDEFINED → stack[1] = undefined
// 63 GET_VAR → stack[2] = scope[2][14]
// 65 GET_GLOBAL → stack[3] = document
// 67 GET_PROP_NAME stack[3] ← stack[3]["layers"]
// 70 CALL func.apply(thisArg, [1 args]) → stack[1]
// 71 SET_GLOBAL_PROP stack[1]["layers"] ← stack[0]
// 74 GET_VAR → stack[0] = scope[1][2]
// 76 GET_PROP_NAME stack[0] ← stack[0]["document"]
// 79 PUSH_UNDEFINED → stack[1] = undefined
// 80 GET_VAR → stack[2] = scope[2][14]
// 82 GET_GLOBAL → stack[3] = document
// 84 GET_PROP_NAME stack[3] ← stack[3]["all"]
// 87 CALL func.apply(thisArg, [1 args]) → stack[1]
// 88 SET_GLOBAL_PROP stack[1]["all"] ← stack[0]
// 91 GET_VAR → stack[0] = scope[1][2]
// 93 GET_PROP_NAME stack[0] ← stack[0]["document"]
// 96 PUSH_UNDEFINED → stack[1] = undefined
// 97 GET_VAR → stack[2] = scope[2][14]
// 99 GET_GLOBAL → stack[3] = document
// 101 GET_PROP_NAME stack[3] ← stack[3]["images"]
// 104 CALL func.apply(thisArg, [1 args]) → stack[1]
// 105 SET_GLOBAL_PROP stack[1]["images"] ← stack[0]
// 107 JUMP → JUMP_TO=130
// 110 SET_VAR scope[0][2] ← stack[-1]
// 113 GET_VAR → stack[-1] = scope[1][11]
// 116 DUP → stack[0] = stack[-1]
// 116 GET_PROP_NAME stack[0] ← stack[0]["push"]
// 119 NEW_OBJECT → stack[1] = {}
// 120 GET_VAR → stack[2] = scope[0][2]
// 122 DEFINE_PROP Object.defineProperty(stack[1], "err", stack[2])
// 124 PUSH_STRING → stack[2] = "d_d"
// 126 DEFINE_PROP Object.defineProperty(stack[1], "type", stack[2])
// 129 CALL func.apply(thisArg, [1 args]) → stack[-1]
// 131 POP stack[-1]
// 132 PUSH_UNDEFINED → stack[-1] = undefined
// 133 RETURN stack[-1]
