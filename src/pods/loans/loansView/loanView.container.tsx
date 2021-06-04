import React, { useEffect } from "react";
import { GetLoanList } from "./loanView.api";
import { LoanViewComponent } from "./loanView.component";

/*
TODO: Props stateForm
*/
interface Props {
  stateForm: any;
}
export const LoanViewContainer: React.FC<Props> = (props) => {
  const { stateForm } = props;
  const { loadLoanList, loanList } = GetLoanList();

  useEffect(() => {
    loadLoanList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stateForm]);

  return <LoanViewComponent loanList={loanList} />;
};
