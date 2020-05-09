import {createStore,combineReducers} from "redux";
import learnBakeData from './LearnBake'
import questionsAnswer from './QuestionAnswers'



import Skills from './LearnBake/Skills';
import SDetail from './LearnBake/Skills/SDetail';
import Novice from './LearnBake/NoviceTutorial';
import Circle from './BakingCircle'

import serchList from './search'
// export default combineReducers({
//     learnBakeData,
//     questionsAnswer,
   
export default combineReducers({
    learnBakeData,
    questionsAnswer,
    serchList,
    Skills,
    SDetail,
    Novice,
    Circle
})