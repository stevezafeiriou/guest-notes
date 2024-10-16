import React, { useState } from "react";
import {
	NotesContainer,
	Note,
	ButtonContainer,
	TagButton,
	FollowText,
	TagSection,
	NotesSection,
} from "./GuestNotesElements";
import Loader from "../Loader";

function GuestNotes({ notes, loading, error, tags, onTagSelect, selectedTag }) {
	const [hoveredNoteIndex, setHoveredNoteIndex] = useState(null);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [showFollowText, setShowFollowText] = useState(false);

	// Track mouse movement and update position
	const handleMouseMove = (e) => {
		setMousePosition({ x: e.clientX, y: e.clientY });
	};

	// Handle button click to select the tag
	const handleTagClick = (tagId) => {
		onTagSelect(tagId);
	};

	return (
		<NotesContainer onMouseMove={handleMouseMove}>
			{/* Tag section with buttons */}
			<TagSection>
				<ButtonContainer>
					{tags
						.sort((a, b) => b.id - a.id) // Sort by ID in descending order
						.map((tag) => (
							<TagButton
								key={tag.id}
								isActive={tag.id === selectedTag} // Highlight the active button
								onClick={() => handleTagClick(tag.id)} // Handle tag click
							>
								{tag.tag_name}
							</TagButton>
						))}
				</ButtonContainer>
			</TagSection>

			{/* Notes section */}
			<NotesSection>
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
							isBlurred={
								hoveredNoteIndex !== null && hoveredNoteIndex !== index
							}
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
						style={{
							top: `${mousePosition.y}px`,
							left: `${mousePosition.x}px`,
						}}
					>
						Guest Notes:)
					</FollowText>
				)}
			</NotesSection>
		</NotesContainer>
	);
}

export default GuestNotes;
