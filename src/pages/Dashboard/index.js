// https://dribbble.com/shots/17313206/attachments/12428051?mode=media
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { BsHandbagFill, BsCartCheckFill } from "react-icons/bs";
import { TiEye } from "react-icons/ti";
import { Row, Col } from "react-bootstrap";

import DashboardCard from "../../components/DashboardCard";
import DashbaordTable from "../../components/DashbaordTable";
import DashboardChart from "../../components/DashboardChart";
import DashboardLayout from "../../layout/DashboardLayout";
import { UsersContext } from "../../App";

import traffic from "../../images/traffic-red.jpg";

const Dashbaord = () => {
  const dashboardCardItems = [
    {
      icon: <TiEye color="#83bcbd" size={25} />,
      bodyTitle: "Total Views",
      bodyValue: "308,402",
      footer: "Start from 1 Jan, 2021",
    },
    {
      icon: <BsHandbagFill color="green" size={25} />,
      bodyTitle: "Total Products",
      bodyValue: "10,802",
      footer: "+ Add new product",
    },
    {
      icon: <FaUsers color="skyblue" size={25} />,
      bodyTitle: "Total Users",
      bodyValue: "8,425",
      footer: "New users noted every week",
    },
    {
      icon: <BsCartCheckFill color="tomato" size={25} />,
      bodyTitle: "Total Sells",
      bodyValue: "10,208,024",
      footer: "Start from 1 Jan, 2021",
    },
  ];
  const location = useLocation();
  const { loggedInUser } = useContext(UsersContext);

  return (
    <DashboardLayout>
      <>
        <p className="lead fw-bold pb-2">Dashboard</p>
        <Row
          xs={1}
          sm={2}
          lg={4}
          className="first-row g-4 d-flex w-100 "
          style={{ marginBottom: "25px" }}
        >
          <Col role="button" className=" px-3 ">
            <div className="px-3 py-4 h-100 bg-white d-flex flex-column justify-content-between">
              <p className="lead fw-normal">Index</p>
              <div
                className="d-flex flex-column align-items-end justify-content-between"
                style={{ textAlign: "right" }}
              >
                <div>
                  <p>1500</p>
                  <div className="d-flex gap-2 align-items-center">
                    <div className="upfacing-rectangle"></div>
                    <span className="fw-normal">1.5%</span>
                  </div>
                </div>
                <p className="lead fs-2 fw-bold mb-0">51074.15</p>
              </div>
            </div>
          </Col>
          <Col role="button" className=" px-3 ">
            <div className="px-3 py-4 h-100 bg-white d-flex flex-column justify-content-between">
              <p className="fw-normal lead">
                Current <br /> balance
              </p>
              <div
                className="d-flex flex-column align-items-end justify-content-between"
                style={{ textAlign: "right" }}
              >
                <p className="lead fs-2 fw-bold mb-0">$32,900.15</p>
              </div>
            </div>
          </Col>
          <Col role="button" className=" px-3 ">
            <div className="px-3 py-4 h-100 bg-white d-flex flex-column justify-content-between">
              <p className="fw-normal lead">
                Total <br /> referrals
              </p>
              <div
                className="d-flex flex-column align-items-end justify-content-between"
                style={{ textAlign: "right" }}
              >
                <p className="lead fs-2 fw-bold mb-0">216</p>
              </div>
            </div>
          </Col>
          <Col role="button" className=" px-3 ">
            <div className="px-3 py-4 h-100 bg-white d-flex flex-column justify-content-between">
              <p className="fw-normal lead">
                Traffic <br /> Light
              </p>
              <img
                style={{ height: "150px", objectFit: "contain" }}
                src={traffic}
              />
            </div>
          </Col>
        </Row>
        <Row xs={1} sm={2} lg={4} className="g-4 d-flex w-100">
          {dashboardCardItems.map((item, idx) => (
            <DashboardCard key={idx} {...item} />
          ))}
        </Row>
        <div
          className="tablechart me-4 me-lg-0 d-flex flex-column flex-md-row mb-3 gap-4 "
          style={{ marginTop: "40px" }}
        >
          <DashbaordTable />
          <div
            className="d-flex flex-column h-100 p-3"
            style={{ background: "white", width: "35%" }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <p className="mb-0" style={{ fontWeight: "500" }}>
                Lorem and Ipsum
              </p>
              <select className="opacity-50 outline-0 border-0">
                <option selected value="this_week">
                  This week
                </option>
                <option value="this_month">This month</option>
                <option value="this_year">This year</option>
              </select>
            </div>
            <div className="mt-auto">
              <DashboardChart />
            </div>
          </div>
        </div>
      </>
    </DashboardLayout>
  );
};

export default Dashbaord;
