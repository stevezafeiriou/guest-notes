import styled from "styled-components";

export const LoginContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	background-color: #000;
`;

export const LoginCard = styled.div`
	h2 {
		text-align: center;
		font-weight: 300;
	}

	a {
		margin: 10px;
		color: #ff56b1;
		text-align: center;
		font-weight: 300;
		cursor: pointer;
	}

	form {
		display: flex;
		flex-direction: column;
		padding: 10px;
		justify-content: center;
		text-align: center;
	}

	input {
		margin: 10px 0;
		padding: 10px;
		background: transparent;
		color: #fff;
		border: 1px solid #fff;
		width: 250px;
	}
	button {
		padding: 10px 20px;
		background-color: #ff56b1;
		border: none;
		color: white;
		cursor: pointer;
	}
`;
