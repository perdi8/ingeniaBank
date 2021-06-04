import React, { useEffect } from "react";
import { GetAnalytic } from "../../services/Analytic.service";
import { AnalyticHomeComponent } from "./AnalyticHome.component";

export const AnalyticHomeContainer: React.FC = () => {
  const { loadAnalytic, analytic } = GetAnalytic();

  useEffect(() => {
    loadAnalytic();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <AnalyticHomeComponent analytic={analytic} />;
};
