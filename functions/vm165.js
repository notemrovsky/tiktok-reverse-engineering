// 0 PUSH_STRING → stack[0] = "XDomainRequest"
// 2 PUSH_STRING → stack[1] = "createPopup"
// 4 PUSH_STRING → stack[2] = "removeEventListener"
// 6 PUSH_STRING → stack[3] = "globalStorage"
// 8 PUSH_STRING → stack[4] = "openDatabase"
// 10 PUSH_STRING → stack[5] = "indexedDB"
// 12 PUSH_STRING → stack[6] = "attachEvent"
// 14 PUSH_STRING → stack[7] = "ActiveXObject"
// 16 PUSH_STRING → stack[8] = "dispatchEvent"
// 18 PUSH_STRING → stack[9] = "addBehavior"
// 20 PUSH_STRING → stack[10] = "addEventListener"
// 22 PUSH_STRING → stack[11] = "detachEvent"
// 24 PUSH_STRING → stack[12] = "fireEvent"
// 26 PUSH_STRING → stack[13] = "MutationObserver"
// 28 PUSH_STRING → stack[14] = "HTMLMenuItemElement"
// 30 PUSH_STRING → stack[15] = "Int8Array"
// 32 PUSH_STRING → stack[16] = "postMessage"
// 34 PUSH_STRING → stack[17] = "querySelector"
// 37 NEW_ARRAY → stack[0] = [...top 18 elements]
// 39 SET_VAR scope[0][3] ← stack[0]
// 42 PUSH_UNDEFINED → stack[0] = undefined
// 43 GET_VAR → stack[1] = scope[2][2]
// 45 GET_GLOBAL → stack[2] = window
// 48 GET_VAR → stack[3] = scope[0][3]
// 50 PUSH_CONST → stack[4] = 0
// 53 CALL func.apply(thisArg, [3 args]) → stack[0]
// 55 SET_VAR scope[0][2] ← stack[0]
// 58 GET_VAR → stack[0] = scope[0][2]
// 61 PUSH_UNDEFINED → stack[1] = undefined
// 62 GET_VAR → stack[2] = scope[2][2]
// 64 GET_GLOBAL → stack[3] = window
// 66 GET_PROP_NAME stack[3] ← stack[3]["performance"]
// 68 PUSH_STRING → stack[4] = "now"
// 71 NEW_ARRAY → stack[4] = [...top 1 elements]
// 73 GET_VAR → stack[5] = scope[0][3]
// 75 GET_PROP_NAME stack[5] ← stack[5]["length"]
// 78 CALL func.apply(thisArg, [3 args]) → stack[1]
// 80 BITWISE_OR stack[0] = stack[0] | stack[1]
// 80 PUSH_SCOPE_REF → stack[1] = scope[0], stack[2] = 2
// 84 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 85 POP stack[0]
// 86 NEW_OBJECT → stack[0] = {}
// 87 GET_VAR → stack[1] = scope[0][2]
// 89 DEFINE_PROP Object.defineProperty(stack[0], "data", stack[1])
// 92 RETURN stack[0]
