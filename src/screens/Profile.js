import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { ProfileInfo } from "../components";
import * as entangledb from "../services/entangledb";

export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
  }

  componentWillMount() {
    this.fetchData();
  }

  render() {
    const { user } = this.state;
    return (
      <ScrollView style={styles.page}>
        <ProfileInfo user={user} />
      </ScrollView>
    );
  }

  async fetchData() {
    const currentUserId = await entangledb.getCurrentUserId();
    const user = await entangledb.getUser(currentUserId);
    this.setState({ user });
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1
  }
});
