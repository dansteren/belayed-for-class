import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { SearchBox, LocationRow } from "../components";
import { grey700 } from "../theme";

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      locations: [
        {
          key: "lk4h3ou3b-23kjf99s-afho30",
          createdAt: 1234567890123,
          id: "lk4h3ou3b-23kjf99s-afho30",
          updatedAt: 1234567890123,
          name: "The Quarry",
          addressLine1: "123 Anywhere Dr.",
          addressLine2: "",
          city: "Provo",
          state: "UT",
          zip: "84606"
        },
        {
          key: "lk4hnsl5h-23kjf99s-afho30",
          createdAt: 1234567890124,
          id: "lk4hnsl5h-23kjf99s-afho30",
          updatedAt: 1234567890124,
          name: "Rock Canyon",
          addressLine1: "Rock Canyon Trail",
          addressLine2: "",
          city: "Provo",
          state: "UT",
          zip: "84604"
        }
      ],
      favorites: [
        {
          key: "afho30-lk4h3ou3b-23kjf99s",
          createdAt: 9876543210987,
          id: "afho30-lk4h3ou3b-23kjf99s",
          updatedAt: 9876543210987,
          name: "Momentum Indoor Climbing Lehi",
          addressLine1: "401 S 850 E, Lehi, UT 84043",
          addressLine2: "",
          city: "Lehi",
          state: "UT",
          zip: "84043"
        }
      ]
    };
  }

  render() {
    return (
      <View style={styles.page}>
        <SearchBox
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <View style={styles.searchResults}>
          {this.state.favorites.length > 0 && (
            <View>
              <Text style={styles.header}>Favorites</Text>
              <FlatList
                data={this.state.favorites}
                renderItem={({ item }) => (
                  <LocationRow
                    name={item.name}
                    roughLocation={item.city + ", " + item.zip}
                  />
                )}
              />
            </View>
          )}
          <View>
            <Text style={styles.header}>Nearby Locations</Text>
            <FlatList
              data={this.state.locations}
              renderItem={({ item }) => (
                <LocationRow
                  name={item.name}
                  roughLocation={item.city + ", " + item.zip}
                />
              )}
            />
          </View>
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
  searchResults: {
    flexGrow: 1,
    paddingTop: 16
  },
  header: {
    color: grey700,
    paddingLeft: 16
  }
});
