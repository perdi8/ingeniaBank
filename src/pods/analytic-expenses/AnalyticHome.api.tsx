import React, {useState} from 'react';

export const GetAnalytic = () => {

    const [analytic, setAnalytic] = useState([]);
    
    const loadAnalytic = () => {        
        fetch(`http://localhost:8080/api/accounts/analytics?id=1&typePeriod=1`)
          .then((response) => response.json())
          .then((json) => setAnalytic(json));   
    };    

    return { loadAnalytic, analytic}
}
