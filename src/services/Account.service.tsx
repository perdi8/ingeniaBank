import React, { useState } from "react";
import { MyContext } from "../common-components/context-provider/dashboard.context";

export const GetAccountList = () => {
  const { id } = React.useContext(MyContext);
  const [accountList, setAccountList] = useState<any>([]);

  /*
  const loadAccountList = () => {
    fetch(`https://bethabank.herokuapp.com/api/accounts?id=${id}`)
      .then((response) => response.json())
      .then((json) => setAccountList(json))
      .catch((error) => console.error(error));
  };
*/
  const loadAccountList = () => {
    fetch(`https://bethabank.herokuapp.com/api/accounts?id=${id}`)
      .then((response) => {
        if (response.ok) {
          response.json();
          return;
        } else {
          // eslint-disable-next-line no-throw-literal
          throw "No existen cuentas";
        }
      })
      .then((json) => setAccountList(json))
      .catch(function (err) {
        console.log(err);
      });
  };

  return { loadAccountList, accountList };
};
