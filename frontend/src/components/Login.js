import React, { useState } from "react";
import { useMutation } from "@apollo/client/react";
import { LOGIN_USER } from "../graphql/mutations";

const Login = () => {
    const [form, setForm] = useState({ email: "", password: "" });
    const [login] = useMutation(LOGIN_USER);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data } = await login({ variables: form });
        localStorage.setItem("token", data.login.token);
        alert("Logged in Successfully!");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
            <button type="submit">Login</button>
        </form>
    )
}

export default Login;