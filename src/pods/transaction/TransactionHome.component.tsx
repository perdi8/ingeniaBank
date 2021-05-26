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
import CardMedia from "@material-ui/core/CardMedia";
import { Grid } from "@material-ui/core";
import NumberFormat from "react-number-format";

import { Transaction } from "../../models/transaction/Transaction.model";

import "../../styles/Dashboard.style.css";

function createData(
  card_number: number,
  cantidad: number,
  concepto: string,
  fecha: string
) {
  return { card_number, cantidad, concepto, fecha };
}

const rows = [
  createData(123213, 159, "Hola", "21/02/21"),
  createData(123123, 159, "Hola", "21/02/21"),
  createData(234123, 159, "Hola", "21/02/21"),
  createData(123123, 159, "Hola", "21/02/21"),
  createData(231312, 159, "Hola", "21/02/21"),
];
interface Props {
  transactionList: Transaction[];
}

export const TransactionComponent: React.FC<Props> = (props) => {
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
      minWidth: 650,
      marginTop: "20px",
    },

    circle: {},

    textTransaction: {
      marginLeft: "20px",
      fontStyle: "normal",
      fontWeight: 550,
      fontSize: "15px",
      lineHeight: "33px",
      color: "#090A25",
    },
  }));

  const classes = useStyles();

  return (
    <div className="box-margin-t">
      <Grid container spacing={1}>
        <div className="title-box">
          <div className="container-flex">
            <span className="text-align-flex-h">Movimientos</span>
            <Link to={switchRoutes.accounts} className="text-link">
              {" "}
              Ver más{" "}
            </Link>
          </div>
        </div>
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
                    {row.card === null ? (
                      <div style={{ display: "flex", marginBottom: "15px" }}>
                        {row.income ? (
                          <div
                            className="circle-transaction-green"
                            style={{ marginTop: "5px" }}
                          >
                            <svg
                              width="15"
                              height="12"
                              viewBox="0 0 8 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M4.91666 0.833374L3.08332 0.833374L3.08332 4.50004H0.325073L3.99632 8.17129L7.66666 4.50004L4.91666 4.50004L4.91666 0.833374Z"
                                fill="#20F14E"
                              />
                            </svg>
                          </div>
                        ) : (
                          <div
                            className="circle-transaction-red"
                            style={{ marginTop: "5px" }}
                          >
                            <svg
                              width="15"
                              height="12"
                              viewBox="0 0 8 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M3.08334 8.16663L4.91668 8.16663L4.91668 4.49996L7.67493 4.49996L4.00368 0.82871L0.333344 4.49996L3.08334 4.49996L3.08334 8.16663Z"
                                fill="#FF0F0F"
                              />
                            </svg>
                          </div>
                        )}
                        <div className={classes.textTransaction}>
                          {`****${row.account.iban.substr(
                            row.account.iban.length - 4
                          )}`}
                        </div>
                      </div>
                    ) : (
                      <div className={classes.textTransaction}>
                        {`****${row.card.card_number.substr(
                          row.card.card_number.length - 4
                        )}`}
                      </div>
                    )}
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
    </div>
  );
};
