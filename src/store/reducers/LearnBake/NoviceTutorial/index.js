import noviceInit from "../../../state/LearnBake/NoviceTutorial"
import noviceType from "../../../actionType/LearnBake/NoviceTutorial"



export default function(state=noviceInit,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    // console.log(2222222222,payload);
    if(type===noviceType.GET_COURSE){
        state.novice = payload;
        state.introduces = payload.introduces;
    }
    return state;
}
