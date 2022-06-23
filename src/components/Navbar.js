import React from "react";
import { Navbar as NavbarBs, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <NavbarBs className="shadow-sm px-4 w-100 " style={{ height: "70px" }}>
      <div className="lead fw-bold">TaxMacs</div>
      <div className=" ms-auto d-flex space-x-2 rounded-sm">
        <Button onClick={() => navigate("/login")}>Login</Button>
        <Button onClick={() => navigate("/register")} className="ms-3">
          Register
        </Button>
      </div>
    </NavbarBs>
  );
};

export default Navbar;
