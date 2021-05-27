import React from "react";

import { Link } from "react-router-dom";
import { switchRoutes } from "../../core/routes/routes";
import { Grid } from "@material-ui/core";

import "../../styles/Dashboard.style.css";
import { TransactionHomeContainer } from "./TransactionHome.container";

export const TransactionHomeComponent: React.FC = () => {

  return (
    <div className="box-margin-t box-margin-b">
      <Grid container spacing={1}>
        <div className="title-box">
          <div className="container-flex">
            <span className="text-align-flex-h">Movimientos</span>
            <Link to={switchRoutes.accounts} className="text-link">Ver más</Link>
          </div>
        </div>
       <TransactionHomeContainer/>
      </Grid>
    </div>
  );
};
