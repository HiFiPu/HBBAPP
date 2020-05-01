import React, {Component} from 'react';
import {Button} from 'antd-mobile'
export default class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
              <Button type="primary">This is a button</Button>
            </div>
        )
    }
    componentDidMount() {

    }
}