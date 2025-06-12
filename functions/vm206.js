// 1 GET_VAR → stack[0] = scope[1][5]
// 3 GET_PROP_NAME stack[0] ← stack[0]["readyState"]
// 5 GET_GLOBAL → stack[1] = XMLHttpRequest
// 7 GET_PROP_NAME stack[1] ← stack[1]["DONE"]
// 10 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 10 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=173
// 13 GET_VAR → stack[0] = scope[1][5]
// 15 GET_PROP_NAME stack[0] ← stack[0]["status"]
// 18 SET_VAR scope[0][2] ← stack[0]
// 21 GET_VAR → stack[0] = scope[0][2]
// 23 PUSH_CONST → stack[1] = 200
// 26 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 26 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=122
// 29 GET_VAR → stack[0] = scope[1][4]
// 31 GET_PROP_NAME stack[0] ← stack[0]["interval"]
// 33 PUSH_CONST → stack[1] = 2
// 36 MUL stack[0] = stack[0] * stack[1]
// 37 GET_VAR → stack[1] = scope[1][4]
// 39 PUSH_STRING → stack[2] = "interval"
// 42 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 43 POP stack[0]
// 44 GET_VAR → stack[0] = scope[1][4]
// 46 GET_PROP_NAME stack[0] ← stack[0]["interval"]
// 48 PUSH_CONST → stack[1] = 2
// 50 PUSH_CONST → stack[2] = 60
// 53 MUL stack[1] = stack[1] * stack[2]
// 53 PUSH_CONST → stack[2] = 1000
// 56 MUL stack[1] = stack[1] * stack[2]
// 57 GREATER_THAN stack[0] = stack[0] > stack[1]
// 57 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=70
// 60 GET_VAR → stack[0] = scope[1][4]
// 62 PUSH_CONST → stack[1] = 2
// 64 PUSH_CONST → stack[2] = 60
// 67 MUL stack[1] = stack[1] * stack[2]
// 67 PUSH_CONST → stack[2] = 1000
// 70 MUL stack[1] = stack[1] * stack[2]
// 70 SET_GLOBAL_PROP stack[1]["interval"] ← stack[0]
// 73 GET_VAR → stack[0] = scope[1][4]
// 75 GET_PROP_NAME stack[0] ← stack[0]["times"]
// 77 PUSH_CONST → stack[1] = 1
// 80 ADD stack[0] = stack[0] + stack[1]
// 81 GET_VAR → stack[1] = scope[1][4]
// 83 PUSH_STRING → stack[2] = "times"
// 86 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 87 POP stack[0]
// 88 GET_VAR → stack[0] = scope[1][4]
// 90 GET_PROP_NAME stack[0] ← stack[0]["times"]
// 92 PUSH_CONST → stack[1] = 5
// 95 LESS_THAN stack[0] = stack[0] < stack[1]
// 95 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=110
// 98 PUSH_UNDEFINED → stack[0] = undefined
// 98 GET_GLOBAL → stack[1] = setTimeout
// 100 PUSH_FUNCTION → stack[2] = function[207]
// 103 GET_VAR → stack[3] = scope[1][4]
// 105 GET_PROP_NAME stack[3] ← stack[3]["interval"]
// 108 CALL func.apply(thisArg, [2 args]) → stack[0]
// 110 POP stack[0]
// 110 JUMP → JUMP_TO=121
// 113 PUSH_UNDEFINED → stack[0] = undefined
// 114 GET_VAR → stack[1] = scope[2][3]
// 117 GET_VAR → stack[2] = scope[1][2]
// 120 CALL func.apply(thisArg, [1 args]) → stack[0]
// 122 POP stack[0]
// 123 PUSH_UNDEFINED → stack[0] = undefined
// 124 RETURN stack[0]
// 125 GET_VAR → stack[0] = scope[1][5]
// 127 GET_PROP_NAME stack[0] ← stack[0]["response"]
// 130 SET_VAR scope[0][3] ← stack[0]
// 133 GET_VAR → stack[0] = scope[0][3]
// 135 GET_PROP_NAME stack[0] ← stack[0]["code"]
// 137 PUSH_CONST → stack[1] = 0
// 140 NOT_EQUAL stack[0] = stack[0] != stack[1]
// 140 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=142
// 143 PUSH_UNDEFINED → stack[0] = undefined
// 144 RETURN stack[0]
// 145 PUSH_UNDEFINED → stack[0] = undefined
// 146 GET_VAR → stack[1] = scope[3][3]
// 149 GET_VAR → stack[2] = scope[0][3]
// 151 GET_PROP_NAME stack[2] ← stack[2]["content"]
// 154 CALL func.apply(thisArg, [1 args]) → stack[0]
// 156 SET_VAR scope[0][4] ← stack[0]
// 158 JUMP → JUMP_TO=164
// 161 SET_VAR scope[0][5] ← stack[-1]
// 164 PUSH_UNDEFINED → stack[-1] = undefined
// 165 RETURN stack[-1]
// 166 PUSH_UNDEFINED → stack[-1] = undefined
// 167 GET_VAR → stack[0] = scope[1][3]
// 170 GET_VAR → stack[1] = scope[0][4]
// 173 CALL func.apply(thisArg, [1 args]) → stack[-1]
// 175 POP stack[-1]
// 176 PUSH_UNDEFINED → stack[-1] = undefined
// 177 RETURN stack[-1]
