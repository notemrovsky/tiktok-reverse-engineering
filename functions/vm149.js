// 1 NEW_OBJECT → stack[0] = {}
// 1 PUSH_STRING → stack[1] = ""
// 3 DEFINE_PROP Object.defineProperty(stack[0], "8", stack[1])
// 5 PUSH_STRING → stack[1] = "	"
// 7 DEFINE_PROP Object.defineProperty(stack[0], "9", stack[1])
// 9 PUSH_STRING → stack[1] = "
"
// 11 DEFINE_PROP Object.defineProperty(stack[0], "10", stack[1])
// 13 PUSH_STRING → stack[1] = ""
// 15 DEFINE_PROP Object.defineProperty(stack[0], "12", stack[1])
// 17 PUSH_STRING → stack[1] = ""
// 19 DEFINE_PROP Object.defineProperty(stack[0], "13", stack[1])
// 21 PUSH_STRING → stack[1] = "\""
// 23 DEFINE_PROP Object.defineProperty(stack[0], "34", stack[1])
// 25 PUSH_STRING → stack[1] = "\\"
// 27 DEFINE_PROP Object.defineProperty(stack[0], "92", stack[1])
// 30 SET_VAR scope[0][3] ← stack[0]
// 32 PUSH_STRING → stack[0] = """
// 35 SET_VAR scope[0][4] ← stack[0]
// 37 PUSH_CONST → stack[0] = 0
// 40 SET_VAR scope[0][5] ← stack[0]
// 43 GET_VAR → stack[0] = scope[0][5]
// 46 GET_VAR → stack[1] = scope[0][2]
// 48 GET_PROP_NAME stack[1] ← stack[1]["length"]
// 51 LESS_THAN stack[0] = stack[0] < stack[1]
// 51 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=154
// 54 GET_VAR → stack[0] = scope[0][2]
// 57 DUP → stack[1] = stack[0]
// 57 GET_PROP_NAME stack[1] ← stack[1]["codePointAt"]
// 60 GET_VAR → stack[2] = scope[0][5]
// 63 CALL func.apply(thisArg, [1 args]) → stack[0]
// 65 SET_VAR scope[0][6] ← stack[0]
// 68 GET_VAR → stack[0] = scope[0][6]
// 71 GET_VAR → stack[1] = scope[0][3]
// 74 IN stack[0] = stack[0] in stack[1]
// 74 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=92
// 77 GET_VAR → stack[0] = scope[0][4]
// 80 GET_VAR → stack[1] = scope[0][3]
// 83 GET_VAR → stack[2] = scope[0][6]
// 86 GET_PROP stack[1] = stack[1][stack[2]]
// 87 ADD stack[0] = stack[0] + stack[1]
// 87 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 4
// 91 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 92 POP stack[0]
// 92 JUMP → JUMP_TO=148
// 95 GET_VAR → stack[0] = scope[0][6]
// 97 PUSH_CONST → stack[1] = 32
// 100 LESS_THAN stack[0] = stack[0] < stack[1]
// 100 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=114 else POP
// 103 GET_VAR → stack[0] = scope[0][6]
// 105 PUSH_CONST → stack[1] = 55296
// 108 GREATER_EQUAL stack[0] = stack[0] >= stack[1]
// 108 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=114
// 111 GET_VAR → stack[0] = scope[0][6]
// 113 PUSH_CONST → stack[1] = 57343
// 116 LESS_EQUAL stack[0] = stack[0] <= stack[1]
// 116 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=129
// 118 GET_GLOBAL → stack[0] = JSON
// 121 DUP → stack[1] = stack[0]
// 121 GET_PROP_NAME stack[1] ← stack[1]["stringify"]
// 124 GET_VAR → stack[2] = scope[0][2]
// 127 CALL func.apply(thisArg, [1 args]) → stack[0]
// 129 RETURN stack[0]
// 129 JUMP → JUMP_TO=148
// 132 GET_VAR → stack[0] = scope[0][4]
// 135 PUSH_UNDEFINED → stack[1] = undefined
// 136 GET_VAR → stack[2] = scope[1][3]
// 139 GET_VAR → stack[3] = scope[0][6]
// 142 CALL func.apply(thisArg, [1 args]) → stack[1]
// 144 ADD stack[0] = stack[0] + stack[1]
// 144 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 4
// 148 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 149 POP stack[0]
// 149 PUSH_SCOPE_REF → stack[0] = scope[0], stack[1] = 5
// 153 POST_INC stack[0] = stack[0][stack[1]]++ (old value)
// 154 POP stack[0]
// 154 JUMP → JUMP_TO=41
// 157 GET_VAR → stack[0] = scope[0][4]
// 159 PUSH_STRING → stack[1] = """
// 162 ADD stack[0] = stack[0] + stack[1]
// 162 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 4
// 166 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 167 RETURN stack[0]
