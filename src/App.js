import "./App.css";
import AppHeader from "./components/app_header";
import AlterImage from "./components/AlterImage";
import React, { useState } from "react";
import JoinUsBlock from "./components/JoinUsBlock";
import LowCarbonBlock from "./components/LowCarbonBlock";
import AdvantageBlock from "./components/AdvantageBlock";
import AppBottom from "./components/app-bottom";
import ModalForm from "./components/ModalForm";
import rightImg1 from "./rightimg-1.png";
import rightImg2 from "./rightimg-2.png";
import rightImg3 from "./righting-3.png";

function App() {
  const [showDialog, setShowDialog] = useState(false);

  const showDialogEvent = () => {
    setShowDialog(true);
  };

  const closeDialogEvent = () => {
    setShowDialog(false);
  };

  return (
    <div className="App">
      <AppHeader change={showDialogEvent}></AppHeader>
      <div className={"img-block"}>
        <div>
          <AlterImage
            leftImage={rightImg1}
            rightImage={rightImg1}
            btnText="Show on Map"
            btnShow={true}
          />
        </div>
        <div>
          <AlterImage
            leftImage={rightImg2}
            rightImage={rightImg2}
            btnText={"See More Details"}
            btnShow={true}
          />
        </div>
        <div>
          <AlterImage
            leftImage={rightImg3}
            rightImage={rightImg3}
            btnText="Contact Now"
            btnShow={true}
          />
        </div>
      </div>
      <JoinUsBlock />
      <LowCarbonBlock />
      <AdvantageBlock />
      <AppBottom />
      <ModalForm showDialog={showDialog} closeEvent={closeDialogEvent} />
    </div>
  );
}

export default App;
