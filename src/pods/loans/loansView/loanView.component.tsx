import React from "react";

import NumberFormat from "react-number-format";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

import "../../../styles/Dashboard.style.css";

import { LoanList } from "../../../models/loan/LoanList.model";

interface Props {
  loanList: LoanList[];
}

export const LoanViewComponent: React.FC<Props> = (props) => {
  const { loanList } = props;

  const useStyles = makeStyles((theme) => ({
    paper: {
      display: "flex",
      flexDirection: "column",
      overflow: "auto",
      padding: "20px",
      width: "100%",
      height: "100%",
      boxShadow: "0px 4px 15px rgb(0 0 0 / 12%)",
    },
    fixedHeight: {
      height: "100%",
    },
  }));

  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className="box-margin-b">
      {loanList.length > 0 ? (
        <Grid container spacing={1}>
          {loanList.map((loan, index) => (
            <Grid
              item
              xs={12}
              md={4}
              lg={4}
              container
              direction="row"
              justify="center"
              alignItems="center"
              key={index}
            >
              <Paper className={fixedHeightPaper}>
                <div className="text-card">Préstamo 1</div>
                <NumberFormat
                  className="text-card text-amount-card"
                  value={loan.amount}
                  displayType={"text"}
                  thousandSeparator={true}
                  suffix={"€"}
                  fixedDecimalScale={true}
                  decimalScale={2}
                />
                <NumberFormat
                  className="text-card text-amount-card"
                  value={loan.amountPerFee}
                  displayType={"text"}
                  thousandSeparator={true}
                  suffix={"€"}
                  fixedDecimalScale={true}
                  decimalScale={2}
                />
                <NumberFormat
                  className="text-card text-amount-card"
                  value={loan.fee}
                  displayType={"text"}
                  thousandSeparator={true}
                  suffix={"€"}
                  fixedDecimalScale={true}
                  decimalScale={2}
                />
                <NumberFormat
                  className="text-card text-amount-card"
                  value={loan.interestRate}
                  displayType={"text"}
                  thousandSeparator={true}
                  suffix={"€"}
                  fixedDecimalScale={true}
                  decimalScale={2}
                />
                <div className="container-flex footer-card">
                  <div className="text-number-card">{`**** ${loan.accountIncome.substr(
                    loan.accountIncome.length - 6
                  )}`}</div>
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      ) : (
        <div className="text-notfound">No existen prestamos </div>
      )}
    </div>
  );
};
