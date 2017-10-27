import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-native";
import { Avatar } from "../components";
import { formatTime } from "../utils";

const ClimbingOp = ({ op }) => (
  <View style={styles.climbingOp}>
    <Avatar text={op.person} />
    <Link to={`/op/${op.key}`}>
      <View>
        <Text>{op.person}</Text>
        <Text>{op.day}</Text>
        <Text>{op.time}</Text>
      </View>
    </Link>
  </View>
);
export default ClimbingOp;

const styles = StyleSheet.create({
  climbingOp: {
    paddingTop: 10,
    paddingRight: 16,
    paddingBottom: 10,
    paddingLeft: 16,
    flexDirection: "row",
    alignItems: "center"
  }
});
