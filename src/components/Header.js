import React, { useState } from "react";
import styled from "styled-components";
import { FaQrcode } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai"; // Import the close icon
import qr from "../assets/sz-links.png";

// Header styles
const HeaderContainer = styled.header`
	height: 60px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px;
	border-bottom: 1px solid #f8f8f8;
	background-color: #1b1d1c;
	color: white;
`;

const Title = styled.h1`
	margin: 0;
	font-size: 1.4rem;
	font-weight: 300;
	text-align: center;
	flex-grow: 1;
`;

const QrIcon = styled(FaQrcode)`
	font-size: 1.5rem;
	color: #f8f8f8;
	transition: all 0.2s ease-in-out;
	cursor: pointer;

	&:hover {
		color: #ff56b1;
	}
`;

// Popup styles
const PopupOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	backdrop-filter: blur(2px); /* Blur effect */
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
`;

const PopupContent = styled.div`
	background: white;
	padding: 10px;
	border-radius: 10px;
	position: relative;
	width: 80%;
	max-width: 300px;
	h2 {
		color: #1b1d1c;
		text-align: center;
		margin-top: 15px;
		font-weight: 300;
	}
`;

const CloseButton = styled(AiOutlineClose)`
	position: absolute;
	top: 10px;
	right: 10px;
	cursor: pointer;
	font-size: 1.5rem;
	color: #1b1d1c;
	transition: all 0.2s ease-in-out;
	cursor: pointer;

	&:hover {
		color: #ff56b1;
	}
`;

const Image = styled.img`
	width: 100%;
	height: 300px;
	object-fit: contain;
	-o-object-fit: contain;
	/* border-radius: 10px; */
`;

const Header = () => {
	const [isPopupOpen, setIsPopupOpen] = useState(false); // State to handle popup visibility

	// Function to toggle popup
	const togglePopup = () => {
		setIsPopupOpen(!isPopupOpen);
	};

	return (
		<>
			<HeaderContainer>
				<Title>[steve's] Guest Notes</Title>
				<QrIcon onClick={togglePopup} />
			</HeaderContainer>

			{/* Popup Component */}
			{isPopupOpen && (
				<PopupOverlay onClick={togglePopup}>
					<PopupContent onClick={(e) => e.stopPropagation()}>
						<CloseButton onClick={togglePopup} />
						<h2>Scan the QR</h2>
						<Image src={qr} alt="Popup Content" />
					</PopupContent>
				</PopupOverlay>
			)}
		</>
	);
};

export default Header;
