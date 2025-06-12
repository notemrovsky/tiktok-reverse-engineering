// 1 GET_VAR → stack[0] = scope[2][1]
// 3 GET_PROP_NAME stack[0] ← stack[0]["regionConf"]
// 5 GET_PROP_NAME stack[0] ← stack[0]["host"]
// 7 PUSH_STRING → stack[1] = "/web/resource"
// 10 ADD stack[0] = stack[0] + stack[1]
// 11 SET_VAR scope[0][2] ← stack[0]
// 14 NEW_OBJECT → stack[0] = {}
// 15 GET_VAR → stack[1] = scope[2][1]
// 17 GET_PROP_NAME stack[1] ← stack[1]["aid"]
// 19 DEFINE_PROP Object.defineProperty(stack[0], "aid", stack[1])
// 22 GET_VAR → stack[1] = scope[2][1]
// 24 GET_PROP_NAME stack[1] ← stack[1]["region"]
// 26 DEFINE_PROP Object.defineProperty(stack[0], "region", stack[1])
// 28 GET_GLOBAL → stack[1] = window
// 30 GET_PROP_NAME stack[1] ← stack[1]["location"]
// 32 GET_PROP_NAME stack[1] ← stack[1]["host"]
// 34 GET_GLOBAL → stack[2] = window
// 36 GET_PROP_NAME stack[2] ← stack[2]["location"]
// 38 GET_PROP_NAME stack[2] ← stack[2]["pathname"]
// 41 ADD stack[1] = stack[1] + stack[2]
// 41 DEFINE_PROP Object.defineProperty(stack[0], "location", stack[1])
// 44 SET_VAR scope[0][3] ← stack[0]
// 47 GET_VAR → stack[0] = scope[0][2]
// 49 PUSH_STRING → stack[1] = "?eq="
// 52 ADD stack[0] = stack[0] + stack[1]
// 53 PUSH_UNDEFINED → stack[1] = undefined
// 54 GET_VAR → stack[2] = scope[2][2]
// 57 GET_VAR → stack[3] = scope[0][3]
// 60 CALL func.apply(thisArg, [1 args]) → stack[1]
// 62 ADD stack[0] = stack[0] + stack[1]
// 63 SET_VAR scope[0][4] ← stack[0]
// 66 PUSH_UNDEFINED → stack[0] = undefined
// 67 GET_VAR → stack[1] = scope[1][4]
// 70 GET_VAR → stack[2] = scope[0][4]
// 72 PUSH_FUNCTION → stack[3] = function[212]
// 75 CALL func.apply(thisArg, [2 args]) → stack[0]
// 77 POP stack[0]
// 78 PUSH_UNDEFINED → stack[0] = undefined
// 79 RETURN stack[0]
