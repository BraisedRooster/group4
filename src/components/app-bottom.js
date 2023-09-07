import './app-bottom.css';
import React, {Component} from 'react';
import {Button} from "antd";

class AppBottom extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className={'bottom-content'}>
                <div className={'title-content'}>
                    there is always one that suits you
                </div>
                <Button style={{marginTop: '10px'}} shape={'round'}> sign up now </Button>
            </div>
        )
    }
}

export default AppBottom