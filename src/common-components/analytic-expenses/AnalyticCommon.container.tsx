import React, { useEffect } from "react";
import { useGetAnalytic } from "../../services/Analytic.service";
import { AnalyticCommonComponent } from "./AnalyticCommon.component";

export const AnalyticCommonContainer: React.FC = () => {
  const { loadAnalytic, analytic } = useGetAnalytic();

  useEffect(() => {
    loadAnalytic();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <AnalyticCommonComponent analytic={analytic} />;
};
