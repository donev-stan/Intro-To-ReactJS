import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {
    return (
        <Col style={{paddingTop: '20px'}}>
            <Card style={{ width: "18rem", marginBottom: "10px" }}>
                <Card.Img variant="top" src={`${user.picture}`} />
                <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>{user.isAdmin ? 'Admin' : 'User'}</Card.Text>
                    <Card.Text>{user.email}</Card.Text>
                    <Card.Text>{user.phone}</Card.Text>
                    <Button variant="primary"><Link to={`/users/${user.id}`} style={styles.links}>View Profile</Link></Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

const styles = {
    links: {
        textDecoration: 'none',
        color: 'white'
    }
};

export default UserCard;