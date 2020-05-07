import React, {Component} from 'react';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import "../../../assets/style/viewsStyle/LearnBake/Lesson.css"
// import "../../../assets/style/viewsStyle/xhp.css"
import RecommendCourse from '../../../components/LearnBack/RecommendCourse'
import {Link} from "react-router-dom"
import {
    connect
} from "react-redux"
import {
    bindActionCreators
}  from 'redux';
import LearnBakeDataCreator,{changeLearnBakeList} from '../../../store/actionCreator/LearnBake'
class Lesson extends Component {
    constructor(props) {
        super(props);
    }
    // https://api.hongbeibang.com/education/getCourse?_t=1588794403067&educationCourseId=10589
    render() {
        const p=<p></p>
        const {LessonList} = this.props;
        const {IntroduceList}=this.props
        // console.log(7777,this.props)
        // console.log(5555555,IntroduceList)
        if(LessonList.buyNum>1000){
            LessonList.buyNum='1000+'
        }
        return (
            <div>
                {/* top */}
                <div className={"lesson-video"}>
                    <video controls="controls" autoplay={"autoplay"} poster={LessonList.image}>
                        <source src={LessonList.playURL2} />
                    </video>
                    <div className={"video-main"}>
                        <p>{LessonList.title}</p>
                        <div className={"video-bottom"}>
                            <img src="https://image.hongbeibang.com/FgRQxfAWq4kOdLc5xd_GxWm03Vs_?54X54&imageView2/1/w/54/h/54" alt=""/>
                            <span>{LessonList.buyNum}人在学</span>
                            <div >
                                <img src="https://image.hongbeibang.com/FvlaRxbO9YVI0n8uMoFepUzffkWK?imageView2/1/w/640/h/640" alt=""/>
                                <span>试看课程</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className={"perpetual"}>
                    <div className={"perpetual-main"}>
                       <div></div>
                       <div>永久回看</div>
                       <div></div>
                       <div>报名即学</div>
                       <div></div>
                       <div>自营课程</div>
                       <div></div>
                       <div>高效学习体验</div>
                    </div>
                    <div className={"perpetual-main"}>
                       <div></div>
                       <div>分步骤学</div>
                       <div></div>
                       <div>唯一品类</div>
                       <div></div>
                       <div>图片下载</div>
                       <div></div>
                       <div>工具材料参考</div>
                    </div>
                </div>
{/* 
                <div className={"homework"}>
                    <div className={"home-top"}>
                        <h2>学员作业</h2>
                        <span>查看更多</span>
                    </div>
                    <div className={"home-bottom"}>
                        <img src="https://image.hongbeibang.com/lm41pYhe8RS1IG2rHCnfU-s8ZJk9?6000X8000&imageView2/1/w/640/h/640" alt=""/>
                        <img src="https://image.hongbeibang.com/lm41pYhe8RS1IG2rHCnfU-s8ZJk9?6000X8000&imageView2/1/w/640/h/640" alt=""/>
                        <img src="https://image.hongbeibang.com/lm41pYhe8RS1IG2rHCnfU-s8ZJk9?6000X8000&imageView2/1/w/640/h/640" alt=""/>
                        <img src="https://image.hongbeibang.com/lm41pYhe8RS1IG2rHCnfU-s8ZJk9?6000X8000&imageView2/1/w/640/h/640" alt=""/>
                    </div>
                </div> */}
                <div class={"more"}>
                    {
                        IntroduceList.map(v=>(
                            <div className={"more-main"} key={v.educationCourseSummaryExtendId} >
                                <h2>{v.title}</h2>
                                <p dangerouslySetInnerHTML={{ __html:v.introduce }}></p>
                            </div>
                            ))
                    }
                </div>

                <div className={"teacher"}>
                    <h2>导师介绍</h2>
                    <div className={"teacher-intro"}>
                        <img src={LessonList.teacherImage} alt=""/>
                        <span>{LessonList.teacherName}</span>
                    </div>
                    <p dangerouslySetInnerHTML={{ __html:LessonList.teacherIntroduce }}></p>  
                </div>
                <div className={"moreCourse"}>
                    <h2>导师的其他课程</h2>
                    <span>查看更多</span>
                    {
                        <RecommendCourse RecommendCourseList={this.props.RecommendCourseList}></RecommendCourse>
                    }
                </div>

                <div className={"lesson-bottom"}>
                    <img src="https://image.hongbeibang.com/FgyNuZ8yE795vzF-O4lGF3G5Caxr?551X245&imageView2/1/w/551/h/242" alt=""/>
                    <p>烘焙帮学堂，是由烘焙帮推出的课程品牌，通过官方自制的教学视频，用科学的烘焙配方、细致的步骤讲解、贴心的答疑服务，让烘焙更简单！</p>
                    <div>
                        <div>
                            <img src="https://image.hongbeibang.com/FvihrbO1twdtKSkz2WqB9KxUjjeg?100X116&imageView2/1/w/100/h/116" alt=""/>
                            <span>蛋糕</span>
                        </div>
                        <div>
                            <img src="https://image.hongbeibang.com/Frs8TmZhk4PrxBY2cvA9e3jbbdrB?100X116&imageView2/1/w/100/h/116" alt=""/>
                            <span>甜点</span>
                        </div>
                        <div>
                            <img src="https://image.hongbeibang.com/ForyDTluoYKimnQmobG6agmowKzy?100X116&imageView2/1/w/100/h/116" alt=""/>
                            <span>面包</span>
                        </div>
                        <div>
                            <img src="https://image.hongbeibang.com/FuCKHBljrYAFuTjTs0B1fkNcUhWw?100X116&imageView2/1/w/100/h/116" alt=""/>
                            <span>中式点心</span>
                        </div>

                    </div>
                   
                </div>
                
                 
                {/* <!-- 底部 --> */}
                <div className={"foot"}>
                    <li>
                        <img src={require("../../../assets/images/geng.png")} />
                        <span>更多课程</span>
                    </li>
                    <li>
                        <img src={require("../../../assets/images/zi.png")} />
                        <span>咨询</span>
                    </li>
                    <div>
                        <p>
                        <span>&nbsp;¥</span><span>{LessonList.preDiscountPrice}</span>
                        </p>
                        <span>&nbsp;¥</span><span>{LessonList.price}</span><span>&nbsp;购买专栏</span>
                    </div>
                </div> 
            </div>
        )
    }
    componentDidMount() {
        this.props.getLesson.call(this)
        this.props.getLearnBakeCourse.call(this);
    }
}
function mapStateToProps(state){
    // console.log(11112222,state.learnBakeData)
    return {
        LessonList:state.learnBakeData.lessonList,
        IntroduceList:state.learnBakeData.IntroduceList,
        RecommendCourseList:state.learnBakeData.RecommendCourseList
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(LearnBakeDataCreator,dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(Lesson);

