import React, {Component} from 'react';
import "../../../assets/style/viewsStyle/LearnBake/AllLesson.css"
import {Link} from "react-router-dom"
import {
    connect
} from "react-redux"
import {
    bindActionCreators
}  from 'redux';
import LearnBakeDataCreator,{changeLearnBakeList} from '../../../store/actionCreator/LearnBake'
class AllLesson extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {   
        const {AllLessonList} = this.props
        // console.log(AllLessonList,111111111)
        return (
            <div>
               <div className={"lessonwrap"}>
                   
                   {
                       AllLessonList.map((v)=>(
                        <ul>
                        <li>
                        <Link to={{pathname:'/lesson/contentId='+(v.educationCourseId),state:{categoryId:v.educationCourseId}}}>
                            <img src={v.image} alt=""/>
                        </Link>
                            
                            <p>{v.title}</p>
                        </li>
                        </ul>
                    ))
                   }
                   
               </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.getAllLesson.call(this)
        
    }
}
function mapStateToProps(state){
    console.log(11112222,state.learnBakeData)
    return {
        AllLessonList:state.learnBakeData.AllLessonList,
        
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(LearnBakeDataCreator,dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(AllLesson);

