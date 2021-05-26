import React from "react";

import { Divider, Grid } from "@material-ui/core";
import { CardContainer } from "../pods/card/CardHome.container";
import { TransactionContainer } from "../pods/transaction/TransactionHome.container";

import "../styles/Dashboard.style.css";
import { AnalyticBalanceContainer } from "../pods/analytic-balance/BalanceHome.container";
import { DoughtnutContainer } from "../pods/grafic-doughtnut/doughtnut.container";
import { AnalyticContainer } from "../pods/analytic-expenses/AnalyticHome.container";

export const HomePage: React.FC = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={6}>
          <CardContainer />
          <Divider />
          <TransactionContainer />
        </Grid>
        <Grid item xs={12} md={1} lg={1} style={{padding: '0px'}}/>
        <Grid item xs={12} md={12} lg={5} style={{paddingTop: '5px'}}>
          <AnalyticBalanceContainer />      
          <AnalyticContainer/>
          <DoughtnutContainer />
        </Grid>
      </Grid>
    </div>
  );
};
