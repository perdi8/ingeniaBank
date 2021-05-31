import React from "react";

import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import { AccountsPage } from "../../pages/AccountsPage.page";
import { BalancePage } from "../../pages/BalancePage.page";
import { CardsPage } from "../../pages/CardsPage.page";
import { HomePage } from "../../pages/HomePage.page";
import { TransactionsPage } from "../../pages/TransactionsPage.page";
import { switchRoutes } from "./routes";

export const DashboardContent: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route path={`${path}`}>
          <Redirect from={switchRoutes.dashboard} to={switchRoutes.home} />
        </Route>
        <Route path={`${path}${switchRoutes.home}`} component={HomePage} />

        <Route
          path={`${path}${switchRoutes.accounts}`}
          component={AccountsPage}
        />
        <Route path={`${path}${switchRoutes.cards}`} component={CardsPage} />
        <Route
          path={`${path}${switchRoutes.transactions}`}
          component={TransactionsPage}
        />
        <Route
          path={`${path}${switchRoutes.balance}`}
          component={BalancePage}
        />
      </Switch>
    </div>
  );
};
