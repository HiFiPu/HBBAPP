import learnBakeDataInit from '../../state/LearnBake'
import learnBakeDataType from '../../actionType/LearnBake'
export default function (state=learnBakeDataInit,{type,payload}) {
    state = JSON.parse(JSON.stringify(state))
    // console.log(000000,payload)
    if (type===learnBakeDataType.CHANGE_CATEGORY){
        state.category = payload
    }
    else if (type===learnBakeDataType.CHANGE_CONTENTS){
        state.RecommendList = payload
    }

    else if (type===learnBakeDataType.ADD_CATEGORY){
        state.CategoryList = payload
    }
    // 推荐课程
    else if (type===learnBakeDataType.ADD_COURSE){
        state.RecommendCourseList = payload
    }
    else if(type===learnBakeDataType.GET_CLASSIFY_RECOMMEND){
        state.ClassifyRecommendData=payload
    }
    else if(type===learnBakeDataType.GET_CLASSIFY_OTHER)   {
        state.ClassifyOtherData=payload
    }
    else if(type===learnBakeDataType.GET_LESSON)   {
        state.lessonList=payload
        state.IntroduceList=payload.introduces
    }
    else if(type===learnBakeDataType.GET_ALLLESSON)   {
        state.AllLessonList=payload
        
    }
    return state
}