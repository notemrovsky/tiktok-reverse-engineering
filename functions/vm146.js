// 0 GET_GLOBAL → stack[0] = window
// 2 GET_PROP_NAME stack[0] ← stack[0]["matchMedia"]
// 5 TYPEOF stack[0] = typeof stack[0]
// 5 PUSH_STRING → stack[1] = "function"
// 8 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 8 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=10
// 11 NEW_OBJECT → stack[0] = {}
// 12 RETURN stack[0]
// 13 NEW_OBJECT → stack[0] = {}
// 14 PUSH_UNDEFINED → stack[1] = undefined
// 15 GET_VAR → stack[2] = scope[1][3]
// 17 PUSH_STRING → stack[3] = "resolution"
// 19 PUSH_CONST → stack[4] = 1
// 21 PUSH_MAGIC_NUMBER → stack[5] = 1.5
// 23 PUSH_CONST → stack[6] = 2
// 25 PUSH_CONST → stack[7] = 3
// 28 NEW_ARRAY → stack[4] = [...top 4 elements]
// 29 PUSH_STRING → stack[5] = "dppx"
// 32 CALL func.apply(thisArg, [3 args]) → stack[1]
// 33 DEFINE_PROP Object.defineProperty(stack[0], "dppx", stack[1])
// 36 PUSH_UNDEFINED → stack[1] = undefined
// 37 GET_VAR → stack[2] = scope[1][3]
// 39 PUSH_STRING → stack[3] = "orientation"
// 41 PUSH_STRING → stack[4] = "landscape"
// 43 PUSH_STRING → stack[5] = "portrait"
// 46 NEW_ARRAY → stack[4] = [...top 2 elements]
// 47 PUSH_STRING → stack[5] = ""
// 50 CALL func.apply(thisArg, [3 args]) → stack[1]
// 51 DEFINE_PROP Object.defineProperty(stack[0], "orientation", stack[1])
// 54 PUSH_UNDEFINED → stack[1] = undefined
// 55 GET_VAR → stack[2] = scope[1][3]
// 57 PUSH_STRING → stack[3] = "hover"
// 59 PUSH_STRING → stack[4] = "none"
// 61 PUSH_STRING → stack[5] = "hover"
// 64 NEW_ARRAY → stack[4] = [...top 2 elements]
// 65 PUSH_STRING → stack[5] = ""
// 68 CALL func.apply(thisArg, [3 args]) → stack[1]
// 69 DEFINE_PROP Object.defineProperty(stack[0], "hover", stack[1])
// 72 PUSH_UNDEFINED → stack[1] = undefined
// 73 GET_VAR → stack[2] = scope[1][3]
// 75 PUSH_STRING → stack[3] = "any-pointer"
// 77 PUSH_STRING → stack[4] = "none"
// 79 PUSH_STRING → stack[5] = "coarse"
// 81 PUSH_STRING → stack[6] = "fine"
// 84 NEW_ARRAY → stack[4] = [...top 3 elements]
// 85 PUSH_STRING → stack[5] = ""
// 88 CALL func.apply(thisArg, [3 args]) → stack[1]
// 89 DEFINE_PROP Object.defineProperty(stack[0], "anyPointer", stack[1])
// 92 PUSH_UNDEFINED → stack[1] = undefined
// 93 GET_VAR → stack[2] = scope[1][2]
// 95 PUSH_STRING → stack[3] = "max-height"
// 97 PUSH_CONST → stack[4] = 100
// 99 PUSH_CONST → stack[5] = 15360
// 101 PUSH_STRING → stack[6] = "px"
// 104 CALL func.apply(thisArg, [4 args]) → stack[1]
// 105 DEFINE_PROP Object.defineProperty(stack[0], "maxHeight", stack[1])
// 108 PUSH_UNDEFINED → stack[1] = undefined
// 109 GET_VAR → stack[2] = scope[1][2]
// 111 PUSH_STRING → stack[3] = "max-width"
// 113 PUSH_CONST → stack[4] = 100
// 115 PUSH_CONST → stack[5] = 8640
// 117 PUSH_STRING → stack[6] = "px"
// 120 CALL func.apply(thisArg, [4 args]) → stack[1]
// 121 DEFINE_PROP Object.defineProperty(stack[0], "maxWidth", stack[1])
// 124 PUSH_UNDEFINED → stack[1] = undefined
// 125 GET_VAR → stack[2] = scope[1][2]
// 127 PUSH_STRING → stack[3] = "max-resolution"
// 129 PUSH_CONST → stack[4] = 50
// 131 PUSH_CONST → stack[5] = 400
// 133 PUSH_STRING → stack[6] = "dpi"
// 136 CALL func.apply(thisArg, [4 args]) → stack[1]
// 137 DEFINE_PROP Object.defineProperty(stack[0], "dpi", stack[1])
// 140 RETURN stack[0]
