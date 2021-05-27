import React, {useEffect} from "react";
import { GetCardList } from "../../services/Card.service";
import { CardCommonComponent } from "./CardCommon.component";

export const CardCommonContainer: React.FC = () => {
 
  const { loadCardList, cardList } = GetCardList()   

  useEffect(() => {
    loadCardList()   
  }, []);

  return <CardCommonComponent cardList = {cardList}/>;
};
