// 1 PUSH_UNDEFINED → stack[0] = undefined
// 2 GET_VAR → stack[1] = scope[4][6]
// 5 CALL func.apply(thisArg, [0 args]) → stack[0]
// 7 SET_VAR scope[0][3] ← stack[0]
// 10 GET_VAR → stack[0] = scope[0][3]
// 12 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=28
// 15 GET_VAR → stack[0] = scope[0][3]
// 18 DUP → stack[1] = stack[0]
// 18 GET_PROP_NAME stack[1] ← stack[1]["then"]
// 20 PUSH_FUNCTION → stack[2] = function[37]
// 23 CALL func.apply(thisArg, [1 args]) → stack[0]
// 25 DUP → stack[1] = stack[0]
// 25 GET_PROP_NAME stack[1] ← stack[1]["catch"]
// 28 CALL func.apply(thisArg, [0 args]) → stack[0]
// 30 POP stack[0]
// 30 JUMP → JUMP_TO=53
// 33 SET_VAR scope[0][4] ← stack[-1]
// 36 GET_VAR → stack[-1] = scope[3][11]
// 39 DUP → stack[0] = stack[-1]
// 39 GET_PROP_NAME stack[0] ← stack[0]["push"]
// 42 NEW_OBJECT → stack[1] = {}
// 43 GET_VAR → stack[2] = scope[0][4]
// 45 DEFINE_PROP Object.defineProperty(stack[1], "err", stack[2])
// 47 PUSH_STRING → stack[2] = "d_r"
// 49 DEFINE_PROP Object.defineProperty(stack[1], "type", stack[2])
// 52 CALL func.apply(thisArg, [1 args]) → stack[-1]
// 54 POP stack[-1]
// 55 PUSH_UNDEFINED → stack[-1] = undefined
// 56 GET_VAR → stack[0] = scope[0][2]
// 58 PUSH_STRING → stack[1] = ""
// 61 CALL func.apply(thisArg, [1 args]) → stack[-1]
// 63 POP stack[-1]
// 64 PUSH_UNDEFINED → stack[-1] = undefined
// 65 RETURN stack[-1]
