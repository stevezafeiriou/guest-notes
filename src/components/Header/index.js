import React, { useState, useEffect } from "react";
import {
	HeaderContainer,
	Title,
	InfoIcon,
	PopupOverlay,
	PopupContent,
	CloseButton,
	Image,
	AdminMenu,
	AdminOptions,
	AdminButton,
	ArtworkInformationSection,
	ArtworkSection,
	ArtworkTitle,
	ArtworkDescription,
	ArtworkImage,
	TabContainer,
	Tab,
	TabContent,
	KioskIcon,
} from "./HeaderElements";
import qr from "../../assets/sz-links.png"; // Adjust the path to the image

const Header = ({ toggleKioskModeScreen }) => {
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [selectedTab, setSelectedTab] = useState("artist-info"); // "artist-info" or "artwork-info"
	const [artwork, setArtwork] = useState(null); // State for the selected artwork
	const isAuthenticated = !!localStorage.getItem("token"); // Check if the user is logged in

	// Toggle popup visibility
	const togglePopup = () => {
		setIsPopupOpen(!isPopupOpen);
	};

	// Log out function
	const handleLogout = () => {
		localStorage.removeItem("token"); // Clear token from localStorage
		window.location.reload(); // Reload the page to log out
	};

	// Function to fetch the selected artwork
	const fetchSelectedArtwork = async () => {
		try {
			const response = await fetch(
				`${process.env.REACT_APP_API_URL}/wp-json/sz-notes/v1/artwork`
			);
			if (!response.ok) {
				throw new Error("Error fetching artwork");
			}
			const data = await response.json();
			setArtwork(data);
		} catch (error) {
			console.error("Error fetching artwork:", error);
		}
	};

	// Fetch artwork when popup opens
	useEffect(() => {
		if (isPopupOpen && selectedTab === "artwork-info") {
			fetchSelectedArtwork();
		}
	}, [isPopupOpen, selectedTab]);

	return (
		<>
			<HeaderContainer>
				{!isAuthenticated && <KioskIcon onClick={toggleKioskModeScreen} />}

				<Title>
					{isAuthenticated ? (
						<>
							[<span style={{ color: "#ff56b1" }}>admin</span>] Guest Notes
						</>
					) : (
						"[steve's] Guest Notes"
					)}
				</Title>

				{!isAuthenticated && <InfoIcon onClick={togglePopup} />}
				{isAuthenticated && <AdminMenu onClick={togglePopup} />}
			</HeaderContainer>

			{/* Popup */}
			{isPopupOpen && (
				<PopupOverlay onClick={togglePopup}>
					<PopupContent onClick={(e) => e.stopPropagation()}>
						<CloseButton onClick={togglePopup} />

						{/* Tabs */}
						<TabContainer>
							<Tab
								isActive={selectedTab === "artist-info"}
								onClick={() => setSelectedTab("artist-info")}
							>
								Artist Info
							</Tab>
							<Tab
								isActive={selectedTab === "artwork-info"}
								onClick={() => setSelectedTab("artwork-info")}
							>
								Artwork Info
							</Tab>
						</TabContainer>

						{/* Tab Content */}
						<TabContent>
							{selectedTab === "artist-info" && (
								<>
									<h2>Scan the QR</h2>
									<Image src={qr} alt="QR Code" />

									{/* Admin Options when logged in */}
									{isAuthenticated && (
										<AdminOptions>
											<h2 style={{ marginBottom: "20px" }}>Admin Options</h2>
											<AdminButton onClick={() => window.location.reload()}>
												Refresh
											</AdminButton>
											<AdminButton onClick={handleLogout}>Log Out</AdminButton>
										</AdminOptions>
									)}
								</>
							)}

							{selectedTab === "artwork-info" && artwork && (
								<ArtworkSection>
									{/* Image on the left */}
									<ArtworkImage
										src={artwork.post_image}
										alt={artwork.post_title}
									/>

									{/* Text section on the right */}
									<ArtworkInformationSection>
										<ArtworkTitle>{artwork.post_title}</ArtworkTitle>
										<ArtworkDescription
											dangerouslySetInnerHTML={{ __html: artwork.post_content }}
										/>
									</ArtworkInformationSection>
								</ArtworkSection>
							)}
						</TabContent>
					</PopupContent>
				</PopupOverlay>
			)}
		</>
	);
};

export default Header;
