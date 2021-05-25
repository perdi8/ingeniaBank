import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CardMedia from "@material-ui/core/CardMedia";
import NumberFormat from "react-number-format";

import clsx from "clsx";

import { Transaction } from "../../models/transaction/Transaction.model";
import { Image } from "@material-ui/icons";

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
    //Paper del componente
    paper: {
      display: "flex",
      flexDirection: "column",
      overflow: "auto",
      padding: theme.spacing(2),
    },
    //Altura fija
    fixedHeight: {
      height: 240,
    },

    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },

    table: {
      minWidth: 650,
    },
  }));
  //Clases para aplicar a los elementos
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Tarjeta</TableCell>
              <TableCell align="right">Cantidad</TableCell>
              <TableCell align="right">Concepto</TableCell>
              <TableCell align="right">Fecha</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactionList.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {row.card === null ? (
                    <>
                      <CardMedia className={classes.media} image="" />
                      {`****${row.account.iban.substr(
                        row.account.iban.length - 4
                      )}`}
                    </>
                  ) : (
                    `****${row.card.card_number.substr(
                      row.card.card_number.length - 4
                    )}`
                  )}
                </TableCell>
                <TableCell align="right">
                  <NumberFormat
                    value={row.amount}
                    displayType={"text"}
                    thousandSeparator={true}
                    suffix={"€"}
                    fixedDecimalScale={true}
                    decimalScale={2}
                  />
                </TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right">{row.transaction_date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
