import { useContext, useState } from "react";
import {
  Context,
  MyContext,
} from "../common-components/context-provider/dashboard.context";

/*
TODO: tipar state 
*/

export const GetAccountList = () => {
  const { id } = useContext<Context>(MyContext);
  const [accountList, setAccountList] = useState<any>([]);

  const loadAccountList = () => {
    fetch(`https://bethabank.herokuapp.com/api/accounts?id=${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else if (response.status === 404) {
          return Promise.reject("error 404");
        } else {
          return Promise.reject("some other error: " + response.status);
        }
      })
      .then((json) => setAccountList(json))
      .catch(function (err) {
        console.log(err);
      });
  };

  return { loadAccountList, accountList };
};
