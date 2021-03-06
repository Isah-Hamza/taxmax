import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import logoImg from "../images/logo-blue.jpeg";
import { useNavigate } from "react-router-dom";
import { UsersContext } from "../App";

const Login = () => {
  const location = useLocation();
  const { users, setUsers, setLoggedInUser } = useContext(UsersContext);
  const [email, setEmail] = useState(() => {
    const email = location.state?.email;
    return email ? email : "";
  });
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [showError, setShowError] = useState("");

  const bgColor = "#192537";
  const navigate = useNavigate();

  const handleSignIn = () => {
    // console.log(email, password);
    const user = users.find((item) => item.email == email);
    if (!user) {
      setShowError(true);
      setLoginError("No such user found!");
      console.log(loginError);
      return;
    }
    if (user.password !== password) {
      setShowError(true);
      setLoginError("Incorrect password!");
      console.log(loginError);
      return;
    }
    setShowError(false);
    setLoginError("");
    setLoggedInUser(user);
    navigate("/dashboard", { state: { user } });
  };

  return (
    <div
      className="login d-flex"
      style={{ maxHeight: "100vh", background: bgColor }}
    >
      <div className="d-none d-md-block w-50" style={{ height: "100vh" }}>
        <img
          src={logoImg}
          className="w-100 h-100"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="right w-50 bg-light d-flex flex-column py-4 px-3 vh-100 overflow-auto">
        <div className="d-flex align-items-center">
          <Button
            as={Link}
            to="/"
            className="rounded-circle d-flex justify-content-center align-items-center "
            style={{
              background: "#7a8aba",
              width: "40px",
              height: "40px",
              outline: "none",
              border: "none",
            }}
          >
            {" "}
            <span className="text-light fs-3" style={{ marginTop: "-4px" }}>
              &larr;
            </span>
          </Button>
          <p className="ms-auto mb-0">
            Not a member?{" "}
            <Link className="text-primary text-decoration-none" to="/register">
              Sign up now
            </Link>{" "}
          </p>
        </div>
        <form className="mx-auto" style={{}}>
          <p
            className="lead fs-3 fw-bold "
            style={{ marginTop: "100px", marginBottom: "40px" }}
          >
            Sign in to <span>TaxMacs</span>
          </p>
          <p className="text-danger">
            {showError && loginError && `${loginError}`}
          </p>
          <div className="d-flex gap-4 gap-sm-3 flex-column mt-4">
            <div className="d-flex flex-column">
              <label
                htmlFor="email"
                className="form-label"
                style={{ fontWeight: "500" }}
              >
                Email Address
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control "
                required
              />
            </div>
            <div className="d-flex flex-column">
              <div className="d-flex justify-content-between align-items-center">
                <label
                  htmlFor="email"
                  className="form-label"
                  style={{ fontWeight: "500" }}
                >
                  Password
                </label>
                <Link to="#" className="text-decoration-none fs-6 text-primary">
                  Forgot Password?
                </Link>
              </div>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="Password"
                className="form-control "
                required
              />
            </div>
            <Button
              onClick={handleSignIn}
              style={{ height: "45px" }}
              className="mt-3 outline-none border-0"
            >
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
