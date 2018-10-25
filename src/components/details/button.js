import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles as s } from "react-native-style-tachyons";

export const ActionButton = () => {
  return (
    <View style={[s.pv3]}>
      <Text>I am a button</Text>
    </View>
  );
};
