import React, { Component } from 'react';
import { Button, WhiteSpace, WingBlank, Flex } from 'antd-mobile';
export default class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <WhiteSpace />
                <WhiteSpace />
                <WhiteSpace />
                <WhiteSpace />
                <Button type="primary">请使用微信登陆</Button><WhiteSpace />
            </div>
        )
    }
    
    componentDidMount() {

    }
}