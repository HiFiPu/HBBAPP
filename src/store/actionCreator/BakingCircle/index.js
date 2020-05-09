import newType from "../../actionType/BakingCircle"

export function getNew(payload){
    return {
        type:newType.UP_NEW,
        payload
    }
}

export function getMasterNew(payload){
    return{
        type:newType.GET_MASTERNEW,
        payload
    }
}