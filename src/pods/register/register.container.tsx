import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import { RegisterComponent } from "./register.component";
import { switchRoutes } from "../../core/routes/routes";
import { User } from "../../models/user/User.model";
import { RegisterApi } from "./register.api";

export const RegisterContainer: React.FC = () => {
  const history = useHistory();

  const { registerUser } = RegisterApi();

  const handleRegister = (user: User) => {
    console.log(user);
    registerUser(user);
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
        dni: "",
        address: "",
        location: "",
        country: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        handleRegister(values);
        setSubmitting(false);
      }}
      validationSchema={Yup.object().shape({})}
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
