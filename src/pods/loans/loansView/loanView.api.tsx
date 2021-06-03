import React, { useState } from "react";
import { MyContext } from "../../../common-components/context-provider/dashboard.context";

export const GetLoanList = () => {
  const { id } = React.useContext(MyContext);
  const [loanList, setLoanList] = useState<any>([]);

  const loadLoanList = () => {
    fetch(`http://localhost:8080/api/loans?id=${id}`)
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
