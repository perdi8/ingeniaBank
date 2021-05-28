import React, {useState} from 'react';
import { MyContext } from '../common-components/context-provider/dashboard.context';

export const GetAnalyticBalance  = () => {
    const { id } = React.useContext(MyContext);
    const [analytic, setAnalytic] = useState([]);
    
    const loadAnalyticBalance = (type: number) => {   
        let url = `http://localhost:8080/api/accounts/balanceAnalytics?iduser=${id}&type=1`

         /*   if(type === 0){
            url = url + `start=${new Date().getUTCFullYear()}-01-01&end=${new Date().getUTCFullYear()}-12-31`
        } */

        fetch(url)
          .then((response) => response.json())
          .then((json) => setAnalytic(json));   
    };    

    return { loadAnalyticBalance, analytic}
}
