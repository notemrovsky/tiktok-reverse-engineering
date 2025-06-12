// 0 PUSH_STRING → stack[0] = "Image"
// 2 PUSH_STRING → stack[1] = "innerHeight"
// 4 PUSH_STRING → stack[2] = "innerWidth"
// 6 PUSH_STRING → stack[3] = "screenX"
// 8 PUSH_STRING → stack[4] = "screenY"
// 10 PUSH_STRING → stack[5] = "isSecureContext"
// 12 PUSH_STRING → stack[6] = "devicePixelRatio"
// 14 PUSH_STRING → stack[7] = "toolbar"
// 16 PUSH_STRING → stack[8] = "locationbar"
// 18 PUSH_STRING → stack[9] = "ActiveXObject"
// 20 PUSH_STRING → stack[10] = "external"
// 22 PUSH_STRING → stack[11] = "mozRTCPeerConnection"
// 24 PUSH_STRING → stack[12] = "postMessage"
// 26 PUSH_STRING → stack[13] = "webkitRequestAnimationFrame"
// 28 PUSH_STRING → stack[14] = "BluetoothUUID"
// 30 PUSH_STRING → stack[15] = "netscape"
// 33 NEW_ARRAY → stack[0] = [...top 16 elements]
// 35 SET_VAR scope[0][2] ← stack[0]
// 38 PUSH_UNDEFINED → stack[0] = undefined
// 39 GET_VAR → stack[1] = scope[1][2]
// 41 GET_GLOBAL → stack[2] = window
// 44 GET_VAR → stack[3] = scope[0][2]
// 47 CALL func.apply(thisArg, [2 args]) → stack[0]
// 49 RETURN stack[0]
