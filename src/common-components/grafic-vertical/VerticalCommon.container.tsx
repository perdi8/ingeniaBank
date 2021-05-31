import React from "react";
import { GetAnalyticCategory } from "../../services/Doughtnut.service";
import { VerticalCommonComponent } from "./VerticalCommon.component";

export const VerticalCommonContainer: React.FC = () => {
  const { analyticCategory, loadAnalyticCategory } = GetAnalyticCategory();

  React.useEffect(() => {
    loadAnalyticCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <VerticalCommonComponent analyticVertical={analyticCategory} />;
};
