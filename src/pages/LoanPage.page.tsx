import React, { useState } from "react";

import { Grid } from "@material-ui/core";

import "../styles/Dashboard.style.css";
import { LoanFormContainer } from "../pods/loans/loansForm/loanForm.container";
import { LoanCuoteContainer } from "../pods/loans/loansCuote/loanCuote.container";
import { LoanViewContainer } from "../pods/loans/loansView/loanView.container";
import { ResponseLoan } from "../models/loan/loanResponse";

export const LoanPage: React.FC = () => {
  /*
  TODO: tipar usestate 
  */
  const [stateLoan, setStateLoan] = useState<ResponseLoan | undefined>();

  const handleLoanChild = (responseApi: ResponseLoan) => {
    if (responseApi) {
      setStateLoan(responseApi);
    }
  };

  return (
    <div style={{ marginLeft: "1%" }}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={12} lg={12}>
          <LoanViewContainer stateForm={stateLoan} />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5} lg={6}>
          <LoanFormContainer handleLoanChild={handleLoanChild} />
        </Grid>
        <Grid item xs={12} md={7} lg={6}>
          <LoanCuoteContainer state={stateLoan} />
        </Grid>
      </Grid>
    </div>
  );
};
