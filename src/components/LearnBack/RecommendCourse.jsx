import React, {Component} from 'react';
import '../../assets/style/viewsStyle/xhp.css'
import { Carousel, WingBlank } from 'antd-mobile';
export default class RecommendCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgHeight: 176,
        };
    }
    render() {
        // console.log(666,this.props)
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
                                <img src={item.coverImage} alt=""
                                />
                                <div>{item.coverTitle}</div>
                            </li>
                        </ul>
                        ))
                     }
                 </Carousel>
            </WingBlank>


        
        )
    }
           
}

