// 0 PUSH_CONST → stack[0] = 0
// 3 GET_VAR → stack[1] = scope[0][2]
// 6 LESS_EQUAL stack[0] = stack[0] <= stack[1]
// 6 PUSH_CONST → stack[1] = 1114111
// 9 LESS_EQUAL stack[0] = stack[0] <= stack[1]
// 10 NOT stack[0] = !stack[0]
// 10 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=17
// 12 GET_GLOBAL → stack[0] = Error
// 14 PUSH_STRING → stack[1] = "Failed to encode code point"
// 17 FUNCTION_BIND_APPLY → stack[0] = new stack[1](1 args)
// 19 THROW stack[0]
// 20 GET_VAR → stack[0] = scope[0][2]
// 22 PUSH_CONST → stack[1] = 65535
// 25 LESS_EQUAL stack[0] = stack[0] <= stack[1]
// 25 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=36
// 27 GET_GLOBAL → stack[0] = String
// 30 DUP → stack[1] = stack[0]
// 30 GET_PROP_NAME stack[1] ← stack[1]["fromCharCode"]
// 33 GET_VAR → stack[2] = scope[0][2]
// 36 CALL func.apply(thisArg, [1 args]) → stack[0]
// 38 RETURN stack[0]
// 38 GET_GLOBAL → stack[0] = Math
// 41 DUP → stack[1] = stack[0]
// 41 GET_PROP_NAME stack[1] ← stack[1]["floor"]
// 44 GET_VAR → stack[2] = scope[0][2]
// 46 PUSH_CONST → stack[3] = 65536
// 49 SUB stack[2] = stack[2] - stack[3]
// 49 PUSH_CONST → stack[3] = 1024
// 52 DIV stack[2] = stack[2] / stack[3]
// 53 CALL func.apply(thisArg, [1 args]) → stack[0]
// 54 PUSH_CONST → stack[1] = 55296
// 57 ADD stack[0] = stack[0] + stack[1]
// 58 SET_VAR scope[0][3] ← stack[0]
// 61 GET_VAR → stack[0] = scope[0][2]
// 63 PUSH_CONST → stack[1] = 65536
// 66 SUB stack[0] = stack[0] - stack[1]
// 66 PUSH_CONST → stack[1] = 1024
// 69 MOD stack[0] = stack[0] % stack[1]
// 69 PUSH_CONST → stack[1] = 56320
// 72 ADD stack[0] = stack[0] + stack[1]
// 73 SET_VAR scope[0][4] ← stack[0]
// 75 GET_GLOBAL → stack[0] = String
// 78 DUP → stack[1] = stack[0]
// 78 GET_PROP_NAME stack[1] ← stack[1]["fromCharCode"]
// 81 GET_VAR → stack[2] = scope[0][3]
// 84 GET_VAR → stack[3] = scope[0][4]
// 87 CALL func.apply(thisArg, [2 args]) → stack[0]
// 89 RETURN stack[0]
