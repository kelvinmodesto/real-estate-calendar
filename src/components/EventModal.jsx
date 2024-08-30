import React from "react";

// todo: prop drilling should be avoided
const EventModal = ({ data, onClose, navigateTo }) => {
  return (
    <>
      <div className="overlay" onClick={onClose}></div>
      <div className="modal">
        <h2>Tour Details</h2>
        <p>Date: {data.date.toDateString()}</p>
        <p>Time: {JSON.stringify(data.tours)}</p>
        <button onClick={() => navigateTo("/")}>Schedule a Tour</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </>
  );
};

export default EventModal;
