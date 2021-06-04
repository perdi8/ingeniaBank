import React from "react";
import { GetLoanList } from "./loanView.api";
import { LoanViewComponent } from "./loanView.component";

export const LoanViewContainer: React.FC = () => {
  const { loadLoanList, loanList } = GetLoanList();

  React.useEffect(() => {
    loadLoanList();
  }, []);

  return <LoanViewComponent loanList={loanList} />;
};
