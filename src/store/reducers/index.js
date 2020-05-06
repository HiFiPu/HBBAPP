import {createStore,combineReducers} from "redux";
import learnBakeData from './LearnBake'
import questionsAnswer from './QuestionAnswers'
export default combineReducers({
    learnBakeData,
    questionsAnswer,
})