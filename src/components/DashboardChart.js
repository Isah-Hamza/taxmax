import React from "react";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar } from "react-chartjs-2";
// import { faker } from "@faker-js/faker";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const options = {
//   plugins: {
//     title: {
//       display: true,
//       text: "Chart.js Bar Chart - Stacked",
//     },
//   },
//   //   responsive: true,
//   scales: {
//     x: {
//       stacked: true,
//     },
//     y: {
//       stacked: true,
//     },
//   },
// };

// const labels = ["M", "T", "W", "T", "F", "S", "S"];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: "Total Views",
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: "rgb(255, 99, 132)",
//     },
//     {
//       label: "Total Sells",
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: "rgb(75, 192, 192)",
//     },
//   ],
// };

// export default function DashboardChart() {
//   return <Bar options={options} data={data} />;
// }

const DashboardChart = () => {
  const dummyData = [
    {
      day: "Mon",
      sells: "50px",
      views: "70px",
    },
    {
      day: "Tue",
      sells: "40px",
      views: "50px",
    },
    {
      day: "Wed",
      sells: "70px",
      views: "80px",
    },
    {
      day: "Thu",
      sells: "60px",
      views: "60px",
    },
    {
      day: "Fri",
      sells: "50px",
      views: "70px",
    },
    {
      day: "Sat",
      sells: "100px",
      views: "30px",
    },
    {
      day: "Sun",
      sells: "80px",
      views: "60px",
    },
  ];
  return (
    <div className="chart">
      <div className="d-flex mt-3 gap-3 align-items-center ">
        <div className="d-flex gap-2 align-items-center">
          <div
            className="rounded-sm"
            style={{ width: "12px", height: "12px", background: "orange" }}
          ></div>
          <p className="mb-0">Lorem</p>
        </div>
        <div className="d-flex gap-2 align-items-center">
          <div
            className="rounded-sm"
            style={{ width: "12px", height: "12px", background: "green" }}
          ></div>
          <p className="mb-0">Ipsum</p>
        </div>
      </div>
      <div className="d-flex mt-4 align-items-end w-100 justify-content-between">
        {dummyData.map((item, idx) => (
          <div key={idx} className="d-flex flex-column align-items-center">
            <div
              className="rounded-top"
              style={{
                background: "orange",
                width: "25px",
                height: item.views,
              }}
            ></div>
            <div
              className="rounded-bottom"
              style={{ background: "green", width: "25px", height: item.sells }}
            ></div>
            <span className="mt-2" style={{ fontSize: "12px" }}>
              {item.day}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardChart;
