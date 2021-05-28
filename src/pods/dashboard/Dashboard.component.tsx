import React from "react";
import { menuList } from "./MenuList";
//Importr clsx para trabajar con las clases
import clsx from "clsx";

//Makestyles -> Estilos con material UI y el tema (theme) por defecto
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

//Componentes de Material UI
import {
  AppBar,
  Badge,
  Drawer,
  IconButton,
  List,
  Toolbar,
  Typography,
} from "@material-ui/core";

//Iconos de Material UI
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationIcon from "@material-ui/icons/NotificationsNoneOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MenuListItems from "../../common-components/dashboard/MenuListItem.component";
import { Divider } from "@material-ui/core";
import { MyContext } from "../../common-components/context-provider/dashboard.context";
import { Logo } from "../../asserts/dashboard/Logo.svg";
import { MenuItem } from "@material-ui/core";
import { Select } from "@material-ui/core";

//Definicion de estilos
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  //Toolbar del menu lateral
  toolbar: {
    paddingRight: 24,
    height: 80,
    backgroundColor: "#f1f1f1",
  },
  //Iconos del Toolbar
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  //AppBar -> Barra de navegación para desaparecer de la pantalla
  appBar: {
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    boxShadow: "none",
  },
  //AppBar -> Barra de navegación para aparecere en pantalla
  appBarShift: {
    marginLeft: drawerWidth, //Ancho del Drawer
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  //Botones del menú (Drawer)
  menuButton: {
    marginRight: 35,
  },
  //Botones del menú (Drawer) cuando el menú esté plegado
  menuButtonHidden: {
    display: "none",
  },
  //Titulo de las opciones del menú
  title: {
    flexGrow: 1,
    color: "#171948",
    fontSize: "18px",
    fontWeight: 500,
  },
  textBar: {
    color: "#171948",
    fontSize: "18px",
    fontWeight: 500,
  },
  //Menu (Drawer) abierto
  drawerPaper: {
    display: "flex",
    width: drawerWidth,
    whiteSpace: "nowrap",
    transition: theme.transitions.create(["width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: "#FFFFFF",
  },

  drawerPaperClosed: {
    overflowX: "hidden",
    width: theme.spacing(7),
    transition: theme.transitions.create(["width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
}));

interface Props {
  handleDrawerOpen: () => void;
  logout: () => void;
  handleDrawerClose: () => void;
  open: boolean;
}

export const DashboardComponent: React.FC<Props> = (props) => {
  const { username } = React.useContext(MyContext);
  const { handleDrawerOpen, logout, handleDrawerClose, open } = props;
  //Clases para aplicar a los elementos
  const classes = useStyles();

  const handleChange = (event: any) => {
    if ((event.target.value as number) === 1) {
      logout();
    }
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* Barra de navegación superior */}
      <AppBar
        className={clsx(classes.appBar, open && classes.appBarShift)}
        position="absolute"
      >
        <Toolbar className={classes.toolbar}>
          {/* Icono para abrir el drawer */}
          <IconButton
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
          >
            <MenuIcon style={{ color: "#D01E69" }} />
          </IconButton>

          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            className={classes.title}
            noWrap
          >
            Bienvenido/a a tu banca
          </Typography>

          {/* Sección de Notificaciones para el usuario */}
          <IconButton color="inherit">
            <Badge color="secondary" badgeContent={10}>
              <NotificationIcon style={{ color: "#42446E" }} />
            </Badge>
          </IconButton>
          <div className={classes.textBar}>Notificaciones</div>

          <IconButton color="inherit">
            <AccountCircleIcon style={{ color: "#D01E69" }} fontSize="large" />
          </IconButton>

          <div className={classes.textBar}>
            <Select value={0} onChange={handleChange}>
              <MenuItem value={0}>{username}</MenuItem>
              <MenuItem value={1}>
                Cerrar sesión
                <IconButton color="inherit">
                  <ExitToAppIcon />
                </IconButton>
              </MenuItem>
            </Select>
          </div>
          {/* Boton para Logout */}
        </Toolbar>
        <Divider style={{ background: "#E2E2EA" }} />
      </AppBar>

      {/* Drawer (Contenido izquierda(nav))*/}
      <Drawer
        variant="persistent"
        open={open}
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClosed),
        }}
      >
        <div className={classes.toolbarIcon}>
          <div className="logo">
            <Logo />
          </div>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon style={{ color: "#D01E69" }} />
          </IconButton>
        </div>
        <List>
          <MenuListItems list={menuList} />
        </List>
      </Drawer>
    </div>
  );
};
