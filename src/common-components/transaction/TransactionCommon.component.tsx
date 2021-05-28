import React from "react";

import { Link } from "react-router-dom";
import { switchRoutes } from "../../core/routes/routes";

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

import { Transaction } from "../../models/transaction/Transaction.model";

import "../../styles/Dashboard.style.css";
import { TransactionGreenLogo } from "../../asserts/transaction/transactonGreenLogo.svg";
import { TransactionRedLogo } from "../../asserts/transaction/transactonRedLogo.svg";

interface Props {
  transactionList: Transaction[];
}

export const TransactionCommonComponent: React.FC<Props> = (props) => {
  const { transactionList } = props;

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

    textTransaction: {
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
    <div className="box-margin-t box-margin-b">
      {transactionList.length > 0 ? (
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
                    Tarjeta
                  </TableCell>
                  <TableCell className={classes.head} align="left">
                    Cantidad
                  </TableCell>
                  <TableCell className={classes.head} align="left">
                    Concepto
                  </TableCell>
                  <TableCell className={classes.head} align="left">
                    Fecha
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {transactionList.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell
                      component="th"
                      scope="row"
                      className={classes.media}
                    >
                      <div style={{ display: "flex", marginBottom: "10%" }}>
                        {row.income ? (
                          <span className="circle-transaction-green">
                            <TransactionGreenLogo />
                          </span>
                        ) : (
                          <span className="circle-transaction-red">
                            <TransactionRedLogo />
                          </span>
                        )}
                        {row.card === null ? (
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                            }}
                          >
                            <div className={classes.textTransaction}>
                              {`****${row.account.iban.substr(
                                row.account.iban.length - 4
                              )}`}
                              <span style={{ marginLeft: "10%" }}>Cuenta</span>
                            </div>
                          </div>
                        ) : (
                          <div className={classes.textTransaction}>
                            {`****${row.card.card_number.substr(
                              row.card.card_number.length - 4
                            )}`}
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell align="left" className={classes.textTransaction}>
                      <NumberFormat
                        className={classes.textTransaction}
                        value={row.amount}
                        displayType={"text"}
                        thousandSeparator={true}
                        suffix={"€"}
                        fixedDecimalScale={true}
                        decimalScale={2}
                      />
                    </TableCell>
                    <TableCell align="left" className={classes.textTransaction}>
                      {row.description}
                    </TableCell>
                    <TableCell align="left" className={classes.textTransaction}>
                      {row.transaction_date.replace(
                        /^(\d{4})-(\d{2})-(\d{2})$/g,
                        "$3/$2/$1"
                      )}
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
  );
};
