import { URL } from "../constants/urls";
export function getUsersActivity() {
    return fetch(URL.USER_DETAILS, {
        method: "GET"
    })
        .then(result => result.json())
        .then(response => {
            if (response.ok) {
                return response.members;
            } else {
                console.error(response);
            }
        })
        .catch(error => console.error(error));
}