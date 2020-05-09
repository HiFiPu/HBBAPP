import skillsInit from "../../../state/LearnBake/Skills"
import skillsType from '../../../actionType/LearnBake/Skills'
export default function(state=skillsInit,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if( type===skillsType.UP_SKILLS){
        state.courseGuide = payload.courseGuide
    }
    return state; 
}