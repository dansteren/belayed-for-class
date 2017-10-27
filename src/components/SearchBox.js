import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { statusBarHeight } from "../dimens";
import {
  accentColor,
  accentColorDark,
  primaryTextLight,
  clear
} from "../theme";

const SearchBox = ({ onChangeText, placeholder, value }) => (
  <View style={styles.searchBox}>
    <View style={styles.searchIconPlaceHolder} />
    <TextInput
      autoFocus={true}
      onChangeText={text => onChangeText(text)}
      placeholder={placeholder}
      style={styles.appBarText}
      underlineColorAndroid={clear}
      value={value}
    />
  </View>
);
export default SearchBox;

const styles = StyleSheet.create({
  searchBox: {
    alignItems: "center",
    backgroundColor: accentColorDark,
    elevation: 4,
    flexDirection: "row",
    height: 56 + statusBarHeight,
    paddingTop: 10 + statusBarHeight,
    paddingRight: 8,
    paddingBottom: 8
  },
  searchIconPlaceHolder: {
    backgroundColor: primaryTextLight,
    height: 24,
    width: 24,
    marginLeft: 16
  },
  appBarText: {
    backgroundColor: accentColor,
    borderRadius: 4,
    color: primaryTextLight,
    flexGrow: 1,
    fontSize: 16,
    marginLeft: 16,
    padding: 8
  }
});
