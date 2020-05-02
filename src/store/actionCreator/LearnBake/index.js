import learnBakeDataType from '../../actionType/LearnBake'
import axios from 'axios'
export function changeLearnBakeList(payload) {
    return{
        type:learnBakeDataType.CHANGE_CATEGORY,
        payload
    }
}
export function changeLearnBakeContents(payload) {
    return{
        type:learnBakeDataType.CHANGE_CONTENTS,
        payload
    }
}
// index/getByType?_t=1588084825537&csrfToken=&type=11
export default {
    getLearnBake() {
        return async (dispatch) => {
            console.log(222,this.props);
            const {data} = await axios.get('/index/getByType', {params: {
                    _t: 1588084825537,
                    csrfToken:'',
                    type:11
                }})
                console.log('------------------------',data)
                dispatch(changeLearnBakeList(data))
        }
    },
     getLearnBakeContents() {
        return async (dispatch) => {
            console.log(222,this.props);
            const {data} = await axios.get('/education/getIndexByWeb', {params: {
                    _t: 1588084825168,
                    csrfToken:''
                }})
                console.log('ffffffffff',data.category)
                dispatch(changeLearnBakeContents(data.category))
        }
    }
}