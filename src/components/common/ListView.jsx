import React, { Component } from 'react';
import '../../assets/style/viewsStyle/search/search.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import searchCreators from '../../store/actionCreator/search/search'
import { Link } from 'react-router-dom';
class Index extends Component {
    constructor(props) {
        super(props);
    }
    data = []
    dataCourse = []
    render() {
        console.log(this.props, '>>>>>>>>>>>>>>>>>KKKKKKKKKKKKKKK')
        // console.log(this.props,'ddddddddddddddddddddddddddddddddd')
        // if(this.props.serchList.length>0){
        //     this.data=this.props.serchList
        // }
        if (this.props.searchOtherList.length > 0) {
            this.data = this.props.searchOtherList
        }
        if (this.props.serchList.length > 0) {
            this.dataCourse = this.props.serchList
        }
        return (
            <div>
                {
                    this.dataCourse.map(k => (
                        <Link to={{ pathname: '/lesson/contentId=' + (k.educationCourseId), state: { categoryId: k.educationCourseId } }}>
                            <div className={'search-list-war'}>
                                <a>
                                    <div className={'search-list-war-a-left'}>
                                        <img className={'search-list-war-a-left-img'} src={k.image}></img>
                                        <div className={'search-list-war-a-left-mov'}>视频</div>
                                    </div>
                                    <div className={'search-list-war-a-right-top'}>{k.title}</div>
                                    <div className={'search-list-war-a-right-mid'}>1000+人学过</div>
                                    <div className={'search-list-war-a-right-button'}>
                                        <span className={'span-text'}></span>
                                    </div>
                                </a>
                                <div className={'letf-corne-war'}>
                                    <div className={'letf-corne'}>不再显示</div>
                                </div>
                            </div>
                        </Link>
                    ))
                }
                {
                    this.data.map(v => (
                        <Link to={`/recipe/${v.contentId}`}>
                            <div className={'search-list-war'}>
                                <a>
                                    <div className={'search-list-war-a-left'}>
                                        <img className={'search-list-war-a-left-img'} src={v.image}></img>
                                        {/* <div className={'search-list-war-a-left-mov'}>视频</div> */}
                                    </div>
                                    <div className={'search-list-war-a-right-top'}>{v.title}</div>
                                    <div className={'search-list-war-a-right-mid'}>1000+人学过</div>
                                    <div className={'search-list-war-a-right-button'}>
                                        <span className={'span-text'}></span>
                                    </div>
                                </a>
                                <div className={'letf-corne-war'}>
                                    <div className={'letf-corne'}>不再显示</div>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
            // <div></div>
        )
    }
    componentDidMount() {
        this.props.getBaseSearchList.call(this)
    }
}
function mapStateToProps(state) {
    // console.log(state,'SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS')
    return {
        serchList: state.serchList.GET_SERCH_LIST
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(searchCreators, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Index)
