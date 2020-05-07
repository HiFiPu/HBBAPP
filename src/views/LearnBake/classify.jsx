import React, { Component } from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
import ClassifyRecommend from '../../components/LearnBack/ClassifyRecommend'
import '../../assets/style/viewsStyle/LearnBake/classify.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LearnBakeDataCreator from '../../store/actionCreator/LearnBake/index'
import ClassifyRecommendx from '../../components/LearnBack/ClassifyRecommendx'
class Index extends Component {
  constructor(props) {
    super(props);
    this.backClick=this.backClick.bind(this)
  }
  backClick(){
    this.props.history.go(-1)
  }
  ClassifyRecommendx = []
  id = 1
  switchData(a, b) {
    if (b.classifyId < 2) {
      this.id = 1
    } else {
      this.id = b.classifyId
    }

    // console.log(this.id, this.props)
    if (this.id > 2) {
      this.ClassifyRecommendx = this.props.ClassifyOtherData.find(v => v.classifyId == this.id)
    }
  }
  renderContent = tab =>
    (<div style={{ display: 'flex', backgroundColor: '#fff', width: '100%', overflowY: 'auto' }}>
      {tab.classifyId != this.id ? <ClassifyRecommend ClassifyData={this.props}></ClassifyRecommend> : <ClassifyRecommendx ClassifyData={this.ClassifyRecommendx}></ClassifyRecommendx>}
      {/* <ClassifyRecommendx ClassifyData={this.props}></ClassifyRecommendx> */}
    </div>);

  render() {
    const tabs = [
      { title: '推荐', key: 't1', classifyId: 0 },
    ];
    // console.log(this.props, 'dcdcdcdcdcccccdddddddddddddddddddddddddddddd')
    this.props.ClassifyOtherData.map((v, i) => {
      tabs.push({
        title: v.name,
        key: 't' + (i + 2),
        classifyId: v.classifyId
      })
    })
    const TabExample = () => (
      <div style={{ height: 620, width: '100%'}} className={'lxf'}>
        <Tabs tabs={tabs}
          initialPage={'t1'}
          tabBarPosition="left"
          tabDirection="vertical"
          // tabBarBackgroundColor="green"
          style={{ overflowY: 'auto' }}
          onTabClick={this.switchData.bind(this, { a: 1 })}
          // tabBarUnderlineStyle={{height:50}}
          renderTabBar={props => <Tabs.DefaultTabBar {...props} page={10} tabBarUnderlineStyle={{border:'none',borderLeft:'1px #108ee9 solid',left:0}} />}
          className={'lxfvv'}
        >
          {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
          ssssssssssssssssss
          </div> */}
          {this.renderContent}

        </Tabs>
      </div>
    );
    return (
      <div>
        {/* 头部  */}
        <header  style={{marginBottom:'30px'}}>
          <img onClick={this.backClick} className={'title'} src={require('../../assets/images/jiantou.png')} alt={''} />
          <div>
            <span>
              <img src={require('../../assets/images/head2.png')} alt={''} />
            </span>
            <span>搜索食谱/食材，烘焙/家常菜一应俱全</span>
          </div>
          {/* <img className={'title'} src={require('../../assets/images/head3.png')} alt={""} /> */}
        </header>
        <WhiteSpace></WhiteSpace>
        <WhiteSpace></WhiteSpace>
        <WhiteSpace></WhiteSpace>
        <WhiteSpace></WhiteSpace>
        <WhiteSpace></WhiteSpace>
        <TabExample></TabExample>
      </div>
    )

  }
  componentDidMount() {
    this.props.getClassifyRecommend()
    this.props.getClassifyOther()
  }
}
function mapStateTopProps(state) {
  return {
    ClassifyRecommendData: state.learnBakeData.ClassifyRecommendData,
    ClassifyOtherData: state.learnBakeData.ClassifyOtherData
  }
}
function mapDispatchTopProps(dispatch) {
  return bindActionCreators(LearnBakeDataCreator, dispatch)
}
export default connect(mapStateTopProps, mapDispatchTopProps)(Index)