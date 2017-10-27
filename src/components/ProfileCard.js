import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from "react-router-native";
import { RopeLeft } from "../icons";
import { YDSGrade } from "../utils";

const ProfileCard = ({ person }) => (
  <Link to={`/user/${person.id}`}>
    <View style={styles.profileCard}>
      <Image
        style={styles.imagePlaceHolder}
        source={{ uri: person.pictureUrl }}
      />
      <View style={styles.cardFooter}>
        <View style={styles.cardFooterText}>
          <Text ellipsizeMode="tail" numberOfLines={1}>
            {person.firstName + " " + person.lastName}
          </Text>
          <Text>
            {YDSGrade[person.outdoorGrade] +
              " - " +
              YDSGrade[person.indoorGrade]}
          </Text>
        </View>
        <View>{person.hasRope && <RopeLeft />}</View>
      </View>
    </View>
  </Link>
);
export default ProfileCard;

const styles = StyleSheet.create({
  profileCard: {
    margin: 5,
    borderRadius: 2,
    elevation: 2
  },
  imagePlaceHolder: {
    height: 150,
    width: 150,
    backgroundColor: "#BDBDBD",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2
  },
  cardFooter: {
    width: 150,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  cardFooterText: {
    flexDirection: "column",
    width: 150 - 5 - 5 - 24 - 5
  },
  gearIconPlaceHolder: {
    height: 24,
    width: 24,
    backgroundColor: "grey",
    borderRadius: 12
  }
});
