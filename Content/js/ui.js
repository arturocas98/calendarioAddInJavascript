const mainContainer = document.getElementById('main-container');
const Views = { error: 1, home: 2, calendar: 3 };

function updatePage(view, data) {
    if (!view) {
        view = Views.home;
    }

    const user = JSON.parse(sessionStorage.getItem('graphUser'));

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
    let alert = createElement('div', 'alert alert-danger');

    let message = createElement('p', 'mb-3', error.message);
    alert.appendChild(message);

    if (error.debug) {
        let pre = createElement('pre', 'alert-pre border bg-light p-2');
        alert.appendChild(pre);

        let code = createElement('code', 'text-break text-wrap',
            JSON.stringify(error.debug, null, 2));
        pre.appendChild(code);
    }

    mainContainer.innerHTML = '';
    mainContainer.appendChild(alert);
}


function showWelcomeMessage(user) {
    // Create jumbotron
    let jumbotron = createElement('div', 'jumbotron');

    let heading = createElement('h1', null, 'JavaScript SPA Graph Tutorial');
    jumbotron.appendChild(heading);

    let lead = createElement('p', 'lead',
        'This sample app shows how to use the Microsoft Graph API to access' +
        ' a user\'s data from JavaScript.');
    jumbotron.appendChild(lead);

    if (user) {
        // Welcome the user by name
        let welcomeMessage = createElement('h4', null, `Welcome ${user.displayName}!`);
        jumbotron.appendChild(welcomeMessage);

        let callToAction = createElement('p', null,
            'Use the navigation bar at the top of the page to get started.');
        jumbotron.appendChild(callToAction);
    } else {
        // Show a sign in button in the jumbotron
        let signInButton = createElement('button', 'btn btn-primary btn-large',
            'Click here to sign in');
        signInButton.setAttribute('onclick', 'signIn();')
        jumbotron.appendChild(signInButton);
    }

    mainContainer.innerHTML = '';
    mainContainer.appendChild(jumbotron);
}


// <showCalendarSnippet>
function showCalendar(events) {
    let div = document.createElement('div');

    div.appendChild(createElement('h1', 'mb-3', 'Calendar'));

    let newEventButton = createElement('button', 'btn btn-light btn-sm mb-3', 'New event');
    newEventButton.setAttribute('onclick', 'showNewEventForm();');
    div.appendChild(newEventButton);

    let table = createElement('table', 'table');
    div.appendChild(table);

    let thead = document.createElement('thead');
    table.appendChild(thead);

    let headerrow = document.createElement('tr');
    thead.appendChild(headerrow);

    let organizer = createElement('th', null, 'Organizer');
    organizer.setAttribute('scope', 'col');
    headerrow.appendChild(organizer);

    let subject = createElement('th', null, 'Subject');
    subject.setAttribute('scope', 'col');
    headerrow.appendChild(subject);

    let start = createElement('th', null, 'Start');
    start.setAttribute('scope', 'col');
    headerrow.appendChild(start);

    let end = createElement('th', null, 'End');
    end.setAttribute('scope', 'col');
    headerrow.appendChild(end);

    let tbody = document.createElement('tbody');
    table.appendChild(tbody);

    for (const event of events) {
        let eventrow = document.createElement('tr');
        eventrow.setAttribute('key', event.id);
        tbody.appendChild(eventrow);

        let organizercell = createElement('td', null, event.organizer.emailAddress.name);
        eventrow.appendChild(organizercell);

        let subjectcell = createElement('td', null, event.subject);
        eventrow.appendChild(subjectcell);

        // Use moment.utc() here because times are already in the user's
        // preferred timezone, and we don't want moment to try to change them to the
        // browser's timezone
        let startcell = createElement('td', null,
            moment.utc(event.start.dateTime).format('M/D/YY h:mm A'));
        eventrow.appendChild(startcell);

        let endcell = createElement('td', null,
            moment.utc(event.end.dateTime).format('M/D/YY h:mm A'));
        eventrow.appendChild(endcell);
    }

    mainContainer.innerHTML = '';
    mainContainer.appendChild(div);
}
// </showCalendarSnippet>