import React, { useState } from "react";
import { MyContext } from "../common-components/context-provider/dashboard.context";

export const GetAnalyticBalance = () => {
  const { id } = React.useContext(MyContext);
  const [analytic, setAnalytic] = useState([]);

  const loadAnalyticBalance = (type: number) => {
    let url = `https://bethabank.herokuapp.com/api/accounts/balanceAnalytics?iduser=${id}&type=${type}`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => setAnalytic(json));
  };

  return { loadAnalyticBalance, analytic };
};
