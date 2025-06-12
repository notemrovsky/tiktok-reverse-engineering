// 0 GET_GLOBAL → stack[0] = PluginArray
// 2 GET_PROP_NAME stack[0] ← stack[0]["prototype"]
// 4 GET_GLOBAL → stack[1] = navigator
// 6 GET_PROP_NAME stack[1] ← stack[1]["plugins"]
// 8 GET_PROP_NAME stack[1] ← stack[1]["__proto__"]
// 11 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 12 SET_VAR scope[0][2] ← stack[0]
// 15 PUSH_UNDEFINED → stack[0] = undefined
// 16 GET_VAR → stack[1] = scope[2][0]
// 18 GET_GLOBAL → stack[2] = navigator
// 20 GET_PROP_NAME stack[2] ← stack[2]["plugins"]
// 23 CALL func.apply(thisArg, [1 args]) → stack[0]
// 24 PUSH_STRING → stack[1] = "object"
// 27 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 27 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=36
// 29 GET_GLOBAL → stack[0] = navigator
// 31 GET_PROP_NAME stack[0] ← stack[0]["plugins"]
// 33 GET_PROP_NAME stack[0] ← stack[0]["length"]
// 35 PUSH_CONST → stack[1] = 0
// 38 GREATER_THAN stack[0] = stack[0] > stack[1]
// 38 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=91
// 40 PUSH_CONST → stack[0] = 0
// 43 SET_VAR scope[0][3] ← stack[0]
// 46 GET_VAR → stack[0] = scope[0][3]
// 48 GET_GLOBAL → stack[1] = navigator
// 50 GET_PROP_NAME stack[1] ← stack[1]["plugins"]
// 52 GET_PROP_NAME stack[1] ← stack[1]["length"]
// 55 LESS_THAN stack[0] = stack[0] < stack[1]
// 55 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=91
// 57 GET_GLOBAL → stack[0] = Plugin
// 59 GET_PROP_NAME stack[0] ← stack[0]["prototype"]
// 61 GET_GLOBAL → stack[1] = navigator
// 63 GET_PROP_NAME stack[1] ← stack[1]["plugins"]
// 66 GET_VAR → stack[2] = scope[0][3]
// 69 GET_PROP stack[1] = stack[1][stack[2]]
// 69 GET_PROP_NAME stack[1] ← stack[1]["__proto__"]
// 72 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 72 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=84
// 75 GET_VAR → stack[0] = scope[0][2]
// 78 PUSH_FALSE → stack[1] = false
// 79 BITWISE_AND stack[0] = stack[0] & stack[1]
// 79 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 2
// 83 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 84 POP stack[0]
// 84 JUMP → JUMP_TO=92
// 86 PUSH_SCOPE_REF → stack[0] = scope[0], stack[1] = 3
// 90 POST_INC stack[0] = stack[0][stack[1]]++ (old value)
// 91 POP stack[0]
// 91 JUMP → JUMP_TO=44
// 94 NEW_OBJECT → stack[0] = {}
// 95 PUSH_UNDEFINED → stack[1] = undefined
// 96 GET_VAR → stack[2] = scope[2][3]
// 99 GET_VAR → stack[3] = scope[1][11]
// 102 CALL func.apply(thisArg, [1 args]) → stack[1]
// 103 DEFINE_PROP Object.defineProperty(stack[0], "plugin", stack[1])
// 106 PUSH_UNDEFINED → stack[1] = undefined
// 107 GET_VAR → stack[2] = scope[1][17]
// 110 CALL func.apply(thisArg, [0 args]) → stack[1]
// 111 DEFINE_PROP Object.defineProperty(stack[0], "pv", stack[1])
// 114 GET_VAR → stack[1] = scope[0][2]
// 116 JUMP_IF_FALSE if (!stack[1]) JUMP_TO=120
// 118 PUSH_CONST → stack[1] = 1
// 120 JUMP → JUMP_TO=123
// 122 PUSH_CONST → stack[2] = 2
// 124 DEFINE_PROP Object.defineProperty(stack[1], "proto", stack[2])
// 127 RETURN stack[1]
// 127 JUMP → JUMP_TO=152
// 130 SET_VAR scope[0][4] ← stack[0]
// 133 GET_VAR → stack[0] = scope[1][11]
// 136 DUP → stack[1] = stack[0]
// 136 GET_PROP_NAME stack[1] ← stack[1]["push"]
// 139 NEW_OBJECT → stack[2] = {}
// 140 GET_VAR → stack[3] = scope[0][4]
// 142 DEFINE_PROP Object.defineProperty(stack[2], "err", stack[3])
// 144 PUSH_STRING → stack[3] = "d_p"
// 146 DEFINE_PROP Object.defineProperty(stack[2], "type", stack[3])
// 149 CALL func.apply(thisArg, [1 args]) → stack[0]
// 151 POP stack[0]
// 152 NEW_OBJECT → stack[0] = {}
// 153 RETURN stack[0]
// 154 PUSH_UNDEFINED → stack[0] = undefined
// 155 RETURN stack[0]
