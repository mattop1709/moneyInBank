import firebase from "react-native-firebase";

export const fetchLists = () => {
  return function(dispatch) {
    dispatch(startRetrieving());
    firebase
      .database()
      .ref("waiters")
      .once("value")
      .then(function(snapshot) {
        setTimeout(() => {
          var waitersArr = Object.values(snapshot.val());
          // console.log(waitersArr);
          dispatch(receiveLists(waitersArr));
          dispatch(receivedLists());
        });
      });
  };
};

const receiveLists = waitersArr => ({
  type: "RECEIVE_LIST",
  payload: waitersArr
});

const receivedLists = () => ({
  type: "RECEIVED_LISTS"
});

const startRetrieving = () => ({
  type: "START_RETRIEVE"
});

export const filterLists = () => ({
  type: "FILTER_LISTS"
});
