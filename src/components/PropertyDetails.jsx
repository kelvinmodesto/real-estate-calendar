import React from "react";

const PropertyDetails = ({ propertyData }) => {
  const {
    address,
    city,
    state,
    zipCode,
    price,
    bedrooms,
    bathrooms,
    isSaved,
    isFavorited,
  } = propertyData;

  return (
    <div style={containerStyle}>
      <h3 style={headerStyle}>Property Details</h3>
      <div style={infoStyle}>
        <p>
          <strong>Address:</strong> {address}
        </p>
        <p>
          <strong>City:</strong> {city}
        </p>
        <p>
          <strong>State:</strong> {state}
        </p>
        <p>
          <strong>Zip Code:</strong> {zipCode}
        </p>
        <p>
          <strong>Price:</strong> ${price.toLocaleString()}
        </p>
        {bedrooms && (
          <p>
            <strong>Bedrooms:</strong> {bedrooms}
          </p>
        )}
        {bathrooms && (
          <p>
            <strong>Bathrooms:</strong> {bathrooms}
          </p>
        )}
        <p>
          <strong>Saved:</strong> {isSaved ? "Yes" : "No"}
        </p>
        <p>
          <strong>Favorited:</strong> {isFavorited ? "Yes" : "No"}
        </p>
      </div>
    </div>
  );
};

const containerStyle = {
  borderRadius: "8px",
  padding: "16px",
  maxWidth: "500px",
  margin: "0 auto",
};

const headerStyle = {
  textAlign: "center",
  marginBottom: "16px",
};

const infoStyle = {
  fontSize: "1.2em",
};

export default PropertyDetails;
