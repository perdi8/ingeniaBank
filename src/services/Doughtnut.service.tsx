import React, { useState } from "react";
import { MyContext } from '../common-components/context-provider/dashboard.context';

export const GetAnalyticCategory = () => {
  const { id } = React.useContext(MyContext);
  const [analyticCategory, setAnalyticCategory] = useState([]);

  const loadAnalyticCategory = () => {
    fetch(`http://localhost:8080/api/accounts/categoryAnalytics?id=${id}`)
      .then((response) => response.json())
      .then((json) => setAnalyticCategory(json));
  };

  return { loadAnalyticCategory, analyticCategory };
};
