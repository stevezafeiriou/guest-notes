import styled from "styled-components";

// Container for the entire map page
export const MapContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	background-color: #1b1d1c;
	color: #f8f8f8;
`;

// Container for the SVG map
export const SvgContainer = styled.svg`
	width: 100%;
	height: 100%;
`;

// Button container for the tag selection buttons
export const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 20px;
`;

// Individual tag button for selecting different tags
export const TagButton = styled.button`
	padding: 8px 15px;
	cursor: pointer;
	background-color: ${({ isActive }) => (isActive ? "#ff56b1" : "#1b1d1c")};
	color: ${({ isActive }) => (isActive ? "#fff" : "#ccc")};
	border: none;
	transition: background-color 0.2s ease-in-out;
	font-size: 0.85rem;

	&:hover {
		background-color: #292b2a;
	}
`;
