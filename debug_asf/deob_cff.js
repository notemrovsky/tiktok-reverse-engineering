function h() {
  while (true) {
    var opcode = o[c++];
    
    switch (opcode) {
      case 0: //SUB
        var t = v[l--];
        v[l] -= t;
        break;
        
      case 1: //JUMP_IF_FALSE
        var offset = o[c++];
        if (!v[l--]) {
          c += offset;
        }
        break;
        
      case 2: //CALL
        var argCount = o[c++];
        l -= argCount;
        var args = v.slice(l + 1, l + argCount + 1);
        var func = v[l--];
        var thisArg = v[l--];
        if (typeof func != "function") {
          f = 3;
          d = new TypeError(typeof func + " is not a function");
          return;
        }
        var w = C.get(func);
        if (w) {
          g.push([o, i, u, a, s, c, f, d]);
          Ag[1](w[0], thisArg, args, w[1]);
        } else {
          var result = func.apply(thisArg, args);
          v[++l] = result;
        }
        break;
        
      case 3: //JUMP
        var offset = o[c++];
        c += offset;
        break;
        
      case 4: //TO_NUMBER
        v[l] = +v[l];
        break;
        
      case 5: //STRICT_EQUAL
        var right = v[l--];
        v[l] = v[l] === right;
        break;
        
      case 6: //PUSH_CONST
        v[++l] = o[c++];
        break;
        
      case 7: //LOOKUP
        var t = yg[63](o[c++], a);
        v[++l] = t;
        break;
        
      case 8: //UNSIGNED_RIGHT_SHIFT
        var right = v[l--];
        v[l] = v[l] >>> right;
        break;
        
      case 9: //POP
        --l;
        break;
        
      case 10: //FOR_IN_SETUP
        var index = o[c++];
        var obj = v[l--];
        var keys = [];
        for (var key in obj) {
          keys.push(key);
        }
        a[index] = [keys, obj];
        break;
        
      case 11: //LEFT_SHIFT
        var right = v[l--];
        v[l] = v[l] << right;
        break;
        
      case 12: //XOR
        var right = v[l--];
        v[l] = v[l] ^ right;
        break;
        
      case 13: //NEGATE
        v[l] = -v[l];
        break;
        
      case 14: //TYPEOF
        v[l] = typeof v[l];
        break;
        
      case 15: //FOR_IN_NEXT
        var index = o[c++];
        var prop = v[l--];
        var target = v[l--];
        var enumData = a[index];
        var nextKey = undefined;
        do {
          nextKey = enumData[0].shift();
        } while (nextKey !== undefined && !(nextKey in enumData[1]));
        if (nextKey !== undefined) {
          target[prop] = nextKey;
          v[++l] = true;
        } else {
          v[++l] = false;
        }
        break;
        
      case 16: //SET_PROP
        var value = v[l--];
        var prop = v[l--];
        var obj = v[l--];
        obj[prop] = value;
        break;
        
      case 17: //DELETE_PROP
        var prop = v[l--];
        var obj = v[l--];
        var result = delete obj[prop];
        v[++l] = result;
        break;
        
      case 18: //POST_DEC
        var prop = v[l--];
        var obj = v[l--];
        var result = obj[prop]--;
        v[++l] = result;
        break;
        
      case 19: //TRY
        var offset = o[c++];
        f = 1;
        d = c + offset;
        return;
        
      case 20: //JUMP_IF_TRUE_OR_POP
        var offset = o[c++];
        if (v[l]) {
          --l;
        } else {
          c += offset;
        }
        break;
        
      case 21: //PUSH_SCOPE
        v[++l] = s;
        break;
        
      case 22: //MUL
        var right = v[l--];
        v[l] *= right;
        break;
        
      case 23: //PUSH_FALSE
        v[++l] = false;
        break;
        
      case 24: //LESS_THAN
        var right = v[l--];
        v[l] = v[l] < right;
        break;
        
      case 25: //CHECK_ERROR
        if (f !== 0) {
          return;
        }
        break;
        
      case 26: //JUMP_IF_TRUE_OR_POP
        var offset = o[c++];
        if (v[l]) {
          c += offset;
        } else {
          --l;
        }
        break;
        
      case 27: //GREATER_EQUAL
        var right = v[l--];
        v[l] = v[l] >= right;
        break;
        
      case 28: //POST_INC
        var prop = v[l--];
        var obj = v[l--];
        var result = obj[prop]++;
        v[++l] = result;
        break;
        
      case 29: //SWITCH_CASE
        var offset = o[c++];
        var switchValue = v[l--];
        if (v[l] === switchValue) {
          --l;
          c += offset;
        }
        break;
        
      case 30: //GET_GLOBAL
        var index = o[c++];
        var name = j[index];
        if (!(name in globalThis)) {
          f = 3;
          d = new ReferenceError(name + " is not defined");
          return;
        }
        var result = globalThis[name];
        v[++l] = result;
        break;
        
      case 31: //JUMP_IF_TRUE
        var offset = o[c++];
        if (v[l--]) {
          c += offset;
        }
        break;
        
      case 32: //SET_GLOBAL_PROP
        var index = o[c++];
        var value = v[l--];
        var obj = v[l--];
        obj[j[index]] = value;
        break;
        
      case 33: //EQUAL
        var right = v[l--];
        v[l] = v[l] == right;
        break;
        
      case 34: //BITWISE_OR
        var right = v[l--];
        v[l] = v[l] | right;
        break;
        
      case 35: //GET_PROP_NAME
        var index = o[c++];
        v[l] = v[l][j[index]];
        break;
        
      case 36: //DEFINE_PROP
        var index = o[c++];
        var value = v[l--];
        Object.defineProperty(v[l], j[index], {
          value: value,
          writable: true,
          configurable: true,
          enumerable: true
        });
        break;
        
      case 37: //PUSH_STRING
        var index = o[c++];
        v[++l] = j[index];
        break;
        
      case 38: //NOT
        v[l] = !v[l];
        break;
        
      case 39: //PUSH_UNDEFINED
        v[++l] = undefined;
        break;
        
      case 40: //PUSH_NULL
        v[++l] = null;
        break;
        
      case 41: //ADD
        var right = v[l--];
        v[l] += right;
        break;
        
      case 42: //PRE_DEC
        var prop = v[l--];
        var obj = v[l--];
        var result = --obj[prop];
        v[++l] = result;
        break;
        
      case 43: //IN
        var obj = v[l--];
        v[l] = v[l] in obj;
        break;
        
      case 44: //INSTANCEOF
        var constructor = v[l--];
        v[l] = v[l] instanceof constructor;
        break;
        
      case 45: //PRE_INC
        var prop = v[l--];
        var obj = v[l--];
        var result = ++obj[prop];
        v[++l] = result;
        break;
        
      case 46: //DEFINE_GETTER
        var index = o[c++];
        var getter = v[l--];
        Object.defineProperty(v[l], j[index], {
          get: getter,
          enumerable: true,
          configurable: true
        });
        break;
        
      case 47: //SET_VAR
        var depth = o[c++];
        var index = o[c++];
        var scope = a;
        while (depth > 0) {
          scope = scope[0];
          --depth;
        }
        scope[index] = v[l--];
        break;
        
      case 48: //THROW
        f = 3;
        d = v[l--];
        return;
        
      case 49: //NEW_OBJECT
        v[++l] = {};
        break;
        
      case 50: //NOT_EQUAL
        var right = v[l--];
        v[l] = v[l] != right;
        break;
        
      case 51: //NEW_ARRAY
        var length = o[c++];
        v[l = l - length + 1] = v.slice(l, l + length);
        break;
        
      case 52: //DUP
        var value = v[l];
        v[++l] = value;
        break;
        
      case 53: //SET_UNDEFINED
        v[l] = undefined;
        break;
        
      case 54: //STRICT_NOT_EQUAL
        var right = v[l--];
        v[l] = v[l] !== right;
        break;
        
      case 55: //PUSH_SCOPE_REF
        var depth = o[c++];
        var index = o[c++];
        var scope = a;
        while (depth > 0) {
          scope = scope[0];
          --depth;
        }
        v[++l] = scope;
        v[++l] = index;
        break;
        
      case 56: //PUSH_NAN
        v[++l] = NaN;
        break;
        
      case 57: //PUSH_NUMBER
        var index = o[c++];
        v[++l] = +j[index];
        break;
        
      case 58: //RETURN
        f = 2;
        d = v[l--];
        return;
        
      case 59: //IMPORT
        var index = o[c++];
        var name = j[index];
        var result = Ag[2](name, i);
        v[++l] = result;
        v[++l] = name;
        break;
        
      case 60: //MOD
        var right = v[l--];
        v[l] %= right;
        break;
        
      case 61: //PUSH_TRUE
        v[++l] = true;
        break;
        
      case 62: //TYPEOF_GLOBAL
        var index = o[c++];
        var name = j[index];
        var result = typeof globalThis[name];
        v[++l] = result;
        break;
        
      case 63: //BITWISE_AND
        var right = v[l--];
        v[l] = v[l] & right;
        break;
        
      case 64: //GREATER_THAN
        var right = v[l--];
        v[l] = v[l] > right;
        break;
        
      case 65: //GET_PROP
        var prop = v[l--];
        v[l] = v[l][prop];
        break;
        
      case 66: //GET_VAR
        var depth = o[c++];
        var index = o[c++];
        var scope = a;
        while (depth > 0) {
          scope = scope[0];
          --depth;
        }
        var result = scope[index];
        v[++l] = result;
        break;
        
      case 67: //DIV
        var right = v[l--];
        v[l] /= right;
        break;
        
      case 68: //BITWISE_NOT
        v[l] = ~v[l];
        break;
        
      case 69: //SET_GLOBAL
        var index = o[c++];
        var value = v[l--];
        var name = j[index];
        if (i && !(name in globalThis)) {
          f = 3;
          d = new ReferenceError(name + " is not defined");
          return;
        }
        globalThis[name] = value;
        break;
        
      case 70: //PUSH_INFINITY
        v[++l] = Infinity;
        break;
        
      case 71: //SET_PROP_NO_POP
        var prop = v[l--];
        var obj = v[l--];
        obj[prop] = v[l];
        break;
        
      case 72: //RIGHT_SHIFT
        var right = v[l--];
        v[l] = v[l] >> right;
        break;
        
      case 73: //DECLARE_GLOBAL
        var index = o[c++];
        var name = j[index];
        if (!(name in globalThis)) {
          globalThis[name] = undefined;
        }
        break;
        
      case 74: //LESS_EQUAL
        var right = v[l--];
        v[l] = v[l] <= right;
        break;
        
      case 75: //NEW
        var argCount = o[c++];
        var args = [undefined];
        while (argCount > 0) {
          args[argCount--] = v[l--];
        }
        var constructor = v[l--];
        var instance = new (Function.bind.apply(constructor, args))();
        v[++l] = instance;
        break;
        
      case 76: //DEFINE_SETTER
        var index = o[c++];
        var setter = v[l--];
        Object.defineProperty(v[l], j[index], {
          set: setter,
          enumerable: true,
          configurable: true
        });
        break;
        
      default:
        throw new Error("Unknown opcode: " + opcode);
    }
  }
}