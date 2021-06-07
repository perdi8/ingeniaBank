import { useContext, useState } from "react";
import {
  Context,
  MyContext,
} from "../common-components/context-provider/dashboard.context";

/*
TODO: tipar state 
*/

export const useGetTransactionList = () => {
  const { id } = useContext<Context>(MyContext);
  const [transactionList, setTransactionList] = useState([]);

  const loadTransactionList = () => {
    fetch(`https://bethabank.herokuapp.com/api/transactions?id=${id}`)
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
