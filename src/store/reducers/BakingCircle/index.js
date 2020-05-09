import circleInit from "../../state/BakingCircle"
import newType from "../../actionType/BakingCircle"

export default function (state=circleInit,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    console.log("---333payload-----",payload);
    if(type===newType.UP_NEW){
        // state.pageIndex=payload.pageIndex,
        // state.pageSize=payload.pageSize,
        state.circleNew=payload;
        
    }else if(type===newType.GET_MASTERNEW){
        state.masterNew = payload
    }

    return state;
}