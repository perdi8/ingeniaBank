import React, { useState } from "react";
import { MyContext } from "../common-components/context-provider/dashboard.context";

export const GetAccountList = () => {
  const { id } = React.useContext(MyContext);
  const [accountList, setAccountList] = useState<any>([]);

  const loadAccountList = () => {
    fetch(`https://bethabank.herokuapp.com/api/accounts?id=${id}`)
      .then((response) => {
        if (!response.ok) throw Error("Error 404");
        return response;
      })
      .then((json) => setAccountList(json))
      .catch(function (err) {
        console.log(err);
      });
  };

  return { loadAccountList, accountList };
};
