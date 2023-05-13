import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <>
      {contacts.length > 0 ? (
        <ul className={css.ContactList}>
          {contacts.map(({ name, number, id }) => (
            <li key={id} className={css.ContactListItem}>
              <ContactListItem name={name} number={number} id={id} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="list-is-empty">No contacts</p>
      )}
    </>
  );
};
