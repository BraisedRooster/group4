import './app_part3.css';
import React, {Component} from 'react';
import Img1 from '../part3-1.jpg'
import Img2 from '../part3-2.jpg'
import Img3 from '../part3-3.jpg'
import {Col, Row} from "antd";

class LowCarbonBlock extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className={'block-content'}>
                <div className={'block-title'}>
                    contribute to low-carbon travel
                </div>
                <div style={{paddingLeft: '10%', paddingRight: '10%'}}>
                    <Row>
                        <Col span={8}>
                            <div>
                                <img width={'50%'} src={Img1}/>
                                <div className={'description'}>total charging</div>
                                <div className={'num-description'}>
                                    <font size={6} color={'blue'}> 219634 </font> kwh
                                </div>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div>
                                <img width={'50%'} src={Img2}/>
                                <div className={'description'}> CO2 emission reduction</div>
                                <div className={'num-description'}>
                                    <font size={6} color={'orange'}> 3684517 </font> kg
                                </div>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div>
                                <img width={'50%'} src={Img3}/>
                                <div className={'description'}> fuel savings</div>
                                <div className={'num-description'}>
                                    <font size={6} color={'red'}> 1058726 </font> L
                                </div>
                            </div>
                        </Col>
                    </Row>


                </div>
            </div>
        )
    }
}

export default LowCarbonBlock