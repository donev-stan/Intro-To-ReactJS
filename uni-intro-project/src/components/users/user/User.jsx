import {React, useState, useEffect} from "react";
import UserCard from "../user-card/UserCard";
import { Container, Row } from "react-bootstrap";
import { getUserByID } from '../../../utils/services/UsersService';

const User = (props) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        getUserByID(props.match.params.id).then(response => {
            setUser(response.data);
        });
    }, [props.match.params.id]);

    return (
        <Container>
            <Row>
                <UserCard user={user} />
            </Row>
        </Container>
    );
};

export default User;
