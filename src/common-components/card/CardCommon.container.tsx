import React, { useEffect } from "react";
import { Card } from "../../models/card/Card.model";
import { GetCardList } from "../../services/Card.service";
import { CardCommonComponent } from "./CardCommon.component";

export const CardCommonContainer: React.FC = () => {
  const { loadCardList, cardList } = GetCardList();
  const [list, setList] = React.useState<any>([]);

  useEffect(() => {
    loadCardList();
    if (cardList !== undefined) {
      setList(cardList);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardList]);

  return <CardCommonComponent cardList={list} />;
};
