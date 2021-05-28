import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import { LoginComponent } from "./login.component";
import { switchRoutes } from "../../core/routes/routes";
import { MyContext } from "../../common-components/context-provider/dashboard.context";
import { Login } from "../../models/login/login.model";
import { IsValidLogin } from "./login.api";

export const LoginContainer = () => {
  const { isLogin, setIsLogin, setIsRegister, isRegister } =
    React.useContext(MyContext);
  const history = useHistory();
  const { userLogin, loadUser } = IsValidLogin();

  const loginSucceeded = (isValid: boolean) => {
    if (isValid) {
      console.log("Login correcto");
      history.push({ pathname: switchRoutes.dashboard, state: {} });
    }
  };

  React.useEffect(() => {
    loginSucceeded(isLogin);
  }, [isLogin]);

  const handleButtonRegister = () => {
    setIsRegister(true);
    history.push({ pathname: switchRoutes.register, state: {} });
  };

  const handleLogin = (user: Login) => {
    loadUser(user);
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        handleLogin(values);
        setSubmitting(false);
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("El email no es válido")
          .required("El email es obligatorio"),
        password: Yup.string().required("La contraseña es obligatoria"),
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
            handleButtonRegister={handleButtonRegister}
          />
        );
      }}
    </Formik>
  );
};
