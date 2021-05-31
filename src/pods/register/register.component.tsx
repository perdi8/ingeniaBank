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
import { User } from "../../models/user/User.model";

import { Logo } from "../../asserts/dashboard/Logo.svg";

import { SnackBarCommon } from "../../common-components/snackBar/snackBarCommon.component";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  form: {
    width: "100%",
    marginTop: theme.spacing(2),
    "& label.Mui-focused": {
      color: "green",
    },
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
    width: "100vh",
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
  values: User;
  handleSubmit: FormEventHandler<HTMLFormElement>;
  handleChange: (e: ChangeEvent<any>) => void;
  handleBlur: (e: any) => void;
  errors: FormikErrors<User>;
  touched: FormikTouched<User>;
  isSubmitting: boolean;
  responseRegister: any;
}

export const RegisterComponent: React.FC<Props> = (props) => {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
    responseRegister,
  } = props;
  const classes = useStyles();
  const [countErrors, setCountErrors] = React.useState(0);

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
                    id="name"
                    label="Name"
                    name="name"
                    margin="normal"
                    autoComplete="name"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ paddingRight: "3%" }}
                  />
                  {errors.name && touched.name && (
                    <span style={{ color: "red" }}>{errors.name}</span>
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
                    id="lastname"
                    label="Lastname"
                    name="lastname"
                    type="lastname"
                    margin="normal"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.lastname && touched.lastname && (
                    <span style={{ color: "red" }}>{errors.lastname}</span>
                  )}
                </div>
              </div>
              <div
                style={{
                  width: "100vh",
                }}
              >
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
                  style={{ width: "100vh" }}
                />
                {errors.password && touched.password && (
                  <span style={{ color: "red" }}>{errors.password}</span>
                )}
              </div>
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
                    id="email"
                    label="Email"
                    name="email"
                    type="email"
                    margin="normal"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ paddingRight: "3%" }}
                  />
                  {errors.email && touched.email && (
                    <span style={{ color: "red" }}>{errors.email}</span>
                  )}
                </div>
                <TextField
                  fullWidth
                  id="phone"
                  label="Phone"
                  name="phone"
                  type="phone"
                  margin="normal"
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div
                style={{
                  width: "100vh",
                }}
              >
                <TextField
                  required
                  fullWidth
                  id="dni"
                  label="DNI"
                  name="dni"
                  type="dni"
                  margin="normal"
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{ width: "100vh" }}
                />
                {errors.dni && touched.dni && (
                  <span style={{ color: "red" }}>{errors.dni}</span>
                )}
              </div>
              <TextField
                fullWidth
                id="address"
                label="Address"
                name="address"
                type="address"
                margin="normal"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                style={{ width: "100vh" }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100vh",
                }}
              >
                <TextField
                  fullWidth
                  id="location"
                  label="Location"
                  name="location"
                  type="location"
                  margin="normal"
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{ paddingRight: "3%" }}
                />

                <TextField
                  fullWidth
                  id="country"
                  label="Country"
                  name="country"
                  type="country"
                  margin="normal"
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
                disabled={
                  errors.name ||
                  errors.lastname ||
                  errors.password ||
                  errors.email ||
                  errors.dni
                    ? true
                    : false
                }
                onClick={() => setCountErrors(countErrors + 1)}
              >
                Registrar
              </Button>
            </div>
          </form>
          {responseRegister ? (
            <SnackBarCommon
              message={responseRegister.messageResponse}
              count={countErrors}
            />
          ) : (
            <></>
          )}
        </div>
        <Box mt={8}></Box>
      </CssBaseline>
    </Container>
  );
};
