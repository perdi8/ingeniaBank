import React from "react";
import { Loan } from "../../models/loan/Loan.model";

export const LoanApi = () => {
  const [responseApi, setResponseApi] = React.useState();

  const loadLoan = (loan: Loan) => {
    fetch(`http://localhost:8080/api/loans`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: loan.amount,
        fee: loan.fee,
        idAccountInCome: loan.idAccountInCome,
        idAccountCollection: loan.idAccountCollection,
        typeAction: loan.typeAction,
      }),
    })
      .then(async (response) => {
        if (response.ok) {
          setResponseApi(await response.json());
          return;
        } else {
          // eslint-disable-next-line no-throw-literal
          throw "Error en la llamada Ajax Register";
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return { loadLoan, responseApi };
};
