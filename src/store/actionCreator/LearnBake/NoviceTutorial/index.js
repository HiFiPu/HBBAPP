import noviceType from "../../../actionType/LearnBake/NoviceTutorial"

export default function getCourse(payload){
    return {
        type:noviceType.GET_COURSE,
        payload
    }
}