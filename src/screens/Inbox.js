import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-native";
import { InboxItem, AppBar } from "../components";
import * as entangledb from "../services/entangledb";
import { mapAsync } from "../utils";

export default class Inbox extends React.Component {
  constructor() {
    super();
    this.state = {
      threads: []
    };
  }

  componentWillMount() {
    this.fetchData();
  }

  render() {
    return (
      <View style={styles.page}>
        <AppBar>Inbox</AppBar>
        <View>
          {this.state.threads.map(t => (
            <InboxItem
              key={t.id}
              contactName={t.contactName}
              contactImage={t.contactImage}
              threadId={t.id}
              messages={t.messages}
            />
          ))}
        </View>
      </View>
    );
  }

  async fetchData() {
    const userId = await entangledb.getCurrentUserId();
    const user = await entangledb.getUser(userId);
    const threads = await mapAsync(user.conversations, async id => {
      const conversation = await entangledb.getConversation(id);
      const receiverId =
        conversation.participants[0] !== userId
          ? conversation.participants[0]
          : conversation.participants[1];
      const receiver = await entangledb.getUser(receiverId);
      return {
        id: conversation.id,
        contactName: receiver.firstName + " " + receiver.lastName,
        contactImage: receiver.pictureUrl,
        messages: conversation.messages
      };
    });
    this.setState({ threads });
  }
}

const styles = StyleSheet.create({
  page: {
    flexGrow: 1
  },
  header: {
    fontSize: 20
  }
});
