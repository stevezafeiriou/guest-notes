import React, { useState, useEffect } from "react";
import { GlobalStyle } from "./GlobalStyles";
import styled from "styled-components";
import Confetti from "react-confetti"; // Import react-confetti
import GuestNotes from "./components/GuestNotes";
import InputForm from "./components/InputForm";
import Header from "./components/Header";
import { ToastContainer, toast } from "react-toastify"; // Import Toast
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const AppContainer = styled.div`
	display: flex;
	flex-direction: row;
	height: calc(100vh - 70px); /* Adjust height to account for the header */
	width: 100%;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

function App() {
	const [notes, setNotes] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [showConfetti, setShowConfetti] = useState(false); // State to control confetti

	// Function to fetch all notes from the database
	const fetchNotes = async () => {
		try {
			const response = await fetch(
				`${process.env.REACT_APP_API_URL}/wp-json/sz-notes/v1/all`
			);
			if (!response.ok) {
				throw new Error("Error fetching notes");
			}
			const data = await response.json();
			setNotes(data);
			setLoading(false);
		} catch (error) {
			setError(error.message);
			setLoading(false);
		}
	};

	// Function to add a new note and trigger confetti
	const addNote = async (note) => {
		// Show pending toast notification
		const toastId = toast.loading("Sending your note...");

		try {
			const response = await fetch(
				`${process.env.REACT_APP_API_URL}/wp-json/sz-notes/v1/add`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(note),
				}
			);

			if (!response.ok) {
				throw new Error("Error adding note");
			}

			const newNote = await response.json();
			console.log(newNote);

			// Add the new note to the beginning of the existing notes
			setNotes([newNote, ...notes]);

			// Show success toast and hide pending
			toast.update(toastId, {
				render: "Note added successfully!",
				type: "success",
				isLoading: false,
				autoClose: 3000, // Automatically close the toast after 3 seconds
			});

			setShowConfetti(true); // Show confetti when a new note is added
		} catch (error) {
			setError(error.message);

			// Show error toast and hide pending
			toast.update(toastId, {
				render: `Error: ${error.message}`,
				type: "error",
				isLoading: false,
				autoClose: 3000, // Automatically close the toast after 3 seconds
			});
		}
	};

	// Hide confetti after 5 seconds
	useEffect(() => {
		if (showConfetti) {
			const timer = setTimeout(() => {
				setShowConfetti(false);
			}, 5000);
			return () => clearTimeout(timer); // Clean up the timer
		}
	}, [showConfetti]);

	// Fetch notes when the component mounts
	useEffect(() => {
		fetchNotes();
	}, []);

	return (
		<>
			<GlobalStyle />
			<Header />
			{showConfetti && <Confetti />} {/* Show confetti if the state is true */}
			<AppContainer>
				<GuestNotes notes={notes} loading={loading} error={error} />
				<InputForm addNote={addNote} />
			</AppContainer>
			{/* Toast container to display notifications */}
			<ToastContainer
				toastClassName="custom-toast"
				bodyClassName="custom-toast-container"
				autoClose={3500}
				position="bottom-right"
			/>
		</>
	);
}

export default App;
