import React from "react";

import NumberFormat from "react-number-format";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

import { Card } from "../../models/card/Card.model";
import '../../styles/Dashboard.style.css'
import { Visa } from "../../asserts/card/Visa.svg";
import { Master } from "../../asserts/card/Master.svg";

interface Props {
  cardList: Card[];
}

export const CardCommonComponent: React.FC<Props> = (props) => {
  const { cardList } = props;

  const useStyles = makeStyles((theme) => ({
    paper: {
      display: "flex",
      flexDirection: "column",
      overflow: "auto",
      padding: '20px',
      width: '100%',
      height: '100%',
      boxShadow: '0px 4px 15px rgb(0 0 0 / 12%)'
    },
    fixedHeight: {
      height: '100%',
    },
  }));

  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className = "box-margin-b">
      {
        cardList.length > 0 ? 
          <Grid container spacing={1}>    
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
                    <div className = "text-align-flex-h"> 
                      {card.name_type === 'credit' ? 
                        <Visa/>
                      :                     
                        <Master/>                                        
                      }  
                    </div>    
                    <div className = "text-number-card">{`**** ${card.card_number.substr(card.card_number.length - 4)}`}</div>    
                  </div>  
                </Paper>
              </Grid>
          ))} 
        </Grid>
        :  
        <div className="text-notfound">No existen tarjetas</div>
      }
     
    </div>   
  );
};
