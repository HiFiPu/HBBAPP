import learnBakeDataInit from '../../state/LearnBake'
import learnBakeDataType from '../../actionType/LearnBake'
export default function (state=learnBakeDataInit,{type,payload}) {
    state = JSON.parse(JSON.stringify(state))
    if (type===learnBakeDataType.NAV_LIST){
        state.NavList = payload
    }
    return state
}