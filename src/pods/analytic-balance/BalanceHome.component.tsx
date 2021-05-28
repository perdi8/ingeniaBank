import React from "react";

import { AnalyticBalanceCommonContainer } from "../../common-components/analytic-balance/BalanceCommon.container";

interface Props {
  typePeriod: number;
}
export const AnalyticBalanceHomeComponent: React.FC<Props> = (props) => {
  const { typePeriod } = props;

  return (
    <div className="box-margin-b">
      <AnalyticBalanceCommonContainer typePeriod={typePeriod} />
    </div>
  );
};
