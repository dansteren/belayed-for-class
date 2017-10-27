import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { AppBar, ClimbingOp, HorizontalList } from "../components";
import * as entangledb from "../services/entangledb";

export default class Explore extends React.Component {
  constructor() {
    super();
    this.state = {
      weekdays: []
    };
  }

  componentWillMount() {
    this.fetchData();
  }

  render() {
    return (
      <View style={styles.page}>
        <AppBar>Explore</AppBar>
        <FlatList
          style={{ flex: 1 }}
          keyExtractor={item => item.day}
          data={this.state.weekdays}
          renderItem={({ item }) => (
            <HorizontalList title={item.day} data={item.people} />
          )}
        />
      </View>
    );
  }

  async fetchData() {
    const currentUserId = await entangledb.getCurrentUserId();
    const unfilteredWeekdays = await entangledb.getWeekdays();
    const sortedWeekdays = this.sort(unfilteredWeekdays);
    const weekdays = sortedWeekdays.map(weekday => {
      return {
        day: weekday.day,
        people: weekday.people.filter(person => {
          return person.id !== currentUserId;
        })
      };
    });
    this.setState({ weekdays });
  }

  sort(weekdays) {
    const day = new Date().getDay();
    return [
      ...weekdays.slice(day - 1, weekdays.length),
      ...weekdays.slice(0, day - 1)
    ];
  }
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFFFFF",
    flexGrow: 1
  }
});
