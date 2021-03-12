"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// <graphInitSnippet>
// Create an authentication provider
var authProvider = {
  getAccessToken: function () {
    var _getAccessToken = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return getToken();

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function getAccessToken() {
      return _getAccessToken.apply(this, arguments);
    }

    return getAccessToken;
  }()
}; // Initialize the Graph client

var graphClient = MicrosoftGraph.Client.initWithMiddleware({
  authProvider: authProvider
}); // </graphInitSnippet>
// <getUserSnippet>

function getUser() {
  return _getUser.apply(this, arguments);
} // </getUserSnippet>
// <getEventsSnippet>


function _getUser() {
  _getUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return graphClient.api("/me") // Only get the fields used by the app
            .select("id,displayName,mail,userPrincipalName,mailboxSettings").get();

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getUser.apply(this, arguments);
}

function getEvents(_x, _x2) {
  return _getEvents.apply(this, arguments);
} // </getEventsSnippet>
// <createEventSnippet>


function _getEvents() {
  _getEvents = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(inicio, fin) {
    var user, ianaTimeZone, date_inicio, date_fin, concat_fecha_inicio, concat_fecha_fin, response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            user = JSON.parse(sessionStorage.getItem("graphUser"));
            ianaTimeZone = getIanaFromWindows(user.mailboxSettings.timeZone);
            console.log("Converted: ".concat(ianaTimeZone)); //let startOfWeek = moment.tz('America/Bogota').startOf('week').utc();
            // Set end of the view to 7 days after start of week
            //let endOfWeek = moment(startOfWeek).add(1, 'day');
            //let startOfWeek = moment(fin).tz('America/Bogota');

            date_inicio = moment(inicio).format("YYYY-MM-DD");
            date_fin = moment(fin).format("YYYY-MM-DD"); //2021 - 03 - 23T08: 00: 00z

            concat_fecha_inicio = date_inicio + "T08:00:00Z";
            concat_fecha_fin = date_fin + "T08:00:00Z";
            console.log("fecha_inicio:", concat_fecha_inicio);
            console.log("fecha_fin:", concat_fecha_fin);
            _context3.prev = 9;
            _context3.next = 12;
            return graphClient.api("/me/calendarview") // Set the Prefer=outlook.timezone header so date/times are in
            // user's preferred time zone
            .header("Prefer", "outlook.timezone=\"".concat(user.mailboxSettings.timeZone, "\"")) // Add the startDateTime and endDateTime query parameters
            .query({
              startDateTime: concat_fecha_inicio,
              endDateTime: concat_fecha_fin
            }) // Select just the fields we are interested in
            .select("subject,organizer,start,end") // Sort the results by start, earliest first
            .orderby("start/dateTime") // Maximum 50 events in response
            .top(50).get();

          case 12:
            response = _context3.sent;
            //let eventos = [];
            //eventos = response.value;
            modalEventos(response.value); //updatePage(Views.calendar, response.value);

            _context3.next = 19;
            break;

          case 16:
            _context3.prev = 16;
            _context3.t0 = _context3["catch"](9);
            console.log("error:", _context3.t0); //updatePage(Views.error, {
            //  message: 'Error getting events',
            //  debug: error
            //});

          case 19:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[9, 16]]);
  }));
  return _getEvents.apply(this, arguments);
}

function createNewEvent() {
  return _createNewEvent.apply(this, arguments);
} // </createEventSnippet>


function _createNewEvent() {
  _createNewEvent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var user, subject, attendees, start, end, body, newEvent, attendeeArray, _iterator, _step, attendee;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            user = JSON.parse(sessionStorage.getItem("graphUser")); // Get the user's input

            subject = document.getElementById("ev-subject").value;
            attendees = document.getElementById("ev-attendees").value;
            start = document.getElementById("ev-start").value;
            end = document.getElementById("ev-end").value;
            body = document.getElementById("ev-body").value; // Require at least subject, start, and end

            if (!(!subject || !start || !end)) {
              _context4.next = 9;
              break;
            }

            updatePage(Views.error, {
              message: "Please provide a subject, start, and end."
            });
            return _context4.abrupt("return");

          case 9:
            // Build the JSON payload of the event
            newEvent = {
              subject: subject,
              start: {
                dateTime: start,
                timeZone: user.mailboxSettings.timeZone
              },
              end: {
                dateTime: end,
                timeZone: user.mailboxSettings.timeZone
              }
            };

            if (attendees) {
              attendeeArray = attendees.split(";");
              newEvent.attendees = [];
              _iterator = _createForOfIteratorHelper(attendeeArray);

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  attendee = _step.value;

                  if (attendee.length > 0) {
                    newEvent.attendees.push({
                      type: "required",
                      emailAddress: {
                        address: attendee
                      }
                    });
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }

            if (body) {
              newEvent.body = {
                contentType: "text",
                content: body
              };
            }

            _context4.prev = 12;
            _context4.next = 15;
            return graphClient.api("/me/events").post(newEvent);

          case 15:
            // Return to the calendar view
            getEvents();
            _context4.next = 21;
            break;

          case 18:
            _context4.prev = 18;
            _context4.t0 = _context4["catch"](12);
            updatePage(Views.error, {
              message: "Error creating event",
              debug: _context4.t0
            });

          case 21:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[12, 18]]);
  }));
  return _createNewEvent.apply(this, arguments);
}

function modalEventos(eventos) {
  console.log("eventos:", eventos);
  $("#calendar").hide();
  $("#modal").show();

  if (eventos.length > 0) {
    var main = document.getElementById("modal");
    var div = document.createElement("div");
    div.classList.add("content", "bg-content");
    var header = document.createElement("div");
    header.classList.add("d-flex", "px-3", "py-1", "justify-content-between", "align-items-center", "content_header");
    var header_text = document.createElement("div");
    header_text.classList.add("d-flex", "align-items-center");
    var title = document.createElement("p");
    title.classList.add("m-0", "px-2");
    title.innerHTML = "EVENTOS";
    var close = document.createElement("img");
    close.setAttribute("src", "../Content/img/close.png");
    close.setAttribute("height", "15px");
    close.setAttribute("onclick", "cerrar()");
    header_text.appendChild(title);
    header.appendChild(header_text);
    header.appendChild(close);
    var content;

    for (var i in eventos) {
      var hora = eventos[i].start.dateTime;
      content = document.createElement("div");
      content.classList.add("content_items", "p-1");
      var items = document.createElement("div");
      items.classList.add("d-flex", "align-items-center", "mb-2");
      var color = document.createElement("div");
      color.classList.add("rectangulo", "color1");
      var texto = document.createElement("p");
      texto.classList.add("item_text");
      texto.innerHTML = hora.substring(11, 16) + "-" + eventos[i].subject;
      items.appendChild(color);
      items.appendChild(texto);
      content.appendChild(items);
    }

    div.appendChild(header);
    div.appendChild(content);
    main.innerHTML = "";
    main.appendChild(div);
  } else {
    var _main = document.getElementById("modal");

    var _div = document.createElement("div");

    _div.classList.add("content", "bg-content");

    var _header = document.createElement("div");

    _header.classList.add("d-flex", "px-3", "py-1", "justify-content-between", "align-items-center", "content_header");

    var _header_text = document.createElement("div");

    _header_text.classList.add("d-flex", "align-items-center");

    var _title = document.createElement("p");

    _title.classList.add("m-0", "px-2");

    _title.innerHTML = "EVENTOS";

    var _close = document.createElement("img");

    _close.setAttribute("src", "../Content/img/close.png");

    _close.setAttribute("height", "15px");

    _close.setAttribute("onclick", "cerrar()");

    _header_text.appendChild(_title);

    _header.appendChild(_header_text);

    _header.appendChild(_close);

    var _content;

    _content = document.createElement("div");

    _content.classList.add("content_items", "p-1");

    var _items = document.createElement("div");

    _items.classList.add("d-flex", "align-items-center", "mb-2");

    var _color = document.createElement("div");

    _color.classList.add("rectangulo", "color1");

    var _texto = document.createElement("p");

    _texto.classList.add("item_text");

    _texto.innerHTML = "No hay eventos por hoy";

    _items.appendChild(_color);

    _items.appendChild(_texto);

    _content.appendChild(_items);

    _div.appendChild(_header);

    _div.appendChild(_content);

    _main.innerHTML = "";

    _main.appendChild(_div);
  }
}