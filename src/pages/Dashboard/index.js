import React, { useState, useRef } from "react";
import user from "../../images/Isah Hamza.jpg";
import { BsGridFill, BsBagFill, BsFillChatRightDotsFill } from "react-icons/bs";
import { FaUserAlt, FaCommentDollar } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { MdNotificationsActive } from "react-icons/md";

const Dashbaord = () => {
  const [activeSidebarLink, setActiveSidebarLink] = useState("Dashboard");
  const sideBarList = [
    {
      title: "Dashboard",
      icon: <BsGridFill />,
    },
    {
      title: "Profile",
      icon: <FaUserAlt />,
    },
    {
      title: "Portfolio",
      icon: <BsBagFill />,
    },
    {
      title: "Messages",
      icon: <BsFillChatRightDotsFill />,
    },
    {
      title: "Wallet",
      icon: <FaCommentDollar />,
    },
  ];
  const handleChangeActiveTab = (tabTitle) => {
    setActiveSidebarLink(tabTitle);
  };

  const searchInputRef = useRef();

  return (
    <div className="dashboard d-flex bg-light">
      <aside
        className="shadow pt-3"
        style={{
          width: "20%",
          height: "100vh",
          overflowY: "auto",
        }}
      >
        <div style={{ paddingBottom: "55px" }}>
          <p className="lead fw-bold mb-0 text-center">Welcome to TaxMacs</p>
        </div>
        <div
          className="w-100 d-flex flex-column justify-content-center align-items-center w-50 mx-auto"
          style={{}}
        >
          <img
            src={user}
            alt="user image"
            className="rounded-circle"
            style={{ maxWidth: "120px", aspectRatio: "1/1" }}
          />
          <div className="position-relative mt-2 d-flex flex-column fw-bold gap-0 text-center">
            <div
              className="position-absolute bg-success rounded-circle end-0 "
              style={{ width: "6px", height: "6px", top: "17%" }}
            ></div>
            <p className="mb-0">Isah Hamza</p>
            <p
              className="fw-normal"
              style={{ marginTop: "-5px", fontSize: "14px" }}
            >
              Software Developer
            </p>
          </div>
        </div>
        <div className="d-flex flex-column mt-4">
          {sideBarList.map((item, idx) => (
            <li
              onClick={() => handleChangeActiveTab(item.title)}
              style={{ paddingLeft: "60px", cursor: "pointer" }}
              className={`${
                activeSidebarLink == item.title && "active"
              } border-bottom d-flex gap-3 py-3`}
              key={idx}
            >
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </li>
          ))}
        </div>
      </aside>
      <main
        className=""
        style={{
          //   background: "#213a82",
          width: "80%",
          height: "100vh",
          msOverflowY: "auto",
        }}
      >
        <div
          className="shadow-sm d-flex align-items-center justify-content-between px-4"
          style={{ height: "60px" }}
        >
          <div className="position-relative">
            <input
              ref={searchInputRef}
              style={{ outline: "none", paddingLeft: "28px" }}
              className="border-0 outline-0 bg-transparent"
              type="search"
              id="search"
              placeholder="Search anything here..."
            />
            <label
              onClick={() => searchInputRef.current.click()}
              htmlFor="search"
              className="position-absolute start-0"
            >
              <span className=" " style={{}}>
                <BsSearch size={20} />
              </span>
            </label>
          </div>
          <div className="position-relative d-flex gap-3">
            <span style={{ cursor: "pointer" }}>
              <MdNotificationsActive size={24} />
            </span>
            <span style={{ cursor: "pointer" }}>
              <BsFillChatRightDotsFill size={18} />
            </span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashbaord;
