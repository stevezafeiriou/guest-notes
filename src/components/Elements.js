import styled from "styled-components";

/// Input Note Tab

export const FormContainer = styled.div`
	flex: 0.4;
	padding: 10px;
	background-color: #1b1d1c;
	border-left: 1px solid #f8f8f8;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	transition: all 0.2s ease-in-out;

	h2 {
		font-weight: 300;
	}

	@media screen and (max-width: 768px) {
		border-left: none;
		border-top: 1px solid #ff56b1;
		h2 {
			margin-top: 10px;
			margin-bottom: 20px;
		}
	}
`;

export const Input = styled.input`
	width: 100%;
	padding: 15px 10px;
	margin-bottom: 10px;
	border: 1px solid #ddd;
	background-color: transparent;
	color: #fff;
`;

export const Textarea = styled.textarea`
	width: 100%;
	padding: 15px 10px;
	margin-bottom: 10px;
	border: 1px solid #ddd;
	color: #fff;
	background-color: transparent;
`;

export const SubmitButton = styled.button`
	width: 100%;
	padding: 15px 10px;
	background-color: #ff56b1;
	color: white;
	border: none;
	transition: all 0.2s ease-in-out;
	cursor: pointer;

	&:disabled {
		background-color: #ccc;
		cursor: not-allowed;
	}

	&:hover {
		background-color: #ff70b0;
		color: #f8f8f8;
	}
`;

export const CheckboxContainer = styled.div`
	margin-bottom: 10px;

	label {
		font-size: 0.75rem;
	}
`;

export const Select = styled.select`
	width: 100%;
	padding: 10px;
	margin-bottom: 10px;
	border: 1px solid #ddd;
	background-color: transparent;
	color: #ccc;

	&:focus {
		outline: none;
		border-color: #007bff;
	}
`;

/// Notes Tab

export const NotesContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex: 0.6;
	height: 100%;
	width: 100%;
	padding: 10px;
	background-color: transparent;
`;

export const TagSection = styled.div`
	flex: 0 1 auto;
	margin-bottom: 10px;
`;

export const NotesSection = styled.div`
	flex: 1 1 auto;
	overflow-y: scroll;
	padding: 10px;
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 20px;
`;

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

export const Note = styled.div`
	border-bottom: 1px solid #f8f8f8;
	margin: 20px 0;
	padding: 5px;
	transition: all 0.25s ease-in-out;
	cursor: pointer;
	filter: ${({ isBlurred }) =>
		isBlurred ? "blur(1px)" : "none"}; /* Apply blur based on hover state */

	p {
		margin: 10px 0;
		font-size: 1rem;
		font-weight: 300;
		text-align: justify;

		strong {
			color: #ff56b1;
			font-weight: 500;
			font-size: 0.85rem;
		}
	}
`;

export const FollowText = styled.div`
	position: absolute;
	color: #ff56b1;
	font-size: 1rem;
	font-weight: 600;
	pointer-events: none; /* Prevents the text from interfering with mouse events */
	transition: transform 0.1s ease-in-out;
	transform: translate(5%, -100%); /* Center the text around the cursor */
	pointer-events: none;
	white-space: nowrap; /* Prevent text from wrapping */
`;

export const Loading = styled.div`
	display: flex;
	padding: 10px;
`;
