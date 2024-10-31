import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyle } from "./GlobalStyles";
import Confetti from "react-confetti";
import Home from "./pages/HomePage";
import Header from "./components/Header";
import DashboardPage from "./pages/DashboardPage";
import MapPage from "./pages/MapPage";
import styled from "styled-components";

const AppContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	height: calc(100vh - 70px);
	width: 100%;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

function App() {
	const [notes, setNotes] = useState([]);
	const [tags, setTags] = useState([]);
	const [selectedTag, setSelectedTag] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [showConfetti, setShowConfetti] = useState(false);

	// Function to fetch all tags
	const fetchTags = async () => {
		try {
			const response = await fetch(
				`${process.env.REACT_APP_API_URL}/wp-json/sz-notes/v1/tags`
			);
			if (!response.ok) {
				throw new Error("Error fetching tags");
			}
			const data = await response.json();
			setTags(data);

			const urlParams = new URLSearchParams(window.location.search);
			const urlTag = urlParams.get("tag");
			if (urlTag && data.some((tag) => tag.id === parseInt(urlTag))) {
				setSelectedTag(parseInt(urlTag));
			} else {
				const mostRecentTag = data.reduce(
					(prev, current) => (prev.id > current.id ? prev : current),
					data[0]
				);
				setSelectedTag(mostRecentTag.id);
			}
		} catch (error) {
			setError(error.message);
		}
	};

	// Function to fetch all notes based on the selected tag
	const fetchNotesByTag = async (tagId) => {
		setLoading(true);
		try {
			const response = await fetch(
				`${process.env.REACT_APP_API_URL}/wp-json/sz-notes/v1/notes/${tagId}`
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
		const toastId = toast.loading("Sending your note...");
		try {
			const response = await fetch(
				`${process.env.REACT_APP_API_URL}/wp-json/sz-notes/v1/add`,
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(note),
				}
			);

			if (!response.ok) {
				throw new Error("Error adding note");
			}

			const newNote = await response.json();
			setNotes([newNote, ...notes]);

			toast.update(toastId, {
				render: "Note added successfully!",
				type: "success",
				isLoading: false,
				autoClose: 3000,
			});

			setShowConfetti(true);
		} catch (error) {
			setError(error.message);

			toast.update(toastId, {
				render: `Error: ${error.message}`,
				type: "error",
				isLoading: false,
				autoClose: 3000,
			});
		}
	};

	const toggleKioskModeScreen = () => {
		const element = document.getElementById("app");
		const isFullScreen = document.fullscreenElement;

		if (isFullScreen) {
			document.exitFullscreen();
		} else {
			element.requestFullscreen();
		}
	};

	// Hide confetti after 5 seconds
	useEffect(() => {
		if (showConfetti) {
			const timer = setTimeout(() => {
				setShowConfetti(false);
			}, 5000);
			return () => clearTimeout(timer);
		}
	}, [showConfetti]);

	// Fetch tags when the app loads
	useEffect(() => {
		fetchTags();
	}, []);

	// Fetch notes when selectedTag changes
	useEffect(() => {
		if (selectedTag) {
			fetchNotesByTag(selectedTag);

			const newUrl = `${window.location.pathname}?tag=${selectedTag}`;
			window.history.pushState(null, "", newUrl);
		}
	}, [selectedTag]);

	return (
		<>
			<GlobalStyle />

			<Router>
				<ToastContainer
					toastClassName="custom-toast"
					bodyClassName="custom-toast-container"
					autoClose={3500}
					position="top-right"
				/>
				<div id="app">
					<Header toggleKioskModeScreen={toggleKioskModeScreen} />
					{showConfetti && <Confetti />}
					<AppContainer>
						<Routes>
							<Route
								path="/"
								element={
									<Home
										notes={notes}
										loading={loading}
										error={error}
										tags={tags}
										selectedTag={selectedTag}
										onTagSelect={setSelectedTag}
										addNote={addNote}
									/>
								}
							/>
							<Route
								path="/dashboard"
								element={
									<DashboardPage
										tags={tags}
										notes={notes}
										setNotes={setNotes}
										loading={loading}
										error={error}
										selectedTag={selectedTag}
										onTagSelect={setSelectedTag}
									/>
								}
							/>

							<Route
								path="/map"
								element={
									<MapPage
										tags={tags}
										notes={notes}
										selectedTag={selectedTag}
										onTagSelect={setSelectedTag}
									/>
								}
							/>
						</Routes>
					</AppContainer>
				</div>
			</Router>
		</>
	);
}

export default App;
