// 0 TYPEOF_GLOBAL → stack[0] = typeof global["Promise"]
// 2 PUSH_STRING → stack[1] = "function"
// 5 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 5 JUMP_IF_FALSE if (!stack[0]) JUMP_TO=8
// 7 PUSH_STRING → stack[0] = ""
// 10 RETURN stack[0]
// 10 GET_GLOBAL → stack[0] = Promise
// 12 PUSH_FUNCTION → stack[1] = function[36]
// 15 FUNCTION_BIND_APPLY → stack[0] = new stack[1](1 args)
// 17 RETURN stack[0]
