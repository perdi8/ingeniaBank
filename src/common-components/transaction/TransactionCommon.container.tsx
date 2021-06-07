import React, { useEffect } from "react";
import { useGetTransactionList } from "../../services/Transaction.service";
import { TransactionCommonComponent } from "./TransactionCommon.component";

export const TransactionCommonContainer: React.FC = () => {
  const { loadTransactionList, transactionList } = useGetTransactionList();

  useEffect(() => {
    loadTransactionList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <TransactionCommonComponent transactionList={transactionList} />;
};
