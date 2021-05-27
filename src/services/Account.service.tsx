import React, {useState} from 'react';

export const GetAccountList  = () => {

    const [accountList, setAccountList] = useState([]);
    
    const loadAccountList = () => {        
        fetch(`http://localhost:8080/api/accounts?id=1`)
          .then((response) => response.json())
          .then((json) => setAccountList(json));
    };

    return { loadAccountList, accountList}
}
