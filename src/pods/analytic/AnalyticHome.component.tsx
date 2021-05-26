import React from "react";
import { Line } from "react-chartjs-2";
import { Analytic } from "../../models/analytic/Analytic.model";
import { Data, Options } from "../../models/analytic/DataAnalytic.model";


interface Props {
    analytic: Analytic[];
}
  
export const AnalyticComponent: React.FC<Props> = (props) => {

    const { analytic } = props;

    let month = new Date().getUTCMonth() + 1;
    let daysInMonth = new Date(2021, month, 0).getDate();    
 
    const dates = []  
    for(let i = 0; i <= daysInMonth; i ++){
        dates[i] = `${i+1}`
    }

    const analyticData = []
    
    analytic.forEach(dayAnalytic => {
        
    });
    
    const data : Data = {
        labels: dates,
        datasets: [{
            label: `${new Date().toLocaleString('es-ES', { month: 'long' }).toUpperCase()}`,
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
      
    return (
    <>
        <div className="header">
        <div className="links"></div>
        </div>
        <Line type="line" data={data} options={options} />
    </>
    );
};
