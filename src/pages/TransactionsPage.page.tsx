import React from "react";
import { Line } from "react-chartjs-2";
import { Data, Options } from "../models/analytic/data";


const data : Data = {
  labels: ['Enero', 'Febrero', 'Marzo','Abril', 'Mayo', 'Junio', 'Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  datasets: [{
    label: 'My First Dataset',
    data: [12, 19, 3, 5, 2, 3],
    fill: true,
    backgroundColor: "rgb(255, 99, 132)",
    borderColor: "rgba(255, 99, 132, 0.2)",
    tension: 1
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
        <div className="links"></div>
      </div>
      <Line type="line" data={data} options={options} />
    </>
  );
};
