import React, { useState, useEffect } from "react";
import Calendar from "./components/Calendar";
import Spinner from "./components/Spinner";
import useFetch from "./hooks/useFetch";
import PropertyDetails from "./components/PropertyDetails";
// todo: router should be as a hook not a prop
const UserCalendar = ({ userId, navigateTo }) => {
  // todo: improve error handling
  const {
    data: userData,
    loading,
    error,
  } = useFetch(`/api/saved-listings/${userId}`);

  if (loading) {
    return <Spinner />;
  }

  const { openHouses, ...propertyDetails } = userData;
  return (
    <div className="calendar-container">
      <Calendar
        navigateTo={navigateTo}
        availableTourDays={userData.openHouses}
      />
      <PropertyDetails propertyData={propertyDetails} />
    </div>
  );
};

export default UserCalendar;
