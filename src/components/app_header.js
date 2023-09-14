import "./app_header.css";

import React from "react";
import { Button, Col, Row } from "antd";
import carLogo from "../car.png";

function AppHeader(props) {
  return (
    <>
      <div className="app-header">
        <Row>
          <Col span={3}>
            <div className="title">EV Shared Charger</div>
          </Col>
          <Col span={2}>
            <div className="operate-btn">
              <Button
                className="btn-register"
                type="text"
                onClick={props.change}
              >
                Register
              </Button>
              <Button className="btn-login" type="text" onClick={props.change}>
                Login
              </Button>
            </div>
          </Col>
        </Row>
      </div>
      <div className="app-image">
        <img className="header-image" src={carLogo} alt="car" />
      </div>
    </>
  );
}

export default AppHeader;
