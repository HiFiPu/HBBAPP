import React, {Component} from 'react';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import "../../../assets/style/viewsStyle/LearnBake/Skills.css"
export default class Index extends Component {
    constructor(props) {
        super(props);
        this.backClick = this.backClick.bind(this)
    }
    backClick(){
         this.props.history.go(-1)
    }

    render() {
        return (
            <div>
                <header>
                    {/* <!-- 点击返回首页 --> */}
                    <a>
                        <img onTouchStart={this.backClick}  src={require("../../../assets/images/jiantou.png")}/>
                    </a>
                </header>
                {/* <!-- 内容 --> */}
                <section>
                    <div>
                        {/* <!-- 点击跳转至内容详情 --> */}
                        <a href="javascript:;">
                            <img src="https://image.hongbeibang.com/FoT62I81A_HDQBIoXPb2Q4XU2uQQ?690X350&imageView2/1/w/568/h/350" />
                            <p>手揉面团的手法技巧</p>
                        </a>
                    </div>
                    <div>
                        {/* <!-- 点击跳转至内容详情 --> */}
                        <a href="javascript:;">
                            <img src="https://image.hongbeibang.com/FoT62I81A_HDQBIoXPb2Q4XU2uQQ?690X350&imageView2/1/w/568/h/350" />
                            <p>手揉面团的手法技巧</p>
                        </a>
                    </div>
                    {/* <!-- 以下同上 --> */}

                </section>
                {/* <!-- 底部 --> */}
                <div className={"feet"}>
                    <img src="https://image.hongbeibang.com/FqrNwXey8HDGxtROft8FVPUMPEwE"/>
                </div>
            </div>
        )
    }
    componentDidMount() {
        
    }
}