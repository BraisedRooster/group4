import './app_part3.css';
import React, {Component} from 'react';
import Img1 from '../part4-1.jpg'
import Img2 from '../part4-2.jpg'
import Img3 from '../part4-3.jpg'
import {Col, Row} from "antd";

class AdvantageBlock extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className={'block-content'}>
                <div className={'block-title'}>
                    Our Advantages
                </div>
                <div style={{paddingLeft: '10%', paddingRight: '10%'}}>
                    <Row>
                        <Col span={8}>
                            <div>
                                <img width={'60%'} src={Img1}/>
                                <div className={'description'}>Online Communication</div>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div>
                                <img width={'60%'} src={Img2}/>
                                <div className={'description'}> Self-register charging pile</div>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div>
                                <img width={'60%'} src={Img3}/>
                                <div className={'description'}> Online Payment</div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default AdvantageBlock