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
