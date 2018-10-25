import React, { Component } from "react";
import { View, ActivityIndicator, Text } from "react-native";
import { connect } from "react-redux";
import { styles as s } from "react-native-style-tachyons";

import { fetchLists } from "../../redux/waiters/actions";
import { logout } from "../../redux/user/actions";

import { PickerArea } from "./picker";
import { Dashboard } from "./dashboard";
import { ActionButton } from "./button";

const mapStateToProps = state => ({
  user: state.user,
  lists: state.waiters.lists,
  isLoading: state.waiters.meta.isFetching,
  date: state.waiters.meta.lastReceived
});

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(logout()),
  onFetch: () => dispatch(fetchLists())
});

class Home extends Component {
  state = {
    zbc: "ALL ZBCs"
  };
  componentWillMount() {
    this.props.navigation.setParams({
      test: this.props.onLogout,
      test1: this.props.onFetch
    });
  }

  componentDidMount() {
    this.props.onFetch();
  }

  componentWillUnmount() {
    this.props.onFetch();
  }

  render() {
    const { navigate } = this.props.navigation;
    const { zbc } = this.state;
    const { lists, date, isLoading } = this.props;
    return (
      <View style={[s.bg_white, s.flx_i, s.jcc]}>
        <View style={[s.aic]}>
          <Text style={[s.b, s.orange]}>MONEY IN BANK</Text>
        </View>
        <PickerArea onChangeText={area => this.setState({ zbc: area })} />

        {isLoading ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : (
          <Dashboard lists={lists} area={zbc} date={date} />
        )}
        <ActionButton
          style={
            zbc == "ALL ZBCs"
              ? [s.bg_darkGrey, s.pv3, s.mh3, s.mt2, s.aic, s.br5]
              : [s.bg_orange, s.pv3, s.mh3, s.mt2, s.aic, s.br5]
          }
          caption={"SHOW DETAILS"}
          route={() => navigate("DetailsScreen", { zbc })}
          disabled={zbc == "ALL ZBCs"}
        />
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
