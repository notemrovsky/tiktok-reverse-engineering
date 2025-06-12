// 1 GET_VAR → stack[0] = scope[0][2]
// 4 DUP → stack[1] = stack[0]
// 4 GET_PROP_NAME stack[1] ← stack[1]["getExtension"]
// 6 PUSH_STRING → stack[2] = "EXT_texture_filter_anisotropic"
// 9 CALL func.apply(thisArg, [1 args]) → stack[0]
// 10 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=20 else POP
// 13 GET_VAR → stack[0] = scope[0][2]
// 16 DUP → stack[1] = stack[0]
// 16 GET_PROP_NAME stack[1] ← stack[1]["getExtension"]
// 18 PUSH_STRING → stack[2] = "WEBKIT_EXT_texture_filter_anisotropic"
// 21 CALL func.apply(thisArg, [1 args]) → stack[0]
// 22 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=32 else POP
// 25 GET_VAR → stack[0] = scope[0][2]
// 28 DUP → stack[1] = stack[0]
// 28 GET_PROP_NAME stack[1] ← stack[1]["getExtension"]
// 30 PUSH_STRING → stack[2] = "MOZ_EXT_texture_filter_anisotropic"
// 33 CALL func.apply(thisArg, [1 args]) → stack[0]
// 35 SET_VAR scope[0][3] ← stack[0]
// 38 GET_VAR → stack[0] = scope[0][3]
// 40 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=75
// 43 GET_VAR → stack[0] = scope[0][2]
// 46 DUP → stack[1] = stack[0]
// 46 GET_PROP_NAME stack[1] ← stack[1]["getParameter"]
// 49 GET_VAR → stack[2] = scope[0][3]
// 51 GET_PROP_NAME stack[2] ← stack[2]["MAX_TEXTURE_MAX_ANISOTROPY_EXT"]
// 54 CALL func.apply(thisArg, [1 args]) → stack[0]
// 56 SET_VAR scope[0][4] ← stack[0]
// 59 GET_VAR → stack[0] = scope[0][4]
// 61 PUSH_CONST → stack[1] = 0
// 64 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 64 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=69
// 66 PUSH_CONST → stack[0] = 2
// 69 SET_VAR scope[0][4] ← stack[0]
// 72 GET_VAR → stack[0] = scope[0][4]
// 75 RETURN stack[0]
// 75 JUMP → JUMP_TO=78
// 78 PUSH_NULL → stack[0] = null
// 79 RETURN stack[0]
// 80 PUSH_UNDEFINED → stack[0] = undefined
// 81 RETURN stack[0]
