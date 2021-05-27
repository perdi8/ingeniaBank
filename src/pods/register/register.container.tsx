import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import { RegisterComponent } from "./register.component";
import { switchRoutes } from "../../core/routes/routes";
import { User } from "../../models/user/User.model";

export const RegisterContainer = () => {
  const history = useHistory();

  const handleLogin = (user: User) => {
    history.push({ pathname: switchRoutes.login, state: {} });
  };
  return (
    <Formik
      initialValues={{
        name: "",
        lastname: "",
        phone: "",
        email: "",
        password: "",
        DNI: "",
        address: "",
        location: "",
        country: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
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
          <RegisterComponent
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
