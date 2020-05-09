import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Tabs, WhiteSpace } from 'antd-mobile';
import ListView from '../../components/common/ListView'
import axios from 'axios'
export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state={
      searchList:[]
    }
    // console.log(this.props.match.params.classifyId,'JJJJJJJJJJJJJJJJJJJJJJJJJJ')
  }
  
  pageIndex = 0
  pageSize = 10
  keyword = this.props.match.params.classifyId
  sort = ''
  // searchList = []
  async getSearchList(pageIndex, pageSize, keyword, sort) {
    // console.log(this.props)
    const { data } = await axios.get('/search/getMoreRecipe', {
      params: {
        _t: Date.now(),
        csrfToken: '',
        pageIndex,
        pageSize,
        keyword,
        sort
      }
    })
    this.setState({
      searchList:data.search.list.recipe.data
    })
    // this.searchList = data.search.list.recipe.data
    // console.log(data,'LLLLLLLLLLLLLLLLLLGGGGGGGGGFFFFFFFFFFFFFFFFFF')
  }


  switchData(a, b) {
    // console.log(a,b,'LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL')
    this.sort = b.sort
    this.getSearchList(this.pageIndex, this.pageSize, this.keyword, this.sort)
  }
  renderContent = tab =>
    (<div>
      <ListView searchOtherList={this.state.searchList} keyword={this.props.match.params}></ListView>
    </div>);
  render() {
    const tabs = [
      { title: '综合排序', sort: '' },
      { title: '做过最多', sort: 'dishNum' },
      { title: '大人食谱', sort: 'master' },
    ];
    return (
      <div>
        <WhiteSpace />
        <Tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />} onTabClick={this.switchData.bind(this, { a: 1 })}>
          {this.renderContent}
        </Tabs>
        <WhiteSpace />
      </div>
    )
  }
  componentDidMount() {
    this.getSearchList(this.pageIndex, this.pageSize, this.keyword, this.sort)
  }
}

