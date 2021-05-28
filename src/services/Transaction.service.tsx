import React, { useState } from "react";
import { MyContext } from "../common-components/context-provider/dashboard.context";

export const GetTransactionList = () => {
  const { id } = React.useContext(MyContext);
  const [transactionList, setTransactionList] = useState([]);

  const loadTransactionList = () => {
    fetch(`https://bethabank.herokuapp.com/api/transactions?id=${id}`)
      .then((response) => response.json())
      .then((json) => setTransactionList(json));
  };

  return { loadTransactionList, transactionList };
};
