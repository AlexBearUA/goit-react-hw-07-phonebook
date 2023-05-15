import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from './operations';
import {
  handlePending,
  handleRejected,
  handleFulfilled,
  handleFulfilledFetch,
  handleFulfilledAdd,
  handleFulfilledDel,
  handleFulfilledEdit,
} from '../services/response-handlers';

const arrayOfThunks = [fetchContacts, addContact, deleteContact, editContact];

const setThunkStatus = type => arrayOfThunks.map(thunk => thunk[type]);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], isLoading: false, error: null },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledFetch)
      .addCase(addContact.fulfilled, handleFulfilledAdd)
      .addCase(deleteContact.fulfilled, handleFulfilledDel)
      .addCase(editContact.fulfilled, handleFulfilledEdit)
      .addMatcher(isAnyOf(...setThunkStatus('rejected')), handleRejected)
      .addMatcher(isAnyOf(...setThunkStatus('pending')), handlePending)
      .addMatcher(isAnyOf(...setThunkStatus('fulfilled')), handleFulfilled);
  },
});

export const contactsReducer = contactsSlice.reducer;
