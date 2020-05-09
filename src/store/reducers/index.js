import {createStore,combineReducers} from "redux";
import learnBakeData from './LearnBake'
import questionsAnswer from './QuestionAnswers'
import serchList from './search'
export default combineReducers({
    learnBakeData,
    questionsAnswer,
    serchList
})