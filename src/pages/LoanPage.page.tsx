import React from "react";

import { Divider, Grid } from "@material-ui/core";

import "../styles/Dashboard.style.css";
import { LoanFormContainer } from "../pods/loans/loansForm/loanForm.container";
import { LoanViewContainer } from "../pods/loans/loansView/loanView.container";
import { Loan } from "../models/loan/Loan.model";
import { LoanApi } from "../pods/loans/loan.api";

export const LoanPage: React.FC = () => {
  const [state, setState] = React.useState<any>();

  const handleLoanChild = (loan: Loan) => {
    setState(loan);
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={6}>
          <LoanFormContainer handleLoanChild={handleLoanChild} />
          <Divider />
        </Grid>
        <Grid item xs={12} md={12} lg={5} style={{ marginLeft: "5%" }}>
          <LoanViewContainer state={state} />
        </Grid>
      </Grid>
    </div>
  );
};
