import React from "react";
import styled from "styled-components";

const Loading = styled.div`
	display: flex;
	padding: 10px;
`;

const Loader = ({ isError, message }) => {
	if (isError && message === "notes is not iterable") {
		window.location.reload();
	}

	return (
		<Loading>
			{isError ? <p style={{ color: "red" }}>{message}</p> : <p>{message}</p>}
		</Loading>
	);
};

export default Loader;
