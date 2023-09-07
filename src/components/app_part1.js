import "./app_part1.css";
import React, { Component } from "react";
import { Button, Col, Row } from "antd";
import { SearchOutlined } from "@ant-design/icons";

class AlterImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }

  overlayButtonHovering = () => {
    this.setState({ isHovered: true });
  };

  overlayButtonNormal = () => {
    this.setState({ isHovered: false });
  };

  render() {
    const dynamicStyle = this.state.isHovered
      ? { display: "block" }
      : { opacity: "0" };

    const btnStyle = this.props.btnShow
      ? { display: "block" }
      : { display: "none" };

    return (
      <div className={"flex-img-container"}>
        <div className="btn-image-container">
          <Button
            size={"small"}
            style={btnStyle}
            className="overlay-button"
            shape="round"
            icon={<SearchOutlined />}
            onMouseEnter={this.overlayButtonHovering}
            onMouseLeave={this.overlayButtonNormal}
          >
            {this.props.btnText}
          </Button>
          <img style={{ width: "100%" }} src={this.props.leftImage} />
        </div>
        <div className="hidden-image-container" style={dynamicStyle}>
          <img style={{ width: "100%" }} src={this.props.rightImage} />
        </div>
      </div>
    );
  }
}

export default AlterImage;
