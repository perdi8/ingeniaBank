import React, { useState } from "react";
import { MyContext } from "../../../common-components/context-provider/dashboard.context";
import { LoanList } from "../../../models/loan/LoanList.model";

export const GetLoanList = () => {
  const { id } = React.useContext(MyContext);
  const [loanList, setLoanList] = useState<LoanList[]>([]);

  const loadLoanList = () => {
    fetch(`https://bethabank.herokuapp.com/api/loans?id=${id}`)
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

  return { loadLoanList, loanList };
};
