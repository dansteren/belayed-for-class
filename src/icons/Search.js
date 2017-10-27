import React, { Component, PropTypes } from "react";
import Svg, { Path } from "react-native-svg";

export default class Search extends Component {
  render() {
    const scale = this.props.size ? this.props.size / 24 : 1;
    let opacity = 0.54;
    let color = "#000";
    if (this.props.inactive) {
      opacity = 0.38;
    }
    if (this.props.color) {
      if (this.props.color.length === 9) {
        color = this.props.color.substr(0, 7);
        opacity = 1 - parseInt(this.props.color.substr(7, 2), 16);
      } else {
        opacity = 1;
        color = this.props.color;
      }
    }
    return (
      <Svg width={this.props.size || 24} height={this.props.size || 24}>
        <Path
          d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
          scale={scale}
          fill={color}
          fillOpacity={opacity}
        />
      </Svg>
    );
  }
}

Search.propTypes = {
  size: PropTypes.number,
  style: PropTypes.number,
  color: PropTypes.string,
  inactive: PropTypes.bool
};
