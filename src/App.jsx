import React, { useState, useEffect } from "react";
import Spinner from "./components/Spinner";
import useFetch from "./hooks/useFetch";
import UserCalendar from "./UserCalendar";
import UserGrid from "./components/UserGrid";
// todo: improve router management
const App = () => {
  // todo: improve error handling
  const { data: userList, loading, error } = useFetch("/api/saved-listings");
  const [currentPage, setCurrentPage] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setCurrentPage(window.location.pathname);
    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigateTo = (path) => {
    window.history.pushState({}, "", path);
    setCurrentPage(path);
  };

  if (loading) {
    return <Spinner />;
  }
  return (
    <div style={{ maxHeight: "calc(100vh - 40px)" }}>
      <header>
        {currentPage.startsWith("/calendar/") && (
          <button
            className="nav-button btn"
            style={{ marginBottom: "16px" }}
            onClick={() => navigateTo("/")}
          >
            Home
          </button>
        )}
      </header>
      <main>
        {currentPage.startsWith("/calendar/") ? (
          <UserCalendar
            userId={currentPage.split("/calendar/")[1]}
            navigateTo={navigateTo}
          />
        ) : (
          <UserGrid userList={userList} navigateTo={navigateTo} />
        )}
      </main>
    </div>
  );
};

export default App;
