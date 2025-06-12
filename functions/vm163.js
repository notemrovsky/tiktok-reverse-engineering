// 0 GET_GLOBAL → stack[0] = window
// 2 GET_PROP_NAME stack[0] ← stack[0]["eval"]
// 4 GET_PROP_NAME stack[0] ← stack[0]["name"]
// 6 PUSH_STRING → stack[1] = "eval"
// 9 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 9 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=36 else POP
// 11 GET_GLOBAL → stack[0] = Object
// 13 GET_PROP_NAME stack[0] ← stack[0]["prototype"]
// 15 GET_PROP_NAME stack[0] ← stack[0]["toString"]
// 18 DUP → stack[1] = stack[0]
// 18 GET_PROP_NAME stack[1] ← stack[1]["call"]
// 20 GET_GLOBAL → stack[2] = window
// 22 GET_PROP_NAME stack[2] ← stack[2]["eval"]
// 24 GET_PROP_NAME stack[2] ← stack[2]["prototype"]
// 27 CALL func.apply(thisArg, [1 args]) → stack[0]
// 29 DUP → stack[1] = stack[0]
// 29 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 31 PUSH_STRING → stack[2] = "Undefined"
// 34 CALL func.apply(thisArg, [1 args]) → stack[0]
// 35 PUSH_CONST → stack[1] = 0
// 38 LESS_THAN stack[0] = stack[0] < stack[1]
// 38 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=44
// 41 NEW_OBJECT → stack[0] = {}
// 41 PUSH_CONST → stack[1] = 1
// 43 DEFINE_PROP Object.defineProperty(stack[0], "data", stack[1])
// 46 RETURN stack[0]
// 47 NEW_OBJECT → stack[0] = {}
// 47 PUSH_CONST → stack[1] = 2
// 49 DEFINE_PROP Object.defineProperty(stack[0], "data", stack[1])
// 52 RETURN stack[0]
