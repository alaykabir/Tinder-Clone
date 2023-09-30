import React from "react";

import Navbar from "../components/Nav";

const Home = () => {
  const authToken = false;

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <>
      <Navbar />
      <div className="home">
        <h1>Swipe Right</h1>
        <button className="primary-button">
          {authToken ? "Signout" : "Create Account"}
        </button>
      </div>
    </>
  );
};

export default Home;
