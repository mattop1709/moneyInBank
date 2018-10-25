import React from "react";
import { View } from "react-native";
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
        label="Select Status"
        data={mibResult}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const zbcArea = [
  {
    value: "ALL ZBCs"
  },
  {
    value: "ZBC SELANGOR TIMUR 1"
  },
  {
    value: "ZBC SELANGOR TIMUR 2"
  },
  {
    value: "ZBC SELANGOR UTARA 1"
  },
  {
    value: "ZBC SELANGOR UTARA 2"
  },
  {
    value: "ZBC SELANGOR BARAT 1"
  },
  {
    value: "ZBC SELANGOR BARAT 2"
  },
  {
    value: "ZBC SELANGOR TENGAH"
  }
];

const mibResult = [
  {
    value: "Pending Order Creation"
  },
  {
    value: "In Demand List"
  },
  {
    value: "Closed"
  }
];
