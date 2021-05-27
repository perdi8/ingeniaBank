import React, { useState } from "react";

export const GetAnalyticCategory = () => {
  const [analyticCategory, setAnalyticCategory] = useState([]);

  const loadAnalyticCategory = () => {
    fetch(`http://localhost:8080/api/accounts/categoryAnalytics?id=1`)
      .then((response) => response.json())
      .then((json) => setAnalyticCategory(json));
  };

  return { loadAnalyticCategory, analyticCategory };
};
