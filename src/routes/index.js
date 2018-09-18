import React, { Component } from "react";
import firebase from "react-native-firebase";
import { connect } from "react-redux";

import Stack from "./stack";
import Login from "../components/login/main";

const mapStateToProps = state => ({
  authorized: state.user.authorized
});

class Index extends Component {
  async componentDidMount() {
    this.createNotificationListeners();
  }

  async createNotificationListeners() {
    this.notificationListener = firebase
      .notifications()
      .onNotification(notification => {
        const { title, body } = notification;
      });

    this.notificationOpenedListener = firebase
      .notifications()
      .onNotificationOpened(notificationOpened => {
        const { title, body } = notificationOpened.notification;
      });

    const notificationOpen = await firebase
      .notifications()
      .getInitialNotification();
    // if (notification) {
    //   const { title, body } = notificationOpen.notification;
    // }

    this.messageListener = firebase.messaging().onMessage(message => {
      console.log(JSON.stringify(message));
    });
  }

  componentWillUnmount() {
    this.notificationListener();
    this.notificationOpenedListener();
  }

  render() {
    const { authorized } = this.props;
    if (authorized) {
      return <Stack />;
    } else {
      return <Login />;
    }
  }
}

export default connect(mapStateToProps)(Index);
