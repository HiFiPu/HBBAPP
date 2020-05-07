import React, {Component} from 'react';
import '../../assets/style/viewsStyle/xhp.css'
import { Carousel, WingBlank } from 'antd-mobile';
import {Link}from 'react-router-dom'
export default class RecommendCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgHeight: 176,
        };
    }
    render() {
        // console.log(666,this.props.RecommendCourseList)
        return (
            
            <WingBlank>
                 <Carousel className="space-carousel"
                // frameOverflow="visible"
                   cellSpacing={1}
                   slideWidth={0.5}
                   autoplay
                   infinite
                   dots={0}
                   swipeSpeed={12}
                 //   beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                 //   afterChange={index => this.setState({ slideIndex: index })}
                 >
                  {
                        this.props.RecommendCourseList.map((item)=>(
                        <ul key={item.clientId}>
                            <li className={"goods"}  >
                             <Link to={{pathname:'/lesson/categoryId='+(item.courseId),state:{categoryId:item.courseId}}}>
                             <img src={item.coverImage} alt=""
                                />
                             </Link> 
                               
                                <div className={"course-tro"}>{item.coverTitle}</div>
                            </li>
                        </ul>
                        ))
                     }
                 </Carousel>
            </WingBlank>


        
        )
    }
           
}

