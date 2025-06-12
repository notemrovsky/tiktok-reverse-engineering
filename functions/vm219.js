// 0 TYPEOF_GLOBAL → stack[0] = typeof global["InstallTrigger"]
// 2 PUSH_STRING → stack[1] = "undefined"
// 5 STRICT_NOT_EQUAL stack[0] = stack[0] !== stack[1]
// 6 RETURN stack[0]
