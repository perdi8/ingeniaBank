import React, { useEffect } from "react";
import { GetCardList } from "../../services/Card.service";
import { CardCommonComponent } from "./CardCommon.component";

export const CardCommonContainer: React.FC = () => {
  const { loadCardList, cardList } = GetCardList();

  useEffect(() => {
    loadCardList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <CardCommonComponent cardList={cardList} />;
};
