// 0 PUSH_STRING → stack[0] = "appCodeName"
// 2 PUSH_STRING → stack[1] = "appName"
// 4 PUSH_STRING → stack[2] = "platform"
// 6 PUSH_STRING → stack[3] = "product"
// 8 PUSH_STRING → stack[4] = "productSub"
// 10 PUSH_STRING → stack[5] = "hardwareConcurrency"
// 12 PUSH_STRING → stack[6] = "cpuClass"
// 14 PUSH_STRING → stack[7] = "maxTouchPoints"
// 16 PUSH_STRING → stack[8] = "oscpu"
// 18 PUSH_STRING → stack[9] = "vendor"
// 20 PUSH_STRING → stack[10] = "vendorSub"
// 22 PUSH_STRING → stack[11] = "doNotTrack"
// 24 PUSH_STRING → stack[12] = "vibrate"
// 26 PUSH_STRING → stack[13] = "credentials"
// 28 PUSH_STRING → stack[14] = "storage"
// 30 PUSH_STRING → stack[15] = "requestMediaKeySystemAccess"
// 32 PUSH_STRING → stack[16] = "bluetooth"
// 35 NEW_ARRAY → stack[0] = [...top 17 elements]
// 37 SET_VAR scope[0][2] ← stack[0]
// 40 PUSH_UNDEFINED → stack[0] = undefined
// 41 GET_VAR → stack[1] = scope[1][2]
// 43 GET_GLOBAL → stack[2] = navigator
// 46 GET_VAR → stack[3] = scope[0][2]
// 49 CALL func.apply(thisArg, [2 args]) → stack[0]
// 51 RETURN stack[0]
