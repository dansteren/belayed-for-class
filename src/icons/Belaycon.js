import React, { Component, PropTypes } from "react";
import Svg, { Path } from "react-native-svg";

export default class Belaycon extends Component {
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
          d="M9.654 2.004l-.029.004c-1.385.115-2.639.658-3.434 1.683-.794 1.026-1.05 2.442-.763 4.028l.006.029.005.03c1.2 4.934 2.012 7.745 3.286 11.398l.002.002c.722 2.203 2.926 3.124 4.84 2.736 1.914-.388 3.703-1.987 4.017-4.402l.041-.303-4.254-8.504a1 1 0 1 0-1.789.895l3.928 7.851c-.282 1.428-1.271 2.285-2.34 2.502-1.129.229-2.122-.105-2.545-1.398l-.002-.01-.004-.01c-1.255-3.597-2.037-6.312-3.224-11.191-.21-1.181-.006-1.932.378-2.428.383-.494 1.03-.82 1.995-.906 1.568-.035 3.022.298 5.044.892 1.274.407 1.557.766 1.74 1.397.185.632.112 1.743-.01 3.244a1 1 0 1 0 1.993.16c.12-1.475.296-2.736-.062-3.965-.358-1.229-1.413-2.222-3.059-2.746l-.01-.002-.011-.004c-2.098-.617-3.807-1.03-5.711-.982h-.028z"
          scale={scale}
          fill={color}
          fillOpacity={opacity}
        />
      </Svg>
    );
  }
}

Belaycon.propTypes = {
  size: PropTypes.number,
  style: PropTypes.number,
  color: PropTypes.string,
  inactive: PropTypes.bool
};
