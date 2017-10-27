import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Link, withRouter } from "react-router-native";

import { Inbox, Person, Search } from "../icons";
import { grey700, primaryColor, iconDarkActive } from "../theme";

const NavItem = withRouter(({ history, to, onPress, children }) => (
  <TouchableOpacity
    activeOpacity={1}
    onPress={() => {
      history.replace(to);
      onPress();
    }}
    style={styles.navItem}
  >
    <View style={styles.navItemBox}>{children}</View>
  </TouchableOpacity>
));

// <NavLink to={`${match.url}/explore`} onPress={() => this.setState({ active: 1 })}>
//   <Search color={active ? primaryColor : iconDarkActive} />
//   <Text style={active ? styles.textActive : styles.textInactive}>Explore</Text>
// </NavLink>

export default class BottomNavigation extends React.Component {
  constructor({ match, location, history }) {
    super();
    switch (location.pathname) {
      case "/home/explore":
        this.state = { active: 0 };
        break;
      case "/home/inbox":
        this.state = { active: 1 };
        break;
      case "/home/profile":
        this.state = { active: 2 };
        break;
      default:
        this.state = { active: 0 };
        break;
    }
  }

  render() {
    const { active } = this.state;
    const { match } = this.props;
    return (
      <View style={styles.nav}>
        <NavItem
          to={`${match.url}/explore`}
          onPress={() => this.setState({ active: 0 })}
        >
          <Search color={active === 0 ? primaryColor : iconDarkActive} />
          <Text style={active === 0 ? styles.textActive : styles.textInactive}>
            Explore
          </Text>
        </NavItem>
        <NavItem
          to={`${match.url}/inbox`}
          onPress={() => this.setState({ active: 1 })}
        >
          <Inbox color={active === 1 ? primaryColor : iconDarkActive} />
          <Text style={active === 1 ? styles.textActive : styles.textInactive}>
            Inbox
          </Text>
        </NavItem>
        <NavItem
          to={`${match.url}/profile`}
          onPress={() => this.setState({ active: 2 })}
        >
          <Person color={active === 2 ? primaryColor : iconDarkActive} />
          <Text style={active === 2 ? styles.textActive : styles.textInactive}>
            Profile
          </Text>
        </NavItem>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    elevation: 8,
    height: 56
  },
  navItem: {
    flexGrow: 1
  },
  navItemBox: {
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  iconPlaceholderActive: {
    width: 24,
    height: 24
  },
  iconPlaceholderInactive: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: grey700
  },
  textActive: {
    fontSize: 14,
    color: primaryColor
  },
  textInactive: {
    fontSize: 12,
    color: grey700
  }
});
