import serchInitList from '../../state/search'
import serchListType from '../../actionType/Search'
export default function (state=serchInitList,{type,payload}){
    state=JSON.parse(JSON.stringify(state))
    if(type===serchListType.GET_SERCH_LIST){
        state.GET_SERCH_LIST=payload
    }
    if(type===serchListType.GET_RECIPE_LIST){
        state.GET_RECIPE_LIST=payload
    }
    return state
}