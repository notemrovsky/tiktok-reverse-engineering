// 1 GET_VAR → stack[0] = scope[0][2]
// 4 PUSH_NULL → stack[1] = null
// 5 EQUAL stack[0] = stack[0] == stack[1]
// 5 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=10 else POP
// 8 GET_VAR → stack[0] = scope[0][3]
// 11 PUSH_NULL → stack[1] = null
// 12 EQUAL stack[0] = stack[0] == stack[1]
// 12 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=14
// 15 PUSH_FALSE → stack[0] = false
// 16 RETURN stack[0]
// 17 PUSH_UNDEFINED → stack[0] = undefined
// 18 GET_VAR → stack[1] = scope[2][0]
// 21 GET_VAR → stack[2] = scope[0][2]
// 24 CALL func.apply(thisArg, [1 args]) → stack[0]
// 25 PUSH_STRING → stack[1] = "object"
// 28 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 28 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=40 else POP
// 31 PUSH_UNDEFINED → stack[0] = undefined
// 32 GET_VAR → stack[1] = scope[2][0]
// 35 GET_VAR → stack[2] = scope[0][3]
// 38 CALL func.apply(thisArg, [1 args]) → stack[0]
// 39 PUSH_STRING → stack[1] = "object"
// 42 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 42 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=44
// 45 PUSH_FALSE → stack[0] = false
// 46 RETURN stack[0]
// 47 GET_VAR → stack[0] = scope[0][2]
// 49 GET_PROP_NAME stack[0] ← stack[0]["data"]
// 51 GET_PROP_NAME stack[0] ← stack[0]["length"]
// 54 GET_VAR → stack[1] = scope[0][3]
// 56 GET_PROP_NAME stack[1] ← stack[1]["data"]
// 58 GET_PROP_NAME stack[1] ← stack[1]["length"]
// 61 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 61 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=72 else POP
// 64 GET_VAR → stack[0] = scope[0][2]
// 66 GET_PROP_NAME stack[0] ← stack[0]["data"]
// 68 GET_PROP_NAME stack[0] ← stack[0]["length"]
// 71 GET_VAR → stack[1] = scope[1][2]
// 74 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 74 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=76
// 77 PUSH_FALSE → stack[0] = false
// 78 RETURN stack[0]
// 78 PUSH_CONST → stack[0] = 0
// 81 SET_VAR scope[0][4] ← stack[0]
// 84 GET_VAR → stack[0] = scope[0][4]
// 87 GET_VAR → stack[1] = scope[0][2]
// 89 GET_PROP_NAME stack[1] ← stack[1]["length"]
// 92 LESS_THAN stack[0] = stack[0] < stack[1]
// 92 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=118
// 95 GET_VAR → stack[0] = scope[0][2]
// 98 GET_VAR → stack[1] = scope[0][4]
// 101 GET_PROP stack[0] = stack[0][stack[1]]
// 102 GET_VAR → stack[1] = scope[0][3]
// 105 GET_VAR → stack[2] = scope[0][4]
// 108 GET_PROP stack[1] = stack[1][stack[2]]
// 109 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 109 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=111
// 112 PUSH_FALSE → stack[0] = false
// 113 RETURN stack[0]
// 113 PUSH_SCOPE_REF → stack[0] = scope[0], stack[1] = 4
// 117 POST_INC stack[0] = stack[0][stack[1]]++ (old value)
// 118 POP stack[0]
// 118 JUMP → JUMP_TO=82
// 121 PUSH_TRUE → stack[0] = true
// 122 RETURN stack[0]
