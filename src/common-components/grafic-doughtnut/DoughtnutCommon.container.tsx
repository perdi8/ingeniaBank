import React from "react";
import { GetAnalyticCategory } from "../../services/Doughtnut.service";
import { DoughtnutCommonComponent } from "./DoughtnutCommon.component";

export const DoughtnutCommonContainer: React.FC = () => {
  const { analyticCategory, loadAnalyticCategory } = GetAnalyticCategory();

  React.useEffect(() => {
    loadAnalyticCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <DoughtnutCommonComponent analyticDoughtnut={analyticCategory} />;
};
