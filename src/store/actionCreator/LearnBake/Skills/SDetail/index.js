import sDetailType from "../../../../actionType/LearnBake/Skills/SDetail";

export default function getDetail (payload){
    return {
        type:sDetailType.GET_DETAIL,
        payload
    }
}
