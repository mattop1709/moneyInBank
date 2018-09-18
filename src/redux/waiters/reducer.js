const initialState = [];

const lists = (state = [], action) => {
  switch (action.type) {
    case "RECEIVE_LIST":
      return action.payload;
    default:
      return state;
  }
};

export default lists;
