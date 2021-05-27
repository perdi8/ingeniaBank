import React from "react";

import { Switch, Route, useRouteMatch } from "react-router-dom";
import { MyContextProvider } from "../../common-components/context-provider/dashboard.context";
import AccountsPage from "../../pages/AccountsPage.page";
import BalancePage from "../../pages/BalancePage.page";
import CardsPage from "../../pages/CardsPage.page";
import { HomePage } from "../../pages/HomePage.page";
import { LineChart } from "../../pages/TransactionsPage.page";
import { switchRoutes } from "./routes";

export const DashboardContent: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <div>
      <Switch>
        <MyContextProvider>
          <Route path={`${path}${switchRoutes.home}`} component={HomePage} />
          <Route
            path={`${path}${switchRoutes.accounts}`}
            component={AccountsPage}
          />
          <Route path={`${path}${switchRoutes.cards}`} component={CardsPage} />
          <Route
            path={`${path}${switchRoutes.transactions}`}
            component={LineChart}
          />
          <Route
            path={`${path}${switchRoutes.balance}`}
            component={BalancePage}
          />
        </MyContextProvider>
      </Switch>
    </div>
  );
};
