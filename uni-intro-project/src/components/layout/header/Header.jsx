import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Task Tracker - React App</Navbar.Brand>
            <Nav className="mr-auto">
                <Link className="nav-link" to="/" style={styles.links}>
                    Home
                </Link>
                <Link
                    className="nav-link"
                    to="/users-list"
                    style={styles.links}
                >
                    Users
                </Link>
            </Nav>
        </Navbar>
    );
};

const styles = {
    links: {
        textDecoration: "none",
        color: "white",
    },
};

export default Header;
