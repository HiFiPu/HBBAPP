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
// 元气早餐
export function addLearnBakeCategory(payload) {
    return{
        type:learnBakeDataType.ADD_CATEGORY,
        payload
    }
}

// 推荐课程
export function addLearnBakeCourse(payload) {
    return{
        type:learnBakeDataType.ADD_COURSE,
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
    },
    // 元气早餐
    getLearnBakeCategory() {
        return async (dispatch) => {
            // console.log(222,this.props);
            const {data} = await axios.get('/education/getIndexByWeb', {params: {
                    _t: 1588084825168,
                    csrfToken:''
                }})
                // console.log('------------------------',{...data.category})
                // dispatch(changeLearnBakeList({...data.category}))
                data.category.splice(0,1);
                const category = data.category;
                dispatch(addLearnBakeCategory(category))
        }
    },
    // 推荐课程
    getLearnBakeCourse() {
        return async (dispatch) => {
            console.log(222,this.props);
            const {data} = await axios.get('/recommend/getRandContent', {params: {
                    _t: 1588439273681,
                    csrfToken:'',
                    type:3,
                    pageSize:10
                }})
                // console.log(2222222222,data)
                const RecommendCourse = data.data
                dispatch(addLearnBakeCourse(RecommendCourse))
        }
    },
}