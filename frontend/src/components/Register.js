import React, { useState } from "react";
import { useMutation } from "@apollo/client/react";
import { REGISTER_USER } from "../graphql/mutations";

const Register = () => {
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const [register] = useMutation(REGISTER_USER);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data } = await register({ variables: form });
        localStorage.setItem("token", data.register.token);
        alert("Registered Successfully!");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
            <button type="submit">Register</button>
        </form>
    )
}

export default Register;