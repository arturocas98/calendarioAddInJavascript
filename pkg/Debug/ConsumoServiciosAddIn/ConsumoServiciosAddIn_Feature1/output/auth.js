"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var msalClient = new msal.PublicClientApplication(msalConfig);

function signIn(_x, _x2) {
  return _signIn.apply(this, arguments);
} // <signOutSnippet>


function _signIn() {
  _signIn = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(inicio, fin) {
    var authResult, eventos;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return msalClient.loginPopup(msalRequest);

          case 3:
            authResult = _context.sent;
            console.log('id_token acquired at: ' + new Date().toString()); // Save the account username, needed for token acquisition

            sessionStorage.setItem('msalAccount', authResult.account.username); // Get the user's profile from Graph

            _context.next = 8;
            return getUser();

          case 8:
            user = _context.sent;
            // Save the profile in session
            sessionStorage.setItem('graphUser', JSON.stringify(user)); //updatePage(Views.home);

            _context.next = 12;
            return getEvents(inicio, fin);

          case 12:
            eventos = _context.sent;
            _context.next = 18;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 15]]);
  }));
  return _signIn.apply(this, arguments);
}

function signOut() {
  account = null;
  sessionStorage.removeItem('graphUser');
  msalClient.logout();
} // </signOutSnippet>
// <getTokenSnippet>


function getToken() {
  return _getToken.apply(this, arguments);
} // </getTokenSnippet>


function _getToken() {
  _getToken = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var account, silentRequest, silentResult, interactiveResult;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            account = sessionStorage.getItem('msalAccount');

            if (account) {
              _context2.next = 3;
              break;
            }

            throw new Error('User account missing from session. Please sign out and sign in again.');

          case 3:
            _context2.prev = 3;
            // First, attempt to get the token silently
            silentRequest = {
              scopes: msalRequest.scopes,
              account: msalClient.getAccountByUsername(account)
            };
            _context2.next = 7;
            return msalClient.acquireTokenSilent(silentRequest);

          case 7:
            silentResult = _context2.sent;
            return _context2.abrupt("return", silentResult.accessToken);

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](3);

            if (!(_context2.t0 instanceof msal.InteractionRequiredAuthError)) {
              _context2.next = 20;
              break;
            }

            _context2.next = 16;
            return msalClient.acquireTokenPopup(msalRequest);

          case 16:
            interactiveResult = _context2.sent;
            return _context2.abrupt("return", interactiveResult.accessToken);

          case 20:
            throw _context2.t0;

          case 21:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 11]]);
  }));
  return _getToken.apply(this, arguments);
}