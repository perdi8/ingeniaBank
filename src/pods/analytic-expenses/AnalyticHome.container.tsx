import React, {useEffect} from "react";
import { GetAnalytic } from "./AnalyticHome.api";
import { AnalyticComponent } from "./AnalyticHome.component";

export const AnalyticContainer: React.FC = () => {
 
  const { loadAnalytic, analytic } = GetAnalytic()   

  useEffect(() => {
    loadAnalytic()
  }, []);

  return <AnalyticComponent analytic = {analytic}/>;
};
