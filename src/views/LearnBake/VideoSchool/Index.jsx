import React, {Component} from 'react';
import TabScroll from './VideoSchool'
export default class Index extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        console.log('999',this.props)
        return (
            <div>
                <TabScroll ackstore={this.props}></TabScroll>
            </div>
        )
    }
    componentDidMount() {

    }
}