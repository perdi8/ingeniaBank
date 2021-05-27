import React, {useState} from 'react';

export const GetCardList  = () => {

    const [cardList, setCardList] = useState([]);
    
    const loadCardList = () => {        
        fetch(`http://localhost:8080/api/cards?id=1`)
          .then((response) => response.json())
          .then((json) => setCardList(json));
    };

    return { loadCardList, cardList}
}
