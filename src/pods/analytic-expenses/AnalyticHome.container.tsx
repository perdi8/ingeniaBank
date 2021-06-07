import React, { useEffect } from "react";
import { useGetAnalytic } from "../../services/Analytic.service";
import { AnalyticHomeComponent } from "./AnalyticHome.component";

export const AnalyticHomeContainer: React.FC = () => {
  const { loadAnalytic, analytic } = useGetAnalytic();

  useEffect(() => {
    loadAnalytic();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <AnalyticHomeComponent analytic={analytic} />;
};
