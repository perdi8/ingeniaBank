import React from 'react';

import { useHistory } from 'react-router-dom'
import { useRouteMatch } from 'react-router-dom'

//Componentes de Material UI
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

//Iconos de material UI
import HomeIcon from '@material-ui/icons/Home'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

import {MenuList} from '../../models/dashboard/MenuList.model'
import '../../styles/Dashboard.style.css'

const getIcon = (icon: string) => {
    switch(icon) {
        case 'HOME':
            return (<HomeIcon style={{ color: '#42446E'}}/>)
        case 'ACCOUNTS':
            return (<PeopleAltIcon style={{ color: '#42446E'}}/>)
        case 'CARDS':
            return (<CreditCardIcon style={{ color: '#42446E'}}/>)
        case 'TRANSACTIONS':
            return (<TransferWithinAStationIcon style={{ color: '#42446E'}}/>)
        case 'BALANCE':
            return (<AccountBalanceIcon style={{ color: '#42446E'}}/>)
        default:
            return (<HomeIcon style={{ color: '#42446E'}}/>)
    }
}

interface Props {
    list : MenuList[]
}

const MenuListItems : React.FC<Props> = (props) => {

    const {list} = props

    const history = useHistory()
   
    const { url } = useRouteMatch()
   
    const navigate = (path: string) =>{     
        history.push(`${url}${path}`)
    }

    return (
        <List>
            {list.map(({text, path,icon}, index) => 
                (  
                    <div className = "menu-item"  key={index}  >
                        <ListItem                                                    
                            button onClick={ () => navigate(path)}>     
                            <ListItemIcon>                     
                                {getIcon(icon)}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    </div>                  
                    
                )
            )}
        </List>
    );
}

export default MenuListItems;