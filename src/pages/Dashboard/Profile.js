import React, { useContext, useRef, useState, useEffect } from "react";
import DashboardLayout from "../../layout/DashboardLayout";
import { IoMdImages } from "react-icons/io";
import { Button } from "react-bootstrap";

import user from "../../images/Isah Hamza.jpg";
import { UsersContext } from "../../App";

const Profile = () => {
  const [selectedImage, setSelectedImage] = useState();
  const { loggedInUser } = useContext(UsersContext);
  const { email, username, referral_code } = loggedInUser;

  const userImgRef = useRef(null);

  const handleChangeImage = (e) => {
    const reader = new FileReader();
    reader.addEventListener("load", (e) => {
      userImgRef.current.src = e.target.result;
    });
    reader.readAsDataURL(e.target.files[0]);
    setSelectedImage(e.target.files[0]);
  };

  return (
    <DashboardLayout>
      <div className="profile">
        <p className="lead fw-bold pb-2 mb-4">User Profile</p>
        <div
          className="d-flex gap-4 align-items-center justify-content-lg-center"
          style={{ marginTop: "50px" }}
        >
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={(e) => handleChangeImage(e)}
            hidden
          />
          <label role="button" htmlFor="image">
            <div
              className="rounded-circle border border-white position-relative"
              style={{ width: "150px", height: "150px" }}
            >
              <img
                ref={userImgRef}
                src={user}
                className="w-100 h-100 rounded-circle "
              />
              <div>
                <IoMdImages
                  className="position-absolute "
                  style={{ right: "0px", bottom: "25px" }}
                  size={24}
                  color="#000"
                />
              </div>
            </div>
          </label>
          <div>
            <p className="fw-bolder lead mb-0">Isah Hamza</p>
            <p className="">Nigeria</p>
          </div>
        </div>
        <div
          className="user-details d-flex flex-column flex-md-row pe-4"
          style={{ marginTop: "100px", gap: "100px" }}
        >
          <div>
            <p
              className="lead pb-4"
              style={{ marginBottom: "20px", fontWeight: "500" }}
            >
              Basic Information
            </p>
            <form
              className="d-flex flex-column gap-4"
              style={{ maxWidth: "400px" }}
            >
              <div>
                <label htmlFor="email" className="fs-6 mb-1">
                  Email
                </label>
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  placeholder="email address"
                  style={{}}
                  defaultValue={email}
                />
              </div>
              <div className="d-flex gap-3">
                <div className="w-50">
                  <label htmlFor="username" className="fs-6 mb-1">
                    Username
                  </label>
                  <input
                    className="form-control "
                    id="username"
                    placeholder="username"
                    defaultValue={username}
                  />
                </div>
                <div className="w-50">
                  <label htmlFor="location" className="fs-6 mb-1">
                    Nationality
                  </label>
                  <input
                    className="form-control "
                    id="location"
                    placeholder="country"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="referral_code" className="fs-6 mb-1">
                  Referral code
                </label>
                <input
                  className="form-control"
                  id="referral_code"
                  placeholder="Referral code"
                  defaultValue={referral_code}
                />
              </div>
              <div>
                <label htmlFor="address" className="fs-6 mb-1">
                  Address
                </label>
                <textarea
                  id="address"
                  className="w-100 p-2 form-control"
                  style={{ height: "150px" }}
                  placeholder="Enter address here..."
                />
              </div>
              <Button className="" style={{ width: "200px", height: "45px" }}>
                {" "}
                Update Changes{" "}
              </Button>
            </form>
          </div>
          <div>
            <p
              className="lead pb-4"
              style={{ marginBottom: "20px", fontWeight: "500" }}
            >
              Change Password?
            </p>
            <form
              className="d-flex flex-column gap-4 mb-4"
              style={{ maxWidth: "400px", minWidth: "350px" }}
            >
              <div>
                <label htmlFor="old_password" className="fs-6 mb-1">
                  Old Password
                </label>
                <input
                  className="form-control w-100"
                  id="old_password"
                  placeholder="old password"
                  type="password"
                />
              </div>
              <div>
                <label htmlFor="new_password" className="fs-6 mb-1">
                  New Password
                </label>
                <input
                  className="form-control w-100"
                  id="new_password"
                  placeholder="new password"
                  type="password"
                />
              </div>
              <div>
                <label htmlFor="confirm_password" className="fs-6 mb-1">
                  Confirm New Password
                </label>
                <input
                  className="form-control w-100"
                  id="confirm_password"
                  placeholder="retype new password"
                  type="password"
                />
              </div>
              <Button className="" style={{ width: "200px", height: "45px" }}>
                {" "}
                Change{" "}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
