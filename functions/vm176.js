// 0 GET_GLOBAL → stack[0] = self
// 2 GET_PROP_NAME stack[0] ← stack[0]["frameElement"]
// 4 JUMP_IF_FALSE_OR_POP if (stack[0]) POP else JUMP_TO=13
// 6 GET_GLOBAL → stack[0] = self
// 8 GET_PROP_NAME stack[0] ← stack[0]["frameElement"]
// 10 GET_PROP_NAME stack[0] ← stack[0]["tagName"]
// 12 PUSH_STRING → stack[1] = "IFRAME"
// 15 STRICT_EQUAL stack[0] = stack[0] === stack[1]
// 15 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=21
// 18 NEW_OBJECT → stack[0] = {}
// 18 PUSH_CONST → stack[1] = 3
// 20 DEFINE_PROP Object.defineProperty(stack[0], "data", stack[1])
// 23 RETURN stack[0]
// 23 GET_GLOBAL → stack[0] = window
// 25 GET_PROP_NAME stack[0] ← stack[0]["location"]
// 27 GET_GLOBAL → stack[1] = window
// 29 GET_PROP_NAME stack[1] ← stack[1]["parent"]
// 31 GET_PROP_NAME stack[1] ← stack[1]["location"]
// 34 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 34 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=40
// 37 NEW_OBJECT → stack[0] = {}
// 37 PUSH_CONST → stack[1] = 4
// 39 DEFINE_PROP Object.defineProperty(stack[0], "data", stack[1])
// 42 RETURN stack[0]
// 42 GET_GLOBAL → stack[0] = window
// 44 GET_PROP_NAME stack[0] ← stack[0]["frames"]
// 46 GET_PROP_NAME stack[0] ← stack[0]["length"]
// 48 GET_GLOBAL → stack[1] = parent
// 50 GET_PROP_NAME stack[1] ← stack[1]["frames"]
// 52 GET_PROP_NAME stack[1] ← stack[1]["length"]
// 55 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 55 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=61
// 58 NEW_OBJECT → stack[0] = {}
// 58 PUSH_CONST → stack[1] = 5
// 60 DEFINE_PROP Object.defineProperty(stack[0], "data", stack[1])
// 63 RETURN stack[0]
// 63 GET_GLOBAL → stack[0] = window
// 65 GET_PROP_NAME stack[0] ← stack[0]["self"]
// 67 GET_GLOBAL → stack[1] = window
// 69 GET_PROP_NAME stack[1] ← stack[1]["top"]
// 72 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 72 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=78
// 75 NEW_OBJECT → stack[0] = {}
// 75 PUSH_CONST → stack[1] = 6
// 77 DEFINE_PROP Object.defineProperty(stack[0], "data", stack[1])
// 80 RETURN stack[0]
// 80 GET_GLOBAL → stack[0] = window
// 83 SET_VAR scope[0][2] ← stack[0]
// 85 PUSH_CONST → stack[0] = 0
// 88 SET_VAR scope[0][3] ← stack[0]
// 91 GET_VAR → stack[0] = scope[0][3]
// 93 PUSH_CONST → stack[1] = 15
// 96 LESS_THAN stack[0] = stack[0] < stack[1]
// 96 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=127
// 99 GET_VAR → stack[0] = scope[0][2]
// 101 GET_PROP_NAME stack[0] ← stack[0]["top"]
// 104 SET_VAR scope[0][2] ← stack[0]
// 106 GET_GLOBAL → stack[0] = window
// 108 GET_PROP_NAME stack[0] ← stack[0]["self"]
// 111 GET_VAR → stack[1] = scope[0][2]
// 114 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 114 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=120
// 117 NEW_OBJECT → stack[0] = {}
// 117 PUSH_CONST → stack[1] = 7
// 119 DEFINE_PROP Object.defineProperty(stack[0], "data", stack[1])
// 122 RETURN stack[0]
// 122 PUSH_SCOPE_REF → stack[0] = scope[0], stack[1] = 3
// 126 POST_INC stack[0] = stack[0][stack[1]]++ (old value)
// 127 POP stack[0]
// 127 JUMP → JUMP_TO=89
// 129 JUMP → JUMP_TO=151
// 132 SET_VAR scope[0][4] ← stack[-1]
// 135 NEW_OBJECT → stack[-1] = {}
// 135 PUSH_CONST → stack[0] = 8
// 137 DEFINE_PROP Object.defineProperty(stack[-1], "data", stack[0])
// 140 NEW_OBJECT → stack[0] = {}
// 141 GET_VAR → stack[1] = scope[0][4]
// 143 DEFINE_PROP Object.defineProperty(stack[0], "err", stack[1])
// 145 PUSH_STRING → stack[1] = "d_w_i"
// 147 DEFINE_PROP Object.defineProperty(stack[0], "type", stack[1])
// 149 DEFINE_PROP Object.defineProperty(stack[-1], "error", stack[0])
// 152 RETURN stack[-1]
// 153 NEW_OBJECT → stack[-1] = {}
// 153 PUSH_CONST → stack[0] = 2
// 155 DEFINE_PROP Object.defineProperty(stack[-1], "data", stack[0])
// 158 RETURN stack[-1]
