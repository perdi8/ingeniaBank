import React, {useEffect} from "react";
import { GetAccountList } from "../../services/Account.service";
import { AccountCommonComponent } from "./AccountCommon.component";

export const AccountCommonContainer: React.FC = () => {
 
  const { loadAccountList, accountList } = GetAccountList()   

  useEffect(() => {
    loadAccountList()   
  }, []);

  return <AccountCommonComponent accountList = {accountList}/>;
};
