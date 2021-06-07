import React, { useEffect } from "react";
import { useGetAnalyticCategory } from "../../services/Doughtnut.service";
import { VerticalCommonComponent } from "./VerticalCommon.component";

export const VerticalCommonContainer: React.FC = () => {
  const { analyticCategory, loadAnalyticCategory } = useGetAnalyticCategory();

  useEffect(() => {
    loadAnalyticCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <VerticalCommonComponent analyticVertical={analyticCategory} />;
};
