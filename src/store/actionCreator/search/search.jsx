import axios from 'axios'
import learnBakeDataType from '../../actionType/Search'
export function changeSearchList(payload) {
    return {
        type: learnBakeDataType.GET_SERCH_LIST,
        payload
    }
}
export function changerecipeList(payload) {
    return {
        type: learnBakeDataType.GET_RECIPE_LIST,
        payload
    }
}
export default {
    getBaseSearchList(pageIndex = 0, pageSize = 3, keyword = '冰淇淋', sort = '') {
        keyword = this.props.keyword.classifyId
        sort = this.props.sort

        return async (dispatch) => {
            const { data } = await axios.get('/search/getMoreCourse', {
                params: {
                    _t: Date.now(),
                    csrfToken: '',
                    pageIndex,
                    pageSize,
                    keyword
                }
            })
            // console.log(data, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
            dispatch(changeSearchList(data.search.list.course.data))
        }
    },
    getrecipeList(contentId=12580000) {
        const arrRecipe = []
        // console.log(this.props.match.params.id, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
        contentId=this.props.match.params.id
        return async (dispatch) => {
            const { data } = await axios.get('/recipe/get', {
                params: {
                    _t: Date.now(),
                    csrfToken: '',
                    contentId
                }
            })
            arrRecipe.push(data)
            // console.log(arrRecipe, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
            dispatch(changerecipeList(arrRecipe))
        }
    }
}