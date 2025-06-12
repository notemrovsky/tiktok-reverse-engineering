// 1 GET_VAR → stack[0] = scope[1][3]
// 4 DUP → stack[1] = stack[0]
// 4 GET_PROP_NAME stack[1] ← stack[1]["drawImage"]
// 7 GET_VAR → stack[2] = scope[1][2]
// 9 PUSH_CONST → stack[3] = 0
// 11 PUSH_CONST → stack[4] = 0
// 14 CALL func.apply(thisArg, [3 args]) → stack[0]
// 16 POP stack[0]
// 16 PUSH_CONST → stack[0] = 0
// 19 GET_VAR → stack[1] = scope[1][3]
// 22 DUP → stack[2] = stack[1]
// 22 GET_PROP_NAME stack[2] ← stack[2]["getImageData"]
// 24 PUSH_CONST → stack[3] = 0
// 26 PUSH_CONST → stack[4] = 0
// 28 PUSH_CONST → stack[5] = 1
// 30 PUSH_CONST → stack[6] = 1
// 33 CALL func.apply(thisArg, [4 args]) → stack[1]
// 34 GET_PROP_NAME stack[1] ← stack[1]["data"]
// 36 GET_PROP_NAME stack[1] ← stack[1]["3"]
// 39 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 40 SET_VAR scope[0][2] ← stack[0]
// 43 GET_VAR → stack[0] = scope[2][2]
// 45 GET_PROP_NAME stack[0] ← stack[0]["wID"]
// 47 PUSH_CONST → stack[1] = 2
// 50 GET_VAR → stack[2] = scope[0][2]
// 53 ADD stack[1] = stack[1] + stack[2]
// 53 SET_GLOBAL_PROP stack[1]["load"] ← stack[0]
// 56 PUSH_UNDEFINED → stack[0] = undefined
// 57 RETURN stack[0]
