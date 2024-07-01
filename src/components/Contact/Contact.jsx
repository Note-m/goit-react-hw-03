import css from "./Contact.module.css";

const Contact = ({ name, number }) => {
  return (
    <div className={css.container}>
      <div className={css.containerContact}>
        <p className={css.contact}>{name}</p>
        <p className={css.contact}>{number}</p>
      </div>
      <button className={css.contactDeleteBtn}>Delete</button>
    </div>
  );
};

export default Contact;
