import React from "react";

const UserCard = ({ userData, navigateTo }) => {
  const handleClick = () => {
    navigateTo(`/calendar/${userData.id}`);
  };

  return (
    <div style={cardStyle}>
      <h2>{userData.address}</h2>
      <p>
        {userData.city}, {userData.state} {userData.zipCode}
      </p>
      <p>Price: ${userData.price.toLocaleString()}</p>
      <p>Saved: {userData.isSaved ? "Yes" : "No"}</p>
      <p>Favorited: {userData.isFavorited ? "Yes" : "No"}</p>
      <button className="nav-btn btn" onClick={handleClick} style={buttonStyle}>
        View Calendar
      </button>
    </div>
  );
};

const cardStyle = {
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "16px",
  width: "300px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
};

const buttonStyle = {
  backgroundColor: "#4285f4",
  color: "white",
  border: "none",
  padding: "10px 15px",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "1em",
  marginTop: "10px",
  transition: "background-color 0.3s ease",
};

export default UserCard;
