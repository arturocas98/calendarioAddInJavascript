// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

// <msalConfigSnippet>
const msalConfig = {
    auth: {
        clientId: 'd4cf0eb6-00a1-4278-ba3b-ba371552a6b4',
        //redirectUri: 'http://localhost:8080',
        rediectUri: 'https://pacificobp-3f602b900dbe78.sharepoint.com/sites/Css_Intranetbp/ConsumoServiciosAddIn/Pages/ConsumodeServicios.aspx'
    }
};

const msalRequest = {
  scopes: [
    'user.read',
    'mailboxsettings.read',
    'calendars.readwrite'
  ]
}
// </msalConfigSnippet>
