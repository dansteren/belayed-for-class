import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-native";
import { statusBarHeight } from "../dimens";
import { accentColor, accentColorDark, primaryTextLight } from "../theme";

const SearchBar = ({ linkTo, text }) => (
  <View style={styles.searchBar}>
    <Link to={linkTo}>
      <View style={styles.innerBox}>
        <View style={styles.searchIconPlaceHolder} />
        <Text style={styles.appBarText}>{text}</Text>
      </View>
    </Link>
  </View>
);
export default SearchBar;

const styles = StyleSheet.create({
  searchBar: {
    height: 56 + statusBarHeight,
    backgroundColor: accentColorDark,
    elevation: 4,
    paddingTop: 10 + statusBarHeight,
    paddingRight: 8,
    paddingBottom: 8,
    paddingLeft: 8
  },
  innerBox: {
    backgroundColor: accentColor,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 18,
    borderRadius: 4
  },
  searchIconPlaceHolder: {
    width: 24,
    height: 24,
    backgroundColor: primaryTextLight,
    borderRadius: 12
  },
  appBarText: {
    fontSize: 16,
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 16,
    marginRight: 8,
    color: primaryTextLight
  }
});
