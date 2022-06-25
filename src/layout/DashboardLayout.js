// https://dribbble.com/shots/17313206/attachments/12428051?mode=media
import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BsGridFill, BsBagFill, BsFillChatRightDotsFill } from "react-icons/bs";
import { FaUserAlt, FaCommentDollar } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { MdNotificationsActive } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { BiMenu } from "react-icons/bi";

import user from "../images/Isah Hamza.jpg";

const DashboardLayout = ({ children }) => {
  const [activeSidebarLink, setActiveSidebarLink] = useState("Dashboard");
  const [isOpen, setIsOpen] = useState(false);
  const sideBarList = [
    {
      title: "Dashboard",
      icon: <BsGridFill />,
      link: "/dashboard",
    },
    {
      title: "Profile",
      icon: <FaUserAlt />,
      link: "/dashboard/profile",
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
      link: "/dashboard/wallet",
    },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  let path = location.pathname.split("/");
  path = path[path.length - 1];

  const handleChangeActiveTab = (tabTitle, tabLink) => {
    setActiveSidebarLink(tabTitle);
    navigate(tabLink);
  };

  const searchInputRef = useRef();

  useEffect(() => {
    setActiveSidebarLink(path);
    return () => {};
  }, [location.pathname]);

  return (
    <div className="dashboard d-flex bg-light">
      <aside
        className={`${isOpen && "open"} shadow pt-3`}
        style={{
          width: "20%",
          height: "100vh",
          overflowY: "auto",
        }}
      >
        <div
          className="px-3 ps-4 d-flex justify-content-between align-items-center"
          style={{ paddingBottom: "55px" }}
        >
          <p
            style={{ whiteSpace: "nowrap" }}
            className="lead fw-bold mb-0 text-lg-center d-flex fs-sm-3"
          >
            <span className="d-none d-sm-block me-1">Welcome to</span> TaxMacs
          </p>
          <IoMdClose
            className="d-block d-lg-none"
            size={24}
            role="button"
            color="red"
            onClick={() => setIsOpen(false)}
          />
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
              onClick={() => handleChangeActiveTab(item.title, item.link)}
              style={{ paddingLeft: "40px", cursor: "pointer" }}
              className={`${
                activeSidebarLink.toLowerCase() == item.title.toLowerCase() &&
                "active"
              } border-bottom d-flex gap-3 py-3`}
              key={idx}
            >
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </li>
          ))}
        </div>
      </aside>
      {isOpen && (
        <div
          className={`hideDesktop position-fixed ${isOpen ? "show" : "hide"}`}
          style={{
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,.5)",
          }}
        ></div>
      )}
      <main
        className=""
        style={{
          width: "80%",
          height: "100vh",
          msOverflowY: "auto",
        }}
      >
        <div
          className="shadow-sm d-flex align-items-center justify-content-between px-4"
          style={{ height: "60px" }}
        >
          <div
            className="d-block d-lg-none p-1 ps-0"
            role="button"
            onClick={() => setIsOpen(true)}
          >
            <BiMenu size={24} />
          </div>
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
            <span className="d-none d-sm-block" style={{ cursor: "pointer" }}>
              <BsFillChatRightDotsFill size={18} />
            </span>
          </div>
        </div>
        <div
          className="ps-4 py-4 d-flex flex-column overflow-auto"
          style={{ height: "calc(100vh - 60px)" }}
        >
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
