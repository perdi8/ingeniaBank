import React, { useState } from "react";
import { MyContext } from "../common-components/context-provider/dashboard.context";

export const GetCardList = () => {
  const { id } = React.useContext(MyContext);
  const [cardList, setCardList] = useState<any>([]);

  const loadCardList = () => {
    fetch(`https://bethabank.herokuapp.com/api/cards?id=${id}`)
      .then((response) => {
        if (response.ok) {
          response.blob().then((json) => setCardList(json));
          return response.json();
        } else if (response.status === 404) {
          return Promise.reject("error 404");
        } else {
          return Promise.reject("some other error: " + response.status);
        }
      })
      .catch((error) => console.error(error));
  };

  return { loadCardList, cardList };
};
