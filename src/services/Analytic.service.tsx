import React, { useState } from "react";
import { MyContext } from "../common-components/context-provider/dashboard.context";

export const GetAnalytic = () => {
  const { id } = React.useContext(MyContext);
  const [analytic, setAnalytic] = useState([]);

  const loadAnalytic = () => {
    fetch(
      `https://bethabank.herokuapp.com/api/accounts/analytics?id=${id}&typePeriod=1`
    )
      .then((response) => response.json())
      .then((json) => setAnalytic(json))
      .catch((error) => console.error(error));
  };

  return { loadAnalytic, analytic };
};
