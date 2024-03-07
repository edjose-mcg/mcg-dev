import { MSGraphAPIs, InternalAPIs, SCOPES } from "./authConfig";
import { msalInstance } from "index";

export async function getMeByMSGraph() {
    const account = msalInstance.getActiveAccount();
    if (!account) {
        throw Error("No active account! Verify a user has been signed in and setActiveAccount has been called.");
    }

    const response = await msalInstance.acquireTokenSilent({
        scopes: SCOPES.USER_READ,
        account: account
    });

    const headers = new Headers();
    const bearer = `Bearer ${response.accessToken}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers
    };

    return fetch(MSGraphAPIs.graphMeEndpoint, options)
        .then(response => response.json())
        .catch(error => console.log(error));
}

export const createUserByMSGraph = async (userData) => {

    const account = msalInstance.getActiveAccount();
    if (!account) {
        throw Error("No active account! Verify a user has been signed in and setActiveAccount has been called.");
    }

    const response = await msalInstance.acquireTokenSilent({
        scopes: SCOPES.USER_READ_WRITE,
        account: account
    });

    const headers = new Headers();
    const bearer = `Bearer ${response.accessToken}`;

    headers.append("Authorization", bearer);
    headers.append("Content-Type", "application/json");

    const options = {
        method: "POST",
        headers: headers,
        body: JSON.stringify(userData),
    };

    return fetch(MSGraphAPIs.graphUserEndpoint, options)
        .then(response => response.json())
        .catch(error => console.log(error));
};

export const deleteUserByMSGraph = async (id) => {

    const account = msalInstance.getActiveAccount();
    if (!account) {
        throw Error("No active account! Verify a user has been signed in and setActiveAccount has been called.");
    }

    const response = await msalInstance.acquireTokenSilent({
        scopes: SCOPES.USER_READ_WRITE,
        account: account
    });

    const headers = new Headers();
    const bearer = `Bearer ${response.accessToken}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "DELETE",
        headers: headers,
    };

    return fetch(`${MSGraphAPIs.graphUserEndpoint}/${id}`, options)
        .then(response => response.json())
        .catch(error => console.log(error));
};

export const getAllUsersByMSGraph = async () => {

    const account = msalInstance.getActiveAccount();
    if (!account) {
        throw Error("No active account! Verify a user has been signed in and setActiveAccount has been called.");
    }

    const response = await msalInstance.acquireTokenSilent({
        scopes: SCOPES.USER_READ_WRITE,
        account: account
    });

    const headers = new Headers();
    const bearer = `Bearer ${response.accessToken}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers,
    };

    return fetch(MSGraphAPIs.graphUserEndpoint, options)
        .then(response => response.json())
        .catch(error => console.log(error));
};

export async function getAllUsers() {
    const account = msalInstance.getActiveAccount();
    if (!account) {
        throw Error("No active account! Verify a user has been signed in and setActiveAccount has been called.");
    }

    const response = await msalInstance.acquireTokenSilent({
        scopes: SCOPES.DEFAULT,
        forceRefresh: false,
        account: account
    });

    const headers = new Headers();
    const bearer = `Bearer ${response.accessToken}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers
    };

    return fetch(InternalAPIs.getAllUsersEndPoint, options)
        .then(response => response.json())
        .catch(error => console.log(error));
}

export async function createUser(payload) {
    const account = msalInstance.getActiveAccount();
    if (!account) {
        throw Error("No active account! Verify a user has been signed in and setActiveAccount has been called.");
    }

    const response = await msalInstance.acquireTokenSilent({
        scopes: SCOPES.DEFAULT,
        forceRefresh: false,
        account: account
    });

    const headers = new Headers();
    const bearer = `Bearer ${response.accessToken}`;

    headers.append("Authorization", bearer);
    headers.append("Content-Type", "application/json");

    const options = {
        method: "POST",
        headers: headers,
        body: JSON.stringify(payload),
    };

    return fetch(InternalAPIs.getAllUsersEndPoint, options)
        .then(response => response.json())
        .catch(error => console.log(error));
}

export async function updateUser(payload) {
    const account = msalInstance.getActiveAccount();
    if (!account) {
        throw Error("No active account! Verify a user has been signed in and setActiveAccount has been called.");
    }

    const response = await msalInstance.acquireTokenSilent({
        scopes: SCOPES.DEFAULT,
        forceRefresh: false,
        account: account
    });

    const headers = new Headers();
    const bearer = `Bearer ${response.accessToken}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "PATCH",
        headers: headers,
        body: JSON.stringify(payload)
    };

    return fetch(InternalAPIs.getMeEndPoint, options)
        .then(response => response.json())
        .catch(error => console.log(error));
}

export async function deleteUser(email) {
    const account = msalInstance.getActiveAccount();
    if (!account) {
        throw Error("No active account! Verify a user has been signed in and setActiveAccount has been called.");
    }

    const response = await msalInstance.acquireTokenSilent({
        scopes: SCOPES.DEFAULT,
        forceRefresh: false,
        account: account
    });

    const headers = new Headers();
    const bearer = `Bearer ${response.accessToken}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "DELETE",
        headers: headers,
    };

    return fetch(`${InternalAPIs.getAllUsersEndPoint}/${email}`, options)
        .then(response => response.json())
        .catch(error => console.log(error));
}

export async function getAllOrganizations() {
    const account = msalInstance.getActiveAccount();
    if (!account) {
        throw Error("No active account! Verify a user has been signed in and setActiveAccount has been called.");
    }

    const response = await msalInstance.acquireTokenSilent({
        scopes: SCOPES.DEFAULT,
        forceRefresh: false,
        account: account
    });

    const headers = new Headers();
    const bearer = `Bearer ${response.accessToken}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers
    };

    return fetch(InternalAPIs.orgEndPoint, options)
        .then(response => response.json())
        .catch(error => console.log(error));
}