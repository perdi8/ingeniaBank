import React, {useEffect} from "react";
import { GetCardList } from "./CardHome.api";
import { CardComponent } from "./CardHome.component";

export const CardContainer: React.FC = () => {
 
  const { loadCardList, cardList } = GetCardList()   

  useEffect(() => {
    loadCardList()   
  }, []);

  return <CardComponent cardList = {cardList}/>;
};
