import React, { Component, PropTypes } from "react";
import Svg, { Path } from "react-native-svg";

export default class Helmet extends Component {
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
          d="M12.879 3.424C8.166 3.462 3.259 6.178 3 10.836c1.579.945 2.885 1.351 4.063 1.533l2.449 4.979v3.3h1.994l.006-2.619 7.836-2.357c.518.023.898-.088.91-.422.072-1.954 1.728-6.231-.152-8.844-1.641-2.063-4.4-3.005-7.227-2.982zm-2.36 9.08c1.653.002 3.3.178 5.463 1.713.078.099.181.194.295.289l-5.168 1.556-1.746-3.546c.39-.004.775-.012 1.157-.012z"
          scale={scale}
          fill={color}
          fillOpacity={opacity}
        />
      </Svg>
    );
  }
}

Helmet.propTypes = {
  size: PropTypes.number,
  style: PropTypes.number,
  color: PropTypes.string,
  inactive: PropTypes.bool
};
