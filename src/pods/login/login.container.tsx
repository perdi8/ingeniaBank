import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import { LoginComponent } from "./login.component";
import { switchRoutes } from "../../core/routes/routes";
import { MyContext } from "../../common-components/context-provider/dashboard.context";
import { Login } from "../../models/login/login.model";
import { IsValidLogin } from "./loginPage.api";

export const LoginContainer = () => {
  const { isLogin, setIsLogin } = React.useContext(MyContext);
  const history = useHistory();
  const { userLogin, loadUser } = IsValidLogin();

  const loginSucceeded = (isValid: boolean) => {
    if (isValid) {
      console.log("Login correcto");
      history.push({ pathname: switchRoutes.dashboard, state: {} });
    }
  };

  const handleLogin = (user: Login) => {
    loadUser(user);
    loginSucceeded(isLogin);

    /*
    if (userLogin) {
      loginSucceeded(true);
    }
    */
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        handleLogin(values);
        setSubmitting(false);
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Email no es valido")
          .required("Email obligatorio"),
        password: Yup.string(),
      })}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        return (
          <LoginComponent
            handleSubmit={handleSubmit}
            values={values}
            handleChange={handleChange}
            errors={errors}
            handleBlur={handleBlur}
            touched={touched}
            isSubmitting={isSubmitting}
          />
        );
      }}
    </Formik>
  );
};
