import React, {useState} from 'react';

export const GetAnalyticBalance  = () => {

    const [analytic, setAnalytic] = useState([]);
    
    const loadAnalyticBalance = () => {        
        fetch(`http://localhost:8080/api/accounts/balanceAnalytics?iduser=1&type=1`)
          .then((response) => response.json())
          .then((json) => setAnalytic(json));   
    };    

    return { loadAnalyticBalance, analytic}
}
