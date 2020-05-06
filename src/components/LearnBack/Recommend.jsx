import React, {Component} from 'react';
import Category from './Category'
export default class Index extends Component {
    constructor(props) {
        super(props);
        
    }
    // length=this.props.length
    render() {
        // console.log(this.props,'LLLLLLLLLLLLLLLLLLLLL')
        // this.props.length==8
        // console.lo
        // console.log('PPPPPPPPPPPPPPPP',this.props.length)
        const {CategoryList} = this.props
        return (
       
           
            <div>
                {
                    CategoryList.map(v=>(
                    <div key={v.categoryId}>
                        <div className={"top"}>
                            <h2>{v.title}</h2>
                            <a href="">查看全部</a>
                        </div>
                            {
                            <Category {...v} ></Category> 
                           }
                    </div>
                    ))
                    } 
            </div>
        )
    }
    componentDidMount() {

    }
}