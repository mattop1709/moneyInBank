import React, { Component } from "react";
import { AsyncStorage, StyleSheet } from "react-native";
import NativeTachyons from "react-native-style-tachyons";
import { createStore, applyMiddleware } from "redux";
import { Provider, connect } from "react-redux";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

import Index from "./routes/index";
import reducers from "./redux/reducers";

const persistConfig = {
  key: "root",
  storage: AsyncStorage
};

const pReducer = persistReducer(persistConfig, reducers);
const store = createStore(pReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
};

NativeTachyons.build(
  {
    colors: {
      palette: {
        orange: "#ffb347",
        paleOrange: "#ffb347",
        peach: "#ffcd94",
        white: "#f8f8ff",
        darkGrey: "#c4c4c4",
        lightGrey: "#dcdcdc",
        red: "#ff6b6b",
        black: "#000000",
        blue: "#779ecb"
      }
    }
  },
  StyleSheet
);

export default App;
