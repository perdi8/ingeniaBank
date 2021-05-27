
import React, {useState,useEffect} from "react";

import { Link } from 'react-router-dom';
import { switchRoutes } from "../../core/routes/routes";

import { Line } from "react-chartjs-2";
import { Grid } from "@material-ui/core";
import { Balance } from "../../models/analytic-balance/Balance.model";
import { Data, Options } from "../../models/analytic-balance/DataBalance.model";


interface Props {
    analytic: Balance[];
}
  
export const AnalyticBalanceComponent: React.FC<Props> = (props) => {

    const { analytic } = props;
    const [stateAnalytic, setStateAnalytic] = useState<Balance[]>(analytic); 

    useEffect(() => {     
        setStateAnalytic(analytic)         
    }, [analytic, stateAnalytic]);


    let month = new Date().getUTCMonth() + 1;
    let daysInMonth = new Date(new Date().getUTCFullYear(), month, 0).getDate();    
 
    const dates = []  
    for(let i = 0; i < daysInMonth; i ++){
        dates[i] = `${i+1}`
    }   
    
    const analyticData : number[] = []    
    
    if(stateAnalytic.length > 0) {
        let lastBalance = stateAnalytic[0].balance
        for (let i = 0; i < new Date().getDate(); i++) {
            let date = new Date(new Date().getUTCFullYear(), month-1, i+1).toISOString().slice(0, 10)   
            let filter = stateAnalytic.filter((analytic) => analytic.date === date)
            
            if(filter.length>0){
                    analyticData.push(filter[0].balance)
                    lastBalance = filter[0].balance
            }else{
                    analyticData.push(lastBalance)
            }    
        }
    }

    const data : Data = {
        labels: dates,
        datasets: [{
            label: `${new Date().toLocaleString('es-ES', { month: 'long' }).toUpperCase()}`,
            data: analyticData,
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
        <div className = "box-margin-b">            
            <Grid container spacing={1}>
                <div className = "title-box">    
                    <div className = "container-flex">
                        <span  className = "text-align-flex-h">Balance total</span>
                        <Link to = {switchRoutes.balance} className = "text-link"> Ver análisis </Link>   
                    </div> 
                </div> 
                <Line type="line" data={data} options={options} />
            </Grid>
        </div>
    );
};
