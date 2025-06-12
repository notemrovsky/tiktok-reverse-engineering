// 1 NEW_OBJECT → stack[0] = {}
// 2 SET_VAR scope[0][4] ← stack[0]
// 4 PUSH_CONST → stack[0] = 0
// 7 SET_VAR scope[0][5] ← stack[0]
// 10 GET_VAR → stack[0] = scope[0][5]
// 13 GET_VAR → stack[1] = scope[0][3]
// 15 GET_PROP_NAME stack[1] ← stack[1]["length"]
// 18 LESS_THAN stack[0] = stack[0] < stack[1]
// 18 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=109
// 21 GET_VAR → stack[0] = scope[0][3]
// 24 GET_VAR → stack[1] = scope[0][5]
// 27 GET_PROP stack[0] = stack[0][stack[1]]
// 28 SET_VAR scope[0][6] ← stack[0]
// 31 GET_VAR → stack[0] = scope[0][2]
// 34 GET_VAR → stack[1] = scope[0][6]
// 37 GET_PROP stack[0] = stack[0][stack[1]]
// 38 SET_VAR scope[0][7] ← stack[0]
// 41 GET_VAR → stack[0] = scope[0][7]
// 44 TYPEOF stack[0] = typeof stack[0]
// 44 PUSH_STRING → stack[1] = "undefined"
// 47 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 47 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=52 else POP
// 50 GET_VAR → stack[0] = scope[0][7]
// 53 PUSH_NULL → stack[1] = null
// 54 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 54 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=58
// 57 PUSH_FALSE → stack[0] = false
// 58 SET_VAR scope[0][7] ← stack[0]
// 61 GET_VAR → stack[0] = scope[0][7]
// 64 PUSH_NULL → stack[1] = null
// 65 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 65 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=86
// 68 GET_VAR → stack[0] = scope[0][7]
// 71 TYPEOF stack[0] = typeof stack[0]
// 71 PUSH_STRING → stack[1] = "function"
// 74 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 74 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=86 else POP
// 77 PUSH_UNDEFINED → stack[0] = undefined
// 78 GET_VAR → stack[1] = scope[2][0]
// 81 GET_VAR → stack[2] = scope[0][7]
// 84 CALL func.apply(thisArg, [1 args]) → stack[0]
// 85 PUSH_STRING → stack[1] = "object"
// 88 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 88 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=92
// 91 PUSH_TRUE → stack[0] = true
// 92 SET_VAR scope[0][7] ← stack[0]
// 95 GET_VAR → stack[0] = scope[0][4]
// 98 GET_VAR → stack[1] = scope[0][6]
// 101 GET_VAR → stack[2] = scope[0][7]
// 104 SET_PROP stack[0][stack[1]] = stack[2]
// 104 PUSH_SCOPE_REF → stack[0] = scope[0], stack[1] = 5
// 108 POST_INC stack[0] = stack[0][stack[1]]++ (old value)
// 109 POP stack[0]
// 109 JUMP → JUMP_TO=8
// 112 GET_VAR → stack[0] = scope[0][4]
// 115 RETURN stack[0]
