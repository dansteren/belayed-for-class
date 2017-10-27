import React, { Component, PropTypes } from "react";
import Svg, { Path } from "react-native-svg";

export default class Send extends Component {
  render() {
    const scale = this.props.size ? this.props.size / 24 : 1;
    let opacity = 0.54;
    let color = "#000";
    if (this.props.inactive) {
      opacity = 0.38;
    }
    if (this.props.color) {
      opacity = 1;
      color = this.props.color;
    }
    return (
      <Svg width={this.props.size || 24} height={this.props.size || 24}>
        <Path
          d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
          scale={scale}
          fill={color}
          fillOpacity={opacity}
        />
      </Svg>
    );
  }
}

Send.propTypes = {
  size: PropTypes.number,
  style: PropTypes.number,
  color: PropTypes.string,
  inactive: PropTypes.bool
};
