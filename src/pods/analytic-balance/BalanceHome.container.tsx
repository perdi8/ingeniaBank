import React, {useEffect} from "react";
import { BalanceSelector } from "../../common-components/analytic-balance/BalanceSelector.component";
import { GetAnalyticBalance } from "../../services/Balance.service";
import { AnalyticBalanceHomeComponent } from "./BalanceHome.component";

export const AnalyticBalanceHomeContainer: React.FC = () => {
 
   const [selectTypePeriod, setSelectTypePeriod] = React.useState(1);
   const handleChange = (event : any) => {
     setSelectTypePeriod(event.target.value as number);  
  
   };
   
   return (
      <>
         <BalanceSelector handleChange = {handleChange} selectValue = {selectTypePeriod}/>
         <AnalyticBalanceHomeComponent typePeriod = {selectTypePeriod}/>
      </>
   );
};
