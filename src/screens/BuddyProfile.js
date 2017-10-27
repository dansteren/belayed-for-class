import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Link, withRouter } from "react-router-native";
import { ProfileInfo } from "../components";
import { primaryTextLight, primaryColor } from "../theme";
import * as entangledb from "../services/entangledb";
import { mapAsync } from "../utils";

export default class BuddyProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
  }

  componentWillMount() {
    this.fetchData(this.props.match.params.userId);
  }

  render() {
    const { user } = this.state;
    const FooterButton = withRouter(({ history }) => (
      <TouchableOpacity
        activeOpacity={1}
        onPress={async () => {
          const currentUserId = await entangledb.getCurrentUserId();
          const currentUser = await entangledb.getUser(currentUserId);
          const conversations = await mapAsync(
            currentUser.conversations,
            async convId => {
              return await entangledb.getConversation(convId);
            }
          );
          const convsWithUser = conversations.filter(conv => {
            return conv.participants.indexOf(user.id) !== -1;
          });
          if (convsWithUser.length === 0) {
            // This is first contact.
            const newConvId = await entangledb.createConversation([
              currentUserId,
              user.id
            ]);
            history.push(`/conversation/${newConvId}`);
          } else {
            // We already started a conversation with them.
            const existingConversation = convsWithUser[0];
            history.push(`/conversation/${existingConversation.id}`);
          }
        }}
        style={styles.bottomButton}
      >
        <Text style={styles.buttonText}>START CHATTING</Text>
      </TouchableOpacity>
    ));
    return (
      <View style={styles.page}>
        <ScrollView style={{ flexGrow: 1, marginBottom: 56 }}>
          <ProfileInfo user={user} />
        </ScrollView>
        <FooterButton />
      </View>
    );
  }

  async fetchData(userId) {
    const user = await entangledb.getUser(userId);
    this.setState({ user });
  }
}

const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column"
  },
  bottomButton: {
    backgroundColor: primaryColor,
    height: 56,
    elevation: 8,
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  buttonText: {
    fontSize: 14,
    color: primaryTextLight
  }
});
