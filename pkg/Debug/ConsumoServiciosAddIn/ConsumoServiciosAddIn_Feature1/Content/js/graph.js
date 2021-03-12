// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

// <graphInitSnippet>
// Create an authentication provider
const authProvider = {
    getAccessToken: async () => {
        // Call getToken in auth.js
        return await getToken();
    },
};

// Initialize the Graph client
const graphClient = MicrosoftGraph.Client.initWithMiddleware({ authProvider });
// </graphInitSnippet>

// <getUserSnippet>
async function getUser() {
    return await graphClient
        .api("/me")
        // Only get the fields used by the app
        .select("id,displayName,mail,userPrincipalName,mailboxSettings")
        .get();
}
// </getUserSnippet>

// <getEventsSnippet>
async function getEvents(inicio, fin) {
    const user = JSON.parse(sessionStorage.getItem("graphUser"));

    let ianaTimeZone = getIanaFromWindows(user.mailboxSettings.timeZone);
    console.log(`Converted: ${ianaTimeZone}`);

    //let startOfWeek = moment.tz('America/Bogota').startOf('week').utc();
    // Set end of the view to 7 days after start of week
    //let endOfWeek = moment(startOfWeek).add(1, 'day');
    //let startOfWeek = moment(fin).tz('America/Bogota');
    let date_inicio = moment(inicio).format("YYYY-MM-DD");
    let date_fin = moment(fin).format("YYYY-MM-DD");

    //2021 - 03 - 23T08: 00: 00z
    let concat_fecha_inicio = date_inicio + "T08:00:00Z";
    let concat_fecha_fin = date_fin + "T08:00:00Z";

    console.log("fecha_inicio:", concat_fecha_inicio);
    console.log("fecha_fin:", concat_fecha_fin);

    try {
        // GET /me/calendarview?startDateTime=''&endDateTime=''
        // &$select=subject,organizer,start,end
        // &$orderby=start/dateTime
        // &$top=50
        let response = await graphClient
            .api("/me/calendarview")
            // Set the Prefer=outlook.timezone header so date/times are in
            // user's preferred time zone
            .header("Prefer", `outlook.timezone="${user.mailboxSettings.timeZone}"`)
            // Add the startDateTime and endDateTime query parameters
            .query({
                startDateTime: concat_fecha_inicio,
                endDateTime: concat_fecha_fin,
            })
            // Select just the fields we are interested in
            .select("subject,organizer,start,end")
            // Sort the results by start, earliest first
            .orderby("start/dateTime")
            // Maximum 50 events in response
            .top(50)
            .get();
        //let eventos = [];
        //eventos = response.value;
        modalEventos(response.value);
        //updatePage(Views.calendar, response.value);
    } catch (error) {
        console.log("error:", error);
        //updatePage(Views.error, {
        //  message: 'Error getting events',
        //  debug: error
        //});
    }
}
// </getEventsSnippet>

// <createEventSnippet>
async function createNewEvent() {
    const user = JSON.parse(sessionStorage.getItem("graphUser"));

    // Get the user's input
    const subject = document.getElementById("ev-subject").value;
    const attendees = document.getElementById("ev-attendees").value;
    const start = document.getElementById("ev-start").value;
    const end = document.getElementById("ev-end").value;
    const body = document.getElementById("ev-body").value;

    // Require at least subject, start, and end
    if (!subject || !start || !end) {
        updatePage(Views.error, {
            message: "Please provide a subject, start, and end.",
        });
        return;
    }

    // Build the JSON payload of the event
    let newEvent = {
        subject: subject,
        start: {
            dateTime: start,
            timeZone: user.mailboxSettings.timeZone,
        },
        end: {
            dateTime: end,
            timeZone: user.mailboxSettings.timeZone,
        },
    };

    if (attendees) {
        const attendeeArray = attendees.split(";");
        newEvent.attendees = [];

        for (const attendee of attendeeArray) {
            if (attendee.length > 0) {
                newEvent.attendees.push({
                    type: "required",
                    emailAddress: {
                        address: attendee,
                    },
                });
            }
        }
    }

    if (body) {
        newEvent.body = {
            contentType: "text",
            content: body,
        };
    }

    try {
        // POST the JSON to the /me/events endpoint
        await graphClient.api("/me/events").post(newEvent);

        // Return to the calendar view
        getEvents();
    } catch (error) {
        updatePage(Views.error, {
            message: "Error creating event",
            debug: error,
        });
    }
}
// </createEventSnippet>

function modalEventos(eventos) {

    console.log("eventos:", eventos);

    $("#calendar").hide();
    $("#modal").show();
    if (eventos.length > 0) {
        let main = document.getElementById("modal");
        let div = document.createElement("div");
        div.classList.add("content", "bg-content");
        let header = document.createElement("div");
        header.classList.add(
            "d-flex",
            "px-3",
            "py-1",
            "justify-content-between",
            "align-items-center",
            "content_header"
        );
        let header_text = document.createElement("div");
        header_text.classList.add("d-flex", "align-items-center");
        let title = document.createElement("p");
        title.classList.add("m-0", "px-2");
        title.innerHTML = "EVENTOS";
        let close = document.createElement("img");
        close.setAttribute("src", "../Content/img/close.png");
        close.setAttribute("height", "15px");
        close.setAttribute("onclick", "cerrar()");
        header_text.appendChild(title);
        header.appendChild(header_text);
        header.appendChild(close);
        let content;

        for (const i in eventos) {
            let hora =  eventos[i].start.dateTime;
          
            content = document.createElement("div");
            content.classList.add("content_items", "p-1");
            let items = document.createElement("div");
            items.classList.add("d-flex", "align-items-center", "mb-2");
            let color = document.createElement("div");
            color.classList.add("rectangulo", "color1");
            let texto = document.createElement("p");
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
        let main = document.getElementById("modal");
        let div = document.createElement("div");
        div.classList.add("content", "bg-content");
        let header = document.createElement("div");
        header.classList.add(
            "d-flex",
            "px-3",
            "py-1",
            "justify-content-between",
            "align-items-center",
            "content_header"
        );
        let header_text = document.createElement("div");
        header_text.classList.add("d-flex", "align-items-center");
        let title = document.createElement("p");
        title.classList.add("m-0", "px-2");
        title.innerHTML = "EVENTOS";
        let close = document.createElement("img");
        close.setAttribute("src", "../Content/img/close.png");
        close.setAttribute("height", "15px");
        close.setAttribute("onclick", "cerrar()");
        header_text.appendChild(title);
        header.appendChild(header_text);
        header.appendChild(close);
        let content;
        content = document.createElement("div");
        content.classList.add("content_items", "p-1");
        let items = document.createElement("div");
        items.classList.add("d-flex", "align-items-center", "mb-2");
        let color = document.createElement("div");
        color.classList.add("rectangulo", "color1");
        let texto = document.createElement("p");
        texto.classList.add("item_text");
        texto.innerHTML = "No hay eventos por hoy";

        items.appendChild(color);
        items.appendChild(texto);
        content.appendChild(items);

        div.appendChild(header);
        div.appendChild(content);
        main.innerHTML = "";
        main.appendChild(div);
    }
}
