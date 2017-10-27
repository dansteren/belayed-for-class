import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import {
  NativeRouter,
  Route,
  Link,
  Redirect,
  AndroidBackButton
} from "react-router-native";
import { Conversation, Tabs, Filter, BuddyProfile } from "./src/screens";

const Redirector = () => (
  <View>
    <Redirect to={{ pathname: "/home/explore" }} />
  </View>
);

const App = () => (
  <NativeRouter>
    <AndroidBackButton>
      <View style={styles.page}>
        <StatusBar translucent={true} />
        <View style={{ flexGrow: 1 }}>
          <Route exact path="/" component={Redirector} />
          <Route path="/home" component={Tabs} />
          <Route path="/filter" component={Filter} />
          <Route path="/user/:userId" component={BuddyProfile} />
          <Route path="/conversation/:threadId" component={Conversation} />
        </View>
      </View>
    </AndroidBackButton>
  </NativeRouter>
);

export default App;

const styles = StyleSheet.create({
  page: {
    flex: 1
  }
});
