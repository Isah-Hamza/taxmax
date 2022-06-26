import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

import logoImg from "../images/logo-blue.jpeg";
import { UsersContext } from "../App";

const Register = () => {
  const bgColor = "#192537";
  const navigate = useNavigate();

  const { users, setUsers } = useContext(UsersContext);

  console.log(users);

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      referral_code: "",
      password: "",
      confirm_password: "",
    },
    onSubmit: (values) => {
      values.current_balance = 0;
      values.traffic_light = "red";
      setUsers((prev) => [values, ...prev]);
      navigate("/login", { state: { email: values.email } });
      alert(values.username);
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("This field is required")
        .min(3, "Username can't be less than 3 chars"),
      email: Yup.string()
        .email("Please enter a valid email")
        .required("This field is required"),
      referral_code: Yup.string(),
      password: Yup.string()
        .required("This field is required")
        .min(6, "Password can't be less than 6 chars "),
      confirm_password: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Password mismatch"
      ),
    }),
  });

  const handleSignUp = () => {
    // navigate("/login");
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
            Already a member?{" "}
            <Link className="text-primary text-decoration-none" to="/login">
              Sign in now
            </Link>{" "}
          </p>
        </div>
        <form onSubmit={formik.handleSubmit} className="mx-auto" style={{}}>
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
                  // htmlFor="username"
                  className="form-label"
                  style={{ fontWeight: "500" }}
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="form-control "
                  required
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                />
                {formik.touched.username && formik.errors.username && (
                  <span className="error">{formik.errors.username}</span>
                )}
              </Col>
              <Col className="d-flex flex-column">
                <label
                  htmlFor="email"
                  className="form-label"
                  style={{ fontWeight: "500" }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control "
                  required
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                  <span className="error">{formik.errors.email}</span>
                )}
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
              <input
                id="referral_code"
                name="referral_code"
                type="text"
                className="form-control"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.referral_code}
              />
              {formik.touched.referral_code && formik.errors.referral_code && (
                <span className="error">{formik.errors.referral_code}</span>
              )}
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
                name="password"
                type="Password"
                className="form-control "
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password && (
                <span className="error">{formik.errors.password}</span>
              )}
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
                name="confirm_password"
                type="password"
                className="form-control "
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirm_password}
              />
              {formik.touched.confirm_password &&
                formik.errors.confirm_password && (
                  <span className="error">
                    {formik.errors.confirm_password}
                  </span>
                )}
            </div>
            <div className="d-flex gap-2 align-items-start">
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
              onClick={handleSignUp}
              style={{ height: "45px" }}
              className="my-3 outline-none border-0"
              type="submit"
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
