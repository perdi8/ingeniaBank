import React, {useState} from 'react';

export const GetTransactionList  = () => {

    const [transactionList, setTransactionList] = useState([]);
    
    const loadTransactionList = () => {        
        fetch(`http://localhost:8080/api/transactions?id=1`)
          .then((response) => response.json())
          .then((json) => setTransactionList(json));
          console.log("HOL")
    };

    return { loadTransactionList, transactionList}
}
