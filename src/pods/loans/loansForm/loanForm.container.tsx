import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { LoanFormComponent } from "./loanForm.component";
import { useLoanApiPost } from "./loanForm.api";
import { Loan } from "../../../models/loan/Loan.model";
import { ResponseLoan } from "../../../models/loan/loanResponse";

interface Props {
  handleLoanChild: (responseApi: ResponseLoan) => void;
}

export const LoanFormContainer: React.FC<Props> = (props) => {
  const { handleLoanChild } = props;

  const { loadLoan, responseApi, loanList, loadLoanList } = useLoanApiPost();
  const [type, setType] = useState<boolean>(false);

  React.useEffect(() => {
    if (responseApi) {
      handleLoanChild(responseApi);
    }
    loadLoanList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [responseApi]);

  const handleChangeActionType = () => {
    setType(true);
  };

  const handleLoan = (loan: Loan) => {
    loadLoan({ ...loan, typeAction: type });
  };

  return (
    <Formik
      initialValues={{
        amount: 0.0,
        fee: 0,
        idAccountInCome: 0,
        idAccountCollection: 0,
        typeAction: true,
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

        idAccountInCome: Yup.string(),
        idAccountCollection: Yup.string(),
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
            loanList={loanList}
            handleChangeActionType={handleChangeActionType}
          />
        );
      }}
    </Formik>
  );
};
