export const selectConatcts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter.filter;
export const selectVisibleContacts = state => {
  const contacts = selectConatcts(state);
  const normalizedFilter = selectFilter(state).toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
