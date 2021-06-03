import React from "react";
import { GetLoanList } from "./loanView.api";
import { LoanViewComponent } from "./loanView.component";

export const LoanViewContainer = () => {
  const { loadLoanList, loanList } = GetLoanList();

  React.useEffect(() => {
    loadLoanList();
  }, []);

  return <LoanViewComponent loanList={loanList} />;
};
