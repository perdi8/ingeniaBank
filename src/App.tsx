import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import { Dashboard } from "./pods/dashboard/Dashboard.container";
import { switchRoutes } from "./core/routes/routes";
import { MyContextProvider } from "./common-components/context-provider/dashboard.context";

const App: React.FC = () => {
  let loggedIn = true;

  return (
    <div>
      <Router>
        {/* Switch de rutas */}
        <Switch>
          {/* Ruta a la raíz con redirección a Login si no está logueado */}
          <MyContextProvider>
            <Route exact path={switchRoutes.root}>
              {loggedIn ? (
                <Redirect
                  from={switchRoutes.root}
                  to={switchRoutes.dashboard}
                />
              ) : (
                <Redirect from={switchRoutes.root} to={switchRoutes.login} />
              )}
            </Route>
            {/* Ruta a Login */}
            {/*  <Route exact path='/login' component = {Login}/> */}

            {/* Ruta a dashboard con redirección a login si no está logueado */}
            <Route path={switchRoutes.dashboard}>
              {loggedIn ? (
                <Dashboard />
              ) : (
                <Redirect
                  from={switchRoutes.dashboard}
                  to={switchRoutes.login}
                />
              )}
            </Route>
          </MyContextProvider>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
