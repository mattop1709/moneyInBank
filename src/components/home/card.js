import React from "react";
import { Text, View } from "react-native";
import { styles as s } from "react-native-style-tachyons";
import Icon from "react-native-vector-icons/dist/EvilIcons";

export const Card = ({
  status,
  node,
  reference,
  processor,
  customer,
  result
}) => {
  return (
    <View
      style={[s.flx_row, s.ba, s.b__peach, s.ph3, s.mh3, s.mb2, s.pv3, s.br2]}
    >
      <View style={[s.jcc]}>
        <Icon
          name={result === "Servable" ? "check" : "exclamation"}
          size={24}
          color={result === "Servable" ? "green" : "red"}
        />
      </View>
      <View style={[s.flx_i, s.ph2]}>
        <Text style={[s.blue, s.f5]}>{reference}</Text>
        <Text style={[s.blue, s.f5]}>{customer}</Text>
        <View style={[s.flx_row, s.jcsb, s.pt2]}>
          <Text>by {processor}</Text>
          <Text>{status}</Text>
        </View>
      </View>
    </View>
  );
};
