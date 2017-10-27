import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { primaryColor, primaryTextLight } from "../theme";
import { Link } from "react-router-native";
import { statusBarHeight } from "../dimens";

const AppBar = ({ children }) => (
  <View style={styles.appBar}>
    <Text style={styles.appBarText}>{children}</Text>
  </View>
);
export default AppBar;

const styles = StyleSheet.create({
  appBar: {
    height: 56 + statusBarHeight,
    backgroundColor: primaryColor,
    elevation: 4
  },
  appBarText: {
    fontSize: 20,
    color: primaryTextLight,
    marginTop: 14 + statusBarHeight,
    marginBottom: 4,
    // marginLeft: 72 //Change this once we add a left icon
    marginLeft: 24
  }
});
