import React, { useState } from "react";
import { MyContext } from "../common-components/context-provider/dashboard.context";

export const GetTransactionList = () => {
  const { id } = React.useContext(MyContext);
  const [transactionList, setTransactionList] = useState([]);

  const loadTransactionList = () => {
    fetch(`http://localhost:8080/api/transactions?id=${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else if (response.status === 404) {
          return Promise.reject("error 404");
        } else {
          return Promise.reject("some other error: " + response.status);
        }
      })
      .then((json) => setTransactionList(json))
      .catch((error) => console.error(error));
  };

  return { loadTransactionList, transactionList };
};
