import React, { useState } from "react";
import { MyContext } from "../common-components/context-provider/dashboard.context";

export const GetAnalyticCategory = () => {
  const { id } = React.useContext(MyContext);
  const [analyticCategory, setAnalyticCategory] = useState([]);

  const loadAnalyticCategory = () => {
    fetch(
      `https://bethabank.herokuapp.com/api/accounts/categoryAnalytics?id=${id}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else if (response.status === 404) {
          return Promise.reject("error 404");
        } else {
          return Promise.reject("some other error: " + response.status);
        }
      })
      .then((json) => setAnalyticCategory(json))
      .catch((error) => console.error(error));
  };

  return { loadAnalyticCategory, analyticCategory };
};
