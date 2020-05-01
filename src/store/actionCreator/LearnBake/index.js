import learnBakeDataType from '../../actionType/LearnBake'
import axios from 'axios'
export function changeLearnBakeList(payload) {
    return{
        type:learnBakeDataType.CHANGE_CATEGORY,
        payload
    }
}
export default {
    getLearnBake() {
        return async (dispatch) => {
            console.log(222,this.props);
            const {data} = await axios.get('/education/getIndexByWeb', {params: {
                    _t: 1588084825168,
                    csrfToken:''
                }})
                console.log(data)
                dispatch(changeLearnBakeList(data.category))
        }
    }
}