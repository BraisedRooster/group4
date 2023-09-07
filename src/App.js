import './App.css';
import AppHeader from "./components/app_header";
import AlterImage from "./components/app_part1";
import React, {Component, useState} from "react";
import JoinUsBlock from "./components/app_part2";
import LowCarbonBlock from "./components/app_part3";
import AdvantageBlock from "./components/app_part4";
import AppBottom from "./components/app-bottom";
import ModalForm from "./components/ModalForm";

class App extends Component {
    constructor() {
        super();
        this.state = {
            showDialog: false
        }
    }

    showDialogEvent = () => {
        this.setState({
            showDialog: true
        })
    }

    closeDialogEvent = () => {
        this.setState({
            showDialog: false
        })
    }

    render() {
        return (
            <div className="App">
                <AppHeader change={this.showDialogEvent.bind(this)}></AppHeader>
                <div className={'img-block'}>
                    <div>
                        <AlterImage leftImage="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                    rightImage="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                    btnText="Download"
                                    btnShow={true}
                        ></AlterImage>
                    </div>
                    <div>
                        <AlterImage leftImage="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                    rightImage="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                    btnText={'See More Details'}
                                    btnShow={true}
                        ></AlterImage>
                    </div>
                    <div>
                        <AlterImage leftImage="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                    rightImage="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                    btnText="Contact Now"
                                    btnShow={true}
                        ></AlterImage>
                    </div>
                </div>
                <JoinUsBlock></JoinUsBlock>
                <LowCarbonBlock></LowCarbonBlock>
                <AdvantageBlock></AdvantageBlock>
                <AppBottom></AppBottom>
                <ModalForm showDialog={this.state.showDialog}
                           closeEvent={this.closeDialogEvent.bind(this)}
                >

                </ModalForm>
            </div>
        );
    }
}

export default App;
