import React, {Component} from 'react';
// import url from '../assets/images/1.png'
import {
    NavLink
} from "react-router-dom";
import MyRouter from "../components/common/MyRouter";
import '../assets/style/viewsStyle/BottonBar.css'
export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <MyRouter router={this.props.childrends}></MyRouter>
                <div className={'BottomBar'}>
                    <ul>
                        <li className={'list'}>
                            <div className={'list-top'}>
                                <img className={'list-top-img'} src={require('../assets/images/1.png')}/>
                            </div>
                            <div className={'list-bottom'}><NavLink exact className={"App-link"}
                                                                    activeClassName={"App-active"}
                                                                    to={"/"}>学烘培</NavLink></div>
                        </li>
                        <li className={'list'}>
                            <div className={'list-top'}>
                                <img className={'list-top-img'} src={require('../assets/images/2.png')}/>
                            </div>
                            <div className={'list-bottom'}><NavLink className={"App-link"}
                                                                    activeClassName={"App-active"}
                                                                    to={"/BakingCircle"}>烘培圈</NavLink></div>
                        </li>
                        <li className={'list'}>
                            <div className={'list-top'}>
                                <img className={'list-top-img'} src={require('../assets/images/3.png')}/>
                            </div>
                            <div className={'list-bottom'}><NavLink className={"App-link"}
                                                                    activeClassName={"App-active"}
                                                                    to={"/QuestionsAnswers"}>问答</NavLink></div>
                        </li>
                        <li className={'list'}>
                            <div className={'list-top'}>
                                <img className={'list-top-img'} src={require('../assets/images/4.png')}/>
                            </div>
                            <div className={'list-bottom'}><NavLink className={"App-link"}
                                                                    activeClassName={"App-active"}
                                                                    to={"/Hut"}>小屋</NavLink></div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

    componentDidMount() {
        // console.log(this.props.childrends);
    }
}