import React from "react";
import { useWindowSize } from "react-use";
import {
	MapContainer,
	SvgContainer,
	TagButton,
	ButtonContainer,
} from "./GenerativeMapElements";

function GenerativeMap({ tags, notes, selectedTag, onTagSelect }) {
	const { width, height } = useWindowSize(); // Get the window size for responsive SVG

	// Handle tag selection
	const handleTagClick = (tagId) => {
		onTagSelect(tagId);
	};

	// Function to generate random points for the map
	const generateRandomPoints = (data, width, height) => {
		const padding = 50; // Padding to avoid points being too close to the edges
		return data.map((item) => {
			const x = Math.random() * (width - 2 * padding) + padding; // Random x with padding
			const y = Math.random() * (height - 2 * padding) + padding; // Random y with padding

			return { x, y, author: item.name || "Anonymous", message: item.message };
		});
	};

	const points = generateRandomPoints(notes, width, height);

	return (
		<MapContainer>
			{/* Tag section for tag selection */}
			<ButtonContainer>
				{tags
					.sort((a, b) => b.id - a.id) // Sort by ID descending
					.map((tag) => (
						<TagButton
							key={tag.id}
							isActive={tag.id === selectedTag}
							onClick={() => handleTagClick(tag.id)}
						>
							{tag.tag_name}
						</TagButton>
					))}
			</ButtonContainer>

			{/* SVG Map Generation */}
			<SvgContainer viewBox={`0 0 ${width} ${height}`}>
				{/* First point: "YOU ARE HERE" with arrow */}
				{points.length > 0 && (
					<g>
						<circle cx={points[0].x} cy={points[0].y} r="5" fill="#f8f8f8" />
						{/* Arrow pointing to the first point */}
						<line
							x1={points[0].x}
							y1={points[0].y - 70} // Position the start of the arrow higher
							x2={points[0].x}
							y2={points[0].y - 15} // Adjust the bottom part of the arrow
							stroke="#f8f8f8"
							strokeWidth="2"
							markerEnd="url(#arrowhead)" // Add an arrow marker
						/>
						{/* "YOU ARE HERE" label positioned above the first point */}
						<text
							x={points[0].x}
							y={points[0].y - 80} // Move the label further up to avoid overlap
							fontSize="12"
							textAnchor="middle"
							fill="#f8f8f8"
						>
							"YOU GROW"
						</text>
					</g>
				)}

				{/* Define arrowhead marker */}
				<defs>
					<marker
						id="arrowhead"
						markerWidth="5" // Make the arrow smaller
						markerHeight="5" // Reduce the height of the arrow
						refX="0"
						refY="2.5"
						orient="auto"
					>
						<polygon points="0 0, 5 2.5, 0 5" fill="#f8f8f8" />{" "}
						{/* Smaller arrow */}
					</marker>
				</defs>

				{/* Remaining points and lines */}
				{points.map((point, index) => (
					<g key={index}>
						{/* Draw dashed line to connect to the next point */}
						{index < points.length - 1 && (
							<line
								x1={point.x}
								y1={point.y}
								x2={points[index + 1].x}
								y2={points[index + 1].y}
								stroke="#f8f8f8"
								strokeWidth="2"
								strokeDasharray="10, 10"
							/>
						)}

						{/* Circle for each note */}
						<circle cx={point.x} cy={point.y} r="5" fill="#ff56b1" />
						{/* Text for author name */}
						<text
							x={point.x + 10}
							y={point.y - 10}
							fontSize="12"
							fill="#ff56b1"
						>
							{point.author}
						</text>
					</g>
				))}
			</SvgContainer>
		</MapContainer>
	);
}

export default GenerativeMap;
