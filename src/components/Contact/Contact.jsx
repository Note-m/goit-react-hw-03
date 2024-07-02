import css from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };
  return (
    <div className={css.container}>
      <div className={css.containerContact}>
        <p className={css.contact}>{name}</p>
        <p className={css.contact}>{number}</p>
      </div>
      <button className={css.contactDeleteBtn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
