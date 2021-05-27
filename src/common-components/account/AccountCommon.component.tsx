import React from "react";

import NumberFormat from "react-number-format";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

import '../../styles/Dashboard.style.css'
import { Account } from "../../models/account/Account.model";

interface Props {
  accountList: Account[];
}

export const AccountCommonComponent: React.FC<Props> = (props) => {
  const { accountList } = props;

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
      <Grid container spacing={1}>    
        {accountList.map((account, index) => (          
            <Grid 
              item xs={12} md={12} lg={6} 
              container
              direction="row"
              justify="center"
              alignItems="center"
              key = {index}>              
              <Paper className={fixedHeightPaper}>     
                <div className = "text-card">{account.name}</div>
                <NumberFormat 
                  className = "text-card text-amount-card" 
                  value={account.total_amount}
                  displayType={'text'} 
                  thousandSeparator={true} 
                  suffix={'€'} 
                  fixedDecimalScale = {true}
                  decimalScale = {2}/>                
                <div className = "container-flex footer-card">                  
                  <div className = "text-card"> IBAN: </div>    
                  <div className = "text-number-card">{account.iban}</div>    
                </div>  
              </Paper>
            </Grid>
        ))} 
      </Grid>  
    </div>   
  );
};
