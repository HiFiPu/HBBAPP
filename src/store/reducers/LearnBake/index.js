import learnBakeDataInit from '../../state/LearnBake'
import learnBakeDataType from '../../actionType/LearnBake'
export default function (state=learnBakeDataInit,{type,payload}) {
    state = JSON.parse(JSON.stringify(state))
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
    return state
}