import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { primaryColor, primaryTextLight, opacity54 } from "../theme";

const Avatar = ({ text, imageUrl }) => (
  <View style={styles.avatar}>
    {imageUrl ? (
      <Image style={styles.image} source={{ uri: imageUrl }} />
    ) : (
      <Text style={styles.avatarText}>{text.charAt(0)}</Text>
    )}
  </View>
);
export default Avatar;

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 20,
    height: 40,
    width: 40,
    backgroundColor: primaryColor,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  avatarText: {
    fontSize: 26,
    color: opacity54(primaryTextLight)
  }
});
