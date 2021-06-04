import { useContext, useState } from "react";
import {
  Context,
  MyContext,
} from "../common-components/context-provider/dashboard.context";

/*
TODO: tipar state 
*/

export const GetCardList = () => {
  const { id } = useContext<Context>(MyContext);
  const [cardList, setCardList] = useState([]);

  const loadCardList = () => {
    fetch(`http://localhost:8080/api/cards?id=${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else if (response.status === 404) {
          return Promise.reject("error 404");
        } else {
          return Promise.reject("some other error: " + response.status);
        }
      })
      .then((json) => setCardList(json))
      .catch((error) => console.error(error));
  };

  return { loadCardList, cardList };
};
