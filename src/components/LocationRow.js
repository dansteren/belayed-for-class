import React from "react";
import { StyleSheet, Text, View } from "react-native";

const LocationRow = ({ name, roughLocation }) => (
  <View style={styles.locationRow}>
    <View style={styles.locationImagePlaceHolder} />
    <View style={styles.textArea}>
      <View style={styles.cardFooterText}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.roughLocation}>{roughLocation}</Text>
      </View>
    </View>
  </View>
);
export default LocationRow;

const styles = StyleSheet.create({
  locationRow: {
    flexDirection: "row",
    alignItems: "center"
  },
  locationImagePlaceHolder: {
    height: 24,
    width: 24,
    marginLeft: 16,
    backgroundColor: "#BDBDBD"
  },
  textArea: {
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 32
  },
  name: {
    fontSize: 16
  },
  roughLocation: {
    fontSize: 14
  }
});
