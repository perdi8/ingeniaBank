import React, {useEffect} from "react";
import { GetAnalytic } from "../../services/Analytic.service";
import { AnalyticCommonComponent } from "./AnalyticCommon.component";

export const AnalyticCommonContainer: React.FC = () => {
 
  const { loadAnalytic, analytic } = GetAnalytic()   

  useEffect(() => {
    loadAnalytic()
  }, []);

  return <AnalyticCommonComponent analytic = {analytic}/>;
};
