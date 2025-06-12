// 0 PUSH_FUNCTION → stack[0] = function[248]
// 3 SET_VAR scope[0][3] ← stack[0]
// 5 PUSH_FUNCTION → stack[0] = function[249]
// 8 SET_VAR scope[1][9] ← stack[0]
// 10 PUSH_FUNCTION → stack[0] = function[251]
// 13 SET_VAR scope[0][4] ← stack[0]
// 15 GET_GLOBAL → stack[0] = Math
// 18 DUP → stack[1] = stack[0]
// 18 GET_PROP_NAME stack[1] ← stack[1]["floor"]
// 20 GET_GLOBAL → stack[2] = Math
// 23 DUP → stack[3] = stack[2]
// 23 GET_PROP_NAME stack[3] ← stack[3]["abs"]
// 25 GET_GLOBAL → stack[4] = Date
// 28 DUP → stack[5] = stack[4]
// 28 GET_PROP_NAME stack[5] ← stack[5]["now"]
// 31 CALL func.apply(thisArg, [0 args]) → stack[4]
// 32 GET_GLOBAL → stack[5] = Math
// 35 DUP → stack[6] = stack[5]
// 35 GET_PROP_NAME stack[6] ← stack[6]["random"]
// 38 CALL func.apply(thisArg, [0 args]) → stack[5]
// 40 ADD stack[4] = stack[4] + stack[5]
// 40 GET_GLOBAL → stack[5] = Math
// 43 DUP → stack[6] = stack[5]
// 43 GET_PROP_NAME stack[6] ← stack[6]["random"]
// 46 CALL func.apply(thisArg, [0 args]) → stack[5]
// 48 ADD stack[4] = stack[4] + stack[5]
// 48 PUSH_CONST → stack[5] = 1000
// 51 MUL stack[4] = stack[4] * stack[5]
// 51 PUSH_MAGIC_NUMBER → stack[5] = 2147483648
// 54 MOD stack[4] = stack[4] % stack[5]
// 55 CALL func.apply(thisArg, [1 args]) → stack[2]
// 57 CALL func.apply(thisArg, [1 args]) → stack[0]
// 59 SET_VAR scope[0][2] ← stack[0]
// 62 PUSH_UNDEFINED → stack[0] = undefined
// 63 RETURN stack[0]
