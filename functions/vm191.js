// 0 GET_GLOBAL → stack[0] = document
// 3 DUP → stack[1] = stack[0]
// 3 GET_PROP_NAME stack[1] ← stack[1]["createElement"]
// 5 PUSH_STRING → stack[2] = "audio"
// 8 CALL func.apply(thisArg, [1 args]) → stack[0]
// 10 SET_VAR scope[0][2] ← stack[0]
// 12 PUSH_STRING → stack[0] = "aac"
// 14 PUSH_STRING → stack[1] = "aac; codecs="aac""
// 16 PUSH_STRING → stack[2] = "flac"
// 18 PUSH_STRING → stack[3] = "flac; codecs="flac""
// 20 PUSH_STRING → stack[4] = "mp4"
// 22 PUSH_STRING → stack[5] = "mp4; codecs="mp4a.40""
// 24 PUSH_STRING → stack[6] = "mp4; codecs="mp4a.40.2""
// 26 PUSH_STRING → stack[7] = "mp4; codecs="mp4a.40.4""
// 28 PUSH_STRING → stack[8] = "mp4; codecs="mp4a.40.5""
// 30 PUSH_STRING → stack[9] = "mp4; codecs="mp4a.40.29""
// 32 PUSH_STRING → stack[10] = "mp4; codecs="mp4a.6B""
// 34 PUSH_STRING → stack[11] = "mp4; codecs="Opus""
// 36 PUSH_STRING → stack[12] = "mp4; codecs="flac""
// 38 PUSH_STRING → stack[13] = "mpeg"
// 40 PUSH_STRING → stack[14] = "mpeg; codecs="mp3""
// 42 PUSH_STRING → stack[15] = "ogg"
// 44 PUSH_STRING → stack[16] = "ogg; codecs="vorbis""
// 46 PUSH_STRING → stack[17] = "opus"
// 48 PUSH_STRING → stack[18] = "opus; codecs="opus""
// 50 PUSH_STRING → stack[19] = "wave; codecs="0""
// 52 PUSH_STRING → stack[20] = "wave; codecs="1""
// 54 PUSH_STRING → stack[21] = "wav"
// 56 PUSH_STRING → stack[22] = "wav; codecs="1""
// 58 PUSH_STRING → stack[23] = "webm"
// 60 PUSH_STRING → stack[24] = "webm; codecs="vorbis""
// 62 PUSH_STRING → stack[25] = "webm; codecs="opus""
// 64 PUSH_STRING → stack[26] = "3gpp"
// 66 PUSH_STRING → stack[27] = "3gpp; codecs="amr""
// 68 PUSH_STRING → stack[28] = "3gpp2"
// 70 PUSH_STRING → stack[29] = "3gpp2; codecs="amr-wb""
// 72 PUSH_STRING → stack[30] = "ac3"
// 74 PUSH_STRING → stack[31] = "ac3; codecs="ac-3""
// 76 PUSH_STRING → stack[32] = "amr"
// 78 PUSH_STRING → stack[33] = "amr; codecs="amr-nb""
// 80 PUSH_STRING → stack[34] = "aiff"
// 82 PUSH_STRING → stack[35] = "aiff; codecs="pcm""
// 84 PUSH_STRING → stack[36] = "basic"
// 86 PUSH_STRING → stack[37] = "basic; codecs="1""
// 88 PUSH_STRING → stack[38] = "midi"
// 90 PUSH_STRING → stack[39] = "midi; codecs="midi""
// 92 PUSH_STRING → stack[40] = "mod"
// 94 PUSH_STRING → stack[41] = "mod; codecs="mod""
// 96 PUSH_STRING → stack[42] = "mp2"
// 98 PUSH_STRING → stack[43] = "mp2; codecs="mp2""
// 100 PUSH_STRING → stack[44] = "x-aiff"
// 102 PUSH_STRING → stack[45] = "x-aiff; codecs="pcm""
// 104 PUSH_STRING → stack[46] = "x-flac"
// 106 PUSH_STRING → stack[47] = "x-flac; codecs="flac""
// 108 PUSH_STRING → stack[48] = "x-wav"
// 110 PUSH_STRING → stack[49] = "x-wav; codecs="1""
// 112 PUSH_STRING → stack[50] = "x-ms-wma"
// 114 PUSH_STRING → stack[51] = "x-ms-wma; codecs="wma""
// 116 PUSH_STRING → stack[52] = "x-pn-wav; codecs="2""
// 119 NEW_ARRAY → stack[0] = [...top 53 elements]
// 121 SET_VAR scope[0][3] ← stack[0]
// 123 PUSH_STRING → stack[0] = ""
// 126 SET_VAR scope[0][4] ← stack[0]
// 129 GET_VAR → stack[0] = scope[0][3]
// 132 DUP → stack[1] = stack[0]
// 132 GET_PROP_NAME stack[1] ← stack[1]["forEach"]
// 134 PUSH_FUNCTION → stack[2] = function[192]
// 137 CALL func.apply(thisArg, [1 args]) → stack[0]
// 139 POP stack[0]
// 139 PUSH_STRING → stack[0] = ""
// 142 PUSH_UNDEFINED → stack[1] = undefined
// 143 GET_VAR → stack[2] = scope[2][2]
// 146 GET_VAR → stack[3] = scope[0][4]
// 149 CALL func.apply(thisArg, [1 args]) → stack[1]
// 151 ADD stack[0] = stack[0] + stack[1]
// 152 SET_VAR scope[1][2] ← stack[0]
// 155 NEW_OBJECT → stack[0] = {}
// 156 GET_VAR → stack[1] = scope[1][2]
// 158 DEFINE_PROP Object.defineProperty(stack[0], "data", stack[1])
// 161 RETURN stack[0]
