import React, { useState, useEffect } from "react";
import {
	TableContainer,
	Table,
	Th,
	Td,
	DeleteButton,
	ButtonContainer,
	TagButton,
	Card,
	Select,
	SelectButton,
} from "./AdminDashboardElements";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminDashboard = ({
	notes,
	setNotes,
	tags,
	loading,
	error,
	selectedTag,
	onTagSelect,
}) => {
	const token = localStorage.getItem("token");
	const [artworks, setArtworks] = useState([]); // State to store artworks
	const [selectedArtwork, setSelectedArtwork] = useState(null); // Store selected artwork

	// Fetch all posts from the "artworks" category
	const fetchArtworks = async () => {
		try {
			const response = await fetch(
				`${process.env.REACT_APP_API_URL}/wp-json/wp/v2/posts?categories=146`
			);
			if (!response.ok) {
				throw new Error("Error fetching artworks");
			}
			const data = await response.json();
			setArtworks(data); // Store artworks in state
		} catch (error) {
			toast.error("Failed to fetch artworks");
		}
	};

	// Fetch artworks when the component loads
	useEffect(() => {
		fetchArtworks();
	}, []);

	const handleTagClick = (tagId) => {
		onTagSelect(tagId);
	};

	// Function to delete a note
	const deleteNote = async (noteId) => {
		const response = await fetch(
			`${process.env.REACT_APP_API_URL}/wp-json/sz-notes/v1/delete/${noteId}`,
			{
				method: "DELETE",
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);

		if (response.ok) {
			setNotes(notes.filter((note) => note.id !== noteId));
			toast.success("Note deleted successfully!");
		} else {
			const errorMsg = await response.json();
			toast.error(`Failed to delete the note: ${errorMsg.message}`);
		}
	};

	// Function to save the selected artwork by sending post_id through the URL
	const saveArtworkSelection = async () => {
		if (!selectedArtwork) {
			toast.error("Please select an artwork");
			return;
		}
		try {
			const response = await fetch(
				`${process.env.REACT_APP_API_URL}/wp-json/sz-notes/v1/save-artwork/${selectedArtwork}`,
				{
					method: "POST",
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);

			if (!response.ok) {
				throw new Error("Error saving artwork");
			}

			toast.success("Artwork selected successfully!");
		} catch (error) {
			toast.error("Failed to save artwork selection");
		}
	};

	console.log(selectedArtwork);

	return (
		<TableContainer>
			{/* Artwork Selection Card */}
			<Card>
				<Select
					value={selectedArtwork}
					onChange={(e) => setSelectedArtwork(e.target.value)}
				>
					<option value="">Select an artwork</option>
					{artworks.map((artwork) => (
						<option key={artwork.id} value={artwork.id}>
							{artwork.title.rendered}
						</option>
					))}
				</Select>
				<SelectButton onClick={saveArtworkSelection}>Save Artwork</SelectButton>
			</Card>
			{/* Render the tag buttons */}
			<ButtonContainer>
				{tags.map((tag) => (
					<TagButton
						key={tag.id}
						isActive={tag.id === selectedTag}
						onClick={() => handleTagClick(tag.id)}
					>
						{tag.tag_name}
					</TagButton>
				))}
			</ButtonContainer>

			{/* Notes Table */}
			{loading ? (
				<p>Loading notes...</p>
			) : notes.length === 0 ? (
				<p>No notes found for this tag.</p>
			) : (
				<Table>
					<thead>
						<tr>
							<Th>Name</Th>
							<Th>Message</Th>
							<Th>Actions</Th>
						</tr>
					</thead>
					<tbody>
						{notes.map((note) => (
							<tr key={note.id}>
								<Td>{note.name || "Anonymous"}</Td>
								<Td>{note.message}</Td>
								<Td>
									<DeleteButton onClick={() => deleteNote(note.id)}>
										Delete
									</DeleteButton>
								</Td>
							</tr>
						))}
					</tbody>
				</Table>
			)}
		</TableContainer>
	);
};

export default AdminDashboard;
