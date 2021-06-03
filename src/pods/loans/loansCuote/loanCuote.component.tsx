import React from "react";
import { Loan } from "../../../models/loan/Loan.model";

interface Props {
  state: any;
}

export const LoanCuoteComponent: React.FC<Props> = (props) => {
  const { state } = props;
  return (
    <>
      {state !== undefined ? (
        <>
          <h2>Amount : {state.amount}</h2>
          <h2>Fee : {state.fee}</h2>
          <h2>AmountPerFee : {state.amountPerFee}</h2>
          <h2>InterestRate : {state.interestRate}</h2>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
