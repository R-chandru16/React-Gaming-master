import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header/Header";

import "./Login.css";

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()


    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = { email: "test@test.com", password: "test1234" };
        if (!email || !password) {
            alert("Please enter both email and password.");
        } else if (!/\d/.test(password)) {
            alert("Password must contain at least one number.");
        } else if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
        } else if (user.email === email && user.password === password) {
            console.log("user logged in", user.email);
            navigate('/Home')
            // redirect to home page
        } else {
            alert("Invalid email or password.");
        }
        setEmail("");
        setPassword("");
    };

    return (
        <>
            <Header />
            <div className="login-container">
                <form onSubmit={handleSubmit} className="login-form">
                    <h1 className="login-header">Login</h1>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <button type="submit" className="login-button">
                        Login
                    </button>
                </form>
            </div>
        </>
    );
}


