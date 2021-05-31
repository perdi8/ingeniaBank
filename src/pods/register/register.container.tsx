import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import { RegisterComponent } from "./register.component";
import { switchRoutes } from "../../core/routes/routes";
import { User } from "../../models/user/User.model";
import { RegisterApi } from "./register.api";
import { ResponseUser } from "../../models/user/ResponseUser";

export const RegisterContainer: React.FC = () => {
  const history = useHistory();

  const { registerUser, responseApi } = RegisterApi();
  const [responseRegister, setResponseRegister] =
    React.useState<ResponseUser>();

  React.useEffect(() => {
    if (responseApi !== undefined) {
      setResponseRegister(responseApi);
      if (responseApi.created) {
        setTimeout(() => {
          history.push({ pathname: switchRoutes.login, state: {} });
        }, 2000);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [responseApi]);

  const handleRegister = (user: User) => {
    registerUser(user);
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
      validationSchema={Yup.object().shape({
        name: Yup.string()
          .min(3, "El nombre tiene que tener al menos 3 carácteres")
          .max(30, "El nombre no puede tener más de 30 carácteres")
          .required("El nombre es obligatorio"),

        lastname: Yup.string()
          .required("El apelido es obligatorio")
          .min(3, "El apellido tiene que tener al menos 3 carácteres")
          .max(50, "El apellido no puede tener más de 50 carácteres"),

        email: Yup.string()
          .required("El email es obligatorio")
          .matches(
            /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
            "Formato email incorrecto"
          ),

        dni: Yup.string()
          .required("El dni es obligatorio")
          .matches(
            /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i,
            "Formato dni incorrecto"
          ),

        password: Yup.string()
          .required("La contraseña es obligatoria")
          .min(8, "La contraseña debería tener al menos 8 carácteres")
          .matches(
            /(?=.*[a-z])/,
            "La contraseña debe tener al menos una letra"
          ),
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
            responseRegister={responseRegister}
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
