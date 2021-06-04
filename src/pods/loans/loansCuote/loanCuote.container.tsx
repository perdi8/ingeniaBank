import React from "react";
import { ResponseLoan } from "../../../models/loan/loanResponse";
import { LoanCuoteComponent } from "./loanCuote.component";

interface Props {
  state: ResponseLoan | undefined;
}
export const LoanCuoteContainer: React.FC<Props> = (props) => {
  const { state } = props;

  return (
    <div>
      <LoanCuoteComponent state={state} />
    </div>
  );
};
