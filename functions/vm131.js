// 0 GET_GLOBAL → stack[0] = document
// 3 DUP → stack[1] = stack[0]
// 3 GET_PROP_NAME stack[1] ← stack[1]["createElement"]
// 5 PUSH_STRING → stack[2] = "canvas"
// 8 CALL func.apply(thisArg, [1 args]) → stack[0]
// 10 SET_VAR scope[0][2] ← stack[0]
// 12 GET_GLOBAL → stack[0] = HTMLCanvasElement
// 14 GET_PROP_NAME stack[0] ← stack[0]["prototype"]
// 17 SET_VAR scope[0][3] ← stack[0]
// 19 GET_GLOBAL → stack[0] = CanvasRenderingContext2D
// 21 GET_PROP_NAME stack[0] ← stack[0]["prototype"]
// 24 SET_VAR scope[0][4] ← stack[0]
// 27 GET_VAR → stack[0] = scope[0][2]
// 30 DUP → stack[1] = stack[0]
// 30 GET_PROP_NAME stack[1] ← stack[1]["getContext"]
// 32 PUSH_STRING → stack[2] = "2d"
// 35 CALL func.apply(thisArg, [1 args]) → stack[0]
// 37 SET_VAR scope[0][5] ← stack[0]
// 40 NEW_OBJECT → stack[0] = {}
// 40 PUSH_STRING → stack[1] = ""
// 43 PUSH_UNDEFINED → stack[2] = undefined
// 44 GET_VAR → stack[3] = scope[1][4]
// 47 GET_VAR → stack[4] = scope[0][2]
// 49 GET_PROP_NAME stack[4] ← stack[4]["toDataURL"]
// 52 GET_VAR → stack[5] = scope[0][3]
// 54 GET_PROP_NAME stack[5] ← stack[5]["toDataURL"]
// 57 CALL func.apply(thisArg, [2 args]) → stack[2]
// 59 ADD stack[1] = stack[1] + stack[2]
// 60 PUSH_UNDEFINED → stack[2] = undefined
// 61 GET_VAR → stack[3] = scope[1][3]
// 64 GET_VAR → stack[4] = scope[0][2]
// 66 GET_PROP_NAME stack[4] ← stack[4]["toDataURL"]
// 69 CALL func.apply(thisArg, [1 args]) → stack[2]
// 71 ADD stack[1] = stack[1] + stack[2]
// 72 PUSH_UNDEFINED → stack[2] = undefined
// 73 GET_VAR → stack[3] = scope[1][3]
// 76 GET_VAR → stack[4] = scope[0][3]
// 78 GET_PROP_NAME stack[4] ← stack[4]["toDataURL"]
// 81 CALL func.apply(thisArg, [1 args]) → stack[2]
// 83 ADD stack[1] = stack[1] + stack[2]
// 84 PUSH_UNDEFINED → stack[2] = undefined
// 85 GET_VAR → stack[3] = scope[1][4]
// 88 GET_VAR → stack[4] = scope[0][2]
// 90 GET_PROP_NAME stack[4] ← stack[4]["getContext"]
// 93 GET_VAR → stack[5] = scope[0][3]
// 95 GET_PROP_NAME stack[5] ← stack[5]["getContext"]
// 98 CALL func.apply(thisArg, [2 args]) → stack[2]
// 100 ADD stack[1] = stack[1] + stack[2]
// 101 PUSH_UNDEFINED → stack[2] = undefined
// 102 GET_VAR → stack[3] = scope[1][3]
// 105 GET_VAR → stack[4] = scope[0][2]
// 107 GET_PROP_NAME stack[4] ← stack[4]["getContext"]
// 110 CALL func.apply(thisArg, [1 args]) → stack[2]
// 112 ADD stack[1] = stack[1] + stack[2]
// 113 PUSH_UNDEFINED → stack[2] = undefined
// 114 GET_VAR → stack[3] = scope[1][3]
// 117 GET_VAR → stack[4] = scope[0][3]
// 119 GET_PROP_NAME stack[4] ← stack[4]["getContext"]
// 122 CALL func.apply(thisArg, [1 args]) → stack[2]
// 124 ADD stack[1] = stack[1] + stack[2]
// 125 PUSH_UNDEFINED → stack[2] = undefined
// 126 GET_VAR → stack[3] = scope[1][4]
// 129 GET_VAR → stack[4] = scope[0][5]
// 131 GET_PROP_NAME stack[4] ← stack[4]["getImageData"]
// 134 GET_VAR → stack[5] = scope[0][4]
// 136 GET_PROP_NAME stack[5] ← stack[5]["getImageData"]
// 139 CALL func.apply(thisArg, [2 args]) → stack[2]
// 141 ADD stack[1] = stack[1] + stack[2]
// 142 PUSH_UNDEFINED → stack[2] = undefined
// 143 GET_VAR → stack[3] = scope[1][3]
// 146 GET_VAR → stack[4] = scope[0][5]
// 148 GET_PROP_NAME stack[4] ← stack[4]["getImageData"]
// 151 CALL func.apply(thisArg, [1 args]) → stack[2]
// 153 ADD stack[1] = stack[1] + stack[2]
// 154 PUSH_UNDEFINED → stack[2] = undefined
// 155 GET_VAR → stack[3] = scope[1][3]
// 158 GET_VAR → stack[4] = scope[0][4]
// 160 GET_PROP_NAME stack[4] ← stack[4]["getImageData"]
// 163 CALL func.apply(thisArg, [1 args]) → stack[2]
// 165 ADD stack[1] = stack[1] + stack[2]
// 166 PUSH_UNDEFINED → stack[2] = undefined
// 167 GET_VAR → stack[3] = scope[1][4]
// 169 GET_GLOBAL → stack[4] = navigator
// 171 GET_PROP_NAME stack[4] ← stack[4]["toString"]
// 173 GET_GLOBAL → stack[5] = Navigator
// 175 GET_PROP_NAME stack[5] ← stack[5]["prototype"]
// 177 GET_PROP_NAME stack[5] ← stack[5]["toString"]
// 180 CALL func.apply(thisArg, [2 args]) → stack[2]
// 182 ADD stack[1] = stack[1] + stack[2]
// 183 PUSH_UNDEFINED → stack[2] = undefined
// 184 GET_VAR → stack[3] = scope[1][3]
// 186 GET_GLOBAL → stack[4] = navigator
// 188 GET_PROP_NAME stack[4] ← stack[4]["toString"]
// 191 CALL func.apply(thisArg, [1 args]) → stack[2]
// 193 ADD stack[1] = stack[1] + stack[2]
// 194 PUSH_UNDEFINED → stack[2] = undefined
// 195 GET_VAR → stack[3] = scope[1][3]
// 197 GET_GLOBAL → stack[4] = Navigator
// 199 GET_PROP_NAME stack[4] ← stack[4]["prototype"]
// 201 GET_PROP_NAME stack[4] ← stack[4]["toString"]
// 204 CALL func.apply(thisArg, [1 args]) → stack[2]
// 206 ADD stack[1] = stack[1] + stack[2]
// 207 PUSH_UNDEFINED → stack[2] = undefined
// 208 GET_VAR → stack[3] = scope[1][3]
// 210 GET_GLOBAL → stack[4] = document
// 212 GET_PROP_NAME stack[4] ← stack[4]["createElement"]
// 215 CALL func.apply(thisArg, [1 args]) → stack[2]
// 217 ADD stack[1] = stack[1] + stack[2]
// 218 PUSH_UNDEFINED → stack[2] = undefined
// 219 GET_VAR → stack[3] = scope[1][3]
// 221 GET_GLOBAL → stack[4] = document
// 223 GET_PROP_NAME stack[4] ← stack[4]["getElementById"]
// 226 CALL func.apply(thisArg, [1 args]) → stack[2]
// 228 ADD stack[1] = stack[1] + stack[2]
// 229 PUSH_UNDEFINED → stack[2] = undefined
// 230 GET_VAR → stack[3] = scope[1][3]
// 232 GET_GLOBAL → stack[4] = JSON
// 234 GET_PROP_NAME stack[4] ← stack[4]["stringify"]
// 237 CALL func.apply(thisArg, [1 args]) → stack[2]
// 239 ADD stack[1] = stack[1] + stack[2]
// 240 PUSH_UNDEFINED → stack[2] = undefined
// 241 GET_VAR → stack[3] = scope[1][3]
// 243 GET_GLOBAL → stack[4] = JSON
// 245 GET_PROP_NAME stack[4] ← stack[4]["parse"]
// 248 CALL func.apply(thisArg, [1 args]) → stack[2]
// 250 ADD stack[1] = stack[1] + stack[2]
// 251 PUSH_UNDEFINED → stack[2] = undefined
// 252 GET_VAR → stack[3] = scope[1][3]
// 254 GET_GLOBAL → stack[4] = window
// 256 GET_PROP_NAME stack[4] ← stack[4]["setInterval"]
// 259 CALL func.apply(thisArg, [1 args]) → stack[2]
// 261 ADD stack[1] = stack[1] + stack[2]
// 262 PUSH_UNDEFINED → stack[2] = undefined
// 263 GET_VAR → stack[3] = scope[1][3]
// 265 GET_GLOBAL → stack[4] = window
// 267 GET_PROP_NAME stack[4] ← stack[4]["eval"]
// 270 CALL func.apply(thisArg, [1 args]) → stack[2]
// 272 ADD stack[1] = stack[1] + stack[2]
// 273 PUSH_UNDEFINED → stack[2] = undefined
// 274 GET_VAR → stack[3] = scope[1][3]
// 276 GET_GLOBAL → stack[4] = window
// 278 GET_PROP_NAME stack[4] ← stack[4]["matchMedia"]
// 281 CALL func.apply(thisArg, [1 args]) → stack[2]
// 283 ADD stack[1] = stack[1] + stack[2]
// 284 PUSH_UNDEFINED → stack[2] = undefined
// 285 GET_VAR → stack[3] = scope[1][3]
// 287 GET_GLOBAL → stack[4] = Object
// 289 GET_PROP_NAME stack[4] ← stack[4]["getOwnPropertyNames"]
// 292 CALL func.apply(thisArg, [1 args]) → stack[2]
// 294 ADD stack[1] = stack[1] + stack[2]
// 295 PUSH_UNDEFINED → stack[2] = undefined
// 296 GET_VAR → stack[3] = scope[1][4]
// 298 GET_GLOBAL → stack[4] = Function
// 300 GET_PROP_NAME stack[4] ← stack[4]["toString"]
// 303 GET_VAR → stack[5] = scope[1][2]
// 306 CALL func.apply(thisArg, [2 args]) → stack[2]
// 308 ADD stack[1] = stack[1] + stack[2]
// 309 PUSH_UNDEFINED → stack[2] = undefined
// 310 GET_VAR → stack[3] = scope[1][3]
// 312 GET_GLOBAL → stack[4] = Function
// 314 GET_PROP_NAME stack[4] ← stack[4]["toString"]
// 317 CALL func.apply(thisArg, [1 args]) → stack[2]
// 319 ADD stack[1] = stack[1] + stack[2]
// 320 PUSH_UNDEFINED → stack[2] = undefined
// 321 GET_VAR → stack[3] = scope[1][3]
// 324 GET_VAR → stack[4] = scope[1][2]
// 327 CALL func.apply(thisArg, [1 args]) → stack[2]
// 329 ADD stack[1] = stack[1] + stack[2]
// 330 PUSH_UNDEFINED → stack[2] = undefined
// 331 GET_VAR → stack[3] = scope[1][3]
// 333 GET_GLOBAL → stack[4] = console
// 335 GET_PROP_NAME stack[4] ← stack[4]["debug"]
// 337 GET_PROP_NAME stack[4] ← stack[4]["toString"]
// 340 CALL func.apply(thisArg, [1 args]) → stack[2]
// 342 ADD stack[1] = stack[1] + stack[2]
// 343 PUSH_UNDEFINED → stack[2] = undefined
// 344 GET_VAR → stack[3] = scope[1][3]
// 346 GET_GLOBAL → stack[4] = console
// 348 GET_PROP_NAME stack[4] ← stack[4]["log"]
// 350 GET_PROP_NAME stack[4] ← stack[4]["toString"]
// 353 CALL func.apply(thisArg, [1 args]) → stack[2]
// 355 ADD stack[1] = stack[1] + stack[2]
// 355 DEFINE_PROP Object.defineProperty(stack[0], "data", stack[1])
// 358 RETURN stack[0]
