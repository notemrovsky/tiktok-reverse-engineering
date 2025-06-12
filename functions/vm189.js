// 1 NEW_OBJECT → stack[0] = {}
// 2 PUSH_UNDEFINED → stack[1] = undefined
// 2 GET_GLOBAL → stack[2] = parseInt
// 4 PUSH_MAGIC_NUMBER → stack[3] = 18446744073709550000
// 6 PUSH_CONST → stack[4] = 16
// 9 CALL func.apply(thisArg, [2 args]) → stack[1]
// 10 DEFINE_PROP Object.defineProperty(stack[0], "data", stack[1])
// 13 RETURN stack[0]
