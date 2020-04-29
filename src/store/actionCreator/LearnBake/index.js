import learnBakeDataType from '../../actionType/LearnBake'
import axios from 'axios'
export function changeLearnBakeList(payload) {
    return{
        type:learnBakeDataType.NAV_LIST,
        payload
    }
}
export default {
    getLearnBake() {
        return async (dispatch) => {
            const data = await axios.get('/education/getIndexByWeb', {params: {
                    _t: 1588084825168,
                    csrfToken:''
                }})

        }
    }
}