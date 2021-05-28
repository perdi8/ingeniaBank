import React, { useState } from "react";
import { Grid } from "@material-ui/core";

import CircularIcon from "@material-ui/icons/PieChartOutlined";
import BarIcon from "@material-ui/icons/BarChartOutlined";

import { AnalyticBalanceCommonContainer } from "../common-components/analytic-balance/BalanceCommon.container";
import { AnalyticCommonContainer } from "../common-components/analytic-expenses/AnalyticCommon.container";
import { DoughtnutCommonContainer } from "../common-components/grafic-doughtnut/DoughtnutCommon.container";
import { VerticalCommonContainer } from "../common-components/grafic-vertical/VerticalCommon.container";
import { BalanceSelector } from "../common-components/analytic-balance/BalanceSelector.component";

export const BalancePage = () => {
  const [circular, setCircular] = useState(true);

  const changeGraphic = () => {
    setCircular(!circular);
  };

  const [selectTypePeriod, setSelectTypePeriod] = React.useState(0);
  const handleChange = (event: any) => {
    setSelectTypePeriod(event.target.value as number);
  };

  return (
    <div>
      <div className="title-box" style={{ marginLeft: "1%" }}>
        Balance
      </div>
      <div style={{ marginLeft: "10px" }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={7} lg={5} container direction="row">
            <div style={{ width: "100%" }}>
              <BalanceSelector
                handleChange={handleChange}
                selectValue={selectTypePeriod}
              />
              <AnalyticCommonContainer />
              <AnalyticBalanceCommonContainer typePeriod={selectTypePeriod} />
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={7}
            lg={6}
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <div style={{ width: "100%", marginLeft: "8%", marginTop: "5.5%" }}>
              <div>
                <button
                  className="text-options"
                  onClick={changeGraphic}
                  style={{ textDecoration: circular ? "underline" : "none" }}
                >
                  <span className="graphic-item">
                    <CircularIcon />
                  </span>
                  Gráfico circular
                </button>
                <button
                  className="text-options"
                  style={{ textDecoration: !circular ? "underline" : "none" }}
                  onClick={changeGraphic}
                >
                  <span className="graphic-item">
                    {" "}
                    <BarIcon />
                  </span>
                  Gráfico de barras
                </button>
              </div>
              {circular ? (
                <div
                  style={{
                    width: "50%",
                    textAlign: "left",
                    marginRight: "10%",
                    marginTop: "5%",
                  }}
                >
                  <DoughtnutCommonContainer />
                </div>
              ) : (
                <div
                  style={{
                    width: "100%",
                    textAlign: "left",
                    marginRight: "10%",
                  }}
                >
                  <VerticalCommonContainer />
                </div>
              )}
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
