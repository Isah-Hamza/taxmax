import React from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";
import logoImg from "../images/logo-blue.jpeg";

const Register = () => {
  const bgColor = "#192537";
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
            Already a member?{" "}
            <Link className="text-primary text-decoration-none" to="/login">
              Sign in now
            </Link>{" "}
          </p>
        </div>
        <form className="mx-auto" style={{}}>
          <p
            className="lead fs-3 fw-bold "
            style={{ marginTop: "50px", marginBottom: "40px" }}
          >
            Sign up to <span>TaxMacs</span>
          </p>
          <div className="d-flex gap-4 gap-sm-3 flex-column mt-4">
            <Row xs={1} sm={2} className="gap-3 gap-sm-0">
              <Col className="d-flex flex-column">
                <label
                  htmlFor="username"
                  className="form-label"
                  style={{ fontWeight: "500" }}
                >
                  Username
                </label>
                <input type="text" className="form-control " required />
              </Col>
              <Col className="d-flex flex-column">
                <label
                  htmlFor="email"
                  className="form-label"
                  style={{ fontWeight: "500" }}
                >
                  Email Address
                </label>
                <input type="email" className="form-control " required />
              </Col>
            </Row>
            <div className="d-flex flex-column">
              <label
                htmlFor="referral"
                className="form-label"
                style={{ fontWeight: "500" }}
              >
                Referral Code
              </label>
              <input id="referral" type="text" className="form-control " />
            </div>
            <div className="d-flex flex-column">
              <label
                htmlFor="password"
                className="form-label"
                style={{ fontWeight: "500" }}
              >
                Password
              </label>
              <input
                id="password"
                type="Password"
                className="form-control "
                required
              />
            </div>
            <div className="d-flex flex-column">
              <label
                htmlFor="confirm_password"
                className="form-label"
                style={{ fontWeight: "500" }}
              >
                Confirm Password
              </label>
              <input
                id="confirm_password"
                type="password"
                className="form-control "
                required
              />
            </div>
            <div className="d-flex gap-2">
              <input
                type="checkbox"
                id="agreement"
                className="ps-1"
                style={{ width: "fit-content", marginTop: "5px" }}
              />
              <label htmlFor="agreement" style={{ fontSize: "12px" }}>
                Creating an account means you’re okay with our Terms of Service,
                Privacy Policy, and our default Notification Settings.
              </label>
            </div>
            <Button
              style={{ height: "45px" }}
              className="my-3 outline-none border-0"
            >
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
