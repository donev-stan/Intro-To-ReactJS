import axios from 'axios';

const url = 'http://localhost:3000';

function getAllUsers() {
    return axios.get(`${url}/users`);
}

function getUserByID(id){
    return axios.get(`${url}/users/${id}`);
}

export { getAllUsers, getUserByID };