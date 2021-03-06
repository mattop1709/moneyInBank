import React from "react";
import { View, YellowBox, TouchableOpacity, Alert } from "react-native";
import { createStackNavigator } from "react-navigation";
import { styles as s } from "react-native-style-tachyons";
import Icon from "react-native-vector-icons/dist/Feather";
import RefreshIcon from "react-native-vector-icons/dist/Ionicons";

import Home from "../components/home/main";
import Details from "../components/home/details";
import Detailed from "../components/details/main";

const Stack = createStackNavigator({
  HomeScreen: {
    screen: Home,
    navigationOptions: ({ navigation, onLogout }) => ({
      headerStyle: {
        backgroundColor: "#ee7202",
        elevation: 0
      },
      headerTitle: "Home",
      headerTitleStyle: {
        fontFamily: "Lato"
      },
      headerRight: (
        <HeaderButton
          refreshButton={navigation.getParam("test1")}
          logoutButton={navigation.getParam("test")}
        />
      )
    })
  },
  DetailsScreen: {
    screen: Details,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#f8f8ff",
        elevation: 0
      },
      headerTintColor: "#000",
      headerTitle: "Details"
    })
  },
  DetailedScreen: {
    screen: Detailed,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#f8f8ff",
        elevation: 0
      },
      headerTintColor: "#000",
      headerTitle: "Information"
    })
  }
});
YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);

export default Stack;

const HeaderButton = ({ logoutButton, refreshButton }) => {
  return (
    <View style={[s.flx_row, s.pr3]}>
      <TouchableOpacity style={[s.pr4]} onPress={refreshButton}>
        <RefreshIcon name="md-refresh" size={26} color="#f8f8ff" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          Alert.alert("Attention", "Confirm to logout?", [
            { text: "Cancel", onPress: () => console.log("Hi") },
            { text: "Confirm", onPress: logoutButton }
          ])
        }
      >
        <Icon name="log-out" size={24} color="#f8f8ff" />
      </TouchableOpacity>
    </View>
  );
};
