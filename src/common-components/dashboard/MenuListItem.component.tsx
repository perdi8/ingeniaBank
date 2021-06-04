import React from "react";

import { useHistory } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";

//Componentes de Material UI
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

//Iconos de material UI
import HomeIcon from "@material-ui/icons/Home";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import TransferWithinAStationIcon from "@material-ui/icons/TransferWithinAStation";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

import { MenuList } from "../../models/dashboard/MenuList.model";
import "../../styles/Dashboard.style.css";

const getIcon = (icon: string) => {
  switch (icon) {
    case "HOME":
      return <HomeIcon className="menu-item" />;
    case "ACCOUNTS":
      return <PeopleAltIcon className="menu-item" />;
    case "CARDS":
      return <CreditCardIcon className="menu-item" />;
    case "TRANSACTIONS":
      return <TransferWithinAStationIcon className="menu-item" />;
    case "BALANCE":
      return <AccountBalanceIcon className="menu-item" />;
    case "LOANS":
      return <MonetizationOnIcon className="menu-item" />;
    default:
      return <HomeIcon className="menu-item" />;
  }
};

interface Props {
  list: MenuList[];
}

export const MenuListItems: React.FC<Props> = (props) => {
  const { list } = props;

  const history = useHistory();

  const { url } = useRouteMatch();

  const navigate = (path: string) => {
    history.push(`${url}${path}`);
  };

  return (
    <List className="menu-item">
      {list.map(({ text, path, icon }, index) => (
        <div key={index}>
          <ListItem button onClick={() => navigate(path)}>
            <ListItemIcon>{getIcon(icon)}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        </div>
      ))}
    </List>
  );
};
