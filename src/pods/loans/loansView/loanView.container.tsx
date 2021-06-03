import React from "react";
import { Loan } from "../../../models/loan/Loan.model";
import { LoanViewComponent } from "./loanView.component";

interface Props {
  state: Loan;
}
export const LoanViewContainer: React.FC<Props> = (props) => {
  const { state } = props;

  return (
    <div>
      <LoanViewComponent state={state} />
    </div>
  );
};
