// 0 GET_GLOBAL → stack[0] = window
// 2 GET_PROP_NAME stack[0] ← stack[0]["byted_acrawler"]
// 4 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=10
// 6 GET_GLOBAL → stack[0] = window
// 8 GET_PROP_NAME stack[0] ← stack[0]["byted_acrawler"]
// 10 GET_PROP_NAME stack[0] ← stack[0]["init"]
// 12 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=58
// 14 GET_GLOBAL → stack[0] = window
// 16 GET_PROP_NAME stack[0] ← stack[0]["byted_acrawler"]
// 18 GET_PROP_NAME stack[0] ← stack[0]["init"]
// 21 DUP → stack[1] = stack[0]
// 21 GET_PROP_NAME stack[1] ← stack[1]["toString"]
// 24 CALL func.apply(thisArg, [0 args]) → stack[0]
// 26 DUP → stack[1] = stack[0]
// 26 GET_PROP_NAME stack[1] ← stack[1]["search"]
// 28 GET_GLOBAL → stack[2] = RegExp
// 30 PUSH_STRING → stack[3] = "\n"
// 32 PUSH_STRING → stack[4] = "m"
// 35 FUNCTION_BIND_APPLY → stack[2] = new stack[4](2 args)
// 37 CALL func.apply(thisArg, [1 args]) → stack[0]
// 38 PUSH_CONST → stack[1] = 1
// 41 NEGATE stack[1] = -stack[1]
// 42 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 42 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=50
// 45 NEW_OBJECT → stack[0] = {}
// 45 PUSH_CONST → stack[1] = 1
// 47 DEFINE_PROP Object.defineProperty(stack[0], "data", stack[1])
// 50 RETURN stack[0]
// 50 JUMP → JUMP_TO=57
// 53 NEW_OBJECT → stack[0] = {}
// 53 PUSH_CONST → stack[1] = 2
// 55 DEFINE_PROP Object.defineProperty(stack[0], "data", stack[1])
// 58 RETURN stack[0]
// 58 JUMP → JUMP_TO=65
// 61 NEW_OBJECT → stack[0] = {}
// 61 PUSH_CONST → stack[1] = 3
// 63 DEFINE_PROP Object.defineProperty(stack[0], "data", stack[1])
// 66 RETURN stack[0]
// 67 PUSH_UNDEFINED → stack[0] = undefined
// 68 RETURN stack[0]
