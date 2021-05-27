import React, {useEffect} from "react";
import { GetAnalytic } from "../../services/Analytic.service";
import { AnalyticHomeComponent } from "./AnalyticHome.component";

export const AnalyticHomeContainer: React.FC = () => {
   const { loadAnalytic, analytic } = GetAnalytic()   

   useEffect(() => {
     loadAnalytic()
   }, []);
 
   return <AnalyticHomeComponent analytic = {analytic}/>;
};
