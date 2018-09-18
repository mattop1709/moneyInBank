const initialState = {
  staffID: "",
  password: 123456,
  authorizing: false,
  authorized: false,
  message: ""
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "START_FETCHING":
      return { ...state, authorizing: true };
    case "USER_LOGOUT":
      return { ...state, authorized: false };
    case "AUTHENTICATION_TRUE":
      return { ...state, authorized: true, authorizing: false, message: null };
    case "AUTHENTICATION_FALSE":
      return {
        ...state,
        authorizing: false,
        message: "Invalid Email Address or Password"
      };
    default:
      return state;
  }
};

export default user;
