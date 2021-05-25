import React from "react";

import { Link} from 'react-router-dom';
import { switchRoutes } from "../../core/routes/routes";

import NumberFormat from "react-number-format";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

import { Card } from "../../models/card/Card.model";
import '../../styles/Dashboard.style.css'

interface Props {
  cardList : Card[]
}

export const CardComponent: React.FC<Props> = (props) => {

  const { cardList } = props

  const useStyles = makeStyles((theme) => ({
    paper: {
      display: "flex",
      flexDirection: "column",
      overflow: "auto",
      padding: '20px',
      width: '230px',
      boxShadow: '0px 4px 15px rgb(0 0 0 / 12%)'
    },
    fixedHeight: {
      height: 200,
    },
  }));

  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div>
      <Grid container spacing={3}>      
        <div className = "title-box">    
            <div className = "container-flex">
              <span  className = "img-card">Tarjetas</span>
              <Link to = {switchRoutes.cards} className = "text-link"> Ver tarjetas </Link>   
            </div> 
        </div>    
        {cardList.map((card, index) => (          
            <Grid 
              item xs={12} md={4} lg={4} 
              container
              direction="row"
              justify="center"
              alignItems="center"
              key = {index}>              
              <Paper className={fixedHeightPaper}>     
                <div className = "text-card">{card.account.name}</div>
                <NumberFormat 
                  className = "text-card text-amount-card" 
                  value={card.account.total_amount}
                  displayType={'text'} 
                  thousandSeparator={true} 
                  suffix={'€'} 
                  fixedDecimalScale = {true}
                  decimalScale = {2}/> 
                <div className = "container-flex footer-card">                  
                  <div className = "img-card"> 
                    {card.name_type === 'credit' ? 
                       <svg width="44" height="13" viewBox="0 0 44 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M22.7557 4.13932C22.7306 5.94303 24.5197 6.94952 25.8674 7.54799C27.252 8.16196 27.7171 8.55572 27.7116 9.10485C27.7013 9.94515 26.6071 10.316 25.5833 10.3305C23.797 10.3557 22.7583 9.89096 21.9326 9.53949L21.2891 12.2834C22.1176 12.6313 23.6515 12.9347 25.2423 12.948C28.9762 12.948 31.4191 11.2683 31.4323 8.66411C31.4469 5.35897 26.4156 5.17603 26.45 3.69873C26.4619 3.25078 26.9309 2.77276 27.9587 2.65121C28.4675 2.58982 29.8719 2.54283 31.4641 3.211L32.0891 0.556178C31.2328 0.272058 30.1323 -2.86102e-06 28.7621 -2.86102e-06C25.2476 -2.86102e-06 22.7757 1.70253 22.7557 4.13932ZM38.094 0.228671C37.4122 0.228671 36.8376 0.591105 36.5812 1.14729L31.2474 12.753H34.9786L35.7211 10.883H40.2806L40.7113 12.753H44L41.1302 0.228671H38.094ZM38.616 3.61196L39.6928 8.31499H36.7438L38.616 3.61196ZM18.2318 0.228827L15.2907 12.7528H18.8463L21.786 0.228515H18.2318V0.228827ZM12.9719 0.228515L9.27111 8.75323L7.77408 1.50502C7.59842 0.695889 6.90473 0.228671 6.13439 0.228671H0.0847344L0 0.592358C1.24197 0.837948 2.65306 1.23406 3.50797 1.65789C4.03116 1.91679 4.18034 2.14312 4.35222 2.75835L7.18764 12.753H10.945L16.7056 0.228671H12.9719" fill="url(#paint0_linear)"/>
                       <defs>
                       <linearGradient id="paint0_linear" x1="20.2286" y1="13.2077" x2="20.5701" y2="-0.0918416" gradientUnits="userSpaceOnUse">
                       <stop stop-color="#222357"/>
                       <stop offset="1" stop-color="#254AA5"/>
                       </linearGradient>
                       </defs>
                     </svg>
                     :
                     <div>
                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 14.5C10.866 14.5 14 11.366 14 7.5C14 3.63401 10.866 0.5 7 0.5C3.13401 0.5 0 3.63401 0 7.5C0 11.366 3.13401 14.5 7 14.5Z" fill="#EA001B"/>
                        </svg>
                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 14.5C10.866 14.5 14 11.366 14 7.5C14 3.63401 10.866 0.5 7 0.5C3.13401 0.5 0 3.63401 0 7.5C0 11.366 3.13401 14.5 7 14.5Z" fill="#FFA200" fill-opacity="0.8"/>
                        </svg>
                     </div>                    
                  }  
                  </div>    
                  <div className = "text-number-card">{`**** ${card.card_number.substr(card.card_number.length - 4)}`}</div>    
                </div>  
              </Paper>
            </Grid>
        ))}       
      </Grid>
    </div>
  );
};
