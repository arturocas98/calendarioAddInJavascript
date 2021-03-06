"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var MicrosoftGraph = function (e) {
  "use strict";

  function t(e, t) {
    return e(t = {
      exports: {}
    }, t.exports), t.exports;
  }

  var r = t(function (e) {
    var t = function (e) {
      var t,
          r = Object.prototype,
          n = r.hasOwnProperty,
          a = "function" == typeof Symbol ? Symbol : {},
          i = a.iterator || "@@iterator",
          o = a.asyncIterator || "@@asyncIterator",
          s = a.toStringTag || "@@toStringTag";

      function u(e, t, r, n) {
        var a = t && t.prototype instanceof v ? t : v,
            i = Object.create(a.prototype),
            o = new A(n || []);
        return i._invoke = function (e, t, r) {
          var n = d;
          return function (a, i) {
            if (n === l) throw new Error("Generator is already running");

            if (n === p) {
              if ("throw" === a) throw i;
              return L();
            }

            for (r.method = a, r.arg = i;;) {
              var o = r.delegate;

              if (o) {
                var s = R(o, r);

                if (s) {
                  if (s === f) continue;
                  return s;
                }
              }

              if ("next" === r.method) r.sent = r._sent = r.arg;else if ("throw" === r.method) {
                if (n === d) throw n = p, r.arg;
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              n = l;
              var u = c(e, t, r);

              if ("normal" === u.type) {
                if (n = r.done ? p : h, u.arg === f) continue;
                return {
                  value: u.arg,
                  done: r.done
                };
              }

              "throw" === u.type && (n = p, r.method = "throw", r.arg = u.arg);
            }
          };
        }(e, r, o), i;
      }

      function c(e, t, r) {
        try {
          return {
            type: "normal",
            arg: e.call(t, r)
          };
        } catch (e) {
          return {
            type: "throw",
            arg: e
          };
        }
      }

      e.wrap = u;
      var d = "suspendedStart",
          h = "suspendedYield",
          l = "executing",
          p = "completed",
          f = {};

      function v() {}

      function y() {}

      function m() {}

      var w = {};

      w[i] = function () {
        return this;
      };

      var x = Object.getPrototypeOf,
          g = x && x(x(D([])));
      g && g !== r && n.call(g, i) && (w = g);
      var E = m.prototype = v.prototype = Object.create(w);

      function b(e) {
        ["next", "throw", "return"].forEach(function (t) {
          e[t] = function (e) {
            return this._invoke(t, e);
          };
        });
      }

      function k(e) {
        var t;

        this._invoke = function (r, a) {
          function i() {
            return new Promise(function (t, i) {
              !function t(r, a, i, o) {
                var s = c(e[r], e, a);

                if ("throw" !== s.type) {
                  var u = s.arg,
                      d = u.value;
                  return d && "object" == _typeof(d) && n.call(d, "__await") ? Promise.resolve(d.__await).then(function (e) {
                    t("next", e, i, o);
                  }, function (e) {
                    t("throw", e, i, o);
                  }) : Promise.resolve(d).then(function (e) {
                    u.value = e, i(u);
                  }, function (e) {
                    return t("throw", e, i, o);
                  });
                }

                o(s.arg);
              }(r, a, t, i);
            });
          }

          return t = t ? t.then(i, i) : i();
        };
      }

      function R(e, r) {
        var n = e.iterator[r.method];

        if (n === t) {
          if (r.delegate = null, "throw" === r.method) {
            if (e.iterator["return"] && (r.method = "return", r.arg = t, R(e, r), "throw" === r.method)) return f;
            r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method");
          }

          return f;
        }

        var a = c(n, e.iterator, r.arg);
        if ("throw" === a.type) return r.method = "throw", r.arg = a.arg, r.delegate = null, f;
        var i = a.arg;
        return i ? i.done ? (r[e.resultName] = i.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, f) : i : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, f);
      }

      function O(e) {
        var t = {
          tryLoc: e[0]
        };
        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t);
      }

      function T(e) {
        var t = e.completion || {};
        t.type = "normal", delete t.arg, e.completion = t;
      }

      function A(e) {
        this.tryEntries = [{
          tryLoc: "root"
        }], e.forEach(O, this), this.reset(!0);
      }

      function D(e) {
        if (e) {
          var r = e[i];
          if (r) return r.call(e);
          if ("function" == typeof e.next) return e;

          if (!isNaN(e.length)) {
            var a = -1,
                o = function r() {
              for (; ++a < e.length;) {
                if (n.call(e, a)) return r.value = e[a], r.done = !1, r;
              }

              return r.value = t, r.done = !0, r;
            };

            return o.next = o;
          }
        }

        return {
          next: L
        };
      }

      function L() {
        return {
          value: t,
          done: !0
        };
      }

      return y.prototype = E.constructor = m, m.constructor = y, m[s] = y.displayName = "GeneratorFunction", e.isGeneratorFunction = function (e) {
        var t = "function" == typeof e && e.constructor;
        return !!t && (t === y || "GeneratorFunction" === (t.displayName || t.name));
      }, e.mark = function (e) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, s in e || (e[s] = "GeneratorFunction")), e.prototype = Object.create(E), e;
      }, e.awrap = function (e) {
        return {
          __await: e
        };
      }, b(k.prototype), k.prototype[o] = function () {
        return this;
      }, e.AsyncIterator = k, e.async = function (t, r, n, a) {
        var i = new k(u(t, r, n, a));
        return e.isGeneratorFunction(r) ? i : i.next().then(function (e) {
          return e.done ? e.value : i.next();
        });
      }, b(E), E[s] = "Generator", E[i] = function () {
        return this;
      }, E.toString = function () {
        return "[object Generator]";
      }, e.keys = function (e) {
        var t = [];

        for (var r in e) {
          t.push(r);
        }

        return t.reverse(), function r() {
          for (; t.length;) {
            var n = t.pop();
            if (n in e) return r.value = n, r.done = !1, r;
          }

          return r.done = !0, r;
        };
      }, e.values = D, A.prototype = {
        constructor: A,
        reset: function reset(e) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(T), !e) for (var r in this) {
            "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
          }
        },
        stop: function stop() {
          this.done = !0;
          var e = this.tryEntries[0].completion;
          if ("throw" === e.type) throw e.arg;
          return this.rval;
        },
        dispatchException: function dispatchException(e) {
          if (this.done) throw e;
          var r = this;

          function a(n, a) {
            return s.type = "throw", s.arg = e, r.next = n, a && (r.method = "next", r.arg = t), !!a;
          }

          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var o = this.tryEntries[i],
                s = o.completion;
            if ("root" === o.tryLoc) return a("end");

            if (o.tryLoc <= this.prev) {
              var u = n.call(o, "catchLoc"),
                  c = n.call(o, "finallyLoc");

              if (u && c) {
                if (this.prev < o.catchLoc) return a(o.catchLoc, !0);
                if (this.prev < o.finallyLoc) return a(o.finallyLoc);
              } else if (u) {
                if (this.prev < o.catchLoc) return a(o.catchLoc, !0);
              } else {
                if (!c) throw new Error("try statement without catch or finally");
                if (this.prev < o.finallyLoc) return a(o.finallyLoc);
              }
            }
          }
        },
        abrupt: function abrupt(e, t) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var a = this.tryEntries[r];

            if (a.tryLoc <= this.prev && n.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
              var i = a;
              break;
            }
          }

          i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
          var o = i ? i.completion : {};
          return o.type = e, o.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, f) : this.complete(o);
        },
        complete: function complete(e, t) {
          if ("throw" === e.type) throw e.arg;
          return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), f;
        },
        finish: function finish(e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var r = this.tryEntries[t];
            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), T(r), f;
          }
        },
        "catch": function _catch(e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var r = this.tryEntries[t];

            if (r.tryLoc === e) {
              var n = r.completion;

              if ("throw" === n.type) {
                var a = n.arg;
                T(r);
              }

              return a;
            }
          }

          throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(e, r, n) {
          return this.delegate = {
            iterator: D(e),
            resultName: r,
            nextLoc: n
          }, "next" === this.method && (this.arg = t), f;
        }
      }, e;
    }(e.exports);

    try {
      regeneratorRuntime = t;
    } catch (e) {
      Function("r", "regeneratorRuntime = r")(t);
    }
  });

  var n = function n(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  };

  function a(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
  }

  var i,
      o = function o(e, t, r) {
    return t && a(e.prototype, t), r && a(e, r), e;
  };

  function s(e, t, r, n) {
    return new (r || (r = Promise))(function (a, i) {
      function o(e) {
        try {
          u(n.next(e));
        } catch (e) {
          i(e);
        }
      }

      function s(e) {
        try {
          u(n["throw"](e));
        } catch (e) {
          i(e);
        }
      }

      function u(e) {
        e.done ? a(e.value) : new r(function (t) {
          t(e.value);
        }).then(o, s);
      }

      u((n = n.apply(e, t || [])).next());
    });
  }

  !function (e) {
    e.GET = "GET", e.PATCH = "PATCH", e.POST = "POST", e.PUT = "PUT", e.DELETE = "DELETE";
  }(i || (i = {}));

  var u = function () {
    function e(t) {
      if (n(this, e), this.requests = new Map(), void 0 !== t) {
        var r = e.requestLimit;

        if (t.length > r) {
          var a = new Error("Maximum requests limit exceeded, Max allowed number of requests are ".concat(r));
          throw a.name = "Limit Exceeded Error", a;
        }

        var i = !0,
            o = !1,
            s = void 0;

        try {
          for (var u, c = t[Symbol.iterator](); !(i = (u = c.next()).done); i = !0) {
            var d = u.value;
            this.addRequest(d);
          }
        } catch (e) {
          o = !0, s = e;
        } finally {
          try {
            i || null == c["return"] || c["return"]();
          } finally {
            if (o) throw s;
          }
        }
      }
    }

    return o(e, [{
      key: "addRequest",
      value: function value(t) {
        var r = e.requestLimit;

        if ("" === t.id) {
          var n = new Error("Id for a request is empty, Please provide an unique id");
          throw n.name = "Empty Id For Request", n;
        }

        if (this.requests.size === r) {
          var a = new Error("Maximum requests limit exceeded, Max allowed number of requests are ".concat(r));
          throw a.name = "Limit Exceeded Error", a;
        }

        if (this.requests.has(t.id)) {
          var i = new Error("Adding request with duplicate id ".concat(t.id, ", Make the id of the requests unique"));
          throw i.name = "Duplicate RequestId Error", i;
        }

        return this.requests.set(t.id, t), t.id;
      }
    }, {
      key: "removeRequest",
      value: function value(e) {
        for (var t = this.requests["delete"](e), r = this.requests.entries(), n = r.next(); !n.done;) {
          var a = n.value[1].dependsOn;

          if (void 0 !== a) {
            var i = a.indexOf(e);
            -1 !== i && a.splice(i, 1), 0 === a.length && delete n.value[1].dependsOn;
          }

          n = r.next();
        }

        return t;
      }
    }, {
      key: "getContent",
      value: function value() {
        return s(this, void 0, void 0, r.mark(function t() {
          var n, a, i, o, s, u, c, d, h;
          return r.wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  if (a = {
                    requests: n = []
                  }, i = this.requests.entries(), !(o = i.next()).done) {
                    t.next = 8;
                    break;
                  }

                  throw (s = new Error("No requests added yet, Please add at least one request.")).name = "Empty Payload", s;

                case 8:
                  if (e.validateDependencies(this.requests)) {
                    t.next = 12;
                    break;
                  }

                  throw (u = new Error("Invalid dependency found, Dependency should be:\n1. Parallel - no individual request states a dependency in the dependsOn property.\n2. Serial - all individual requests depend on the previous individual request.\n3. Same - all individual requests that state a dependency in the dependsOn property, state the same dependency.")).name = "Invalid Dependency", u;

                case 12:
                  if (o.done) {
                    t.next = 27;
                    break;
                  }

                  return c = o.value[1], t.next = 16, e.getRequestData(c.request);

                case 16:
                  if (void 0 === (d = t.sent).body || void 0 !== d.headers && void 0 !== d.headers["content-type"]) {
                    t.next = 21;
                    break;
                  }

                  throw (h = new Error("Content-type header is not mentioned for request #".concat(c.id, ", For request having body, Content-type header should be mentioned"))).name = "Invalid Content-type header", h;

                case 21:
                  d.id = c.id, void 0 !== c.dependsOn && c.dependsOn.length > 0 && (d.dependsOn = c.dependsOn), n.push(d), o = i.next(), t.next = 12;
                  break;

                case 27:
                  return a.requests = n, t.abrupt("return", a);

                case 29:
                case "end":
                  return t.stop();
              }
            }
          }, t, this);
        }));
      }
    }, {
      key: "addDependency",
      value: function value(e, t) {
        if (!this.requests.has(e)) {
          var r = new Error("Dependent ".concat(e, " does not exists, Please check the id"));
          throw r.name = "Invalid Dependent", r;
        }

        if (void 0 !== t && !this.requests.has(t)) {
          var n = new Error("Dependency ".concat(t, " does not exists, Please check the id"));
          throw n.name = "Invalid Dependency", n;
        }

        if (void 0 !== t) {
          var a = this.requests.get(e);

          if (void 0 === a.dependsOn && (a.dependsOn = []), -1 !== a.dependsOn.indexOf(t)) {
            var i = new Error("Dependency ".concat(t, " is already added for the request ").concat(e));
            throw i.name = "Duplicate Dependency", i;
          }

          a.dependsOn.push(t);
        } else {
          for (var o, s = this.requests.entries(), u = s.next(); !u.done && u.value[1].id !== e;) {
            o = u, u = s.next();
          }

          if (void 0 === o) {
            var c = new Error("Can't add dependency ".concat(t, ", There is only a dependent request in the batch"));
            throw c.name = "Invalid Dependency Addition", c;
          }

          var d = o.value[0];

          if (void 0 === u.value[1].dependsOn && (u.value[1].dependsOn = []), -1 !== u.value[1].dependsOn.indexOf(d)) {
            var h = new Error("Dependency ".concat(d, " is already added for the request ").concat(e));
            throw h.name = "Duplicate Dependency", h;
          }

          u.value[1].dependsOn.push(d);
        }
      }
    }, {
      key: "removeDependency",
      value: function value(e, t) {
        var r = this.requests.get(e);
        if (void 0 === r || void 0 === r.dependsOn || 0 === r.dependsOn.length) return !1;

        if (void 0 !== t) {
          var n = r.dependsOn.indexOf(t);
          return -1 !== n && (r.dependsOn.splice(n, 1), !0);
        }

        return delete r.dependsOn, !0;
      }
    }], [{
      key: "validateDependencies",
      value: function value(e) {
        if (0 === e.size) {
          var t = new Error("Empty requests map, Please provide at least one request.");
          throw t.name = "Empty Requests Error", t;
        }

        return function (e) {
          for (var t = e.entries(), r = t.next(); !r.done;) {
            var n = r.value[1];
            if (void 0 !== n.dependsOn && n.dependsOn.length > 0) return !1;
            r = t.next();
          }

          return !0;
        }(e) || function (e) {
          var t = e.entries(),
              r = t.next(),
              n = r.value[1];
          if (void 0 !== n.dependsOn && n.dependsOn.length > 0) return !1;
          var a = r;

          for (r = t.next(); !r.done;) {
            var i = r.value[1];
            if (void 0 === i.dependsOn || 1 !== i.dependsOn.length || i.dependsOn[0] !== a.value[1].id) return !1;
            a = r, r = t.next();
          }

          return !0;
        }(e) || function (e) {
          var t,
              r = e.entries(),
              n = r.next(),
              a = n.value[1];
          if (void 0 === a.dependsOn || 0 === a.dependsOn.length) t = a.id;else {
            if (1 !== a.dependsOn.length) return !1;
            var i = a.dependsOn[0];
            if (i === a.id || !e.has(i)) return !1;
            t = i;
          }

          for (n = r.next(); !n.done;) {
            var o = n.value[1];
            if ((void 0 === o.dependsOn || 0 === o.dependsOn.length) && t !== o.id) return !1;

            if (void 0 !== o.dependsOn && 0 !== o.dependsOn.length) {
              if (1 === o.dependsOn.length && (o.id === t || o.dependsOn[0] !== t)) return !1;
              if (o.dependsOn.length > 1) return !1;
            }

            n = r.next();
          }

          return !0;
        }(e);
      }
    }, {
      key: "getRequestData",
      value: function value(t) {
        return s(this, void 0, void 0, r.mark(function n() {
          var a, o, s;
          return r.wrap(function (r) {
            for (;;) {
              switch (r.prev = r.next) {
                case 0:
                  if (a = {
                    url: ""
                  }, o = new RegExp("^https?://"), a.url = o.test(t.url) ? "/" + t.url.split(/.*?\/\/.*?\//)[1] : t.url, a.method = t.method, s = {}, t.headers.forEach(function (e, t) {
                    s[t] = e;
                  }), Object.keys(s).length && (a.headers = s), t.method !== i.PATCH && t.method !== i.POST && t.method !== i.PUT) {
                    r.next = 11;
                    break;
                  }

                  return r.next = 10, e.getRequestBody(t);

                case 10:
                  a.body = r.sent;

                case 11:
                  return r.abrupt("return", a);

                case 12:
                case "end":
                  return r.stop();
              }
            }
          }, n);
        }));
      }
    }, {
      key: "getRequestBody",
      value: function value(e) {
        return s(this, void 0, void 0, r.mark(function t() {
          var n, a, i, o, s, u;
          return r.wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  return n = !1, t.prev = 1, i = e.clone(), t.next = 5, i.json();

                case 5:
                  a = t.sent, n = !0, t.next = 11;
                  break;

                case 9:
                  t.prev = 9, t.t0 = t["catch"](1);

                case 11:
                  if (n) {
                    t.next = 33;
                    break;
                  }

                  if (t.prev = 12, "undefined" == typeof Blob) {
                    t.next = 23;
                    break;
                  }

                  return t.next = 16, e.blob();

                case 16:
                  return o = t.sent, s = new FileReader(), t.next = 20, new Promise(function (e) {
                    s.addEventListener("load", function () {
                      var t = s.result,
                          r = new RegExp("^s*data:(.+?/.+?(;.+?=.+?)*)?(;base64)?,(.*)s*$").exec(t);
                      e(r[4]);
                    }, !1), s.readAsDataURL(o);
                  });

                case 20:
                  a = t.sent, t.next = 28;
                  break;

                case 23:
                  if ("undefined" == typeof Buffer) {
                    t.next = 28;
                    break;
                  }

                  return t.next = 26, e.buffer();

                case 26:
                  u = t.sent, a = u.toString("base64");

                case 28:
                  n = !0, t.next = 33;
                  break;

                case 31:
                  t.prev = 31, t.t1 = t["catch"](12);

                case 33:
                  return t.abrupt("return", a);

                case 34:
                case "end":
                  return t.stop();
              }
            }
          }, t, null, [[1, 9], [12, 31]]);
        }));
      }
    }]), e;
  }();

  u.requestLimit = 20;

  var c = function () {
    function e(t) {
      n(this, e), this.responses = new Map(), this.update(t);
    }

    return o(e, [{
      key: "createResponseObject",
      value: function value(e) {
        var t = e.body,
            r = {};

        if (r.status = e.status, void 0 !== e.statusText && (r.statusText = e.statusText), r.headers = e.headers, void 0 !== r.headers && void 0 !== r.headers["Content-Type"] && "application/json" === r.headers["Content-Type"].split(";")[0]) {
          var n = JSON.stringify(t);
          return new Response(n, r);
        }

        return new Response(t, r);
      }
    }, {
      key: "update",
      value: function value(e) {
        this.nextLink = e["@odata.nextLink"];

        for (var t = e.responses, r = 0, n = t.length; r < n; r++) {
          this.responses.set(t[r].id, this.createResponseObject(t[r]));
        }
      }
    }, {
      key: "getResponseById",
      value: function value(e) {
        return this.responses.get(e);
      }
    }, {
      key: "getResponses",
      value: function value() {
        return this.responses;
      }
    }, {
      key: "getResponsesIterator",
      value: r.mark(function e() {
        var t, n;
        return r.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                t = this.responses.entries(), n = t.next();

              case 2:
                if (n.done) {
                  e.next = 8;
                  break;
                }

                return e.next = 5, n.value;

              case 5:
                n = t.next(), e.next = 2;
                break;

              case 8:
              case "end":
                return e.stop();
            }
          }
        }, e, this);
      })
    }]), e;
  }(),
      d = function () {
    function e() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      n(this, e), this.middlewareOptions = new Map();
      var r = !0,
          a = !1,
          i = void 0;

      try {
        for (var o, s = t[Symbol.iterator](); !(r = (o = s.next()).done); r = !0) {
          var u = o.value,
              c = u.constructor;
          this.middlewareOptions.set(c, u);
        }
      } catch (e) {
        a = !0, i = e;
      } finally {
        try {
          r || null == s["return"] || s["return"]();
        } finally {
          if (a) throw i;
        }
      }
    }

    return o(e, [{
      key: "getMiddlewareOptions",
      value: function value(e) {
        return this.middlewareOptions.get(e);
      }
    }, {
      key: "setMiddlewareOptions",
      value: function value(e, t) {
        this.middlewareOptions.set(e, t);
      }
    }]), e;
  }();

  var h,
      l = function l(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e;
  },
      p = function p() {
    for (var e = "", t = 0; t < 32; t++) {
      8 !== t && 12 !== t && 16 !== t && 20 !== t || (e += "-"), e += Math.floor(16 * Math.random()).toString(16);
    }

    return e;
  },
      f = function f(e, t, r) {
    var n = null;
    if ("undefined" != typeof Request && e instanceof Request) n = e.headers.get(r);else if (void 0 !== t && void 0 !== t.headers) if ("undefined" != typeof Headers && t.headers instanceof Headers) n = t.headers.get(r);else if (t.headers instanceof Array) {
      for (var a = t.headers, i = 0, o = a.length; i < o; i++) {
        if (a[i][0] === r) {
          n = a[i][1];
          break;
        }
      }
    } else void 0 !== t.headers[r] && (n = t.headers[r]);
    return n;
  },
      v = function v(e, t, r, n) {
    if ("undefined" != typeof Request && e instanceof Request) e.headers.set(r, n);else if (void 0 !== t) if (void 0 === t.headers) t.headers = new Headers(l({}, r, n));else if ("undefined" != typeof Headers && t.headers instanceof Headers) t.headers.set(r, n);else if (t.headers instanceof Array) {
      for (var a = 0, i = t.headers.length; a < i; a++) {
        var o = t.headers[a];

        if (o[0] === r) {
          o[1] = n;
          break;
        }
      }

      a === i && t.headers.push([r, n]);
    } else Object.assign(t.headers, l({}, r, n));
  },
      y = function y(e, t, r, n) {
    "undefined" != typeof Request && e instanceof Request ? e.headers.append(r, n) : void 0 !== t && (void 0 === t.headers ? t.headers = new Headers(l({}, r, n)) : "undefined" != typeof Headers && t.headers instanceof Headers ? t.headers.append(r, n) : t.headers instanceof Array ? t.headers.push([r, n]) : void 0 === t.headers ? t.headers = l({}, r, n) : void 0 === t.headers[r] ? t.headers[r] = n : t.headers[r] += ", ".concat(n));
  },
      m = function m(e, t) {
    return s(void 0, void 0, void 0, r.mark(function n() {
      var a, i, o, s, u, c, d, h, l, p, f, v;
      return r.wrap(function (r) {
        for (;;) {
          switch (r.prev = r.next) {
            case 0:
              if (!t.headers.get("Content-Type")) {
                r.next = 6;
                break;
              }

              return r.next = 3, t.blob();

            case 3:
              r.t0 = r.sent, r.next = 9;
              break;

            case 6:
              return r.next = 8, Promise.resolve(void 0);

            case 8:
              r.t0 = r.sent;

            case 9:
              return a = r.t0, i = t.method, o = t.headers, s = t.referrer, u = t.referrerPolicy, c = t.mode, d = t.credentials, h = t.cache, l = t.redirect, p = t.integrity, f = t.keepalive, v = t.signal, r.abrupt("return", new Request(e, {
                method: i,
                headers: o,
                body: a,
                referrer: s,
                referrerPolicy: u,
                mode: c,
                credentials: d,
                cache: h,
                redirect: l,
                integrity: p,
                keepalive: f,
                signal: v
              }));

            case 12:
            case "end":
              return r.stop();
          }
        }
      }, n);
    }));
  },
      w = function e(t, r) {
    n(this, e), this.authenticationProvider = t, this.authenticationProviderOptions = r;
  };

  (h = e.FeatureUsageFlag || (e.FeatureUsageFlag = {}))[h.NONE = 0] = "NONE", h[h.REDIRECT_HANDLER_ENABLED = 1] = "REDIRECT_HANDLER_ENABLED", h[h.RETRY_HANDLER_ENABLED = 2] = "RETRY_HANDLER_ENABLED", h[h.AUTHENTICATION_HANDLER_ENABLED = 4] = "AUTHENTICATION_HANDLER_ENABLED";

  var x = function () {
    function t() {
      n(this, t), this.featureUsage = e.FeatureUsageFlag.NONE;
    }

    return o(t, [{
      key: "setFeatureUsage",
      value: function value(e) {
        this.featureUsage = this.featureUsage | e;
      }
    }, {
      key: "getFeatureUsage",
      value: function value() {
        return this.featureUsage.toString(16);
      }
    }], [{
      key: "updateFeatureUsageFlag",
      value: function value(e, r) {
        var n;
        e.middlewareControl instanceof d ? n = e.middlewareControl.getMiddlewareOptions(t) : e.middlewareControl = new d(), void 0 === n && (n = new t(), e.middlewareControl.setMiddlewareOptions(t, n)), n.setFeatureUsage(r);
      }
    }]), t;
  }(),
      g = function () {
    function t(e) {
      n(this, t), this.authenticationProvider = e;
    }

    return o(t, [{
      key: "execute",
      value: function value(n) {
        return s(this, void 0, void 0, r.mark(function a() {
          var i, o, s, u, c;
          return r.wrap(function (r) {
            for (;;) {
              switch (r.prev = r.next) {
                case 0:
                  return r.prev = 0, n.middlewareControl instanceof d && (i = n.middlewareControl.getMiddlewareOptions(w)), void 0 !== i && (o = i.authenticationProvider, s = i.authenticationProviderOptions), void 0 === o && (o = this.authenticationProvider), r.next = 6, o.getAccessToken(s);

                case 6:
                  return u = r.sent, c = "Bearer ".concat(u), y(n.request, n.options, t.AUTHORIZATION_HEADER, c), x.updateFeatureUsageFlag(n, e.FeatureUsageFlag.AUTHENTICATION_HANDLER_ENABLED), r.next = 12, this.nextMiddleware.execute(n);

                case 12:
                  return r.abrupt("return", r.sent);

                case 15:
                  throw r.prev = 15, r.t0 = r["catch"](0), r.t0;

                case 18:
                case "end":
                  return r.stop();
              }
            }
          }, a, this, [[0, 15]]);
        }));
      }
    }, {
      key: "setNext",
      value: function value(e) {
        this.nextMiddleware = e;
      }
    }]), t;
  }();

  g.AUTHORIZATION_HEADER = "Authorization";

  var E = function () {
    function e() {
      n(this, e);
    }

    return o(e, [{
      key: "execute",
      value: function value(e) {
        return s(this, void 0, void 0, r.mark(function t() {
          return r.wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  return t.prev = 0, t.next = 3, fetch(e.request, e.options);

                case 3:
                  return e.response = t.sent, t.abrupt("return");

                case 7:
                  throw t.prev = 7, t.t0 = t["catch"](0), t.t0;

                case 10:
                case "end":
                  return t.stop();
              }
            }
          }, t, null, [[0, 7]]);
        }));
      }
    }]), e;
  }(),
      b = function () {
    function e() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e.DEFAULT_DELAY,
          r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.DEFAULT_MAX_RETRIES,
          a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.DEFAULT_SHOULD_RETRY;

      if (n(this, e), t > e.MAX_DELAY && r > e.MAX_MAX_RETRIES) {
        var i = new Error("Delay and MaxRetries should not be more than ".concat(e.MAX_DELAY, " and ").concat(e.MAX_MAX_RETRIES));
        throw i.name = "MaxLimitExceeded", i;
      }

      if (t > e.MAX_DELAY) {
        var o = new Error("Delay should not be more than ".concat(e.MAX_DELAY));
        throw o.name = "MaxLimitExceeded", o;
      }

      if (r > e.MAX_MAX_RETRIES) {
        var s = new Error("MaxRetries should not be more than ".concat(e.MAX_MAX_RETRIES));
        throw s.name = "MaxLimitExceeded", s;
      }

      if (t < 0 && r < 0) {
        var u = new Error("Delay and MaxRetries should not be negative");
        throw u.name = "MinExpectationNotMet", u;
      }

      if (t < 0) {
        var c = new Error("Delay should not be negative");
        throw c.name = "MinExpectationNotMet", c;
      }

      if (r < 0) {
        var d = new Error("MaxRetries should not be negative");
        throw d.name = "MinExpectationNotMet", d;
      }

      this.delay = Math.min(t, e.MAX_DELAY), this.maxRetries = Math.min(r, e.MAX_MAX_RETRIES), this.shouldRetry = a;
    }

    return o(e, [{
      key: "getMaxDelay",
      value: function value() {
        return e.MAX_DELAY;
      }
    }]), e;
  }();

  b.DEFAULT_DELAY = 3, b.DEFAULT_MAX_RETRIES = 3, b.MAX_DELAY = 180, b.MAX_MAX_RETRIES = 10, b.DEFAULT_SHOULD_RETRY = function () {
    return !0;
  };

  var k = function () {
    function t() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new b();
      n(this, t), this.options = e;
    }

    return o(t, [{
      key: "isRetry",
      value: function value(e) {
        return -1 !== t.RETRY_STATUS_CODES.indexOf(e.status);
      }
    }, {
      key: "isBuffered",
      value: function value(e, t) {
        var r = "string" == typeof e ? t.method : e.method;
        if ((r === i.PUT || r === i.PATCH || r === i.POST) && "application/octet-stream" === f(e, t, "Content-Type")) return !1;
        return !0;
      }
    }, {
      key: "getDelay",
      value: function value(e, r, n) {
        var a,
            i = function i() {
          return Number(Math.random().toFixed(3));
        },
            o = void 0 !== e.headers ? e.headers.get(t.RETRY_AFTER_HEADER) : null;

        return a = null !== o ? Number.isNaN(Number(o)) ? Math.round((new Date(o).getTime() - Date.now()) / 1e3) : Number(o) : r >= 2 ? this.getExponentialBackOffTime(r) + n + i() : n + i(), Math.min(a, this.options.getMaxDelay() + i());
      }
    }, {
      key: "getExponentialBackOffTime",
      value: function value(e) {
        return Math.round(0.5 * (Math.pow(2, e) - 1));
      }
    }, {
      key: "sleep",
      value: function value(e) {
        return s(this, void 0, void 0, r.mark(function t() {
          var n;
          return r.wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  return n = 1e3 * e, t.abrupt("return", new Promise(function (e) {
                    return setTimeout(e, n);
                  }));

                case 2:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }));
      }
    }, {
      key: "getOptions",
      value: function value(e) {
        var t;
        return e.middlewareControl instanceof d && (t = e.middlewareControl.getMiddlewareOptions(this.options.constructor)), void 0 === t && (t = Object.assign(new b(), this.options)), t;
      }
    }, {
      key: "executeWithRetry",
      value: function value(e, n, a) {
        return s(this, void 0, void 0, r.mark(function i() {
          var o;
          return r.wrap(function (r) {
            for (;;) {
              switch (r.prev = r.next) {
                case 0:
                  return r.prev = 0, r.next = 3, this.nextMiddleware.execute(e);

                case 3:
                  if (!(n < a.maxRetries && this.isRetry(e.response) && this.isBuffered(e.request, e.options) && a.shouldRetry(a.delay, n, e.request, e.options, e.response))) {
                    r.next = 14;
                    break;
                  }

                  return ++n, v(e.request, e.options, t.RETRY_ATTEMPT_HEADER, n.toString()), o = this.getDelay(e.response, n, a.delay), r.next = 9, this.sleep(o);

                case 9:
                  return r.next = 11, this.executeWithRetry(e, n, a);

                case 11:
                  return r.abrupt("return", r.sent);

                case 14:
                  return r.abrupt("return");

                case 15:
                  r.next = 20;
                  break;

                case 17:
                  throw r.prev = 17, r.t0 = r["catch"](0), r.t0;

                case 20:
                case "end":
                  return r.stop();
              }
            }
          }, i, this, [[0, 17]]);
        }));
      }
    }, {
      key: "execute",
      value: function value(t) {
        return s(this, void 0, void 0, r.mark(function n() {
          var a;
          return r.wrap(function (r) {
            for (;;) {
              switch (r.prev = r.next) {
                case 0:
                  return r.prev = 0, 0, a = this.getOptions(t), x.updateFeatureUsageFlag(t, e.FeatureUsageFlag.RETRY_HANDLER_ENABLED), r.next = 6, this.executeWithRetry(t, 0, a);

                case 6:
                  return r.abrupt("return", r.sent);

                case 9:
                  throw r.prev = 9, r.t0 = r["catch"](0), r.t0;

                case 12:
                case "end":
                  return r.stop();
              }
            }
          }, n, this, [[0, 9]]);
        }));
      }
    }, {
      key: "setNext",
      value: function value(e) {
        this.nextMiddleware = e;
      }
    }]), t;
  }();

  k.RETRY_STATUS_CODES = [429, 503, 504], k.RETRY_ATTEMPT_HEADER = "Retry-Attempt", k.RETRY_AFTER_HEADER = "Retry-After";

  var R = "v1.0",
      O = "https://graph.microsoft.com/",
      T = new Set(["graph.microsoft.com", "graph.microsoft.us", "dod-graph.microsoft.us", "graph.microsoft.de", "microsoftgraph.chinacloudapi.cn"]),
      A = ["$select", "$expand", "$orderby", "$filter", "$top", "$skip", "$skipToken", "$count"],
      D = function D(e) {
    var t = e && e.constructor && e.constructor.name;
    if ("Buffer" === t || "Blob" === t || "File" === t || "FormData" === t || "string" == typeof e) return e;
    if ("ArrayBuffer" === t) e = Buffer.from(e);else if ("Int8Array" === t || "Int16Array" === t || "Int32Array" === t || "Uint8Array" === t || "Uint16Array" === t || "Uint32Array" === t || "Uint8ClampedArray" === t || "Float32Array" === t || "Float64Array" === t || "DataView" === t) e = Buffer.from(e.buffer);else try {
      e = JSON.stringify(e);
    } catch (e) {
      throw new Error("Unable to stringify the content");
    }
    return e;
  },
      L = function L(e) {
    if (-1 !== (e = e.toLowerCase()).indexOf("https://")) {
      var t = (e = e.replace("https://", "")).indexOf(":"),
          r = e.indexOf("/"),
          n = "";
      if (-1 !== r) return -1 !== t && t < r ? (n = e.substring(0, t), T.has(n)) : (n = e.substring(0, r), T.has(n));
    }

    return !1;
  },
      P = function () {
    function e() {
      n(this, e);
    }

    return o(e, [{
      key: "execute",
      value: function value(t) {
        return s(this, void 0, void 0, r.mark(function n() {
          var a, i, o, s, u;
          return r.wrap(function (r) {
            for (;;) {
              switch (r.prev = r.next) {
                case 0:
                  return r.prev = 0, a = "string" == typeof t.request ? t.request : t.request.url, L(a) ? ((i = f(t.request, t.options, e.CLIENT_REQUEST_ID_HEADER)) || (i = p(), v(t.request, t.options, e.CLIENT_REQUEST_ID_HEADER, i)), o = "".concat(e.PRODUCT_NAME, "/").concat("2.2.1"), t.middlewareControl instanceof d && (s = t.middlewareControl.getMiddlewareOptions(x)), s && (u = s.getFeatureUsage(), o += " (".concat(e.FEATURE_USAGE_STRING, "=").concat(u, ")")), y(t.request, t.options, e.SDK_VERSION_HEADER, o)) : (delete t.options.headers[e.CLIENT_REQUEST_ID_HEADER], delete t.options.headers[e.SDK_VERSION_HEADER]), r.next = 5, this.nextMiddleware.execute(t);

                case 5:
                  return r.abrupt("return", r.sent);

                case 8:
                  throw r.prev = 8, r.t0 = r["catch"](0), r.t0;

                case 11:
                case "end":
                  return r.stop();
              }
            }
          }, n, this, [[0, 8]]);
        }));
      }
    }, {
      key: "setNext",
      value: function value(e) {
        this.nextMiddleware = e;
      }
    }]), e;
  }();

  P.CLIENT_REQUEST_ID_HEADER = "client-request-id", P.SDK_VERSION_HEADER = "SdkVersion", P.PRODUCT_NAME = "graph-js", P.FEATURE_USAGE_STRING = "featureUsage";

  var S = t(function (e) {
    function t(e) {
      return (t = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(e);
    }

    function r(n) {
      return "function" == typeof Symbol && "symbol" === t(Symbol.iterator) ? e.exports = r = function r(e) {
        return t(e);
      } : e.exports = r = function r(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e);
      }, r(n);
    }

    e.exports = r;
  }),
      _ = function e() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e.DEFAULT_MAX_REDIRECTS,
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.DEFAULT_SHOULD_RETRY;

    if (n(this, e), t > e.MAX_MAX_REDIRECTS) {
      var a = new Error("MaxRedirects should not be more than ".concat(e.MAX_MAX_REDIRECTS));
      throw a.name = "MaxLimitExceeded", a;
    }

    if (t < 0) {
      var i = new Error("MaxRedirects should not be negative");
      throw i.name = "MinExpectationNotMet", i;
    }

    this.maxRedirects = t, this.shouldRedirect = r;
  };

  _.DEFAULT_MAX_REDIRECTS = 5, _.MAX_MAX_REDIRECTS = 20, _.DEFAULT_SHOULD_RETRY = function () {
    return !0;
  };

  var C = function () {
    function t() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new _();
      n(this, t), this.options = e;
    }

    return o(t, [{
      key: "isRedirect",
      value: function value(e) {
        return -1 !== t.REDIRECT_STATUS_CODES.indexOf(e.status);
      }
    }, {
      key: "hasLocationHeader",
      value: function value(e) {
        return e.headers.has(t.LOCATION_HEADER);
      }
    }, {
      key: "getLocationHeader",
      value: function value(e) {
        return e.headers.get(t.LOCATION_HEADER);
      }
    }, {
      key: "isRelativeURL",
      value: function value(e) {
        return -1 === e.indexOf("://");
      }
    }, {
      key: "shouldDropAuthorizationHeader",
      value: function value(e, t) {
        var r,
            n,
            a = /^[A-Za-z].+?:\/\/.+?(?=\/|$)/,
            i = a.exec(e);
        null !== i && (r = i[0]);
        var o = a.exec(t);
        return null !== o && (n = o[0]), void 0 !== r && void 0 !== n && r !== n;
      }
    }, {
      key: "updateRequestUrl",
      value: function value(e, t) {
        return s(this, void 0, void 0, r.mark(function n() {
          return r.wrap(function (r) {
            for (;;) {
              switch (r.prev = r.next) {
                case 0:
                  if ("string" != typeof t.request) {
                    r.next = 4;
                    break;
                  }

                  r.t0 = e, r.next = 7;
                  break;

                case 4:
                  return r.next = 6, m(e, t.request);

                case 6:
                  r.t0 = r.sent;

                case 7:
                  t.request = r.t0;

                case 8:
                case "end":
                  return r.stop();
              }
            }
          }, n);
        }));
      }
    }, {
      key: "getOptions",
      value: function value(e) {
        var t;
        return e.middlewareControl instanceof d && (t = e.middlewareControl.getMiddlewareOptions(_)), void 0 === t && (t = Object.assign(new _(), this.options)), t;
      }
    }, {
      key: "executeWithRedirect",
      value: function value(e, n, a) {
        return s(this, void 0, void 0, r.mark(function o() {
          var s, u;
          return r.wrap(function (r) {
            for (;;) {
              switch (r.prev = r.next) {
                case 0:
                  return r.prev = 0, r.next = 3, this.nextMiddleware.execute(e);

                case 3:
                  if (s = e.response, !(n < a.maxRedirects && this.isRedirect(s) && this.hasLocationHeader(s) && a.shouldRedirect(s))) {
                    r.next = 19;
                    break;
                  }

                  if (++n, s.status !== t.STATUS_CODE_SEE_OTHER) {
                    r.next = 11;
                    break;
                  }

                  e.options.method = i.GET, delete e.options.body, r.next = 15;
                  break;

                case 11:
                  return u = this.getLocationHeader(s), !this.isRelativeURL(u) && this.shouldDropAuthorizationHeader(s.url, u) && delete e.options.headers[t.AUTHORIZATION_HEADER], r.next = 15, this.updateRequestUrl(u, e);

                case 15:
                  return r.next = 17, this.executeWithRedirect(e, n, a);

                case 17:
                  r.next = 20;
                  break;

                case 19:
                  return r.abrupt("return");

                case 20:
                  r.next = 25;
                  break;

                case 22:
                  throw r.prev = 22, r.t0 = r["catch"](0), r.t0;

                case 25:
                case "end":
                  return r.stop();
              }
            }
          }, o, this, [[0, 22]]);
        }));
      }
    }, {
      key: "execute",
      value: function value(n) {
        return s(this, void 0, void 0, r.mark(function a() {
          var i;
          return r.wrap(function (r) {
            for (;;) {
              switch (r.prev = r.next) {
                case 0:
                  return r.prev = 0, 0, i = this.getOptions(n), n.options.redirect = t.MANUAL_REDIRECT, x.updateFeatureUsageFlag(n, e.FeatureUsageFlag.REDIRECT_HANDLER_ENABLED), r.next = 7, this.executeWithRedirect(n, 0, i);

                case 7:
                  return r.abrupt("return", r.sent);

                case 10:
                  throw r.prev = 10, r.t0 = r["catch"](0), r.t0;

                case 13:
                case "end":
                  return r.stop();
              }
            }
          }, a, this, [[0, 10]]);
        }));
      }
    }, {
      key: "setNext",
      value: function value(e) {
        this.nextMiddleware = e;
      }
    }]), t;
  }();

  C.REDIRECT_STATUS_CODES = [301, 302, 303, 307, 308], C.STATUS_CODE_SEE_OTHER = 303, C.LOCATION_HEADER = "Location", C.AUTHORIZATION_HEADER = "Authorization", C.MANUAL_REDIRECT = "manual";

  var M,
      U = function () {
    function e() {
      n(this, e);
    }

    return o(e, null, [{
      key: "getDefaultMiddlewareChain",
      value: function value(e) {
        var t = [],
            r = new g(e),
            n = new k(new b()),
            a = new P(),
            i = new E();

        if (t.push(r), t.push(n), "object" === ("undefined" == typeof process ? "undefined" : S(process)) && "function" == typeof require) {
          var o = new C(new _());
          t.push(o);
        }

        return t.push(a), t.push(i), t;
      }
    }]), e;
  }();

  (M = e.ChaosStrategy || (e.ChaosStrategy = {}))[M.MANUAL = 0] = "MANUAL", M[M.RANDOM = 1] = "RANDOM";

  var N = function t() {
    var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e.ChaosStrategy.RANDOM,
        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Some error Happened",
        i = arguments.length > 2 ? arguments[2] : void 0,
        o = arguments.length > 3 ? arguments[3] : void 0,
        s = arguments.length > 4 ? arguments[4] : void 0;
    if (n(this, t), this.chaosStrategy = r, this.statusCode = i, this.statusMessage = a, this.chaosPercentage = void 0 !== o ? o : 10, this.responseBody = s, this.chaosPercentage > 100) throw new Error("Error Pecentage can not be more than 100");
  },
      q = {
    GET: [429, 500, 502, 503, 504],
    POST: [429, 500, 502, 503, 504, 507],
    PUT: [429, 500, 502, 503, 504, 507],
    PATCH: [429, 500, 502, 503, 504],
    DELETE: [429, 500, 502, 503, 504, 507]
  },
      I = {
    100: "Continue",
    101: "Switching Protocols",
    102: "Processing",
    103: "Early Hints",
    200: "OK",
    201: "Created",
    202: "Accepted",
    203: "Non-Authoritative Information",
    204: "No Content",
    205: "Reset Content",
    206: "Partial Content",
    207: "Multi-Status",
    208: "Already Reported",
    226: "IM Used",
    300: "Multiple Choices",
    301: "Moved Permanently",
    302: "Found",
    303: "See Other",
    304: "Not Modified",
    305: "Use Proxy",
    307: "Temporary Redirect",
    308: "Permanent Redirect",
    400: "Bad Request",
    401: "Unauthorized",
    402: "Payment Required",
    403: "Forbidden",
    404: "Not Found",
    405: "Method Not Allowed",
    406: "Not Acceptable",
    407: "Proxy Authentication Required",
    408: "Request Timeout",
    409: "Conflict",
    410: "Gone",
    411: "Length Required",
    412: "Precondition Failed",
    413: "Payload Too Large",
    414: "URI Too Long",
    415: "Unsupported Media Type",
    416: "Range Not Satisfiable",
    417: "Expectation Failed",
    421: "Misdirected Request",
    422: "Unprocessable Entity",
    423: "Locked",
    424: "Failed Dependency",
    425: "Too Early",
    426: "Upgrade Required",
    428: "Precondition Required",
    429: "Too Many Requests",
    431: "Request Header Fields Too Large",
    451: "Unavailable For Legal Reasons",
    500: "Internal Server Error",
    501: "Not Implemented",
    502: "Bad Gateway",
    503: "Service Unavailable",
    504: "Gateway Timeout",
    505: "HTTP Version Not Supported",
    506: "Variant Also Negotiates",
    507: "Insufficient Storage",
    508: "Loop Detected",
    510: "Not Extended",
    511: "Network Authentication Required"
  },
      F = function () {
    function t() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new N(),
          r = arguments.length > 1 ? arguments[1] : void 0;
      n(this, t), this.options = e, this.manualMap = r;
    }

    return o(t, [{
      key: "createResponseHeaders",
      value: function value(e, t, r) {
        var n = new Headers();
        return n.append("Cache-Control", "no-store"), n.append("request-id", t), n.append("client-request-id", t), n.append("x-ms-ags-diagnostic", ""), n.append("Date", r), n.append("Strict-Transport-Security", ""), 429 === e && n.append("retry-after", "300"), n;
      }
    }, {
      key: "createResponseBody",
      value: function value(e, t, r, n, a) {
        if (a) return a;
        var i;
        e >= 400 ? i = {
          error: {
            code: I[e],
            message: t,
            innerError: {
              "request-id": r,
              date: n
            }
          }
        } : i = {};
        return i;
      }
    }, {
      key: "createResponse",
      value: function value(e, t) {
        try {
          var r,
              n,
              a,
              i,
              o = t.request;
          a = p(), i = new Date(), n = this.createResponseHeaders(e.statusCode, a, i.toString()), r = this.createResponseBody(e.statusCode, e.statusMessage, a, i.toString(), e.responseBody);
          var s = {
            url: o,
            status: e.statusCode,
            statusText: e.statusMessage,
            headers: n
          };
          t.response = new Response(r, s);
        } catch (e) {
          throw e;
        }
      }
    }, {
      key: "sendRequest",
      value: function value(e, t) {
        return s(this, void 0, void 0, r.mark(function n() {
          return r.wrap(function (r) {
            for (;;) {
              switch (r.prev = r.next) {
                case 0:
                  if (r.prev = 0, this.setStatusCode(e, t.request, t.options.method), e.statusCode) {
                    r.next = 7;
                    break;
                  }

                  return r.next = 5, this.nextMiddleware.execute(t);

                case 5:
                  r.next = 8;
                  break;

                case 7:
                  this.createResponse(e, t);

                case 8:
                  r.next = 13;
                  break;

                case 10:
                  throw r.prev = 10, r.t0 = r["catch"](0), r.t0;

                case 13:
                case "end":
                  return r.stop();
              }
            }
          }, n, this, [[0, 10]]);
        }));
      }
    }, {
      key: "getRandomStatusCode",
      value: function value(e) {
        try {
          var t = q[e];
          return t[Math.floor(Math.random() * t.length)];
        } catch (e) {
          throw e;
        }
      }
    }, {
      key: "getRelativeURL",
      value: function value(e) {
        var t,
            r = /https?:\/\/graph\.microsoft\.com\/[^/]+(.+?)(\?|$)/;
        return null !== r.exec(e) && (t = r.exec(e)[1]), t;
      }
    }, {
      key: "setStatusCode",
      value: function value(t, r, n) {
        var a = this;

        try {
          if (t.chaosStrategy === e.ChaosStrategy.MANUAL) {
            if (void 0 === t.statusCode) {
              var i = this.getRelativeURL(r);
              void 0 !== this.manualMap.get(i) ? void 0 !== this.manualMap.get(i).get(n) && (t.statusCode = this.manualMap.get(i).get(n)) : this.manualMap.forEach(function (e, r) {
                new RegExp(r + "$").test(i) && void 0 !== a.manualMap.get(r).get(n) && (t.statusCode = a.manualMap.get(r).get(n));
              });
            }
          } else Math.floor(100 * Math.random()) < t.chaosPercentage && (t.statusCode = this.getRandomStatusCode(n));
        } catch (e) {
          throw e;
        }
      }
    }, {
      key: "getOptions",
      value: function value(e) {
        var t;
        return e.middlewareControl instanceof d && (t = e.middlewareControl.getMiddlewareOptions(N)), void 0 === t && (t = Object.assign(new N(), this.options)), t;
      }
    }, {
      key: "execute",
      value: function value(e) {
        return s(this, void 0, void 0, r.mark(function t() {
          var n;
          return r.wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  return t.prev = 0, n = this.getOptions(e), t.next = 4, this.sendRequest(n, e);

                case 4:
                  return t.abrupt("return", t.sent);

                case 7:
                  throw t.prev = 7, t.t0 = t["catch"](0), t.t0;

                case 10:
                case "end":
                  return t.stop();
              }
            }
          }, t, this, [[0, 7]]);
        }));
      }
    }, {
      key: "setNext",
      value: function value(e) {
        this.nextMiddleware = e;
      }
    }]), t;
  }(),
      H = function e() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1,
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
    n(this, e), this.minValue = t, this.maxValue = r;
  },
      j = function () {
    function e(t, r, a) {
      var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      n(this, e), this.DEFAULT_FILE_SIZE = 5242880, this.client = t, this.file = r, void 0 === i.rangeSize && (i.rangeSize = this.DEFAULT_FILE_SIZE), this.options = i, this.uploadSession = a, this.nextRange = new H(0, this.options.rangeSize - 1);
    }

    return o(e, [{
      key: "parseRange",
      value: function value(e) {
        var t = e[0];
        if (void 0 === t || "" === t) return new H();
        var r = t.split("-"),
            n = parseInt(r[0], 10),
            a = parseInt(r[1], 10);
        return Number.isNaN(a) && (a = this.file.size - 1), new H(n, a);
      }
    }, {
      key: "updateTaskStatus",
      value: function value(e) {
        this.uploadSession.expiry = new Date(e.expirationDateTime), this.nextRange = this.parseRange(e.nextExpectedRanges);
      }
    }, {
      key: "getNextRange",
      value: function value() {
        if (-1 === this.nextRange.minValue) return this.nextRange;
        var e = this.nextRange.minValue,
            t = e + this.options.rangeSize - 1;
        return t >= this.file.size && (t = this.file.size - 1), new H(e, t);
      }
    }, {
      key: "sliceFile",
      value: function value(e) {
        return this.file.content.slice(e.minValue, e.maxValue + 1);
      }
    }, {
      key: "upload",
      value: function value() {
        return s(this, void 0, void 0, r.mark(function e() {
          var t, n, a, i;
          return r.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  e.prev = 0;

                case 1:
                  if (-1 !== (t = this.getNextRange()).maxValue) {
                    e.next = 7;
                    break;
                  }

                  throw (n = new Error("Task with which you are trying to upload is already completed, Please check for your uploaded file")).name = "Invalid Session", n;

                case 7:
                  return a = this.sliceFile(t), e.next = 10, this.uploadSlice(a, t, this.file.size);

                case 10:
                  if (void 0 === (i = e.sent).id) {
                    e.next = 15;
                    break;
                  }

                  return e.abrupt("return", i);

                case 15:
                  this.updateTaskStatus(i);

                case 16:
                  e.next = 1;
                  break;

                case 18:
                  e.next = 23;
                  break;

                case 20:
                  throw e.prev = 20, e.t0 = e["catch"](0), e.t0;

                case 23:
                case "end":
                  return e.stop();
              }
            }
          }, e, this, [[0, 20]]);
        }));
      }
    }, {
      key: "uploadSlice",
      value: function value(e, t, n) {
        return s(this, void 0, void 0, r.mark(function a() {
          return r.wrap(function (r) {
            for (;;) {
              switch (r.prev = r.next) {
                case 0:
                  return r.prev = 0, r.next = 3, this.client.api(this.uploadSession.url).headers({
                    "Content-Length": "".concat(t.maxValue - t.minValue + 1),
                    "Content-Range": "bytes ".concat(t.minValue, "-").concat(t.maxValue, "/").concat(n)
                  }).put(e);

                case 3:
                  return r.abrupt("return", r.sent);

                case 6:
                  throw r.prev = 6, r.t0 = r["catch"](0), r.t0;

                case 9:
                case "end":
                  return r.stop();
              }
            }
          }, a, this, [[0, 6]]);
        }));
      }
    }, {
      key: "cancel",
      value: function value() {
        return s(this, void 0, void 0, r.mark(function e() {
          return r.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  return e.prev = 0, e.next = 3, this.client.api(this.uploadSession.url)["delete"]();

                case 3:
                  return e.abrupt("return", e.sent);

                case 6:
                  throw e.prev = 6, e.t0 = e["catch"](0), e.t0;

                case 9:
                case "end":
                  return e.stop();
              }
            }
          }, e, this, [[0, 6]]);
        }));
      }
    }, {
      key: "getStatus",
      value: function value() {
        return s(this, void 0, void 0, r.mark(function e() {
          var t;
          return r.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  return e.prev = 0, e.next = 3, this.client.api(this.uploadSession.url).get();

                case 3:
                  return t = e.sent, this.updateTaskStatus(t), e.abrupt("return", t);

                case 8:
                  throw e.prev = 8, e.t0 = e["catch"](0), e.t0;

                case 11:
                case "end":
                  return e.stop();
              }
            }
          }, e, this, [[0, 8]]);
        }));
      }
    }, {
      key: "resume",
      value: function value() {
        return s(this, void 0, void 0, r.mark(function e() {
          return r.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  return e.prev = 0, e.next = 3, this.getStatus();

                case 3:
                  return e.next = 5, this.upload();

                case 5:
                  return e.abrupt("return", e.sent);

                case 8:
                  throw e.prev = 8, e.t0 = e["catch"](0), e.t0;

                case 11:
                case "end":
                  return e.stop();
              }
            }
          }, e, this, [[0, 8]]);
        }));
      }
    }], [{
      key: "createUploadSession",
      value: function value(e, t, n) {
        var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return s(this, void 0, void 0, r.mark(function i() {
          var o, s;
          return r.wrap(function (r) {
            for (;;) {
              switch (r.prev = r.next) {
                case 0:
                  return r.prev = 0, r.next = 3, e.api(t).headers(a).post(n);

                case 3:
                  return o = r.sent, s = {
                    url: o.uploadUrl,
                    expiry: new Date(o.expirationDateTime)
                  }, r.abrupt("return", s);

                case 8:
                  throw r.prev = 8, r.t0 = r["catch"](0), r.t0;

                case 11:
                case "end":
                  return r.stop();
              }
            }
          }, i, null, [[0, 8]]);
        }));
      }
    }]), e;
  }();

  var Q = function Q(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  };

  var B = function B(e, t) {
    return !t || "object" !== S(t) && "function" != typeof t ? Q(e) : t;
  },
      X = t(function (e) {
    function t(r) {
      return e.exports = t = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      }, t(r);
    }

    e.exports = t;
  });

  var G = function G(e, t) {
    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = X(e));) {
      ;
    }

    return e;
  },
      Y = t(function (e) {
    function t(r, n, a) {
      return "undefined" != typeof Reflect && Reflect.get ? e.exports = t = Reflect.get : e.exports = t = function t(e, _t, r) {
        var n = G(e, _t);

        if (n) {
          var a = Object.getOwnPropertyDescriptor(n, _t);
          return a.get ? a.get.call(r) : a.value;
        }
      }, t(r, n, a || r);
    }

    e.exports = t;
  }),
      $ = t(function (e) {
    function t(r, n) {
      return e.exports = t = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      }, t(r, n);
    }

    e.exports = t;
  });

  var V = function V(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        writable: !0,
        configurable: !0
      }
    }), t && $(e, t);
  },
      z = function z(e) {
    return e > 327680 && (e = 320 * Math.floor(e / 327680) * 1024), e;
  },
      W = function W() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5242880,
        t = 62914560;
    return e > t && (e = t), z(e);
  },
      J = function (e) {
    function t(e, r, a, i) {
      return n(this, t), B(this, X(t).call(this, e, r, a, i));
    }

    return V(t, j), o(t, [{
      key: "commit",
      value: function value(e) {
        return s(this, void 0, void 0, r.mark(function t() {
          var n;
          return r.wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  return t.prev = 0, n = {
                    name: this.file.name,
                    "@microsoft.graph.conflictBehavior": "rename",
                    "@microsoft.graph.sourceUrl": this.uploadSession.url
                  }, t.next = 4, this.client.api(e).put(n);

                case 4:
                  return t.abrupt("return", t.sent);

                case 7:
                  throw t.prev = 7, t.t0 = t["catch"](0), t.t0;

                case 10:
                case "end":
                  return t.stop();
              }
            }
          }, t, this, [[0, 7]]);
        }));
      }
    }], [{
      key: "constructCreateSessionUrl",
      value: function value(e) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.DEFAULT_UPLOAD_PATH;
        return e = e.trim(), "" === (r = r.trim()) && (r = "/"), "/" !== r[0] && (r = "/".concat(r)), "/" !== r[r.length - 1] && (r = "".concat(r, "/")), "/me/drive/root:".concat(r.split("/").map(function (e) {
          return encodeURIComponent(e);
        }).join("/")).concat(encodeURIComponent(e), ":/createUploadSession");
      }
    }, {
      key: "create",
      value: function value(e, n, a) {
        return s(this, void 0, void 0, r.mark(function i() {
          var o, s, u, c, d, h, l, p;
          return r.wrap(function (r) {
            for (;;) {
              switch (r.prev = r.next) {
                case 0:
                  return o = a.fileName, "undefined" != typeof Blob && n instanceof Blob ? (s = new File([n], o), u = s.size) : "undefined" != typeof File && n instanceof File ? u = (s = n).size : "undefined" != typeof Buffer && n instanceof Buffer && (u = (c = n).byteLength - c.byteOffset, s = c.buffer.slice(c.byteOffset, c.byteOffset + c.byteLength)), r.prev = 2, d = t.constructCreateSessionUrl(a.fileName, a.path), r.next = 6, t.createUploadSession(e, d, a.fileName);

                case 6:
                  return h = r.sent, l = W(a.rangeSize), p = {
                    name: o,
                    content: s,
                    size: u
                  }, r.abrupt("return", new t(e, p, h, {
                    rangeSize: l
                  }));

                case 12:
                  throw r.prev = 12, r.t0 = r["catch"](2), r.t0;

                case 15:
                case "end":
                  return r.stop();
              }
            }
          }, i, null, [[2, 12]]);
        }));
      }
    }, {
      key: "createUploadSession",
      value: function value(e, n, a) {
        var i = this,
            o = Object.create(null, {
          createUploadSession: {
            get: function get() {
              return Y(X(t), "createUploadSession", i);
            }
          }
        });
        return s(this, void 0, void 0, r.mark(function t() {
          var i;
          return r.wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  return i = {
                    item: {
                      "@microsoft.graph.conflictBehavior": "rename",
                      name: a
                    }
                  }, t.prev = 1, t.abrupt("return", o.createUploadSession.call(this, e, n, i));

                case 5:
                  throw t.prev = 5, t.t0 = t["catch"](1), t.t0;

                case 8:
                case "end":
                  return t.stop();
              }
            }
          }, t, this, [[1, 5]]);
        }));
      }
    }]), t;
  }();

  J.DEFAULT_UPLOAD_PATH = "/";

  var Z = function () {
    function e(t, r, a, i) {
      n(this, e), this.client = t, this.collection = r.value, this.nextLink = r["@odata.nextLink"], this.deltaLink = r["@odata.deltaLink"], this.callback = a, this.complete = !1, this.requestOptions = i;
    }

    return o(e, [{
      key: "iterationHelper",
      value: function value() {
        if (void 0 === this.collection) return !1;

        for (var e = !0; e && 0 !== this.collection.length;) {
          var t = this.collection.shift();
          e = this.callback(t);
        }

        return e;
      }
    }, {
      key: "fetchAndUpdateNextPageData",
      value: function value() {
        return s(this, void 0, void 0, r.mark(function e() {
          var t, n;
          return r.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  return e.prev = 0, t = this.client.api(this.nextLink), this.requestOptions && (this.requestOptions.headers && (t = t.headers(this.requestOptions.headers)), this.requestOptions.middlewareOptions && (t = t.middlewareOptions(this.requestOptions.middlewareOptions)), this.requestOptions.options && (t = t.options(this.requestOptions.options))), e.next = 5, t.get();

                case 5:
                  n = e.sent, this.collection = n.value, this.nextLink = n["@odata.nextLink"], this.deltaLink = n["@odata.deltaLink"], e.next = 14;
                  break;

                case 11:
                  throw e.prev = 11, e.t0 = e["catch"](0), e.t0;

                case 14:
                case "end":
                  return e.stop();
              }
            }
          }, e, this, [[0, 11]]);
        }));
      }
    }, {
      key: "getDeltaLink",
      value: function value() {
        return this.deltaLink;
      }
    }, {
      key: "iterate",
      value: function value() {
        return s(this, void 0, void 0, r.mark(function e() {
          var t;
          return r.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  e.prev = 0, t = this.iterationHelper();

                case 2:
                  if (!t) {
                    e.next = 12;
                    break;
                  }

                  if (void 0 === this.nextLink) {
                    e.next = 9;
                    break;
                  }

                  return e.next = 6, this.fetchAndUpdateNextPageData();

                case 6:
                  t = this.iterationHelper(), e.next = 10;
                  break;

                case 9:
                  t = !1;

                case 10:
                  e.next = 2;
                  break;

                case 12:
                  void 0 === this.nextLink && 0 === this.collection.length && (this.complete = !0), e.next = 18;
                  break;

                case 15:
                  throw e.prev = 15, e.t0 = e["catch"](0), e.t0;

                case 18:
                case "end":
                  return e.stop();
              }
            }
          }, e, this, [[0, 15]]);
        }));
      }
    }, {
      key: "resume",
      value: function value() {
        return s(this, void 0, void 0, r.mark(function e() {
          return r.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  return e.prev = 0, e.abrupt("return", this.iterate());

                case 4:
                  throw e.prev = 4, e.t0 = e["catch"](0), e.t0;

                case 7:
                case "end":
                  return e.stop();
              }
            }
          }, e, this, [[0, 4]]);
        }));
      }
    }, {
      key: "isComplete",
      value: function value() {
        return this.complete;
      }
    }]), e;
  }(),
      K = t(function (e) {
    function t(r, n, a) {
      return !function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
        } catch (e) {
          return !1;
        }
      }() ? e.exports = t = function t(e, _t2, r) {
        var n = [null];
        n.push.apply(n, _t2);
        var a = new (Function.bind.apply(e, n))();
        return r && $(a, r.prototype), a;
      } : e.exports = t = Reflect.construct, t.apply(null, arguments);
    }

    e.exports = t;
  });

  var ee = function ee(e) {
    if (Array.isArray(e)) {
      for (var t = 0, r = new Array(e.length); t < e.length; t++) {
        r[t] = e[t];
      }

      return r;
    }
  };

  var te = function te(e) {
    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
  };

  var re = function re() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  };

  var ne = function ne(e) {
    return ee(e) || te(e) || re();
  },
      ae = function () {
    function e(t) {
      n(this, e), this.provider = t;
    }

    return o(e, [{
      key: "getAccessToken",
      value: function value() {
        return s(this, void 0, void 0, r.mark(function e() {
          var t = this;
          return r.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  return e.abrupt("return", new Promise(function (e, r) {
                    t.provider(function (t, n) {
                      n ? e(n) : r(t);
                    });
                  }));

                case 1:
                case "end":
                  return e.stop();
              }
            }
          }, e);
        }));
      }
    }]), e;
  }();

  var ie,
      oe,
      se,
      ue,
      ce = function ce(e) {
    return -1 !== Function.toString.call(e).indexOf("[native code]");
  },
      de = function (e) {
    function t() {
      var e,
          r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1,
          a = arguments.length > 1 ? arguments[1] : void 0,
          i = arguments.length > 2 ? arguments[2] : void 0;
      return n(this, t), e = B(this, X(t).call(this, a || i && i.message)), Object.setPrototypeOf(Q(e), t.prototype), e.statusCode = r, e.code = null, e.requestId = null, e.date = new Date(), e.body = null, e.stack = i ? i.stack : e.stack, e;
    }

    return V(t, e), t;
  }(t(function (e) {
    function t(r) {
      var n = "function" == typeof Map ? new Map() : void 0;
      return e.exports = t = function t(e) {
        if (null === e || !ce(e)) return e;
        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");

        if (void 0 !== n) {
          if (n.has(e)) return n.get(e);
          n.set(e, t);
        }

        function t() {
          return K(e, arguments, X(this).constructor);
        }

        return t.prototype = Object.create(e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), $(t, e);
      }, t(r);
    }

    e.exports = t;
  })(Error)),
      he = function () {
    function e() {
      n(this, e);
    }

    return o(e, null, [{
      key: "constructError",
      value: function value(e, t) {
        var r = new de(t, "", e);
        return void 0 !== e.name && (r.code = e.name), r.body = e.toString(), r.date = new Date(), r;
      }
    }, {
      key: "constructErrorFromResponse",
      value: function value(e, t) {
        e = e.error;
        var r = new de(t, e.message);
        r.code = e.code, void 0 !== e.innerError && (r.requestId = e.innerError["request-id"], r.date = new Date(e.innerError.date));

        try {
          r.body = JSON.stringify(e);
        } catch (e) {}

        return r;
      }
    }, {
      key: "getError",
      value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
            a = arguments.length > 2 ? arguments[2] : void 0;
        return s(this, void 0, void 0, r.mark(function i() {
          var o;
          return r.wrap(function (r) {
            for (;;) {
              switch (r.prev = r.next) {
                case 0:
                  if (o = t && t.error ? e.constructErrorFromResponse(t, n) : "undefined" != typeof Error && t instanceof Error ? e.constructError(t, n) : new de(n), "function" != typeof a) {
                    r.next = 5;
                    break;
                  }

                  a(o, null), r.next = 6;
                  break;

                case 5:
                  return r.abrupt("return", o);

                case 6:
                case "end":
                  return r.stop();
              }
            }
          }, i);
        }));
      }
    }]), e;
  }();

  (ie = e.ResponseType || (e.ResponseType = {})).ARRAYBUFFER = "arraybuffer", ie.BLOB = "blob", ie.DOCUMENT = "document", ie.JSON = "json", ie.RAW = "raw", ie.STREAM = "stream", ie.TEXT = "text", function (e) {
    e.TEXT_HTML = "text/html", e.TEXT_XML = "text/xml", e.APPLICATION_XML = "application/xml", e.APPLICATION_XHTML = "application/xhtml+xml";
  }(oe || (oe = {})), function (e) {
    e.TEXT_PLAIN = "text/plain", e.APPLICATION_JSON = "application/json";
  }(se || (se = {})), function (e) {
    e.DOCUMENT = "^(text\\/(html|xml))|(application\\/(xml|xhtml\\+xml))$", e.IMAGE = "^image\\/.+";
  }(ue || (ue = {}));

  var le = function () {
    function t() {
      n(this, t);
    }

    return o(t, null, [{
      key: "parseDocumentResponse",
      value: function value(e, t) {
        try {
          return "undefined" != typeof DOMParser ? new Promise(function (r, n) {
            e.text().then(function (e) {
              try {
                var a = new DOMParser().parseFromString(e, t);
                r(a);
              } catch (e) {
                n(e);
              }
            });
          }) : Promise.resolve(e.body);
        } catch (e) {
          throw e;
        }
      }
    }, {
      key: "convertResponse",
      value: function value(n, a) {
        return s(this, void 0, void 0, r.mark(function i() {
          var o, s, u;
          return r.wrap(function (r) {
            for (;;) {
              switch (r.prev = r.next) {
                case 0:
                  if (204 !== n.status) {
                    r.next = 2;
                    break;
                  }

                  return r.abrupt("return", Promise.resolve());

                case 2:
                  r.prev = 2, r.t0 = a, r.next = r.t0 === e.ResponseType.ARRAYBUFFER ? 6 : r.t0 === e.ResponseType.BLOB ? 10 : r.t0 === e.ResponseType.DOCUMENT ? 14 : r.t0 === e.ResponseType.JSON ? 18 : r.t0 === e.ResponseType.STREAM ? 22 : r.t0 === e.ResponseType.TEXT ? 26 : 30;
                  break;

                case 6:
                  return r.next = 8, n.arrayBuffer();

                case 8:
                  return o = r.sent, r.abrupt("break", 60);

                case 10:
                  return r.next = 12, n.blob();

                case 12:
                  return o = r.sent, r.abrupt("break", 60);

                case 14:
                  return r.next = 16, t.parseDocumentResponse(n, oe.TEXT_XML);

                case 16:
                  return o = r.sent, r.abrupt("break", 60);

                case 18:
                  return r.next = 20, n.json();

                case 20:
                  return o = r.sent, r.abrupt("break", 60);

                case 22:
                  return r.next = 24, Promise.resolve(n.body);

                case 24:
                  return o = r.sent, r.abrupt("break", 60);

                case 26:
                  return r.next = 28, n.text();

                case 28:
                  return o = r.sent, r.abrupt("break", 60);

                case 30:
                  if (null === (s = n.headers.get("Content-type"))) {
                    r.next = 58;
                    break;
                  }

                  if (u = s.split(";")[0], !new RegExp(ue.DOCUMENT).test(u)) {
                    r.next = 39;
                    break;
                  }

                  return r.next = 36, t.parseDocumentResponse(n, u);

                case 36:
                  o = r.sent, r.next = 56;
                  break;

                case 39:
                  if (!new RegExp(ue.IMAGE).test(u)) {
                    r.next = 43;
                    break;
                  }

                  o = n.blob(), r.next = 56;
                  break;

                case 43:
                  if (u !== se.TEXT_PLAIN) {
                    r.next = 49;
                    break;
                  }

                  return r.next = 46, n.text();

                case 46:
                  o = r.sent, r.next = 56;
                  break;

                case 49:
                  if (u !== se.APPLICATION_JSON) {
                    r.next = 55;
                    break;
                  }

                  return r.next = 52, n.json();

                case 52:
                  o = r.sent, r.next = 56;
                  break;

                case 55:
                  o = Promise.resolve(n.body);

                case 56:
                  r.next = 59;
                  break;

                case 58:
                  o = Promise.resolve(n.body);

                case 59:
                  return r.abrupt("break", 60);

                case 60:
                  r.next = 65;
                  break;

                case 62:
                  throw r.prev = 62, r.t1 = r["catch"](2), r.t1;

                case 65:
                  return r.abrupt("return", o);

                case 66:
                case "end":
                  return r.stop();
              }
            }
          }, i, null, [[2, 62]]);
        }));
      }
    }, {
      key: "getResponse",
      value: function value(n, a, i) {
        return s(this, void 0, void 0, r.mark(function o() {
          var s;
          return r.wrap(function (r) {
            for (;;) {
              switch (r.prev = r.next) {
                case 0:
                  if (r.prev = 0, a !== e.ResponseType.RAW) {
                    r.next = 5;
                    break;
                  }

                  return r.abrupt("return", Promise.resolve(n));

                case 5:
                  return r.next = 7, t.convertResponse(n, a);

                case 7:
                  if (s = r.sent, !n.ok) {
                    r.next = 16;
                    break;
                  }

                  if ("function" != typeof i) {
                    r.next = 13;
                    break;
                  }

                  i(null, s), r.next = 14;
                  break;

                case 13:
                  return r.abrupt("return", s);

                case 14:
                  r.next = 17;
                  break;

                case 16:
                  throw s;

                case 17:
                  r.next = 22;
                  break;

                case 19:
                  throw r.prev = 19, r.t0 = r["catch"](0), r.t0;

                case 22:
                case "end":
                  return r.stop();
              }
            }
          }, o, null, [[0, 19]]);
        }));
      }
    }]), t;
  }(),
      pe = function () {
    function t(e, r, a) {
      var i = this;
      n(this, t), this.parsePath = function (e) {
        if (-1 !== e.indexOf("https://")) {
          var t = (e = e.replace("https://", "")).indexOf("/");
          -1 !== t && (i.urlComponents.host = "https://" + e.substring(0, t), e = e.substring(t + 1, e.length));
          var r = e.indexOf("/");
          -1 !== r && (i.urlComponents.version = e.substring(0, r), e = e.substring(r + 1, e.length));
        }

        "/" === e.charAt(0) && (e = e.substr(1));
        var n = e.indexOf("?");
        if (-1 === n) i.urlComponents.path = e;else {
          i.urlComponents.path = e.substr(0, n);
          var a = e.substring(n + 1, e.length).split("&"),
              o = !0,
              s = !1,
              u = void 0;

          try {
            for (var c, d = a[Symbol.iterator](); !(o = (c = d.next()).done); o = !0) {
              var h = c.value;
              i.parseQueryParameter(h);
            }
          } catch (e) {
            s = !0, u = e;
          } finally {
            try {
              o || null == d["return"] || d["return"]();
            } finally {
              if (s) throw u;
            }
          }
        }
      }, this.httpClient = e, this.config = r, this.urlComponents = {
        host: this.config.baseUrl,
        version: this.config.defaultVersion,
        oDataQueryParams: {},
        otherURLQueryParams: {},
        otherURLQueryOptions: []
      }, this._headers = {}, this._options = {}, this._middlewareOptions = [], this.parsePath(a);
    }

    return o(t, [{
      key: "addCsvQueryParameter",
      value: function value(e, t, r) {
        this.urlComponents.oDataQueryParams[e] = this.urlComponents.oDataQueryParams[e] ? this.urlComponents.oDataQueryParams[e] + "," : "";
        var n = [];
        r.length > 1 && "string" == typeof t ? n = Array.prototype.slice.call(r) : "string" == typeof t ? n.push(t) : n = n.concat(t), this.urlComponents.oDataQueryParams[e] += n.join(",");
      }
    }, {
      key: "buildFullUrl",
      value: function value() {
        var e,
            t,
            r = (e = [this.urlComponents.host, this.urlComponents.version, this.urlComponents.path], t = function t(e) {
          return e.replace(/^\/+/, "");
        }, Array.prototype.slice.call(e).reduce(function (e, r) {
          return [(n = e, n.replace(/\/+$/, "")), t(r)].join("/");
          var n;
        }) + this.createQueryString());
        return this.config.debugLogging && console.log(r), r;
      }
    }, {
      key: "createQueryString",
      value: function value() {
        var e = this.urlComponents,
            t = [];
        if (0 !== Object.keys(e.oDataQueryParams).length) for (var r in e.oDataQueryParams) {
          e.oDataQueryParams.hasOwnProperty(r) && t.push(r + "=" + e.oDataQueryParams[r]);
        }
        if (0 !== Object.keys(e.otherURLQueryParams).length) for (var n in e.otherURLQueryParams) {
          e.otherURLQueryParams.hasOwnProperty(n) && t.push(n + "=" + e.otherURLQueryParams[n]);
        }

        if (0 !== e.otherURLQueryOptions.length) {
          var a = !0,
              i = !1,
              o = void 0;

          try {
            for (var s, u = e.otherURLQueryOptions[Symbol.iterator](); !(a = (s = u.next()).done); a = !0) {
              var c = s.value;
              t.push(c);
            }
          } catch (e) {
            i = !0, o = e;
          } finally {
            try {
              a || null == u["return"] || u["return"]();
            } finally {
              if (i) throw o;
            }
          }
        }

        return t.length > 0 ? "?" + t.join("&") : "";
      }
    }, {
      key: "parseQueryParameter",
      value: function value(e) {
        if ("string" == typeof e) {
          if ("?" === e.charAt(0) && (e = e.substring(1)), -1 !== e.indexOf("&")) {
            var t = e.split("&"),
                r = !0,
                n = !1,
                a = void 0;

            try {
              for (var i, o = t[Symbol.iterator](); !(r = (i = o.next()).done); r = !0) {
                var s = i.value;
                this.parseQueryParamenterString(s);
              }
            } catch (e) {
              n = !0, a = e;
            } finally {
              try {
                r || null == o["return"] || o["return"]();
              } finally {
                if (n) throw a;
              }
            }
          } else this.parseQueryParamenterString(e);
        } else if (e.constructor === Object) for (var u in e) {
          e.hasOwnProperty(u) && this.setURLComponentsQueryParamater(u, e[u]);
        }
        return this;
      }
    }, {
      key: "parseQueryParamenterString",
      value: function value(e) {
        if (this.isValidQueryKeyValuePair(e)) {
          var t = e.indexOf("="),
              r = e.substring(0, t),
              n = e.substring(t + 1);
          this.setURLComponentsQueryParamater(r, n);
        } else this.urlComponents.otherURLQueryOptions.push(e);
      }
    }, {
      key: "setURLComponentsQueryParamater",
      value: function value(e, t) {
        if (-1 !== A.indexOf(e)) {
          var r = this.urlComponents.oDataQueryParams[e],
              n = r && ("$expand" === e || "$select" === e || "$orderby" === e);
          this.urlComponents.oDataQueryParams[e] = n ? r + "," + t : t;
        } else this.urlComponents.otherURLQueryParams[e] = t;
      }
    }, {
      key: "isValidQueryKeyValuePair",
      value: function value(e) {
        var t = e.indexOf("=");
        return -1 !== t && !(-1 !== e.indexOf("(") && e.indexOf("(") < t);
      }
    }, {
      key: "updateRequestOptions",
      value: function value(e) {
        var t = Object.assign({}, e.headers);

        if (void 0 !== this.config.fetchOptions) {
          var r = Object.assign({}, this.config.fetchOptions);
          Object.assign(e, r), void 0 !== S(this.config.fetchOptions.headers) && (e.headers = Object.assign({}, this.config.fetchOptions.headers));
        }

        Object.assign(e, this._options), void 0 !== e.headers && Object.assign(t, e.headers), Object.assign(t, this._headers), e.headers = t;
      }
    }, {
      key: "send",
      value: function value(e, t, n) {
        return s(this, void 0, void 0, r.mark(function a() {
          var i, o, s, u, c;
          return r.wrap(function (r) {
            for (;;) {
              switch (r.prev = r.next) {
                case 0:
                  return o = new d(this._middlewareOptions), this.updateRequestOptions(t), r.prev = 2, r.next = 5, this.httpClient.sendRequest({
                    request: e,
                    options: t,
                    middlewareControl: o
                  });

                case 5:
                  return s = r.sent, i = s.response, r.next = 9, le.getResponse(i, this._responseType, n);

                case 9:
                  return u = r.sent, r.abrupt("return", u);

                case 13:
                  return r.prev = 13, r.t0 = r["catch"](2), void 0 !== i && (c = i.status), r.next = 18, he.getError(r.t0, c, n);

                case 18:
                  throw r.sent;

                case 20:
                case "end":
                  return r.stop();
              }
            }
          }, a, this, [[2, 13]]);
        }));
      }
    }, {
      key: "setHeaderContentType",
      value: function value() {
        if (this._headers) {
          for (var e = 0, t = Object.keys(this._headers); e < t.length; e++) {
            if ("content-type" === t[e].toLowerCase()) return;
          }

          this.header("Content-Type", "application/json");
        } else this.header("Content-Type", "application/json");
      }
    }, {
      key: "header",
      value: function value(e, t) {
        return this._headers[e] = t, this;
      }
    }, {
      key: "headers",
      value: function value(e) {
        for (var t in e) {
          e.hasOwnProperty(t) && (this._headers[t] = e[t]);
        }

        return this;
      }
    }, {
      key: "option",
      value: function value(e, t) {
        return this._options[e] = t, this;
      }
    }, {
      key: "options",
      value: function value(e) {
        for (var t in e) {
          e.hasOwnProperty(t) && (this._options[t] = e[t]);
        }

        return this;
      }
    }, {
      key: "middlewareOptions",
      value: function value(e) {
        return this._middlewareOptions = e, this;
      }
    }, {
      key: "version",
      value: function value(e) {
        return this.urlComponents.version = e, this;
      }
    }, {
      key: "responseType",
      value: function value(e) {
        return this._responseType = e, this;
      }
    }, {
      key: "select",
      value: function value(e) {
        return this.addCsvQueryParameter("$select", e, arguments), this;
      }
    }, {
      key: "expand",
      value: function value(e) {
        return this.addCsvQueryParameter("$expand", e, arguments), this;
      }
    }, {
      key: "orderby",
      value: function value(e) {
        return this.addCsvQueryParameter("$orderby", e, arguments), this;
      }
    }, {
      key: "filter",
      value: function value(e) {
        return this.urlComponents.oDataQueryParams.$filter = e, this;
      }
    }, {
      key: "search",
      value: function value(e) {
        return this.urlComponents.oDataQueryParams.$search = e, this;
      }
    }, {
      key: "top",
      value: function value(e) {
        return this.urlComponents.oDataQueryParams.$top = e, this;
      }
    }, {
      key: "skip",
      value: function value(e) {
        return this.urlComponents.oDataQueryParams.$skip = e, this;
      }
    }, {
      key: "skipToken",
      value: function value(e) {
        return this.urlComponents.oDataQueryParams.$skipToken = e, this;
      }
    }, {
      key: "count",
      value: function value() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return this.urlComponents.oDataQueryParams.$count = e.toString(), this;
      }
    }, {
      key: "query",
      value: function value(e) {
        return this.parseQueryParameter(e);
      }
    }, {
      key: "get",
      value: function value(e) {
        return s(this, void 0, void 0, r.mark(function t() {
          var n, a, o;
          return r.wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  return n = this.buildFullUrl(), a = {
                    method: i.GET
                  }, t.prev = 2, t.next = 5, this.send(n, a, e);

                case 5:
                  return o = t.sent, t.abrupt("return", o);

                case 9:
                  throw t.prev = 9, t.t0 = t["catch"](2), t.t0;

                case 12:
                case "end":
                  return t.stop();
              }
            }
          }, t, this, [[2, 9]]);
        }));
      }
    }, {
      key: "post",
      value: function value(e, t) {
        return s(this, void 0, void 0, r.mark(function n() {
          var a, o, s;
          return r.wrap(function (r) {
            for (;;) {
              switch (r.prev = r.next) {
                case 0:
                  return a = this.buildFullUrl(), o = {
                    method: i.POST,
                    body: D(e)
                  }, "FormData" === (e && e.constructor && e.constructor.name) ? o.headers = {} : (this.setHeaderContentType(), o.headers = this._headers), r.prev = 4, r.next = 7, this.send(a, o, t);

                case 7:
                  return s = r.sent, r.abrupt("return", s);

                case 11:
                  throw r.prev = 11, r.t0 = r["catch"](4), r.t0;

                case 14:
                case "end":
                  return r.stop();
              }
            }
          }, n, this, [[4, 11]]);
        }));
      }
    }, {
      key: "create",
      value: function value(e, t) {
        return s(this, void 0, void 0, r.mark(function n() {
          return r.wrap(function (r) {
            for (;;) {
              switch (r.prev = r.next) {
                case 0:
                  return r.prev = 0, r.next = 3, this.post(e, t);

                case 3:
                  return r.abrupt("return", r.sent);

                case 6:
                  throw r.prev = 6, r.t0 = r["catch"](0), r.t0;

                case 9:
                case "end":
                  return r.stop();
              }
            }
          }, n, this, [[0, 6]]);
        }));
      }
    }, {
      key: "put",
      value: function value(e, t) {
        return s(this, void 0, void 0, r.mark(function n() {
          var a, o, s;
          return r.wrap(function (r) {
            for (;;) {
              switch (r.prev = r.next) {
                case 0:
                  return a = this.buildFullUrl(), this.setHeaderContentType(), o = {
                    method: i.PUT,
                    body: D(e)
                  }, r.prev = 3, r.next = 6, this.send(a, o, t);

                case 6:
                  return s = r.sent, r.abrupt("return", s);

                case 10:
                  throw r.prev = 10, r.t0 = r["catch"](3), r.t0;

                case 13:
                case "end":
                  return r.stop();
              }
            }
          }, n, this, [[3, 10]]);
        }));
      }
    }, {
      key: "patch",
      value: function value(e, t) {
        return s(this, void 0, void 0, r.mark(function n() {
          var a, o, s;
          return r.wrap(function (r) {
            for (;;) {
              switch (r.prev = r.next) {
                case 0:
                  return a = this.buildFullUrl(), this.setHeaderContentType(), o = {
                    method: i.PATCH,
                    body: D(e)
                  }, r.prev = 3, r.next = 6, this.send(a, o, t);

                case 6:
                  return s = r.sent, r.abrupt("return", s);

                case 10:
                  throw r.prev = 10, r.t0 = r["catch"](3), r.t0;

                case 13:
                case "end":
                  return r.stop();
              }
            }
          }, n, this, [[3, 10]]);
        }));
      }
    }, {
      key: "update",
      value: function value(e, t) {
        return s(this, void 0, void 0, r.mark(function n() {
          return r.wrap(function (r) {
            for (;;) {
              switch (r.prev = r.next) {
                case 0:
                  return r.prev = 0, r.next = 3, this.patch(e, t);

                case 3:
                  return r.abrupt("return", r.sent);

                case 6:
                  throw r.prev = 6, r.t0 = r["catch"](0), r.t0;

                case 9:
                case "end":
                  return r.stop();
              }
            }
          }, n, this, [[0, 6]]);
        }));
      }
    }, {
      key: "delete",
      value: function value(e) {
        return s(this, void 0, void 0, r.mark(function t() {
          var n, a, o;
          return r.wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  return n = this.buildFullUrl(), a = {
                    method: i.DELETE
                  }, t.prev = 2, t.next = 5, this.send(n, a, e);

                case 5:
                  return o = t.sent, t.abrupt("return", o);

                case 9:
                  throw t.prev = 9, t.t0 = t["catch"](2), t.t0;

                case 12:
                case "end":
                  return t.stop();
              }
            }
          }, t, this, [[2, 9]]);
        }));
      }
    }, {
      key: "del",
      value: function value(e) {
        return s(this, void 0, void 0, r.mark(function t() {
          return r.wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  return t.prev = 0, t.next = 3, this["delete"](e);

                case 3:
                  return t.abrupt("return", t.sent);

                case 6:
                  throw t.prev = 6, t.t0 = t["catch"](0), t.t0;

                case 9:
                case "end":
                  return t.stop();
              }
            }
          }, t, this, [[0, 6]]);
        }));
      }
    }, {
      key: "getStream",
      value: function value(t) {
        return s(this, void 0, void 0, r.mark(function n() {
          var a, o, s;
          return r.wrap(function (r) {
            for (;;) {
              switch (r.prev = r.next) {
                case 0:
                  return a = this.buildFullUrl(), o = {
                    method: i.GET
                  }, this.responseType(e.ResponseType.STREAM), r.prev = 3, r.next = 6, this.send(a, o, t);

                case 6:
                  return s = r.sent, r.abrupt("return", s);

                case 10:
                  throw r.prev = 10, r.t0 = r["catch"](3), r.t0;

                case 13:
                case "end":
                  return r.stop();
              }
            }
          }, n, this, [[3, 10]]);
        }));
      }
    }, {
      key: "putStream",
      value: function value(e, t) {
        return s(this, void 0, void 0, r.mark(function n() {
          var a, o, s;
          return r.wrap(function (r) {
            for (;;) {
              switch (r.prev = r.next) {
                case 0:
                  return a = this.buildFullUrl(), o = {
                    method: i.PUT,
                    headers: {
                      "Content-Type": "application/octet-stream"
                    },
                    body: e
                  }, r.prev = 2, r.next = 5, this.send(a, o, t);

                case 5:
                  return s = r.sent, r.abrupt("return", s);

                case 9:
                  throw r.prev = 9, r.t0 = r["catch"](2), r.t0;

                case 12:
                case "end":
                  return r.stop();
              }
            }
          }, n, this, [[2, 9]]);
        }));
      }
    }]), t;
  }(),
      fe = function () {
    function e() {
      for (var t = arguments.length, r = new Array(t), a = 0; a < t; a++) {
        r[a] = arguments[a];
      }

      if (n(this, e), !r || !r.length) {
        var i = new Error();
        throw i.name = "InvalidMiddlewareChain", i.message = "Please provide a default middleware chain or custom middleware chain", i;
      }

      this.setMiddleware.apply(this, r);
    }

    return o(e, [{
      key: "setMiddleware",
      value: function value() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
          t[r] = arguments[r];
        }

        t.length > 1 ? this.parseMiddleWareArray(t) : this.middleware = t[0];
      }
    }, {
      key: "parseMiddleWareArray",
      value: function value(e) {
        e.forEach(function (t, r) {
          r < e.length - 1 && t.setNext(e[r + 1]);
        }), this.middleware = e[0];
      }
    }, {
      key: "sendRequest",
      value: function value(e) {
        return s(this, void 0, void 0, r.mark(function t() {
          var n;
          return r.wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  if (t.prev = 0, "string" != typeof e.request || void 0 !== e.options) {
                    t.next = 6;
                    break;
                  }

                  throw (n = new Error()).name = "InvalidRequestOptions", n.message = "Unable to execute the middleware, Please provide valid options for a request", n;

                case 6:
                  return t.next = 8, this.middleware.execute(e);

                case 8:
                  return t.abrupt("return", e);

                case 11:
                  throw t.prev = 11, t.t0 = t["catch"](0), t.t0;

                case 14:
                case "end":
                  return t.stop();
              }
            }
          }, t, this, [[0, 11]]);
        }));
      }
    }]), e;
  }(),
      ve = function () {
    function e() {
      n(this, e);
    }

    return o(e, null, [{
      key: "createWithAuthenticationProvider",
      value: function value(t) {
        var r = new g(t),
            n = new k(new b()),
            a = new P(),
            i = new E();

        if (r.setNext(n), "object" === ("undefined" == typeof process ? "undefined" : S(process)) && "function" == typeof require) {
          var o = new C(new _());
          n.setNext(o), o.setNext(a);
        } else n.setNext(a);

        return a.setNext(i), e.createWithMiddleware(r);
      }
    }, {
      key: "createWithMiddleware",
      value: function value() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
          t[r] = arguments[r];
        }

        return K(fe, t);
      }
    }]), e;
  }(),
      ye = function ye() {
    if ("undefined" == typeof Promise && "undefined" == typeof fetch) {
      var e = new Error("Library cannot function without Promise and fetch. So, please provide polyfill for them.");
      throw e.name = "PolyFillNotAvailable", e;
    }

    if ("undefined" == typeof Promise) {
      var t = new Error("Library cannot function without Promise. So, please provide polyfill for it.");
      throw t.name = "PolyFillNotAvailable", t;
    }

    if ("undefined" == typeof fetch) {
      var r = new Error("Library cannot function without fetch. So, please provide polyfill for it.");
      throw r.name = "PolyFillNotAvailable", r;
    }

    return !0;
  },
      me = function () {
    function e(t) {
      n(this, e), this.config = {
        baseUrl: O,
        debugLogging: !1,
        defaultVersion: R
      };

      try {
        ye();
      } catch (i) {
        throw i;
      }

      for (var r in t) {
        t.hasOwnProperty(r) && (this.config[r] = t[r]);
      }

      var a;

      if (void 0 !== t.authProvider && void 0 !== t.middleware) {
        var i = new Error();
        throw i.name = "AmbiguityInInitialization", i.message = "Unable to Create Client, Please provide either authentication provider for default middleware chain or custom middleware chain not both", i;
      }

      if (void 0 !== t.authProvider) a = ve.createWithAuthenticationProvider(t.authProvider);else {
        if (void 0 === t.middleware) {
          var o = new Error();
          throw o.name = "InvalidMiddlewareChain", o.message = "Unable to Create Client, Please provide either authentication provider for default middleware chain or custom middleware chain", o;
        }

        a = K(fe, ne([].concat(t.middleware)));
      }
      this.httpClient = a;
    }

    return o(e, [{
      key: "api",
      value: function value(e) {
        return new pe(this.httpClient, this.config, e);
      }
    }], [{
      key: "init",
      value: function value(t) {
        var r = {};

        for (var n in t) {
          t.hasOwnProperty(n) && (r[n] = "authProvider" === n ? new ae(t[n]) : t[n]);
        }

        return e.initWithMiddleware(r);
      }
    }, {
      key: "initWithMiddleware",
      value: function value(t) {
        try {
          return new e(t);
        } catch (e) {
          throw e;
        }
      }
    }]), e;
  }(),
      we = function () {
    function e(t, r) {
      n(this, e), this.options = r, this.msalApplication = t;
    }

    return o(e, [{
      key: "getAccessToken",
      value: function value(e) {
        return s(this, void 0, void 0, r.mark(function t() {
          var n, a, i, o, s, u, c, d;
          return r.wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  if (void 0 !== (n = e) && (a = n.scopes), void 0 !== a && 0 !== a.length || (a = this.options.scopes), 0 !== a.length) {
                    t.next = 8;
                    break;
                  }

                  throw (i = new Error()).name = "EmptyScopes", i.message = "Scopes cannot be empty, Please provide a scopes", i;

                case 8:
                  if (!this.msalApplication.getAccount()) {
                    t.next = 35;
                    break;
                  }

                  return o = {
                    scopes: a
                  }, t.prev = 10, t.next = 13, this.msalApplication.acquireTokenSilent(o);

                case 13:
                  return s = t.sent, t.abrupt("return", s.accessToken);

                case 17:
                  if (t.prev = 17, t.t0 = t["catch"](10), "InteractionRequiredAuthError" !== t.t0.name) {
                    t.next = 32;
                    break;
                  }

                  return t.prev = 20, t.next = 23, this.msalApplication.acquireTokenPopup(o);

                case 23:
                  return u = t.sent, t.abrupt("return", u.accessToken);

                case 27:
                  throw t.prev = 27, t.t1 = t["catch"](20), t.t1;

                case 30:
                  t.next = 33;
                  break;

                case 32:
                  throw t.t0;

                case 33:
                  t.next = 48;
                  break;

                case 35:
                  return t.prev = 35, c = {
                    scopes: a
                  }, t.next = 39, this.msalApplication.loginPopup(c);

                case 39:
                  return t.next = 41, this.msalApplication.acquireTokenSilent(c);

                case 41:
                  return d = t.sent, t.abrupt("return", d.accessToken);

                case 45:
                  throw t.prev = 45, t.t2 = t["catch"](35), t.t2;

                case 48:
                case "end":
                  return t.stop();
              }
            }
          }, t, this, [[10, 17], [20, 27], [35, 45]]);
        }));
      }
    }]), e;
  }();

  return e.AuthenticationHandler = g, e.AuthenticationHandlerOptions = w, e.BatchRequestContent = u, e.BatchResponseContent = c, e.ChaosHandler = F, e.ChaosHandlerOptions = N, e.Client = me, e.CustomAuthenticationProvider = ae, e.GraphError = de, e.GraphRequest = pe, e.HTTPMessageHandler = E, e.ImplicitMSALAuthenticationProvider = we, e.LargeFileUploadTask = j, e.MSALAuthenticationProviderOptions = function e(t) {
    n(this, e), this.scopes = t;
  }, e.MiddlewareFactory = U, e.OneDriveLargeFileUploadTask = J, e.PageIterator = Z, e.RetryHandler = k, e.RetryHandlerOptions = b, e.TelemetryHandler = P, e.TelemetryHandlerOptions = x, e;
}({});