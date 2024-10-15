import React from "react";
import { Loading } from "./Elements";

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
