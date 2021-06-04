import React from "react";

import { Divider, Grid } from "@material-ui/core";

import "../styles/Dashboard.style.css";
import { LoanFormContainer } from "../pods/loans/loansForm/loanForm.container";
import { LoanCuoteContainer } from "../pods/loans/loansCuote/loanCuote.container";
import { Loan } from "../models/loan/Loan.model";
import { LoanViewContainer } from "../pods/loans/loansView/loanView.container";
import { LoanApiPost } from "../pods/loans/loansForm/loanForm.api";

export const LoanPage: React.FC = () => {
  const [stateLoan, setStateLoan] = React.useState<any>();
  const { loanList } = LoanApiPost();
  const handleLoanChild = (loan: Loan) => {
    setStateLoan(loan);
  };

  React.useEffect(() => {
    console.log(loanList);
  }, [loanList]);

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12} md={12} lg={12}>
          <LoanViewContainer />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <LoanFormContainer handleLoanChild={handleLoanChild} />
        </Grid>
        <Grid item xs={12} md={12} lg={5} style={{ marginLeft: "5%" }}>
          <LoanCuoteContainer state={stateLoan} />
        </Grid>
      </Grid>
    </div>
  );
};
