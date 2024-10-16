import styled from "styled-components";
import { FiInfo } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosMenu } from "react-icons/io";

export const HeaderContainer = styled.header`
	height: 60px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px;
	border-bottom: 1px solid #f8f8f8;
	background-color: #1b1d1c;
	color: white;

	p {
		font-size: 1.2rem;
	}
`;

export const Title = styled.h1`
	margin: 0;
	font-size: 1.4rem;
	font-weight: 300;
	text-align: center;
	flex-grow: 1;
`;

export const InfoIcon = styled(FiInfo)`
	font-size: 2.5rem;
	margin-right: 20px;
	border-radius: 50%;
	padding: 5px;
	color: #f8f8f8;
	transition: all 0.2s ease-in-out;
	cursor: pointer;

	&:hover {
		color: #f8f8f8;
		background-color: #ff56b1;
	}
`;

export const AdminMenu = styled(IoIosMenu)`
	font-size: 2.5rem;
	margin-right: 20px;
	border-radius: 50%;
	padding: 5px;
	color: #f8f8f8;
	transition: all 0.2s ease-in-out;
	cursor: pointer;

	&:hover {
		color: #f8f8f8;
		background-color: #ff56b1;
	}
`;

export const PopupOverlay = styled.div`
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

export const PopupContent = styled.div`
	background: #fff;
	padding: 20px;
	position: relative;
	width: 60%;
	max-width: 800px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	h2 {
		color: #1b1d1c;
		text-align: center;
		margin-top: 15px;
		font-weight: 300;
	}
	@media screen and (max-width: 768px) {
		width: 90%;
	}
`;

export const CloseButton = styled(AiOutlineClose)`
	position: absolute;
	top: 10px;
	right: 20px;
	cursor: pointer;
	font-size: 1.5rem;
	color: #1b1d1c;
	transition: all 0.2s ease-in-out;

	&:hover {
		color: #ff56b1;
	}
`;

export const Image = styled.img`
	width: 100%;
	height: 300px;
	object-fit: contain;
	-o-object-fit: contain;
`;

export const AdminOptions = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const AdminButton = styled.button`
	width: 100%;
	padding: 10px;
	background-color: #1b1d1c;
	color: white;
	border: none;
	cursor: pointer;
	font-size: 1rem;
	transition: all 0.2s ease-in-out;

	&:hover {
		background-color: #ff56b1;
		color: white;
	}
`;

export const TabContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 20px 0;
	@media screen and (max-width: 768px) {
		margin-bottom: 10px;
	}
`;

export const Tab = styled.button`
	flex: 1;
	padding: 8px 15px;
	background-color: ${({ isActive }) => (isActive ? "#ff56b1" : "#eee")};
	color: ${({ isActive }) => (isActive ? "#f8f8f8" : "#1b1d1c")};
	border: none;
	cursor: pointer;
	font-size: 1rem;
	font-weight: 500;
	transition: all 0.2s ease;

	&:hover {
		background-color: #ff56b1;
		color: #f8f8f8;
	}

	@media screen and (max-width: 768px) {
		padding: 5px;
	}
`;

export const TabContent = styled.div`
	padding: 10px;
	text-align: center;
	@media screen and (max-width: 768px) {
		padding: 5px;
	}
`;

export const ArtworkTitle = styled.h2`
	font-size: 1.5rem;
	padding: 0 10px;
`;

export const ArtworkDescription = styled.div`
	font-size: 1rem;
	color: #1b1d1c;
	padding: 10px;
`;

export const ArtworkInformationSection = styled.div`
	display: flex;
	flex-direction: column;
	overflow-y: auto;
	max-height: 400px;
	padding: 10px;
	border-radius: 10px;
	h1,
	h2,
	h3 {
		text-align: left;
		color: #1b1d1c;
		margin-top: 20px;
		margin-bottom: 10px;
	}

	p {
		text-align: justify;
		color: #1b1d1c;
		margin-bottom: 15px;
	}
	@media screen and (max-width: 768px) {
		max-height: 300px;
		align-items: center;
	}
`;

export const ArtworkImage = styled.img`
	width: 50%;
	height: auto;
	object-fit: contain;
	-o-object-fit: contain;
	max-height: 400px;
	@media screen and (max-width: 768px) {
		width: 80%;
	}
`;

export const ArtworkSection = styled.div`
	display: flex;
	flex-direction: row;
	text-align: justify;
	align-items: stretch;

	@media screen and (max-width: 1080px) {
		flex-direction: column;
		align-items: center;
	}
`;
