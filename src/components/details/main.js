import React from "react";
import { Text, View } from "react-native";
import { styles as s } from "react-native-style-tachyons";
import { connect } from "react-redux";

import { ActionButton } from "./button";

const mapStateToProps = (state, ownProps) => ({
  info: state.waiters.lists.filter(
    list => list.reference == ownProps.navigation.state.params.reference
  )[0]
});

const Detailed = ({ info }) => {
  return (
    <View style={[s.flx_i, s.bg_white]}>
      <View style={[s.flx_i]}>
        <Text>{info.reference}</Text>
        <Text>{info.processor}</Text>
        <Text>{info.customer}</Text>
        <Text>{info.result}</Text>
        <Text>{info.status}</Text>
      </View>
      <ActionButton />
    </View>
  );
};

export default connect(mapStateToProps)(Detailed);
