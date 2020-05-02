import React, {Component} from 'react';
import TabScroll from './VideoSchool'
import Banner from './Banner'
export default class Index extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        console.log('999',this.props)
        return (
            <div>
              <h1>我来了</h1>
              <Banner></Banner>
            </div>
        )
    }
    componentDidMount() {

    }
}