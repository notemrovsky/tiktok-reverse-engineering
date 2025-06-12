// 0 PUSH_CONST → stack[0] = 0
// 3 SET_VAR scope[0][2] ← stack[0]
// 6 PUSH_UNDEFINED → stack[0] = undefined
// 7 GET_VAR → stack[1] = scope[1][2]
// 9 PUSH_STRING → stack[2] = "localStorage"
// 12 CALL func.apply(thisArg, [1 args]) → stack[0]
// 13 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=24
// 16 GET_VAR → stack[0] = scope[0][2]
// 18 PUSH_CONST → stack[1] = 1
// 21 BITWISE_OR stack[0] = stack[0] | stack[1]
// 21 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 2
// 25 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 26 POP stack[0]
// 27 PUSH_UNDEFINED → stack[0] = undefined
// 28 GET_VAR → stack[1] = scope[1][2]
// 30 PUSH_STRING → stack[2] = "sessionStorage"
// 33 CALL func.apply(thisArg, [1 args]) → stack[0]
// 34 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=48
// 37 GET_VAR → stack[0] = scope[0][2]
// 39 PUSH_CONST → stack[1] = 1
// 41 PUSH_CONST → stack[2] = 1
// 44 LEFT_SHIFT stack[1] = stack[1] << stack[2]
// 45 BITWISE_OR stack[0] = stack[0] | stack[1]
// 45 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 2
// 49 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 50 POP stack[0]
// 51 NEW_OBJECT → stack[0] = {}
// 52 GET_VAR → stack[1] = scope[0][2]
// 54 DEFINE_PROP Object.defineProperty(stack[0], "data", stack[1])
// 57 RETURN stack[0]
