import React, { useState } from "react";
import {
	FormContainer,
	Input,
	Textarea,
	SubmitButton,
	CheckboxContainer,
} from "./Elements";

function InputForm({ addNote }) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [acceptedTerms, setAcceptedTerms] = useState(true);
	const [error, setError] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		// Simple form validation
		if (!email || !message || !acceptedTerms) {
			setError("Please provide a valid email, message, and accept the terms.");
			return;
		}

		// Create the note object to pass to addNote
		const note = {
			name: name.trim() || "Anonymous", // If no name, default to 'Anonymous'
			email,
			message,
		};

		addNote(note);

		// Clear the form
		setName("");
		setEmail("");
		setMessage("");
		setError("");
	};

	return (
		<FormContainer>
			<h2>Add a Guest Note!</h2>
			<form onSubmit={handleSubmit}>
				<Input
					type="text"
					placeholder="Your Name (Optional)"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<Input
					type="email"
					placeholder="Your Email (Required)"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<Textarea
					placeholder="I'd love to hear your thoughts about me or my artwork. Please share your feedback or any comments here!"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					required
				/>
				<CheckboxContainer>
					<label>
						<input
							type="checkbox"
							checked={acceptedTerms}
							onChange={(e) => setAcceptedTerms(e.target.checked)}
							required
						/>{" "}
						By posting a note you acknowledge the Terms of Service provided by
						Steve Zafeiriou
					</label>
				</CheckboxContainer>
				{error && <p style={{ color: "red" }}>{error}</p>}
				<SubmitButton type="submit" disabled={!acceptedTerms}>
					Submit
				</SubmitButton>
			</form>
		</FormContainer>
	);
}

export default InputForm;
