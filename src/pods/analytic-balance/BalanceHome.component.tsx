
import React, {useState,useEffect} from "react";

import { Link } from 'react-router-dom';
import { switchRoutes } from "../../core/routes/routes";

import { Grid } from "@material-ui/core";
import { AnalyticBalanceCommonContainer } from "../../common-components/analytic-balance/BalanceCommon.container";
  
interface Props{
    typePeriod : number
}
export const AnalyticBalanceHomeComponent: React.FC<Props> = (props) => {

    const {typePeriod} = props

    return (
        <div className = "box-margin-b">            
            <AnalyticBalanceCommonContainer typePeriod = {typePeriod}/>
        </div>
    );
};
