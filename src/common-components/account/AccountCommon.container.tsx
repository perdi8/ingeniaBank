import React, { useEffect } from "react";
import { useGetAccountList } from "../../services/Account.service";
import { AccountCommonComponent } from "./AccountCommon.component";

export const AccountCommonContainer: React.FC = () => {
  const { loadAccountList, accountList } = useGetAccountList();

  useEffect(() => {
    loadAccountList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <AccountCommonComponent accountList={accountList} />;
};
