import React, {useEffect} from "react";
import { GetAnalyticBalance } from "../../services/Balance.service";
import { AnalyticBalanceCommonComponent } from "./BalanceCommon.component";

export const AnalyticBalanceCommonContainer: React.FC = () => {
 
  const { loadAnalyticBalance, analytic } = GetAnalyticBalance()   

  useEffect(() => {
    loadAnalyticBalance()
  }, []);

  return <AnalyticBalanceCommonComponent analytic = {analytic}/>;
};
