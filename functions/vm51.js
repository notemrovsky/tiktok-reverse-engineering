// 1 GET_VAR → stack[0] = scope[1][2]
// 3 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=10
// 6 NEW_OBJECT → stack[0] = {}
// 7 GET_VAR → stack[1] = scope[1][2]
// 9 DEFINE_PROP Object.defineProperty(stack[0], "data", stack[1])
// 12 RETURN stack[0]
// 13 GET_VAR → stack[0] = scope[0][2]
// 15 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=22
// 18 NEW_OBJECT → stack[0] = {}
// 18 PUSH_CONST → stack[1] = 1
// 21 NEGATE stack[1] = -stack[1]
// 21 DEFINE_PROP Object.defineProperty(stack[0], "data", stack[1])
// 24 RETURN stack[0]
// 25 PUSH_UNDEFINED → stack[0] = undefined
// 26 GET_VAR → stack[1] = scope[1][3]
// 29 CALL func.apply(thisArg, [0 args]) → stack[0]
// 31 SET_VAR scope[1][2] ← stack[0]
// 34 NEW_OBJECT → stack[0] = {}
// 35 GET_VAR → stack[1] = scope[1][2]
// 37 DEFINE_PROP Object.defineProperty(stack[0], "data", stack[1])
// 40 RETURN stack[0]
// 40 JUMP → JUMP_TO=63
// 43 SET_VAR scope[0][3] ← stack[-1]
// 46 NEW_OBJECT → stack[-1] = {}
// 46 PUSH_CONST → stack[0] = 1
// 49 NEGATE stack[0] = -stack[0]
// 49 DEFINE_PROP Object.defineProperty(stack[-1], "data", stack[0])
// 52 NEW_OBJECT → stack[0] = {}
// 53 GET_VAR → stack[1] = scope[0][3]
// 55 DEFINE_PROP Object.defineProperty(stack[0], "err", stack[1])
// 57 PUSH_STRING → stack[1] = "c_c"
// 59 DEFINE_PROP Object.defineProperty(stack[0], "type", stack[1])
// 61 DEFINE_PROP Object.defineProperty(stack[-1], "error", stack[0])
// 64 RETURN stack[-1]
// 65 PUSH_UNDEFINED → stack[-1] = undefined
// 66 RETURN stack[-1]
