import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import * as entangledb from "../services/entangledb";
import { AppBar, Message, TextMessageInput } from "../components";
import { grey500, bluegrey50, clear } from "../theme";
import { mapAsync } from "../utils";

export default class Conversation extends React.Component {
  constructor() {
    super();
    this.state = {
      sender: {},
      receiver: {},
      messages: [],
      newMessage: ""
    };
  }

  componentWillMount() {
    this.fetchData(this.props.match.params.threadId);
  }

  componentDidMount() {
    if (this.flatList) {
      this.flatList.scrollToEnd({ animated: true }); // TODO: Doesn't work
    }
  }

  render() {
    const { sender, receiver, messages, newMessage } = this.state;
    return (
      <KeyboardAvoidingView style={styles.page} behavior="height">
        <AppBar>{receiver.firstName + " " + receiver.lastName}</AppBar>
        <FlatList
          style={{ flex: 1 }}
          ref={r => {
            this.flatList = r;
          }}
          contentContainerStyle={styles.messages}
          data={messages}
          getItemLayout={(data, index) => ({
            length: 60,
            offset: 80 * index,
            index
          })}
          keyExtractor={(item, index) => item.timeSent}
          renderItem={({ item }) => (
            <Message
              senderName={
                item.sender === sender.id
                  ? sender.firstName + " " + sender.lastName
                  : receiver.firstName + " " + receiver.lastName
              }
              senderImage={
                item.sender === sender.id
                  ? sender.pictureUrl
                  : receiver.pictureUrl
              }
              timeSent={item.timeSent}
              text={item.text}
              outbound={item.sender === sender.id}
            />
          )}
        />
        <TextMessageInput
          value={newMessage}
          onChangeText={newMessage => this.setState({ newMessage })}
          onSendClick={() => this.sendMessage()}
        />
      </KeyboardAvoidingView>
    );
  }

  async fetchData(threadId) {
    const currentUserId = await entangledb.getCurrentUserId();
    const { participants, messages } = await entangledb.getConversation(
      threadId
    );
    const actualParticipants = await mapAsync(participants, async userId => {
      return await entangledb.getUser(userId);
    });
    const sender =
      actualParticipants[0].id === currentUserId
        ? actualParticipants[0]
        : actualParticipants[1];
    const receiver =
      actualParticipants[0].id !== currentUserId
        ? actualParticipants[0]
        : actualParticipants[1];
    this.setState({
      sender,
      receiver,
      messages
    });
  }

  async sendMessage() {
    if (this.state.newMessage) {
      const newMessage = await entangledb.sendMessage(
        this.state.newMessage,
        this.props.match.params.threadId
      );
      const messages = [...this.state.messages, newMessage];
      this.setState({
        messages,
        newMessage: ""
      });
    }
  }
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: bluegrey50,
    flexGrow: 1
  },
  messages: {
    flexGrow: 1,
    justifyContent: "flex-end"
  }
});
