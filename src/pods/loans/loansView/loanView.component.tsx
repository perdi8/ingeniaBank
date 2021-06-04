import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Grid } from "@material-ui/core";
import NumberFormat from "react-number-format";

import "../../../styles/Dashboard.style.css";

import { LoanList } from "../../../models/loan/LoanList.model";

interface Props {
  loanList: LoanList[];
}

export const LoanViewComponent: React.FC<Props> = (props) => {
  const { loanList } = props;


  const useStyles = makeStyles((theme) => ({
    media: {
      height: 0,
      paddingTop: "3%",
    },
    head: {
      fontSize: "18px",
      color: "#BDBDCB",
      fontWeight: 500,
    },

    table: {
      width: "100%",
      marginTop: "20px",
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

  return (
      <Grid container spacing={1} style = {{display: 'block'}}>
        <div className = "title-box">Préstamos</div>  
        <div className="box-margin-t box-margin-b">
          {loanList.length > 0 ? (
            <Grid container spacing={1}>
              <TableContainer component={Paper}>
                <Table
                  className={classes.table}
                  size="small"
                  aria-label="a dense table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell className={classes.head} align="left">
                        Cuenta de ingreso
                      </TableCell>
                      <TableCell className={classes.head} align="left">
                        Cuenta de cobro
                      </TableCell>
                      <TableCell className={classes.head} align="left">
                        Cuotas
                      </TableCell>
                      <TableCell className={classes.head} align="left">
                        Pago por cuota
                      </TableCell>
                      <TableCell className={classes.head} align="left">
                        Cantidad restante a pagar
                      </TableCell>
                      <TableCell className={classes.head} align="left">
                        Cantidad total
                      </TableCell>
                      <TableCell className={classes.head} align="left">
                        Interés %
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {loanList.map((loan, index) => (   
                       <TableRow key={index}>
                          <TableCell align="left" className={classes.textLoan}>
                            {`****${loan.accountIncome.substr( loan.accountIncome.length - 4 )}`}
                          </TableCell>
                          <TableCell align="left" className={classes.textLoan}>
                            {`****${loan.accountCollection.substr( loan.accountCollection.length - 4 )}`}
                          </TableCell>
                          <TableCell align="left" className={classes.textLoan}>
                            {loan.fee}
                          </TableCell>
                          <TableCell align="left" className={classes.textLoan}>
                            <NumberFormat
                              className={classes.textLoan}
                              value={loan.amountPerFee}
                              displayType={"text"}
                              thousandSeparator={true}
                              suffix={"€"}
                              fixedDecimalScale={true}
                              decimalScale={2}
                            />
                          </TableCell>
                          <TableCell align="left" className={classes.textLoan}>
                            <NumberFormat
                              className={classes.textLoan}
                              value={loan.amount}
                              displayType={"text"}
                              thousandSeparator={true}
                              suffix={"€"}
                              fixedDecimalScale={true}
                              decimalScale={2}
                            />
                          </TableCell>
                          <TableCell align="left" className={classes.textLoan}>
                            <NumberFormat
                              className={classes.textLoan}
                              value={loan.amountLoan}
                              displayType={"text"}
                              thousandSeparator={true}
                              suffix={"€"}
                              fixedDecimalScale={true}
                              decimalScale={2}
                            />
                          </TableCell>
                          <TableCell align="left" className={classes.textLoan}>
                            <NumberFormat
                              className={classes.textLoan}
                              value={loan.interestRate * 100}
                              displayType={"text"}
                              thousandSeparator={true}
                              suffix={"%"}
                              fixedDecimalScale={true}
                              decimalScale={0}
                            />
                          </TableCell>
                       </TableRow>                   
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          ) : (
            <div className="text-notfound">No existen movimientos</div>
          )}
        </div>
      </Grid>
  )
}

