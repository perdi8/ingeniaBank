import React from "react";
import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { DashboardContent } from "../../core/routes/DashboardContent.routes";
import { DashboardComponent } from "./Dashboard.component";

import clsx from "clsx";
import { Container, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { switchRoutes } from "../../core/routes/routes";

const drawerWidth = "10%";

const useStyles = makeStyles((theme) => ({
  //Contenidos del DashBoard
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    // overflow: "auto",
    height: "100vh",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
    backgroundColor: "#f1f1f1",
  },

  contentShift: {
    flexGrow: 1,
    padding: theme.spacing(3),
    // overflow: "auto",
    height: "100vh",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    paddingLeft: "5%",
    marginLeft: drawerWidth,
    backgroundColor: "#f1f1f1",
  },

  //Container del Dashboard
  container: {
    paddingBottom: theme.spacing(4),
    paddingTop: theme.spacing(10),
  },
  //Separación entre elementos del AppBar
  appBarSpacer: theme.mixins.toolbar,
}));

export const Dashboard: React.FC = () => {
  let history = useHistory();
  const classes = useStyles();

  //Estado que controle si se muestra el menú o no
  const [open, setOpen] = React.useState(true);

  //Metodo par controlar la Apertura del Drawer
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  //Metodo par controlar el Cierre del Drawer
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const logout = () => {
    history.push(switchRoutes.login);
  };

  return (
    <>
      <DashboardComponent
        handleDrawerOpen={handleDrawerOpen}
        logout={logout}
        handleDrawerClose={handleDrawerClose}
        open={open}
      />
      <main className={clsx(classes.content, { [classes.contentShift]: open })}>
        {/* Se separa el contenido del AppBar para poder verlo */}
        <div className={classes.appBarSpacer}>
          <Container className={classes.container} maxWidth="lg">
            <Switch>
              <Route
                path={switchRoutes.dashboard}
                component={DashboardContent}
              />
            </Switch>
          </Container>
        </div>
      </main>
    </>
  );
};
