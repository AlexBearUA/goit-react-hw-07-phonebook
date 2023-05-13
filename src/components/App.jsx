import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { AddContactForm } from './AddContactForm/AddContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Loader } from './Loader/Loader';
import { getError, getIsLoading } from 'redux/selectors';
import css from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <AddContactForm />

      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactList />
    </div>
  );
};
