import firebase from "react-native-firebase";

export const login = ({ staffId, password }) => {
  return dispatch => {
    dispatch(startFetching());
    firebase
      .auth()
      .signInAndRetrieveDataWithEmailAndPassword(staffId, password)
      .then(() => {
        dispatch(authenticateTrue());
      })
      .catch(error => {
        dispatch(authenticateFalse());
      });

    firebase
      .messaging()
      .requestPermission()
      .then(() => {
        return firebase.messaging().getToken();
      })
      .then(token => {
        console.log(token);
      });
  };
};

const startFetching = () => ({
  type: "START_FETCHING"
});

const authenticateTrue = () => ({
  type: "AUTHENTICATION_TRUE"
});

const authenticateFalse = () => ({
  type: "AUTHENTICATION_FALSE"
});

export const logout = () => ({
  type: "USER_LOGOUT"
});
