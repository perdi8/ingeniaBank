import React, { useEffect } from "react";
import { useGetAnalyticCategory } from "../../services/Doughtnut.service";
import { DoughtnutCommonComponent } from "./DoughtnutCommon.component";

export const DoughtnutCommonContainer: React.FC = () => {
  const { analyticCategory, loadAnalyticCategory } = useGetAnalyticCategory();

  useEffect(() => {
    loadAnalyticCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <DoughtnutCommonComponent analyticDoughtnut={analyticCategory} />;
};
