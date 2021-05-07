import axios from 'axios';

const url = 'http://localhost:3000';

function getAllUsers() {
    return axios.get(`${url}/users`);


    return fetch(`${url}/users`)
        .then(response => response.json())
        .then(users => console.log(users));
}

function getUserByID(id){
    return fetch(`${url}/users/${id}`)
        .then(response => response.json())
        .then(user => user);
}

export { getAllUsers, getUserByID };