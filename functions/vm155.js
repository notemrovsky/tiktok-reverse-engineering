// 0 PUSH_STRING → stack[0] = ""
// 3 SET_VAR scope[0][3] ← stack[0]
// 6 PUSH_UNDEFINED → stack[0] = undefined
// 7 GET_VAR → stack[1] = scope[1][9]
// 10 GET_VAR → stack[2] = scope[0][2]
// 13 CALL func.apply(thisArg, [1 args]) → stack[0]
// 15 RETURN stack[0]
// 15 JUMP → JUMP_TO=25
// 18 SET_VAR scope[0][5] ← stack[-1]
// 21 GET_VAR → stack[-1] = scope[0][5]
// 24 SET_VAR scope[0][3] ← stack[-1]
// 26 GET_GLOBAL → stack[-1] = JSON
// 29 DUP → stack[0] = stack[-1]
// 29 GET_PROP_NAME stack[0] ← stack[0]["stringify"]
// 32 GET_VAR → stack[1] = scope[0][2]
// 35 CALL func.apply(thisArg, [1 args]) → stack[-1]
// 37 SET_VAR scope[0][4] ← stack[-1]
// 40 GET_VAR → stack[-1] = scope[2][1]
// 42 GET_PROP_NAME stack[-1] ← stack[-1]["slardarErrs"]
// 45 DUP → stack[0] = stack[-1]
// 45 GET_PROP_NAME stack[0] ← stack[0]["push"]
// 48 NEW_OBJECT → stack[1] = {}
// 49 GET_VAR → stack[2] = scope[0][3]
// 51 DEFINE_PROP Object.defineProperty(stack[1], "err", stack[2])
// 53 PUSH_STRING → stack[2] = "sr_string"
// 55 DEFINE_PROP Object.defineProperty(stack[1], "type", stack[2])
// 58 GET_VAR → stack[2] = scope[0][4]
// 61 DUP → stack[3] = stack[2]
// 61 GET_PROP_NAME stack[3] ← stack[3]["substring"]
// 63 PUSH_CONST → stack[4] = 0
// 65 PUSH_CONST → stack[5] = 20
// 68 CALL func.apply(thisArg, [2 args]) → stack[2]
// 69 DEFINE_PROP Object.defineProperty(stack[1], "data", stack[2])
// 72 CALL func.apply(thisArg, [1 args]) → stack[-1]
// 74 POP stack[-1]
// 75 GET_VAR → stack[-1] = scope[0][4]
// 78 RETURN stack[-1]
