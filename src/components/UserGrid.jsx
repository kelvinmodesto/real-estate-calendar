import React, { useState } from "react";
import UserCard from "./UserCard";

const UserGrid = ({ userList, usersPerPage = 4, navigateTo }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(userList.length / usersPerPage);

  const getCurrentPageUsers = () => {
    const startIndex = (currentPage - 1) * usersPerPage;
    return userList.slice(startIndex, startIndex + usersPerPage);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div style={gridContainerStyle}>
        {getCurrentPageUsers().map((user) => (
          <UserCard key={user.id} userData={user} navigateTo={navigateTo} />
        ))}
      </div>

      <div style={paginationStyle}>
        <button
          className="nav-button btn"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="nav-button btn"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const gridContainerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "16px",
  padding: "16px",
  justifyItems: "center",
};

const paginationStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "20px",
  gap: "10px",
};

export default UserGrid;
