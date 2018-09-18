import React, { Component } from "react";
import { Text, View, FlatList, ScrollView } from "react-native";
import { connect } from "react-redux";
import { styles as s } from "react-native-style-tachyons";

import { PickerStatus } from "./picker";
import { DashboardStatus } from "./dashboard";
import { Card } from "./card";

const mapStateToProps = (state, ownProps) => ({
  waiters: state.waiters.lists.filter(
    list => list.zbc == ownProps.navigation.state.params.zbc
  ),
  date: state.waiters.meta.lastReceived
});

class Details extends Component {
  state = { status: null };
  filterNumber(status, waiters) {
    if (status !== null) {
      return waiters.filter(waiter => waiter.result == status).length;
    } else {
      return waiters.length;
    }
  }
  filterLists(status, waiters) {
    if (status !== null) {
      return waiters.filter(waiter => waiter.result == status);
    } else {
      return waiters;
    }
  }

  checkList() {
    return this.filterLists().length > 0;
  }

  render() {
    const { status } = this.state;
    const { waiters, navigation, date } = this.props;
    const zbcHeader = navigation.getParam("zbc");
    return (
      <ScrollView style={[s.bg_white]}>
        <View style={[s.pv3, s.mh2, s.mt2, s.br2, s.b1]}>
          <View style={[s.aic]}>
            <Text style={[s.orange, s.b]}>{zbcHeader}</Text>
          </View>
          <PickerStatus
            onChangeText={result => this.setState({ status: result })}
          />
          <DashboardStatus
            status={status}
            waiters={waiters.length}
            figure={this.filterNumber(status, waiters)}
            date={date}
          />
        </View>
        <Text style={[s.darkGrey, s.ph4, s.pb3]}>LIST OF CUSTOMERS</Text>
        <FlatList
          data={this.filterLists(status, waiters)}
          keyExtractor={(item, index) => item.reference}
          renderItem={({ item }) => (
            <Card
              status={item.status}
              node={item.node}
              reference={item.reference}
              processor={item.processor}
              customer={item.customer}
              result={item.result}
            />
          )}
        />
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps)(Details);
