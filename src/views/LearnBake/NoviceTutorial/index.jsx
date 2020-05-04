import React, {Component} from 'react';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import "../../../assets/style/viewsStyle/LearnBake/NoviceTutorial.css"


export default class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className={"intro"}>
                    <li>
                        <img src="https://image.hongbeibang.com/Fm8ItfvW_G-VoT7XyqdeiIFFqEwL?1280X719&imageView2/1/w/750/h/420" alt=""/>
                    </li>
                    <div className={"name"}>
                        <h2>新手烘焙专题：从入门到精通</h2>
                        <p>
                            <img src={require("../../../assets/images/user.png")} />
                            <span>100</span>
                            <span>人在学</span>
                        </p>
                    </div>
                    <div className={"service"}>
                        <ul>
                            <li>
                                <div></div>
                                <span>永久回看</span>
                            </li>
                            <li>
                                <div></div>
                                <span>永久回看</span>
                            </li>
                            <li>
                                <div></div>
                                <span>永久回看</span>
                            </li>
                            <li>
                                <div></div>
                                <span>高效学习体验</span>
                            </li>
                            <li>
                                <div></div>
                                <span>永久回看</span>
                            </li>
                            <li>
                                <div></div>
                                <span>永久回看</span>
                            </li>
                        </ul>
                        <p>
                            <img src={require("../../../assets/images/you.png")} alt=""/>
                        </p>
                    </div>
                    <div className={"kind"}>
                        <span className={"active"}>课程介绍</span>
                        <span>课程目录</span>
                        <span>课程作业</span>
                    </div>
                    {/* <!-- 内容 --> */}
                    <div className={"datails"}>
                        
                    </div>
                </div>
                {/* <!-- 底部 --> */}
                <div className={"foot"}>
                    <li>
                        <img src={require("../../../assets/images/geng.png")} />
                        <span>更多课程</span>
                    </li>
                    <li>
                        <img src={require("../../../assets/images/zi.png")} />
                        <span>咨询</span>
                    </li>
                    <div>
                        <p>
                            <span>&nbsp;¥</span><span>59</span>
                        </p>
                        <span>&nbsp;¥</span><span>29</span><span>&nbsp;购买专栏</span>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        
    }
}