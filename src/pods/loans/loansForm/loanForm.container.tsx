import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import { LoanFormComponent } from "./loanForm.component";
import { switchRoutes } from "../../../core/routes/routes";
import { LoanApiPost } from "./loan.api";
import { Loan } from "../../../models/loan/Loan.model";

interface Props {
  handleLoanChild: any;
}

export const LoanFormContainer: React.FC<Props> = (props) => {
  const { handleLoanChild } = props;
  const history = useHistory();

  const { loadLoan, responseApi } = LoanApiPost();
  const [state, setState] = React.useState({
    amount: 0,
    fee: 0,
    idAccountInCome: 0,
    idAccountCollection: 0,
    typeAction: false,
  });

  React.useEffect(() => {
    /* if (responseApi.created) {
        setTimeout(() => {
          history.push({ pathname: switchRoutes.dashboard, state: {} });
        }, 2000);
      }
      */
    handleLoanChild(responseApi);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [responseApi, state]);

  const [type, setType] = React.useState(false);

  const handleLoan = (loan: Loan) => {
    setState({ ...loan, typeAction: type });
    loadLoan(loan);
  };

  return (
    <Formik
      initialValues={{
        amount: 0.0,
        fee: 0,
        idAccountInCome: 0,
        idAccountCollection: 0,
        typeAction: type,
      }}
      onSubmit={(values, { setSubmitting }) => {
        handleLoan(values);
        setSubmitting(false);
      }}
      validationSchema={Yup.object().shape({
        amount: Yup.number()
          .min(100, "La cantidad debe ser mayor")
          .max(100000, "La cantidad no puede exceder")
          .required("La cantidad es obligatoria"),

        fee: Yup.number()
          .required("La cuota es obligatorio")
          .min(3, "La cuota minimo 3 meses")
          .max(72, "La cuota excede los limites"),

        idAccountInCome: Yup.string().required("La cuota es obligatorio"),

        idAccountCollection: Yup.string().required(
          "La cuenta cobro es obligatoria"
        ),

        typeAction: Yup.boolean(),
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
          <LoanFormComponent
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