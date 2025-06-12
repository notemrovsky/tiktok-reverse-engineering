// 1 PUSH_UNDEFINED → stack[0] = undefined
// 2 GET_VAR → stack[1] = scope[2][0]
// 4 GET_GLOBAL → stack[2] = navigator
// 6 GET_PROP_NAME stack[2] ← stack[2]["connection"]
// 9 CALL func.apply(thisArg, [1 args]) → stack[0]
// 10 PUSH_STRING → stack[1] = "object"
// 13 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 13 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=19
// 16 NEW_OBJECT → stack[0] = {}
// 16 PUSH_CONST → stack[1] = 2
// 18 DEFINE_PROP Object.defineProperty(stack[0], "data", stack[1])
// 21 RETURN stack[0]
// 21 GET_GLOBAL → stack[0] = navigator
// 23 GET_PROP_NAME stack[0] ← stack[0]["connection"]
// 25 GET_PROP_NAME stack[0] ← stack[0]["rtt"]
// 28 TYPEOF stack[0] = typeof stack[0]
// 28 PUSH_STRING → stack[1] = "number"
// 31 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 31 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=37
// 34 NEW_OBJECT → stack[0] = {}
// 34 PUSH_CONST → stack[1] = 2
// 36 DEFINE_PROP Object.defineProperty(stack[0], "data", stack[1])
// 39 RETURN stack[0]
// 40 NEW_OBJECT → stack[0] = {}
// 40 GET_GLOBAL → stack[1] = navigator
// 42 GET_PROP_NAME stack[1] ← stack[1]["connection"]
// 44 GET_PROP_NAME stack[1] ← stack[1]["rtt"]
// 46 PUSH_CONST → stack[2] = 0
// 49 STRICT_EQUAL stack[1] = stack[1] === stack[2]
// 49 JUMP_IF_FALSE if (!stack[1]) JUMP_TO=53
// 51 PUSH_CONST → stack[1] = 1
// 53 JUMP → JUMP_TO=56
// 55 PUSH_CONST → stack[2] = 2
// 57 DEFINE_PROP Object.defineProperty(stack[1], "data", stack[2])
// 60 RETURN stack[1]
