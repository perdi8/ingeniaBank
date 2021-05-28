import { Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { BalanceSelector } from "../../common-components/analytic-balance/BalanceSelector.component";
import { switchRoutes } from "../../core/routes/routes";
import { AnalyticBalanceHomeComponent } from "./BalanceHome.component";

export const AnalyticBalanceHomeContainer: React.FC = () => {
  const [selectTypePeriod, setSelectTypePeriod] = React.useState(1);
  const handleChange = (event: any) => {
    setSelectTypePeriod(event.target.value as number);
  };

  return (
    <Grid container spacing={1}>
      <div className="title-box">
        <div className="container-flex">
          <span className="text-align-flex-h">Balance total</span>
          <Link to={switchRoutes.balance} className="text-link">
            {" "}
            Ver análisis{" "}
          </Link>
        </div>
      </div>
      <BalanceSelector
        handleChange={handleChange}
        selectValue={selectTypePeriod}
      />
      <div style={{ width: "100%" }}>
        <AnalyticBalanceHomeComponent typePeriod={selectTypePeriod} />
      </div>
    </Grid>
  );
};
