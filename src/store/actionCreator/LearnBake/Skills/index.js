import skillsType from "../../../actionType/LearnBake/Skills"

export default function upSkills(payload){
    return {
        type:skillsType.UP_SKILLS,
        payload
    }

}