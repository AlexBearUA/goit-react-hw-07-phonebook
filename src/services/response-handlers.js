export const handlePending = state => {
  state.isLoading = true;
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};
export const handleFulfilledFetch = (state, action) => {
  state.items = action.payload;
};

export const handleFulfilledAdd = (state, action) => {
  state.items.unshift(action.payload);
};

export const handleFulfilledDel = (state, action) => {
  state.items = state.items.filter(item => item.id !== action.payload.id);
};

export const handleFulfilledEdit = (state, action) => {
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1, action.payload);
};
