import "./app_part2.css";
import React, { Component } from "react";
import Img1 from "../part2-1.png";
import Img2 from "../part2-2.jpg";
import Img3 from "../part2-3.jpg";
import Img4 from "../part2-4.jpg";
import Img5 from "../part2-5.jpg";
class JoinUsBlock extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={"block-content"}>
        <div className={"bigHeader"}>FIVE REASONS TO JOIN US</div>

        <div>EVcharge more than charging</div>
        <div className={"reasonDiv"}>
          <div>
            <img className={"reasonImg"} src={Img1} alt="11" />
          </div>
          <div>
            <img className={"reasonImg"} src={Img2} alt="2" />
          </div>
          <div>
            <img className={"reasonImg"} src={Img3} alt="3" />
          </div>
          <div>
            <img className={"reasonImg"} src={Img4} alt="4" />
          </div>
          <div>
            <img className={"reasonImg"} src={Img5} alt="5" />
          </div>
        </div>
      </div>
    );
  }
}

export default JoinUsBlock;
