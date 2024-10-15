import React, { useState, useEffect } from "react";
import {
	FormContainer,
	Input,
	Textarea,
	SubmitButton,
	CheckboxContainer,
	Select,
} from "./Elements";
import Loader from "./Loader";

function InputForm({ addNote, tags, selectedTag, setSelectedTag }) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [tag, setTag] = useState(selectedTag || 6);
	const [acceptedTerms, setAcceptedTerms] = useState(true); // Default to true for better UX
	const [error, setError] = useState("");

	// Regular expression to detect URLs
	const urlPattern = /(\b(https?:\/\/|www\.)[^\s]+)/g;

	// Update the tag state whenever the selectedTag prop changes
	useEffect(() => {
		setTag(selectedTag);
	}, [selectedTag]);

	const handleSubmit = (e) => {
		e.preventDefault();

		// Simple form validation
		if (!email || !message || !acceptedTerms || !tag) {
			setError(
				"Please provide a valid email, message, select a tag, and accept the terms."
			);
			return;
		}

		// Check for links in the message
		if (urlPattern.test(message)) {
			setError("You can not include links in your notes.");
			return;
		}

		// Create the note object to pass to addNote
		const note = {
			name: name.trim() || "Anonymous", // If no name, default to 'Anonymous'
			email,
			message,
			tag_id: tag, // Attach the selected tag to the note
		};

		addNote(note);

		// Clear the form
		setName("");
		setEmail("");
		setMessage("");
		setError("");
	};

	// Update the selectedTag in App.js when the user changes the tag in the dropdown
	const handleTagChange = (e) => {
		const newTag = e.target.value;
		setTag(newTag); // Update local state for the form
		setSelectedTag(newTag); // Update selectedTag in App.js
	};

	return (
		<FormContainer>
			<h2>Add a Guest Note!</h2>
			<form onSubmit={handleSubmit}>
				{error && <Loader isError={true} message={error} />}
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
				<Select value={tag} onChange={handleTagChange} required>
					{tags.map((tag) => (
						<option key={tag.id} value={tag.id}>
							{tag.tag_name}
						</option>
					))}
				</Select>
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

				<SubmitButton type="submit" disabled={!acceptedTerms}>
					Submit
				</SubmitButton>
			</form>
		</FormContainer>
	);
}

export default InputForm;
