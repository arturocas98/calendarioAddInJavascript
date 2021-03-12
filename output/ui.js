"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var mainContainer = document.getElementById('main-container');
var Views = {
  error: 1,
  home: 2,
  calendar: 3
};

function updatePage(view, data) {
  if (!view) {
    view = Views.home;
  }

  var user = JSON.parse(sessionStorage.getItem('graphUser'));
  showAccountNav(user);
  showAuthenticatedNav(user, view);

  switch (view) {
    case Views.error:
      showError(data);
      break;

    case Views.home:
      showWelcomeMessage(user);
      break;

    case Views.calendar:
      showCalendar(data);
      break;
  }
}

function showError(error) {
  var alert = createElement('div', 'alert alert-danger');
  var message = createElement('p', 'mb-3', error.message);
  alert.appendChild(message);

  if (error.debug) {
    var pre = createElement('pre', 'alert-pre border bg-light p-2');
    alert.appendChild(pre);
    var code = createElement('code', 'text-break text-wrap', JSON.stringify(error.debug, null, 2));
    pre.appendChild(code);
  }

  mainContainer.innerHTML = '';
  mainContainer.appendChild(alert);
}

function showWelcomeMessage(user) {
  // Create jumbotron
  var jumbotron = createElement('div', 'jumbotron');
  var heading = createElement('h1', null, 'JavaScript SPA Graph Tutorial');
  jumbotron.appendChild(heading);
  var lead = createElement('p', 'lead', 'This sample app shows how to use the Microsoft Graph API to access' + ' a user\'s data from JavaScript.');
  jumbotron.appendChild(lead);

  if (user) {
    // Welcome the user by name
    var welcomeMessage = createElement('h4', null, "Welcome ".concat(user.displayName, "!"));
    jumbotron.appendChild(welcomeMessage);
    var callToAction = createElement('p', null, 'Use the navigation bar at the top of the page to get started.');
    jumbotron.appendChild(callToAction);
  } else {
    // Show a sign in button in the jumbotron
    var signInButton = createElement('button', 'btn btn-primary btn-large', 'Click here to sign in');
    signInButton.setAttribute('onclick', 'signIn();');
    jumbotron.appendChild(signInButton);
  }

  mainContainer.innerHTML = '';
  mainContainer.appendChild(jumbotron);
} // <showCalendarSnippet>


function showCalendar(events) {
  var div = document.createElement('div');
  div.appendChild(createElement('h1', 'mb-3', 'Calendar'));
  var newEventButton = createElement('button', 'btn btn-light btn-sm mb-3', 'New event');
  newEventButton.setAttribute('onclick', 'showNewEventForm();');
  div.appendChild(newEventButton);
  var table = createElement('table', 'table');
  div.appendChild(table);
  var thead = document.createElement('thead');
  table.appendChild(thead);
  var headerrow = document.createElement('tr');
  thead.appendChild(headerrow);
  var organizer = createElement('th', null, 'Organizer');
  organizer.setAttribute('scope', 'col');
  headerrow.appendChild(organizer);
  var subject = createElement('th', null, 'Subject');
  subject.setAttribute('scope', 'col');
  headerrow.appendChild(subject);
  var start = createElement('th', null, 'Start');
  start.setAttribute('scope', 'col');
  headerrow.appendChild(start);
  var end = createElement('th', null, 'End');
  end.setAttribute('scope', 'col');
  headerrow.appendChild(end);
  var tbody = document.createElement('tbody');
  table.appendChild(tbody);

  var _iterator = _createForOfIteratorHelper(events),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var event = _step.value;
      var eventrow = document.createElement('tr');
      eventrow.setAttribute('key', event.id);
      tbody.appendChild(eventrow);
      var organizercell = createElement('td', null, event.organizer.emailAddress.name);
      eventrow.appendChild(organizercell);
      var subjectcell = createElement('td', null, event.subject);
      eventrow.appendChild(subjectcell); // Use moment.utc() here because times are already in the user's
      // preferred timezone, and we don't want moment to try to change them to the
      // browser's timezone

      var startcell = createElement('td', null, moment.utc(event.start.dateTime).format('M/D/YY h:mm A'));
      eventrow.appendChild(startcell);
      var endcell = createElement('td', null, moment.utc(event.end.dateTime).format('M/D/YY h:mm A'));
      eventrow.appendChild(endcell);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  mainContainer.innerHTML = '';
  mainContainer.appendChild(div);
} // </showCalendarSnippet>