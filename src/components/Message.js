import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import Avatar from "./Avatar";
import {
  primaryTextDark,
  primaryTextLight,
  grey500,
  bluegrey600
} from "../theme";
import { formatTime } from "../utils";

// interface Props {
//   senderName: string;
//   senderImage: string;
//   timeSent: string;
//   text: string;
//   children: any
//   outbound: boolean;
// }

export default class Message extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false
    };
  }

  render() {
    const {
      senderName,
      senderImage,
      timeSent,
      text,
      children,
      outbound
    } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => this.setState({ expanded: !this.state.expanded })}
        style={styles.messageContainer}
      >
        {outbound ? (
          <View style={styles.outboundMessageContainer}>
            <View style={styles.outboundMessage}>
              <Text style={styles.outboundMessageText}>{text || children}</Text>
            </View>
            {this.state.expanded && (
              <Text style={styles.timeOut}>{formatTime(timeSent)}</Text>
            )}
          </View>
        ) : (
          <View>
            <View style={styles.messageAndAvatar}>
              <Avatar text={senderName} imageUrl={senderImage} />
              <View style={styles.inboundMessage}>
                <Text style={styles.inboundMessageText}>
                  {text || children}
                </Text>
              </View>
            </View>
            {this.state.expanded && (
              <Text style={styles.timeIn}>{formatTime(timeSent)}</Text>
            )}
          </View>
        )}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  messageContainer: {
    paddingTop: 8,
    paddingRight: 10,
    paddingBottom: 8,
    paddingLeft: 10
  },
  outboundMessageContainer: {
    alignItems: "flex-end"
  },
  outboundMessage: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 10,
    marginLeft: 100
  },
  inboundMessage: {
    backgroundColor: grey500,
    marginRight: 100,
    marginLeft: 10,
    borderRadius: 18,
    padding: 10
  },
  messageAndAvatar: {
    flexDirection: "row",
    alignItems: "center"
  },
  inboundMessageText: {
    fontSize: 16,
    color: primaryTextLight
  },
  outboundMessageText: {
    fontSize: 16,
    color: primaryTextDark
  },
  timeOut: {
    fontSize: 12,
    marginRight: 10,
    color: bluegrey600
  },
  timeIn: {
    fontSize: 12,
    marginLeft: 40 + 10 + 10,
    color: bluegrey600
  }
});
