import React from "react";
import { Loan } from "../../../models/loan/Loan.model";
import { LoanCuoteComponent } from "./loanCuote.component";

interface Props {
  state: Loan;
}
export const LoanCuoteContainer: React.FC<Props> = (props) => {
  const { state } = props;

  return (
    <div>
      <LoanCuoteComponent state={state} />
    </div>
  );
};
