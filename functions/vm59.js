// 0 GET_GLOBAL → stack[0] = window
// 2 GET_PROP_NAME stack[0] ← stack[0]["_mssdk"]
// 4 GET_PROP_NAME stack[0] ← stack[0]["umode"]
// 6 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=13
// 8 GET_GLOBAL → stack[0] = window
// 10 GET_PROP_NAME stack[0] ← stack[0]["_mssdk"]
// 12 GET_PROP_NAME stack[0] ← stack[0]["umode"]
// 15 RETURN stack[0]
// 15 PUSH_CONST → stack[0] = 517
// 18 RETURN stack[0]
