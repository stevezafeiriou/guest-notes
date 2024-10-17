import React from "react";
import styled from "styled-components";

// Styling for the preview container
const PreviewContainer = styled.div`
	background-color: #292b2a;
	padding: 20px;
	margin: 10px 0;

	color: #fff;
	h3 {
		margin-bottom: 10px;
		font-weight: 300;
	}
`;

// Styling for the preview text
const PreviewText = styled.div`
	font-size: 1rem;
	margin-bottom: 10px;

	strong {
		color: #ff56b1;
		font-size: 0.9rem;
	}

	p {
		font-weight: 300;
	}
`;

function LivePreview({ name, message }) {
	return message !== "" ? (
		<PreviewContainer>
			<h3>Live Preview</h3>
			<PreviewText>
				<p>
					<strong>{name || "Anonymous"}</strong>
				</p>
				<p>
					{message ||
						"Your message will appear here in real-time as you type..."}
				</p>
			</PreviewText>
		</PreviewContainer>
	) : null;
}

export default LivePreview;
