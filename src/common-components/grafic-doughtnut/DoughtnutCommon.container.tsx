import React from "react";
import { GetAnalyticDoughtnut } from "../../services/Doughtnut.service";
import { DoughtnutCommonComponent } from "./DoughtnutCommon.component";

export const DoughtnutCommonContainer: React.FC = () => {
  const { analyticDoughtnut, loadAnalyticDoughtnut } = GetAnalyticDoughtnut();

  React.useEffect(() => {
    loadAnalyticDoughtnut();
  }, []);
  return <DoughtnutCommonComponent analyticDoughtnut={analyticDoughtnut} />;
};
