import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles as s } from "react-native-style-tachyons";

export function ActionButton({ style, caption, route, disabled }) {
  return (
    <TouchableOpacity style={style} onPress={route} disabled={disabled}>
      <Text>{caption}</Text>
    </TouchableOpacity>
  );
}
