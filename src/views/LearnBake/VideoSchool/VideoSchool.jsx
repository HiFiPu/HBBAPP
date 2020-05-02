import React, { Component} from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
import Fd from './Fd'
export default class Index extends Component {
    constructor(props) {
        super(props);        
    }
    switchData(a,b){
        if(a.title==='推荐'){
            console.log(a,b)
        }
    }
    renderContent = tab =>
        (<div style={{ display: 'flex', flexDirection: 'column',justifyContent: 'center', backgroundColor: '#fff' }}>
           {tab.title==='推荐'?(<Fd></Fd>):2}
            {/* <Fd></Fd> */}
        </div>);
    render() {
        const tabs=[{title:'推荐'}]
        console.log('111111',this.props)
        console.log('VideoSchool.....',this.props.ackstore.ackstore.ack.category.category)
        this.props.ackstore.ackstore.ack.category.category.map(v=>{
            tabs.push({
                title:v.title ,
                key:v.categoryId
            })
        })
        return (
            <div>
                <Tabs swipeable={false} onTabClick={this.switchData.bind(this,{a:1})} tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}>
                    {this.renderContent}
                </Tabs>
                <h1>11</h1>
            </div>
        )
    }
    componentDidMount() {
      
    }
}