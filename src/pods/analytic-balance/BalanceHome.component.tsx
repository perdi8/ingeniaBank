
import React from "react";

import { Link } from 'react-router-dom';
import { switchRoutes } from "../../core/routes/routes";

import { Grid } from "@material-ui/core";
import { AnalyticBalanceCommonContainer } from "../../common-components/analytic-balance/BalanceCommon.container";
  
export const AnalyticBalanceHomeComponent: React.FC = () => {

    return (
        <div className = "box-margin-b">            
            <Grid container spacing={1}>
                <div className = "title-box">    
                    <div className = "container-flex">
                        <span  className = "text-align-flex-h">Balance total</span>
                        <Link to = {switchRoutes.balance} className = "text-link"> Ver análisis </Link>   
                    </div> 
                </div> 
                <AnalyticBalanceCommonContainer/>
            </Grid>
        </div>
    );
};
