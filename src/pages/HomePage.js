import React from "react";
import GuestNotes from "../components/GuestNotes";
import InputForm from "../components/InputForm";

function Home({
	notes,
	loading,
	error,
	tags,
	selectedTag,
	onTagSelect,
	addNote,
}) {
	return (
		<>
			<GuestNotes
				notes={notes}
				loading={loading}
				error={error}
				tags={tags}
				selectedTag={selectedTag}
				onTagSelect={onTagSelect}
			/>
			<InputForm
				addNote={addNote}
				tags={tags}
				selectedTag={selectedTag}
				setSelectedTag={onTagSelect}
			/>
		</>
	);
}

export default Home;
