<%@ Page Language="C#" Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<WebPartPages:AllowFraming ID="AllowFraming" runat="server" />



<html>
<head>


    <script type="text/javascript" src="../Scripts/jquery-3.5.0.min.js"></script>
    <script type="text/javascript" src="/_layouts/15/MicrosoftAjax.js"></script>
    <script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script>
    <script type="text/javascript" src="/_layouts/15/sp.js"></script>

    <script type="text/javascript">
        // Establezca el estilo de la página de elementos web cliente para que sea coherente con el sitio web de host.
        (function () {
            'use strict';

            var hostUrl = '';
            var link = document.createElement('link');
            link.setAttribute('rel', 'stylesheet');
            if (document.URL.indexOf('?') != -1) {
                var params = document.URL.split('?')[1].split('&');
                for (var i = 0; i < params.length; i++) {
                    var p = decodeURIComponent(params[i]);
                    if (/^SPHostUrl=/i.test(p)) {
                        hostUrl = p.split('=')[1];
                        link.setAttribute('href', hostUrl + '/_layouts/15/defaultcss.ashx');
                        break;
                    }
                }
            }
            if (hostUrl == '') {
                link.setAttribute('href', '/_layouts/15/1033/styles/themable/corev15.css');
            }
            document.head.appendChild(link);
            //GenerarTokenUsuario();
        })();

    </script>
    <!-- META ===================================================== -->
    <title>Calendario</title>
    <meta name="description" content="A method for responsive tables">

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.1/css/all.css" crossorigin="anonymous">

    <meta charset="UTF-8">


    <link href="../Content/css/fullcalendar.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>


    <script>
        window.console = window.console || function (t) { };
    </script>



    <script>
        if (document.location.search.match(/type=embed/gi)) {
            window.parent.postMessage("resize", "*");
        }
    </script>
    <%--<link href="https://cdn.jsdelivr.net/npm/fullcalendar@3.10.2/dist/fullcalendar.min.css" rel="stylesheet">--%>

    <style>
        .title {
            text-align: center;
        }

        .content {
            width: 320px;
            border-radius: 5px;
            box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.2);
            margin-bottom: 1rem;
            height: 350px;
        }

        .bg-content {
            background-color: #e3eaf0;
        }

        .content_header {
            max-height: 30px;
        }

        .content_items {
            background-color: white;
            border-radius: 0 0 5px 5px;
            margin: 1px;
            height: 350px;
            /* min-height: 180px; */
        }

        .rectangulo {
            width: 5px;
            height: 30px;
        }

        .color1 {
            background-color: #f05454;
        }

        .color2 {
            background-color: #83a95c;
        }

        .color3 {
            background-color: #e3eaf0;
        }

        .item_text {
            margin: 0 0 0 10px;
        }

        .input {
            width: 100%;
            border: 1px solid #e3eaf0;
            padding-left: 8px;
            padding-right: 8px;
        }

            .input::placeholder {
                color: #e3eaf0;
            }
    </style>

    <script>
        function cerrar() {
            $("#calendar").show();
            $("#modal").hide();

        }
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser-polyfill.min.js"></script>
    <script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>

</head>
<body>

    <div id="modal"></div>

    <div id="calendar" class="fc fc-ltr fc-unthemed" style="width: 270px; height: 200px; margin-left: 20px;">
    </div>

    <!-- MSAL -->
    <%--<script src="https://alcdn.msauth.net/browser/2.1.0/js/msal-browser.min.js"
        integrity="sha384-EmYPwkfj+VVmL1brMS1h6jUztl4QMS8Qq8xlZNgIT/luzg7MAzDVrRa2JxbNmk/e"
        crossorigin="anonymous"></script>--%>
    <script src="../output/msal.js"></script>

    <!-- Graph SDK -->
    <%--<script src="https://cdn.jsdelivr.net/npm/@microsoft/microsoft-graph-client/lib/graph-js-sdk.js"></script>--%>
    <script src="../output/graph_sdk.js"></script>

    <!-- polyfilling fetch -->
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/whatwg-fetch/dist/fetch.umd.min.js"></script>

    <!-- depending on your browser you might wanna include babel polyfill -->
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@babel/polyfill@7.4.4/dist/polyfill.min.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/symbol-es6/dist/symbol-es6.min.js"></script>


    <!-- Moment.js -->
    <script src="https://cdn.jsdelivr.net/npm/moment@2.27.0/moment.min.js"></script>
    <script src="https://momentjs.com/downloads/moment-timezone-with-data-10-year-range.js"></script>

    <script src="../output/main.js"></script>


    <script src="https://cpwebassets.codepen.io/assets/common/stopExecutionOnTimeout-157cd5b220a5c80d4ff8e0e70ac069bffd87a61252088146915e8726e5d9f147.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="../Content/js/fullcalendar3.10.2.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/fullcalendar@3.10.2/dist/locale-all.js"> </script>




</body>
</html>
