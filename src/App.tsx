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
import { MyContext } from "./common-components/context-provider/dashboard.context";
import { LoginPage } from "./pages/LoginPage.page";
import { RegisterPage } from "./pages/RegisterPage.page";

const App: React.FC = () => {
  const { isLogin, isRegister } = React.useContext(MyContext);
  let loggedIn = isLogin;
  let register = isRegister;

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    loggedIn = isLogin;
  }, [isLogin]);

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    register = isRegister;
  }, [isRegister]);

  return (
    <div>
      <Router>
        {/* Switch de rutas */}
        <Switch>
          {/* Ruta a la raíz con redirección a Login si no está logueado */}
          <Route exact path={switchRoutes.root}>
            {loggedIn ? (
              <Redirect from={switchRoutes.root} to={switchRoutes.dashboard} />
            ) : register ? (
              <Redirect from={switchRoutes.root} to={switchRoutes.register} />
            ) : (
              <Redirect from={switchRoutes.root} to={switchRoutes.login} />
            )}
          </Route>

          {/* Ruta a Login */}
          {/*  <Route exact path='/login' component = {Login}/> */}
          <Route exact path={switchRoutes.login} component={LoginPage} />
          <Route path={switchRoutes.register} component={RegisterPage} />
          {/* Ruta a dashboard con redirección a login si no está logueado */}
          <Route path={switchRoutes.dashboard}>
            {loggedIn ? (
              <Dashboard />
            ) : (
              <Redirect from={switchRoutes.dashboard} to={switchRoutes.login} />
            )}
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
