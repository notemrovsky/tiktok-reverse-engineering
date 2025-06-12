// 0 GET_GLOBAL → stack[0] = document
// 2 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=6
// 4 GET_GLOBAL → stack[0] = document
// 6 GET_PROP_NAME stack[0] ← stack[0]["addEventListener"]
// 9 NOT stack[0] = !stack[0]
// 9 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=11
// 12 PUSH_UNDEFINED → stack[0] = undefined
// 13 RETURN stack[0]
// 13 GET_GLOBAL → stack[0] = document
// 15 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=19
// 17 GET_GLOBAL → stack[0] = document
// 19 GET_PROP_NAME stack[0] ← stack[0]["createEvent"]
// 21 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=35
// 23 GET_GLOBAL → stack[0] = document
// 26 DUP → stack[1] = stack[0]
// 26 GET_PROP_NAME stack[1] ← stack[1]["createEvent"]
// 28 PUSH_STRING → stack[2] = "TouchEvent"
// 31 CALL func.apply(thisArg, [1 args]) → stack[0]
// 33 POP stack[0]
// 34 PUSH_TRUE → stack[0] = true
// 35 SET_VAR scope[1][4] ← stack[0]
// 37 JUMP → JUMP_TO=41
// 40 SET_VAR scope[0][7] ← stack[-1]
// 43 PUSH_UNDEFINED → stack[-1] = undefined
// 44 GET_VAR → stack[0] = scope[2][2]
// 47 CALL func.apply(thisArg, [0 args]) → stack[-1]
// 49 SET_VAR scope[0][2] ← stack[-1]
// 52 GET_VAR → stack[-1] = scope[1][11]
// 55 NOT stack[-1] = !stack[-1]
// 55 JUMP_IF_FALSE if (!stack[-1]) JUMP_TO=132
// 57 GET_GLOBAL → stack[-1] = Object
// 60 DUP → stack[0] = stack[-1]
// 60 GET_PROP_NAME stack[0] ← stack[0]["keys"]
// 63 GET_VAR → stack[1] = scope[1][10]
// 66 CALL func.apply(thisArg, [1 args]) → stack[-1]
// 68 SET_VAR scope[0][3] ← stack[-1]
// 70 PUSH_CONST → stack[-1] = 0
// 73 SET_VAR scope[0][4] ← stack[-1]
// 76 GET_VAR → stack[-1] = scope[0][3]
// 79 SET_VAR scope[0][5] ← stack[-1]
// 82 GET_VAR → stack[-1] = scope[0][4]
// 85 GET_VAR → stack[0] = scope[0][5]
// 87 GET_PROP_NAME stack[0] ← stack[0]["length"]
// 90 LESS_THAN stack[-1] = stack[-1] < stack[0]
// 90 JUMP_IF_FALSE if (!stack[-1]) JUMP_TO=128
// 93 GET_VAR → stack[-1] = scope[0][5]
// 96 GET_VAR → stack[0] = scope[0][4]
// 99 GET_PROP stack[-1] = stack[-1][stack[0]]
// 100 SET_VAR scope[0][6] ← stack[-1]
// 102 GET_GLOBAL → stack[-1] = document
// 105 DUP → stack[0] = stack[-1]
// 105 GET_PROP_NAME stack[0] ← stack[0]["addEventListener"]
// 108 GET_VAR → stack[1] = scope[0][6]
// 111 GET_VAR → stack[2] = scope[1][10]
// 114 GET_VAR → stack[3] = scope[0][6]
// 117 GET_PROP stack[2] = stack[2][stack[3]]
// 118 GET_VAR → stack[3] = scope[0][2]
// 121 CALL func.apply(thisArg, [3 args]) → stack[-1]
// 123 POP stack[-1]
// 123 PUSH_SCOPE_REF → stack[-1] = scope[0], stack[0] = 4
// 127 POST_INC stack[-1] = stack[-1][stack[0]]++ (old value)
// 128 POP stack[-1]
// 128 JUMP → JUMP_TO=80
// 131 PUSH_TRUE → stack[-1] = true
// 132 SET_VAR scope[1][11] ← stack[-1]
// 135 PUSH_UNDEFINED → stack[-1] = undefined
// 136 RETURN stack[-1]
