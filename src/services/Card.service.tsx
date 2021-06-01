import React, { useState } from "react";
import { MyContext } from "../common-components/context-provider/dashboard.context";
import { Card, CardList } from "../models/card/Card.model";

export const GetCardList = () => {
  const { id } = React.useContext(MyContext);
  const [cardList, setCardList] = useState();
  const [responseCardList, setResponseCardList] = useState<any>([]);

  React.useEffect(() => {
    if (responseCardList !== undefined) {
      setCardList(responseCardList.cardList);
      console.log(responseCardList);
    }
  }, [responseCardList]);

  const loadCardList = () => {
    fetch(`https://bethabank.herokuapp.com/api/cards?id=${id}`)
      .then((response) => {
        if (!response.ok) throw Error("Error 404");
        return response;
      })
      .then((json) => {
        setResponseCardList(json);
        console.log(json);
      })
      .catch((error) => console.error(error));
  };
  return { loadCardList, cardList };
};
