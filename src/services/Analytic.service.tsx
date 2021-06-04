import { useContext, useState } from "react";
import {
  Context,
  MyContext,
} from "../common-components/context-provider/dashboard.context";

/*
TODO: tipar state 
*/

export const GetAnalytic = () => {
  const { id } = useContext<Context>(MyContext);
  const [analytic, setAnalytic] = useState([]);

  const loadAnalytic = () => {
    fetch(`http://localhost:8080/api/accounts/analytics?id=${id}&typePeriod=1`)
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

  return { loadAnalytic, analytic };
};
