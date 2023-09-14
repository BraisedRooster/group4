import "./LowCarbonBlock.css";
import React from "react";
import Img1 from "../part4-1.png";
import Img2 from "../part4-2.png";
import Img3 from "../part4-3.png";
import { Col, Row } from "antd";

function AdvantageBlock() {
  return (
    <div className={"block-content"}>
      <div className={"block-title"}>Our Advantages</div>
      <div style={{ paddingLeft: "10%", paddingRight: "10%" }}>
        <Row>
          <Col span={8}>
            <div>
              <img width={"60%"} src={Img1} alt="1" />
            </div>
          </Col>
          <Col span={8}>
            <div>
              <img width={"60%"} src={Img2} alt="2" />
            </div>
          </Col>
          <Col span={8}>
            <div>
              <img width={"60%"} src={Img3} alt="3" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AdvantageBlock;
