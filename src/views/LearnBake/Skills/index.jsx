import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import "../../../assets/style/viewsStyle/LearnBake/Skills.css";
import {
    connect
} from "react-redux";
import skillsActionCreator from "../../../store/actionCreator/LearnBake/Skills"


class Skills extends Component {
    constructor(props) {
        super(props);
        this.backClick = this.backClick.bind(this);
    }
    backClick(){
         this.props.history.go(-1)
    }

    render() {
        const {courseGuide} = this.props;
        // console.log(222999,courseGuide);
        return (
            <div>
                <header>
                    {/* <!-- 点击返回首页 --> */}
                    <a>
                        <img onTouchStart={this.backClick}  src={require("../../../assets/images/jiantou.png")}/>
                    </a>
                </header>
                {/* <!-- 内容 --> */}
                <section>
                    {
                        courseGuide.map(v=>(
                            <Link to={{pathname:'/details/contentId='+(v.courseId),state:{courseId:v.courseId
                            }}}>
                                <div key={v.contentId}>
                                    <img src={v.image}/>
                                    <p>{v.title}</p>
                                </div>
                            </Link>
                        ))
                    }
                   
                </section>

                {/* <!-- 底部 --> */}
                <div className={"feet"}>
                    <img src="https://image.hongbeibang.com/FqrNwXey8HDGxtROft8FVPUMPEwE"/>
                </div>
            </div>
        )
    } 
    componentDidMount() {
        this.props.getNewbieGuide.call(this);
        // console.log(55555,this.props)
    }
}
function mapStateToProps(state){
    // console.log(44444,state)
    return {
        type:state.Skills.type,
        courseGuide:state.Skills.courseGuide
    }
}
function mapDispatchToProps(dispatch){
    return {
        async getNewbieGuide(){
            // console.log(99,this.props)
            const {data} = await axios.get("/education/getNewbieGuide",{
                params:{
                    type:this.props.type,
                }
            });
            // console.log(111,data);
            dispatch(skillsActionCreator(data));
            // dispatch({
            //     type:"UP_SKILLS",
            //     payload:data.courseGuide
            // })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Skills);