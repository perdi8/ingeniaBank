import React from "react";
import { AccountCommonContainer } from "../common-components/account/AccountCommon.container";

export const AccountsPage: React.FC = () => {
  return (
    <div>
      <div className="title-box box-margin-b">Cuentas</div>
      <AccountCommonContainer />
    </div>
  );
};
