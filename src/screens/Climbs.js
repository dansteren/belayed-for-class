import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppBar } from "../components";

export default class ClimbsScreen extends React.Component {
  render() {
    return (
      <View style={styles.page}>
        <AppBar>Climbs</AppBar>
        <View style={styles.body}>
          <Text>
            This screen will have all climbs related to you. This includes
            upcoming climbs that you want to go on as well as climbs that you
            have gone on in the past
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFFFFF",
    flexGrow: 1
  },
  body: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    flexGrow: 1,
    padding: 16
  }
});
