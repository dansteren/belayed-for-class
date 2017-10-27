import React, { Component, PropTypes } from "react";
import Svg, { Path } from "react-native-svg";

export default class Back extends Component {
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
          d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
          scale={scale}
          fill={color}
          fillOpacity={opacity}
        />
      </Svg>
    );
  }
}

Back.propTypes = {
  size: PropTypes.number,
  style: PropTypes.number,
  color: PropTypes.string,
  inactive: PropTypes.bool
};
