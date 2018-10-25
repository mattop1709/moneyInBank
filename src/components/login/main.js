import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  Platform
} from "react-native";
import { styles as s } from "react-native-style-tachyons";
import { connect } from "react-redux";

import { login } from "../../redux/user/actions";

const mapStateToProps = state => ({
  user: state.user,
  isLoading: state.user.authorizing
});

const mapDispatchToProps = dispatch => ({
  onLogin: (staffId, password) => dispatch(login(staffId, password))
});

class Login extends Component {
  state = {
    staffId: "",
    password: ""
  };

  validateButton = () => {
    const { staffId, password } = this.state;
    return staffId.length > 0 && password.length > 0;
  };
  render() {
    const { user, onLogin, isLoading } = this.props;
    const { staffId, password } = this.state;
    return (
      <View style={[s.flx_i, s.bg_orange]}>
        <View style={[s.flx_i, , s.jcc]}>
          <View style={[s.aic, s.mb4]}>
            <Image
              style={{ width: 160, height: 120 }}
              source={require("../../assets/images/logo.png")}
            />
          </View>

          <TextInput
            style={[
              s.mh5,
              s.bg_white,
              s.pl3,
              s.br5,
              Platform.select({ ios: [s.pv2] })
            ]}
            underlineColorAndroid="transparent"
            onChangeText={id => this.setState({ staffId: id })}
            placeholder="Email address"
          />
          <TextInput
            style={[
              s.mh5,
              s.bg_white,
              s.pl3,
              s.br5,
              s.mt2,
              Platform.select({ ios: [s.pv2] })
            ]}
            underlineColorAndroid="transparent"
            onChangeText={pw => this.setState({ password: pw })}
            placeholder="Password"
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={
              !this.validateButton()
                ? [s.bg_darkGrey, s.pv3, s.mh5, s.mt2, s.aic, s.br5]
                : [s.bg_black, s.pv3, s.mh5, s.mt2, s.aic, s.br5]
            }
            onPress={() => onLogin({ staffId, password })}
            disabled={!this.validateButton()}
          >
            {isLoading ? (
              <ActivityIndicator size="small" color="#f8f8ff" />
            ) : (
              <Text style={!this.validateButton() ? [s.black] : [s.white]}>
                LOGIN
              </Text>
            )}
          </TouchableOpacity>
          <View style={[s.aic, s.mt2]}>
            <Text style={[s.darkGrey, s.atc]}>{user.message}</Text>
          </View>
        </View>
        <View style={[s.aic, s.pv2]}>
          <Text>version 1.0.0</Text>
        </View>
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
