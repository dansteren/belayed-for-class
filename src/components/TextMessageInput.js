import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Send } from "../icons";
import {
  primaryColor,
  grey500,
  bluegrey400,
  bluegrey700,
  clear
} from "../theme";

export default class TextMessageInput extends React.Component {
  constructor() {
    super();
    this.state = {
      height: 50
    };
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: "#FFFFFF",
          minHeight: 50,
          elevation: 8,
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <View style={styles.textInput}>
          <TextInput
            autoCapitalize="sentences"
            autoGrow={true}
            multiline={true}
            onChangeText={text => this.props.onChangeText(text)}
            placeholder="Type a message"
            placeholderTextColor={bluegrey700}
            returnKeyType="send"
            style={{
              flexGrow: 1,
              height: this.state.height
            }}
            underlineColorAndroid={clear}
            value={this.props.value}
            onContentSizeChange={e =>
              this.setState({ height: e.nativeEvent.contentSize.height })}
          />
        </View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => this.props.onSendClick()}
          style={styles.sendIconPlaceHolderContainer}
        >
          <Send color={this.props.value ? primaryColor : bluegrey400} />
          <Text
            style={this.props.value ? styles.sendActive : styles.sendInactive}
          >
            SEND
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    marginLeft: 16,
    marginRight: 8,
    flexGrow: 1
  },
  sendIconPlaceHolderContainer: {
    marginRight: 16,
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "flex-end"
  },
  sendIconPlaceHolder: {
    backgroundColor: bluegrey400,
    width: 24,
    height: 24
  },
  sendActive: {
    fontSize: 10,
    color: primaryColor,
    fontWeight: "bold",
    marginBottom: 4
  },
  sendInactive: {
    fontSize: 10,
    color: bluegrey400,
    fontWeight: "bold",
    marginBottom: 4
  }
});
