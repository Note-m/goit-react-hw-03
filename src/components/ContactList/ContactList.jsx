import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ users }) => {
  return (
    <div className={css.contactWrapper}>
      {users.map((user) => (
        <Contact key={user.id} name={user.name} number={user.number} />
      ))}
    </div>
  );
};

export default ContactList;
