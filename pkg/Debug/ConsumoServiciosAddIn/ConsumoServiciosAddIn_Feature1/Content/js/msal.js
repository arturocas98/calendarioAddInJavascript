/*! @azure/msal-browser v2.1.0 2020-08-25 */
"use strict";
!(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(((e = e || self).msal = {}));
})(this, function (o) {
    var n = function (e, t) {
        return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                    e.__proto__ = t;
                }) ||
            function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
    };
    function e(e, t) {
        function r() {
            this.constructor = e;
        }
        n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
    }
    var f = function () {
        return (f =
            Object.assign ||
            function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++) for (var o in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
            }).apply(this, arguments);
    };
    function l(i, a, c, s) {
        return new (c = c || Promise)(function (e, t) {
            function r(e) {
                try {
                    o(s.next(e));
                } catch (e) {
                    t(e);
                }
            }
            function n(e) {
                try {
                    o(s.throw(e));
                } catch (e) {
                    t(e);
                }
            }
            function o(t) {
                t.done
                    ? e(t.value)
                    : new c(function (e) {
                          e(t.value);
                      }).then(r, n);
            }
            o((s = s.apply(i, a || [])).next());
        });
    }
    function y(r, n) {
        var o,
            i,
            a,
            e,
            c = {
                label: 0,
                sent: function () {
                    if (1 & a[0]) throw a[1];
                    return a[1];
                },
                trys: [],
                ops: [],
            };
        return (
            (e = { next: t(0), throw: t(1), return: t(2) }),
            "function" == typeof Symbol &&
                (e[Symbol.iterator] = function () {
                    return this;
                }),
            e
        );
        function t(t) {
            return function (e) {
                return (function (t) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; c; )
                        try {
                            if (((o = 1), i && (a = 2 & t[0] ? i.return : t[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, t[1])).done)) return a;
                            switch (((i = 0), a && (t = [2 & t[0], a.value]), t[0])) {
                                case 0:
                                case 1:
                                    a = t;
                                    break;
                                case 4:
                                    return c.label++, { value: t[1], done: !1 };
                                case 5:
                                    c.label++, (i = t[1]), (t = [0]);
                                    continue;
                                case 7:
                                    (t = c.ops.pop()), c.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = c.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        c = 0;
                                        continue;
                                    }
                                    if (3 === t[0] && (!a || (t[1] > a[0] && t[1] < a[3]))) {
                                        c.label = t[1];
                                        break;
                                    }
                                    if (6 === t[0] && c.label < a[1]) {
                                        (c.label = a[1]), (a = t);
                                        break;
                                    }
                                    if (a && c.label < a[2]) {
                                        (c.label = a[2]), c.ops.push(t);
                                        break;
                                    }
                                    a[2] && c.ops.pop(), c.trys.pop();
                                    continue;
                            }
                            t = n.call(r, c);
                        } catch (e) {
                            (t = [6, e]), (i = 0);
                        } finally {
                            o = a = 0;
                        }
                    if (5 & t[0]) throw t[1];
                    return { value: t[0] ? t[1] : void 0, done: !0 };
                })([t, e]);
            };
        }
    }
    var i = function (e, t) {
        return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                    e.__proto__ = t;
                }) ||
            function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
    };
    function t(e, t) {
        function r() {
            this.constructor = e;
        }
        i(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
    }
    var p = function () {
        return (p =
            Object.assign ||
            function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++) for (var o in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
            }).apply(this, arguments);
    };
    function h(i, a, c, s) {
        return new (c = c || Promise)(function (e, t) {
            function r(e) {
                try {
                    o(s.next(e));
                } catch (e) {
                    t(e);
                }
            }
            function n(e) {
                try {
                    o(s.throw(e));
                } catch (e) {
                    t(e);
                }
            }
            function o(t) {
                t.done
                    ? e(t.value)
                    : new c(function (e) {
                          e(t.value);
                      }).then(r, n);
            }
            o((s = s.apply(i, a || [])).next());
        });
    }
    function m(r, n) {
        var o,
            i,
            a,
            e,
            c = {
                label: 0,
                sent: function () {
                    if (1 & a[0]) throw a[1];
                    return a[1];
                },
                trys: [],
                ops: [],
            };
        return (
            (e = { next: t(0), throw: t(1), return: t(2) }),
            "function" == typeof Symbol &&
                (e[Symbol.iterator] = function () {
                    return this;
                }),
            e
        );
        function t(t) {
            return function (e) {
                return (function (t) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; c; )
                        try {
                            if (((o = 1), i && (a = 2 & t[0] ? i.return : t[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, t[1])).done)) return a;
                            switch (((i = 0), a && (t = [2 & t[0], a.value]), t[0])) {
                                case 0:
                                case 1:
                                    a = t;
                                    break;
                                case 4:
                                    return c.label++, { value: t[1], done: !1 };
                                case 5:
                                    c.label++, (i = t[1]), (t = [0]);
                                    continue;
                                case 7:
                                    (t = c.ops.pop()), c.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = c.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        c = 0;
                                        continue;
                                    }
                                    if (3 === t[0] && (!a || (t[1] > a[0] && t[1] < a[3]))) {
                                        c.label = t[1];
                                        break;
                                    }
                                    if (6 === t[0] && c.label < a[1]) {
                                        (c.label = a[1]), (a = t);
                                        break;
                                    }
                                    if (a && c.label < a[2]) {
                                        (c.label = a[2]), c.ops.push(t);
                                        break;
                                    }
                                    a[2] && c.ops.pop(), c.trys.pop();
                                    continue;
                            }
                            t = n.call(r, c);
                        } catch (e) {
                            (t = [6, e]), (i = 0);
                        } finally {
                            o = a = 0;
                        }
                    if (5 & t[0]) throw t[1];
                    return { value: t[0] ? t[1] : void 0, done: !0 };
                })([t, e]);
            };
        }
    }
    var a,
        r = { unexpectedError: { code: "unexpected_error", desc: "Unexpected error in authentication." } },
        c =
            (t(s, (a = Error)),
            (s.createUnexpectedError = function (e) {
                return new s(r.unexpectedError.code, r.unexpectedError.desc + ": " + e);
            }),
            s);
    function s(e, t) {
        var r = this,
            n = t ? e + ": " + t : e;
        return (r = a.call(this, n) || this), Object.setPrototypeOf(r, s.prototype), (r.errorCode = e), (r.errorMessage = t), (r.name = "AuthError"), r;
    }
    var u,
        d = "1.2.0",
        g = d,
        E = { code: "client_info_decoding_error", desc: "The client info could not be parsed/decoded correctly. Please review the trace to determine the root cause." },
        v = { code: "client_info_empty_error", desc: "The client info was empty. Please review the trace to determine the root cause." },
        C = { code: "id_token_parsing_error", desc: "ID token cannot be parsed. Please review stack trace to determine root cause." },
        w = { code: "null_or_empty_id_token", desc: "The idToken is null or empty. Please review the trace to determine the root cause." },
        T = { code: "endpoints_resolution_error", desc: "Error: could not resolve endpoints. Please check network and try again." },
        I = { code: "invalid_authority_type", desc: "The given authority is not a valid type of authority supported by MSAL. Please review the trace to determine the root cause." },
        S = { code: "hash_not_deserialized", desc: "The hash parameters could not be deserialized. Please review the trace to determine the root cause." },
        A = { code: "invalid_state", desc: "State was not the expected format. Please check the logs to determine whether the request was sent using ProtocolUtils.setRequestState()." },
        R = { code: "state_mismatch", desc: "State mismatch error. Please check your network. Continued requests may cause cache overflow." },
        _ = { code: "nonce_mismatch", desc: "Nonce mismatch error. This may be caused by a race condition in concurrent requests." },
        b = { code: "account_mismatch", desc: "The cached account and account which made the token request do not match." },
        O = { code: "invalid_id_token", desc: "Invalid ID token format." },
        N = { code: "no_tokens_found", desc: "No tokens were found for the given scopes, and no authorization code was passed to acquireToken. You must retrieve an authorization code before making a call to acquireToken()." },
        k = { code: "cache_parse_error", desc: "Could not parse cache key." },
        P = { code: "user_login_error", desc: "User login is required." },
        U = { code: "multiple_matching_tokens", desc: "The cache contains multiple tokens satisfying the requirements. Call AcquireToken again providing more requirements such as authority or account." },
        L = { code: "multiple_matching_accounts", desc: "The cache contains multiple accounts satisfying the given parameters. Please pass more info to obtain the correct account" },
        D = { code: "request_cannot_be_made", desc: "Token request cannot be made without authorization code or refresh token." },
        M = { code: "cannot_append_empty_scope", desc: "Cannot append null or empty scope to ScopeSet. Please check the stack trace for more info." },
        q = { code: "cannot_remove_empty_scope", desc: "Cannot remove null or empty scope from ScopeSet. Please check the stack trace for more info." },
        H = { code: "cannot_append_scopeset", desc: "Cannot append ScopeSet due to error." },
        x = { code: "empty_input_scopeset", desc: "Empty input ScopeSet cannot be processed." },
        K = { code: "device_code_polling_cancelled", desc: "Caller has cancelled token endpoint polling during device code flow by setting DeviceCodeRequest.cancel = true." },
        F = { code: "device_code_expired", desc: "Device code is expired." },
        j = { code: "no_account_in_silent_request", desc: "Please pass an account object, silent flow is not supported without account information" },
        G = { code: "invalid_cache_record", desc: "Cache record object was null or undefined." },
        z = { code: "invalid_cache_environment", desc: "Invalid environment when attempting to create cache entry" },
        Y = { code: "no_account_found", desc: "No account found in cache for given key." },
        W = { code: "no cache plugin set on CacheManager", desc: "ICachePlugin needs to be set before using readFromStorage or writeFromStorage" },
        B = { code: "no_crypto_object", desc: "No crypto object detected. This is required for the following operation: " },
        V = { code: "invalid_cache_type", desc: "Invalid cache type" },
        Q = { code: "unexpected_account_type", desc: "Unexpected account type." },
        J = { code: "unexpected_credential_type", desc: "Unexpected credential type." },
        X = { code: "invalid_assertion", desc: "Client assertion must meet requirements described in https://tools.ietf.org/html/rfc7515" },
        Z = { code: "invalid_client_credential", desc: "Client credential (secret, certificate, or assertion) must not be empty when creating a confidential client. An application should at most have one credential" },
        $ =
            (t(ee, (u = c)),
            (ee.createClientInfoDecodingError = function (e) {
                return new ee(E.code, E.desc + " Failed with error: " + e);
            }),
            (ee.createClientInfoEmptyError = function (e) {
                return new ee(v.code, v.desc + " Given Object: " + e);
            }),
            (ee.createIdTokenParsingError = function (e) {
                return new ee(C.code, C.desc + " Failed with error: " + e);
            }),
            (ee.createIdTokenNullOrEmptyError = function (e) {
                return new ee(w.code, w.desc + " Raw ID Token Value: " + e);
            }),
            (ee.createEndpointDiscoveryIncompleteError = function (e) {
                return new ee(T.code, T.desc + " Detail: " + e);
            }),
            (ee.createInvalidAuthorityTypeError = function (e) {
                return new ee(I.code, I.desc + " Given Url: " + e);
            }),
            (ee.createHashNotDeserializedError = function (e) {
                return new ee(S.code, S.desc + " Given Object: " + e);
            }),
            (ee.createInvalidStateError = function (e, t) {
                return new ee(A.code, A.desc + " Invalid State: " + e + ", Root Err: " + t);
            }),
            (ee.createStateMismatchError = function () {
                return new ee(R.code, R.desc);
            }),
            (ee.createNonceMismatchError = function () {
                return new ee(_.code, _.desc);
            }),
            (ee.createAccountMismatchError = function () {
                return new ee(b.code, b.desc);
            }),
            (ee.createInvalidIdTokenError = function (e) {
                return new ee(O.code, O.desc + " Given token: " + JSON.stringify(e));
            }),
            (ee.createNoTokensFoundError = function () {
                return new ee(N.code, N.desc);
            }),
            (ee.createCacheParseError = function (e) {
                return new ee(k.code, k.desc + " Cache key: " + e);
            }),
            (ee.createUserLoginRequiredError = function () {
                return new ee(P.code, P.desc);
            }),
            (ee.createMultipleMatchingTokensInCacheError = function (e) {
                return new ee(U.code, "Cache error for scope " + e + ": " + U.desc + ".");
            }),
            (ee.createMultipleMatchingAccountsInCacheError = function () {
                return new ee(L.code, L.desc);
            }),
            (ee.createTokenRequestCannotBeMadeError = function () {
                return new ee(D.code, D.desc);
            }),
            (ee.createAppendEmptyScopeToSetError = function (e) {
                return new ee(M.code, M.desc + " Given Scope: " + e);
            }),
            (ee.createRemoveEmptyScopeFromSetError = function (e) {
                return new ee(q.code, q.desc + " Given Scope: " + e);
            }),
            (ee.createAppendScopeSetError = function (e) {
                return new ee(H.code, H.desc + " Detail Error: " + e);
            }),
            (ee.createEmptyInputScopeSetError = function (e) {
                return new ee(x.code, x.desc + " Given ScopeSet: " + e);
            }),
            (ee.createDeviceCodeCancelledError = function () {
                return new ee(K.code, "" + K.desc);
            }),
            (ee.createDeviceCodeExpiredError = function () {
                return new ee(F.code, "" + F.desc);
            }),
            (ee.createNoAccountInSilentRequestError = function () {
                return new ee(j.code, "" + j.desc);
            }),
            (ee.createNullOrUndefinedCacheRecord = function () {
                return new ee(G.code, G.desc);
            }),
            (ee.createInvalidCacheEnvironmentError = function () {
                return new ee(z.code, z.desc);
            }),
            (ee.createNoAccountFoundError = function () {
                return new ee(Y.code, Y.desc);
            }),
            (ee.createCachePluginError = function () {
                return new ee(W.code, "" + W.desc);
            }),
            (ee.createNoCryptoObjectError = function (e) {
                return new ee(B.code, "" + B.desc + e);
            }),
            (ee.createInvalidCacheTypeError = function () {
                return new ee(V.code, "" + V.desc);
            }),
            (ee.createUnexpectedAccountTypeError = function () {
                return new ee(Q.code, "" + Q.desc);
            }),
            (ee.createUnexpectedCredentialTypeError = function () {
                return new ee(J.code, "" + J.desc);
            }),
            (ee.createInvalidAssertionError = function () {
                return new ee(X.code, "" + X.desc);
            }),
            (ee.createInvalidCredentialError = function () {
                return new ee(Z.code, "" + Z.desc);
            }),
            ee);
    function ee(e, t) {
        var r = u.call(this, e, t) || this;
        return (r.name = "ClientAuthError"), Object.setPrototypeOf(r, ee.prototype), r;
    }
    var te,
        re =
            ((ne.decodeJwt = function (e) {
                if (ne.isEmpty(e)) throw $.createIdTokenNullOrEmptyError(e);
                var t = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/.exec(e);
                if (!t || t.length < 4) throw $.createIdTokenParsingError("Given token is malformed: " + JSON.stringify(e));
                return { header: t[1], JWSPayload: t[2], JWSSig: t[3] };
            }),
            (ne.isEmpty = function (e) {
                return void 0 === e || !e || 0 === e.length;
            }),
            (ne.startsWith = function (e, t) {
                return 0 === e.indexOf(t);
            }),
            (ne.endsWith = function (e, t) {
                return e.length >= t.length && e.lastIndexOf(t) === e.length - t.length;
            }),
            (ne.queryStringToObject = function (e) {
                function t(e) {
                    return decodeURIComponent(decodeURIComponent(e.replace(n, " ")));
                }
                var r,
                    n = /\+/g,
                    o = /([^&=]+)=([^&]*)/g,
                    i = {};
                for (r = o.exec(e); r; ) (i[t(r[1])] = t(r[2])), (r = o.exec(e));
                return i;
            }),
            (ne.trimArrayEntries = function (e) {
                return e.map(function (e) {
                    return e.trim();
                });
            }),
            (ne.removeEmptyStringsFromArray = function (e) {
                return e.filter(function (e) {
                    return !ne.isEmpty(e);
                });
            }),
            ne);
    function ne() {}
    ((te = o.LogLevel || (o.LogLevel = {}))[(te.Error = 0)] = "Error"), (te[(te.Warning = 1)] = "Warning"), (te[(te.Info = 2)] = "Info"), (te[(te.Verbose = 3)] = "Verbose");
    var oe =
        ((ie.prototype.logMessage = function (e, t) {
            if (!(t.logLevel > this.level || (!this.piiLoggingEnabled && t.containsPii))) {
                var r = new Date().toUTCString(),
                    n = (re.isEmpty(this.correlationId) ? "[" + r + "] : " : "[" + r + "] : [" + this.correlationId + "]") + " : " + g + " : " + o.LogLevel[t.logLevel] + " - " + e;
                this.executeCallback(t.logLevel, n, t.containsPii);
            }
        }),
        (ie.prototype.executeCallback = function (e, t, r) {
            this.localCallback && this.localCallback(e, t, r);
        }),
        (ie.prototype.error = function (e, t) {
            this.logMessage(e, { logLevel: o.LogLevel.Error, containsPii: !1, correlationId: t || "" });
        }),
        (ie.prototype.errorPii = function (e, t) {
            this.logMessage(e, { logLevel: o.LogLevel.Error, containsPii: !0, correlationId: t || "" });
        }),
        (ie.prototype.warning = function (e, t) {
            this.logMessage(e, { logLevel: o.LogLevel.Warning, containsPii: !1, correlationId: t || "" });
        }),
        (ie.prototype.warningPii = function (e, t) {
            this.logMessage(e, { logLevel: o.LogLevel.Warning, containsPii: !0, correlationId: t || "" });
        }),
        (ie.prototype.info = function (e, t) {
            this.logMessage(e, { logLevel: o.LogLevel.Info, containsPii: !1, correlationId: t || "" });
        }),
        (ie.prototype.infoPii = function (e, t) {
            this.logMessage(e, { logLevel: o.LogLevel.Info, containsPii: !0, correlationId: t || "" });
        }),
        (ie.prototype.verbose = function (e, t) {
            this.logMessage(e, { logLevel: o.LogLevel.Verbose, containsPii: !1, correlationId: t || "" });
        }),
        (ie.prototype.verbosePii = function (e, t) {
            this.logMessage(e, { logLevel: o.LogLevel.Verbose, containsPii: !0, correlationId: t || "" });
        }),
        (ie.prototype.isPiiLoggingEnabled = function () {
            return this.piiLoggingEnabled || !1;
        }),
        ie);
    function ie(e) {
        (this.level = o.LogLevel.Info), e && ((this.localCallback = e.loggerCallback), (this.piiLoggingEnabled = e.piiLoggingEnabled), (this.level = e.logLevel));
    }
    var ae,
        ce,
        se,
        ue,
        de,
        he,
        le,
        pe,
        fe,
        ye,
        me,
        ge,
        Ee = "MSAL.JS",
        ve = "msal.js.common",
        Ce = "msal",
        we = "https://login.microsoftonline.com/common/",
        Te = "adfs",
        Ie = "https://login.microsoftonline.com/common/discovery/instance?api-version=1.1&authorization_endpoint=",
        Se = "|",
        Ae = "openid",
        Re = "profile",
        _e = "offline_access",
        be = "code",
        Oe = "S256",
        Ne = "application/x-www-form-urlencoded;charset=utf-8",
        ke = "authorization_pending",
        Pe = "not_defined";
    ((ce = ae = ae || {}).CONTENT_TYPE = "Content-Type"),
        (ce.X_CLIENT_CURR_TELEM = "x-client-current-telemetry"),
        (ce.X_CLIENT_LAST_TELEM = "x-client-last-telemetry"),
        ((ue = se = se || {}).ID_TOKEN = "idtoken"),
        (ue.CLIENT_INFO = "client.info"),
        (ue.ADAL_ID_TOKEN = "adal.idtoken"),
        (ue.ERROR = "error"),
        (ue.ERROR_DESC = "error.description"),
        ((he = de = de || {}).COMMON = "common"),
        (he.ORGANIZATIONS = "organizations"),
        (he.CONSUMERS = "consumers"),
        ((pe = le = le || {}).CLIENT_ID = "client_id"),
        (pe.REDIRECT_URI = "redirect_uri"),
        (pe.RESPONSE_TYPE = "response_type"),
        (pe.RESPONSE_MODE = "response_mode"),
        (pe.GRANT_TYPE = "grant_type"),
        (pe.CLAIMS = "claims"),
        (pe.SCOPE = "scope"),
        (pe.ERROR = "error"),
        (pe.ERROR_DESCRIPTION = "error_description"),
        (pe.ACCESS_TOKEN = "access_token"),
        (pe.ID_TOKEN = "id_token"),
        (pe.REFRESH_TOKEN = "refresh_token"),
        (pe.EXPIRES_IN = "expires_in"),
        (pe.STATE = "state"),
        (pe.NONCE = "nonce"),
        (pe.PROMPT = "prompt"),
        (pe.SESSION_STATE = "session_state"),
        (pe.CLIENT_INFO = "client_info"),
        (pe.CODE = "code"),
        (pe.CODE_CHALLENGE = "code_challenge"),
        (pe.CODE_CHALLENGE_METHOD = "code_challenge_method"),
        (pe.CODE_VERIFIER = "code_verifier"),
        (pe.CLIENT_REQUEST_ID = "client-request-id"),
        (pe.X_CLIENT_SKU = "x-client-SKU"),
        (pe.X_CLIENT_VER = "x-client-VER"),
        (pe.X_CLIENT_OS = "x-client-OS"),
        (pe.X_CLIENT_CPU = "x-client-CPU"),
        (pe.POST_LOGOUT_URI = "post_logout_redirect_uri"),
        (pe.DEVICE_CODE = "device_code"),
        (pe.CLIENT_SECRET = "client_secret"),
        (pe.CLIENT_ASSERTION = "client_assertion"),
        (pe.CLIENT_ASSERTION_TYPE = "client_assertion_type"),
        ((ye = fe = fe || {}).ISSUER = "iss"),
        (ye.OBJID = "oid"),
        (ye.SUBJECT = "sub"),
        (ye.TENANTID = "tid"),
        (ye.VERSION = "ver"),
        (ye.PREF_USERNAME = "preferred_username"),
        (ye.NAME = "name"),
        (ye.NONCE = "nonce"),
        (ye.EXPIRATION = "exp"),
        (ye.HOME_OBJID = "home_oid"),
        (ye.SESSIONID = "sid"),
        (ye.CLOUD_INSTANCE_HOSTNAME = "cloud_instance_host_name"),
        ((ge = me = me || {}).ACCESS_TOKEN = "access_token"),
        (ge.XMS_CC = "xms_cc");
    var Ue,
        Le,
        De = { LOGIN: "login", SELECT_ACCOUNT: "select_account", CONSENT: "consent", NONE: "none" };
    ((Le = Ue = Ue || {}).ACCOUNT = "account"),
        (Le.SID = "sid"),
        (Le.LOGIN_HINT = "login_hint"),
        (Le.ID_TOKEN = "id_token"),
        (Le.DOMAIN_HINT = "domain_hint"),
        (Le.ORGANIZATIONS = "organizations"),
        (Le.CONSUMERS = "consumers"),
        (Le.ACCOUNT_ID = "accountIdentifier"),
        (Le.HOMEACCOUNT_ID = "homeAccountIdentifier");
    Ue.SID, Ue.LOGIN_HINT;
    var Me,
        qe,
        He,
        xe,
        Ke,
        Fe,
        je,
        Ge,
        ze,
        Ye,
        We,
        Be,
        Ve,
        Qe,
        Je = { PLAIN: "plain", S256: "S256" };
    ((qe = Me = Me || {}).QUERY = "query"),
        (qe.FRAGMENT = "fragment"),
        (qe.FORM_POST = "form_post"),
        ((xe = He = He || {}).IMPLICIT_GRANT = "implicit"),
        (xe.AUTHORIZATION_CODE_GRANT = "authorization_code"),
        (xe.CLIENT_CREDENTIALS_GRANT = "client_credentials"),
        (xe.RESOURCE_OWNER_PASSWORD_GRANT = "password"),
        (xe.REFRESH_TOKEN_GRANT = "refresh_token"),
        (xe.DEVICE_CODE_GRANT = "device_code"),
        ((Fe = Ke = Ke || {}).MSSTS_ACCOUNT_TYPE = "MSSTS"),
        (Fe.ADFS_ACCOUNT_TYPE = "ADFS"),
        (Fe.MSAV1_ACCOUNT_TYPE = "MSA"),
        (Fe.GENERIC_ACCOUNT_TYPE = "Generic"),
        ((Ge = je = je || {}).CACHE_KEY_SEPARATOR = "-"),
        (Ge.CLIENT_INFO_SEPARATOR = "."),
        ((Ye = ze = ze || {}).ID_TOKEN = "IdToken"),
        (Ye.ACCESS_TOKEN = "AccessToken"),
        (Ye.REFRESH_TOKEN = "RefreshToken"),
        ((Be = We = We || {}).ACCOUNT = "Account"),
        (Be.CREDENTIAL = "Credential"),
        (Be.APP_METADATA = "AppMetadata"),
        (Be.TEMPORARY = "TempCache"),
        (Be.TELEMETRY = "Telemetry"),
        ((Qe = Ve = Ve || {})[(Qe.ADFS = 1001)] = "ADFS"),
        (Qe[(Qe.MSA = 1002)] = "MSA"),
        (Qe[(Qe.MSSTS = 1003)] = "MSSTS"),
        (Qe[(Qe.GENERIC = 1004)] = "GENERIC"),
        (Qe[(Qe.ACCESS_TOKEN = 2001)] = "ACCESS_TOKEN"),
        (Qe[(Qe.REFRESH_TOKEN = 2002)] = "REFRESH_TOKEN"),
        (Qe[(Qe.ID_TOKEN = 2003)] = "ID_TOKEN"),
        (Qe[(Qe.APP_METADATA = 3001)] = "APP_METADATA");
    var Xe = { SCHEMA_VERSION: 2, FAILURE_LIMIT: 3, CACHE_KEY: "server-telemetry", CATEGORY_SEPARATOR: "|", VALUE_SEPARATOR: "," },
        Ze =
            (($e.prototype.generateAccountId = function () {
                return $e.generateAccountIdForCacheKey(this.homeAccountId, this.environment);
            }),
            ($e.prototype.generateCredentialId = function () {
                return $e.generateCredentialIdForCacheKey(this.credentialType, this.clientId, this.realm, this.familyId);
            }),
            ($e.prototype.generateTarget = function () {
                return $e.generateTargetForCacheKey(this.target);
            }),
            ($e.prototype.generateCredentialKey = function () {
                return $e.generateCredentialCacheKey(this.homeAccountId, this.environment, this.credentialType, this.clientId, this.realm, this.target, this.familyId);
            }),
            ($e.prototype.generateType = function () {
                switch (this.credentialType) {
                    case ze.ID_TOKEN:
                        return Ve.ID_TOKEN;
                    case ze.ACCESS_TOKEN:
                        return Ve.ACCESS_TOKEN;
                    case ze.REFRESH_TOKEN:
                        return Ve.REFRESH_TOKEN;
                    default:
                        throw $.createUnexpectedCredentialTypeError();
                }
            }),
            ($e.getCredentialType = function (e) {
                return -1 !== e.indexOf(ze.ACCESS_TOKEN.toLowerCase()) ? ze.ACCESS_TOKEN : -1 !== e.indexOf(ze.ID_TOKEN.toLowerCase()) ? ze.ID_TOKEN : -1 !== e.indexOf(ze.REFRESH_TOKEN.toLowerCase()) ? ze.REFRESH_TOKEN : Pe;
            }),
            ($e.generateCredentialCacheKey = function (e, t, r, n, o, i, a) {
                return [this.generateAccountIdForCacheKey(e, t), this.generateCredentialIdForCacheKey(r, n, o, a), this.generateTargetForCacheKey(i)].join(je.CACHE_KEY_SEPARATOR).toLowerCase();
            }),
            ($e.generateAccountIdForCacheKey = function (e, t) {
                return [e, t].join(je.CACHE_KEY_SEPARATOR).toLowerCase();
            }),
            ($e.generateCredentialIdForCacheKey = function (e, t, r, n) {
                return [e, (e === ze.REFRESH_TOKEN && n) || t, r || ""].join(je.CACHE_KEY_SEPARATOR).toLowerCase();
            }),
            ($e.generateTargetForCacheKey = function (e) {
                return (e || "").toLowerCase();
            }),
            $e);
    function $e() {}
    var et,
        tt = { code: "redirect_uri_empty", desc: "A redirect URI is required for all calls, and none has been set." },
        rt = { code: "post_logout_uri_empty", desc: "A post logout redirect has not been set." },
        nt = { code: "claims_request_parsing_error", desc: "Could not parse the given claims request object." },
        ot = {
            code: "authority_uri_insecure",
            desc: "Authority URIs must use https.  Please see here for valid authority configuration options: https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-initializing-client-applications#configuration-options",
        },
        it = { code: "url_parse_error", desc: "URL could not be parsed into appropriate segments." },
        at = { code: "empty_url_error", desc: "URL was empty or null." },
        ct = { code: "empty_input_scopes_error", desc: "Scopes cannot be passed as null, undefined or empty array because they are required to obtain an access token." },
        st = { code: "nonarray_input_scopes_error", desc: "Scopes cannot be passed as non-array." },
        ut = { code: "clientid_input_scopes_error", desc: "Client ID can only be provided as a single scope." },
        dt = {
            code: "invalid_prompt_value",
            desc:
                "Supported prompt values are 'login', 'select_account', 'consent' and 'none'.  Please see here for valid configuration options: https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-initializing-client-applications#configuration-options",
        },
        ht = { code: "invalid_claims", desc: "Given claims parameter must be a stringified JSON object." },
        lt = { code: "token_request_empty", desc: "Token request was empty and not found in cache." },
        pt = { code: "logout_request_empty", desc: "The logout request was null or undefined." },
        ft = { code: "invalid_code_challenge_method", desc: 'code_challenge_method passed is invalid. Valid values are "plain" and "S256".' },
        yt = { code: "pkce_params_missing", desc: "Both params: code_challenge and code_challenge_method are to be passed if to be sent in the request" },
        mt = { code: "invalid_known_authorities", desc: "knownAuthorities and cloudDiscoveryMetadata cannot both be provided. Please provide cloudDiscoveryMetadata object for AAD, knownAuthorities otherwise." },
        gt = { code: "invalid_cloud_discovery_metadata", desc: "Invalid cloudDiscoveryMetadata provided. Must be a JSON object containing tenant_discovery_endpoint and metadata fields" },
        Et = { code: "untrusted_authority", desc: "The provided authority is not a trusted authority. Please include this authority in the knownAuthorities config parameter." },
        vt =
            (t(Ct, (et = $)),
            (Ct.createRedirectUriEmptyError = function () {
                return new Ct(tt.code, tt.desc);
            }),
            (Ct.createPostLogoutRedirectUriEmptyError = function () {
                return new Ct(rt.code, rt.desc);
            }),
            (Ct.createClaimsRequestParsingError = function (e) {
                return new Ct(nt.code, nt.desc + " Given value: " + e);
            }),
            (Ct.createInsecureAuthorityUriError = function (e) {
                return new Ct(ot.code, ot.desc + " Given URI: " + e);
            }),
            (Ct.createUrlParseError = function (e) {
                return new Ct(it.code, it.desc + " Given Error: " + e);
            }),
            (Ct.createUrlEmptyError = function () {
                return new Ct(at.code, at.desc);
            }),
            (Ct.createScopesNonArrayError = function (e) {
                return new Ct(st.code, st.desc + " Given Scopes: " + e);
            }),
            (Ct.createEmptyScopesArrayError = function (e) {
                return new Ct(ct.code, ct.desc + " Given Scopes: " + e);
            }),
            (Ct.createClientIdSingleScopeError = function (e) {
                return new Ct(ut.code, ut.desc + " Given Scopes: " + e);
            }),
            (Ct.createInvalidPromptError = function (e) {
                return new Ct(dt.code, dt.desc + " Given value: " + e);
            }),
            (Ct.createInvalidClaimsRequestError = function () {
                return new Ct(ht.code, ht.desc);
            }),
            (Ct.createEmptyLogoutRequestError = function () {
                return new Ct(pt.code, pt.desc);
            }),
            (Ct.createEmptyTokenRequestError = function () {
                return new Ct(lt.code, lt.desc);
            }),
            (Ct.createInvalidCodeChallengeMethodError = function () {
                return new Ct(ft.code, ft.desc);
            }),
            (Ct.createInvalidCodeChallengeParamsError = function () {
                return new Ct(yt.code, yt.desc);
            }),
            (Ct.createKnownAuthoritiesCloudDiscoveryMetadataError = function () {
                return new Ct(mt.code, mt.desc);
            }),
            (Ct.createInvalidCloudDiscoveryMetadataError = function () {
                return new Ct(gt.code, gt.desc);
            }),
            (Ct.createUntrustedAuthorityError = function () {
                return new Ct(Et.code, Et.desc);
            }),
            Ct);
    function Ct(e, t) {
        var r = et.call(this, e, t) || this;
        return (r.name = "ClientConfigurationError"), Object.setPrototypeOf(r, Ct.prototype), r;
    }
    var wt =
        ((Tt.fromString = function (e) {
            return new Tt((e = e || "").split(" "));
        }),
        (Tt.prototype.validateInputScopes = function (e) {
            if (!e || e.length < 1) throw vt.createEmptyScopesArrayError(e);
        }),
        (Tt.prototype.containsScope = function (e) {
            return !re.isEmpty(e) && this.scopes.has(e);
        }),
        (Tt.prototype.containsScopeSet = function (e) {
            var t = this;
            return (
                !(!e || e.scopes.size <= 0) &&
                this.scopes.size >= e.scopes.size &&
                e.asArray().every(function (e) {
                    return t.containsScope(e);
                })
            );
        }),
        (Tt.prototype.appendScope = function (e) {
            re.isEmpty(e) || this.scopes.add(e.trim());
        }),
        (Tt.prototype.appendScopes = function (e) {
            var t = this;
            try {
                e.forEach(function (e) {
                    return t.appendScope(e);
                });
            } catch (e) {
                throw $.createAppendScopeSetError(e);
            }
        }),
        (Tt.prototype.removeScope = function (e) {
            if (re.isEmpty(e)) throw $.createRemoveEmptyScopeFromSetError(e);
            this.scopes.delete(e.trim());
        }),
        (Tt.prototype.unionScopeSets = function (e) {
            if (!e) throw $.createEmptyInputScopeSetError(e);
            var t = new Set();
            return (
                e.scopes.forEach(function (e) {
                    return t.add(e);
                }),
                this.scopes.forEach(function (e) {
                    return t.add(e);
                }),
                t
            );
        }),
        (Tt.prototype.intersectingScopeSets = function (e) {
            if (!e) throw $.createEmptyInputScopeSetError(e);
            var t = this.unionScopeSets(e),
                r = e.getScopeCount(),
                n = this.getScopeCount();
            return t.size < n + r;
        }),
        (Tt.prototype.getScopeCount = function () {
            return this.scopes.size;
        }),
        (Tt.prototype.asArray = function () {
            var t = [];
            return (
                this.scopes.forEach(function (e) {
                    return t.push(e);
                }),
                t
            );
        }),
        (Tt.prototype.printScopes = function () {
            return this.scopes ? this.asArray().join(" ") : "";
        }),
        (Tt.prototype.printScopesLowerCase = function () {
            return this.printScopes().toLowerCase();
        }),
        Tt);
    function Tt(e) {
        var t = this,
            r = e
                ? re.trimArrayEntries(
                      (function () {
                          for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                          var n = Array(e),
                              o = 0;
                          for (t = 0; t < r; t++) for (var i = arguments[t], a = 0, c = i.length; a < c; a++, o++) n[o] = i[a];
                          return n;
                      })(e)
                  )
                : [],
            n = r ? re.removeEmptyStringsFromArray(r) : [];
        this.validateInputScopes(n),
            (this.scopes = new Set()),
            n.forEach(function (e) {
                return t.scopes.add(e);
            });
    }
    function It(e, t) {
        if (re.isEmpty(e)) throw $.createClientInfoEmptyError(e);
        try {
            var r = t.base64Decode(e);
            return JSON.parse(r);
        } catch (e) {
            throw $.createClientInfoDecodingError(e);
        }
    }
    var St =
        (Object.defineProperty(At.prototype, "urlString", {
            get: function () {
                return this._urlString;
            },
            enumerable: !0,
            configurable: !0,
        }),
        (At.canonicalizeUri = function (e) {
            return (e = e && e.toLowerCase()) && !re.endsWith(e, "/") && (e += "/"), e;
        }),
        (At.prototype.validateAsUri = function () {
            var e;
            try {
                e = this.getUrlComponents();
            } catch (e) {
                throw vt.createUrlParseError(e);
            }
            if (!e.HostNameAndPort || !e.PathSegments || e.PathSegments.length < 1) throw vt.createUrlParseError("Given url string: " + this.urlString);
            if (!e.Protocol || "https:" !== e.Protocol.toLowerCase()) throw vt.createInsecureAuthorityUriError(this.urlString);
        }),
        (At.prototype.urlRemoveQueryStringParameter = function (e) {
            var t = new RegExp("(\\&" + e + "=)[^&]+");
            return (
                (this._urlString = this.urlString.replace(t, "")),
                (t = new RegExp("(" + e + "=)[^&]+&")),
                (this._urlString = this.urlString.replace(t, "")),
                (t = new RegExp("(" + e + "=)[^&]+")),
                (this._urlString = this.urlString.replace(t, "")),
                this.urlString
            );
        }),
        (At.removeHashFromUrl = function (e) {
            return At.canonicalizeUri(e.split("#")[0]);
        }),
        (At.prototype.replaceTenantPath = function (e) {
            var t = this.getUrlComponents(),
                r = t.PathSegments;
            return !e || 0 === r.length || (r[0] !== de.COMMON && r[0] !== de.ORGANIZATIONS) || (r[0] = e), At.constructAuthorityUriFromObject(t);
        }),
        (At.prototype.getHash = function () {
            return At.parseHash(this.urlString);
        }),
        (At.prototype.getUrlComponents = function () {
            var e = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?"),
                t = this.urlString.match(e);
            if (!t) throw vt.createUrlParseError("Given url string: " + this.urlString);
            var r = { Protocol: t[1], HostNameAndPort: t[4], AbsolutePath: t[5] },
                n = r.AbsolutePath.split("/");
            return (
                (n = n.filter(function (e) {
                    return e && 0 < e.length;
                })),
                (r.PathSegments = n),
                r
            );
        }),
        (At.getDomainFromUrl = function (e) {
            var t = RegExp("^([^:/?#]+://)?([^/?#]*)"),
                r = e.match(t);
            if (!r) throw vt.createUrlParseError("Given url string: " + e);
            return r[2];
        }),
        (At.parseHash = function (e) {
            var t = e.indexOf("#"),
                r = e.indexOf("#/");
            return -1 < r ? e.substring(r + 2) : -1 < t ? e.substring(t + 1) : "";
        }),
        (At.constructAuthorityUriFromObject = function (e) {
            return new At(e.Protocol + "//" + e.HostNameAndPort + "/" + e.PathSegments.join("/"));
        }),
        (At.getDeserializedHash = function (e) {
            if (re.isEmpty(e)) return {};
            var t = At.parseHash(e),
                r = re.queryStringToObject(re.isEmpty(t) ? e : t);
            if (!r) throw $.createHashNotDeserializedError(JSON.stringify(r));
            return r;
        }),
        (At.hashContainsKnownProperties = function (e) {
            if (re.isEmpty(e)) return !1;
            var t = At.getDeserializedHash(e);
            return !!(t.code || t.error_description || t.error || t.state);
        }),
        At);
    function At(e) {
        if (((this._urlString = e), re.isEmpty(this._urlString))) throw vt.createUrlEmptyError();
        re.isEmpty(this.getHash()) && (this._urlString = At.canonicalizeUri(e));
    }
    var Rt =
        ((_t.setTrustedAuthoritiesFromConfig = function (e, t) {
            if (!this.getTrustedHostList().length) {
                if (0 < e.length && !re.isEmpty(t)) throw vt.createKnownAuthoritiesCloudDiscoveryMetadataError();
                this.createCloudDiscoveryMetadataFromKnownAuthorities(e);
                try {
                    if (t) {
                        var r = JSON.parse(t);
                        this.saveCloudDiscoveryMetadata(r.metadata);
                    }
                } catch (e) {
                    throw vt.createInvalidCloudDiscoveryMetadataError();
                }
            }
        }),
        (_t.setTrustedAuthoritiesFromNetwork = function (i, a) {
            return h(this, void 0, void 0, function () {
                var t, r, n, o;
                return m(this, function (e) {
                    switch (e.label) {
                        case 0:
                            (t = "" + Ie + i.urlString + "oauth2/v2.0/authorize"), (e.label = 1);
                        case 1:
                            return e.trys.push([1, 3, , 4]), [4, a.sendGetRequestAsync(t)];
                        case 2:
                            return (r = e.sent()), (n = r.body.metadata), this.saveCloudDiscoveryMetadata(n), [3, 4];
                        case 3:
                            return e.sent(), [2];
                        case 4:
                            return (o = i.getUrlComponents().HostNameAndPort), 0 < this.getTrustedHostList().length && !this.IsInTrustedHostList(o) && this.createCloudDiscoveryMetadataFromKnownAuthorities([o]), [2];
                    }
                });
            });
        }),
        (_t.saveCloudDiscoveryMetadata = function (e) {
            e.forEach(function (t) {
                t.aliases.forEach(function (e) {
                    _t.TrustedHostList[e.toLowerCase()] = t;
                });
            });
        }),
        (_t.createCloudDiscoveryMetadataFromKnownAuthorities = function (e) {
            var r = this;
            e.forEach(function (e) {
                var t = St.getDomainFromUrl(e).toLowerCase();
                r.TrustedHostList[t] = { preferred_cache: t, preferred_network: t, aliases: [t] };
            });
        }),
        (_t.getTrustedHostList = function () {
            return Object.keys(this.TrustedHostList);
        }),
        (_t.getCloudDiscoveryMetadata = function (e) {
            return this.TrustedHostList[e.toLowerCase()] || null;
        }),
        (_t.IsInTrustedHostList = function (e) {
            return -1 < Object.keys(this.TrustedHostList).indexOf(e.toLowerCase());
        }),
        (_t.TrustedHostList = {}),
        _t);
    function _t() {}
    var bt =
        ((Ot.prototype.generateAccountId = function () {
            return [this.homeAccountId, this.environment].join(je.CACHE_KEY_SEPARATOR).toLowerCase();
        }),
        (Ot.prototype.generateAccountKey = function () {
            return Ot.generateAccountCacheKey({ homeAccountId: this.homeAccountId, environment: this.environment, tenantId: this.realm, username: this.username });
        }),
        (Ot.prototype.generateType = function () {
            switch (this.authorityType) {
                case Ke.ADFS_ACCOUNT_TYPE:
                    return Ve.ADFS;
                case Ke.MSAV1_ACCOUNT_TYPE:
                    return Ve.MSA;
                case Ke.MSSTS_ACCOUNT_TYPE:
                    return Ve.MSSTS;
                case Ke.GENERIC_ACCOUNT_TYPE:
                    return Ve.GENERIC;
                default:
                    throw $.createUnexpectedAccountTypeError();
            }
        }),
        (Ot.prototype.getAccountInfo = function () {
            return { homeAccountId: this.homeAccountId, environment: this.environment, tenantId: this.realm, username: this.username };
        }),
        (Ot.generateAccountCacheKey = function (e) {
            return [e.homeAccountId, e.environment || "", e.tenantId || ""].join(je.CACHE_KEY_SEPARATOR).toLowerCase();
        }),
        (Ot.createAccount = function (e, t, r, n) {
            var o = new Ot();
            o.authorityType = Ke.MSSTS_ACCOUNT_TYPE;
            var i = It((o.clientInfo = e), n);
            o.homeAccountId = "" + i.uid + je.CLIENT_INFO_SEPARATOR + i.utid;
            var a = t.canonicalAuthorityUrlComponents.HostNameAndPort,
                c = Rt.getCloudDiscoveryMetadata(a) ? Rt.getCloudDiscoveryMetadata(a).preferred_cache : "";
            if (re.isEmpty(c)) throw $.createInvalidCacheEnvironmentError();
            if (((o.environment = c), (o.realm = r.claims.tid), r)) {
                var s = re.isEmpty(r.claims.oid) ? r.claims.sid : r.claims.oid;
                (o.localAccountId = s), (o.username = r.claims.preferred_username || (r.claims.emails ? r.claims.emails[0] : "")), (o.name = r.claims.name);
            }
            return o;
        }),
        (Ot.createADFSAccount = function (e, t) {
            var r = new Ot();
            (r.authorityType = Ke.ADFS_ACCOUNT_TYPE), (r.homeAccountId = t.claims.sub);
            var n = e.canonicalAuthorityUrlComponents.HostNameAndPort,
                o = Rt.getCloudDiscoveryMetadata(n) ? Rt.getCloudDiscoveryMetadata(n).preferred_cache : "";
            if (re.isEmpty(o)) throw $.createInvalidCacheEnvironmentError();
            return (r.environment = o), (r.username = t.claims.upn), r;
        }),
        (Ot.isAccountEntity = function (e) {
            return e.hasOwnProperty("homeAccountId") && e.hasOwnProperty("environment") && e.hasOwnProperty("realm") && e.hasOwnProperty("localAccountId") && e.hasOwnProperty("username") && e.hasOwnProperty("authorityType");
        }),
        Ot);
    function Ot() {}
    var Nt =
        ((kt.prototype.getAllAccounts = function () {
            var t = this.getAccountsFilteredBy(),
                e = Object.keys(t).map(function (e) {
                    return t[e];
                });
            return e.length < 1
                ? []
                : e.map(function (e) {
                      var t = new bt();
                      return (t = kt.toObject(t, e)).getAccountInfo();
                  });
        }),
        (kt.prototype.saveCacheRecord = function (e) {
            if (!e) throw $.createNullOrUndefinedCacheRecord();
            e.account && this.saveAccount(e.account), e.idToken && this.saveCredential(e.idToken), e.accessToken && this.saveAccessToken(e.accessToken), e.refreshToken && this.saveCredential(e.refreshToken);
        }),
        (kt.prototype.saveAccount = function (e) {
            var t = e.generateAccountKey();
            this.setItem(t, e, We.ACCOUNT);
        }),
        (kt.prototype.saveCredential = function (e) {
            var t = e.generateCredentialKey();
            this.setItem(t, e, We.CREDENTIAL);
        }),
        (kt.prototype.saveAccessToken = function (e) {
            var t = this,
                r = this.getCredentialsFilteredBy({ clientId: e.clientId, credentialType: ze.ACCESS_TOKEN, environment: e.environment, homeAccountId: e.homeAccountId, realm: e.realm }),
                n = wt.fromString(e.target),
                o = Object.keys(r.accessTokens).map(function (e) {
                    return r.accessTokens[e];
                });
            o &&
                o.forEach(function (e) {
                    wt.fromString(e.target).intersectingScopeSets(n) && t.removeCredential(e);
                }),
                this.saveCredential(e);
        }),
        (kt.prototype.getAccount = function (e) {
            return this.getItem(e, We.ACCOUNT);
        }),
        (kt.prototype.getCredential = function (e) {
            return this.getItem(e, We.CREDENTIAL);
        }),
        (kt.prototype.getAccountsFilteredBy = function (e) {
            return this.getAccountsFilteredByInternal(e ? e.homeAccountId : "", e ? e.environment : "", e ? e.realm : "");
        }),
        (kt.prototype.getAccountsFilteredByInternal = function (r, n, o) {
            var i = this,
                e = this.getKeys(),
                a = {};
            return (
                e.forEach(function (e) {
                    var t = i.getAccountEntity(e);
                    if (!t) return null;
                    (re.isEmpty(r) || i.matchHomeAccountId(t, r)) && (re.isEmpty(n) || i.matchEnvironment(t, n)) && (re.isEmpty(o) || i.matchRealm(t, o)) && (a[e] = t);
                }),
                a
            );
        }),
        (kt.prototype.getCredentialsFilteredBy = function (e) {
            return this.getCredentialsFilteredByInternal(e.homeAccountId, e.environment, e.credentialType, e.clientId, e.realm, e.target);
        }),
        (kt.prototype.getCredentialsFilteredByInternal = function (n, o, i, a, c, s) {
            var u = this,
                e = this.getKeys(),
                d = { idTokens: {}, accessTokens: {}, refreshTokens: {} };
            return (
                e.forEach(function (e) {
                    var t,
                        r = Ze.getCredentialType(e);
                    if (r !== Pe) {
                        try {
                            t = u.getItem(e, We.CREDENTIAL);
                        } catch (e) {
                            return;
                        }
                        if (
                            (re.isEmpty(n) || u.matchHomeAccountId(t, n)) &&
                            (re.isEmpty(o) || u.matchEnvironment(t, o)) &&
                            (re.isEmpty(c) || u.matchRealm(t, c)) &&
                            (re.isEmpty(i) || u.matchCredentialType(t, i)) &&
                            (re.isEmpty(a) || u.matchClientId(t, a)) &&
                            (re.isEmpty(s) || u.matchTarget(t, s))
                        )
                            switch (r) {
                                case ze.ID_TOKEN:
                                    d.idTokens[e] = t;
                                    break;
                                case ze.ACCESS_TOKEN:
                                    d.accessTokens[e] = t;
                                    break;
                                case ze.REFRESH_TOKEN:
                                    d.refreshTokens[e] = t;
                            }
                    }
                }),
                d
            );
        }),
        (kt.prototype.removeAppMetadata = function () {
            var t = this;
            return (
                this.getKeys().forEach(function (e) {
                    t.isAppMetadata(e) && t.removeItem(e, We.APP_METADATA);
                }),
                !0
            );
        }),
        (kt.prototype.removeAllAccounts = function () {
            var t = this;
            return (
                this.getKeys().forEach(function (e) {
                    t.getAccountEntity(e) && t.removeAccount(e);
                }),
                !0
            );
        }),
        (kt.prototype.removeAccount = function (e) {
            var t = this.getAccount(e);
            if (!t) throw $.createNoAccountFoundError();
            return this.removeAccountContext(t) && this.removeItem(e, We.ACCOUNT);
        }),
        (kt.prototype.removeAccountContext = function (e) {
            var r = this,
                t = this.getKeys(),
                n = e.generateAccountId();
            return (
                t.forEach(function (e) {
                    if (Ze.getCredentialType(e) !== Pe) {
                        var t = r.getItem(e, We.CREDENTIAL);
                        t && n === t.generateAccountId() && r.removeCredential(t);
                    }
                }),
                !0
            );
        }),
        (kt.prototype.removeCredential = function (e) {
            var t = e.generateCredentialKey();
            return this.removeItem(t, We.CREDENTIAL);
        }),
        (kt.prototype.matchHomeAccountId = function (e, t) {
            return e.homeAccountId && t === e.homeAccountId;
        }),
        (kt.prototype.matchEnvironment = function (e, t) {
            var r = Rt.getCloudDiscoveryMetadata(t);
            return !!(r && -1 < r.aliases.indexOf(e.environment));
        }),
        (kt.prototype.matchCredentialType = function (e, t) {
            return e.credentialType && t.toLowerCase() === e.credentialType.toLowerCase();
        }),
        (kt.prototype.matchClientId = function (e, t) {
            return e.clientId && t === e.clientId;
        }),
        (kt.prototype.matchRealm = function (e, t) {
            return e.realm && t === e.realm;
        }),
        (kt.prototype.matchTarget = function (e, t) {
            if (e.credentialType !== ze.ACCESS_TOKEN || re.isEmpty(e.target)) return !1;
            var r = wt.fromString(e.target),
                n = wt.fromString(t);
            return r.removeScope(_e), n.removeScope(_e), r.containsScopeSet(n);
        }),
        (kt.prototype.getAccountEntity = function (e) {
            if (Ze.getCredentialType(e) !== Pe || this.isAppMetadata(e)) return null;
            var t;
            try {
                t = this.getItem(e, We.ACCOUNT);
            } catch (e) {
                return null;
            }
            return !t || re.isEmpty(t.authorityType) ? null : t;
        }),
        (kt.prototype.isAppMetadata = function (e) {
            return -1 !== e.indexOf("appmetadata");
        }),
        (kt.toObject = function (e, t) {
            for (var r in t) e[r] = t[r];
            return e;
        }),
        kt);
    function kt() {}
    var Pt,
        Ut =
            (t(Lt, (Pt = Nt)),
            (Lt.prototype.setItem = function () {
                throw c.createUnexpectedError("Storage interface - setItem() has not been implemented for the cacheStorage interface.");
            }),
            (Lt.prototype.getItem = function () {
                throw c.createUnexpectedError("Storage interface - getItem() has not been implemented for the cacheStorage interface.");
            }),
            (Lt.prototype.removeItem = function () {
                throw c.createUnexpectedError("Storage interface - removeItem() has not been implemented for the cacheStorage interface.");
            }),
            (Lt.prototype.containsKey = function () {
                throw c.createUnexpectedError("Storage interface - containsKey() has not been implemented for the cacheStorage interface.");
            }),
            (Lt.prototype.getKeys = function () {
                throw c.createUnexpectedError("Storage interface - getKeys() has not been implemented for the cacheStorage interface.");
            }),
            (Lt.prototype.clear = function () {
                throw c.createUnexpectedError("Storage interface - clear() has not been implemented for the cacheStorage interface.");
            }),
            Lt);
    function Lt() {
        return (null !== Pt && Pt.apply(this, arguments)) || this;
    }
    var Dt = { clientId: "", authority: null, knownAuthorities: [], cloudDiscoveryMetadata: "", clientCapabilities: [] },
        Mt = { tokenRenewalOffsetSeconds: 300 },
        qt = { loggerCallback: function () {}, piiLoggingEnabled: !1, logLevel: o.LogLevel.Info },
        Ht = {
            sendGetRequestAsync: function () {
                return h(this, void 0, void 0, function () {
                    return m(this, function (e) {
                        throw ("Network interface - sendGetRequestAsync() has not been implemented", c.createUnexpectedError("Network interface - sendGetRequestAsync() has not been implemented"));
                    });
                });
            },
            sendPostRequestAsync: function () {
                return h(this, void 0, void 0, function () {
                    return m(this, function (e) {
                        throw ("Network interface - sendPostRequestAsync() has not been implemented", c.createUnexpectedError("Network interface - sendPostRequestAsync() has not been implemented"));
                    });
                });
            },
        },
        xt = {
            createNewGuid: function () {
                throw c.createUnexpectedError("Crypto interface - createNewGuid() has not been implemented");
            },
            base64Decode: function () {
                throw c.createUnexpectedError("Crypto interface - base64Decode() has not been implemented");
            },
            base64Encode: function () {
                throw c.createUnexpectedError("Crypto interface - base64Encode() has not been implemented");
            },
            generatePkceCodes: function () {
                return h(this, void 0, void 0, function () {
                    return m(this, function (e) {
                        throw ("Crypto interface - generatePkceCodes() has not been implemented", c.createUnexpectedError("Crypto interface - generatePkceCodes() has not been implemented"));
                    });
                });
            },
        },
        Kt = { sku: ve, version: d, cpu: "", os: "" },
        Ft = { clientSecret: "", clientAssertion: null };
    var jt =
        ((Gt.prototype.createDefaultTokenRequestHeaders = function () {
            var e = this.createDefaultLibraryHeaders();
            return (
                (e[ae.CONTENT_TYPE] = Ne),
                this.serverTelemetryManager && ((e[ae.X_CLIENT_CURR_TELEM] = this.serverTelemetryManager.generateCurrentRequestHeaderValue()), (e[ae.X_CLIENT_LAST_TELEM] = this.serverTelemetryManager.generateLastRequestHeaderValue())),
                e
            );
        }),
        (Gt.prototype.createDefaultLibraryHeaders = function () {
            var e = {};
            return (e[le.X_CLIENT_SKU] = this.config.libraryInfo.sku), (e[le.X_CLIENT_VER] = this.config.libraryInfo.version), (e[le.X_CLIENT_OS] = this.config.libraryInfo.os), (e[le.X_CLIENT_CPU] = this.config.libraryInfo.cpu), e;
        }),
        (Gt.prototype.executePostToTokenEndpoint = function (r, n, o) {
            return h(this, void 0, void 0, function () {
                var t;
                return m(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, this.networkClient.sendPostRequestAsync(r, { body: n, headers: o })];
                        case 1:
                            return (t = e.sent()), this.config.serverTelemetryManager && t.status < 500 && 429 !== t.status && this.config.serverTelemetryManager.clearTelemetryCache(), [2, t];
                    }
                });
            });
        }),
        Gt);
    function Gt(e) {
        (this.config = (function (e) {
            var t = e.authOptions,
                r = e.systemOptions,
                n = e.loggerOptions,
                o = e.storageInterface,
                i = e.networkInterface,
                a = e.cryptoInterface,
                c = e.clientCredentials,
                s = e.libraryInfo,
                u = e.serverTelemetryManager;
            return {
                authOptions: p(p({}, Dt), t),
                systemOptions: p(p({}, Mt), r),
                loggerOptions: p(p({}, qt), n),
                storageInterface: o || new Ut(),
                networkInterface: i || Ht,
                cryptoInterface: a || xt,
                clientCredentials: c || Ft,
                libraryInfo: p(p({}, Kt), s),
                serverTelemetryManager: u || null,
            };
        })(e)),
            (this.logger = new oe(this.config.loggerOptions)),
            (this.cryptoUtils = this.config.cryptoInterface),
            (this.cacheManager = this.config.storageInterface),
            (this.networkClient = this.config.networkInterface),
            (this.serverTelemetryManager = this.config.serverTelemetryManager),
            Rt.setTrustedAuthoritiesFromConfig(this.config.authOptions.knownAuthorities, this.config.authOptions.cloudDiscoveryMetadata),
            (this.authority = this.config.authOptions.authority);
    }
    var zt =
        ((Yt.validateRedirectUri = function (e) {
            if (re.isEmpty(e)) throw vt.createRedirectUriEmptyError();
        }),
        (Yt.validatePrompt = function (e) {
            if ([De.LOGIN, De.SELECT_ACCOUNT, De.CONSENT, De.NONE].indexOf(e) < 0) throw vt.createInvalidPromptError(e);
        }),
        (Yt.validateClaims = function (e) {
            try {
                JSON.parse(e);
            } catch (e) {
                throw vt.createInvalidClaimsRequestError();
            }
        }),
        (Yt.validateCodeChallengeParams = function (e, t) {
            if (re.isEmpty(e) || re.isEmpty(t)) throw vt.createInvalidCodeChallengeParamsError();
            this.validateCodeChallengeMethod(t);
        }),
        (Yt.validateCodeChallengeMethod = function (e) {
            if ([Je.PLAIN, Je.S256].indexOf(e) < 0) throw vt.createInvalidCodeChallengeMethodError();
        }),
        (Yt.sanitizeEQParams = function (r, e) {
            return r
                ? (e.forEach(function (e, t) {
                      r[t] && delete r[t];
                  }),
                  r)
                : null;
        }),
        Yt);
    function Yt() {}
    var Wt =
        ((Bt.prototype.addResponseTypeCode = function () {
            this.parameters.set(le.RESPONSE_TYPE, encodeURIComponent(be));
        }),
        (Bt.prototype.addResponseMode = function (e) {
            this.parameters.set(le.RESPONSE_MODE, encodeURIComponent(e || Me.QUERY));
        }),
        (Bt.prototype.addScopes = function (e) {
            this.parameters.set(le.SCOPE, encodeURIComponent(e.printScopes()));
        }),
        (Bt.prototype.addClientId = function (e) {
            this.parameters.set(le.CLIENT_ID, encodeURIComponent(e));
        }),
        (Bt.prototype.addRedirectUri = function (e) {
            zt.validateRedirectUri(e), this.parameters.set(le.REDIRECT_URI, encodeURIComponent(e));
        }),
        (Bt.prototype.addDomainHint = function (e) {
            this.parameters.set(Ue.DOMAIN_HINT, encodeURIComponent(e));
        }),
        (Bt.prototype.addLoginHint = function (e) {
            this.parameters.set(Ue.LOGIN_HINT, encodeURIComponent(e));
        }),
        (Bt.prototype.addSid = function (e) {
            this.parameters.set(Ue.SID, encodeURIComponent(e));
        }),
        (Bt.prototype.addClaims = function (e, t) {
            var r = this.addClientCapabilitiesToClaims(e, t);
            zt.validateClaims(r), this.parameters.set(le.CLAIMS, encodeURIComponent(r));
        }),
        (Bt.prototype.addCorrelationId = function (e) {
            this.parameters.set(le.CLIENT_REQUEST_ID, encodeURIComponent(e));
        }),
        (Bt.prototype.addLibraryInfo = function (e) {
            this.parameters.set(le.X_CLIENT_SKU, e.sku), this.parameters.set(le.X_CLIENT_VER, e.version), this.parameters.set(le.X_CLIENT_OS, e.os), this.parameters.set(le.X_CLIENT_CPU, e.cpu);
        }),
        (Bt.prototype.addPrompt = function (e) {
            zt.validatePrompt(e), this.parameters.set("" + le.PROMPT, encodeURIComponent(e));
        }),
        (Bt.prototype.addState = function (e) {
            re.isEmpty(e) || this.parameters.set(le.STATE, encodeURIComponent(e));
        }),
        (Bt.prototype.addNonce = function (e) {
            this.parameters.set(le.NONCE, encodeURIComponent(e));
        }),
        (Bt.prototype.addCodeChallengeParams = function (e, t) {
            if ((zt.validateCodeChallengeParams(e, t), !e || !t)) throw vt.createInvalidCodeChallengeParamsError();
            this.parameters.set(le.CODE_CHALLENGE, encodeURIComponent(e)), this.parameters.set(le.CODE_CHALLENGE_METHOD, encodeURIComponent(t));
        }),
        (Bt.prototype.addAuthorizationCode = function (e) {
            this.parameters.set(le.CODE, encodeURIComponent(e));
        }),
        (Bt.prototype.addDeviceCode = function (e) {
            this.parameters.set(le.DEVICE_CODE, encodeURIComponent(e));
        }),
        (Bt.prototype.addRefreshToken = function (e) {
            this.parameters.set(le.REFRESH_TOKEN, encodeURIComponent(e));
        }),
        (Bt.prototype.addCodeVerifier = function (e) {
            this.parameters.set(le.CODE_VERIFIER, encodeURIComponent(e));
        }),
        (Bt.prototype.addClientSecret = function (e) {
            this.parameters.set(le.CLIENT_SECRET, encodeURIComponent(e));
        }),
        (Bt.prototype.addClientAssertion = function (e) {
            this.parameters.set(le.CLIENT_ASSERTION, encodeURIComponent(e));
        }),
        (Bt.prototype.addClientAssertionType = function (e) {
            this.parameters.set(le.CLIENT_ASSERTION_TYPE, encodeURIComponent(e));
        }),
        (Bt.prototype.addGrantType = function (e) {
            this.parameters.set(le.GRANT_TYPE, encodeURIComponent(e));
        }),
        (Bt.prototype.addClientInfo = function () {
            this.parameters.set("client_info", "1");
        }),
        (Bt.prototype.addExtraQueryParameters = function (t) {
            var r = this;
            zt.sanitizeEQParams(t, this.parameters),
                Object.keys(t).forEach(function (e) {
                    r.parameters.set(e, t[e]);
                });
        }),
        (Bt.prototype.addClientCapabilitiesToClaims = function (e, t) {
            var r;
            if (re.isEmpty(e)) r = {};
            else
                try {
                    r = JSON.parse(e);
                } catch (e) {
                    throw vt.createInvalidClaimsRequestError();
                }
            return t && 0 < t.length && (r.hasOwnProperty(me.ACCESS_TOKEN) || (r[me.ACCESS_TOKEN] = {}), (r[me.ACCESS_TOKEN][me.XMS_CC] = { values: t })), JSON.stringify(r);
        }),
        (Bt.prototype.createQueryString = function () {
            var r = new Array();
            return (
                this.parameters.forEach(function (e, t) {
                    r.push(t + "=" + e);
                }),
                r.join("&")
            );
        }),
        Bt);
    function Bt() {
        this.parameters = new Map();
    }
    var Vt,
        Qt = (t(Jt, (Vt = c)), Jt);
    function Jt(e, t, r) {
        var n = Vt.call(this, e, t) || this;
        return (n.name = "ServerError"), (n.subError = r), Object.setPrototypeOf(n, Jt.prototype), n;
    }
    var Xt =
        ((Zt.extractIdToken = function (e, t) {
            var r = re.decodeJwt(e);
            if (!r) return null;
            try {
                var n = r.JWSPayload,
                    o = t.base64Decode(n);
                return JSON.parse(o);
            } catch (e) {
                throw $.createIdTokenParsingError(e);
            }
        }),
        Zt);
    function Zt(e, t) {
        if (re.isEmpty(e)) throw $.createIdTokenNullOrEmptyError(e);
        (this.rawIdToken = e), (this.claims = Zt.extractIdToken(e, t));
    }
    var $t,
        er,
        tr =
            ((rr.nowSeconds = function () {
                return Math.round(new Date().getTime() / 1e3);
            }),
            (rr.isTokenExpired = function (e, t) {
                return (Number(e) || 0) < rr.nowSeconds() + t;
            }),
            rr);
    function rr() {}
    ((er = $t = $t || {})[(er.Default = 0)] = "Default"), (er[(er.Adfs = 1)] = "Adfs");
    var nr,
        or =
            (t(ir, (nr = Ze)),
            (ir.createIdTokenEntity = function (e, t, r, n, o) {
                var i = new ir();
                return (i.credentialType = ze.ID_TOKEN), (i.homeAccountId = e), (i.environment = t), (i.clientId = n), (i.secret = r), (i.realm = o), i;
            }),
            (ir.isIdTokenEntity = function (e) {
                return (
                    e.hasOwnProperty("homeAccountId") &&
                    e.hasOwnProperty("environment") &&
                    e.hasOwnProperty("credentialType") &&
                    e.hasOwnProperty("realm") &&
                    e.hasOwnProperty("clientId") &&
                    e.hasOwnProperty("secret") &&
                    e.credentialType === ze.ID_TOKEN
                );
            }),
            ir);
    function ir() {
        return (null !== nr && nr.apply(this, arguments)) || this;
    }
    var ar,
        cr =
            (t(sr, (ar = Ze)),
            (sr.createAccessTokenEntity = function (e, t, r, n, o, i, a, c) {
                var s = new sr();
                (s.homeAccountId = e), (s.credentialType = ze.ACCESS_TOKEN), (s.secret = r);
                var u = tr.nowSeconds();
                return (s.cachedAt = u.toString()), (s.expiresOn = a.toString()), (s.extendedExpiresOn = c.toString()), (s.environment = t), (s.clientId = n), (s.realm = o), (s.target = i), s;
            }),
            (sr.isAccessTokenEntity = function (e) {
                return (
                    e.hasOwnProperty("homeAccountId") &&
                    e.hasOwnProperty("environment") &&
                    e.hasOwnProperty("credentialType") &&
                    e.hasOwnProperty("realm") &&
                    e.hasOwnProperty("clientId") &&
                    e.hasOwnProperty("secret") &&
                    e.hasOwnProperty("target") &&
                    e.credentialType === ze.ACCESS_TOKEN
                );
            }),
            sr);
    function sr() {
        return (null !== ar && ar.apply(this, arguments)) || this;
    }
    var ur,
        dr =
            (t(hr, (ur = Ze)),
            (hr.createRefreshTokenEntity = function (e, t, r, n, o) {
                var i = new hr();
                return (i.clientId = n), (i.credentialType = ze.REFRESH_TOKEN), (i.environment = t), (i.homeAccountId = e), (i.secret = r), o && (i.familyId = o), i;
            }),
            (hr.isRefreshTokenEntity = function (e) {
                return e.hasOwnProperty("homeAccountId") && e.hasOwnProperty("environment") && e.hasOwnProperty("credentialType") && e.hasOwnProperty("clientId") && e.hasOwnProperty("secret") && e.credentialType === ze.REFRESH_TOKEN;
            }),
            hr);
    function hr() {
        return (null !== ur && ur.apply(this, arguments)) || this;
    }
    var lr,
        pr = ["interaction_required", "consent_required", "login_required"],
        fr = ["message_only", "additional_action", "basic_action", "user_password_expired", "consent_required"],
        yr =
            (t(mr, (lr = Qt)),
            (mr.isInteractionRequiredError = function (e, t, r) {
                var n = !re.isEmpty(e) && -1 < pr.indexOf(e),
                    o = !re.isEmpty(r) && -1 < fr.indexOf(r),
                    i =
                        !re.isEmpty(t) &&
                        pr.some(function (e) {
                            return -1 < t.indexOf(e);
                        });
                return n || i || o;
            }),
            mr);
    function mr(e, t, r) {
        var n = lr.call(this, e, t, r) || this;
        return (n.name = "InteractionRequiredAuthError"), Object.setPrototypeOf(n, mr.prototype), n;
    }
    var gr = function (e, t, r, n) {
            (this.account = e), (this.idToken = t), (this.accessToken = r), (this.refreshToken = n);
        },
        Er =
            ((vr.setRequestState = function (e, t, r) {
                var n = vr.generateLibraryState(e, r);
                return re.isEmpty(t) ? n : "" + n + Se + t;
            }),
            (vr.generateLibraryState = function (e, t) {
                if (!e) throw $.createNoCryptoObjectError("generateLibraryState");
                var r = { id: e.createNewGuid(), ts: tr.nowSeconds() };
                t && (r.meta = t);
                var n = JSON.stringify(r);
                return e.base64Encode(n);
            }),
            (vr.parseRequestState = function (e, t) {
                if (!e) throw $.createNoCryptoObjectError("parseRequestState");
                if (re.isEmpty(t)) throw $.createInvalidStateError(t, "Null, undefined or empty state");
                try {
                    var r = decodeURIComponent(t).split(Se),
                        n = r[0],
                        o = 1 < r.length ? r.slice(1).join(Se) : "",
                        i = e.base64Decode(n),
                        a = JSON.parse(i);
                    return { userRequestState: re.isEmpty(o) ? "" : o, libraryState: a };
                } catch (e) {
                    throw $.createInvalidStateError(t, e);
                }
            }),
            vr);
    function vr() {}
    var Cr =
        ((wr.prototype.validateServerAuthorizationCodeResponse = function (e, t, r) {
            if (decodeURIComponent(e.state) !== decodeURIComponent(t)) throw $.createStateMismatchError();
            if (e.error || e.error_description || e.suberror) {
                if (yr.isInteractionRequiredError(e.error, e.error_description, e.suberror)) throw new yr(e.error, e.error_description, e.suberror);
                throw new Qt(e.error, e.error_description, e.suberror);
            }
            e.client_info && It(e.client_info, r);
        }),
        (wr.prototype.validateTokenResponse = function (e) {
            if (e.error || e.error_description || e.suberror) {
                if (yr.isInteractionRequiredError(e.error, e.error_description, e.suberror)) throw new yr(e.error, e.error_description, e.suberror);
                var t = e.error_codes + " - [" + e.timestamp + "]: " + e.error_description + " - Correlation ID: " + e.correlation_id + " - Trace ID: " + e.trace_id;
                throw new Qt(e.error, t);
            }
        }),
        (wr.prototype.handleServerTokenResponse = function (e, t, r, n, o) {
            e.client_info
                ? ((this.clientInfo = It(e.client_info, this.cryptoObj)), re.isEmpty(this.clientInfo.uid) || re.isEmpty(this.clientInfo.utid) || (this.homeAccountIdentifier = this.clientInfo.uid + "." + this.clientInfo.utid))
                : (this.homeAccountIdentifier = "");
            var i = null;
            if (!re.isEmpty(e.id_token) && ((i = new Xt(e.id_token, this.cryptoObj)), !re.isEmpty(r) && i.claims.nonce !== r)) throw $.createNonceMismatchError();
            var a = null;
            re.isEmpty(n) || (a = Er.parseRequestState(this.cryptoObj, n));
            var c = this.generateCacheRecord(e, i, t, a && a.libraryState, o);
            return this.cacheStorage.saveCacheRecord(c), wr.generateAuthenticationResult(c, i, !1, a);
        }),
        (wr.prototype.generateCacheRecord = function (e, t, r, n, o) {
            var i = r.canonicalAuthorityUrlComponents.HostNameAndPort,
                a = Rt.getCloudDiscoveryMetadata(i) ? Rt.getCloudDiscoveryMetadata(i).preferred_cache : "";
            if (re.isEmpty(a)) throw $.createInvalidCacheEnvironmentError();
            var c = null,
                s = null;
            re.isEmpty(e.id_token) || ((c = or.createIdTokenEntity(this.homeAccountIdentifier, a, e.id_token, this.clientId, t.claims.tid)), (s = this.generateAccountEntity(e, t, r)));
            var u = null;
            if (!re.isEmpty(e.access_token)) {
                var d = e.scope ? wt.fromString(e.scope) : new wt(o || []),
                    h = tr.nowSeconds(),
                    l = (n ? n.ts : h) + e.expires_in,
                    p = l + e.ext_expires_in;
                u = cr.createAccessTokenEntity(this.homeAccountIdentifier, a, e.access_token, this.clientId, t ? t.claims.tid : r.tenant, d.printScopesLowerCase(), l, p);
            }
            var f = null;
            return re.isEmpty(e.refresh_token) || (f = dr.createRefreshTokenEntity(this.homeAccountIdentifier, a, e.refresh_token, this.clientId, e.foci)), new gr(s, c, u, f);
        }),
        (wr.prototype.generateAccountEntity = function (e, t, r) {
            if (r.authorityType === $t.Adfs) return bt.createADFSAccount(r, t);
            if (re.isEmpty(e.client_info)) throw $.createClientInfoEmptyError(e.client_info);
            return bt.createAccount(e.client_info, r, t, this.cryptoObj);
        }),
        (wr.generateAuthenticationResult = function (e, t, r, n) {
            var o = "",
                i = [],
                a = null,
                c = null,
                s = null;
            return (
                e.accessToken && ((o = e.accessToken.secret), (i = wt.fromString(e.accessToken.target).asArray()), (a = new Date(1e3 * Number(e.accessToken.expiresOn))), (c = new Date(1e3 * Number(e.accessToken.extendedExpiresOn)))),
                e.refreshToken && (s = e.refreshToken.familyId || null),
                {
                    uniqueId: t ? t.claims.oid || t.claims.sub : "",
                    tenantId: t ? t.claims.tid : "",
                    scopes: i,
                    account: e.account ? e.account.getAccountInfo() : null,
                    idToken: t ? t.rawIdToken : "",
                    idTokenClaims: t ? t.claims : null,
                    accessToken: o,
                    fromCache: r,
                    expiresOn: a,
                    extExpiresOn: c,
                    familyId: s,
                    state: n ? n.userRequestState : "",
                }
            );
        }),
        wr);
    function wr(e, t, r, n) {
        (this.clientId = e), (this.cacheStorage = t), (this.cryptoObj = r), (this.logger = n);
    }
    var Tr,
        Ir =
            (t(Sr, (Tr = jt)),
            (Sr.prototype.getAuthCodeUrl = function (r) {
                return h(this, void 0, void 0, function () {
                    var t;
                    return m(this, function (e) {
                        return (t = this.createAuthCodeUrlQueryString(r)), [2, this.authority.authorizationEndpoint + "?" + t];
                    });
                });
            }),
            (Sr.prototype.acquireToken = function (n, o, i) {
                return h(this, void 0, void 0, function () {
                    var t, r;
                    return m(this, function (e) {
                        switch (e.label) {
                            case 0:
                                if ((this.logger.info("in acquireToken call"), !n || re.isEmpty(n.code))) throw $.createTokenRequestCannotBeMadeError();
                                return [4, this.executeTokenRequest(this.authority, n)];
                            case 1:
                                return (
                                    (t = e.sent()),
                                    (r = new Cr(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger)).validateTokenResponse(t.body),
                                    [2, r.handleServerTokenResponse(t.body, this.authority, o, i)]
                                );
                        }
                    });
                });
            }),
            (Sr.prototype.handleFragmentResponse = function (e, t) {
                var r = new Cr(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger),
                    n = new St(e),
                    o = St.getDeserializedHash(n.getHash());
                return r.validateServerAuthorizationCodeResponse(o, t, this.cryptoUtils), o.code;
            }),
            (Sr.prototype.getLogoutUri = function (e) {
                if (!e) throw vt.createEmptyLogoutRequestError();
                e.account ? this.cacheManager.removeAccount(bt.generateAccountCacheKey(e.account)) : this.cacheManager.clear();
                var t = e.postLogoutRedirectUri ? "?" + le.POST_LOGOUT_URI + "=" + encodeURIComponent(e.postLogoutRedirectUri) : "",
                    r = e.correlationId ? "&" + le.CLIENT_REQUEST_ID + "=" + encodeURIComponent(e.correlationId) : "";
                return this.authority.endSessionEndpoint + t + r;
            }),
            (Sr.prototype.executeTokenRequest = function (n, o) {
                return h(this, void 0, void 0, function () {
                    var t, r;
                    return m(this, function (e) {
                        return (t = this.createTokenRequestBody(o)), (r = this.createDefaultTokenRequestHeaders()), [2, this.executePostToTokenEndpoint(n.tokenEndpoint, t, r)];
                    });
                });
            }),
            (Sr.prototype.createTokenRequestBody = function (e) {
                var t = new Wt();
                t.addClientId(this.config.authOptions.clientId), t.addRedirectUri(e.redirectUri);
                var r = new wt(e.scopes || []);
                if (
                    (t.addScopes(r),
                    t.addAuthorizationCode(e.code),
                    e.codeVerifier && t.addCodeVerifier(e.codeVerifier),
                    this.config.clientCredentials.clientSecret && t.addClientSecret(this.config.clientCredentials.clientSecret),
                    this.config.clientCredentials.clientAssertion)
                ) {
                    var n = this.config.clientCredentials.clientAssertion;
                    t.addClientAssertion(n.assertion), t.addClientAssertionType(n.assertionType);
                }
                t.addGrantType(He.AUTHORIZATION_CODE_GRANT), t.addClientInfo();
                var o = e.correlationId || this.config.cryptoInterface.createNewGuid();
                return (
                    t.addCorrelationId(o),
                    (!re.isEmpty(e.claims) || (this.config.authOptions.clientCapabilities && 0 < this.config.authOptions.clientCapabilities.length)) && t.addClaims(e.claims, this.config.authOptions.clientCapabilities),
                    t.createQueryString()
                );
            }),
            (Sr.prototype.createAuthCodeUrlQueryString = function (e) {
                var t = new Wt();
                t.addClientId(this.config.authOptions.clientId);
                var r = new wt(e.scopes || []);
                e.extraScopesToConsent && r.appendScopes(e.extraScopesToConsent), t.addScopes(r), t.addRedirectUri(e.redirectUri);
                var n = e.correlationId || this.config.cryptoInterface.createNewGuid();
                return (
                    t.addCorrelationId(n),
                    t.addResponseMode(e.responseMode),
                    t.addResponseTypeCode(),
                    t.addLibraryInfo(this.config.libraryInfo),
                    t.addClientInfo(),
                    e.codeChallenge && t.addCodeChallengeParams(e.codeChallenge, e.codeChallengeMethod),
                    e.prompt && t.addPrompt(e.prompt),
                    e.loginHint && t.addLoginHint(e.loginHint),
                    e.domainHint && t.addDomainHint(e.domainHint),
                    e.sid && t.addSid(e.sid),
                    e.nonce && t.addNonce(e.nonce),
                    e.state && t.addState(e.state),
                    (!re.isEmpty(e.claims) || (this.config.authOptions.clientCapabilities && 0 < this.config.authOptions.clientCapabilities.length)) && t.addClaims(e.claims, this.config.authOptions.clientCapabilities),
                    e.extraQueryParameters && t.addExtraQueryParameters(e.extraQueryParameters),
                    t.createQueryString()
                );
            }),
            Sr);
    function Sr(e) {
        return Tr.call(this, e) || this;
    }
    var Ar;
    t(Rr, (Ar = jt)),
        (Rr.prototype.acquireToken = function (o) {
            return h(this, void 0, void 0, function () {
                var t, r, n;
                return m(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, this.getDeviceCode(o)];
                        case 1:
                            return (t = e.sent()), o.deviceCodeCallback(t), [4, this.acquireTokenWithDeviceCode(o, t)];
                        case 2:
                            return (r = e.sent()), (n = new Cr(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger)).validateTokenResponse(r), [2, n.handleServerTokenResponse(r, this.authority)];
                    }
                });
            });
        }),
        (Rr.prototype.getDeviceCode = function (n) {
            return h(this, void 0, void 0, function () {
                var t, r;
                return m(this, function (e) {
                    return (t = this.createQueryString(n)), (r = this.createDefaultLibraryHeaders()), [2, this.executePostRequestToDeviceCodeEndpoint(this.authority.deviceCodeEndpoint, t, r)];
                });
            });
        }),
        (Rr.prototype.executePostRequestToDeviceCodeEndpoint = function (s, u, d) {
            return h(this, void 0, void 0, function () {
                var t, r, n, o, i, a, c;
                return m(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, this.networkClient.sendPostRequestAsync(s, { body: u, headers: d })];
                        case 1:
                            return (
                                (t = e.sent().body),
                                (r = t.user_code),
                                (n = t.device_code),
                                (o = t.verification_uri),
                                (i = t.expires_in),
                                (a = t.interval),
                                (c = t.message),
                                [2, { userCode: r, deviceCode: n, verificationUri: o, expiresIn: i, interval: a, message: c }]
                            );
                    }
                });
            });
        }),
        (Rr.prototype.createQueryString = function (e) {
            var t = new Wt(),
                r = new wt(e.scopes || []);
            return (
                t.addScopes(r),
                t.addClientId(this.config.authOptions.clientId),
                (!re.isEmpty(e.claims) || (this.config.authOptions.clientCapabilities && 0 < this.config.authOptions.clientCapabilities.length)) && t.addClaims(e.claims, this.config.authOptions.clientCapabilities),
                t.createQueryString()
            );
        }),
        (Rr.prototype.acquireTokenWithDeviceCode = function (u, n) {
            return h(this, void 0, void 0, function () {
                var a,
                    c,
                    s,
                    t,
                    r = this;
                return m(this, function (e) {
                    return (
                        (a = this.createTokenRequestBody(u, n)),
                        (c = this.createDefaultTokenRequestHeaders()),
                        (s = tr.nowSeconds() + n.expiresIn),
                        (t = 1e3 * n.interval),
                        [
                            2,
                            new Promise(function (n, o) {
                                var i = setInterval(function () {
                                    return h(r, void 0, void 0, function () {
                                        var t, r;
                                        return m(this, function (e) {
                                            switch (e.label) {
                                                case 0:
                                                    return (
                                                        e.trys.push([0, 5, , 6]),
                                                        u.cancel ? (this.logger.error("Token request cancelled by setting DeviceCodeRequest.cancel = true"), clearInterval(i), o($.createDeviceCodeCancelledError()), [3, 4]) : [3, 1]
                                                    );
                                                case 1:
                                                    return tr.nowSeconds() > s ? (this.logger.error("Device code expired. Expiration time of device code was " + s), clearInterval(i), o($.createDeviceCodeExpiredError()), [3, 4]) : [3, 2];
                                                case 2:
                                                    return [4, this.executePostToTokenEndpoint(this.authority.tokenEndpoint, a, c)];
                                                case 3:
                                                    (t = e.sent()).body && t.body.error == ke ? this.logger.info(t.body.error_description) : (clearInterval(i), n(t.body)), (e.label = 4);
                                                case 4:
                                                    return [3, 6];
                                                case 5:
                                                    return (r = e.sent()), clearInterval(i), o(r), [3, 6];
                                                case 6:
                                                    return [2];
                                            }
                                        });
                                    });
                                }, t);
                            }),
                        ]
                    );
                });
            });
        }),
        (Rr.prototype.createTokenRequestBody = function (e, t) {
            var r = new Wt(),
                n = new wt(e.scopes || []);
            r.addScopes(n), r.addClientId(this.config.authOptions.clientId), r.addGrantType(He.DEVICE_CODE_GRANT), r.addDeviceCode(t.deviceCode);
            var o = e.correlationId || this.config.cryptoInterface.createNewGuid();
            return (
                r.addCorrelationId(o),
                r.addClientInfo(),
                (!re.isEmpty(e.claims) || (this.config.authOptions.clientCapabilities && 0 < this.config.authOptions.clientCapabilities.length)) && r.addClaims(e.claims, this.config.authOptions.clientCapabilities),
                r.createQueryString()
            );
        });
    function Rr(e) {
        return Ar.call(this, e) || this;
    }
    var _r,
        br =
            (t(Or, (_r = jt)),
            (Or.prototype.acquireToken = function (n) {
                return h(this, void 0, void 0, function () {
                    var t, r;
                    return m(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return [4, this.executeTokenRequest(n, this.authority)];
                            case 1:
                                return (t = e.sent()), (r = new Cr(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger)).validateTokenResponse(t.body), [2, r.handleServerTokenResponse(t.body, this.authority)];
                        }
                    });
                });
            }),
            (Or.prototype.executeTokenRequest = function (n, o) {
                return h(this, void 0, void 0, function () {
                    var t, r;
                    return m(this, function (e) {
                        return (t = this.createTokenRequestBody(n)), (r = this.createDefaultTokenRequestHeaders()), [2, this.executePostToTokenEndpoint(o.tokenEndpoint, t, r)];
                    });
                });
            }),
            (Or.prototype.createTokenRequestBody = function (e) {
                var t = new Wt();
                t.addClientId(this.config.authOptions.clientId);
                var r = new wt(e.scopes || []);
                t.addScopes(r), t.addGrantType(He.REFRESH_TOKEN_GRANT), t.addClientInfo();
                var n = e.correlationId || this.config.cryptoInterface.createNewGuid();
                if ((t.addCorrelationId(n), t.addRefreshToken(e.refreshToken), this.config.clientCredentials.clientSecret && t.addClientSecret(this.config.clientCredentials.clientSecret), this.config.clientCredentials.clientAssertion)) {
                    var o = this.config.clientCredentials.clientAssertion;
                    t.addClientAssertion(o.assertion), t.addClientAssertionType(o.assertionType);
                }
                return (
                    (!re.isEmpty(e.claims) || (this.config.authOptions.clientCapabilities && 0 < this.config.authOptions.clientCapabilities.length)) && t.addClaims(e.claims, this.config.authOptions.clientCapabilities), t.createQueryString()
                );
            }),
            Or);
    function Or(e) {
        return _r.call(this, e) || this;
    }
    var Nr;
    t(kr, (Nr = jt)),
        (kr.prototype.acquireToken = function (r) {
            return h(this, void 0, void 0, function () {
                var t;
                return m(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return (this.scopeSet = new wt(r.scopes || [])), r.skipCache ? [4, this.executeTokenRequest(r, this.authority)] : [3, 2];
                        case 1:
                            return [2, e.sent()];
                        case 2:
                            return null == (t = this.getCachedAuthenticationResult()) ? [3, 3] : [2, t];
                        case 3:
                            return [4, this.executeTokenRequest(r, this.authority)];
                        case 4:
                            return [2, e.sent()];
                    }
                });
            });
        }),
        (kr.prototype.getCachedAuthenticationResult = function () {
            var e = this.readAccessTokenFromCache();
            return !e || tr.isTokenExpired(e.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds) ? null : Cr.generateAuthenticationResult({ account: null, accessToken: e, idToken: null, refreshToken: null }, null, !0);
        }),
        (kr.prototype.readAccessTokenFromCache = function () {
            var e = {
                    homeAccountId: "",
                    environment: this.authority.canonicalAuthorityUrlComponents.HostNameAndPort,
                    credentialType: ze.ACCESS_TOKEN,
                    clientId: this.config.authOptions.clientId,
                    realm: this.authority.tenant,
                    target: this.scopeSet.printScopesLowerCase(),
                },
                t = this.cacheManager.getCredentialsFilteredBy(e),
                r = Object.keys(t.accessTokens).map(function (e) {
                    return t.accessTokens[e];
                });
            return r.length < 1 ? null : r[0];
        }),
        (kr.prototype.executeTokenRequest = function (i, a) {
            return h(this, void 0, void 0, function () {
                var t, r, n, o;
                return m(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return (t = this.createTokenRequestBody(i)), (r = this.createDefaultTokenRequestHeaders()), [4, this.executePostToTokenEndpoint(a.tokenEndpoint, t, r)];
                        case 1:
                            return (
                                (n = e.sent()),
                                (o = new Cr(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger)).validateTokenResponse(n.body),
                                [2, o.handleServerTokenResponse(n.body, this.authority, null, null, i.scopes)]
                            );
                    }
                });
            });
        }),
        (kr.prototype.createTokenRequestBody = function (e) {
            var t = new Wt();
            t.addClientId(this.config.authOptions.clientId), t.addScopes(this.scopeSet), t.addGrantType(He.CLIENT_CREDENTIALS_GRANT);
            var r = e.correlationId || this.config.cryptoInterface.createNewGuid();
            if ((t.addCorrelationId(r), this.config.clientCredentials.clientSecret && t.addClientSecret(this.config.clientCredentials.clientSecret), this.config.clientCredentials.clientAssertion)) {
                var n = this.config.clientCredentials.clientAssertion;
                t.addClientAssertion(n.assertion), t.addClientAssertionType(n.assertionType);
            }
            return (!re.isEmpty(e.claims) || (this.config.authOptions.clientCapabilities && 0 < this.config.authOptions.clientCapabilities.length)) && t.addClaims(e.claims, this.config.authOptions.clientCapabilities), t.createQueryString();
        });
    function kr(e) {
        return Nr.call(this, e) || this;
    }
    var Pr,
        Ur =
            (t(Lr, (Pr = jt)),
            (Lr.prototype.acquireToken = function (l) {
                return h(this, void 0, void 0, function () {
                    var t, r, n, o, i, a, c, s, u, d, h;
                    return m(this, function (e) {
                        if (!l) throw vt.createEmptyTokenRequestError();
                        if (!l.account) throw $.createNoAccountInSilentRequestError();
                        if (
                            ((t = new wt(l.scopes || [])),
                            (r = bt.generateAccountCacheKey(l.account)),
                            (n = this.cacheManager.getAccount(r)),
                            (o = n.homeAccountId),
                            (i = n.environment),
                            (a = this.readAccessTokenFromCache(o, i, t, n.realm)),
                            (c = this.readRefreshTokenFromCache(o, i)),
                            this.isRefreshRequired(l, a))
                        ) {
                            if (!c) throw $.createNoTokensFoundError();
                            return (s = new br(this.config)), (u = p(p({}, l), { refreshToken: c.secret })), [2, s.acquireToken(u)];
                        }
                        return (
                            this.config.serverTelemetryManager && this.config.serverTelemetryManager.incrementCacheHits(),
                            (d = this.readIdTokenFromCache(o, i, n.realm)),
                            (h = new Xt(d.secret, this.config.cryptoInterface)),
                            [2, Cr.generateAuthenticationResult({ account: n, accessToken: a, idToken: d, refreshToken: c }, h, !0)]
                        );
                    });
                });
            }),
            (Lr.prototype.isRefreshRequired = function (e, t) {
                return !(!e.forceRefresh && !e.claims && t && !tr.isTokenExpired(t.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds));
            }),
            (Lr.prototype.readIdTokenFromCache = function (e, t, r) {
                var n = Ze.generateCredentialCacheKey(e, t, ze.ID_TOKEN, this.config.authOptions.clientId, r);
                return this.cacheManager.getCredential(n);
            }),
            (Lr.prototype.readAccessTokenFromCache = function (e, t, r, n) {
                var o = { homeAccountId: e, environment: t, credentialType: ze.ACCESS_TOKEN, clientId: this.config.authOptions.clientId, realm: n, target: r.printScopesLowerCase() },
                    i = this.cacheManager.getCredentialsFilteredBy(o),
                    a = Object.keys(i.accessTokens).map(function (e) {
                        return i.accessTokens[e];
                    });
                return !(1 < a.length) && a.length < 1 ? null : a[0];
            }),
            (Lr.prototype.readRefreshTokenFromCache = function (e, t) {
                var r = Ze.generateCredentialCacheKey(e, t, ze.REFRESH_TOKEN, this.config.authOptions.clientId);
                return this.cacheManager.getCredential(r);
            }),
            Lr);
    function Lr(e) {
        return Pr.call(this, e) || this;
    }
    var Dr =
        (Object.defineProperty(Mr.prototype, "authorityType", {
            get: function () {
                var e = this.canonicalAuthorityUrlComponents.PathSegments;
                return e.length && e[0].toLowerCase() === Te ? $t.Adfs : $t.Default;
            },
            enumerable: !0,
            configurable: !0,
        }),
        Object.defineProperty(Mr.prototype, "canonicalAuthority", {
            get: function () {
                return this._canonicalAuthority.urlString;
            },
            set: function (e) {
                (this._canonicalAuthority = new St(e)), this._canonicalAuthority.validateAsUri(), (this._canonicalAuthorityUrlComponents = null);
            },
            enumerable: !0,
            configurable: !0,
        }),
        Object.defineProperty(Mr.prototype, "canonicalAuthorityUrlComponents", {
            get: function () {
                return this._canonicalAuthorityUrlComponents || (this._canonicalAuthorityUrlComponents = this._canonicalAuthority.getUrlComponents()), this._canonicalAuthorityUrlComponents;
            },
            enumerable: !0,
            configurable: !0,
        }),
        Object.defineProperty(Mr.prototype, "tenant", {
            get: function () {
                return this.canonicalAuthorityUrlComponents.PathSegments[0];
            },
            enumerable: !0,
            configurable: !0,
        }),
        Object.defineProperty(Mr.prototype, "authorizationEndpoint", {
            get: function () {
                if (this.discoveryComplete()) return this.replaceTenant(this.tenantDiscoveryResponse.authorization_endpoint);
                throw $.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
            },
            enumerable: !0,
            configurable: !0,
        }),
        Object.defineProperty(Mr.prototype, "tokenEndpoint", {
            get: function () {
                if (this.discoveryComplete()) return this.replaceTenant(this.tenantDiscoveryResponse.token_endpoint);
                throw $.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
            },
            enumerable: !0,
            configurable: !0,
        }),
        Object.defineProperty(Mr.prototype, "deviceCodeEndpoint", {
            get: function () {
                if (this.discoveryComplete()) return this.tenantDiscoveryResponse.token_endpoint.replace("/token", "/devicecode");
                throw $.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
            },
            enumerable: !0,
            configurable: !0,
        }),
        Object.defineProperty(Mr.prototype, "endSessionEndpoint", {
            get: function () {
                if (this.discoveryComplete()) return this.replaceTenant(this.tenantDiscoveryResponse.end_session_endpoint);
                throw $.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
            },
            enumerable: !0,
            configurable: !0,
        }),
        Object.defineProperty(Mr.prototype, "selfSignedJwtAudience", {
            get: function () {
                if (this.discoveryComplete()) return this.replaceTenant(this.tenantDiscoveryResponse.issuer);
                throw $.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
            },
            enumerable: !0,
            configurable: !0,
        }),
        (Mr.prototype.replaceTenant = function (e) {
            return e.replace(/{tenant}|{tenantid}/g, this.tenant);
        }),
        Object.defineProperty(Mr.prototype, "defaultOpenIdConfigurationEndpoint", {
            get: function () {
                return this.authorityType === $t.Adfs ? this.canonicalAuthority + ".well-known/openid-configuration" : this.canonicalAuthority + "v2.0/.well-known/openid-configuration";
            },
            enumerable: !0,
            configurable: !0,
        }),
        (Mr.prototype.discoveryComplete = function () {
            return !!this.tenantDiscoveryResponse;
        }),
        (Mr.prototype.discoverEndpoints = function (t) {
            return h(this, void 0, void 0, function () {
                return m(this, function (e) {
                    return [2, this.networkInterface.sendGetRequestAsync(t)];
                });
            });
        }),
        Object.defineProperty(Mr.prototype, "aadInstanceDiscoveryEndpointUrl", {
            get: function () {
                return "" + Ie + this.canonicalAuthority + "oauth2/v2.0/authorize";
            },
            enumerable: !0,
            configurable: !0,
        }),
        (Mr.prototype.validateAndSetPreferredNetwork = function () {
            return h(this, void 0, void 0, function () {
                var t, r;
                return m(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return (t = this.canonicalAuthorityUrlComponents.HostNameAndPort), 0 !== Rt.getTrustedHostList().length ? [3, 2] : [4, Rt.setTrustedAuthoritiesFromNetwork(this._canonicalAuthority, this.networkInterface)];
                        case 1:
                            e.sent(), (e.label = 2);
                        case 2:
                            if (!Rt.IsInTrustedHostList(t)) throw vt.createUntrustedAuthorityError();
                            return (r = Rt.getCloudDiscoveryMetadata(t).preferred_network), t !== r && (this.canonicalAuthority = this.canonicalAuthority.replace(t, r)), [2];
                    }
                });
            });
        }),
        (Mr.prototype.resolveEndpointsAsync = function () {
            return h(this, void 0, void 0, function () {
                var t, r;
                return m(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, this.validateAndSetPreferredNetwork()];
                        case 1:
                            return e.sent(), (t = this.defaultOpenIdConfigurationEndpoint), [4, this.discoverEndpoints(t)];
                        case 2:
                            return (r = e.sent()), (this.tenantDiscoveryResponse = r.body), [2];
                    }
                });
            });
        }),
        Mr);
    function Mr(e, t) {
        (this.canonicalAuthority = e), this._canonicalAuthority.validateAsUri(), (this.networkInterface = t);
    }
    var qr =
        ((Hr.createDiscoveredInstance = function (n, o) {
            return h(this, void 0, void 0, function () {
                var t, r;
                return m(this, function (e) {
                    switch (e.label) {
                        case 0:
                            if ((t = Hr.createInstance(n, o)).discoveryComplete()) return [2, t];
                            e.label = 1;
                        case 1:
                            return e.trys.push([1, 3, , 4]), [4, t.resolveEndpointsAsync()];
                        case 2:
                            return e.sent(), [2, t];
                        case 3:
                            throw ((r = e.sent()), $.createEndpointDiscoveryIncompleteError(r));
                        case 4:
                            return [2];
                    }
                });
            });
        }),
        (Hr.createInstance = function (e, t) {
            if (re.isEmpty(e)) throw vt.createUrlEmptyError();
            return new Dr(e, t);
        }),
        Hr);
    function Hr() {}
    var xr =
        ((Kr.prototype.generateCurrentRequestHeaderValue = function () {
            var e = this.forceRefresh ? 1 : 0,
                t = "" + this.apiId + Xe.VALUE_SEPARATOR + e;
            return [Xe.SCHEMA_VERSION, t, ""].join(Xe.CATEGORY_SEPARATOR);
        }),
        (Kr.prototype.generateLastRequestHeaderValue = function () {
            var e = this.getLastRequests(),
                t = e.failedRequests.join(Xe.VALUE_SEPARATOR),
                r = e.errors.join(Xe.VALUE_SEPARATOR),
                n = e.errorCount;
            return [Xe.SCHEMA_VERSION, e.cacheHits, t, r, n].join(Xe.CATEGORY_SEPARATOR);
        }),
        (Kr.prototype.cacheFailedRequest = function (e) {
            var t = this.getLastRequests();
            t.failedRequests.push(this.apiId, this.correlationId),
                t.errors.push(e.errorCode),
                (t.errorCount += 1),
                t.errors.length > Xe.FAILURE_LIMIT && (t.failedRequests.shift(), t.failedRequests.shift(), t.errors.shift()),
                this.cacheManager.setItem(this.telemetryCacheKey, t, We.TELEMETRY);
        }),
        (Kr.prototype.incrementCacheHits = function () {
            var e = this.getLastRequests();
            return (e.cacheHits += 1), this.cacheManager.setItem(this.telemetryCacheKey, e, We.TELEMETRY), e.cacheHits;
        }),
        (Kr.prototype.getLastRequests = function () {
            return this.cacheManager.getItem(this.telemetryCacheKey, We.TELEMETRY) || { failedRequests: [], errors: [], errorCount: 0, cacheHits: 0 };
        }),
        (Kr.prototype.clearTelemetryCache = function () {
            this.cacheManager.removeItem(this.telemetryCacheKey);
        }),
        Kr);
    function Kr(e, t) {
        (this.cacheManager = t), (this.apiId = e.apiId), (this.correlationId = e.correlationId), (this.forceRefresh = e.forceRefresh || !1), (this.telemetryCacheKey = Xe.CACHE_KEY + je.CACHE_KEY_SEPARATOR + e.clientId);
    }
    var Fr,
        jr,
        Gr,
        zr,
        Yr,
        Wr,
        Br,
        Vr,
        Qr = "localStorage",
        Jr = "sessionStorage",
        Xr = "interaction.status",
        Zr = "interaction_in_progress",
        $r = "invalid_grant",
        en = 483,
        tn = 600,
        rn = 50,
        nn = "msal.js.browser";
    ((jr = Fr = Fr || {}).GET = "GET"),
        (jr.POST = "POST"),
        ((zr = Gr = Gr || {}).AUTHORITY = "authority"),
        (zr.ACQUIRE_TOKEN_ACCOUNT = "acquireToken.account"),
        (zr.SESSION_STATE = "session.state"),
        (zr.REQUEST_STATE = "request.state"),
        (zr.NONCE_IDTOKEN = "nonce.id_token"),
        (zr.ORIGIN_URI = "request.origin"),
        (zr.RENEW_STATUS = "token.renew.status"),
        (zr.URL_HASH = "urlHash"),
        (zr.REQUEST_PARAMS = "request.params"),
        (zr.SCOPES = "scopes"),
        ((Wr = Yr = Yr || {})[(Wr.acquireTokenRedirect = 861)] = "acquireTokenRedirect"),
        (Wr[(Wr.acquireTokenPopup = 862)] = "acquireTokenPopup"),
        (Wr[(Wr.ssoSilent = 863)] = "ssoSilent"),
        (Wr[(Wr.acquireTokenSilent_authCode = 864)] = "acquireTokenSilent_authCode"),
        (Wr[(Wr.handleRedirectPromise = 865)] = "handleRedirectPromise"),
        (Wr[(Wr.acquireTokenSilent_silentFlow = 61)] = "acquireTokenSilent_silentFlow"),
        ((Vr = Br = Br || {}).REDIRECT = "redirect"),
        (Vr.POPUP = "popup"),
        (Vr.SILENT = "silent");
    var on = { scopes: [Ae, Re] },
        an =
            ((cn.prototype.sendGetRequestAsync = function (n, o) {
                return l(this, void 0, void 0, function () {
                    var t, r;
                    return y(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return [4, fetch(n, { method: Fr.GET, headers: this.getFetchHeaders(o) })];
                            case 1:
                                return (t = e.sent()), (r = { headers: this.getHeaderDict(t.headers) }), [4, t.json()];
                            case 2:
                                return [2, ((r.body = e.sent()), (r.status = t.status), r)];
                        }
                    });
                });
            }),
            (cn.prototype.sendPostRequestAsync = function (o, i) {
                return l(this, void 0, void 0, function () {
                    var t, r, n;
                    return y(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return (t = (i && i.body) || ""), [4, fetch(o, { method: Fr.POST, headers: this.getFetchHeaders(i), body: t })];
                            case 1:
                                return (r = e.sent()), (n = { headers: this.getHeaderDict(r.headers) }), [4, r.json()];
                            case 2:
                                return [2, ((n.body = e.sent()), (n.status = r.status), n)];
                        }
                    });
                });
            }),
            (cn.prototype.getFetchHeaders = function (t) {
                var r = new Headers();
                return (
                    t &&
                        t.headers &&
                        Object.keys(t.headers).forEach(function (e) {
                            r.append(e, t.headers[e]);
                        }),
                    r
                );
            }),
            (cn.prototype.getHeaderDict = function (e) {
                var r = {};
                return (
                    e.forEach(function (e, t) {
                        r[t] = e;
                    }),
                    r
                );
            }),
            cn);
    function cn() {}
    var sn,
        un = {
            noWindowObjectError: { code: "no_window_object", desc: "No window object detected." },
            pkceNotGenerated: { code: "pkce_not_created", desc: "The PKCE code challenge and verifier could not be generated." },
            cryptoDoesNotExist: { code: "crypto_nonexistent", desc: "The crypto object or function is not available." },
            httpMethodNotImplementedError: { code: "http_method_not_implemented", desc: "The HTTP method given has not been implemented in this library." },
            emptyNavigateUriError: { code: "empty_navigate_uri", desc: "Navigation URI is empty. Please check stack trace for more info." },
            hashEmptyError: { code: "hash_empty_error", desc: "Hash value cannot be processed because it is empty." },
            interactionInProgress: { code: "interaction_in_progress", desc: "Interaction is currently in progress. Please ensure that this interaction has been completed before calling an interactive API." },
            popUpWindowError: { code: "popup_window_error", desc: "Error opening popup window. This can happen if you are using IE or if popups are blocked in the browser." },
            emptyWindowError: { code: "empty_window_error", desc: "window.open returned null or undefined window object." },
            userCancelledError: { code: "user_cancelled", desc: "User cancelled the flow." },
            monitorWindowTimeoutError: { code: "monitor_window_timeout", desc: "Token acquisition in popup failed due to timeout." },
            redirectInIframeError: { code: "redirect_in_iframe", desc: "Code flow is not supported inside an iframe. Please ensure you are using MSAL.js in a top frame of the window if using the redirect APIs, or use the popup APIs." },
            blockTokenRequestsInHiddenIframeError: { code: "block_iframe_reload", desc: "Request was blocked inside an iframe because MSAL detected an authentication response. Please ensure monitorWindowForHash was called." },
            iframeClosedPrematurelyError: { code: "iframe_closed_prematurely", desc: "The iframe being monitored was closed prematurely." },
            silentSSOInsufficientInfoError: { code: "silent_sso_error", desc: "Silent SSO could not be completed - insufficient information was provided. Please provide either a loginHint or sid." },
            silentPromptValueError: { code: "silent_prompt_value_error", desc: "The value given for the prompt value is not valid for silent requests - must be set to 'none'." },
            tokenRequestCacheError: { code: "token_request_cache_error", desc: "The token request could not be fetched from the cache correctly." },
            invalidCacheType: { code: "invalid_cache_type", desc: "Invalid cache type" },
        },
        dn =
            (e(hn, (sn = c)),
            (hn.createNoWindowObjectError = function () {
                return new hn(un.noWindowObjectError.code, un.noWindowObjectError.desc);
            }),
            (hn.createPkceNotGeneratedError = function (e) {
                return new hn(un.pkceNotGenerated.code, un.pkceNotGenerated.desc + " Detail:" + e);
            }),
            (hn.createCryptoNotAvailableError = function (e) {
                return new hn(un.cryptoDoesNotExist.code, un.cryptoDoesNotExist.desc + " Detail:" + e);
            }),
            (hn.createHttpMethodNotImplementedError = function (e) {
                return new hn(un.httpMethodNotImplementedError.code, un.httpMethodNotImplementedError.desc + " Given Method: " + e);
            }),
            (hn.createEmptyNavigationUriError = function () {
                return new hn(un.emptyNavigateUriError.code, un.emptyNavigateUriError.desc);
            }),
            (hn.createEmptyHashError = function (e) {
                return new hn(un.hashEmptyError.code, un.hashEmptyError.desc + " Given Url: " + e);
            }),
            (hn.createInteractionInProgressError = function () {
                return new hn(un.interactionInProgress.code, un.interactionInProgress.desc);
            }),
            (hn.createPopupWindowError = function (e) {
                var t = un.popUpWindowError.desc;
                return (t = re.isEmpty(e) ? t : t + " Details: " + e), new hn(un.popUpWindowError.code, t);
            }),
            (hn.createEmptyWindowCreatedError = function () {
                return new hn(un.emptyWindowError.code, un.emptyWindowError.desc);
            }),
            (hn.createUserCancelledError = function () {
                return new hn(un.userCancelledError.code, un.userCancelledError.desc);
            }),
            (hn.createMonitorWindowTimeoutError = function () {
                return new hn(un.monitorWindowTimeoutError.code, un.monitorWindowTimeoutError.desc);
            }),
            (hn.createRedirectInIframeError = function (e) {
                return new hn(un.redirectInIframeError.code, un.redirectInIframeError.desc + " (window.parent !== window) => " + e);
            }),
            (hn.createBlockReloadInHiddenIframeError = function () {
                return new hn(un.blockTokenRequestsInHiddenIframeError.code, un.blockTokenRequestsInHiddenIframeError.desc);
            }),
            (hn.createIframeClosedPrematurelyError = function () {
                return new hn(un.iframeClosedPrematurelyError.code, un.iframeClosedPrematurelyError.desc);
            }),
            (hn.createSilentSSOInsufficientInfoError = function () {
                return new hn(un.silentSSOInsufficientInfoError.code, un.silentSSOInsufficientInfoError.desc);
            }),
            (hn.createSilentPromptValueError = function (e) {
                return new hn(un.silentPromptValueError.code, un.silentPromptValueError.desc + " Given value: " + e);
            }),
            (hn.createTokenRequestCacheError = function (e) {
                return new hn(un.tokenRequestCacheError.code, un.tokenRequestCacheError.desc + " Error Detail: " + e);
            }),
            (hn.createInvalidCacheTypeError = function () {
                return new hn(un.invalidCacheType.code, "" + un.invalidCacheType.desc);
            }),
            hn);
    function hn(e, t) {
        var r = sn.call(this, e, t) || this;
        return Object.setPrototypeOf(r, hn.prototype), (r.name = "BrowserAuthError"), r;
    }
    var ln =
        ((pn.prototype.sendGetRequestAsync = function (t, r) {
            return l(this, void 0, void 0, function () {
                return y(this, function (e) {
                    return [2, this.sendRequestAsync(t, Fr.GET, r)];
                });
            });
        }),
        (pn.prototype.sendPostRequestAsync = function (t, r) {
            return l(this, void 0, void 0, function () {
                return y(this, function (e) {
                    return [2, this.sendRequestAsync(t, Fr.POST, r)];
                });
            });
        }),
        (pn.prototype.sendRequestAsync = function (e, t, i) {
            var a = this;
            return new Promise(function (r, n) {
                var o = new XMLHttpRequest();
                if (
                    (o.open(t, e, !0),
                    a.setXhrHeaders(o, i),
                    (o.onload = function () {
                        (o.status < 200 || 300 <= o.status) && n(o.responseText);
                        try {
                            var e = JSON.parse(o.responseText),
                                t = { headers: a.getHeaderDict(o), body: e, status: o.status };
                            r(t);
                        } catch (e) {
                            n(o.responseText);
                        }
                    }),
                    (o.onerror = function () {
                        n(o.status);
                    }),
                    "POST" === t && i.body)
                )
                    o.send(i.body);
                else {
                    if ("GET" !== t) throw dn.createHttpMethodNotImplementedError(t);
                    o.send();
                }
            });
        }),
        (pn.prototype.setXhrHeaders = function (t, r) {
            r &&
                r.headers &&
                Object.keys(r.headers).forEach(function (e) {
                    t.setRequestHeader(e, r.headers[e]);
                });
        }),
        (pn.prototype.getHeaderDict = function (e) {
            var t = e
                    .getAllResponseHeaders()
                    .trim()
                    .split(/[\r\n]+/),
                o = {};
            return (
                t.forEach(function (e) {
                    var t = e.split(": "),
                        r = t.shift(),
                        n = t.join(": ");
                    o[r] = n;
                }),
                o
            );
        }),
        pn);
    function pn() {}
    var fn =
        ((yn.navigateWindow = function (e, t) {
            t ? window.location.replace(e) : window.location.assign(e);
        }),
        (yn.clearHash = function () {
            window.location.hash = "";
        }),
        (yn.replaceHash = function (e) {
            var t = e.split("#");
            t.shift(), (window.location.hash = 0 < t.length ? t.join("#") : "");
        }),
        (yn.isInIframe = function () {
            return window.parent !== window;
        }),
        (yn.getCurrentUri = function () {
            return window.location.href.split("?")[0].split("#")[0];
        }),
        (yn.getHomepage = function () {
            var e = new St(window.location.href).getUrlComponents();
            return e.Protocol + "//" + e.HostNameAndPort + "/";
        }),
        (yn.getBrowserNetworkClient = function () {
            return window.fetch ? new an() : new ln();
        }),
        (yn.blockReloadInHiddenIframes = function () {
            if (St.hashContainsKnownProperties(window.location.hash) && yn.isInIframe()) throw dn.createBlockReloadInHiddenIframeError();
        }),
        (yn.detectIEOrEdge = function () {
            var e = window.navigator.userAgent,
                t = e.indexOf("MSIE "),
                r = e.indexOf("Trident/"),
                n = e.indexOf("Edge/");
            return 0 < t || 0 < r || 0 < n;
        }),
        yn);
    function yn() {}
    var mn = { clientId: "", authority: "" + we, knownAuthorities: [], cloudDiscoveryMetadata: "", redirectUri: "", postLogoutRedirectUri: "", navigateToLoginRequestUrl: !0, clientCapabilities: [] },
        gn = { cacheLocation: Jr, storeAuthStateInCookie: !1 },
        En = f(f({}, Mt), {
            loggerOptions: { loggerCallback: function () {}, piiLoggingEnabled: !1 },
            networkClient: fn.getBrowserNetworkClient(),
            windowHashTimeout: 6e4,
            iframeHashTimeout: 6e3,
            loadFrameTimeout: fn.detectIEOrEdge() ? 500 : 0,
            asyncPopups: !1,
        });
    var vn,
        Cn = {
            redirectUriNotSet: { code: "redirect_uri_empty", desc: "A redirect URI is required for all calls, and none has been set." },
            postLogoutUriNotSet: { code: "post_logout_uri_empty", desc: "A post logout redirect has not been set." },
            storageNotSupportedError: { code: "storage_not_supported", desc: "Given storage configuration option was not supported." },
            noRedirectCallbacksSet: {
                code: "no_redirect_callbacks",
                desc:
                    "No redirect callbacks have been set. Please call setRedirectCallbacks() with the appropriate function arguments before continuing. More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics.",
            },
            invalidCallbackObject: {
                code: "invalid_callback_object",
                desc: "The object passed for the callback was invalid. More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics.",
            },
        },
        wn =
            (e(Tn, (vn = c)),
            (Tn.createRedirectUriEmptyError = function () {
                return new Tn(Cn.redirectUriNotSet.code, Cn.redirectUriNotSet.desc);
            }),
            (Tn.createPostLogoutRedirectUriEmptyError = function () {
                return new Tn(Cn.postLogoutUriNotSet.code, Cn.postLogoutUriNotSet.desc);
            }),
            (Tn.createStorageNotSupportedError = function (e) {
                return new Tn(Cn.storageNotSupportedError.code, Cn.storageNotSupportedError.desc + " Given Location: " + e);
            }),
            (Tn.createInvalidCallbackObjectError = function (e) {
                return new Tn(Cn.invalidCallbackObject.code, Cn.invalidCallbackObject.desc + " Given value for callback function: " + e);
            }),
            (Tn.createRedirectCallbacksNotSetError = function () {
                return new Tn(Cn.noRedirectCallbacksSet.code, Cn.noRedirectCallbacksSet.desc);
            }),
            Tn);
    function Tn(e, t) {
        var r = vn.call(this, e, t) || this;
        return (r.name = "BrowserConfigurationAuthError"), Object.setPrototypeOf(r, Tn.prototype), r;
    }
    var In,
        Sn =
            (e(An, (In = Nt)),
            (An.prototype.validateWindowStorage = function (e) {
                if ("undefined" == typeof window || !window) throw dn.createNoWindowObjectError();
                if (e !== Qr && e !== Jr) throw wn.createStorageNotSupportedError(e);
                if (!window[e]) throw wn.createStorageNotSupportedError(e);
            }),
            (An.prototype.migrateCacheEntries = function () {
                var r = this,
                    e = Ce + "." + se.ID_TOKEN,
                    t = Ce + "." + se.CLIENT_INFO,
                    n = Ce + "." + se.ERROR,
                    o = Ce + "." + se.ERROR_DESC,
                    i = [this.windowStorage.getItem(e), this.windowStorage.getItem(t), this.windowStorage.getItem(n), this.windowStorage.getItem(o)];
                [se.ID_TOKEN, se.CLIENT_INFO, se.ERROR, se.ERROR_DESC].forEach(function (e, t) {
                    return r.migrateCacheEntry(e, i[t]);
                });
            }),
            (An.prototype.migrateCacheEntry = function (e, t) {
                t && this.setItem(this.generateCacheKey(e), t, We.TEMPORARY);
            }),
            (An.prototype.validateObjectKey = function (e) {
                JSON.parse(e);
            }),
            (An.prototype.setItem = function (e, t, r) {
                switch (r) {
                    case We.ACCOUNT:
                    case We.CREDENTIAL:
                    case We.APP_METADATA:
                        this.windowStorage.setItem(e, JSON.stringify(t));
                        break;
                    case We.TEMPORARY:
                        var n = t;
                        this.windowStorage.setItem(e, n), this.cacheConfig.storeAuthStateInCookie && this.setItemCookie(e, n);
                        break;
                    case We.TELEMETRY:
                        this.windowStorage.setItem(e, JSON.stringify(t));
                        break;
                    default:
                        throw dn.createInvalidCacheTypeError();
                }
            }),
            (An.prototype.getItem = function (e, t) {
                var r = this.windowStorage.getItem(e);
                if (re.isEmpty(r)) return null;
                switch (t) {
                    case We.ACCOUNT:
                        var n = new bt();
                        return Nt.toObject(n, JSON.parse(r));
                    case We.CREDENTIAL:
                        switch (Ze.getCredentialType(e)) {
                            case ze.ID_TOKEN:
                                var o = new or();
                                return Nt.toObject(o, JSON.parse(r));
                            case ze.ACCESS_TOKEN:
                                var i = new cr();
                                return Nt.toObject(i, JSON.parse(r));
                            case ze.REFRESH_TOKEN:
                                var a = new dr();
                                return Nt.toObject(a, JSON.parse(r));
                        }
                    case We.APP_METADATA:
                        return JSON.parse(r);
                    case We.TEMPORARY:
                        var c = this.getItemCookie(e);
                        return this.cacheConfig.storeAuthStateInCookie ? c : r;
                    case We.TELEMETRY:
                        return JSON.parse(r);
                    default:
                        throw dn.createInvalidCacheTypeError();
                }
            }),
            (An.prototype.removeItem = function (e) {
                return this.windowStorage.removeItem(e), this.cacheConfig.storeAuthStateInCookie && this.clearItemCookie(e), !0;
            }),
            (An.prototype.containsKey = function (e) {
                return this.windowStorage.hasOwnProperty(e);
            }),
            (An.prototype.getKeys = function () {
                return Object.keys(this.windowStorage);
            }),
            (An.prototype.clear = function () {
                var e;
                for (e in (this.removeAllAccounts(), this.removeAppMetadata(), this.windowStorage)) !this.windowStorage.hasOwnProperty(e) || (-1 === e.indexOf(Ce) && -1 === e.indexOf(this.clientId)) || this.removeItem(e);
            }),
            (An.prototype.setItemCookie = function (e, t, r) {
                var n = encodeURIComponent(e) + "=" + encodeURIComponent(t) + ";path=/;";
                r && (n += "expires=" + this.getCookieExpirationTime(r) + ";"), (document.cookie = n);
            }),
            (An.prototype.getItemCookie = function (e) {
                for (var t = encodeURIComponent(e) + "=", r = document.cookie.split(";"), n = 0; n < r.length; n++) {
                    for (var o = r[n]; " " === o.charAt(0); ) o = o.substring(1);
                    if (0 === o.indexOf(t)) return decodeURIComponent(o.substring(t.length, o.length));
                }
                return "";
            }),
            (An.prototype.clearItemCookie = function (e) {
                this.setItemCookie(e, "", -1);
            }),
            (An.prototype.clearMsalCookie = function (e) {
                var t = e ? Gr.NONCE_IDTOKEN + "|" + e : Gr.NONCE_IDTOKEN;
                this.clearItemCookie(this.generateCacheKey(t)), this.clearItemCookie(this.generateCacheKey(Gr.REQUEST_STATE)), this.clearItemCookie(this.generateCacheKey(Gr.ORIGIN_URI));
            }),
            (An.prototype.getCookieExpirationTime = function (e) {
                var t = new Date();
                return new Date(t.getTime() + 864e5 * e).toUTCString();
            }),
            (An.prototype.getCache = function () {
                return this.windowStorage;
            }),
            (An.prototype.setCache = function () {}),
            (An.prototype.generateCacheKey = function (t) {
                try {
                    return this.validateObjectKey(t), t;
                } catch (e) {
                    return re.startsWith(t, Ce) || re.startsWith(t, se.ADAL_ID_TOKEN) ? t : Ce + "." + this.clientId + "." + t;
                }
            }),
            (An.prototype.generateAuthorityKey = function (e) {
                return "" + Gr.AUTHORITY + Se + e;
            }),
            (An.prototype.generateNonceKey = function (e) {
                return "" + Gr.NONCE_IDTOKEN + Se + e;
            }),
            (An.prototype.setAuthorityCache = function (e, t) {
                var r = this.generateAuthorityKey(t);
                this.setItem(this.generateCacheKey(r), e, We.TEMPORARY);
            }),
            (An.prototype.getCachedAuthority = function () {
                var e = this.getItem(this.generateCacheKey(Gr.REQUEST_STATE), We.TEMPORARY);
                return e ? this.getItem(this.generateCacheKey(this.generateAuthorityKey(e)), We.TEMPORARY) : null;
            }),
            (An.prototype.updateCacheEntries = function (e, t, r) {
                this.setItem(this.generateCacheKey(Gr.REQUEST_STATE), e, We.TEMPORARY), this.setItem(this.generateCacheKey(this.generateNonceKey(e)), t, We.TEMPORARY), this.setAuthorityCache(r, e);
            }),
            (An.prototype.resetRequestCache = function (t) {
                var r = this;
                this.getKeys().forEach(function (e) {
                    re.isEmpty(t) || -1 === e.indexOf(t) || r.removeItem(e);
                }),
                    this.removeItem(this.generateCacheKey(Gr.REQUEST_STATE)),
                    this.removeItem(this.generateCacheKey(Gr.REQUEST_PARAMS)),
                    this.removeItem(this.generateCacheKey(Gr.ORIGIN_URI)),
                    this.removeItem(this.generateCacheKey(Gr.URL_HASH));
            }),
            (An.prototype.cleanRequest = function () {
                this.removeItem(this.generateCacheKey(Xr));
                var e = this.getItem(this.generateCacheKey(Gr.REQUEST_STATE), We.TEMPORARY);
                this.resetRequestCache(e || "");
            }),
            (An.prototype.cacheCodeRequest = function (e, t) {
                this.setItem(this.generateCacheKey(Gr.REQUEST_PARAMS), t.base64Encode(JSON.stringify(e)), We.TEMPORARY);
            }),
            (An.prototype.getCachedRequest = function (e, t) {
                try {
                    var r = this.getItem(this.generateCacheKey(Gr.REQUEST_PARAMS), We.TEMPORARY),
                        n = JSON.parse(t.base64Decode(r));
                    if ((this.removeItem(this.generateCacheKey(Gr.REQUEST_PARAMS)), re.isEmpty(n.authority))) {
                        var o = this.generateAuthorityKey(e),
                            i = this.getItem(this.generateCacheKey(o), We.TEMPORARY);
                        n.authority = i;
                    }
                    return n;
                } catch (e) {
                    throw dn.createTokenRequestCacheError(e);
                }
            }),
            An);
    function An(e, t) {
        var r = In.call(this) || this;
        return r.validateWindowStorage(t.cacheLocation), (r.cacheConfig = t), (r.windowStorage = window[r.cacheConfig.cacheLocation]), (r.clientId = e), r.migrateCacheEntries(), r;
    }
    var Rn =
        ((_n.decimalToHex = function (e) {
            for (var t = e.toString(16); t.length < 2; ) t = "0" + t;
            return t;
        }),
        _n);
    function _n() {}
    var bn =
        ((On.prototype.generateGuid = function () {
            try {
                var e = new Uint8Array(16);
                return (
                    this.cryptoObj.getRandomValues(e),
                    (e[6] |= 64),
                    (e[6] &= 79),
                    (e[8] |= 128),
                    (e[8] &= 191),
                    Rn.decimalToHex(e[0]) +
                        Rn.decimalToHex(e[1]) +
                        Rn.decimalToHex(e[2]) +
                        Rn.decimalToHex(e[3]) +
                        "-" +
                        Rn.decimalToHex(e[4]) +
                        Rn.decimalToHex(e[5]) +
                        "-" +
                        Rn.decimalToHex(e[6]) +
                        Rn.decimalToHex(e[7]) +
                        "-" +
                        Rn.decimalToHex(e[8]) +
                        Rn.decimalToHex(e[9]) +
                        "-" +
                        Rn.decimalToHex(e[10]) +
                        Rn.decimalToHex(e[11]) +
                        Rn.decimalToHex(e[12]) +
                        Rn.decimalToHex(e[13]) +
                        Rn.decimalToHex(e[14]) +
                        Rn.decimalToHex(e[15])
                );
            } catch (e) {
                for (var t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx", r = "0123456789abcdef", n = 0, o = "", i = 0; i < 36; i++)
                    "-" !== t[i] && "4" !== t[i] && (n = (16 * Math.random()) | 0), "x" === t[i] ? (o += r[n]) : "y" === t[i] ? ((n &= 3), (o += r[(n |= 8)])) : (o += t[i]);
                return o;
            }
        }),
        (On.isGuid = function (e) {
            return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(e);
        }),
        On);
    function On(e) {
        this.cryptoObj = e;
    }
    var Nn =
        ((kn.stringToUtf8Arr = function (e) {
            for (var t, r = 0, n = e.length, o = 0; o < n; o++) r += (t = e.charCodeAt(o)) < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : t < 2097152 ? 4 : t < 67108864 ? 5 : 6;
            for (var i = new Uint8Array(r), a = 0, c = 0; a < r; c++)
                (t = e.charCodeAt(c)) < 128
                    ? (i[a++] = t)
                    : (t < 2048
                          ? (i[a++] = 192 + (t >>> 6))
                          : (t < 65536
                                ? (i[a++] = 224 + (t >>> 12))
                                : (t < 2097152 ? (i[a++] = 240 + (t >>> 18)) : (t < 67108864 ? (i[a++] = 248 + (t >>> 24)) : ((i[a++] = 252 + (t >>> 30)), (i[a++] = 128 + ((t >>> 24) & 63))), (i[a++] = 128 + ((t >>> 18) & 63))),
                                  (i[a++] = 128 + ((t >>> 12) & 63))),
                            (i[a++] = 128 + ((t >>> 6) & 63))),
                      (i[a++] = 128 + (63 & t)));
            return i;
        }),
        (kn.utf8ArrToString = function (e) {
            for (var t = "", r = void 0, n = e.length, o = 0; o < n; o++)
                (r = e[o]),
                    (t += String.fromCharCode(
                        251 < r && r < 254 && o + 5 < n
                            ? 1073741824 * (r - 252) + ((e[++o] - 128) << 24) + ((e[++o] - 128) << 18) + ((e[++o] - 128) << 12) + ((e[++o] - 128) << 6) + e[++o] - 128
                            : 247 < r && r < 252 && o + 4 < n
                            ? ((r - 248) << 24) + ((e[++o] - 128) << 18) + ((e[++o] - 128) << 12) + ((e[++o] - 128) << 6) + e[++o] - 128
                            : 239 < r && r < 248 && o + 3 < n
                            ? ((r - 240) << 18) + ((e[++o] - 128) << 12) + ((e[++o] - 128) << 6) + e[++o] - 128
                            : 223 < r && r < 240 && o + 2 < n
                            ? ((r - 224) << 12) + ((e[++o] - 128) << 6) + e[++o] - 128
                            : 191 < r && r < 224 && o + 1 < n
                            ? ((r - 192) << 6) + e[++o] - 128
                            : r
                    ));
            return t;
        }),
        kn);
    function kn() {}
    var Pn =
        ((Un.prototype.urlEncode = function (e) {
            return encodeURIComponent(this.encode(e).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_"));
        }),
        (Un.prototype.urlEncodeArr = function (e) {
            return this.base64EncArr(e).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
        }),
        (Un.prototype.encode = function (e) {
            var t = Nn.stringToUtf8Arr(e);
            return this.base64EncArr(t);
        }),
        (Un.prototype.base64EncArr = function (e) {
            for (var t = (3 - (e.length % 3)) % 3, r = "", n = void 0, o = e.length, i = 0, a = 0; a < o; a++)
                (n = a % 3),
                    (i |= e[a] << ((16 >>> n) & 24)),
                    (2 !== n && e.length - a != 1) || ((r += String.fromCharCode(this.uint6ToB64((i >>> 18) & 63), this.uint6ToB64((i >>> 12) & 63), this.uint6ToB64((i >>> 6) & 63), this.uint6ToB64(63 & i))), (i = 0));
            return 0 == t ? r : r.substring(0, r.length - t) + (1 == t ? "=" : "==");
        }),
        (Un.prototype.uint6ToB64 = function (e) {
            return e < 26 ? e + 65 : e < 52 ? e + 71 : e < 62 ? e - 4 : 62 === e ? 43 : 63 === e ? 47 : 65;
        }),
        Un);
    function Un() {}
    var Ln =
        ((Dn.prototype.decode = function (e) {
            var t = e.replace(/-/g, "+").replace(/_/g, "/");
            switch (t.length % 4) {
                case 0:
                    break;
                case 2:
                    t += "==";
                    break;
                case 3:
                    t += "=";
                    break;
                default:
                    throw new Error("Invalid base64 string");
            }
            var r = this.base64DecToArr(t);
            return decodeURIComponent(Nn.utf8ArrToString(r));
        }),
        (Dn.prototype.base64DecToArr = function (e, t) {
            for (var r = e.replace(/[^A-Za-z0-9\+\/]/g, ""), n = r.length, o = t ? Math.ceil(((3 * n + 1) >>> 2) / t) * t : (3 * n + 1) >>> 2, i = new Uint8Array(o), a = void 0, c = void 0, s = 0, u = 0, d = 0; d < n; d++)
                if (((c = 3 & d), (s |= this.b64ToUint6(r.charCodeAt(d)) << (18 - 6 * c)), 3 === c || n - d == 1)) {
                    for (a = 0; a < 3 && u < o; a++, u++) i[u] = (s >>> ((16 >>> a) & 24)) & 255;
                    s = 0;
                }
            return i;
        }),
        (Dn.prototype.b64ToUint6 = function (e) {
            return 64 < e && e < 91 ? e - 65 : 96 < e && e < 123 ? e - 71 : 47 < e && e < 58 ? e + 4 : 43 === e ? 62 : 47 === e ? 63 : 0;
        }),
        Dn);
    function Dn() {}
    var Mn =
        ((qn.prototype.generateCodes = function () {
            return l(this, void 0, void 0, function () {
                var t, r;
                return y(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return (t = this.generateCodeVerifier()), [4, this.generateCodeChallengeFromVerifier(t)];
                        case 1:
                            return (r = e.sent()), [2, { verifier: t, challenge: r }];
                    }
                });
            });
        }),
        (qn.prototype.generateCodeVerifier = function () {
            try {
                var e = new Uint8Array(32);
                return this.cryptoObj.getRandomValues(e), this.base64Encode.urlEncodeArr(e);
            } catch (e) {
                throw dn.createPkceNotGeneratedError(e);
            }
        }),
        (qn.prototype.generateCodeChallengeFromVerifier = function (n) {
            return l(this, void 0, void 0, function () {
                var t, r;
                return y(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return e.trys.push([0, 2, , 3]), [4, this.cryptoObj.sha256Digest(n)];
                        case 1:
                            return (t = e.sent()), [2, this.base64Encode.urlEncodeArr(new Uint8Array(t))];
                        case 2:
                            throw ((r = e.sent()), dn.createPkceNotGeneratedError(r));
                        case 3:
                            return [2];
                    }
                });
            });
        }),
        qn);
    function qn(e) {
        (this.base64Encode = new Pn()), (this.cryptoObj = e);
    }
    var Hn = "SHA-256",
        xn =
            ((Kn.prototype.sha256Digest = function (r) {
                return l(this, void 0, void 0, function () {
                    var t;
                    return y(this, function (e) {
                        return (t = Nn.stringToUtf8Arr(r)), [2, this.hasIECrypto() ? this.getMSCryptoDigest(Hn, t) : this.getSubtleCryptoDigest(Hn, t)];
                    });
                });
            }),
            (Kn.prototype.getRandomValues = function (e) {
                var t = window.msCrypto || window.crypto;
                if (!t.getRandomValues) throw dn.createCryptoNotAvailableError("getRandomValues does not exist.");
                t.getRandomValues(e);
            }),
            (Kn.prototype.hasIECrypto = function () {
                return !!window.msCrypto;
            }),
            (Kn.prototype.hasBrowserCrypto = function () {
                return !!window.crypto;
            }),
            (Kn.prototype.hasCryptoAPI = function () {
                return this.hasIECrypto() || this.hasBrowserCrypto();
            }),
            (Kn.prototype.getSubtleCryptoDigest = function (t, r) {
                return l(this, void 0, void 0, function () {
                    return y(this, function (e) {
                        return [2, window.crypto.subtle.digest(t, r)];
                    });
                });
            }),
            (Kn.prototype.getMSCryptoDigest = function (n, o) {
                return l(this, void 0, void 0, function () {
                    return y(this, function (e) {
                        return [
                            2,
                            new Promise(function (t, r) {
                                var e = window.msCrypto.subtle.digest(n, o.buffer);
                                e.addEventListener("complete", function (e) {
                                    t(e.target.result);
                                }),
                                    e.addEventListener("error", function (e) {
                                        r(e);
                                    });
                            }),
                        ];
                    });
                });
            }),
            Kn);
    function Kn() {
        if (!this.hasCryptoAPI()) throw dn.createCryptoNotAvailableError("Browser crypto or msCrypto object not available.");
    }
    var Fn =
        ((jn.prototype.createNewGuid = function () {
            return this.guidGenerator.generateGuid();
        }),
        (jn.prototype.base64Encode = function (e) {
            return this.b64Encode.encode(e);
        }),
        (jn.prototype.base64Decode = function (e) {
            return this.b64Decode.decode(e);
        }),
        (jn.prototype.generatePkceCodes = function () {
            return l(this, void 0, void 0, function () {
                return y(this, function (e) {
                    return [2, this.pkceGenerator.generateCodes()];
                });
            });
        }),
        jn);
    function jn() {
        (this.browserCrypto = new xn()), (this.b64Encode = new Pn()), (this.b64Decode = new Ln()), (this.guidGenerator = new bn(this.browserCrypto)), (this.pkceGenerator = new Mn(this.browserCrypto));
    }
    var Gn =
        ((zn.prototype.handleCodeResponse = function (a) {
            return l(this, void 0, void 0, function () {
                var t, r, n, o, i;
                return y(this, function (e) {
                    switch (e.label) {
                        case 0:
                            if (re.isEmpty(a)) throw dn.createEmptyHashError(a);
                            return (
                                (t = this.browserStorage.getItem(this.browserStorage.generateCacheKey(Gr.REQUEST_STATE), We.TEMPORARY)),
                                (r = this.authModule.handleFragmentResponse(a, t)),
                                (n = this.browserStorage.generateNonceKey(t)),
                                (o = this.browserStorage.getItem(this.browserStorage.generateCacheKey(n), We.TEMPORARY)),
                                (this.authCodeRequest.code = r),
                                [4, this.authModule.acquireToken(this.authCodeRequest, o, t)]
                            );
                        case 1:
                            return (i = e.sent()), this.browserStorage.cleanRequest(), [2, i];
                    }
                });
            });
        }),
        zn);
    function zn(e, t) {
        (this.authModule = e), (this.browserStorage = t);
    }
    var Yn,
        Wn =
            (e(Bn, (Yn = Gn)),
            (Bn.prototype.initiateAuthRequest = function (e, t, r, n) {
                if (re.isEmpty(e)) throw (this.authModule.logger.info("Navigate url is empty"), dn.createEmptyNavigationUriError());
                r && this.browserStorage.setItem(this.browserStorage.generateCacheKey(Gr.ORIGIN_URI), r, We.TEMPORARY),
                    this.browserStorage.setItem(this.browserStorage.generateCacheKey(Xr), Zr, We.TEMPORARY),
                    this.browserStorage.cacheCodeRequest(t, n),
                    this.authModule.logger.infoPii("Navigate to:" + e);
                var o = fn.isInIframe();
                if (o) throw dn.createRedirectInIframeError(o);
                return fn.navigateWindow(e), window;
            }),
            (Bn.prototype.handleCodeResponse = function (a, c) {
                return l(this, void 0, void 0, function () {
                    var t, r, n, o, i;
                    return y(this, function (e) {
                        switch (e.label) {
                            case 0:
                                if (re.isEmpty(a)) throw dn.createEmptyHashError(a);
                                return (
                                    this.browserStorage.removeItem(this.browserStorage.generateCacheKey(Xr)),
                                    (t = this.browserStorage.getItem(this.browserStorage.generateCacheKey(Gr.REQUEST_STATE), We.TEMPORARY)),
                                    (r = this.authModule.handleFragmentResponse(a, t)),
                                    (n = this.browserStorage.generateNonceKey(t)),
                                    (o = this.browserStorage.getItem(this.browserStorage.generateCacheKey(n), We.TEMPORARY)),
                                    (this.authCodeRequest = this.browserStorage.getCachedRequest(t, c)),
                                    (this.authCodeRequest.code = r),
                                    [4, this.authModule.acquireToken(this.authCodeRequest, o, t)]
                                );
                            case 1:
                                return (i = e.sent()), this.browserStorage.cleanRequest(), [2, i];
                        }
                    });
                });
            }),
            Bn);
    function Bn() {
        return (null !== Yn && Yn.apply(this, arguments)) || this;
    }
    var Vn,
        Qn =
            (e(Jn, (Vn = Gn)),
            (Jn.prototype.initiateAuthRequest = function (e, t, r) {
                if (re.isEmpty(e)) throw (this.authModule.logger.error("Navigate url is empty"), dn.createEmptyNavigationUriError());
                return (this.authCodeRequest = t), this.browserStorage.setItem(this.browserStorage.generateCacheKey(Xr), Zr, We.TEMPORARY), this.authModule.logger.infoPii("Navigate to:" + e), this.openPopup(e, r);
            }),
            (Jn.prototype.monitorPopupForHash = function (c, e) {
                var s = this;
                return new Promise(function (r, n) {
                    var o = e / rn,
                        i = 0,
                        a = setInterval(function () {
                            if (c.closed) return s.cleanPopup(), clearInterval(a), void n(dn.createUserCancelledError());
                            var e;
                            try {
                                e = c.location.href;
                            } catch (e) {}
                            if (!re.isEmpty(e) && "about:blank" !== e) {
                                i++;
                                var t = c.location.hash;
                                return St.hashContainsKnownProperties(t) ? (s.cleanPopup(c), clearInterval(a), void r(t)) : o < i ? (s.cleanPopup(c), clearInterval(a), void n(dn.createMonitorWindowTimeoutError())) : void 0;
                            }
                        }, rn);
                });
            }),
            (Jn.prototype.openPopup = function (e, t) {
                try {
                    var r = void 0;
                    if ((t ? (r = t).location.assign(e) : void 0 === t && (r = Jn.openSizedPopup(e)), !r)) throw dn.createEmptyWindowCreatedError();
                    return r.focus && r.focus(), (this.currentWindow = r), window.addEventListener("beforeunload", this.unloadWindow), r;
                } catch (e) {
                    throw (this.authModule.logger.error("error opening popup " + e.message), this.browserStorage.removeItem(this.browserStorage.generateCacheKey(Xr)), dn.createPopupWindowError(e.toString()));
                }
            }),
            (Jn.openSizedPopup = function (e) {
                void 0 === e && (e = "about:blank");
                var t = window.screenLeft ? window.screenLeft : window.screenX,
                    r = window.screenTop ? window.screenTop : window.screenY,
                    n = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                    o = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
                    i = Math.max(0, n / 2 - en / 2 + t),
                    a = Math.max(0, o / 2 - tn / 2 + r);
                return window.open(e, Ee, "width=" + en + ", height=" + tn + ", top=" + a + ", left=" + i);
            }),
            (Jn.prototype.unloadWindow = function (e) {
                this.browserStorage.cleanRequest(), this.currentWindow.close(), delete e.returnValue;
            }),
            (Jn.prototype.cleanPopup = function (e) {
                e && e.close(), window.removeEventListener("beforeunload", this.unloadWindow), this.browserStorage.removeItem(this.browserStorage.generateCacheKey(Xr));
            }),
            Jn);
    function Jn(e, t) {
        var r = Vn.call(this, e, t) || this;
        return (r.unloadWindow = r.unloadWindow.bind(r)), r;
    }
    var Xn,
        Zn =
            (e($n, (Xn = Gn)),
            ($n.prototype.initiateAuthRequest = function (n, o, i) {
                return l(this, void 0, void 0, function () {
                    var t, r;
                    return y(this, function (e) {
                        switch (e.label) {
                            case 0:
                                if (re.isEmpty(n)) throw (this.authModule.logger.info("Navigate url is empty"), dn.createEmptyNavigationUriError());
                                return (this.authCodeRequest = o), (t = i ? "msalTokenFrame" + i : "msalTokenFrame"), this.loadFrameTimeout ? [4, this.loadFrame(n, t)] : [3, 2];
                            case 1:
                                return (r = e.sent()), [3, 3];
                            case 2:
                                (r = this.loadFrameSync(n, t)), (e.label = 3);
                            case 3:
                                return [2, r];
                        }
                    });
                });
            }),
            ($n.prototype.monitorIframeForHash = function (a, e) {
                var c = this;
                return new Promise(function (r, n) {
                    var o = window.performance.now() + e,
                        i = setInterval(function () {
                            if (window.performance.now() > o) return c.removeHiddenIframe(a), clearInterval(i), void n(dn.createMonitorWindowTimeoutError());
                            var e;
                            try {
                                e = a.contentWindow.location.href;
                            } catch (e) {}
                            if (!re.isEmpty(e)) {
                                var t = a.contentWindow.location.hash;
                                return St.hashContainsKnownProperties(t) ? (c.removeHiddenIframe(a), clearInterval(i), void r(t)) : void 0;
                            }
                        }, rn);
                });
            }),
            ($n.prototype.loadFrame = function (n, o) {
                var i = this;
                return new Promise(function (t, r) {
                    setTimeout(function () {
                        var e = i.loadFrameSync(n, o);
                        e ? t(e) : r("Unable to load iframe with name: " + o);
                    }, i.loadFrameTimeout);
                });
            }),
            ($n.prototype.loadFrameSync = function (e, t) {
                var r = this.getHiddenIframe(t);
                return r ? (("" !== r.src && "about:blank" !== r.src) || (r.src = e), r) : null;
            }),
            ($n.prototype.getHiddenIframe = function (e) {
                if (void 0 === e) return null;
                var t = document.getElementById(e);
                if (!t) {
                    if (document.createElement && document.documentElement && -1 === window.navigator.userAgent.indexOf("MSIE 5.0")) {
                        var r = document.createElement("iframe");
                        r.setAttribute("id", e),
                            (r.style.visibility = "hidden"),
                            (r.style.position = "absolute"),
                            (r.style.width = r.style.height = "0"),
                            (r.style.border = "0"),
                            r.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms"),
                            (t = document.getElementsByTagName("body")[0].appendChild(r));
                    } else document.body && document.body.insertAdjacentHTML && document.body.insertAdjacentHTML("beforeend", "<iframe name='" + e + "' id='" + e + "' style='display:none'></iframe>");
                    window.frames && window.frames[e] && (t = window.frames[e]);
                }
                return t;
            }),
            ($n.prototype.removeHiddenIframe = function (e) {
                document.body === e.parentNode && document.body.removeChild(e);
            }),
            $n);
    function $n(e, t, r) {
        var n = Xn.call(this, e, t) || this;
        return (n.loadFrameTimeout = r), n;
    }
    var eo =
        ((to.extractBrowserRequestState = function (e, t) {
            if (re.isEmpty(t)) return null;
            try {
                return Er.parseRequestState(e, t).libraryState.meta;
            } catch (e) {
                throw $.createInvalidStateError(t, e);
            }
        }),
        to);
    function to() {}
    var ro =
        ((no.prototype.handleRedirectPromise = function () {
            return l(this, void 0, void 0, function () {
                return y(this, function (e) {
                    return [2, this.handleRedirectResponse()];
                });
            });
        }),
        (no.prototype.handleRedirectResponse = function () {
            return l(this, void 0, void 0, function () {
                var t, r, n, o, i, a;
                return y(this, function (e) {
                    return (
                        (t = this.getRedirectResponseHash()),
                        re.isEmpty(t)
                            ? [2, null]
                            : ((r = this.browserStorage.getItem(this.browserStorage.generateCacheKey(Gr.ORIGIN_URI), We.TEMPORARY)),
                              (n = St.removeHashFromUrl(r || "")),
                              (o = St.removeHashFromUrl(window.location.href)),
                              n === o && this.config.auth.navigateToLoginRequestUrl
                                  ? (-1 < r.indexOf("#") && fn.replaceHash(r), [2, this.handleHash(t)])
                                  : this.config.auth.navigateToLoginRequestUrl
                                  ? (fn.isInIframe() ||
                                        ((i = this.browserStorage.generateCacheKey(Gr.URL_HASH)),
                                        this.browserStorage.setItem(i, t, We.TEMPORARY),
                                        r && "null" !== r
                                            ? fn.navigateWindow(r, !0)
                                            : ((a = fn.getHomepage()),
                                              this.browserStorage.setItem(this.browserStorage.generateCacheKey(Gr.ORIGIN_URI), a, We.TEMPORARY),
                                              this.logger.warning("Unable to get valid login request url from cache, redirecting to home page"),
                                              fn.navigateWindow(a, !0))),
                                    [2, null])
                                  : [2, this.handleHash(t)])
                    );
                });
            });
        }),
        (no.prototype.getRedirectResponseHash = function () {
            var e = window.location.hash,
                t = St.hashContainsKnownProperties(e),
                r = this.browserStorage.getItem(this.browserStorage.generateCacheKey(Gr.URL_HASH), We.TEMPORARY);
            this.browserStorage.removeItem(this.browserStorage.generateCacheKey(Gr.URL_HASH));
            var n = t ? e : r;
            if (n) {
                var o = St.getDeserializedHash(n);
                return eo.extractBrowserRequestState(this.browserCrypto, o.state).interactionType !== Br.REDIRECT ? null : (fn.clearHash(), n);
            }
            return this.browserStorage.cleanRequest(), null;
        }),
        (no.prototype.handleHash = function (c) {
            return l(this, void 0, void 0, function () {
                var t, r, n, o, i, a;
                return y(this, function (e) {
                    switch (e.label) {
                        case 0:
                            (t = this.browserStorage.getItem(this.browserStorage.generateCacheKey(Gr.REQUEST_PARAMS), We.TEMPORARY)),
                                (r = JSON.parse(this.browserCrypto.base64Decode(t))),
                                (n = this.initializeServerTelemetryManager(Yr.handleRedirectPromise, r.correlationId)),
                                (e.label = 1);
                        case 1:
                            return e.trys.push([1, 4, , 5]), (o = this.browserStorage.getCachedAuthority()), [4, this.createAuthCodeClient(n, o)];
                        case 2:
                            return (i = e.sent()), [4, new Wn(i, this.browserStorage).handleCodeResponse(c, this.browserCrypto)];
                        case 3:
                            return [2, e.sent()];
                        case 4:
                            throw ((a = e.sent()), n.cacheFailedRequest(a), this.browserStorage.cleanRequest(), a);
                        case 5:
                            return [2];
                    }
                });
            });
        }),
        (no.prototype.loginRedirect = function (t) {
            return l(this, void 0, void 0, function () {
                return y(this, function (e) {
                    return [2, this.acquireTokenRedirect(t || on)];
                });
            });
        }),
        (no.prototype.acquireTokenRedirect = function (u) {
            return l(this, void 0, void 0, function () {
                var t, r, n, o, i, a, c, s;
                return y(this, function (e) {
                    switch (e.label) {
                        case 0:
                            (t = this.preflightInteractiveRequest(u, Br.REDIRECT)), (r = this.initializeServerTelemetryManager(Yr.acquireTokenRedirect, t.correlationId)), (e.label = 1);
                        case 1:
                            return e.trys.push([1, 5, , 6]), [4, this.initializeAuthorizationCodeRequest(t)];
                        case 2:
                            return (n = e.sent()), [4, this.createAuthCodeClient(r, t.authority)];
                        case 3:
                            return (o = e.sent()), (i = new Wn(o, this.browserStorage)), [4, o.getAuthCodeUrl(t)];
                        case 4:
                            return (a = e.sent()), (c = (u && u.redirectStartPage) || window.location.href), i.initiateAuthRequest(a, n, c, this.browserCrypto), [3, 6];
                        case 5:
                            throw ((s = e.sent()), r.cacheFailedRequest(s), this.browserStorage.cleanRequest(), s);
                        case 6:
                            return [2];
                    }
                });
            });
        }),
        (no.prototype.loginPopup = function (e) {
            return this.acquireTokenPopup(e || on);
        }),
        (no.prototype.acquireTokenPopup = function (e) {
            if (this.config.system.asyncPopups) return this.acquireTokenPopupAsync(e);
            var t = Qn.openSizedPopup();
            return this.acquireTokenPopupAsync(e, t);
        }),
        (no.prototype.acquireTokenPopupAsync = function (d, h) {
            return l(this, void 0, void 0, function () {
                var t, r, n, o, i, a, c, s, u;
                return y(this, function (e) {
                    switch (e.label) {
                        case 0:
                            (t = this.preflightInteractiveRequest(d, Br.POPUP)), (r = this.initializeServerTelemetryManager(Yr.acquireTokenPopup, t.correlationId)), (e.label = 1);
                        case 1:
                            return e.trys.push([1, 7, , 8]), [4, this.initializeAuthorizationCodeRequest(t)];
                        case 2:
                            return (n = e.sent()), [4, this.createAuthCodeClient(r, t.authority)];
                        case 3:
                            return [4, (o = e.sent()).getAuthCodeUrl(t)];
                        case 4:
                            return (i = e.sent()), (a = new Qn(o, this.browserStorage)), (c = a.initiateAuthRequest(i, n, h)), [4, a.monitorPopupForHash(c, this.config.system.windowHashTimeout)];
                        case 5:
                            return (s = e.sent()), [4, a.handleCodeResponse(s)];
                        case 6:
                            return [2, e.sent()];
                        case 7:
                            throw ((u = e.sent()), r.cacheFailedRequest(u), this.browserStorage.cleanRequest(), u);
                        case 8:
                            return [2];
                    }
                });
            });
        }),
        (no.prototype.ssoSilent = function (s) {
            return l(this, void 0, void 0, function () {
                var t, r, n, o, i, a, c;
                return y(this, function (e) {
                    switch (e.label) {
                        case 0:
                            if ((fn.blockReloadInHiddenIframes(), re.isEmpty(s.loginHint) && re.isEmpty(s.sid))) throw dn.createSilentSSOInsufficientInfoError();
                            if (s.prompt && s.prompt !== De.NONE) throw dn.createSilentPromptValueError(s.prompt);
                            (t = this.initializeAuthorizationRequest(f(f({}, s), { prompt: De.NONE }), Br.SILENT)), (r = this.initializeServerTelemetryManager(Yr.ssoSilent, t.correlationId)), (e.label = 1);
                        case 1:
                            return e.trys.push([1, 6, , 7]), [4, this.initializeAuthorizationCodeRequest(t)];
                        case 2:
                            return (n = e.sent()), (o = t.scopes ? t.scopes.join(" ") : ""), [4, this.createAuthCodeClient(r, t.authority)];
                        case 3:
                            return [4, (i = e.sent()).getAuthCodeUrl(t)];
                        case 4:
                            return (a = e.sent()), [4, this.silentTokenHelper(a, n, i, o)];
                        case 5:
                            return [2, e.sent()];
                        case 6:
                            throw ((c = e.sent()), r.cacheFailedRequest(c), this.browserStorage.cleanRequest(), c);
                        case 7:
                            return [2];
                    }
                });
            });
        }),
        (no.prototype.acquireTokenSilent = function (p) {
            return l(this, void 0, void 0, function () {
                var t, r, n, o, i, a, c, s, u, d, h, l;
                return y(this, function (e) {
                    switch (e.label) {
                        case 0:
                            fn.blockReloadInHiddenIframes(), (t = f(f({}, p), this.initializeBaseRequest(p))), (r = this.initializeServerTelemetryManager(Yr.acquireTokenSilent_silentFlow, t.correlationId)), (e.label = 1);
                        case 1:
                            return e.trys.push([1, 4, , 12]), [4, this.createSilentFlowClient(r, t.authority)];
                        case 2:
                            return [4, e.sent().acquireToken(t)];
                        case 3:
                            return [2, e.sent()];
                        case 4:
                            if (((n = e.sent()), r.cacheFailedRequest(n), (o = n instanceof Qt), (i = n instanceof yr), (a = n.errorCode === $r), !o || !a || i)) return [3, 11];
                            (c = this.initializeAuthorizationRequest(f(f({}, t), { redirectUri: p.redirectUri, prompt: De.NONE }), Br.SILENT)),
                                (r = this.initializeServerTelemetryManager(Yr.acquireTokenSilent_authCode, c.correlationId)),
                                (e.label = 5);
                        case 5:
                            return e.trys.push([5, 10, , 11]), [4, this.initializeAuthorizationCodeRequest(c)];
                        case 6:
                            return (s = e.sent()), [4, this.createAuthCodeClient(r, c.authority)];
                        case 7:
                            return [4, (u = e.sent()).getAuthCodeUrl(c)];
                        case 8:
                            return (d = e.sent()), (h = c.scopes ? c.scopes.join(" ") : ""), [4, this.silentTokenHelper(d, s, u, h)];
                        case 9:
                            return [2, e.sent()];
                        case 10:
                            throw ((l = e.sent()), r.cacheFailedRequest(l), this.browserStorage.cleanRequest(), l);
                        case 11:
                            throw n;
                        case 12:
                            return [2];
                    }
                });
            });
        }),
        (no.prototype.silentTokenHelper = function (o, i, a, c) {
            return l(this, void 0, void 0, function () {
                var t, r, n;
                return y(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, (t = new Zn(a, this.browserStorage, this.config.system.loadFrameTimeout)).initiateAuthRequest(o, i, c)];
                        case 1:
                            return (r = e.sent()), [4, t.monitorIframeForHash(r, this.config.system.iframeHashTimeout)];
                        case 2:
                            return (n = e.sent()), [2, t.handleCodeResponse(n)];
                    }
                });
            });
        }),
        (no.prototype.logout = function (o) {
            return l(this, void 0, void 0, function () {
                var t, r, n;
                return y(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return (t = this.initializeLogoutRequest(o)), [4, this.createAuthCodeClient(null, t && t.authority)];
                        case 1:
                            return (r = e.sent()), (n = r.getLogoutUri(t)), fn.navigateWindow(n), [2];
                    }
                });
            });
        }),
        (no.prototype.getAllAccounts = function () {
            return this.browserStorage.getAllAccounts();
        }),
        (no.prototype.getAccountByUsername = function (t) {
            var e = this.getAllAccounts();
            return (
                (!re.isEmpty(t) &&
                    e &&
                    e.length &&
                    e.filter(function (e) {
                        return e.username.toLowerCase() === t.toLowerCase();
                    })[0]) ||
                null
            );
        }),
        (no.prototype.getAccountByHomeId = function (t) {
            var e = this.getAllAccounts();
            return (
                (!re.isEmpty(t) &&
                    e &&
                    e.length &&
                    e.filter(function (e) {
                        return e.homeAccountId === t;
                    })[0]) ||
                null
            );
        }),
        (no.prototype.getRedirectUri = function (e) {
            return e || this.config.auth.redirectUri || fn.getCurrentUri();
        }),
        (no.prototype.getPostLogoutRedirectUri = function (e) {
            return e || this.config.auth.postLogoutRedirectUri || fn.getCurrentUri();
        }),
        (no.prototype.getDiscoveredDefaultAuthority = function () {
            return l(this, void 0, void 0, function () {
                var t;
                return y(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return this.defaultAuthority ? [3, 2] : ((t = this), [4, qr.createDiscoveredInstance(this.config.auth.authority, this.config.system.networkClient)]);
                        case 1:
                            (t.defaultAuthority = e.sent()), (e.label = 2);
                        case 2:
                            return [2, this.defaultAuthority];
                    }
                });
            });
        }),
        (no.prototype.interactionInProgress = function () {
            return this.browserStorage.getItem(this.browserStorage.generateCacheKey(Xr), We.TEMPORARY) === Zr;
        }),
        (no.prototype.createAuthCodeClient = function (r, n) {
            return l(this, void 0, void 0, function () {
                var t;
                return y(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, this.getClientConfiguration(r, n)];
                        case 1:
                            return (t = e.sent()), [2, new Ir(t)];
                    }
                });
            });
        }),
        (no.prototype.createSilentFlowClient = function (r, n) {
            return l(this, void 0, void 0, function () {
                var t;
                return y(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, this.getClientConfiguration(r, n)];
                        case 1:
                            return (t = e.sent()), [2, new Ur(t)];
                    }
                });
            });
        }),
        (no.prototype.getClientConfiguration = function (n, o) {
            return l(this, void 0, void 0, function () {
                var t, r;
                return y(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return re.isEmpty(o) || o === this.config.auth.authority ? [3, 2] : [4, qr.createDiscoveredInstance(o, this.config.system.networkClient)];
                        case 1:
                            return (r = e.sent()), [3, 4];
                        case 2:
                            return [4, this.getDiscoveredDefaultAuthority()];
                        case 3:
                            (r = e.sent()), (e.label = 4);
                        case 4:
                            return (
                                (t = r),
                                [
                                    2,
                                    {
                                        authOptions: {
                                            clientId: this.config.auth.clientId,
                                            authority: t,
                                            knownAuthorities: this.config.auth.knownAuthorities,
                                            cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
                                            clientCapabilities: this.config.auth.clientCapabilities,
                                        },
                                        systemOptions: { tokenRenewalOffsetSeconds: this.config.system.tokenRenewalOffsetSeconds },
                                        loggerOptions: { loggerCallback: this.config.system.loggerOptions.loggerCallback, piiLoggingEnabled: this.config.system.loggerOptions.piiLoggingEnabled },
                                        cryptoInterface: this.browserCrypto,
                                        networkInterface: this.networkClient,
                                        storageInterface: this.browserStorage,
                                        serverTelemetryManager: n,
                                        libraryInfo: { sku: nn, version: "2.1.0", cpu: "", os: "" },
                                    },
                                ]
                            );
                    }
                });
            });
        }),
        (no.prototype.preflightInteractiveRequest = function (e, t) {
            if ((fn.blockReloadInHiddenIframes(), this.interactionInProgress())) throw dn.createInteractionInProgressError();
            return this.initializeAuthorizationRequest(e, t);
        }),
        (no.prototype.initializeBaseRequest = function (e) {
            var t = f({}, e);
            return re.isEmpty(t.authority) && (t.authority = this.config.auth.authority), (t.correlationId = (e && e.correlationId) || this.browserCrypto.createNewGuid()), t;
        }),
        (no.prototype.initializeServerTelemetryManager = function (e, t, r) {
            var n = { clientId: this.config.auth.clientId, correlationId: t, apiId: e, forceRefresh: r || !1 };
            return new xr(n, this.browserStorage);
        }),
        (no.prototype.setDefaultScopes = function (e) {
            return f(f({}, e), {
                scopes: (function () {
                    for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                    var n = Array(e),
                        o = 0;
                    for (t = 0; t < r; t++) for (var i = arguments[t], a = 0, c = i.length; a < c; a++, o++) n[o] = i[a];
                    return n;
                })((e && e.scopes) || [], on.scopes),
            });
        }),
        (no.prototype.initializeAuthorizationRequest = function (e, t) {
            var r = f({}, e);
            if (((r.redirectUri = this.getRedirectUri(r.redirectUri)), re.isEmpty(r.loginHint))) {
                var n = this.browserStorage.getItem(se.ADAL_ID_TOKEN, We.TEMPORARY);
                if (!re.isEmpty(n)) {
                    var o = new Xt(n, this.browserCrypto);
                    this.browserStorage.removeItem(se.ADAL_ID_TOKEN), o.claims && o.claims.upn && (r.loginHint = o.claims.upn);
                }
            }
            var i = { interactionType: t };
            return (
                (r.state = Er.setRequestState(this.browserCrypto, (e && e.state) || "", i)),
                re.isEmpty(r.nonce) && (r.nonce = this.browserCrypto.createNewGuid()),
                (r.responseMode = Me.FRAGMENT),
                (r = f(f({}, r), this.initializeBaseRequest(r))),
                this.browserStorage.updateCacheEntries(r.state, r.nonce, r.authority),
                f(f({}, r), this.setDefaultScopes(r))
            );
        }),
        (no.prototype.initializeAuthorizationCodeRequest = function (n) {
            return l(this, void 0, void 0, function () {
                var t, r;
                return y(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, this.browserCrypto.generatePkceCodes()];
                        case 1:
                            return (t = e.sent()), (r = f(f({}, n), { redirectUri: n.redirectUri, code: "", codeVerifier: t.verifier })), (n.codeChallenge = t.challenge), (n.codeChallengeMethod = Oe), [2, r];
                    }
                });
            });
        }),
        (no.prototype.initializeLogoutRequest = function (e) {
            var t = f({}, e);
            return (
                re.isEmpty(t.authority) && (t.authority = this.config.auth.authority),
                (t.correlationId = (t && t.correlationId) || this.browserCrypto.createNewGuid()),
                (t.postLogoutRedirectUri = this.getPostLogoutRedirectUri(e ? e.postLogoutRedirectUri : "")),
                t
            );
        }),
        no);
    function no(e) {
        (this.config = (function (e) {
            var t = e.auth,
                r = e.cache,
                n = e.system;
            return { auth: f(f({}, mn), t), cache: f(f({}, gn), r), system: f(f({}, En), n) };
        })(e)),
            (this.browserCrypto = new Fn()),
            (this.networkClient = this.config.system.networkClient),
            (this.browserStorage = new Sn(this.config.auth.clientId, this.config.cache)),
            (this.logger = new oe(this.config.system.loggerOptions)),
            Rt.setTrustedAuthoritiesFromConfig(this.config.auth.knownAuthorities, this.config.auth.cloudDiscoveryMetadata),
            (this.defaultAuthority = null);
    }
    (o.AuthError = c),
        (o.AuthErrorMessage = r),
        (o.BrowserAuthError = dn),
        (o.BrowserAuthErrorMessage = un),
        (o.BrowserConfigurationAuthError = wn),
        (o.BrowserConfigurationAuthErrorMessage = Cn),
        (o.InteractionRequiredAuthError = yr),
        (o.Logger = oe),
        (o.PublicClientApplication = ro),
        Object.defineProperty(o, "__esModule", { value: !0 });
});
