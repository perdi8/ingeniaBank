import { useContext, useState } from "react";
import {
  Context,
  MyContext,
} from "../common-components/context-provider/dashboard.context";
import { Doughtnut } from "../models/analytic-doughtnut/doughtnut.model";

export const useGetAnalyticCategory = () => {
  const { id } = useContext<Context>(MyContext);
  const [analyticCategory, setAnalyticCategory] = useState<Doughtnut>();
  /*
TODO: si da fallo el state quitarle el tipado  
*/

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
