import css from "./ContactForm.module.css";
import { Formik, Form, Field } from "formik";

const ContactForm = ({ onAdd }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      id: Date.now(),
      username: e.target.elements.username.value,
      number: e.target.elements.number.value,
    });
    e.target;
  };

  return (
    <Formik
      className={css.Formik}
      initialValues={{
        id: "",
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.Form}>
        <Field type="text" name="username" className={css.field}></Field>
        <Field type="text" name="number" className={css.field}></Field>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
