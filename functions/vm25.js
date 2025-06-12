// 1 NEW_ARRAY → stack[0] = [...top 0 elements]
// 3 SET_VAR scope[0][2] ← stack[0]
// 6 GET_VAR → stack[0] = scope[1][2]
// 8 GET_PROP_NAME stack[0] ← stack[0]["wID"]
// 10 PUSH_STRING → stack[1] = ""
// 12 SET_GLOBAL_PROP stack[1]["permState"] ← stack[0]
// 14 GET_GLOBAL → stack[0] = navigator
// 16 GET_PROP_NAME stack[0] ← stack[0]["permissions"]
// 19 NOT stack[0] = !stack[0]
// 19 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=30
// 21 PUSH_STRING → stack[0] = "6"
// 24 GET_VAR → stack[1] = scope[1][2]
// 26 GET_PROP_NAME stack[1] ← stack[1]["wID"]
// 28 PUSH_STRING → stack[2] = "nap"
// 31 SET_PROP_NO_POP stack[1][stack[2]] = stack[0] (keep value)
// 32 RETURN stack[0]
// 32 PUSH_STRING → stack[0] = "geolocation"
// 34 PUSH_STRING → stack[1] = "notifications"
// 36 PUSH_STRING → stack[2] = "push"
// 38 PUSH_STRING → stack[3] = "midi"
// 40 PUSH_STRING → stack[4] = "camera"
// 42 PUSH_STRING → stack[5] = "microphone"
// 44 PUSH_STRING → stack[6] = "speaker"
// 46 PUSH_STRING → stack[7] = "device-info"
// 48 PUSH_STRING → stack[8] = "background-sync"
// 50 PUSH_STRING → stack[9] = "bluetooth"
// 52 PUSH_STRING → stack[10] = "persistent-storage"
// 54 PUSH_STRING → stack[11] = "ambient-light-sensor"
// 56 PUSH_STRING → stack[12] = "accelerometer"
// 58 PUSH_STRING → stack[13] = "gyroscope"
// 60 PUSH_STRING → stack[14] = "magnetometer"
// 62 PUSH_STRING → stack[15] = "clipboard"
// 64 PUSH_STRING → stack[16] = "accessibility-events"
// 66 PUSH_STRING → stack[17] = "clipboard-read"
// 68 PUSH_STRING → stack[18] = "clipboard-write"
// 70 PUSH_STRING → stack[19] = "payment-handler"
// 73 NEW_ARRAY → stack[0] = [...top 20 elements]
// 75 SET_VAR scope[0][3] ← stack[0]
// 77 PUSH_FUNCTION → stack[0] = function[26]
// 80 DUP → stack[1] = stack[0]
// 81 SET_VAR scope[0][6] ← stack[1]
// 84 SET_VAR scope[0][4] ← stack[0]
// 87 GET_VAR → stack[0] = scope[0][3]
// 90 DUP → stack[1] = stack[0]
// 90 GET_PROP_NAME stack[1] ← stack[1]["map"]
// 92 PUSH_FUNCTION → stack[2] = function[29]
// 95 CALL func.apply(thisArg, [1 args]) → stack[0]
// 97 SET_VAR scope[0][5] ← stack[0]
// 99 GET_GLOBAL → stack[0] = Promise
// 102 DUP → stack[1] = stack[0]
// 102 GET_PROP_NAME stack[1] ← stack[1]["all"]
// 105 GET_VAR → stack[2] = scope[0][5]
// 108 CALL func.apply(thisArg, [1 args]) → stack[0]
// 110 DUP → stack[1] = stack[0]
// 110 GET_PROP_NAME stack[1] ← stack[1]["then"]
// 112 PUSH_FUNCTION → stack[2] = function[30]
// 115 CALL func.apply(thisArg, [1 args]) → stack[0]
// 117 POP stack[0]
// 117 JUMP → JUMP_TO=132
// 120 SET_VAR scope[0][7] ← stack[-1]
// 122 PUSH_STRING → stack[-1] = "7"
// 125 GET_VAR → stack[0] = scope[1][2]
// 127 GET_PROP_NAME stack[0] ← stack[0]["wID"]
// 129 PUSH_STRING → stack[1] = "nap"
// 132 SET_PROP_NO_POP stack[0][stack[1]] = stack[-1] (keep value)
// 133 RETURN stack[-1]
// 134 PUSH_UNDEFINED → stack[-1] = undefined
// 135 RETURN stack[-1]
