import React, { useEffect } from "react";
import { GetAnalyticCategory } from "../../services/Doughtnut.service";
import { VerticalCommonComponent } from "./VerticalCommon.component";

export const VerticalCommonContainer: React.FC = () => {
  const { analyticCategory, loadAnalyticCategory } = GetAnalyticCategory();

  useEffect(() => {
    loadAnalyticCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <VerticalCommonComponent analyticVertical={analyticCategory} />;
};
