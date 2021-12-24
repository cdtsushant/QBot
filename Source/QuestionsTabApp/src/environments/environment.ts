export const environment = {
    production: false,
    apiBaseUrl: "https://ifibotapp.azurewebsites.net/api/Request/",
    selfUrl: "https://ifibotapp-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "6f0b33ae-4163-427b-a62d-941d3fa59d04",
        clientId: "1e9b418e-9d6d-469a-8116-5e99715d98b8",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
    gid: "",
    cname: ""
};
