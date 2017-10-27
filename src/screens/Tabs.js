import React from "react";
import { StyleSheet, View } from "react-native";
import { Route } from "react-router-native";
import { Explore, Climbs, Inbox, Profile } from "./index";
import { BottomNavigation } from "../components";

const Tabs = ({ match, location }) => (
  <View style={styles.page}>
    <View style={{ flexGrow: 1 }}>
      <Route path={`${match.url}/explore`} component={Explore} />
      <Route path={`${match.url}/climbs`} component={Climbs} />
      <Route path={`${match.url}/inbox`} component={Inbox} />
      <Route path={`${match.url}/profile`} component={Profile} />
    </View>
    <BottomNavigation match={match} location={location} />
  </View>
);

export default Tabs;

const styles = StyleSheet.create({
  page: {
    flexGrow: 1
  }
});
