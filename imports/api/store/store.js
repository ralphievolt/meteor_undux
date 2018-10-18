import { createConnectedStore, withReduxDevtools } from "undux";

// Declare your store's initial state.

const to_day = new Date();
const initialState = {
  activeItem: "",
  showFormEntry: false,
  calendarDate: to_day.toLocaleDateString()
};

// Create & export a store with an initial value.
export default createConnectedStore(initialState, withReduxDevtools);
