// 0 GET_GLOBAL → stack[0] = window
// 2 GET_PROP_NAME stack[0] ← stack[0]["ActiveXObject"]
// 4 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=94
// 6 PUSH_CONST → stack[0] = 2
// 9 SET_VAR scope[0][2] ← stack[0]
// 12 GET_VAR → stack[0] = scope[0][2]
// 14 PUSH_CONST → stack[1] = 10
// 17 LESS_THAN stack[0] = stack[0] < stack[1]
// 17 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=54
// 19 GET_GLOBAL → stack[0] = window
// 21 GET_PROP_NAME stack[0] ← stack[0]["ActiveXObject"]
// 23 PUSH_STRING → stack[1] = "PDF.PdfCtrl."
// 26 GET_VAR → stack[2] = scope[0][2]
// 29 ADD stack[1] = stack[1] + stack[2]
// 30 FUNCTION_BIND_APPLY → stack[0] = new stack[1](1 args)
// 32 NOT stack[0] = !stack[0]
// 33 NOT stack[0] = !stack[0]
// 33 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=41
// 36 GET_VAR → stack[0] = scope[0][2]
// 39 DUP → stack[1] = stack[0]
// 39 GET_PROP_NAME stack[1] ← stack[1]["toString"]
// 42 CALL func.apply(thisArg, [0 args]) → stack[0]
// 44 RETURN stack[0]
// 44 JUMP → JUMP_TO=48
// 47 SET_VAR scope[0][3] ← stack[-1]
// 49 PUSH_SCOPE_REF → stack[-1] = scope[0], stack[0] = 2
// 53 POST_INC stack[-1] = stack[-1][stack[0]]++ (old value)
// 54 POP stack[-1]
// 54 JUMP → JUMP_TO=10
// 56 GET_GLOBAL → stack[-1] = window
// 58 GET_PROP_NAME stack[-1] ← stack[-1]["ActiveXObject"]
// 60 PUSH_STRING → stack[0] = "PDF.PdfCtrl.1"
// 63 FUNCTION_BIND_APPLY → stack[-1] = new stack[0](1 args)
// 65 NOT stack[-1] = !stack[-1]
// 66 NOT stack[-1] = !stack[-1]
// 66 JUMP_IF_FALSE_OR_POP if (stack[-1]) POP else JUMP_TO=68
// 68 PUSH_STRING → stack[-1] = "4"
// 71 RETURN stack[-1]
// 71 JUMP → JUMP_TO=75
// 74 SET_VAR scope[0][4] ← stack[-2]
// 76 GET_GLOBAL → stack[-2] = window
// 78 GET_PROP_NAME stack[-2] ← stack[-2]["ActiveXObject"]
// 80 PUSH_STRING → stack[-1] = "AcroPDF.PDF.1"
// 83 FUNCTION_BIND_APPLY → stack[-2] = new stack[-1](1 args)
// 85 NOT stack[-2] = !stack[-2]
// 86 NOT stack[-2] = !stack[-2]
// 86 JUMP_IF_FALSE_OR_POP if (stack[-2]) POP else JUMP_TO=88
// 88 PUSH_STRING → stack[-2] = "7"
// 91 RETURN stack[-2]
// 91 JUMP → JUMP_TO=95
// 94 SET_VAR scope[0][5] ← stack[-3]
// 96 PUSH_STRING → stack[-3] = "0"
// 99 RETURN stack[-3]
