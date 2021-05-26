import React, { useState } from "react";

export const GetAnalyticDoughtnut = () => {
  const [analyticDoughtnut, setAnalyticDoughtnut] = useState([]);

  const loadAnalyticDoughtnut = () => {
    fetch(`http://localhost:8080/api/accounts/categoryAnalytics?id=1`)
      .then((response) => response.json())
      .then((json) => setAnalyticDoughtnut(json));
  };

  return { loadAnalyticDoughtnut, analyticDoughtnut };
};
