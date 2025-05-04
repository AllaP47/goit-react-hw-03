import Contact from "./Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.list}>
      {contacts.length === 0 ? (
        <li className={css.empty}>No contacts found.</li>
      ) : (
        contacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            onDelete={() => onDelete(contact.id)}
          />
        ))
      )}
    </ul>
  );
};

export default ContactList;
