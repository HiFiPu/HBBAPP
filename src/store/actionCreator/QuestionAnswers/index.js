import questionsDataType from '../../actionType/QuestionAnswers'
import axios from 'axios'
export function addQuestionsEssence(payload) {
    return{
        type:questionsDataType.ADD_QUESTIONSESSENCE,
        payload
    }
}


export function addQuestionsNew(payload) {
    return{
        type:questionsDataType.ADD_QUESTIONSNEW,
        payload
    }
}

export function addQuestionsHot(payload) {
    return{
        type:questionsDataType.ADD_QUESTIONSHOT,
        payload
    }
}

export default {
    
    // 推荐课程
    // https://api.hongbeibang.com/question/getEssence?&pageIndex=0&pageSize=10
    getQuestionsEssence(pageIndex=0) {
        return async (dispatch) => {
            console.log(222000,this.props);
            const {data} = await axios.get('/question/getEssence?', {params: {
                    pageIndex,
                    pageSize:this.props.pageSize,
                }})
                const essence=data.content.data
                // console.log(22222211111111122,essence)
                dispatch(addQuestionsEssence(essence))
        }
    },
    // https://api.hongbeibang.com/question/getNew?&pageIndex=1&pageSize=10
    getQuestionsNew(pageIndex=0) {
        return async (dispatch) => {
            console.log(222,this.props);
            const {data} = await axios.get('/question/getNew?', {params: {
                    pageIndex,
                    pageSize:this.props.pageSize,
                }})
                const neww=data.content.data
                // console.log(22222211111111122,neww)
                dispatch(addQuestionsNew(neww))
        }
    },
    // https://api.hongbeibang.com/question/getHot?&pageIndex=0&pageSize=10
    getQuestionsHot(pageIndex=0) {
        return async (dispatch) => {
            console.log(222,this.props);
            const {data} = await axios.get('/question/getHot?', {params: {
                    pageIndex,
                    pageSize:this.props.pageSize,
                }})
                const hot=data.content.data
                console.log(22222211111111122,pageIndex)
                dispatch(addQuestionsHot(hot))
        }
    },
}