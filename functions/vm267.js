// 1 PUSH_UNDEFINED → stack[0] = undefined
// 2 GET_VAR → stack[1] = scope[2][0]
// 5 CALL func.apply(thisArg, [0 args]) → stack[0]
// 7 NOT stack[0] = !stack[0]
// 7 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=166
// 9 GET_GLOBAL → stack[0] = document
// 12 DUP → stack[1] = stack[0]
// 12 GET_PROP_NAME stack[1] ← stack[1]["createElement"]
// 14 PUSH_STRING → stack[2] = "canvas"
// 17 CALL func.apply(thisArg, [1 args]) → stack[0]
// 19 SET_VAR scope[0][2] ← stack[0]
// 22 GET_VAR → stack[0] = scope[0][2]
// 24 PUSH_STRING → stack[1] = "toDataURL"
// 27 NEW_ARRAY → stack[0] = [...top 2 elements]
// 28 GET_GLOBAL → stack[1] = navigator
// 30 PUSH_STRING → stack[2] = "toString"
// 33 NEW_ARRAY → stack[1] = [...top 2 elements]
// 34 GET_GLOBAL → stack[2] = document
// 36 PUSH_STRING → stack[3] = "createElement"
// 39 NEW_ARRAY → stack[2] = [...top 2 elements]
// 40 GET_GLOBAL → stack[3] = document
// 42 PUSH_STRING → stack[4] = "getElementById"
// 45 NEW_ARRAY → stack[3] = [...top 2 elements]
// 46 GET_GLOBAL → stack[4] = JSON
// 48 PUSH_STRING → stack[5] = "stringify"
// 51 NEW_ARRAY → stack[4] = [...top 2 elements]
// 52 GET_GLOBAL → stack[5] = JSON
// 54 PUSH_STRING → stack[6] = "parse"
// 57 NEW_ARRAY → stack[5] = [...top 2 elements]
// 58 GET_GLOBAL → stack[6] = window
// 60 PUSH_STRING → stack[7] = "setInterval"
// 63 NEW_ARRAY → stack[6] = [...top 2 elements]
// 64 GET_GLOBAL → stack[7] = window
// 66 PUSH_STRING → stack[8] = "eval"
// 69 NEW_ARRAY → stack[7] = [...top 2 elements]
// 70 GET_GLOBAL → stack[8] = window
// 72 PUSH_STRING → stack[9] = "matchMedia"
// 75 NEW_ARRAY → stack[8] = [...top 2 elements]
// 77 NEW_ARRAY → stack[0] = [...top 9 elements]
// 79 SET_VAR scope[0][3] ← stack[0]
// 81 PUSH_CONST → stack[0] = 0
// 84 SET_VAR scope[0][4] ← stack[0]
// 87 GET_VAR → stack[0] = scope[0][4]
// 90 GET_VAR → stack[1] = scope[0][3]
// 92 GET_PROP_NAME stack[1] ← stack[1]["length"]
// 95 LESS_THAN stack[0] = stack[0] < stack[1]
// 95 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=166
// 98 GET_VAR → stack[0] = scope[0][3]
// 101 GET_VAR → stack[1] = scope[0][4]
// 104 GET_PROP stack[0] = stack[0][stack[1]]
// 104 GET_PROP_NAME stack[0] ← stack[0]["0"]
// 107 GET_VAR → stack[1] = scope[0][3]
// 110 GET_VAR → stack[2] = scope[0][4]
// 113 GET_PROP stack[1] = stack[1][stack[2]]
// 113 GET_PROP_NAME stack[1] ← stack[1]["1"]
// 116 GET_PROP stack[0] = stack[0][stack[1]]
// 117 DUP → stack[1] = stack[0]
// 117 GET_PROP_NAME stack[1] ← stack[1]["toString"]
// 120 CALL func.apply(thisArg, [0 args]) → stack[0]
// 122 DUP → stack[1] = stack[0]
// 122 GET_PROP_NAME stack[1] ← stack[1]["replace"]
// 124 GET_GLOBAL → stack[2] = RegExp
// 126 PUSH_STRING → stack[3] = "\s*"
// 128 PUSH_STRING → stack[4] = "g"
// 131 FUNCTION_BIND_APPLY → stack[2] = new stack[4](2 args)
// 132 PUSH_STRING → stack[3] = ""
// 135 CALL func.apply(thisArg, [2 args]) → stack[0]
// 137 DUP → stack[1] = stack[0]
// 137 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 139 PUSH_STRING → stack[2] = "nativecode"
// 142 CALL func.apply(thisArg, [1 args]) → stack[0]
// 144 SET_VAR scope[0][5] ← stack[0]
// 147 GET_VAR → stack[0] = scope[0][5]
// 149 PUSH_CONST → stack[1] = 0
// 152 LESS_THAN stack[0] = stack[0] < stack[1]
// 152 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=154
// 155 PUSH_TRUE → stack[0] = true
// 156 RETURN stack[0]
// 156 JUMP → JUMP_TO=160
// 159 SET_VAR scope[0][6] ← stack[-1]
// 161 PUSH_SCOPE_REF → stack[-1] = scope[0], stack[0] = 4
// 165 POST_INC stack[-1] = stack[-1][stack[0]]++ (old value)
// 166 POP stack[-1]
// 166 JUMP → JUMP_TO=85
// 168 GET_GLOBAL → stack[-1] = navigator
// 170 GET_PROP_NAME stack[-1] ← stack[-1]["plugins"]
// 173 DUP → stack[0] = stack[-1]
// 173 GET_PROP_NAME stack[0] ← stack[0]["toString"]
// 176 CALL func.apply(thisArg, [0 args]) → stack[-1]
// 177 PUSH_STRING → stack[0] = "[object PluginArray]"
// 180 STRICT_NOT_EQUAL stack[-1] = stack[-1] !== stack[0]
// 181 RETURN stack[-1]
