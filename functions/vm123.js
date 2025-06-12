// 0 PUSH_STRING → stack[0] = ""
// 3 SET_VAR scope[0][3] ← stack[0]
// 6 GET_VAR → stack[0] = scope[0][2]
// 8 FOR_IN_SETUP scope[8] = [Object.keys(stack[0]), stack[0]]
// 10 PUSH_SCOPE_REF → stack[0] = scope[0], stack[1] = 4
// 13 FOR_IN_NEXT stack[2][stack[1]] = next_key_from_scope[8]; stack[0] = has_more
// 15 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=43
// 18 GET_VAR → stack[0] = scope[0][3]
// 20 PUSH_STRING → stack[1] = "&"
// 23 GET_VAR → stack[2] = scope[0][4]
// 26 ADD stack[1] = stack[1] + stack[2]
// 26 PUSH_STRING → stack[2] = "="
// 29 ADD stack[1] = stack[1] + stack[2]
// 30 GET_VAR → stack[2] = scope[0][2]
// 33 GET_VAR → stack[3] = scope[0][4]
// 36 GET_PROP stack[2] = stack[2][stack[3]]
// 37 ADD stack[1] = stack[1] + stack[2]
// 38 ADD stack[0] = stack[0] + stack[1]
// 38 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 3
// 42 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 43 POP stack[0]
// 43 JUMP → JUMP_TO=9
// 46 GET_VAR → stack[0] = scope[0][3]
// 49 DUP → stack[1] = stack[0]
// 49 GET_PROP_NAME stack[1] ← stack[1]["substring"]
// 51 PUSH_CONST → stack[2] = 1
// 54 CALL func.apply(thisArg, [1 args]) → stack[0]
// 56 SET_VAR scope[0][3] ← stack[0]
// 58 GET_GLOBAL → stack[0] = String
// 61 DUP → stack[1] = stack[0]
// 61 GET_PROP_NAME stack[1] ← stack[1]["fromCharCode"]
// 63 GET_GLOBAL → stack[2] = Math
// 66 DUP → stack[3] = stack[2]
// 66 GET_PROP_NAME stack[3] ← stack[3]["floor"]
// 69 GET_VAR → stack[4] = scope[2][5]
// 72 DUP → stack[5] = stack[4]
// 72 GET_PROP_NAME stack[5] ← stack[5]["rand"]
// 75 CALL func.apply(thisArg, [0 args]) → stack[4]
// 76 PUSH_CONST → stack[5] = 256
// 79 MUL stack[4] = stack[4] * stack[5]
// 80 CALL func.apply(thisArg, [1 args]) → stack[2]
// 82 CALL func.apply(thisArg, [1 args]) → stack[0]
// 84 SET_VAR scope[0][5] ← stack[0]
// 87 PUSH_UNDEFINED → stack[0] = undefined
// 88 GET_VAR → stack[1] = scope[2][1]
// 91 GET_VAR → stack[2] = scope[0][5]
// 94 GET_VAR → stack[3] = scope[0][3]
// 97 CALL func.apply(thisArg, [2 args]) → stack[0]
// 99 SET_VAR scope[0][6] ← stack[0]
// 102 GET_VAR → stack[0] = scope[0][5]
// 105 GET_VAR → stack[1] = scope[0][6]
// 108 ADD stack[0] = stack[0] + stack[1]
// 109 SET_VAR scope[0][7] ← stack[0]
// 112 PUSH_UNDEFINED → stack[0] = undefined
// 113 GET_VAR → stack[1] = scope[2][2]
// 116 GET_VAR → stack[2] = scope[0][7]
// 118 PUSH_STRING → stack[3] = "s2"
// 121 CALL func.apply(thisArg, [2 args]) → stack[0]
// 123 RETURN stack[0]
