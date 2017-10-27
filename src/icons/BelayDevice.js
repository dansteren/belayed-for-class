import React, { Component, PropTypes } from "react";
import Svg, { Path } from "react-native-svg";

export default class BelayDevice extends Component {
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
          d="M12.264 6.309c.18-.923.69-1.389 1.132-1.622 1.84-.973 4.897.938 5.782 1.54l2.287 1.526V10l-3.393-2.13c-.887-.603-1.882-1.088-2.643-1.326a1.165 1.165 0 0 0-.672-.235h-2.493zm4.6 4.942l-1.028-3.975c-.105-.404-.55-.72-1.01-.72H9.206c-.461 0-.905.316-1.01.72L7.168 11.25a.617.617 0 0 0 .091.537c.08.102.192.17.324.198.045.007.09.014.14.014h.087v2.845c0 1.92 1.374 3.53 3.217 3.964v-.51c-1.567-.42-2.722-1.807-2.722-3.454v-2.474V12h7.423v2.845c0 1.647-1.155 3.035-2.722 3.455v.51c1.842-.435 3.216-2.045 3.216-3.965v-2.474V12h.088a.846.846 0 0 0 .14-.014.542.542 0 0 0 .323-.198.616.616 0 0 0 .092-.537zm-5.59 7.61v2.294h1.484V13.237h-1.484v5.124zm3.893-6.614h-1.989c.21.632.312.979-.022 1.396a.628.628 0 0 1-.15.132v2.083c.71-.151 1.264-.476 1.665-.979.766-.957.75-1.577.496-2.632zM9.33 14.88c.403.505.974.83 1.697.98v-2.084a.619.619 0 0 1-.15-.132c-.334-.417-.258-.764-.068-1.396H8.811c-.245 1.055-.246 1.675.52 2.632zm2.371-8.57c-.18-.922-.69-1.389-1.132-1.622-1.84-.973-4.897.938-5.782 1.541L2.5 7.753V10L5.893 7.87c.886-.603 1.882-1.087 2.643-1.325.199-.145.436-.235.671-.235h2.494zm4.748 5.677zM7.723 12z"
          scale={scale}
          fill={color}
          fillOpacity={opacity}
        />
      </Svg>
    );
  }
}

BelayDevice.propTypes = {
  size: PropTypes.number,
  style: PropTypes.number,
  color: PropTypes.string,
  inactive: PropTypes.bool
};
