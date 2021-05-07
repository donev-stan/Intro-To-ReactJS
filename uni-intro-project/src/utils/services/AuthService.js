import { getAllUsers } from "./UsersService";

/**
 * @returns the logged user or undefined
 */
export function getLoggedUser(){
    return JSON.parse(localStorage.getItem('loggedUser'));
}


/**
 * @param userData => {username, password}
 */
export async function login(userData) {
    const users = (await getAllUsers()).data;

    const loggedUser = users.find(
        (u) =>
            u.username === userData.username &&
            u.password.toString() === userData.password
    );

    if (loggedUser) {
        localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
        return;
    }

    throw new Error('Invalid username/password!');
}
