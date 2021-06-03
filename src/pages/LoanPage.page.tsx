import React from "react";

import { Divider, Grid } from "@material-ui/core";

import "../styles/Dashboard.style.css";
import { LoanFormContainer } from "../pods/loans/loansForm/loanForm.container";
import { LoanCuoteContainer } from "../pods/loans/loansCuote/loanCuote.container";
import { Loan } from "../models/loan/Loan.model";
import { LoanViewContainer } from "../pods/loans/loansView/loanView.container";

export const LoanPage: React.FC = () => {
  const [state, setState] = React.useState<any>();

  const handleLoanChild = (loan: Loan) => {
    setState(loan);
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={6}>
          <LoanViewContainer />
          <LoanFormContainer handleLoanChild={handleLoanChild} />
        </Grid>
        <Grid item xs={12} md={12} lg={5} style={{ marginLeft: "5%" }}>
          <LoanCuoteContainer state={state} />
        </Grid>
      </Grid>
    </div>
  );
};
