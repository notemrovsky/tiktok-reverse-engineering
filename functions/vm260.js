// 0 GET_GLOBAL → stack[0] = navigator
// 2 GET_PROP_NAME stack[0] ← stack[0]["userAgent"]
// 5 DUP → stack[1] = stack[0]
// 5 GET_PROP_NAME stack[1] ← stack[1]["toLowerCase"]
// 8 CALL func.apply(thisArg, [0 args]) → stack[0]
// 10 SET_VAR scope[0][2] ← stack[0]
// 13 GET_VAR → stack[0] = scope[0][2]
// 16 DUP → stack[1] = stack[0]
// 16 GET_PROP_NAME stack[1] ← stack[1]["indexOf"]
// 18 PUSH_STRING → stack[2] = "electron"
// 21 CALL func.apply(thisArg, [1 args]) → stack[0]
// 22 PUSH_CONST → stack[1] = 0
// 25 GREATER_EQUAL stack[0] = stack[0] >= stack[1]
// 25 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=27
// 28 PUSH_FALSE → stack[0] = false
// 29 RETURN stack[0]
// 29 PUSH_STRING → stack[0] = "undefined"
// 32 SET_VAR scope[0][3] ← stack[0]
// 34 TYPEOF_GLOBAL → stack[0] = typeof global["window"]
// 36 PUSH_STRING → stack[1] = "undefined"
// 39 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 39 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=43
// 41 PUSH_STRING → stack[0] = "undefined"
// 43 JUMP → JUMP_TO=52
// 46 PUSH_UNDEFINED → stack[1] = undefined
// 47 GET_VAR → stack[2] = scope[2][0]
// 49 GET_GLOBAL → stack[3] = window
// 52 CALL func.apply(thisArg, [1 args]) → stack[1]
// 54 GET_VAR → stack[2] = scope[0][3]
// 57 STRICT_EQUAL stack[1] = stack[1] === stack[2]
// 57 JUMP_IF_TRUE_OR_POP if (stack[1]) JUMP_TO=67 else POP
// 59 GET_GLOBAL → stack[1] = window
// 62 DUP → stack[2] = stack[1]
// 62 GET_PROP_NAME stack[2] ← stack[2]["toString"]
// 65 CALL func.apply(thisArg, [0 args]) → stack[1]
// 66 PUSH_STRING → stack[2] = "[object Window]"
// 69 STRICT_NOT_EQUAL stack[1] = stack[1] !== stack[2]
// 69 JUMP_IF_TRUE_OR_POP if (stack[1]) JUMP_TO=85 else POP
// 71 GET_GLOBAL → stack[1] = Object
// 73 GET_PROP_NAME stack[1] ← stack[1]["prototype"]
// 75 GET_PROP_NAME stack[1] ← stack[1]["toString"]
// 78 DUP → stack[2] = stack[1]
// 78 GET_PROP_NAME stack[2] ← stack[2]["call"]
// 80 GET_GLOBAL → stack[3] = window
// 83 CALL func.apply(thisArg, [1 args]) → stack[1]
// 84 PUSH_STRING → stack[2] = "[object Window]"
// 87 STRICT_NOT_EQUAL stack[1] = stack[1] !== stack[2]
// 87 JUMP_IF_TRUE_OR_POP if (stack[1]) JUMP_TO=110 else POP
// 89 TYPEOF_GLOBAL → stack[1] = typeof global["document"]
// 91 PUSH_STRING → stack[2] = "undefined"
// 94 STRICT_EQUAL stack[1] = stack[1] === stack[2]
// 94 JUMP_IF_FALSE if (!stack[1]) JUMP_TO=98
// 96 PUSH_STRING → stack[1] = "undefined"
// 98 JUMP → JUMP_TO=107
// 101 PUSH_UNDEFINED → stack[2] = undefined
// 102 GET_VAR → stack[3] = scope[2][0]
// 104 GET_GLOBAL → stack[4] = document
// 107 CALL func.apply(thisArg, [1 args]) → stack[2]
// 109 GET_VAR → stack[3] = scope[0][3]
// 112 STRICT_EQUAL stack[2] = stack[2] === stack[3]
// 112 JUMP_IF_TRUE_OR_POP if (stack[2]) JUMP_TO=129 else POP
// 114 GET_GLOBAL → stack[2] = document
// 117 DUP → stack[3] = stack[2]
// 117 GET_PROP_NAME stack[3] ← stack[3]["toString"]
// 120 CALL func.apply(thisArg, [0 args]) → stack[2]
// 122 DUP → stack[3] = stack[2]
// 122 GET_PROP_NAME stack[3] ← stack[3]["indexOf"]
// 124 PUSH_STRING → stack[4] = "Document"
// 127 CALL func.apply(thisArg, [1 args]) → stack[2]
// 128 PUSH_CONST → stack[3] = 0
// 131 LESS_THAN stack[2] = stack[2] < stack[3]
// 131 JUMP_IF_TRUE_OR_POP if (stack[2]) JUMP_TO=154 else POP
// 133 TYPEOF_GLOBAL → stack[2] = typeof global["navigator"]
// 135 PUSH_STRING → stack[3] = "undefined"
// 138 STRICT_EQUAL stack[2] = stack[2] === stack[3]
// 138 JUMP_IF_FALSE if (!stack[2]) JUMP_TO=142
// 140 PUSH_STRING → stack[2] = "undefined"
// 142 JUMP → JUMP_TO=151
// 145 PUSH_UNDEFINED → stack[3] = undefined
// 146 GET_VAR → stack[4] = scope[2][0]
// 148 GET_GLOBAL → stack[5] = navigator
// 151 CALL func.apply(thisArg, [1 args]) → stack[3]
// 153 GET_VAR → stack[4] = scope[0][3]
// 156 STRICT_EQUAL stack[3] = stack[3] === stack[4]
// 156 JUMP_IF_TRUE_OR_POP if (stack[3]) JUMP_TO=166 else POP
// 158 GET_GLOBAL → stack[3] = navigator
// 161 DUP → stack[4] = stack[3]
// 161 GET_PROP_NAME stack[4] ← stack[4]["toString"]
// 164 CALL func.apply(thisArg, [0 args]) → stack[3]
// 165 PUSH_STRING → stack[4] = "[object Navigator]"
// 168 STRICT_NOT_EQUAL stack[3] = stack[3] !== stack[4]
// 168 JUMP_IF_TRUE_OR_POP if (stack[3]) JUMP_TO=182 else POP
// 170 GET_GLOBAL → stack[3] = navigator
// 172 GET_PROP_NAME stack[3] ← stack[3]["userAgent"]
// 175 DUP → stack[4] = stack[3]
// 175 GET_PROP_NAME stack[4] ← stack[4]["indexOf"]
// 177 PUSH_STRING → stack[5] = "jsdom"
// 180 CALL func.apply(thisArg, [1 args]) → stack[3]
// 181 PUSH_CONST → stack[4] = 0
// 184 GREATER_EQUAL stack[3] = stack[3] >= stack[4]
// 184 JUMP_IF_TRUE_OR_POP if (stack[3]) JUMP_TO=207 else POP
// 186 TYPEOF_GLOBAL → stack[3] = typeof global["location"]
// 188 PUSH_STRING → stack[4] = "undefined"
// 191 STRICT_EQUAL stack[3] = stack[3] === stack[4]
// 191 JUMP_IF_FALSE if (!stack[3]) JUMP_TO=195
// 193 PUSH_STRING → stack[3] = "undefined"
// 195 JUMP → JUMP_TO=204
// 198 PUSH_UNDEFINED → stack[4] = undefined
// 199 GET_VAR → stack[5] = scope[2][0]
// 201 GET_GLOBAL → stack[6] = location
// 204 CALL func.apply(thisArg, [1 args]) → stack[4]
// 206 GET_VAR → stack[5] = scope[0][3]
// 209 STRICT_EQUAL stack[4] = stack[4] === stack[5]
// 209 JUMP_IF_FALSE if (!stack[4]) JUMP_TO=211
// 212 PUSH_TRUE → stack[4] = true
// 213 RETURN stack[4]
// 214 PUSH_UNDEFINED → stack[4] = undefined
// 215 GET_VAR → stack[5] = scope[2][1]
// 218 CALL func.apply(thisArg, [0 args]) → stack[4]
// 220 NOT stack[4] = !stack[4]
// 220 JUMP_IF_FALSE if (!stack[4]) JUMP_TO=259
// 222 TYPEOF_GLOBAL → stack[4] = typeof global["history"]
// 224 PUSH_STRING → stack[5] = "undefined"
// 227 STRICT_EQUAL stack[4] = stack[4] === stack[5]
// 227 JUMP_IF_FALSE if (!stack[4]) JUMP_TO=231
// 229 PUSH_STRING → stack[4] = "undefined"
// 231 JUMP → JUMP_TO=240
// 234 PUSH_UNDEFINED → stack[5] = undefined
// 235 GET_VAR → stack[6] = scope[2][0]
// 237 GET_GLOBAL → stack[7] = history
// 240 CALL func.apply(thisArg, [1 args]) → stack[5]
// 242 GET_VAR → stack[6] = scope[0][3]
// 245 STRICT_EQUAL stack[5] = stack[5] === stack[6]
// 245 JUMP_IF_TRUE_OR_POP if (stack[5]) JUMP_TO=255 else POP
// 247 GET_GLOBAL → stack[5] = history
// 250 DUP → stack[6] = stack[5]
// 250 GET_PROP_NAME stack[6] ← stack[6]["toString"]
// 253 CALL func.apply(thisArg, [0 args]) → stack[5]
// 254 PUSH_STRING → stack[6] = "[object History]"
// 257 STRICT_NOT_EQUAL stack[5] = stack[5] !== stack[6]
// 257 JUMP_IF_FALSE if (!stack[5]) JUMP_TO=259
// 260 PUSH_TRUE → stack[5] = true
// 261 RETURN stack[5]
// 262 PUSH_FALSE → stack[5] = false
// 263 RETURN stack[5]
