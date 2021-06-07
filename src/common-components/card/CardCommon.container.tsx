import React, { useEffect } from "react";
import { useGetCardList } from "../../services/Card.service";
import { CardCommonComponent } from "./CardCommon.component";

export const CardCommonContainer: React.FC = () => {
  const { loadCardList, cardList } = useGetCardList();

  useEffect(() => {
    loadCardList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <CardCommonComponent cardList={cardList} />;
};
