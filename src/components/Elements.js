import styled from "styled-components";

/// Input Note Tab

export const FormContainer = styled.div`
	flex: 0.4;
	padding: 20px;
	background-color: #1b1d1c;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease-in-out;
	h2 {
		margin: 20px 0;
		font-weight: 300;
	}

	@media screen and (max-width: 768px) {
		border-top: 2px solid #ff56b1;
	}
`;

export const Input = styled.input`
	width: 100%;
	padding: 10px;
	margin-bottom: 10px;
	border: 1px solid #ddd;
	background-color: transparent;
	color: #fff;
`;

export const Textarea = styled.textarea`
	width: 100%;
	padding: 10px;
	margin-bottom: 10px;
	border: 1px solid #ddd;
	color: #fff;
	background-color: transparent;
`;

export const SubmitButton = styled.button`
	width: 100%;
	padding: 10px;
	background-color: #ff56b1;
	color: white;
	border: 1px solid #ff56b1;
	transition: all 0.2s ease-in-out;
	cursor: pointer;

	&:disabled {
		background-color: #ccc;
		cursor: not-allowed;
	}

	&:hover {
		background-color: #ff70b0;
		color: #f8f8f8;
		border: 1px solid #ff70b0;
	}
`;

export const CheckboxContainer = styled.div`
	margin-bottom: 10px;

	label {
		font-size: 0.75rem;
	}
`;

/// Notes Tab

export const NotesContainer = styled.div`
	flex: 0.6;
	padding: 10px;
	overflow-y: scroll;
	background-color: transparent;
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
