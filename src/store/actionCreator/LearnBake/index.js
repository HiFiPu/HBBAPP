import learnBakeDataType from '../../actionType/LearnBake'
import axios from 'axios'
/**
 * 
 * @param {*} payload 
 */
export function changeLearnBakeList(payload) {
    
    return{
        type:learnBakeDataType.CHANGE_CATEGORY,
        payload
    }
}
/**
 * 
 * @param {*} payload 
 */
export function changeLearnBakeContents(payload) {
   
    return{
        type:learnBakeDataType.CHANGE_CONTENTS,
        payload
    }
}

/**
 * 获取食谱分类首推荐
 * @param {*} payload 
 */
export function changeClassifyRecommend(payload) {
    return{
        type:learnBakeDataType.GET_CLASSIFY_RECOMMEND,
        payload
    }
}
/**
 * 获取食谱分类其它内容
 * @param {*} payload 
 */
export function changeClassifyOther(payload) {
    return{
        type:learnBakeDataType.GET_CLASSIFY_OTHER,
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
            const {data} = await axios.get('/index/getByType', {params: {
                    _t: 1588084825537,
                    csrfToken:'',
                    type:11
                }})
                dispatch(changeLearnBakeList(data))
        }
    },
     getLearnBakeContents() {
        return async (dispatch) => {
            const {data} = await axios.get('/education/getIndexByWeb', {params: {
                    _t: 1588084825168,
                    csrfToken:''
                }})
                dispatch(changeLearnBakeContents(data.category))
        }
    },
    /**
     * 食谱分类
     * 推荐
     */
    getClassifyRecommend(){
        return async (dispatch)=>{
            const {data} = await axios.get('/classify/getRecommend',{params:{
                _t:Date.now(),
                csrfToken:''
            }})
            dispatch(changeClassifyRecommend(data))
        }
        
    },
    /**
     * 食谱分类
     * 其它内容
     */
    getClassifyOther(){
        return async (dispatch)=>{
            const {data} = await axios.get('/classify/get',{params:{
                _t:Date.now(),
                csrfToken:''
            }})
            dispatch(changeClassifyOther(data.classify))
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
                data.category.splice(0,1);
                const category = data.category;
                dispatch(addLearnBakeCategory(category))
        }
    },
    // 推荐课程
    getLearnBakeCourse() {
        return async (dispatch) => {
            // console.log(222,this.props);
            const {data} = await axios.get('/recommend/getRandContent', {params: {
                    _t: 1588439273681,
                    csrfToken:'',
                    type:3,
                    pageSize:10
                }})
                const RecommendCourse = data.data
                dispatch(addLearnBakeCourse(RecommendCourse))
        }
    },
}