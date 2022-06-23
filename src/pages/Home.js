import React from "react";
import Navbar from "../components/Navbar";

import blueLogo from "../images/logo-blue.jpeg";

const Home = () => {
  return (
    <main className="d-flex flex-column w-100" style={{ maxHeight: "100vh" }}>
      <Navbar />
      <div
        style={{ height: "calc(100vh - 70px )" }}
        className="d-flex flex-grow-1 justify-content-center align-items-center"
      >
        <img
          style={{ height: "100%", objectFit: "cover" }}
          className="img-fluid w-100 h-100"
          src={blueLogo}
          alt="blue logo"
        />
      </div>
    </main>
  );
};

export default Home;
