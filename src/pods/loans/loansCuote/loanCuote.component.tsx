import React from "react";
import NumberFormat from "react-number-format";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import "../../../styles/Dashboard.style.css";
import { ResponseLoan } from "../../../models/loan/loanResponse";

interface Props {
  state: ResponseLoan | undefined;
}

export const LoanCuoteComponent: React.FC<Props> = (props) => {
  const { state } = props;

  const useStyles = makeStyles((theme) => ({
    paper: {
      display: "flex",
      flexDirection: "column",
      overflow: "auto",
      padding: "20px",
      width: "100%",
      height: "100%",
      marginLeft: "10%",
      boxShadow: "0px 4px 15px rgb(0 0 0 / 12%)",
    },
    fixedHeight: {
      height: "100%",
    },
    textLoan: {
      marginLeft: "5%",
      fontStyle: "normal",
      fontWeight: 550,
      fontSize: "15px",
      lineHeight: "33px",
      color: "#090A25",
    },
  }));

  const classes = useStyles();

  const fixedHeightPaper = clsx(
    classes.paper,
    classes.fixedHeight,
    classes.textLoan
  );

  return (
    <Grid container spacing={1} style={{ marginTop: "8%" }}>
      {state !== undefined ? (
        <Paper className={fixedHeightPaper}>
          <div className="content-loan">
            <div className="container-flex" style={{ width: "60%" }}>
              <div className="text-align-flex-h">
                Previsualización del préstamo:{" "}
              </div>
            </div>
            <div className="container-flex" style={{ width: "60%" }}>
              <div className="text-align-flex-h">Total: </div>
              <div className="text-link">
                <NumberFormat
                  value={state.amount}
                  displayType={"text"}
                  thousandSeparator={true}
                  suffix={"€"}
                  fixedDecimalScale={true}
                  decimalScale={2}
                />
              </div>
            </div>
            <div className="container-flex" style={{ width: "60%" }}>
              <div className="text-align-flex-h">Nº de cuotas: </div>
              <div className="text-link">
                <NumberFormat
                  value={state.fee}
                  displayType={"text"}
                  thousandSeparator={true}
                  suffix={"€"}
                  fixedDecimalScale={true}
                  decimalScale={2}
                />
              </div>
            </div>
            <div className="container-flex" style={{ width: "60%" }}>
              <div className="text-align-flex-h">Cargo mensual: </div>
              <div className="text-link">
                <NumberFormat
                  value={state.amountPerFee}
                  displayType={"text"}
                  thousandSeparator={true}
                  suffix={"€"}
                  fixedDecimalScale={true}
                  decimalScale={2}
                />
              </div>
            </div>
            <div className="container-flex" style={{ width: "60%" }}>
              <div className="text-align-flex-h">Tipo de interés %: </div>
              <div className="text-link">
                <NumberFormat
                  value={state.interestRate * 100}
                  displayType={"text"}
                  thousandSeparator={true}
                  suffix={"%"}
                  fixedDecimalScale={true}
                  decimalScale={0}
                />
              </div>
            </div>
          </div>
        </Paper>
      ) : (
        <></>
      )}
    </Grid>
  );
};
