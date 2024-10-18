import React from "react";
import GenerativeMap from "../components/GenerativeMap";

function MapPage({ tags, notes, selectedTag, onTagSelect }) {
	return (
		<>
			<GenerativeMap
				tags={tags}
				notes={notes}
				selectedTag={selectedTag}
				onTagSelect={onTagSelect}
			/>
		</>
	);
}

export default MapPage;
