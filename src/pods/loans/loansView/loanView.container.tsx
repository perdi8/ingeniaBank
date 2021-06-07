import React, { useEffect } from "react";
import { useGetLoanList } from "./loanView.api";
import { LoanViewComponent } from "./loanView.component";

/*
TODO: Props stateForm
*/
interface Props {
  stateForm: any;
}
export const LoanViewContainer: React.FC<Props> = (props) => {
  const { stateForm } = props;
  const { loadLoanList, loanList } = useGetLoanList();

  useEffect(() => {
    loadLoanList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stateForm]);

  return <LoanViewComponent loanList={loanList} />;
};
