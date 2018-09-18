import React from "react";
import { View, Text } from "react-native";
import { styles as s } from "react-native-style-tachyons";
import { Dropdown } from "react-native-material-dropdown";

export function PickerArea({ onChangeText }) {
  return (
    <View style={[s.ph4, s.br5]}>
      <Dropdown
        label="Select ZBC Area"
        data={zbcArea}
        onChangeText={onChangeText}
      />
    </View>
  );
}

export function PickerStatus({ onChangeText }) {
  return (
    <View style={[s.ph4, s.br5]}>
      <Dropdown
        label="Select Result"
        data={mibResult}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const zbcArea = [
  {
    value: "GOMBAK"
  },
  {
    value: "KERTAG"
  },
  {
    value: "KEBAT"
  },
  {
    value: "RAWANG"
  },
  {
    value: "COBRA"
  },
  {
    value: "KLANG"
  },
  {
    value: "SALBAN"
  }
];

const mibResult = [
  {
    value: "Servable"
  },
  {
    value: "Not Found"
  },
  {
    value: "Port Full"
  }
];
