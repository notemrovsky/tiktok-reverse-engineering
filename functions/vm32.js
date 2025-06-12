// 0 PUSH_FUNCTION → stack[0] = function[34]
// 3 SET_VAR scope[0][3] ← stack[0]
// 5 GET_GLOBAL → stack[0] = navigator
// 7 GET_PROP_NAME stack[0] ← stack[0]["battery"]
// 9 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=13 else POP
// 11 GET_GLOBAL → stack[0] = navigator
// 13 GET_PROP_NAME stack[0] ← stack[0]["mozBattery"]
// 16 SET_VAR scope[0][2] ← stack[0]
// 19 GET_VAR → stack[0] = scope[0][2]
// 21 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=37
// 24 GET_VAR → stack[0] = scope[2][2]
// 27 PUSH_UNDEFINED → stack[1] = undefined
// 28 GET_VAR → stack[2] = scope[0][3]
// 31 GET_VAR → stack[3] = scope[0][2]
// 34 CALL func.apply(thisArg, [1 args]) → stack[1]
// 35 SET_GLOBAL_PROP stack[1]["battery"] ← stack[0]
// 37 JUMP → JUMP_TO=75
// 39 TYPEOF_GLOBAL → stack[0] = typeof global["navigator"]
// 41 PUSH_STRING → stack[1] = "undefined"
// 44 NOT_EQUAL stack[0] = stack[0] != stack[1]
// 44 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=52
// 46 GET_GLOBAL → stack[0] = navigator
// 48 GET_PROP_NAME stack[0] ← stack[0]["getBattery"]
// 51 TYPEOF stack[0] = typeof stack[0]
// 51 PUSH_STRING → stack[1] = "function"
// 54 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 54 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=74
// 56 GET_GLOBAL → stack[0] = navigator
// 59 DUP → stack[1] = stack[0]
// 59 GET_PROP_NAME stack[1] ← stack[1]["getBattery"]
// 62 CALL func.apply(thisArg, [0 args]) → stack[0]
// 64 DUP → stack[1] = stack[0]
// 64 GET_PROP_NAME stack[1] ← stack[1]["then"]
// 66 PUSH_FUNCTION → stack[2] = function[33]
// 69 CALL func.apply(thisArg, [1 args]) → stack[0]
// 71 POP stack[0]
// 71 JUMP → JUMP_TO=75
// 74 SET_VAR scope[0][4] ← stack[-1]
// 77 PUSH_UNDEFINED → stack[-1] = undefined
// 78 RETURN stack[-1]
