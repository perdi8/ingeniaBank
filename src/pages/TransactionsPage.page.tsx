import React from "react";
import { Line } from "react-chartjs-2";
import { Data, Options } from "../models/analytic-balance/DataBalance.model";


const data : Data = {
  labels: ['Enero', 'Febrero', 'Marzo','Abril', 'Mayo', 'Junio', 'Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  datasets: [{
    label: 'My First Dataset',
    data: [12, 19, 3, 5, 2, 3],
    fill: true,
    backgroundColor: "#e05c93",
    borderColor: "#d01e69",
    tension: 0.5
  }]
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
