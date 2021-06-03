import React, { useState } from "react";
import { MyContext } from "../common-components/context-provider/dashboard.context";

export const GetAnalyticBalance = () => {
  const { id } = React.useContext(MyContext);
  const [analytic, setAnalytic] = useState([]);

  const loadAnalyticBalance = (type: number) => {
    let url = `http://localhost:8080/api/accounts/balanceAnalytics?iduser=${id}&type=${type}`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else if (response.status === 404) {
          return Promise.reject("error 404");
        } else {
          return Promise.reject("some other error: " + response.status);
        }
      })
      .then((json) => setAnalytic(json))
      .catch((error) => console.error(error));
  };

  return { loadAnalyticBalance, analytic };
};
