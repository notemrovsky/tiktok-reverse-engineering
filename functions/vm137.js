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
// 44 GET_VAR → stack[3] = scope[2][4]
// 46 GET_GLOBAL → stack[4] = Function
// 48 GET_PROP_NAME stack[4] ← stack[4]["prototype"]
// 51 CALL func.apply(thisArg, [1 args]) → stack[2]
// 53 ADD stack[1] = stack[1] + stack[2]
// 54 PUSH_UNDEFINED → stack[2] = undefined
// 55 GET_VAR → stack[3] = scope[2][4]
// 57 GET_GLOBAL → stack[4] = Function
// 59 GET_PROP_NAME stack[4] ← stack[4]["prototype"]
// 61 GET_PROP_NAME stack[4] ← stack[4]["toString"]
// 64 CALL func.apply(thisArg, [1 args]) → stack[2]
// 66 ADD stack[1] = stack[1] + stack[2]
// 67 PUSH_UNDEFINED → stack[2] = undefined
// 68 GET_VAR → stack[3] = scope[2][4]
// 70 GET_GLOBAL → stack[4] = Navigator
// 72 GET_PROP_NAME stack[4] ← stack[4]["prototype"]
// 74 GET_PROP_NAME stack[4] ← stack[4]["toString"]
// 77 CALL func.apply(thisArg, [1 args]) → stack[2]
// 79 ADD stack[1] = stack[1] + stack[2]
// 80 PUSH_UNDEFINED → stack[2] = undefined
// 81 GET_VAR → stack[3] = scope[2][4]
// 83 GET_GLOBAL → stack[4] = Object
// 85 GET_PROP_NAME stack[4] ← stack[4]["prototype"]
// 87 GET_PROP_NAME stack[4] ← stack[4]["toString"]
// 90 CALL func.apply(thisArg, [1 args]) → stack[2]
// 92 ADD stack[1] = stack[1] + stack[2]
// 93 PUSH_UNDEFINED → stack[2] = undefined
// 94 GET_VAR → stack[3] = scope[2][4]
// 96 GET_GLOBAL → stack[4] = JSON
// 98 GET_PROP_NAME stack[4] ← stack[4]["stringify"]
// 101 CALL func.apply(thisArg, [1 args]) → stack[2]
// 103 ADD stack[1] = stack[1] + stack[2]
// 104 PUSH_UNDEFINED → stack[2] = undefined
// 105 GET_VAR → stack[3] = scope[2][4]
// 108 GET_VAR → stack[4] = scope[0][3]
// 111 CALL func.apply(thisArg, [1 args]) → stack[2]
// 113 ADD stack[1] = stack[1] + stack[2]
// 114 PUSH_UNDEFINED → stack[2] = undefined
// 115 GET_VAR → stack[3] = scope[2][4]
// 118 GET_VAR → stack[4] = scope[0][3]
// 120 GET_PROP_NAME stack[4] ← stack[4]["getContext"]
// 123 CALL func.apply(thisArg, [1 args]) → stack[2]
// 125 ADD stack[1] = stack[1] + stack[2]
// 126 PUSH_UNDEFINED → stack[2] = undefined
// 127 GET_VAR → stack[3] = scope[2][4]
// 130 GET_VAR → stack[4] = scope[0][4]
// 133 CALL func.apply(thisArg, [1 args]) → stack[2]
// 135 ADD stack[1] = stack[1] + stack[2]
// 136 PUSH_UNDEFINED → stack[2] = undefined
// 137 GET_VAR → stack[3] = scope[2][4]
// 140 GET_VAR → stack[4] = scope[0][4]
// 142 GET_PROP_NAME stack[4] ← stack[4]["getContext"]
// 145 CALL func.apply(thisArg, [1 args]) → stack[2]
// 147 ADD stack[1] = stack[1] + stack[2]
// 148 PUSH_UNDEFINED → stack[2] = undefined
// 149 GET_VAR → stack[3] = scope[2][4]
// 152 GET_VAR → stack[4] = scope[0][5]
// 154 GET_PROP_NAME stack[4] ← stack[4]["getImageData"]
// 157 CALL func.apply(thisArg, [1 args]) → stack[2]
// 159 ADD stack[1] = stack[1] + stack[2]
// 160 PUSH_UNDEFINED → stack[2] = undefined
// 161 GET_VAR → stack[3] = scope[2][4]
// 164 GET_VAR → stack[4] = scope[0][4]
// 166 GET_PROP_NAME stack[4] ← stack[4]["getImageData"]
// 169 CALL func.apply(thisArg, [1 args]) → stack[2]
// 171 ADD stack[1] = stack[1] + stack[2]
// 172 PUSH_UNDEFINED → stack[2] = undefined
// 173 GET_VAR → stack[3] = scope[2][4]
// 175 GET_GLOBAL → stack[4] = window
// 177 GET_PROP_NAME stack[4] ← stack[4]["setInterval"]
// 180 CALL func.apply(thisArg, [1 args]) → stack[2]
// 182 ADD stack[1] = stack[1] + stack[2]
// 183 PUSH_UNDEFINED → stack[2] = undefined
// 184 GET_VAR → stack[3] = scope[2][4]
// 186 GET_GLOBAL → stack[4] = window
// 188 GET_PROP_NAME stack[4] ← stack[4]["setTimeout"]
// 191 CALL func.apply(thisArg, [1 args]) → stack[2]
// 193 ADD stack[1] = stack[1] + stack[2]
// 194 PUSH_UNDEFINED → stack[2] = undefined
// 195 GET_VAR → stack[3] = scope[2][4]
// 197 GET_GLOBAL → stack[4] = window
// 199 GET_PROP_NAME stack[4] ← stack[4]["localStorage"]
// 201 GET_PROP_NAME stack[4] ← stack[4]["getItem"]
// 204 CALL func.apply(thisArg, [1 args]) → stack[2]
// 206 ADD stack[1] = stack[1] + stack[2]
// 207 PUSH_UNDEFINED → stack[2] = undefined
// 208 GET_VAR → stack[3] = scope[2][4]
// 210 GET_GLOBAL → stack[4] = window
// 212 GET_PROP_NAME stack[4] ← stack[4]["localStorage"]
// 214 GET_PROP_NAME stack[4] ← stack[4]["setItem"]
// 217 CALL func.apply(thisArg, [1 args]) → stack[2]
// 219 ADD stack[1] = stack[1] + stack[2]
// 220 PUSH_UNDEFINED → stack[2] = undefined
// 221 GET_VAR → stack[3] = scope[2][4]
// 223 GET_GLOBAL → stack[4] = window
// 225 GET_PROP_NAME stack[4] ← stack[4]["sessionStorage"]
// 227 GET_PROP_NAME stack[4] ← stack[4]["getItem"]
// 230 CALL func.apply(thisArg, [1 args]) → stack[2]
// 232 ADD stack[1] = stack[1] + stack[2]
// 233 PUSH_UNDEFINED → stack[2] = undefined
// 234 GET_VAR → stack[3] = scope[2][4]
// 236 GET_GLOBAL → stack[4] = window
// 238 GET_PROP_NAME stack[4] ← stack[4]["sessionStorage"]
// 240 GET_PROP_NAME stack[4] ← stack[4]["setItem"]
// 243 CALL func.apply(thisArg, [1 args]) → stack[2]
// 245 ADD stack[1] = stack[1] + stack[2]
// 245 DEFINE_PROP Object.defineProperty(stack[0], "data", stack[1])
// 248 RETURN stack[0]
