import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { getConatcts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(getConatcts);
  const filter = useSelector(getFilter);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <>
      {filteredContacts.length > 0 ? (
        <ul className={css.ContactList}>
          {filteredContacts.map(({ name, number, id }) => (
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
