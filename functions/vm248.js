// 1 GET_VAR → stack[0] = scope[0][2]
// 3 GET_PROP_NAME stack[0] ← stack[0]["0"]
// 6 SET_VAR scope[0][3] ← stack[0]
// 8 PUSH_CONST → stack[0] = 1
// 11 SET_VAR scope[0][4] ← stack[0]
// 14 GET_VAR → stack[0] = scope[0][4]
// 17 GET_VAR → stack[1] = scope[0][2]
// 19 GET_PROP_NAME stack[1] ← stack[1]["length"]
// 22 LESS_THAN stack[0] = stack[0] < stack[1]
// 22 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=45
// 25 GET_VAR → stack[0] = scope[0][3]
// 28 GET_VAR → stack[1] = scope[0][2]
// 31 GET_VAR → stack[2] = scope[0][4]
// 34 GET_PROP stack[1] = stack[1][stack[2]]
// 35 XOR stack[0] = stack[0] ^ stack[1]
// 35 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 3
// 39 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 40 POP stack[0]
// 40 PUSH_SCOPE_REF → stack[0] = scope[0], stack[1] = 4
// 44 POST_INC stack[0] = stack[0][stack[1]]++ (old value)
// 45 POP stack[0]
// 45 JUMP → JUMP_TO=12
// 48 GET_VAR → stack[0] = scope[0][3]
// 50 PUSH_CONST → stack[1] = 0
// 52 PUSH_MAGIC_NUMBER → stack[2] = 4294967295
// 55 MOD stack[1] = stack[1] % stack[2]
// 56 UNSIGNED_RIGHT_SHIFT stack[0] = stack[0] >>> stack[1]
// 57 RETURN stack[0]
