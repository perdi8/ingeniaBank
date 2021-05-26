import React, {useEffect} from "react";
import { GetAnalyticBalance } from "./BalanceHome.api";
import { AnalyticBalanceComponent } from "./BalanceHome.component";

export const AnalyticBalanceContainer: React.FC = () => {
 
  const { loadAnalyticBalance, analytic } = GetAnalyticBalance()   

  useEffect(() => {
    loadAnalyticBalance()
  }, []);

  return <AnalyticBalanceComponent analytic = {analytic}/>;
};
