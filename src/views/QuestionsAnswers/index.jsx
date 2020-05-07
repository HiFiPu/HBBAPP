import React, {Component} from 'react';
import '../../assets/style/viewsStyle/QuestionAnswer/question.css'
import {
    connect
} from "react-redux"
import {
    bindActionCreators
}  from 'redux';
import questionsAnswerDataCreator from '../../store/actionCreator/QuestionAnswers'
import { Tabs, WhiteSpace } from 'antd-mobile';
class Index extends Component {
    constructor(props) {
        super(props);
        this.btn = null;

    }

    render() {
       const {EssenceList,NewList,HotList}=this.props
    //    console.log(4444,EssenceList)
    //    console.log(44445555,NewList)
    //    console.log(44446666,HotList)
      const tabs = [
        { title: '精华问答' },
        { title: '最新问答' },
        { title: '最热问答' },
      ];
      
      const TabQuestion = () => (
        <div>
          <WhiteSpace />
          <Tabs tabs={tabs} initialPage={2} animated={false} useOnPan={false}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }}>
            <div className="questionmain">
            {
                    EssenceList.map(v=>(
                        <div className={"questioncontent"} key={v.contentId}>
                            <div className={"questionTop"}>
                                <img src={v.clientImage} alt=""/>
                                <img src="https://image.hongbeibang.com/Fj1UT_HuSX4MkdcukYhWRpioEyWx?200X200&imageView2/1/w/80/h/80" alt=""/>
                                <span >{v.clientName}</span>
                            </div>
                            <p>{v.coverTitle}</p>
                            <p>{v.coverSummary}</p>
                            <span className={"zan"}>{v.likeNum}个赞</span>
                        </div>
                    ))
            } 

            <div>
                <input type="button" ref={e=>this.btn=e} onClick={this.props.getQuestionsEssence.bind(this,this.props.pageIndex+10)} value={"加载更多"}/>
                {/* // this.props.getQuestionsEssence.bind(this,this.props.pageIndex+10) */}
            </div>
           
            </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                <div className="questionmain">
                {
                    NewList.map(v=>(
                        <div className={"content-new"} key={v.contentId}>
                            <p className={"new-top"}>{v.title}</p>
                            <div className={"new-center"}>
                                <img src={v.recipe.image} alt=""/>
                                <div>
                                    <p>{v.recipe.title}</p>
                                    <span>作者:{v.recipe.clientName}</span>
                                </div>
                            </div>
                            <div className={"new-bottom"}>
                                <span>暂无回答</span>
                                <div className={"bottom-right"}>
                                    <img src="https://image.hongbeibang.com/FlSZI5KwZLrR9-QXD9Vu7u0lVvCE?48X48&imageView2/1/w/40/h/40" alt=""/>
                                    <span>写答案</span>
                                </div>
                            </div>
                        </div>
                    ))
                } 
               
                {
                <div>
                     <input type="button" ref={e=>this.btn=e} onClick={this.props.getQuestionsNew.bind(this,this.props.pageIndex+10)} value={"加载更多"}/>
                     {/* // this.props.getQuestionsEssence.bind(this,this.props.pageIndex+10) */}
                 </div>
                   
                }
                
                    
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }}>
            <div className="questionmain">
            {
                    HotList.map(v=>(
                        <div className={"content-new" } key={v.contentId}>
                        <p className={"new-top"}>{v.coverTitle}</p>
                        <div className={"new-center"}>
                            <img src={v.recipe.image} alt=""/>
                            <div>
                                <p>{v.recipe.title}</p>
                                <span>作者：{v.recipe.clientName}</span>
                            </div>
                        </div>
                        <div className={"new-bottom"}>
                            <span>暂无回答</span>
                            <div className={"bottom-right"}>
                                <img src="https://image.hongbeibang.com/FlSZI5KwZLrR9-QXD9Vu7u0lVvCE?48X48&imageView2/1/w/40/h/40" alt=""/>
                                <span>写答案</span>
                            </div>
                        </div>
                    </div>
                    ))
                } 

                {

<div>
<input type="button" ref={e=>this.btn=e} onClick={this.props.getQuestionsHot.bind(this,this.props.pageIndex+10)} value={"加载更多"}/>
{/* // this.props.getQuestionsEssence.bind(this,this.props.pageIndex+10) */}
</div>

                }
                </div>
            </div>
          </Tabs>
          <WhiteSpace />
        </div>
      );
        return (
            <div>
                {/* 头部  */}
                <header>
                    <p>提问</p>
                    <div>
                        搜索问题
                    </div>
                    <img  className={'title'} src={require('../../assets/images/head3.png')} alt={""}/>
                </header>
                <div className={"tabs"}>
                   {
                       <TabQuestion EssenceList={this.props.EssenceList}></TabQuestion>
                   }
                   
                </div>
                <div className={"more"}>
                    
                </div>
            </div>
        )
    }
    componentDidMount() {
        console.log(333334444,this.props)
        this.props.getQuestionsEssence.call(this);
        this.props.getQuestionsNew.call(this);
        this.props.getQuestionsHot.call(this);
        
        
    }
}

function mapStateToProps(state){
    // console.log(121122,state)
    return {
        pageIndex:state.questionsAnswer.pageIndex,
        pageSize:state.questionsAnswer.pageSize,
        EssenceList:state.questionsAnswer.EssenceQuestionsList,
        NewList:state.questionsAnswer.NewQuestionsList,
        HotList:state.questionsAnswer.HotQuestionsList
        
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(questionsAnswerDataCreator,dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(Index);