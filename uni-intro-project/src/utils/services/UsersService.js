const url = 'http://localhost:3000';

function getAllUsers() {
    return fetch(`${url}/users`)
        .then(response => response.json())
        .then(users => users);
}

function getUserByID(id){
    return fetch(`${url}/users/${id}`)
        .then(response => response.json())
        .then(user => user);
}

export { getAllUsers, getUserByID };