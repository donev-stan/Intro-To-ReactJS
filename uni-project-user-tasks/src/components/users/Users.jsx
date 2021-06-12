import React, { useState, useEffect } from 'react';
import { getAllUsers } from '../../core/services/UsersService';
import { User } from './User';

export const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        // getAllUsers().then(response => {setUsers(response.data)});
        getAllUsers().then(response => {console.log(response.data)});
    }, [])


    return (
        <div className="container-fluid">
            { users.map(user => <User key={user.id} user={user} />) }
        </div>
    )
}
