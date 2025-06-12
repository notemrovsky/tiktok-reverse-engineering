// 0 GET_GLOBAL → stack[0] = document
// 2 GET_PROP_NAME stack[0] ← stack[0]["body"]
// 5 DUP → stack[1] = stack[0]
// 5 GET_PROP_NAME stack[1] ← stack[1]["removeChild"]
// 8 GET_VAR → stack[2] = scope[1][6]
// 11 CALL func.apply(thisArg, [1 args]) → stack[0]
// 13 POP stack[0]
// 14 GET_VAR → stack[0] = scope[1][5]
// 16 GET_PROP_NAME stack[0] ← stack[0]["interval"]
// 18 PUSH_CONST → stack[1] = 2
// 21 MUL stack[0] = stack[0] * stack[1]
// 22 GET_VAR → stack[1] = scope[1][5]
// 24 PUSH_STRING → stack[2] = "interval"
// 27 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 28 POP stack[0]
// 29 GET_VAR → stack[0] = scope[1][5]
// 31 GET_PROP_NAME stack[0] ← stack[0]["interval"]
// 33 PUSH_CONST → stack[1] = 2
// 35 PUSH_CONST → stack[2] = 60
// 38 MUL stack[1] = stack[1] * stack[2]
// 38 PUSH_CONST → stack[2] = 1000
// 41 MUL stack[1] = stack[1] * stack[2]
// 42 GREATER_EQUAL stack[0] = stack[0] >= stack[1]
// 42 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=55
// 45 GET_VAR → stack[0] = scope[1][5]
// 47 PUSH_CONST → stack[1] = 2
// 49 PUSH_CONST → stack[2] = 60
// 52 MUL stack[1] = stack[1] * stack[2]
// 52 PUSH_CONST → stack[2] = 1000
// 55 MUL stack[1] = stack[1] * stack[2]
// 55 SET_GLOBAL_PROP stack[1]["interval"] ← stack[0]
// 58 GET_VAR → stack[0] = scope[1][5]
// 60 GET_PROP_NAME stack[0] ← stack[0]["times"]
// 62 PUSH_CONST → stack[1] = 1
// 65 ADD stack[0] = stack[0] + stack[1]
// 66 GET_VAR → stack[1] = scope[1][5]
// 68 PUSH_STRING → stack[2] = "times"
// 71 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 72 POP stack[0]
// 73 GET_VAR → stack[0] = scope[2][2]
// 75 PUSH_CONST → stack[1] = 0
// 78 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 78 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=85
// 80 PUSH_CONST → stack[0] = 3
// 83 SET_VAR scope[3][7] ← stack[0]
// 85 JUMP → JUMP_TO=99
// 88 GET_VAR → stack[0] = scope[2][2]
// 90 PUSH_CONST → stack[1] = 0
// 93 GREATER_THAN stack[0] = stack[0] > stack[1]
// 93 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=98
// 95 PUSH_CONST → stack[0] = 1
// 98 SET_VAR scope[3][7] ← stack[0]
// 100 PUSH_SCOPE_REF → stack[0] = scope[2], stack[1] = 2
// 104 POST_INC stack[0] = stack[0][stack[1]]++ (old value)
// 105 POP stack[0]
// 106 GET_VAR → stack[0] = scope[1][5]
// 108 GET_PROP_NAME stack[0] ← stack[0]["times"]
// 110 PUSH_CONST → stack[1] = 3
// 113 LESS_THAN stack[0] = stack[0] < stack[1]
// 113 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=128
// 116 PUSH_UNDEFINED → stack[0] = undefined
// 116 GET_GLOBAL → stack[1] = setTimeout
// 118 PUSH_FUNCTION → stack[2] = function[210]
// 121 GET_VAR → stack[3] = scope[1][5]
// 123 GET_PROP_NAME stack[3] ← stack[3]["interval"]
// 126 CALL func.apply(thisArg, [2 args]) → stack[0]
// 128 POP stack[0]
// 128 JUMP → JUMP_TO=139
// 131 PUSH_UNDEFINED → stack[0] = undefined
// 132 GET_VAR → stack[1] = scope[2][3]
// 135 GET_VAR → stack[2] = scope[1][2]
// 138 CALL func.apply(thisArg, [1 args]) → stack[0]
// 140 POP stack[0]
// 141 PUSH_UNDEFINED → stack[0] = undefined
// 142 RETURN stack[0]
