// 1 GET_VAR → stack[0] = scope[0][1]
// 3 GET_PROP_NAME stack[0] ← stack[0]["length"]
// 5 PUSH_CONST → stack[1] = 3
// 8 GREATER_THAN stack[0] = stack[0] > stack[1]
// 8 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=15
// 11 GET_VAR → stack[0] = scope[0][1]
// 13 GET_PROP_NAME stack[0] ← stack[0]["3"]
// 16 PUSH_UNDEFINED → stack[1] = undefined
// 17 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 17 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=24
// 20 GET_VAR → stack[0] = scope[0][1]
// 22 GET_PROP_NAME stack[0] ← stack[0]["3"]
// 24 JUMP → JUMP_TO=26
// 27 PUSH_FALSE → stack[1] = false
// 28 SET_VAR scope[0][5] ← stack[1]
// 31 GET_VAR → stack[1] = scope[0][1]
// 33 GET_PROP_NAME stack[1] ← stack[1]["length"]
// 35 PUSH_CONST → stack[2] = 4
// 38 GREATER_THAN stack[1] = stack[1] > stack[2]
// 38 JUMP_IF_FALSE if (!stack[1]) JUMP_TO=45
// 41 GET_VAR → stack[1] = scope[0][1]
// 43 GET_PROP_NAME stack[1] ← stack[1]["4"]
// 45 JUMP → JUMP_TO=47
// 48 PUSH_UNDEFINED → stack[2] = undefined
// 49 SET_VAR scope[0][6] ← stack[2]
// 52 GET_VAR → stack[2] = scope[0][1]
// 54 GET_PROP_NAME stack[2] ← stack[2]["length"]
// 56 PUSH_CONST → stack[3] = 5
// 59 GREATER_THAN stack[2] = stack[2] > stack[3]
// 59 JUMP_IF_FALSE_OR_POP if (stack[2]) POP else JUMP_TO=66
// 62 GET_VAR → stack[2] = scope[0][1]
// 64 GET_PROP_NAME stack[2] ← stack[2]["5"]
// 67 PUSH_UNDEFINED → stack[3] = undefined
// 68 STRICT_NOT_EQUAL stack[2] = stack[2] !== stack[3]
// 68 JUMP_IF_FALSE if (!stack[2]) JUMP_TO=75
// 71 GET_VAR → stack[2] = scope[0][1]
// 73 GET_PROP_NAME stack[2] ← stack[2]["5"]
// 75 JUMP → JUMP_TO=77
// 78 PUSH_FALSE → stack[3] = false
// 79 SET_VAR scope[0][7] ← stack[3]
// 82 GET_VAR → stack[3] = scope[1][12]
// 84 JUMP_IF_FALSE_OR_POP if (stack[3]) POP else JUMP_TO=88
// 87 GET_VAR → stack[3] = scope[0][7]
// 90 NOT stack[3] = !stack[3]
// 90 JUMP_IF_FALSE if (!stack[3]) JUMP_TO=92
// 93 PUSH_UNDEFINED → stack[3] = undefined
// 94 RETURN stack[3]
// 95 GET_VAR → stack[3] = scope[0][2]
// 98 SET_VAR scope[1][9] ← stack[3]
// 101 GET_VAR → stack[3] = scope[0][4]
// 104 SET_VAR scope[1][10] ← stack[3]
// 107 GET_VAR → stack[3] = scope[0][3]
// 110 SET_VAR scope[1][11] ← stack[3]
// 112 PUSH_CONST → stack[3] = 1
// 115 SET_VAR scope[0][8] ← stack[3]
// 117 PUSH_CONST → stack[3] = 2
// 120 SET_VAR scope[0][9] ← stack[3]
// 122 PUSH_CONST → stack[3] = 1
// 125 SET_VAR scope[0][10] ← stack[3]
// 128 PUSH_UNDEFINED → stack[3] = undefined
// 129 GET_VAR → stack[4] = scope[1][22]
// 132 CALL func.apply(thisArg, [0 args]) → stack[3]
// 134 SET_VAR scope[0][11] ← stack[3]
// 137 GET_VAR → stack[3] = scope[0][11]
// 140 NOT stack[3] = !stack[3]
// 140 JUMP_IF_FALSE if (!stack[3]) JUMP_TO=142
// 143 PUSH_UNDEFINED → stack[3] = undefined
// 144 RETURN stack[3]
// 145 GET_VAR → stack[3] = scope[0][11]
// 148 NEW_OBJECT → stack[4] = {}
// 149 GET_VAR → stack[5] = scope[0][11]
// 151 GET_PROP_NAME stack[5] ← stack[5]["wID"]
// 153 GET_PROP_NAME stack[5] ← stack[5]["msgType"]
// 155 DEFINE_PROP Object.defineProperty(stack[4], "msgType", stack[5])
// 158 GET_VAR → stack[5] = scope[0][8]
// 160 DEFINE_PROP Object.defineProperty(stack[4], "msgSrcProp", stack[5])
// 163 GET_VAR → stack[5] = scope[0][10]
// 165 DEFINE_PROP Object.defineProperty(stack[4], "msgProtocol", stack[5])
// 168 GET_VAR → stack[5] = scope[0][4]
// 170 GET_PROP_NAME stack[5] ← stack[5]["aid"]
// 172 DEFINE_PROP Object.defineProperty(stack[4], "aid", stack[5])
// 175 GET_VAR → stack[5] = scope[0][2]
// 177 GET_PROP_NAME stack[5] ← stack[5]["aidList"]
// 179 DEFINE_PROP Object.defineProperty(stack[4], "aidList", stack[5])
// 181 SET_GLOBAL_PROP stack[4]["msgMeta"] ← stack[3]
// 184 GET_VAR → stack[3] = scope[0][11]
// 187 GET_VAR → stack[4] = scope[0][4]
// 189 GET_PROP_NAME stack[4] ← stack[4]["custom"]
// 191 SET_GLOBAL_PROP stack[4]["customInit"] ← stack[3]
// 194 GET_VAR → stack[3] = scope[0][5]
// 196 JUMP_IF_FALSE if (!stack[3]) JUMP_TO=266
// 199 GET_VAR → stack[3] = scope[0][11]
// 201 GET_PROP_NAME stack[3] ← stack[3]["msgMeta"]
// 204 GET_VAR → stack[4] = scope[0][9]
// 206 SET_GLOBAL_PROP stack[4]["msgSrcProp"] ← stack[3]
// 209 GET_VAR → stack[3] = scope[0][6]
// 211 FOR_IN_SETUP scope[13] = [Object.keys(stack[3]), stack[3]]
// 213 PUSH_SCOPE_REF → stack[3] = scope[0], stack[4] = 12
// 216 FOR_IN_NEXT stack[5][stack[4]] = next_key_from_scope[13]; stack[3] = has_more
// 218 JUMP_IF_FALSE if (!stack[3]) JUMP_TO=266
// 221 GET_VAR → stack[3] = scope[0][11]
// 224 GET_VAR → stack[4] = scope[0][12]
// 227 GET_PROP stack[3] = stack[3][stack[4]]
// 227 JUMP_IF_FALSE if (!stack[3]) JUMP_TO=250
// 230 PUSH_UNDEFINED → stack[3] = undefined
// 231 GET_VAR → stack[4] = scope[2][25]
// 234 GET_VAR → stack[5] = scope[0][11]
// 237 GET_VAR → stack[6] = scope[0][12]
// 240 GET_PROP stack[5] = stack[5][stack[6]]
// 241 GET_VAR → stack[6] = scope[0][6]
// 244 GET_VAR → stack[7] = scope[0][12]
// 247 GET_PROP stack[6] = stack[6][stack[7]]
// 248 CALL func.apply(thisArg, [2 args]) → stack[3]
// 250 POP stack[3]
// 250 JUMP → JUMP_TO=265
// 253 GET_VAR → stack[3] = scope[0][11]
// 256 GET_VAR → stack[4] = scope[0][12]
// 259 GET_VAR → stack[5] = scope[0][6]
// 262 GET_VAR → stack[6] = scope[0][12]
// 265 GET_PROP stack[5] = stack[5][stack[6]]
// 266 SET_PROP stack[3][stack[4]] = stack[5]
// 266 JUMP → JUMP_TO=212
// 269 PUSH_UNDEFINED → stack[3] = undefined
// 270 GET_VAR → stack[4] = scope[1][23]
// 273 GET_VAR → stack[5] = scope[0][11]
// 276 CALL func.apply(thisArg, [1 args]) → stack[3]
// 278 POP stack[3]
// 278 JUMP → JUMP_TO=301
// 281 SET_VAR scope[0][14] ← stack[2]
// 284 GET_VAR → stack[2] = scope[1][11]
// 287 DUP → stack[3] = stack[2]
// 287 GET_PROP_NAME stack[3] ← stack[3]["push"]
// 290 NEW_OBJECT → stack[4] = {}
// 291 GET_VAR → stack[5] = scope[0][14]
// 293 DEFINE_PROP Object.defineProperty(stack[4], "err", stack[5])
// 295 PUSH_STRING → stack[5] = "d_o"
// 297 DEFINE_PROP Object.defineProperty(stack[4], "type", stack[5])
// 300 CALL func.apply(thisArg, [1 args]) → stack[2]
// 302 POP stack[2]
// 303 PUSH_UNDEFINED → stack[2] = undefined
// 304 RETURN stack[2]
