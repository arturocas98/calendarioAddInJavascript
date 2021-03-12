"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var msalConfig = {
  auth: {
    clientId: "d4cf0eb6-00a1-4278-ba3b-ba371552a6b4",
    //redirectUri: 'http://localhost:8080',
    rediectUri: "https://pacificobp-3f602b900dbe78.sharepoint.com/sites/Css_Intranetbp/ConsumoServiciosAddIn/Pages/ConsumodeServicios.aspx"
  }
};
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
};
var msalRequest = {
  scopes: ["user.read", "mailboxsettings.read", "calendars.readwrite"]
};
var graphClient = MicrosoftGraph.Client.initWithMiddleware({
  authProvider: authProvider
});
$(document).ready(function () {
  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();
  var calendar = $("#calendar").fullCalendar({
    header: {
      left: "prev",
      center: "title",
      right: "next"
    },
    locale: "es",
    selectable: true,
    selectHelper: true,
    eventRender: function eventRender(event, element) {
      element.popover({
        animation: true,
        delay: 300,
        content: "<b>Inicio</b>:" + event.start + "<b>Fin</b>:" + event.end,
        trigger: "hover"
      });
    },
    eventAfterAllRender: function eventAfterAllRender() {
      $(".fc-row").css("min-height", "10px");
      $(".fc-week, .fc-widget-content, .fc-rigid").attr("style", "height: 24px");
    },
    viewRender: function viewRender(view, element) {
      element.find(".fc-day-header").html(""); //element.find('.fc-row .fc-week .fc-widget-content').attr('style', 'height: 24px');
    },
    select: function select(start, end, allDay) {
      if (!sessionStorage.getItem("msalAccount")) {
        signIn(start, end); //signInIE(start,end);
      }

      if (JSON.parse(sessionStorage.getItem("graphUser"))) {
        getEvents(start, end);
      }

      calendar.fullCalendar("unselect");
    },
    viewDisplay: function viewDisplay(view) {
      $(".fc-day").filter(function (index) {
        return moment($(this).data("date")).isBefore(moment(), "day");
      }).addClass("fc-other-month");
    },
    editable: true
  });
});
var msalClient = new msal.PublicClientApplication(msalConfig);

function signIn(_x, _x2) {
  return _signIn.apply(this, arguments);
}

function _signIn() {
  _signIn = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(inicio, fin) {
    var authResult, user, eventos;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return msalClient.loginPopup(msalRequest);

          case 3:
            authResult = _context2.sent;
            console.log("id_token acquired at: " + new Date().toString()); // Save the account username, needed for token acquisition

            sessionStorage.setItem("msalAccount", authResult.account.username); // Get the user's profile from Graph

            _context2.next = 8;
            return getUser();

          case 8:
            user = _context2.sent;
            console.log("usuario:", user); // Save the profile in session

            sessionStorage.setItem("graphUser", JSON.stringify(user)); //updatePage(Views.home);

            _context2.next = 13;
            return getEvents(inicio, fin);

          case 13:
            eventos = _context2.sent;
            console.log("eventos_sign_in:", eventos);
            _context2.next = 20;
            break;

          case 17:
            _context2.prev = 17;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 20:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 17]]);
  }));
  return _signIn.apply(this, arguments);
}

function signOut() {
  account = null;
  sessionStorage.removeItem("graphUser");
  msalClient.logout();
}

function getToken() {
  return _getToken.apply(this, arguments);
}

function _getToken() {
  _getToken = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var account, silentRequest, silentResult, interactiveResult;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            account = sessionStorage.getItem("msalAccount");

            if (account) {
              _context3.next = 3;
              break;
            }

            throw new Error("User account missing from session. Please sign out and sign in again.");

          case 3:
            _context3.prev = 3;
            silentRequest = {
              scopes: msalRequest.scopes,
              account: msalClient.getAccountByUsername(account)
            };
            _context3.next = 7;
            return msalClient.acquireTokenSilent(silentRequest);

          case 7:
            silentResult = _context3.sent;
            return _context3.abrupt("return", silentResult.accessToken);

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](3);

            if (!(_context3.t0 instanceof msal.InteractionRequiredAuthError)) {
              _context3.next = 20;
              break;
            }

            _context3.next = 16;
            return msalClient.acquireTokenPopup(msalRequest);

          case 16:
            interactiveResult = _context3.sent;
            return _context3.abrupt("return", interactiveResult.accessToken);

          case 20:
            throw _context3.t0;

          case 21:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[3, 11]]);
  }));
  return _getToken.apply(this, arguments);
}

function getUser() {
  return _getUser.apply(this, arguments);
}

function _getUser() {
  _getUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return graphClient.api("/me") // Only get the fields used by the app
            .select("id,displayName,mail,userPrincipalName,mailboxSettings").get();

          case 2:
            return _context4.abrupt("return", _context4.sent);

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getUser.apply(this, arguments);
}

function getEvents(_x3, _x4) {
  return _getEvents.apply(this, arguments);
}

function _getEvents() {
  _getEvents = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(inicio, fin) {
    var user, ianaTimeZone, date_inicio, date_fin, concat_fecha_inicio, concat_fecha_fin, response;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            user = JSON.parse(sessionStorage.getItem("graphUser"));
            ianaTimeZone = getIanaFromWindows(user.mailboxSettings.timeZone);
            console.log("Converted: ".concat(ianaTimeZone));
            date_inicio = moment(inicio).format("YYYY-MM-DD");
            date_fin = moment(fin).format("YYYY-MM-DD"); //2021 - 03 - 23T08: 00: 00z

            concat_fecha_inicio = date_inicio + "T08:00:00Z";
            concat_fecha_fin = date_fin + "T08:00:00Z";
            console.log("fecha_inicio:", concat_fecha_inicio);
            console.log("fecha_fin:", concat_fecha_fin);
            _context5.prev = 9;
            _context5.next = 12;
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
            response = _context5.sent;
            modalEventos(response.value);
            _context5.next = 19;
            break;

          case 16:
            _context5.prev = 16;
            _context5.t0 = _context5["catch"](9);
            console.log("error:", _context5.t0);

          case 19:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[9, 16]]);
  }));
  return _getEvents.apply(this, arguments);
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

var zoneMappings = {
  "Dateline Standard Time": "Etc/GMT+12",
  "UTC-11": "Etc/GMT+11",
  "Aleutian Standard Time": "America/Adak",
  "Hawaiian Standard Time": "Pacific/Honolulu",
  "Marquesas Standard Time": "Pacific/Marquesas",
  "Alaskan Standard Time": "America/Anchorage",
  "UTC-09": "Etc/GMT+9",
  "Pacific Standard Time (Mexico)": "America/Tijuana",
  "UTC-08": "Etc/GMT+8",
  "Pacific Standard Time": "America/Los_Angeles",
  "US Mountain Standard Time": "America/Phoenix",
  "Mountain Standard Time (Mexico)": "America/Chihuahua",
  "Mountain Standard Time": "America/Denver",
  "Central America Standard Time": "America/Guatemala",
  "Central Standard Time": "America/Chicago",
  "Easter Island Standard Time": "Pacific/Easter",
  "Central Standard Time (Mexico)": "America/Mexico_City",
  "Canada Central Standard Time": "America/Regina",
  "SA Pacific Standard Time": "America/Bogota",
  "Eastern Standard Time (Mexico)": "America/Cancun",
  "Eastern Standard Time": "America/New_York",
  "Haiti Standard Time": "America/Port-au-Prince",
  "Cuba Standard Time": "America/Havana",
  "US Eastern Standard Time": "America/Indianapolis",
  "Turks And Caicos Standard Time": "America/Grand_Turk",
  "Paraguay Standard Time": "America/Asuncion",
  "Atlantic Standard Time": "America/Halifax",
  "Venezuela Standard Time": "America/Caracas",
  "Central Brazilian Standard Time": "America/Cuiaba",
  "SA Western Standard Time": "America/La_Paz",
  "Pacific SA Standard Time": "America/Santiago",
  "Newfoundland Standard Time": "America/St_Johns",
  "Tocantins Standard Time": "America/Araguaina",
  "E. South America Standard Time": "America/Sao_Paulo",
  "SA Eastern Standard Time": "America/Cayenne",
  "Argentina Standard Time": "America/Buenos_Aires",
  "Greenland Standard Time": "America/Godthab",
  "Montevideo Standard Time": "America/Montevideo",
  "Magallanes Standard Time": "America/Punta_Arenas",
  "Saint Pierre Standard Time": "America/Miquelon",
  "Bahia Standard Time": "America/Bahia",
  "UTC-02": "Etc/GMT+2",
  "Azores Standard Time": "Atlantic/Azores",
  "Cape Verde Standard Time": "Atlantic/Cape_Verde",
  UTC: "Etc/GMT",
  "GMT Standard Time": "Europe/London",
  "Greenwich Standard Time": "Atlantic/Reykjavik",
  "Sao Tome Standard Time": "Africa/Sao_Tome",
  "Morocco Standard Time": "Africa/Casablanca",
  "W. Europe Standard Time": "Europe/Berlin",
  "Central Europe Standard Time": "Europe/Budapest",
  "Romance Standard Time": "Europe/Paris",
  "Central European Standard Time": "Europe/Warsaw",
  "W. Central Africa Standard Time": "Africa/Lagos",
  "Jordan Standard Time": "Asia/Amman",
  "GTB Standard Time": "Europe/Bucharest",
  "Middle East Standard Time": "Asia/Beirut",
  "Egypt Standard Time": "Africa/Cairo",
  "E. Europe Standard Time": "Europe/Chisinau",
  "Syria Standard Time": "Asia/Damascus",
  "West Bank Standard Time": "Asia/Hebron",
  "South Africa Standard Time": "Africa/Johannesburg",
  "FLE Standard Time": "Europe/Kiev",
  "Israel Standard Time": "Asia/Jerusalem",
  "Kaliningrad Standard Time": "Europe/Kaliningrad",
  "Sudan Standard Time": "Africa/Khartoum",
  "Libya Standard Time": "Africa/Tripoli",
  "Namibia Standard Time": "Africa/Windhoek",
  "Arabic Standard Time": "Asia/Baghdad",
  "Turkey Standard Time": "Europe/Istanbul",
  "Arab Standard Time": "Asia/Riyadh",
  "Belarus Standard Time": "Europe/Minsk",
  "Russian Standard Time": "Europe/Moscow",
  "E. Africa Standard Time": "Africa/Nairobi",
  "Iran Standard Time": "Asia/Tehran",
  "Arabian Standard Time": "Asia/Dubai",
  "Astrakhan Standard Time": "Europe/Astrakhan",
  "Azerbaijan Standard Time": "Asia/Baku",
  "Russia Time Zone 3": "Europe/Samara",
  "Mauritius Standard Time": "Indian/Mauritius",
  "Saratov Standard Time": "Europe/Saratov",
  "Georgian Standard Time": "Asia/Tbilisi",
  "Volgograd Standard Time": "Europe/Volgograd",
  "Caucasus Standard Time": "Asia/Yerevan",
  "Afghanistan Standard Time": "Asia/Kabul",
  "West Asia Standard Time": "Asia/Tashkent",
  "Ekaterinburg Standard Time": "Asia/Yekaterinburg",
  "Pakistan Standard Time": "Asia/Karachi",
  "Qyzylorda Standard Time": "Asia/Qyzylorda",
  "India Standard Time": "Asia/Calcutta",
  "Sri Lanka Standard Time": "Asia/Colombo",
  "Nepal Standard Time": "Asia/Katmandu",
  "Central Asia Standard Time": "Asia/Almaty",
  "Bangladesh Standard Time": "Asia/Dhaka",
  "Omsk Standard Time": "Asia/Omsk",
  "Myanmar Standard Time": "Asia/Rangoon",
  "SE Asia Standard Time": "Asia/Bangkok",
  "Altai Standard Time": "Asia/Barnaul",
  "W. Mongolia Standard Time": "Asia/Hovd",
  "North Asia Standard Time": "Asia/Krasnoyarsk",
  "N. Central Asia Standard Time": "Asia/Novosibirsk",
  "Tomsk Standard Time": "Asia/Tomsk",
  "China Standard Time": "Asia/Shanghai",
  "North Asia East Standard Time": "Asia/Irkutsk",
  "Singapore Standard Time": "Asia/Singapore",
  "W. Australia Standard Time": "Australia/Perth",
  "Taipei Standard Time": "Asia/Taipei",
  "Ulaanbaatar Standard Time": "Asia/Ulaanbaatar",
  "Aus Central W. Standard Time": "Australia/Eucla",
  "Transbaikal Standard Time": "Asia/Chita",
  "Tokyo Standard Time": "Asia/Tokyo",
  "North Korea Standard Time": "Asia/Pyongyang",
  "Korea Standard Time": "Asia/Seoul",
  "Yakutsk Standard Time": "Asia/Yakutsk",
  "Cen. Australia Standard Time": "Australia/Adelaide",
  "AUS Central Standard Time": "Australia/Darwin",
  "E. Australia Standard Time": "Australia/Brisbane",
  "AUS Eastern Standard Time": "Australia/Sydney",
  "West Pacific Standard Time": "Pacific/Port_Moresby",
  "Tasmania Standard Time": "Australia/Hobart",
  "Vladivostok Standard Time": "Asia/Vladivostok",
  "Lord Howe Standard Time": "Australia/Lord_Howe",
  "Bougainville Standard Time": "Pacific/Bougainville",
  "Russia Time Zone 10": "Asia/Srednekolymsk",
  "Magadan Standard Time": "Asia/Magadan",
  "Norfolk Standard Time": "Pacific/Norfolk",
  "Sakhalin Standard Time": "Asia/Sakhalin",
  "Central Pacific Standard Time": "Pacific/Guadalcanal",
  "Russia Time Zone 11": "Asia/Kamchatka",
  "New Zealand Standard Time": "Pacific/Auckland",
  "UTC+12": "Etc/GMT-12",
  "Fiji Standard Time": "Pacific/Fiji",
  "Chatham Islands Standard Time": "Pacific/Chatham",
  "UTC+13": "Etc/GMT-13",
  "Tonga Standard Time": "Pacific/Tongatapu",
  "Samoa Standard Time": "Pacific/Apia",
  "Line Islands Standard Time": "Pacific/Kiritimati"
};

function getIanaFromWindows(windowsZoneName) {
  return zoneMappings[windowsZoneName] || "Etc/GMT";
} // </zoneMappingsSnippet>