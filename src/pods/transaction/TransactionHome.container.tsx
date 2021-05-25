import React, {useEffect} from "react";
import { GetTransactionList } from "./TransactionHome.api";
import { TransactionComponent } from "./TransactionHome.component";

export const TransactionContainer: React.FC = () => {
 
  const { loadTransactionList, transactionList } = GetTransactionList()   

  useEffect(() => {
    loadTransactionList()   
  }, []);

  return <TransactionComponent transactionList = {transactionList}/>;
};
