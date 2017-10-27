import React, { Component, PropTypes } from "react";
import Svg, { Path } from "react-native-svg";

export default class Shoes extends Component {
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
          d="M7.66 4.263c-.313.003-.637.194-.81.604-1.302 3.079-3.163 1.777-3.799 4.77-.416 1.96 1.778 3.638 4.079 3.484 5.728-.381 12.385 7.436 13.072 6.545 2.296-2.974-1.027-5.633-1.683-6.329-.03-.032-.063-.076-.094-.111l.207-.147a.319.319 0 0 0 .077-.443l-.919-1.313a.314.314 0 0 0-.44-.076l-.191.135c-.109-.178-.225-.373-.337-.56l.257-.162a.319.319 0 0 0 .1-.439l-.843-1.362a.315.315 0 0 0-.437-.1l-.237.149c-.109-.177-.215-.352-.326-.525l.246-.18a.32.32 0 0 0 .07-.444l-.938-1.3a.314.314 0 0 0-.441-.07l-.242.176c-.735-.876-1.474-1.458-2.171-1.409-1.127.079-.006 3.34-2.19 3.353-1.114.007-1.086-.918-1.198-3.387-.026-.556-.41-.863-.812-.859z"
          scale={scale}
          fill={color}
          fillOpacity={opacity}
        />
      </Svg>
    );
  }
}

Shoes.propTypes = {
  size: PropTypes.number,
  style: PropTypes.number,
  color: PropTypes.string,
  inactive: PropTypes.bool
};
