import React, { useState } from "react";
import { MyContext } from "../common-components/context-provider/dashboard.context";

export const GetAccountList = () => {
  const { id } = React.useContext(MyContext);
  const [accountList, setAccountList] = useState([]);

  const loadAccountList = () => {
    fetch(`https://bethabank.herokuapp.com/api/accounts?id=${id}`)
      .then((response) => response.json())
      .then((json) => setAccountList(json))
      .catch((error) => console.error(error));
  };

  return { loadAccountList, accountList };
};
