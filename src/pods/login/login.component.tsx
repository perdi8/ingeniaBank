import React, { ChangeEvent, FormEventHandler } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
} from "@material-ui/core";
import { FormikErrors, FormikTouched } from "formik";
import { Login } from "../../models/login/login.model";
import { Logo } from "../../asserts/dashboard/Logo.svg";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  form: {
    width: "100%",
    marginTop: theme.spacing(2),
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#D01E69",
    "&:hover": {
      backgroundColor: "#db6f9c",
      color: "white",
    },
    color: "white",
  },

  avatar: {
    margin: theme.spacing(1),
  },
}));

interface Props {
  values: Login;
  handleSubmit: FormEventHandler<HTMLFormElement>;
  handleChange: (e: ChangeEvent<any>) => void;
  handleBlur: (e: any) => void;
  errors: FormikErrors<Login>;
  touched: FormikTouched<Login>;
  isSubmitting: boolean;
  handleButtonRegister: () => void;
}

export const LoginComponent: React.FC<Props> = (props) => {
  const {
    handleSubmit,
    values,
    handleChange,
    errors,
    handleBlur,
    touched,
    handleButtonRegister,
  } = props;
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline>
        <div className={classes.paper}>
          <div className={classes.avatar}>
            <Logo />
          </div>

          <form
            onSubmit={handleSubmit}
            className={classes.form}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                fullWidth
                autoFocus
                id="email"
                label="Email"
                name="email"
                margin="normal"
                autoComplete="email"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {touched.email && (
                <span style={{ color: "red" }}>{errors.email}</span>
              )}
            </div>

            <div>
              <TextField
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                type="password"
                margin="normal"
                autoComplete="current-password"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {touched.password && (
                <span style={{ color: "red" }}>{errors.password}</span>
              )}
            </div>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              Acceder
            </Button>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <Button
                  style={{ color: "#D01E69" }}
                  onClick={handleButtonRegister}
                >
                  No tengo cuenta
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}></Box>
      </CssBaseline>
    </Container>
  );
};
