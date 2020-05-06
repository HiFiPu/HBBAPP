import React, { Component} from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
import Recommend from './Recommend'
import Recommendx from './Recommendx'
import axios from 'axios'
export default class Index extends Component {
    constructor(props) {
        super(props);        
    }
    CategoryList=[]
    id = 1
    async getTypeList(categoryId){
        const {data} = await axios.get('/index/getIndexItem',{params:{
            _t: Date.now(),
            csrfToken:'' ,
            categoryId
        }})
        this.CategoryList=data
        console.log(this.CategoryList,'VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV')
    }
    switchData(a,b){
        if(b.categoryId<2){
            this.id=1
        }else{
            this.id=b.categoryId
        }
       
        // console.log(this.id,this.props)
        if(this.id>2){
            this.getTypeList(this.id)
        }
    }
    
    renderContent = tab =>
        (<div style={{ display: 'flex', flexDirection: 'column',justifyContent: 'center', backgroundColor: '#fff' }}>
          {tab.categoryId!=this.id?<Recommend></Recommend>:<Recommendx CategoryList={this.CategoryList}></Recommendx>}
           {/* {if(tab.categoryId===0){<div>111</div>}} */}
        </div>);
    render() {
        const tabs=[{title:'推荐',categoryId:0}]
        // console.log('111111',this.props)
        // console.log('VideoSchool.....',this.props.ackstore.ackstore.ack.category.category)
        this.props.ackstore.ackstore.ack.category.category.map(v=>{
            tabs.push({
                title:v.title ,
                categoryId:v.categoryId
            })
        })
        console.log(tabs,'PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP')
        return (
            <div>
                <Tabs swipeable={false} onTabClick={this.switchData.bind(this,{a:1})} tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}>
                    {this.renderContent}
                </Tabs>
                {/* <h1>11</h1> */}
            </div>
        )
    }
    componentDidMount() {
      
    }
}