import React, { useState } from "react";
import Login from "../components/Login";
import AdminDashboard from "../components/AdminDashboard";

const DashboardPage = ({
	tags,
	notes,
	setNotes,
	loading,
	error,
	selectedTag,
	onTagSelect,
}) => {
	const [isAuthenticated, setIsAuthenticated] = useState(
		!!localStorage.getItem("token")
	);

	const handleLogin = (token) => {
		setIsAuthenticated(true);
	};

	return (
		<>
			{isAuthenticated ? (
				<AdminDashboard
					tags={tags}
					notes={notes}
					setNotes={setNotes}
					loading={loading}
					error={error}
					selectedTag={selectedTag}
					onTagSelect={onTagSelect}
				/>
			) : (
				<Login onLogin={handleLogin} />
			)}
		</>
	);
};

export default DashboardPage;
