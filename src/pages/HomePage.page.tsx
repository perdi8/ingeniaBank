import React from "react";

import { Divider, Grid } from "@material-ui/core";
import { CardHomeContainer } from "../pods/card/CardHome.container";
import { TransactionHomeContainer } from "../pods/transaction/TransactionHome.container";
import { AnalyticBalanceHomeContainer } from "../pods/analytic-balance/BalanceHome.container";
import { DoughtnutHomeContainer } from "../pods/grafic-doughtnut/DoughtnutHome.container";
import { AnalyticHomeContainer } from "../pods/analytic-expenses/AnalyticHome.container";

import "../styles/Dashboard.style.css";

export const HomePage: React.FC = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={6}>
          <CardHomeContainer />
          <Divider />
          <TransactionHomeContainer />
        </Grid>
        <Grid item xs={12} md={1} lg={1} style={{ padding: "0px" }} />
        <Grid item xs={12} md={12} lg={5} style={{ paddingTop: "5px" }}>
          <AnalyticBalanceHomeContainer />
          <AnalyticHomeContainer />
          <DoughtnutHomeContainer />
        </Grid>
      </Grid>
    </div>
  );
};
