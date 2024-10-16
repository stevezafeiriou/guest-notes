import React, { useState } from "react";
import { LoginContainer, LoginCard } from "./LoginElements";

function Login({ onLogin }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Fetch JWT Token from WordPress
		const response = await fetch(
			`${process.env.REACT_APP_API_URL}/wp-json/jwt-auth/v1/token`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					username: username,
					password: password,
				}),
			}
		);

		const data = await response.json();

		if (data.token) {
			localStorage.setItem("token", data.token);
			onLogin(data.token);
		} else {
			alert("Invalid credentials");
		}
	};

	return (
		<LoginContainer>
			<LoginCard>
				<h2 style={{ color: "#fff" }}>Restricted Access</h2>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<input
						type="password"
						placeholder="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button type="submit">Login</button>
					<a href="/">Return back to Home page.</a>
				</form>
			</LoginCard>
		</LoginContainer>
	);
}

export default Login;
