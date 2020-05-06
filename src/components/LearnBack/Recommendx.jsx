import React, { Component } from 'react';
import Category from './Category'
import '../../assets/style/viewsStyle/LearnBake/Recommendx.css'
export default class Index extends Component {
    constructor(props) {
        super(props);

    }
    
    render() {
        
        const { CategoryList } = this.props
        console.log('PPPPPPPPPPPPPPPP', CategoryList)
        return (
            <div className={'xx'}>
             {
                 CategoryList.map((v,i)=>
                 
             ( <div>
     <div className={"cx-war"}>
                    <div className="cx-war-listwar">
                            <div className="cx-war-listwar-c1">
                                <div className="cx-war-listwar-c2">
                                    <img alt="" title="" src={v.verticalImages[0]} className="cx-war-listwar-c2-img"/>
                                    <div className="cx-war-listwar-c2-img-lv"><span>1000+</span><span>人参加</span></div>
                                </div>
             <div className="cx-war-listwar-c2-img-title">{v.title}</div>
                            </div>
                    </div>
                  </div>
             </div>)
               
                 
                 )
                 
             }
		    </div>
               
                
        )
    }
    componentDidMount() {

    }
}