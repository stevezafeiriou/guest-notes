import styled from "styled-components";

// Styles for the admin dashboard
export const TableContainer = styled.div`
	padding: 20px;
	color: white;
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;

export const Table = styled.table`
	width: 100%;
	max-width: 1200px;
	border-collapse: collapse;
`;

export const Th = styled.th`
	background-color: #222;
	padding: 10px;
	border: 1px solid #444;
	text-align: left;
`;

export const Td = styled.td`
	background-color: #333;
	padding: 10px;
	border: 1px solid #444;
`;

export const DeleteButton = styled.button`
	width: 100%;
	background-color: #ff56b1;
	color: white;
	border: none;
	padding: 10px;
	transition: all 0.2s ease-in-out;
	cursor: pointer;

	&:hover {
		background-color: #242625;
	}
`;

// Styles for tab buttons
export const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	margin: 20px 0;
`;

export const TagButton = styled.button`
	padding: 10px 20px;
	margin: 0 5px;
	cursor: pointer;
	background-color: ${({ isActive }) => (isActive ? "#ff56b1" : "#1b1d1c")};
	color: ${({ isActive }) => (isActive ? "#fff" : "#ccc")};
	border: none;
	transition: background-color 0.3s ease-in-out;
	font-size: 0.85rem;

	&:hover {
		background-color: #242625;
	}
`;

// Card layout for artwork selection - matching the table styles
export const Card = styled.div`
	width: 100%;
	max-width: 1200px;
	display: flex;
	align-items: center;
	padding: 10px;
	margin-top: 20px;
	background-color: #333;
	border: 1px solid #444;
`;

// Select input for artwork selection - matching the table styles
export const Select = styled.select`
	flex-grow: 1;
	padding: 10px;
	background-color: #222;
	color: white;
	border: 1px solid #444;
	font-size: 1rem;
	margin-right: 10px;

	&:focus {
		outline: none;
		border-color: #ff56b1;
	}
`;

// Button for selecting artwork - matching the table styles
export const SelectButton = styled.button`
	background-color: #ff56b1;
	color: white;
	border: none;
	padding: 10px 20px;
	cursor: pointer;
	transition: all 0.2s ease-in-out;

	&:hover {
		background-color: #242625;
	}

	&:disabled {
		background-color: #444;
		cursor: not-allowed;
	}
`;
