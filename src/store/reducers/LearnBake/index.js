import learnBakeDataInit from '../../state/LearnBake'
import learnBakeDataType from '../../actionType/LearnBake'
export default function (state=learnBakeDataInit,{type,payload}) {
    state = JSON.parse(JSON.stringify(state))
    if (type===learnBakeDataType.CHANGE_CATEGORY){
        state.category = payload
    }
    return state
}