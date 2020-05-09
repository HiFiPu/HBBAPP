import React, { Component } from 'react';
import { Button, WhiteSpace, WingBlank, Flex } from 'antd-mobile';
import '../../assets/style/viewsStyle/login.css'
export default class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'login-content'}>
                <div className={'login-content-img-c'}>
                    <img
                        alt="" title="" src="https://image.hongbeibang.com/FoBGm71FF5SYiTw0Wc0xkeiL3eQz?imageMogr2/strip/thumbnail/510x510" className={'login-content-img'}/>
                </div>
                <div className={'login-content-login'}>
                    <div className={'login-content-login-text'}>使用微信登陆</div>
                </div>
            </div>
        )
    }

    componentDidMount() {

    }
}