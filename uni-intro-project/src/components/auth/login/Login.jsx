import React, { useState } from "react";
import { login } from "../../../utils/services/AuthService";
import { Redirect } from 'react-router-dom';

export default function Login() {
    const [userData, setUserData] = useState({});
    const [redirect, setRedirect] = useState(false);

    const onInputChange = (event) => {
        event.persist();

        setUserData((prevState) => {
            return {
                ...prevState,
                [event.target.name]: event.target.value,
            };
        });
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        login(userData)
            .then(_ => {
                console.log("success!");
                setRedirect(true);
            })
            .catch((error) => console.error(error));
    };

    return (
        <div className="container my-4">
            { redirect && <Redirect to='/' /> }
            <form onSubmit={onFormSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        aria-describedby="emailHelp"
                        onChange={onInputChange} required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        onChange={onInputChange} required
                    />
                </div>
                <div className="row justify-content-center">
                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}
