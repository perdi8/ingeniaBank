import React from "react";
import { GetAnalyticDoughtnut } from "./doughtnut.api";
import { DoughtnutComponent } from "./doughtnut.component";

export const DoughtnutContainer: React.FC = () => {
  const { analyticDoughtnut, loadAnalyticDoughtnut } = GetAnalyticDoughtnut();

  React.useEffect(() => {
    loadAnalyticDoughtnut();
  }, []);
  return <DoughtnutComponent analyticDoughtnut={analyticDoughtnut} />;
};
