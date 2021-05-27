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

const App: React.FC = () => {
  const { isLogin } = React.useContext(MyContext);
  let loggedIn = isLogin;

  React.useEffect(() => {
    loggedIn = isLogin;
    console.log(isLogin);
  });

  return (
    <div>
      <Router>
        {/* Switch de rutas */}
        <Switch>
          {/* Ruta a la raíz con redirección a Login si no está logueado */}
          <Route exact path={switchRoutes.root}>
            {loggedIn ? (
              <Redirect from={switchRoutes.root} to={switchRoutes.dashboard} />
            ) : (
              <Redirect from={switchRoutes.root} to={switchRoutes.login} />
            )}
          </Route>
          {/* Ruta a Login */}
          {/*  <Route exact path='/login' component = {Login}/> */}
          <Route exact path={switchRoutes.login} component={LoginPage} />
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
