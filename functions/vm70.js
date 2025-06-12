// 1 PUSH_SCOPE → stack[0] = scope
// 2 SET_VAR scope[0][3] ← stack[0]
// 5 GET_VAR → stack[0] = scope[1][8]
// 8 DUP → stack[1] = stack[0]
// 8 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 11 PUSH_SCOPE → stack[2] = scope
// 11 GET_PROP_NAME stack[2] ← stack[2]["_byted_method"]
// 14 CALL func.apply(thisArg, [1 args]) → stack[0]
// 15 PUSH_CONST → stack[1] = 1
// 18 NEGATE stack[1] = -stack[1]
// 19 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 20 SET_VAR scope[0][4] ← stack[0]
// 23 PUSH_UNDEFINED → stack[0] = undefined
// 24 GET_VAR → stack[1] = scope[3][13]
// 27 PUSH_SCOPE → stack[2] = scope
// 27 GET_PROP_NAME stack[2] ← stack[2]["_byted_url"]
// 30 CALL func.apply(thisArg, [1 args]) → stack[0]
// 31 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=34
// 34 GET_VAR → stack[0] = scope[0][4]
// 36 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=175
// 38 GET_GLOBAL → stack[0] = URL
// 41 PUSH_SCOPE → stack[1] = scope
// 41 GET_PROP_NAME stack[1] ← stack[1]["_byted_url"]
// 43 GET_GLOBAL → stack[2] = location
// 46 FUNCTION_BIND_APPLY → stack[0] = new stack[2](2 args)
// 48 SET_VAR scope[0][5] ← stack[0]
// 51 GET_VAR → stack[0] = scope[3][1]
// 53 GET_PROP_NAME stack[0] ← stack[0]["grecaptcha"]
// 55 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=62
// 58 GET_VAR → stack[0] = scope[3][1]
// 60 GET_PROP_NAME stack[0] ← stack[0]["grecaptcha"]
// 62 GET_PROP_NAME stack[0] ← stack[0]["enabledPaths"]
// 64 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=81
// 67 GET_VAR → stack[0] = scope[3][1]
// 69 GET_PROP_NAME stack[0] ← stack[0]["grecaptcha"]
// 71 GET_PROP_NAME stack[0] ← stack[0]["enabledPaths"]
// 74 DUP → stack[1] = stack[0]
// 74 GET_PROP_NAME stack[1] ← stack[1]["includes"]
// 77 GET_VAR → stack[2] = scope[0][5]
// 79 GET_PROP_NAME stack[2] ← stack[2]["pathname"]
// 82 CALL func.apply(thisArg, [1 args]) → stack[0]
// 83 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=156
// 86 GET_VAR → stack[0] = scope[3][1]
// 88 GET_PROP_NAME stack[0] ← stack[0]["grecaptcha"]
// 90 GET_PROP_NAME stack[0] ← stack[0]["enabledPathActionMap"]
// 93 SET_VAR scope[0][6] ← stack[0]
// 96 GET_VAR → stack[0] = scope[0][6]
// 99 GET_VAR → stack[1] = scope[0][5]
// 101 GET_PROP_NAME stack[1] ← stack[1]["pathname"]
// 104 GET_PROP stack[0] = stack[0][stack[1]]
// 104 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=115
// 107 GET_VAR → stack[0] = scope[0][6]
// 110 GET_VAR → stack[1] = scope[0][5]
// 112 GET_PROP_NAME stack[1] ← stack[1]["pathname"]
// 115 GET_PROP stack[0] = stack[0][stack[1]]
// 115 JUMP → JUMP_TO=121
// 118 GET_VAR → stack[1] = scope[0][5]
// 120 GET_PROP_NAME stack[1] ← stack[1]["pathname"]
// 123 SET_VAR scope[0][7] ← stack[1]
// 126 PUSH_UNDEFINED → stack[1] = undefined
// 127 GET_VAR → stack[2] = scope[2][7]
// 130 GET_VAR → stack[3] = scope[3][1]
// 132 GET_PROP_NAME stack[3] ← stack[3]["grecaptcha"]
// 134 GET_PROP_NAME stack[3] ← stack[3]["siteKey"]
// 137 GET_VAR → stack[4] = scope[0][7]
// 140 CALL func.apply(thisArg, [2 args]) → stack[1]
// 142 DUP → stack[2] = stack[1]
// 142 GET_PROP_NAME stack[2] ← stack[2]["then"]
// 144 PUSH_FUNCTION → stack[3] = function[71]
// 147 CALL func.apply(thisArg, [1 args]) → stack[1]
// 149 DUP → stack[2] = stack[1]
// 149 GET_PROP_NAME stack[2] ← stack[2]["catch"]
// 151 PUSH_FUNCTION → stack[3] = function[72]
// 154 CALL func.apply(thisArg, [1 args]) → stack[1]
// 156 POP stack[1]
// 156 JUMP → JUMP_TO=174
// 159 GET_VAR → stack[1] = scope[1][2]
// 161 GET_PROP_NAME stack[1] ← stack[1]["_doRestOfXHRSend"]
// 164 DUP → stack[2] = stack[1]
// 164 GET_PROP_NAME stack[2] ← stack[2]["call"]
// 167 GET_VAR → stack[3] = scope[0][3]
// 170 GET_VAR → stack[4] = scope[0][2]
// 173 CALL func.apply(thisArg, [2 args]) → stack[1]
// 175 POP stack[1]
// 175 JUMP → JUMP_TO=189
// 178 GET_VAR → stack[1] = scope[1][5]
// 181 DUP → stack[2] = stack[1]
// 181 GET_PROP_NAME stack[2] ← stack[2]["apply"]
// 184 PUSH_SCOPE → stack[3] = scope
// 185 GET_VAR → stack[4] = scope[0][1]
// 188 CALL func.apply(thisArg, [2 args]) → stack[1]
// 190 RETURN stack[1]
// 191 PUSH_UNDEFINED → stack[1] = undefined
// 192 RETURN stack[1]
