import React, { ChangeEvent, FormEventHandler } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
} from "@material-ui/core";

import { FormikErrors, FormikTouched } from "formik";

import { Loan } from "../../../models/loan/Loan.model";
import { FormControl } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { Select } from "@material-ui/core";

import "../../../styles/Dashboard.style.css";
import { LoanList } from "../../../models/loan/LoanList.model";
import { Account } from "../../../models/account/Account.model";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    alignItems: "center",
  },

  form: {
    width: "100%",
    "& label.Mui-focused": {
      color: "green",
    },
  },

  submit: {
    margin: theme.spacing(1, 0, 1),
    width: "100vh",
    backgroundColor: "#D01E69",
    "&:hover": {
      backgroundColor: "#db6f9c",
      color: "white",
    },
    color: "white",
  },

  formControl: {
    minWidth: 120,
  },
}));

interface Props {
  values: Loan;
  handleSubmit: FormEventHandler<HTMLFormElement>;
  handleChange: (e: ChangeEvent<any>) => void;
  handleBlur: (e: any) => void;
  errors: FormikErrors<Loan>;
  touched: FormikTouched<Loan>;
  isSubmitting: boolean;
  loanList: any;
  handleChangeActionType: () => void;
}

export const LoanFormComponent: React.FC<Props> = (props) => {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
    loanList,
    handleChangeActionType,
  } = props;
  const classes = useStyles();

  const [loanListItem, setLoanListItem] = React.useState<any>();

  const [ingreso, setIngreso] = React.useState<{
    idAccountInCome: string | number;
    name: string;
  }>({
    idAccountInCome: "",
    name: "",
  });

  const [cobro, setCobro] = React.useState<{
    idAccountCollection: string | number;
    name: string;
  }>({
    idAccountCollection: "",
    name: "",
  });

  React.useEffect(() => {
    if (loanList !== undefined && loanList.length > 0) {
      setLoanListItem(loanList);
    }
  }, [loanList]);

  const handleChangeIngreso = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const name = event.target.name as keyof typeof ingreso;
    setIngreso({
      ...ingreso,
      [name]: event.target.value,
    });
    handleChange(event);
  };

  const handleChangeCobro = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const name = event.target.name as keyof typeof cobro;
    setCobro({
      ...cobro,
      [name]: event.target.value,
    });
    handleChange(event);
  };

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline>
          <div className={classes.paper}>
            <form
              onSubmit={handleSubmit}
              className={classes.form}
              noValidate
              autoComplete="off"
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: "100vh",
                  }}
                >
                  <div
                    style={{
                      width: "100vh",
                    }}
                  >
                    <TextField
                      required
                      fullWidth
                      autoFocus
                      id="amount"
                      label="Amount"
                      name="amount"
                      margin="normal"
                      autoComplete="amount"
                      variant="outlined"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{ paddingRight: "3%" }}
                    />
                    {errors.amount && touched.amount && (
                      <span style={{ color: "red" }}>{errors.amount}</span>
                    )}
                  </div>
                  <div
                    style={{
                      width: "100vh",
                    }}
                  >
                    <TextField
                      required
                      fullWidth
                      id="fee"
                      label="Fee"
                      name="fee"
                      type="fee"
                      margin="normal"
                      variant="outlined"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.fee && touched.fee && (
                      <span style={{ color: "red" }}>{errors.fee}</span>
                    )}
                  </div>
                </div>
                <div
                  style={{
                    width: "100vh",
                  }}
                ></div>
                <div
                  style={{
                    display: "flex",
                    width: "100vh",
                  }}
                >
                  <div
                    style={{
                      width: "100vh",
                    }}
                  >
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel htmlFor="outlined-lol-native-simple">
                        Ingresar*
                      </InputLabel>
                      <Select
                        onBlur={handleBlur}
                        fullWidth
                        required
                        native
                        value={ingreso.idAccountInCome}
                        onChange={handleChangeIngreso}
                        label="Cuenta"
                        inputProps={{
                          name: "idAccountInCome",
                        }}
                      >
                        <option aria-label="None" value="" />
                        {loanListItem ? (
                          loanListItem.map((item: any, index: number) => (
                            <option key={index} value={1}>
                              {1}
                            </option>
                          ))
                        ) : (
                          <option value={1}>vacio</option>
                        )}
                      </Select>
                    </FormControl>

                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel htmlFor="outlined-lol-native-simple">
                        Cobrar*
                      </InputLabel>
                      <Select
                        onBlur={handleBlur}
                        fullWidth
                        required
                        native
                        value={cobro.name}
                        onChange={handleChangeCobro}
                        label="Cuenta"
                        inputProps={{
                          name: "idAccountCollection",
                        }}
                      >
                        <option aria-label="None" value="" />
                        {loanListItem ? (
                          loanListItem.map((item: any, index: number) => (
                            <option key={index} value={1}>
                              {1}
                            </option>
                          ))
                        ) : (
                          <option value={1}>vacio</option>
                        )}
                      </Select>
                    </FormControl>
                    {errors.idAccountCollection &&
                      touched.idAccountCollection && (
                        <span style={{ color: "red" }}>
                          {errors.idAccountCollection}
                        </span>
                      )}
                  </div>
                </div>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className={classes.submit}
                  disabled={
                    errors.amount ||
                    errors.fee ||
                    errors.idAccountInCome ||
                    errors.idAccountCollection ||
                    errors.typeAction
                      ? true
                      : false
                  }
                >
                  Previsualizar
                </Button>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className={classes.submit}
                  disabled={
                    ingreso.idAccountInCome === "" ||
                    cobro.idAccountCollection === "" ||
                    errors.amount ||
                    errors.fee ||
                    errors.idAccountInCome ||
                    errors.idAccountCollection ||
                    errors.typeAction
                      ? true
                      : false
                  }
                  onClick={handleChangeActionType}
                >
                  Solicitar
                </Button>
              </div>
            </form>
          </div>
          <Box mt={8}></Box>
        </CssBaseline>
      </Container>
    </div>
  );
};
