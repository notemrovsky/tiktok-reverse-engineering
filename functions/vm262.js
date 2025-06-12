// 1 PUSH_UNDEFINED → stack[0] = undefined
// 2 GET_VAR → stack[1] = scope[2][0]
// 5 CALL func.apply(thisArg, [0 args]) → stack[0]
// 7 NOT stack[0] = !stack[0]
// 7 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=58
// 9 PUSH_STRING → stack[0] = "plugins"
// 11 GET_GLOBAL → stack[1] = navigator
// 14 IN stack[0] = stack[0] in stack[1]
// 15 NOT stack[0] = !stack[0]
// 15 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=23 else POP
// 17 GET_GLOBAL → stack[0] = navigator
// 19 GET_PROP_NAME stack[0] ← stack[0]["plugins"]
// 21 GET_GLOBAL → stack[1] = PluginArray
// 24 INSTANCEOF stack[0] = stack[0] instanceof stack[1]
// 25 NOT stack[0] = !stack[0]
// 25 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=30 else POP
// 27 PUSH_STRING → stack[0] = "_phantom"
// 29 GET_GLOBAL → stack[1] = window
// 32 IN stack[0] = stack[0] in stack[1]
// 32 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=37 else POP
// 34 PUSH_STRING → stack[0] = "callPhantom"
// 36 GET_GLOBAL → stack[1] = window
// 39 IN stack[0] = stack[0] in stack[1]
// 39 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=44 else POP
// 41 PUSH_STRING → stack[0] = "__nightmare"
// 43 GET_GLOBAL → stack[1] = window
// 46 IN stack[0] = stack[0] in stack[1]
// 46 JUMP_IF_TRUE_OR_POP if (stack[0]) JUMP_TO=57 else POP
// 48 PUSH_STRING → stack[0] = "Audio"
// 50 GET_GLOBAL → stack[1] = window
// 53 IN stack[0] = stack[0] in stack[1]
// 53 PUSH_STRING → stack[1] = "CanvasRenderingContext2D"
// 55 GET_GLOBAL → stack[2] = window
// 58 IN stack[1] = stack[1] in stack[2]
// 59 LESS_THAN stack[0] = stack[0] < stack[1]
// 60 RETURN stack[0]
// 61 PUSH_FALSE → stack[0] = false
// 62 RETURN stack[0]
