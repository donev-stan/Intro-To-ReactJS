import React from "react";
import { Redirect } from "react-router";
import { getLoggedUser } from "../services/AuthService";

export const AuthenticatedRoute = (props) => {
    const user = getLoggedUser();

    if (user) return <props.component {...props} />

    return <Redirect to='/login' />
};
