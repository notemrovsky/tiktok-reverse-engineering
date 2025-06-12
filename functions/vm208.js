// 1 GET_VAR → stack[0] = scope[0][5]
// 4 NOT stack[0] = !stack[0]
// 4 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=25
// 7 NEW_OBJECT → stack[0] = {}
// 8 SET_VAR scope[0][5] ← stack[0]
// 11 GET_VAR → stack[0] = scope[0][5]
// 13 PUSH_CONST → stack[1] = 1
// 15 PUSH_CONST → stack[2] = 1000
// 18 MUL stack[1] = stack[1] * stack[2]
// 18 SET_GLOBAL_PROP stack[1]["interval"] ← stack[0]
// 21 GET_VAR → stack[0] = scope[0][5]
// 23 PUSH_CONST → stack[1] = 0
// 25 SET_GLOBAL_PROP stack[1]["times"] ← stack[0]
// 27 GET_GLOBAL → stack[0] = document
// 30 DUP → stack[1] = stack[0]
// 30 GET_PROP_NAME stack[1] ← stack[1]["createElement"]
// 32 PUSH_STRING → stack[2] = "script"
// 35 CALL func.apply(thisArg, [1 args]) → stack[0]
// 37 SET_VAR scope[0][6] ← stack[0]
// 40 GET_VAR → stack[0] = scope[0][6]
// 42 PUSH_STRING → stack[1] = "text/javascript"
// 44 SET_GLOBAL_PROP stack[1]["type"] ← stack[0]
// 47 GET_VAR → stack[0] = scope[0][3]
// 50 PUSH_NULL → stack[1] = null
// 51 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 51 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=57
// 54 GET_VAR → stack[0] = scope[1][2]
// 56 PUSH_CONST → stack[1] = 0
// 59 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 59 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=74
// 62 GET_VAR → stack[0] = scope[0][6]
// 65 GET_VAR → stack[1] = scope[0][3]
// 67 SET_GLOBAL_PROP stack[1]["integrity"] ← stack[0]
// 70 GET_VAR → stack[0] = scope[0][6]
// 72 PUSH_STRING → stack[1] = "anonymous"
// 74 SET_GLOBAL_PROP stack[1]["crossOrigin"] ← stack[0]
// 77 GET_VAR → stack[0] = scope[0][6]
// 80 GET_VAR → stack[1] = scope[0][2]
// 82 SET_GLOBAL_PROP stack[1]["src"] ← stack[0]
// 85 GET_VAR → stack[0] = scope[0][6]
// 87 PUSH_FUNCTION → stack[1] = function[209]
// 89 SET_GLOBAL_PROP stack[1]["onerror"] ← stack[0]
// 92 GET_VAR → stack[0] = scope[0][6]
// 95 GET_VAR → stack[1] = scope[0][4]
// 97 SET_GLOBAL_PROP stack[1]["onload"] ← stack[0]
// 99 GET_GLOBAL → stack[0] = document
// 101 GET_PROP_NAME stack[0] ← stack[0]["body"]
// 104 DUP → stack[1] = stack[0]
// 104 GET_PROP_NAME stack[1] ← stack[1]["appendChild"]
// 107 GET_VAR → stack[2] = scope[0][6]
// 110 CALL func.apply(thisArg, [1 args]) → stack[0]
// 112 POP stack[0]
// 113 PUSH_UNDEFINED → stack[0] = undefined
// 114 RETURN stack[0]
