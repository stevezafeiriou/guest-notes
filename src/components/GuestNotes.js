import React, { useState } from "react";
import { NotesContainer, Note, FollowText } from "./Elements";
import Loader from "./Loader";

function GuestNotes({ notes, loading, error }) {
	const [hoveredNoteIndex, setHoveredNoteIndex] = useState(null);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [showFollowText, setShowFollowText] = useState(false);

	// Track mouse movement and update position
	const handleMouseMove = (e) => {
		setMousePosition({ x: e.clientX, y: e.clientY });
	};

	console.log(notes);

	return (
		<NotesContainer onMouseMove={handleMouseMove}>
			{loading && <Loader isError={false} message="Loading guest notes..." />}
			{error && <Loader isError={true} message={error} />}

			{!loading && notes.message === "No notes found." && (
				<Loader isError={false} message="No notes found." />
			)}

			{!loading &&
				notes.length > 0 &&
				notes.map((note, index) => (
					<Note
						key={index}
						onMouseEnter={() => {
							setHoveredNoteIndex(index);
							setShowFollowText(true); // Show follow text on hover
						}}
						onMouseLeave={() => {
							setHoveredNoteIndex(null);
							setShowFollowText(false); // Hide follow text on leave
						}}
						isBlurred={hoveredNoteIndex !== null && hoveredNoteIndex !== index}
					>
						<p>
							<strong>{note.name || "Anonymous"}</strong>
						</p>
						<p>{note.message}</p>
					</Note>
				))}

			{/* Conditionally render the follow text */}
			{showFollowText && (
				<FollowText
					style={{ top: `${mousePosition.y}px`, left: `${mousePosition.x}px` }}
				>
					Guest Notes:)
				</FollowText>
			)}
		</NotesContainer>
	);
}

export default GuestNotes;
