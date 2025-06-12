// 1 GET_VAR → stack[0] = scope[0][2]
// 4 PUSH_NULL → stack[1] = null
// 5 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 5 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=10 else POP
// 8 GET_VAR → stack[0] = scope[0][2]
// 11 PUSH_UNDEFINED → stack[1] = undefined
// 12 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 12 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=19
// 14 GET_GLOBAL → stack[0] = TypeError
// 16 PUSH_STRING → stack[1] = "Cannot convert undefined or null to object"
// 19 FUNCTION_BIND_APPLY → stack[0] = new stack[1](1 args)
// 21 THROW stack[0]
// 22 PUSH_UNDEFINED → stack[0] = undefined
// 22 GET_GLOBAL → stack[1] = Object
// 25 GET_VAR → stack[2] = scope[0][2]
// 28 CALL func.apply(thisArg, [1 args]) → stack[0]
// 30 SET_VAR scope[0][4] ← stack[0]
// 33 GET_VAR → stack[0] = scope[0][3]
// 36 SET_VAR scope[0][5] ← stack[0]
// 39 GET_VAR → stack[0] = scope[0][5]
// 42 PUSH_NULL → stack[1] = null
// 43 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 43 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=48
// 46 GET_VAR → stack[0] = scope[0][5]
// 49 PUSH_UNDEFINED → stack[1] = undefined
// 50 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 50 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=97
// 53 GET_VAR → stack[0] = scope[0][5]
// 55 FOR_IN_SETUP scope[7] = [Object.keys(stack[0]), stack[0]]
// 57 PUSH_SCOPE_REF → stack[0] = scope[0], stack[1] = 6
// 60 FOR_IN_NEXT stack[2][stack[1]] = next_key_from_scope[7]; stack[0] = has_more
// 62 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=97
// 64 GET_GLOBAL → stack[0] = Object
// 66 GET_PROP_NAME stack[0] ← stack[0]["prototype"]
// 68 GET_PROP_NAME stack[0] ← stack[0]["hasOwnProperty"]
// 71 DUP → stack[1] = stack[0]
// 71 GET_PROP_NAME stack[1] ← stack[1]["call"]
// 74 GET_VAR → stack[2] = scope[0][5]
// 77 GET_VAR → stack[3] = scope[0][6]
// 80 CALL func.apply(thisArg, [2 args]) → stack[0]
// 81 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=95
// 84 GET_VAR → stack[0] = scope[0][4]
// 87 GET_VAR → stack[1] = scope[0][6]
// 90 GET_VAR → stack[2] = scope[0][5]
// 93 GET_VAR → stack[3] = scope[0][6]
// 96 GET_PROP stack[2] = stack[2][stack[3]]
// 97 SET_PROP stack[0][stack[1]] = stack[2]
// 97 JUMP → JUMP_TO=56
// 100 GET_VAR → stack[0] = scope[0][4]
// 103 RETURN stack[0]
