import "./app_header.css";

import React, { Component } from "react";
import { Button, Col, Row } from "antd";
import carLogo from "../car.png";

class AppHeader extends Component {
  render() {
    return (
      <div>
        <div className="app-header">
          <Row>
            <Col span={3}>
              <div className="title">EVCharge</div>
            </Col>
            <Col span={2}>
              <div className="operate-btn">
                <Button
                  className="btn-register"
                  type="text"
                  onClick={this.props.change}
                >
                  Register
                </Button>
                <Button
                  className="btn-login"
                  type="text"
                  onClick={this.props.change}
                >
                  Login
                </Button>
              </div>
            </Col>
          </Row>
        </div>
        <div className="app-image">
          <img className="header-image" src={carLogo} />
        </div>
      </div>
    );
  }
}

export default AppHeader;
