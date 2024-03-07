import { LogLevel } from "@azure/msal-browser";
// Browser check variables
// If you support IE, our recommendation is that you sign-in using Redirect APIs
// If you as a developer are testing using Edge InPrivate mode, please add "isEdge" to the if check
const ua = window.navigator.userAgent;
const msie = ua.indexOf("MSIE ");
const msie11 = ua.indexOf("Trident/");
const msedge = ua.indexOf("Edge/");
const firefox = ua.indexOf("Firefox");
const isIE = msie > 0 || msie11 > 0;
const isEdge = msedge > 0;
const isFirefox = firefox > 0; // Only needed if you need to support the redirect flow in Firefox incognito

// Config object to be passed to Msal on creation
export const msalConfig = {
    auth: {
     clientId: "1a02af34-14ce-4979-b3bc-813eaae2ee8e",
     authority: "https://login.microsoftonline.com/a9a9230d-f979-4f0a-87ea-791709b58f41",
     redirectUri: "/",
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: isIE || isEdge || isFirefox,
    },
    system: {
        allowNativeBroker: false, // Disables WAM Broker
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }
            },
        },
    },
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest = {
    scopes: ["User.Read"]
};

export const SCOPES = {
 USER_READ: ["User.Read"],
 USER_READ_WRITE: ["User.ReadWrite.All"],
 DEFAULT: ["1a02af34-14ce-4979-b3bc-813eaae2ee8e/.default"]
}

export const MSGraphAPIs = {
 graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
 graphUserEndpoint: "https://graph.microsoft.com/v1.0/users"
};

export const InternalAPIs = {
  getAllUsersEndPoint: "https://mcgdevbackend.azurewebsites.net/api/users",
  orgEndPoint: "https://mcgdevbackend.azurewebsites.net/api/organizations",
  getMeEndPoint: "https://mcgdevbackend.azurewebsites.net/api/users/me"
};