// 0 PUSH_CONST → stack[0] = 0
// 3 SET_VAR scope[0][4] ← stack[0]
// 5 PUSH_CONST → stack[0] = 0
// 8 SET_VAR scope[0][5] ← stack[0]
// 11 GET_VAR → stack[0] = scope[0][5]
// 14 GET_VAR → stack[1] = scope[0][3]
// 16 GET_PROP_NAME stack[1] ← stack[1]["length"]
// 19 LESS_THAN stack[0] = stack[0] < stack[1]
// 19 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=49
// 22 GET_VAR → stack[0] = scope[0][4]
// 25 GET_VAR → stack[1] = scope[0][3]
// 28 GET_VAR → stack[2] = scope[0][5]
// 31 GET_PROP stack[1] = stack[1][stack[2]]
// 32 ADD stack[0] = stack[0] + stack[1]
// 33 GET_VAR → stack[1] = scope[0][2]
// 35 GET_PROP_NAME stack[1] ← stack[1]["length"]
// 37 PUSH_CONST → stack[2] = 1
// 40 ADD stack[1] = stack[1] + stack[2]
// 41 MOD stack[0] = stack[0] % stack[1]
// 42 SET_VAR scope[0][4] ← stack[0]
// 44 PUSH_SCOPE_REF → stack[0] = scope[0], stack[1] = 5
// 48 PRE_INC stack[0] = ++stack[1][stack[2]] (new value)
// 49 POP stack[0]
// 49 JUMP → JUMP_TO=9
// 51 PUSH_CONST → stack[0] = 0
// 54 SET_VAR scope[0][6] ← stack[0]
// 57 GET_VAR → stack[0] = scope[0][6]
// 60 GET_VAR → stack[1] = scope[0][2]
// 62 GET_PROP_NAME stack[1] ← stack[1]["length"]
// 65 LESS_THAN stack[0] = stack[0] < stack[1]
// 65 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=99
// 68 GET_VAR → stack[0] = scope[0][4]
// 71 GET_VAR → stack[1] = scope[0][2]
// 74 DUP → stack[2] = stack[1]
// 74 GET_PROP_NAME stack[2] ← stack[2]["charCodeAt"]
// 77 GET_VAR → stack[3] = scope[0][6]
// 80 CALL func.apply(thisArg, [1 args]) → stack[1]
// 82 ADD stack[0] = stack[0] + stack[1]
// 83 GET_VAR → stack[1] = scope[0][2]
// 85 GET_PROP_NAME stack[1] ← stack[1]["length"]
// 87 PUSH_CONST → stack[2] = 1
// 90 ADD stack[1] = stack[1] + stack[2]
// 91 MOD stack[0] = stack[0] % stack[1]
// 92 SET_VAR scope[0][4] ← stack[0]
// 94 PUSH_SCOPE_REF → stack[0] = scope[0], stack[1] = 6
// 98 PRE_INC stack[0] = ++stack[1][stack[2]] (new value)
// 99 POP stack[0]
// 99 JUMP → JUMP_TO=55
// 102 GET_VAR → stack[0] = scope[0][2]
// 105 DUP → stack[1] = stack[0]
// 105 GET_PROP_NAME stack[1] ← stack[1]["substring"]
// 107 PUSH_CONST → stack[2] = 0
// 110 GET_VAR → stack[3] = scope[0][4]
// 113 CALL func.apply(thisArg, [2 args]) → stack[0]
// 114 GET_GLOBAL → stack[1] = String
// 116 GET_PROP_NAME stack[1] ← stack[1]["fromCharCode"]
// 119 DUP → stack[2] = stack[1]
// 119 GET_PROP_NAME stack[2] ← stack[2]["apply"]
// 121 GET_GLOBAL → stack[3] = String
// 124 PUSH_UNDEFINED → stack[4] = undefined
// 125 GET_VAR → stack[5] = scope[2][0]
// 128 GET_VAR → stack[6] = scope[0][3]
// 131 CALL func.apply(thisArg, [1 args]) → stack[4]
// 133 CALL func.apply(thisArg, [2 args]) → stack[1]
// 135 ADD stack[0] = stack[0] + stack[1]
// 136 GET_VAR → stack[1] = scope[0][2]
// 139 DUP → stack[2] = stack[1]
// 139 GET_PROP_NAME stack[2] ← stack[2]["substring"]
// 142 GET_VAR → stack[3] = scope[0][4]
// 145 CALL func.apply(thisArg, [1 args]) → stack[1]
// 147 ADD stack[0] = stack[0] + stack[1]
// 148 RETURN stack[0]
