import React from "react";
import NumberFormat from "react-number-format";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

interface Props {
  state: any;
}

export const LoanCuoteComponent: React.FC<Props> = (props) => {
  const { state } = props;

  const useStyles = makeStyles((theme) => ({
    paper: {
      display: "flex",
      flexDirection: "column",
      overflow: "auto",
      padding: "20px",
      width: "100%",
      height: "100%",
      boxShadow: "0px 4px 15px rgb(0 0 0 / 12%)",
    },
    fixedHeight: {
      height: "100%",
    },
    textLoan: {
      marginLeft: "5%",
      fontStyle: "normal",
      fontWeight: 550,
      fontSize: "15px",
      lineHeight: "33px",
      color: "#090A25",
    },
  }));

  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


  return (
    <Grid container spacing={1}>
      {state !== undefined ? (     
          <Paper className={fixedHeightPaper}>
                <div className="text-card">Previsualización del préstamo:</div>
                <div className={classes.textLoan}>Total: 
                  <NumberFormat
                    className={classes.textLoan}
                    value={state.amount}
                    displayType={"text"}
                    thousandSeparator={true}
                    suffix={"€"}
                    fixedDecimalScale={true}
                    decimalScale={2}
                  />    
                </div>                
                <div className={classes.textLoan}>Nº de cuotas: {state.fee}</div>
                <div className={classes.textLoan}>Cargo mensual: 
                  <NumberFormat
                      className={classes.textLoan}
                      value={state.amountPerFee}
                      displayType={"text"}
                      thousandSeparator={true}
                      suffix={"€"}
                      fixedDecimalScale={true}
                      decimalScale={2}
                    />   
                </div>
                <div className={classes.textLoan}>Tipo de interés %: 
                  <NumberFormat
                    className={classes.textLoan}
                    value={state.interestRate * 100}
                    displayType={"text"}
                    thousandSeparator={true}
                    suffix={"%"}
                    fixedDecimalScale={true}
                    decimalScale={0}
                  />  
                </div>
          </Paper>
      ) : (
        <></>
      )}
    </Grid>
  );
};



/*  <Grid container spacing={1}>
          {cardList.map((card, index) => (
            <Grid
              item
              xs={12}
              md={4}
              lg={4}
              container
              direction="row"
              justify="center"
              alignItems="center"
              key={index}
            >
              <Paper className={fixedHeightPaper}>
                <div className="text-card">{card.account.name}</div>
                <NumberFormat
                  className="text-card text-amount-card"
                  value={card.account.total_amount}
                  displayType={"text"}
                  thousandSeparator={true}
                  suffix={"€"}
                  fixedDecimalScale={true}
                  decimalScale={2}
                />
                <div className="container-flex footer-card">
                  <div className="text-align-flex-h">
                    {card.name_type === "credit" ? <Visa /> : <Master />}
                  </div>
                  <div className="text-number-card">{`**** ${card.card_number.substr(
                    card.card_number.length - 4
                  )}`}</div>
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid> */