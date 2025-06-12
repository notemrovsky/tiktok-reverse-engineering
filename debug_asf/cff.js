function h() {
            while (true) {
              var e = o[c++];
              if (e < 38) {
                if (e < 19) {
                  if (e < 9) {
                    if (e < 4) {
                      if (e < 2) {
                        if (e === 0) {
                          var t = v[l--];
                          v[l] -= t;
                        } else {
                          var r = o[c++];
                          if (!v[l--]) {
                            c += r;
                          }
                        }
                      } else if (e === 2) {
                        var n = o[c++];
                        l -= n;
                        var h = v.slice(l + 1, l + n + 1);
                        var m = v[l--];
                        var b = v[l--];
                        if (typeof m != "function") {
                          f = 3;
                          d = new TypeError(typeof m + " is not a function");
                          return;
                        }
                        var w = C.get(m);
                        if (w) {
                          g.push([o, i, u, a, s, c, f, d]);
                          Ag[1](w[0], b, h, w[1]);
                        } else {
                          var x = m.apply(b, h);
                          v[++l] = x;
                        }
                      } else {
                        r = o[c++];
                        c += r;
                      }
                    } else if (e < 6) {
                      if (e === 4) {
                        v[l] = +v[l];
                      } else {
                        var E = v[l--];
                        v[l] = v[l] === E;
                      }
                    } else if (e < 7) {
                      v[++l] = o[c++];
                    } else if (e === 7) {
                      t = yg[63](o[c++], a);
                      v[++l] = t;
                    } else {
                      E = v[l--];
                      v[l] = v[l] >>> E;
                    }
                  } else if (e < 14) {
                    if (e < 11) {
                      if (e === 9) {
                        --l;
                      } else {
                        var O = o[c++];
                        var A = v[l--];
                        var k = [];
                        for (var S in A) {
                          k.push(S);
                        }
                        a[O] = [k, A];
                      }
                    } else if (e < 12) {
                      E = v[l--];
                      v[l] = v[l] << E;
                    } else if (e === 12) {
                      E = v[l--];
                      v[l] = v[l] ^ E;
                    } else {
                      v[l] = -v[l];
                    }
                  } else if (e < 16) {
                    if (e === 14) {
                      v[l] = typeof v[l];
                    } else {
                      O = o[c++];
                      var P = v[l--];
                      var R = v[l--];
                      k = a[O];
                      S = undefined;
                      do {
                        S = k[0].shift();
                      } while (S !== undefined && !(S in k[1]));
                      if (S !== undefined) {
                        R[P] = S;
                        v[++l] = true;
                      } else {
                        v[++l] = false;
                      }
                    }
                  } else if (e < 17) {
                    t = v[l--];
                    var I = v[l--];
                    (A = v[l--])[I] = t;
                  } else if (e === 17) {
                    var B = v[l--];
                    t = delete (A = v[l--])[B];
                    v[++l] = t;
                  } else {
                    var M = v[l--];
                    t = (A = v[l--])[M]--;
                    v[++l] = t;
                  }
                } else if (e < 28) {
                  if (e < 23) {
                    if (e < 21) {
                      if (e === 19) {
                        r = o[c++];
                        f = 1;
                        d = c + r;
                        return;
                      }
                      r = o[c++];
                      if (v[l]) {
                        --l;
                      } else {
                        c += r;
                      }
                    } else if (e === 21) {
                      v[++l] = s;
                    } else {
                      t = v[l--];
                      v[l] *= t;
                    }
                  } else if (e < 25) {
                    if (e === 23) {
                      v[++l] = false;
                    } else {
                      E = v[l--];
                      v[l] = v[l] < E;
                    }
                  } else if (e < 26) {
                    if (f !== 0) {
                      return;
                    }
                  } else if (e === 26) {
                    r = o[c++];
                    if (v[l]) {
                      c += r;
                    } else {
                      --l;
                    }
                  } else {
                    E = v[l--];
                    v[l] = v[l] >= E;
                  }
                } else if (e < 33) {
                  if (e < 30) {
                    if (e === 28) {
                      var D = v[l--];
                      t = (A = v[l--])[D]++;
                      v[++l] = t;
                    } else {
                      r = o[c++];
                      t = v[l--];
                      if (v[l] === t) {
                        --l;
                        c += r;
                      }
                    }
                  } else if (e < 31) {
                    O = o[c++];
                    var L = j[O];
                    if (!(L in globalThis)) {
                      f = 3;
                      d = new ReferenceError(L + " is not defined");
                      return;
                    }
                    t = globalThis[L];
                    v[++l] = t;
                  } else if (e === 31) {
                    r = o[c++];
                    if (v[l--]) {
                      c += r;
                    }
                  } else {
                    O = o[c++];
                    t = v[l--];
                    (A = v[l--])[j[O]] = t;
                  }
                } else if (e < 35) {
                  if (e === 33) {
                    E = v[l--];
                    v[l] = v[l] == E;
                  } else {
                    E = v[l--];
                    v[l] = v[l] | E;
                  }
                } else if (e < 36) {
                  O = o[c++];
                  v[l] = v[l][j[O]];
                } else if (e === 36) {
                  O = o[c++];
                  t = v[l--];
                  Object.defineProperty(v[l], j[O], {
                    value: t,
                    writable: true,
                    configurable: true,
                    enumerable: true
                  });
                } else {
                  O = o[c++];
                  v[++l] = j[O];
                }
              } else if (e < 57) {
                if (e < 47) {
                  if (e < 42) {
                    if (e < 40) {
                      if (e === 38) {
                        v[l] = !v[l];
                      } else {
                        v[++l] = undefined;
                      }
                    } else if (e === 40) {
                      v[++l] = null;
                    } else {
                      t = v[l--];
                      v[l] += t;
                    }
                  } else if (e < 44) {
                    if (e === 42) {
                      var G = v[l--];
                      t = --(A = v[l--])[G];
                      v[++l] = t;
                    } else {
                      A = v[l--];
                      v[l] = v[l] in A;
                    }
                  } else if (e < 45) {
                    A = v[l--];
                    v[l] = v[l] instanceof A;
                  } else if (e === 45) {
                    var q = v[l--];
                    t = ++(A = v[l--])[q];
                    v[++l] = t;
                  } else {
                    O = o[c++];
                    var F = v[l--];
                    Object.defineProperty(v[l], j[O], {
                      get: F,
                      enumerable: true,
                      configurable: true
                    });
                  }
                } else if (e < 52) {
                  if (e < 49) {
                    if (e !== 47) {
                      f = 3;
                      d = v[l--];
                      return;
                    }
                    var z = o[c++];
                    O = o[c++];
                    r = a;
                    while (z > 0) {
                      r = r[0];
                      --z;
                    }
                    r[O] = v[l--];
                  } else if (e < 50) {
                    v[++l] = {};
                  } else if (e === 50) {
                    E = v[l--];
                    v[l] = v[l] != E;
                  } else {
                    var U = o[c++];
                    v[l = l - U + 1] = v.slice(l, l + U);
                  }
                } else if (e < 54) {
                  if (e === 52) {
                    t = v[l];
                    v[++l] = t;
                  } else {
                    v[l] = undefined;
                  }
                } else if (e < 55) {
                  E = v[l--];
                  v[l] = v[l] !== E;
                } else if (e === 55) {
                  z = o[c++];
                  O = o[c++];
                  r = a;
                  while (z > 0) {
                    r = r[0];
                    --z;
                  }
                  v[++l] = r;
                  v[++l] = O;
                } else {
                  v[++l] = NaN;
                }
              } else if (e < 67) {
                if (e < 62) {
                  if (e < 59) {
                    if (e !== 57) {
                      f = 2;
                      d = v[l--];
                      return;
                    }
                    O = o[c++];
                    v[++l] = +j[O];
                  } else if (e < 60) {
                    O = o[c++];
                    var H = j[O];
                    t = Ag[2](H, i);
                    v[++l] = t;
                    v[++l] = H;
                  } else if (e === 60) {
                    t = v[l--];
                    v[l] %= t;
                  } else {
                    v[++l] = true;
                  }
                } else if (e < 64) {
                  if (e === 62) {
                    O = o[c++];
                    var N = j[O];
                    t = typeof globalThis[N];
                    v[++l] = t;
                  } else {
                    E = v[l--];
                    v[l] = v[l] & E;
                  }
                } else if (e < 65) {
                  E = v[l--];
                  v[l] = v[l] > E;
                } else if (e === 65) {
                  var Y = v[l--];
                  v[l] = v[l][Y];
                } else {
                  z = o[c++];
                  O = o[c++];
                  r = a;
                  while (z > 0) {
                    r = r[0];
                    --z;
                  }
                  t = r[O];
                  v[++l] = t;
                }
              } else if (e < 72) {
                if (e < 69) {
                  if (e === 67) {
                    t = v[l--];
                    v[l] /= t;
                  } else {
                    v[l] = ~v[l];
                  }
                } else if (e < 70) {
                  O = o[c++];
                  t = v[l--];
                  var Q = j[O];
                  if (i && !(Q in globalThis)) {
                    f = 3;
                    d = new ReferenceError(Q + " is not defined");
                    return;
                  }
                  globalThis[Q] = t;
                } else if (e === 70) {
                  v[++l] = Infinity;
                } else {
                  var Z = v[l--];
                  (A = v[l--])[Z] = v[l];
                }
              } else if (e < 74) {
                if (e === 72) {
                  E = v[l--];
                  v[l] = v[l] >> E;
                } else {
                  O = o[c++];
                  var X = j[O];
                  if (!(X in globalThis)) {
                    globalThis[X] = undefined;
                  }
                }
              } else if (e < 75) {
                E = v[l--];
                v[l] = v[l] <= E;
              } else if (e === 75) {
                n = o[c++];
                var V = [undefined];
                while (n > 0) {
                  V[n--] = v[l--];
                }
                var W = v[l--];
                x = new (Function.bind.apply(W, V))();
                v[++l] = x;
              } else {
                O = o[c++];
                var K = v[l--];
                Object.defineProperty(v[l], j[O], {
                  set: K,
                  enumerable: true,
                  configurable: true
                });
              }
            }
          }