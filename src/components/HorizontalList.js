import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { ProfileCard } from "../components";
import { primaryTextDark, grey200, grey700 } from "../theme";

const HorizontalList = ({ title, data }) => (
  <View style={styles.horizontalList}>
    <View style={styles.heading}>
      <Text style={styles.title}>{title}</Text>
      {/* <Text style={styles.seeAll}>See All ></Text> */}
    </View>
    <FlatList
      horizontal
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
      style={styles.cardContainer}
      data={data}
      renderItem={({ item }) => <ProfileCard person={item} />}
    />
  </View>
);
export default HorizontalList;

const styles = StyleSheet.create({
  horizontalList: {
    paddingTop: 10,
    paddingBottom: 10
  },
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 24,
    paddingRight: 24,
    alignItems: "center"
  },
  seeAll: {
    color: grey700
  },
  title: {
    color: primaryTextDark,
    fontSize: 20,
    fontWeight: "bold"
  },
  cardContainer: {
    flex: 1
    // paddingLeft: 20 //Doesn't let the rightmost card scroll all the way on screen
  }
});
