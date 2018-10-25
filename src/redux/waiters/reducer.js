const initialState = [];

const lists = (state = [], action) => {
  switch (action.type) {
    case "RECEIVE_LIST":
      return action.payload;
    case "FILTER_LISTS":
      return [...state];
    default:
      return state;
  }
};

export default lists;
