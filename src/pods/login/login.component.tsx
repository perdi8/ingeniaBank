import React, { ChangeEvent, FormEventHandler } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { FormikErrors, FormikTouched } from "formik";
import { Login } from "../../models/login/login.model";

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
    "& label.Mui-focused": {
      color: "green",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red",
      },
      "&:hover fieldset": {
        borderColor: "blue",
      },
      "&.Mui-focused fieldset": {
        borderColor: "green",
      },
    },
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  avatar: {
    backgroundColor: theme.palette.secondary.dark,
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
}

export const LoginComponent: React.FC<Props> = (props) => {
  const { handleSubmit, values, handleChange, errors, handleBlur, touched } =
    props;
  const classes = useStyles();
  const history = useHistory();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1">Acceso</Typography>
          <form
            onSubmit={handleSubmit}
            className={classes.form}
            noValidate
            autoComplete="off"
          >
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
            />

            <TextField
              required
              fullWidth
              autoFocus
              id="password"
              label="Password"
              name="password"
              type="password"
              margin="normal"
              autoComplete="current-password"
              variant="outlined"
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <FormControlLabel
              control={<Checkbox value="remember" color="secondary" />}
              label="Recordar datos"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Acceder
            </Button>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <Link href="·" variant="body2">
                  He olvidado la contraseña
                </Link>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Link href="·" variant="body2">
                  No tengo cuenta
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}></Box>
      </CssBaseline>
    </Container>
  );
};
