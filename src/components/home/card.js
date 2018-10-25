import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles as s } from "react-native-style-tachyons";
import Icon from "react-native-vector-icons/dist/EvilIcons";

export const Card = ({
  status,
  node,
  reference,
  processor,
  customer,
  result,
  navigate
}) => {
  return (
    <View style={[s.ba, s.b__peach, s.ph3, s.mh3, s.mb2, s.pv3, s.br2]}>
      <View style={[s.flx_row]}>
        <Text
          style={
            result == "Installed"
              ? [s.green, s.f5, s.b, s.ff_Lato]
              : [s.red, s.f5, s.b, s.ff_Lato]
          }
        >
          {result}
        </Text>
        <Icon
          name={result == "Installed" ? "check" : "exclamation"}
          size={24}
          color={result == "Installed" ? "#4caf50" : "#ff6b6b"}
        />
      </View>
      <Text style={[s.orange, s.f5, s.pb2, s.b, s.ff_Lato]}>{customer}</Text>
      <View style={[s.flx_row]}>
        <Icon name="pencil" size={24} color="#c4c4c4" />
        <Text style={[s.ff_Lato]}>{processor}</Text>
      </View>
      <View style={[s.flx_row]}>
        <Icon name="tag" size={24} color="#c4c4c4" />
        <Text style={[s.ff_Lato]}>{reference}</Text>
      </View>
      <View style={[s.flx_row]}>
        <Icon name="star" size={24} color="#c4c4c4" />
        <Text style={[s.ff_Lato]}>{status}</Text>
      </View>
    </View>
  );
};
