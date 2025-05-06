import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";

const ContactForm = ({ onAdd }) => {
  const initialValues = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "The name must contain at least 3 characters.")
      .max(50, "The name must not exceed 50 characters."),
    number: Yup.string()
      .required("Phone number is required")
      .min(3, "The number must contain at least 3 characters.")
      .max(50, "The number must not exceed 50 characters."),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name.trim(),
      number: values.number.trim(),
    };
    onAdd(newContact);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Name:
          <Field name="name" className={css.input} />
          <ErrorMessage name="name" component="div" className={css.error} />
        </label>

        <label className={css.label}>
          Phone number:
          <Field name="number" className={css.input} />
          <ErrorMessage name="number" component="div" className={css.error} />
        </label>

        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
