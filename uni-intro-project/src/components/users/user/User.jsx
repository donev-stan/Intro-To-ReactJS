import {React, useState, useEffect} from "react";
import UserCard from "../user-card/UserCard";
import { Container, Row, Col } from "react-bootstrap";
import { getUserByID } from '../../../utils/services/UsersService';

const User = (props) => {
    const [user, setUser] = useState({});

    useEffect(async () => {
        const data = await getUserByID(props.match.params.id);
        setUser(data);
    }, []);

    return (
        <Container>
            <Row>
                <UserCard user={user} />
            </Row>
        </Container>
    );
};

export default User;
