import { useState } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";

const users = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];
const [contact, setContact] = useState("");
const addContact = (newContact) => {
  setContact((contact) => {
    return [...contact, newContact];
  });
};

const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      {/* <SearchBox  /> */}
      <ContactList users={users} />
    </div>
  );
};
export default App;
