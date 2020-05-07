import React, {Component} from 'react';
import '../../assets/style/viewsStyle/xhp.css'
import { Carousel, WingBlank } from 'antd-mobile';
import {Link}from 'react-router-dom'
export default class Category extends Component {
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
                   {this.props.item.map((item) => (
                     <ul key={item.categoryId}>
                     { 
                         <li className={"goods"}>
                             <Link to={{pathname:'/lesson/contentId='+(item.educationCourseId),state:{categoryId:item.educationCourseId}}}>
                             <img src={item.verticalImages} alt=""/>
                             </Link>
                             <div>{item.shareTitle}</div>
                         </li> 
                         }
                     </ul>
                   ))}
                 </Carousel>
            </WingBlank>


        //     <WingBlank>
        //       <Carousel className="space-carousel"
        //         frameOverflow="visible"
        //         cellSpacing={10}
        //         slideWidth={0.8}
        //         autoplay
        //         infinite
        //         beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        //         afterChange={index => this.setState({ slideIndex: index })}
        //       >
        //         {this.props.item.map((v, index) => (
        //           <a
        //             key={v.categoryItemId}
        //             href="http://www.alipay.com"
        //             style={{
        //               display: 'block',
        //               position: 'relative',
        //               top: this.state.slideIndex === index ? -10 : 0,
        //               height: this.state.imgHeight,
                      
        //             }}
        //           >
        //             <img
        //               src={v.verticalImages}
        //               alt=""
        //               style={{ width: '100%', verticalAlign: 'top' }}
        //               onLoad={() => {
        //                 // fire window resize event to change height
        //                 window.dispatchEvent(new Event('resize'));
        //                 this.setState({ imgHeight: 'auto' });
        //               }}
        //             />
        //             <div>{v.shareTitle}</div>
        //           </a>
        //         ))}
        //       </Carousel>
        //     </WingBlank>
        )
    }
           
}

