// 1 PUSH_FALSE → stack[0] = false
// 2 SET_VAR scope[0][2] ← stack[0]
// 5 PUSH_UNDEFINED → stack[0] = undefined
// 6 GET_VAR → stack[1] = scope[1][3]
// 9 CALL func.apply(thisArg, [0 args]) → stack[0]
// 10 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=12
// 13 PUSH_UNDEFINED → stack[0] = undefined
// 14 RETURN stack[0]
// 14 PUSH_CONST → stack[0] = 1
// 16 PUSH_CONST → stack[1] = 6
// 19 LEFT_SHIFT stack[0] = stack[0] << stack[1]
// 20 SET_VAR scope[0][3] ← stack[0]
// 23 GET_VAR → stack[0] = scope[2][1]
// 25 GET_PROP_NAME stack[0] ← stack[0]["envcode"]
// 28 GET_VAR → stack[1] = scope[0][3]
// 30 PUSH_CONST → stack[2] = 0
// 33 GREATER_THAN stack[1] = stack[1] > stack[2]
// 34 BITWISE_AND stack[0] = stack[0] & stack[1]
// 34 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=40
// 37 PUSH_TRUE → stack[0] = true
// 38 SET_VAR scope[0][2] ← stack[0]
// 41 PUSH_UNDEFINED → stack[0] = undefined
// 42 RETURN stack[0]
// 42 GET_GLOBAL → stack[0] = Image
// 45 FUNCTION_BIND_APPLY → stack[0] = new stack[0](0 args)
// 47 SET_VAR scope[0][4] ← stack[0]
// 49 GET_GLOBAL → stack[0] = Object
// 52 DUP → stack[1] = stack[0]
// 52 GET_PROP_NAME stack[1] ← stack[1]["defineProperty"]
// 55 GET_VAR → stack[2] = scope[0][4]
// 57 PUSH_STRING → stack[3] = "id"
// 60 NEW_OBJECT → stack[4] = {}
// 60 PUSH_FUNCTION → stack[5] = function[256]
// 63 DUP → stack[6] = stack[5]
// 64 SET_VAR scope[0][5] ← stack[6]
// 66 DEFINE_PROP Object.defineProperty(stack[4], "get", stack[5])
// 69 CALL func.apply(thisArg, [3 args]) → stack[0]
// 71 POP stack[0]
// 71 GET_GLOBAL → stack[0] = console
// 74 DUP → stack[1] = stack[0]
// 74 GET_PROP_NAME stack[1] ← stack[1]["info"]
// 76 PUSH_STRING → stack[2] = "%c"
// 79 GET_VAR → stack[3] = scope[0][4]
// 82 CALL func.apply(thisArg, [2 args]) → stack[0]
// 84 POP stack[0]
// 84 GET_GLOBAL → stack[0] = window
// 86 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=90
// 88 GET_GLOBAL → stack[0] = window
// 90 GET_PROP_NAME stack[0] ← stack[0]["console"]
// 92 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=98
// 94 GET_GLOBAL → stack[0] = window
// 96 GET_PROP_NAME stack[0] ← stack[0]["console"]
// 98 GET_PROP_NAME stack[0] ← stack[0]["firebug"]
// 100 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=104
// 103 PUSH_TRUE → stack[0] = true
// 104 SET_VAR scope[0][2] ← stack[0]
// 107 PUSH_UNDEFINED → stack[0] = undefined
// 108 GET_VAR → stack[1] = scope[2][0]
// 111 CALL func.apply(thisArg, [0 args]) → stack[0]
// 112 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=148
// 114 GET_GLOBAL → stack[0] = window
// 116 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=142
// 118 GET_GLOBAL → stack[0] = window
// 120 GET_PROP_NAME stack[0] ← stack[0]["outerWidth"]
// 122 GET_GLOBAL → stack[1] = window
// 124 GET_PROP_NAME stack[1] ← stack[1]["innerWidth"]
// 127 SUB stack[0] = stack[0] - stack[1]
// 127 PUSH_CONST → stack[1] = 100
// 130 GREATER_THAN stack[0] = stack[0] > stack[1]
// 130 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=142 else POP
// 132 GET_GLOBAL → stack[0] = window
// 134 GET_PROP_NAME stack[0] ← stack[0]["outerHeight"]
// 136 GET_GLOBAL → stack[1] = window
// 138 GET_PROP_NAME stack[1] ← stack[1]["innerHeight"]
// 141 SUB stack[0] = stack[0] - stack[1]
// 141 PUSH_CONST → stack[1] = 100
// 144 GREATER_THAN stack[0] = stack[0] > stack[1]
// 144 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=148
// 147 PUSH_TRUE → stack[0] = true
// 148 SET_VAR scope[0][2] ← stack[0]
// 151 GET_VAR → stack[0] = scope[0][2]
// 154 RETURN stack[0]
