import { React, useState, useEffect } from "react";
import { getAllUsers } from "../../../utils/services/UsersService";
import UserCard from "../user-card/UserCard";
import { Container, Row } from "react-bootstrap";

const UsersList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers().then(response => {
            setUsers(response.data);
        })
    }, []);

    return (
        <Container>
            <Row>
                {users.map((user) => (
                    <UserCard user={user} key={user.id} />
                ))}
            </Row>
        </Container>
    );
};

export default UsersList;
