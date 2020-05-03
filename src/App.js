import React from 'react';
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
          <MyRouter router={router} ack={this.props}></MyRouter>
        </div>
    )
  }

  componentDidMount() {
    console.log('999999999999',this.props)
    this.props.getLearnBake()
    // this.props.getLearnBakeContents()
  }

}

function mapStateTopProps(state) {
  console.log('mapStateTopProps++++++++++++++++++++++++++++++++++',state)
  return {
    category: state.learnBakeData
  }
}


export default connect(mapStateTopProps, dispatch => bindActionCreators(LearnBakeDataCreator, dispatch))(App);
