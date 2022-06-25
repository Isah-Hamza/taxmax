import React from "react";
import DashboardLayout from "../../layout/DashboardLayout";
import { GrFormEdit } from "react-icons/gr";
import { Button } from "react-bootstrap";

import user from "../../images/Isah Hamza.jpg";

const Profile = () => {
  return (
    <DashboardLayout>
      <div className="profile">
        <p className="lead fw-bold pb-2 mb-4">User Profile</p>
        <div
          className="d-flex gap-4 align-items-center justify-content-lg-center"
          style={{ marginTop: "50px" }}
        >
          <div
            className="rounded-circle border border-white position-relative"
            style={{ width: "150px", height: "150px" }}
          >
            <img src={user} className="w-100 h-100 rounded-circle " />
            <GrFormEdit
              size={28}
              className="position-absolute top-50 start-100 translate-middle"
            />
          </div>
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
              <input
                className="form-control"
                id="email"
                type="email"
                placeholder="email address"
                style={{}}
              />
              <div className="d-flex gap-3">
                <input
                  className="form-control w-50"
                  id="username"
                  placeholder="username"
                />
                <input
                  className="form-control w-50"
                  id="location"
                  placeholder="Country"
                />
              </div>
              <input
                className="form-control"
                id="referral_code"
                placeholder="Referral code"
              />
              <textarea
                className="w-100 p-2 form-control"
                style={{ height: "150px" }}
                placeholder="Address"
              />
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
              <input
                className="form-control w-100"
                id="old_password"
                placeholder="old password"
                type="password"
              />
              <input
                className="form-control w-100"
                id="new_password"
                placeholder="new password"
                type="password"
              />
              <input
                className="form-control w-100"
                id="confirm_password"
                placeholder="retype new password"
                type="password"
              />
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
