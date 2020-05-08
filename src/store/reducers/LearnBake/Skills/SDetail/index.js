import SdetailInit from "../../../../state/LearnBake/Skills/SDetail"
import sDetailType from "../../../../actionType/LearnBake/Skills/SDetail";

export default function(state=SdetailInit,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    // console.log(1111111222,payload);
    if( type===sDetailType.GET_DETAIL){
        state.Sdetail=payload;
        state.detailStep = payload.step;
        state.detailIntroduces = payload.introduces
    }
    return state; 
}