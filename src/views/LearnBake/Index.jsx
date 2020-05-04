import React, {Component} from 'react';
import "../../assets/style/viewsStyle/xhp.css"
import {Link} from "react-router-dom"
import {
    connect
} from "react-redux"
import {
    bindActionCreators
}  from 'redux';
import Category from "../../components//LearnBack/Category";
import RecommendCourse from "../../components/LearnBack/RecommendCourse"
import LearnBakeDataCreator,{changeLearnBakeList} from '../../store/actionCreator/LearnBake'
 class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {CategoryList,RecommendCourseList} = this.props;
        // console.log(33333,this.props.ack)
        // console.log(132,CategoryList)
        // console.log(132111,RecommendCourseList)
        return (
            <div>
                {/* 头部  */}
                <header>
                    <img className={'title'} src={require('../../assets/images/head1.png')} alt={''}/>
                    <div>
                        <span>
                            <img src={require('../../assets/images/head2.png')} alt={''}/>
                        </span>
                        <span>搜索食谱/食材，烘焙/家常菜一应俱全</span>
                    </div>
                    <img  className={'title'} src={require('../../assets/images/head3.png')} alt={""}/>
                </header>

                {/* 头部导航栏 */}
                <nav>
                     <Link to="/skills">
                         <figure>
                             <img src={require('../../assets/images/nav1.png')} alt=""/>
                         </figure>
                         <figcaption>技巧百科</figcaption>
                     </Link>
                     <Link to="/university">
                         <figure>
                             <img src={require('../../assets/images/nav2.png')} alt=""/>
                         </figure>
                         <figcaption>视频学堂</figcaption>
                     </Link>
                     <Link to="/Novice">
                         <figure>
                             <img src={require('../../assets/images/nav3.png')} alt=""/>
                         </figure>
                         <figcaption>新手教程</figcaption>
                     </Link>
                     <Link to="/classify">
                         <figure>
                             <img src={require('../../assets/images/nav4.png')} alt=""/>
                         </figure>
                         <figcaption>食品分类</figcaption>
                     </Link>
                </nav>

                {/* 主体内容 */}

                <div className={"content"}>
                    {/* 推荐课程 */}
                    <div>
                        <div className={"top"}>
                            <h2>推荐课程</h2>
                        </div>
                        {
                            <RecommendCourse RecommendCourseList={RecommendCourseList}></RecommendCourse>
                        }
                        
                    </div>
                    {/* 元气早餐 */}

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

                {/* 尾部导航 */}
                <footer>
                    <p>
                        Copyright © hongbeibang.com 粤ICP备14090926号-1
                    </p>
                    <p>
                        <img src={require('../../assets/images/footer1.png')} alt=""/>
                        <span>粤公网安备 44060602001356号</span>
                    </p>
                </footer>
            </div>
        )
    }
    componentDidMount() {
       
        this.props.getLearnBakeCategory.call(this);
        this.props.getLearnBakeCourse.call(this);
        // console.log(22221111,this.props)
    }
}
    function mapStateToProps(state){
        // console.log(121122,state)
        return {
            CategoryList:state.learnBakeData.CategoryList,
            RecommendCourseList:state.learnBakeData.RecommendCourseList
        }
    }
    function mapDispatchToProps(dispatch){
        return bindActionCreators(LearnBakeDataCreator,dispatch);
    }
    export default connect(mapStateToProps,mapDispatchToProps)(Index);
