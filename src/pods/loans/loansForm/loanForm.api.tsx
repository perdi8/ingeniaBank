import React from "react";
import { MyContext } from "../../../common-components/context-provider/dashboard.context";
import { Loan } from "../../../models/loan/Loan.model";

export const LoanApiPost = () => {
  const { id } = React.useContext(MyContext);
  const [responseApi, setResponseApi] = React.useState();
  const [loanList, setLoanList] = React.useState<any>([]);

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

  const loadLoanList = () => {
    fetch(`http://localhost:8080/api/accounts?id=${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else if (response.status === 404) {
          return Promise.reject("error 404");
        } else {
          return Promise.reject("some other error: " + response.status);
        }
      })
      .then((json) => setLoanList(json))
      .catch(function (err) {
        console.log(err);
      });
  };

  return { loadLoan, responseApi, loadLoanList, loanList };
};
