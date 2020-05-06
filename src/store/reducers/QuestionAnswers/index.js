import questionsDataInit from '../../state/QuestionAnswers'
import questionsDataType from '../../actionType/QuestionAnswers'
export default function (state=questionsDataInit,{type,payload}) {
    state = JSON.parse(JSON.stringify(state))
    // console.log(666666622,payload)
    // state.pageIndex=payload.pageIndex
    // state.pageSize=payload.pageSize
    if (type===questionsDataType.ADD_QUESTIONSESSENCE){
        // state.pageIndex=payload.pageIndex
        state.EssenceQuestionsList = payload
    }else if(type===questionsDataType.ADD_QUESTIONSNEW){
        // state.pageIndex=payload.pageIndex
        state.NewQuestionsList = payload
    }else if(type===questionsDataType.ADD_QUESTIONSHOT){
        // state.pageIndex=payload.pageIndex
        state.HotQuestionsList = payload
    }
    return state
}

// state.pageSize = payload.pageSize;
//         state.pageNo = payload.pageNo;
//         state.result = [
//             ...state.result,
//             ...payload.result
//         ];