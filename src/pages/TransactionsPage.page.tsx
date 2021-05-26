import React from "react";
import { Line } from "react-chartjs-2";
import { Data, Options } from "../models/analytic/data";

const data: Data = {
  label: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
  ],
};

const options: Options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

export const LineChart: React.FC = () => {
  return (
    <>
      <div className="header">
        <h1 className="title">Line Chart</h1>
        <div className="links"></div>
      </div>
      <Line type="line" data={data} options={options} />
    </>
  );
};
