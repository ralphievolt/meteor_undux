import { createConnectedStore, withReduxDevtools } from "undux";

// Declare your store's initial state.
const initialState = {
  activeItem: "",
  showFormEntry: false
};

// Create & export a store with an initial value.
export default createConnectedStore(initialState, withReduxDevtools);
