// 1 GET_VAR → stack[0] = scope[2][1]
// 3 GET_PROP_NAME stack[0] ← stack[0]["regionConf"]
// 5 GET_PROP_NAME stack[0] ← stack[0]["host"]
// 7 PUSH_STRING → stack[1] = "/web/ping"
// 10 ADD stack[0] = stack[0] + stack[1]
// 11 SET_VAR scope[0][3] ← stack[0]
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
// 44 SET_VAR scope[0][4] ← stack[0]
// 46 GET_GLOBAL → stack[0] = URL
// 49 GET_VAR → stack[1] = scope[0][2]
// 52 FUNCTION_BIND_APPLY → stack[0] = new stack[1](1 args)
// 54 SET_VAR scope[0][5] ← stack[0]
// 57 GET_VAR → stack[0] = scope[0][4]
// 59 PUSH_STRING → stack[1] = "5.1.0"
// 61 SET_GLOBAL_PROP stack[1]["coreVersion"] ← stack[0]
// 64 GET_VAR → stack[0] = scope[0][4]
// 67 GET_VAR → stack[1] = scope[0][5]
// 69 GET_PROP_NAME stack[1] ← stack[1]["pathname"]
// 71 SET_GLOBAL_PROP stack[1]["jsLinkPath"] ← stack[0]
// 73 JUMP → JUMP_TO=79
// 76 SET_VAR scope[0][8] ← stack[-1]
// 79 PUSH_UNDEFINED → stack[-1] = undefined
// 80 RETURN stack[-1]
// 81 GET_VAR → stack[-1] = scope[0][3]
// 83 PUSH_STRING → stack[0] = "?eq="
// 86 ADD stack[-1] = stack[-1] + stack[0]
// 87 PUSH_UNDEFINED → stack[0] = undefined
// 88 GET_VAR → stack[1] = scope[2][2]
// 91 GET_VAR → stack[2] = scope[0][4]
// 94 CALL func.apply(thisArg, [1 args]) → stack[0]
// 96 ADD stack[-1] = stack[-1] + stack[0]
// 97 SET_VAR scope[0][6] ← stack[-1]
// 99 GET_GLOBAL → stack[-1] = XMLHttpRequest
// 102 FUNCTION_BIND_APPLY → stack[-1] = new stack[-1](0 args)
// 104 SET_VAR scope[0][7] ← stack[-1]
// 107 GET_VAR → stack[-1] = scope[0][7]
// 110 PUSH_TRUE → stack[0] = true
// 110 SET_GLOBAL_PROP stack[0]["withCredentials"] ← stack[-1]
// 113 GET_VAR → stack[-1] = scope[0][7]
// 116 DUP → stack[0] = stack[-1]
// 116 GET_PROP_NAME stack[0] ← stack[0]["open"]
// 118 PUSH_STRING → stack[1] = "GET"
// 121 GET_VAR → stack[2] = scope[0][6]
// 124 PUSH_TRUE → stack[3] = true
// 125 CALL func.apply(thisArg, [3 args]) → stack[-1]
// 127 POP stack[-1]
// 128 GET_VAR → stack[-1] = scope[0][7]
// 131 DUP → stack[0] = stack[-1]
// 131 GET_PROP_NAME stack[0] ← stack[0]["send"]
// 134 CALL func.apply(thisArg, [0 args]) → stack[-1]
// 136 POP stack[-1]
// 137 PUSH_UNDEFINED → stack[-1] = undefined
// 138 RETURN stack[-1]
