import {createStore,combineReducers} from "redux";
import learnBakeData from './LearnBake'
import questionsAnswer from './QuestionAnswers'
import Skills from './LearnBake/Skills';
import SDetail from './LearnBake/Skills/SDetail';
import Novice from './LearnBake/NoviceTutorial';
import Circle from './BakingCircle'
export default combineReducers({
    learnBakeData,
    questionsAnswer,
    Skills,
    SDetail,
    Novice,
    Circle
})