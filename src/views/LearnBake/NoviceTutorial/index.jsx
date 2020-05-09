import React, {Component} from 'react';
import "../../../assets/style/viewsStyle/LearnBake/NoviceTutorial.css";
import axios from "axios";
import {Link} from "react-router-dom";
import {
    connect
} from "react-redux";
import noviceActionCreator from "../../../store/actionCreator/LearnBake/NoviceTutorial"




class Novice extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {novice}  = this.props;
        const introduces = this.props.introduces;
        console.log(11111,introduces)
        
        return (
            <div>
                <div className={"intro"}>
                    <li>
                        <img src={novice.image} alt=""/>
                    </li>
                    <div className={"name"}>
                            <h2>{novice.title}</h2>
                            <p>
                                <img src={require("../../../assets/images/user.png")} />
                                <span>{novice.buyNum}</span>
                                <span>人在学</span>
                            </p>
                        </div>
                    <div className={"service"}>
                            <ul>
                                <li>
                                    <div></div>
                                    <span>永久回看</span>
                                </li>
                                <li>
                                    <div></div>
                                    <span>报名即学</span>
                                </li>
                                <li>
                                    <div></div>
                                    <span>自学课程</span>
                                </li>
                                <li>
                                    <div></div>
                                    <span>高效学习体验</span>
                                </li>
                                <li>
                                    <div></div>
                                    <span>分步骤学</span>
                                </li>
                                <li>
                                    <div></div>
                                    <span>自学品类</span>
                                </li>
                                <li>
                                    <div></div>
                                    <span>图片下载</span>
                                </li>
                                <li>
                                    <div></div>
                                    <span>工具材料参考</span>
                                </li>
                            </ul>
                            <p>
                                <img src={require("../../../assets/images/you.png")} alt=""/>
                            </p>
                        </div>
                    <div className={"kind"}>
                            <span className={"active"}>课程介绍</span>                     
                            <span>课程目录</span>
                            <span>课程作业</span>
                        </div>
                        {/* <!-- 内容 --> */}
                    <div className={"include"}>
                        {
                            introduces.map(v=>(
                                <div className={"datails"} key={v.educationCourseSummaryExtendId}>
                                <h4>{v.title}</h4>
                                <div className={"explain"}>
                                    <p dangerouslySetInnerHTML={{ __html:v.introduce }}></p>
                                </div>
                            </div>
                            ))
                        }
                        
                        <div className={"classroom"}>
                            <img src="https://image.hongbeibang.com/FgyNuZ8yE795vzF-O4lGF3G5Caxr?551X245&imageView2/1/w/551/h/242" />
                            <p>烘焙帮学堂，是由烘焙帮推出的课程品牌，通过官方自制的教学视频，用科学的烘焙配方、细致的步骤讲解、贴心的答疑服务，让烘焙更简单！</p>
                            <div>
                                <li>
                                    <img src="https://image.hongbeibang.com/FvihrbO1twdtKSkz2WqB9KxUjjeg?100X116&imageView2/1/w/100/h/116" alt=""/>
                                    <span>蛋糕</span>
                                </li>
                                <li>
                                    <img src="https://image.hongbeibang.com/Frs8TmZhk4PrxBY2cvA9e3jbbdrB?100X116&imageView2/1/w/100/h/116" alt=""/>
                                    <span>甜点</span>
                                </li>
                                <li>
                                    <img src="https://image.hongbeibang.com/ForyDTluoYKimnQmobG6agmowKzy?100X116&imageView2/1/w/100/h/116" alt=""/>
                                    <span>面包</span>
                                </li>
                                <li>
                                    <img src="https://image.hongbeibang.com/FuCKHBljrYAFuTjTs0B1fkNcUhWw?100X116&imageView2/1/w/100/h/116" alt=""/>
                                    <span>中式点心</span>
                                </li>
                            </div>
                            
                        </div>
                    </div>
                </div>
                {/* <!-- 底部 --> */}
                <div className={"foot"}>
                    
                    <li>
                        <Link to={"/university"}>
                            <img src={require("../../../assets/images/geng.png")} />
                            <span>更多课程</span>
                        </Link>
                    </li>
                    <li>
                        <img src={require("../../../assets/images/zi.png")} />
                        <span>咨询</span>
                    </li>
                    <div>
                        <p>
                    <span>&nbsp;¥</span><span>{novice.originPrice}</span>
                        </p>
                    <span>&nbsp;¥</span><span>{novice.preDiscountPrice}</span><span>&nbsp;购买专栏</span>
                    </div>
                </div>
            
            </div>
        )
    }
    componentDidMount() {
        this.props.getCourse.call(this)
        // console.log(9999,this.props)
    }
}
function mapStateToProps(state){
    return {
        educationCourseId:state.Novice.educationCourseId,
        novice:state.Novice.novice,
        introduces:state.Novice.introduces
    }
}
function mapDispatchToProps(dispatch){
    return {
        async getCourse(){
            // console.log(3232322,this.props)
            const {data} = await axios.get("/education/getCourse",{
                params:{
                    educationCourseId:this.props.educationCourseId,
                    novice:this.props.novice
                }
            });
            // console.log(111111,data);
            dispatch(noviceActionCreator(data))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Novice); 