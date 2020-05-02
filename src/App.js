import React from 'react';
import BottomBar from "./components/common/BottomBar";
import {
  connect
} from 'react-redux'
import {bindActionCreators} from "redux";
import MyRouter from "./components/common/MyRouter";
import router from './router/index'
import LearnBakeDataCreator,{changeLearnBakeList} from './store/actionCreator/LearnBake'
class App extends React.Component {
  constructor(props) {
    console.log('App.............',props)
    super(props);
    this.NavList = null
  }

  render() {
    console.log('render',this.props)
    return (
        <div className="App">
          <MyRouter router={router}></MyRouter>
          <BottomBar></BottomBar>
        </div>
    )
  }

  componentDidMount() {
    this.props.getLearnBake()
  }

}

function mapStateTopProps(state) {
  console.log('mapStateTopProps++++++++++++++++++++++++++++++++++',state)
  return {
    category: state.learnBakeData
  }
}


export default connect(mapStateTopProps, dispatch => bindActionCreators(LearnBakeDataCreator, dispatch))(App);
