import css from './Contact.module.css';
import { FaUser, FaPhone } from 'react-icons/fa';

const Contact = ({ contact, onDelete }) => {
  return (
    <li className={css.card}>
      <div className={css.info}>
        <p className={css.name}>
          <FaUser className={css.icon} />
          {contact.name}
        </p>
        <p className={css.number}>
          <FaPhone className={css.icon} />
          {contact.number}
        </p>
      </div>
      <button className={css.deleteButton} onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;

