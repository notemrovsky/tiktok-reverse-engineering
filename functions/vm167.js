// 0 GET_GLOBAL → stack[0] = window
// 3 GET_VAR → stack[1] = scope[0][2]
// 6 GET_PROP stack[0] = stack[0][stack[1]]
// 7 SET_VAR scope[0][3] ← stack[0]
// 9 PUSH_STRING → stack[0] = "__web_idontknowwhyiwriteit__"
// 12 SET_VAR scope[0][4] ← stack[0]
// 15 GET_VAR → stack[0] = scope[0][3]
// 18 DUP → stack[1] = stack[0]
// 18 GET_PROP_NAME stack[1] ← stack[1]["setItem"]
// 21 GET_VAR → stack[2] = scope[0][4]
// 24 GET_VAR → stack[3] = scope[0][4]
// 27 CALL func.apply(thisArg, [2 args]) → stack[0]
// 29 POP stack[0]
// 30 GET_VAR → stack[0] = scope[0][3]
// 33 DUP → stack[1] = stack[0]
// 33 GET_PROP_NAME stack[1] ← stack[1]["removeItem"]
// 36 GET_VAR → stack[2] = scope[0][4]
// 39 CALL func.apply(thisArg, [1 args]) → stack[0]
// 41 POP stack[0]
// 41 PUSH_CONST → stack[0] = 0
// 44 NOT stack[0] = !stack[0]
// 45 RETURN stack[0]
// 45 JUMP → JUMP_TO=53
// 48 SET_VAR scope[0][5] ← stack[-1]
// 50 PUSH_CONST → stack[-1] = 1
// 53 NOT stack[-1] = !stack[-1]
// 54 RETURN stack[-1]
// 55 PUSH_UNDEFINED → stack[-1] = undefined
// 56 RETURN stack[-1]
