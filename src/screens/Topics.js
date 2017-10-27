import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Route, Link } from "react-router-native";

const Topic = ({ match }) => (
  <Text style={styles.topic}>{match.params.topicId}</Text>
);

const Topics = ({ match }) => (
  <View>
    <Text style={styles.header}>Topics</Text>
    <View>
      <Link
        to="/conversation/001"
        style={styles.subNavItem}
        underlayColor="#f0f4f7"
      >
        <Text>Conversation 001</Text>
      </Link>
      <Link
        to={`${match.url}/rendering`}
        style={styles.subNavItem}
        underlayColor="#f0f4f7"
      >
        <Text>Rendering with React</Text>
      </Link>
      <Link
        to={`${match.url}/components`}
        style={styles.subNavItem}
        underlayColor="#f0f4f7"
      >
        <Text>Components</Text>
      </Link>
      <Link
        to={`${match.url}/props-v-state`}
        style={styles.subNavItem}
        underlayColor="#f0f4f7"
      >
        <Text>Props v. State</Text>
      </Link>
      <Link
        to="/conversation/002"
        style={styles.subNavItem}
        underlayColor="#f0f4f7"
      >
        <Text>Conversation 2</Text>
      </Link>
    </View>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <Text style={styles.topic}>Please select a topic.</Text>}
    />
  </View>
);

export default Topics;

const styles = StyleSheet.create({
  header: {
    fontSize: 20
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});
