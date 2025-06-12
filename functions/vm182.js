// 0 GET_GLOBAL → stack[0] = performance
// 2 GET_PROP_NAME stack[0] ← stack[0]["timing"]
// 5 SET_VAR scope[0][2] ← stack[0]
// 8 NEW_OBJECT → stack[0] = {}
// 8 PUSH_STRING → stack[1] = ""
// 11 GET_VAR → stack[2] = scope[0][2]
// 13 GET_PROP_NAME stack[2] ← stack[2]["connectEnd"]
// 16 ADD stack[1] = stack[1] + stack[2]
// 16 DEFINE_PROP Object.defineProperty(stack[0], "cE", stack[1])
// 18 PUSH_STRING → stack[1] = ""
// 21 GET_VAR → stack[2] = scope[0][2]
// 23 GET_PROP_NAME stack[2] ← stack[2]["connectStart"]
// 26 ADD stack[1] = stack[1] + stack[2]
// 26 DEFINE_PROP Object.defineProperty(stack[0], "cS", stack[1])
// 28 PUSH_STRING → stack[1] = ""
// 31 GET_VAR → stack[2] = scope[0][2]
// 33 GET_PROP_NAME stack[2] ← stack[2]["domComplete"]
// 36 ADD stack[1] = stack[1] + stack[2]
// 36 DEFINE_PROP Object.defineProperty(stack[0], "dC", stack[1])
// 38 PUSH_STRING → stack[1] = ""
// 41 GET_VAR → stack[2] = scope[0][2]
// 43 GET_PROP_NAME stack[2] ← stack[2]["domContentLoadedEventEnd"]
// 46 ADD stack[1] = stack[1] + stack[2]
// 46 DEFINE_PROP Object.defineProperty(stack[0], "dCEE", stack[1])
// 48 PUSH_STRING → stack[1] = ""
// 51 GET_VAR → stack[2] = scope[0][2]
// 53 GET_PROP_NAME stack[2] ← stack[2]["domContentLoadedEventStart"]
// 56 ADD stack[1] = stack[1] + stack[2]
// 56 DEFINE_PROP Object.defineProperty(stack[0], "dCES", stack[1])
// 58 PUSH_STRING → stack[1] = ""
// 61 GET_VAR → stack[2] = scope[0][2]
// 63 GET_PROP_NAME stack[2] ← stack[2]["domInteractive"]
// 66 ADD stack[1] = stack[1] + stack[2]
// 66 DEFINE_PROP Object.defineProperty(stack[0], "dI", stack[1])
// 68 PUSH_STRING → stack[1] = ""
// 71 GET_VAR → stack[2] = scope[0][2]
// 73 GET_PROP_NAME stack[2] ← stack[2]["domLoading"]
// 76 ADD stack[1] = stack[1] + stack[2]
// 76 DEFINE_PROP Object.defineProperty(stack[0], "dL", stack[1])
// 78 PUSH_STRING → stack[1] = ""
// 81 GET_VAR → stack[2] = scope[0][2]
// 83 GET_PROP_NAME stack[2] ← stack[2]["domainLookupEnd"]
// 86 ADD stack[1] = stack[1] + stack[2]
// 86 DEFINE_PROP Object.defineProperty(stack[0], "dLE", stack[1])
// 88 PUSH_STRING → stack[1] = ""
// 91 GET_VAR → stack[2] = scope[0][2]
// 93 GET_PROP_NAME stack[2] ← stack[2]["domainLookupStart"]
// 96 ADD stack[1] = stack[1] + stack[2]
// 96 DEFINE_PROP Object.defineProperty(stack[0], "dLS", stack[1])
// 98 PUSH_STRING → stack[1] = ""
// 101 GET_VAR → stack[2] = scope[0][2]
// 103 GET_PROP_NAME stack[2] ← stack[2]["fetchStart"]
// 106 ADD stack[1] = stack[1] + stack[2]
// 106 DEFINE_PROP Object.defineProperty(stack[0], "fS", stack[1])
// 108 PUSH_STRING → stack[1] = ""
// 111 GET_VAR → stack[2] = scope[0][2]
// 113 GET_PROP_NAME stack[2] ← stack[2]["loadEventEnd"]
// 116 ADD stack[1] = stack[1] + stack[2]
// 116 DEFINE_PROP Object.defineProperty(stack[0], "lEE", stack[1])
// 118 PUSH_STRING → stack[1] = ""
// 121 GET_VAR → stack[2] = scope[0][2]
// 123 GET_PROP_NAME stack[2] ← stack[2]["loadEventStart"]
// 126 ADD stack[1] = stack[1] + stack[2]
// 126 DEFINE_PROP Object.defineProperty(stack[0], "lES", stack[1])
// 128 PUSH_STRING → stack[1] = ""
// 131 GET_VAR → stack[2] = scope[0][2]
// 133 GET_PROP_NAME stack[2] ← stack[2]["navigationStart"]
// 136 ADD stack[1] = stack[1] + stack[2]
// 136 DEFINE_PROP Object.defineProperty(stack[0], "nS", stack[1])
// 138 PUSH_STRING → stack[1] = ""
// 141 GET_VAR → stack[2] = scope[0][2]
// 143 GET_PROP_NAME stack[2] ← stack[2]["redirectEnd"]
// 146 ADD stack[1] = stack[1] + stack[2]
// 146 DEFINE_PROP Object.defineProperty(stack[0], "rE", stack[1])
// 148 PUSH_STRING → stack[1] = ""
// 151 GET_VAR → stack[2] = scope[0][2]
// 153 GET_PROP_NAME stack[2] ← stack[2]["redirectStart"]
// 156 ADD stack[1] = stack[1] + stack[2]
// 156 DEFINE_PROP Object.defineProperty(stack[0], "rS", stack[1])
// 158 PUSH_STRING → stack[1] = ""
// 161 GET_VAR → stack[2] = scope[0][2]
// 163 GET_PROP_NAME stack[2] ← stack[2]["requestStart"]
// 166 ADD stack[1] = stack[1] + stack[2]
// 166 DEFINE_PROP Object.defineProperty(stack[0], "reqS", stack[1])
// 168 PUSH_STRING → stack[1] = ""
// 171 GET_VAR → stack[2] = scope[0][2]
// 173 GET_PROP_NAME stack[2] ← stack[2]["responseEnd"]
// 176 ADD stack[1] = stack[1] + stack[2]
// 176 DEFINE_PROP Object.defineProperty(stack[0], "resE", stack[1])
// 178 PUSH_STRING → stack[1] = ""
// 181 GET_VAR → stack[2] = scope[0][2]
// 183 GET_PROP_NAME stack[2] ← stack[2]["responseStart"]
// 186 ADD stack[1] = stack[1] + stack[2]
// 186 DEFINE_PROP Object.defineProperty(stack[0], "resS", stack[1])
// 188 PUSH_STRING → stack[1] = ""
// 191 GET_VAR → stack[2] = scope[0][2]
// 193 GET_PROP_NAME stack[2] ← stack[2]["secureConnectionStart"]
// 196 ADD stack[1] = stack[1] + stack[2]
// 196 DEFINE_PROP Object.defineProperty(stack[0], "sCS", stack[1])
// 198 PUSH_STRING → stack[1] = ""
// 201 GET_VAR → stack[2] = scope[0][2]
// 203 GET_PROP_NAME stack[2] ← stack[2]["unloadEventEnd"]
// 206 ADD stack[1] = stack[1] + stack[2]
// 206 DEFINE_PROP Object.defineProperty(stack[0], "uEE", stack[1])
// 208 PUSH_STRING → stack[1] = ""
// 211 GET_VAR → stack[2] = scope[0][2]
// 213 GET_PROP_NAME stack[2] ← stack[2]["unloadEventStart"]
// 216 ADD stack[1] = stack[1] + stack[2]
// 216 DEFINE_PROP Object.defineProperty(stack[0], "uES", stack[1])
// 219 SET_VAR scope[0][3] ← stack[0]
// 222 NEW_OBJECT → stack[0] = {}
// 223 GET_VAR → stack[1] = scope[0][3]
// 225 DEFINE_PROP Object.defineProperty(stack[0], "data", stack[1])
// 228 RETURN stack[0]
