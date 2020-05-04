import React, {Component} from 'react';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import "../../assets/style/viewsStyle/BakingCircle/BakingCircle.css"

export default class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <header>
                    {/* 点击上传菜谱 */}
                    <a href="#">
                        <img src={require('../../assets/images/head1.png')}/>
                    </a>
                    <div>
                        <li><span>关注</span></li>
                        <li className={"active"}><span>最新</span></li>
                        <li><span>达人</span></li>
                    </div>
                    {/* 未登录时，点击跳转登录 */}
                    <a href="#">
                        <img src={require('../../assets/images/head3.png')}/>
                    </a>
                </header>
                <div className={"main-c"}>
                {/* 页面轮播 */}
                <ul className={"rotation"}>
                    <li>
                        <a href="#">
                            <img src="https://image.hongbeibang.com/Fn_gEZ0YhUH0cdOaqiu9b-7j3Mns?600X340&imageView2/1/w/300/h/170" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="https://image.hongbeibang.com/Fn_gEZ0YhUH0cdOaqiu9b-7j3Mns?600X340&imageView2/1/w/300/h/170" />
                        </a>
                    </li>
                </ul>
                {/* 标签轮播 */}
                <ul className={"tag"}>
                    <li>
                        <a href="#">
                            <span>#早餐#</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span>#早餐#</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span>#早餐#</span>
                        </a>
                    </li>
                </ul>
                {/* 页面主题——用户展示内容 */}
                <ul className={"main"}>
                    <li>
                        <div className={"title"}>
                            <img src="https://image.hongbeibang.com/FnOs-rk9erEuSVo0abmlGs7CD_Qz?460X460&imageView2/1/w/80/h/80" />
                            <div>
                                <i>可可</i>
                                <p>
                                    <span>8秒前</span>
                                    <span>原味奶油曲奇饼干</span>
                                </p>
                            </div>
                        </div>
                        <div className={"text"}>
                            <span>#早餐#</span>
                            <p>没有烘培石板和蒸汽石，面包底下不太脆</p>
                        </div>
                        <div className={"pic"}>
                            <img src="https://image.hongbeibang.com/FqekkwxW8WcwSL_ZIrTzEm08Ugjr?4000X3000&imageView2/1/w/250/h/250"/>
                            <img src="https://image.hongbeibang.com/FqekkwxW8WcwSL_ZIrTzEm08Ugjr?4000X3000&imageView2/1/w/250/h/250"/>
                            <img src="https://image.hongbeibang.com/FqekkwxW8WcwSL_ZIrTzEm08Ugjr?4000X3000&imageView2/1/w/250/h/250"/>
                        </div>
                        <div className={"copy"}>
                            <a href="#">
                                <img src="https://image.hongbeibang.com/FtjmPaHZHNUPKRXdrYg8wyXYgbJd?3456X4608&imageView2/1/w/70/h/70" />
                                <dd>
                                    <h6>椰奶小方（不需要淡奶油）</h6>
                                    <p>作者：小钰钰</p>
                                </dd>
                            </a> 
                        </div>
                        <div className={"zan"}>
                            <li>
                                <img src={require('../../assets/images/zan.png')} alt=""/>
                                <span>点赞</span>
                            </li>
                            <li>
                                <img src={require('../../assets/images/shang.png')} />
                                <span>打赏</span>
                            </li>
                            <li>
                                <img src={require('../../assets/images/ping.png')} />
                                <span>评论</span>
                            </li>
                        </div>
                    </li>
                    <li>
                        <div className={"title"}>
                            <img src="https://image.hongbeibang.com/FnOs-rk9erEuSVo0abmlGs7CD_Qz?460X460&imageView2/1/w/80/h/80" />
                            <div>
                                <i>可可</i>
                                <p>
                                    <span>8秒前</span>
                                    <span>原味奶油曲奇饼干</span>
                                </p>
                            </div>
                        </div>
                        <div className={"text"}>
                            <span>#早餐#</span>
                            <p>没有烘培石板和蒸汽石，面包底下不太脆</p>
                        </div>
                        <div className={"pic"}>
                            <img src="https://image.hongbeibang.com/FqekkwxW8WcwSL_ZIrTzEm08Ugjr?4000X3000&imageView2/1/w/250/h/250"/>
                        </div>
                        <div className={"copy"}>
                            <a href="#">
                                <img src="https://image.hongbeibang.com/FtjmPaHZHNUPKRXdrYg8wyXYgbJd?3456X4608&imageView2/1/w/70/h/70" />
                                <dd>
                                    <h6>椰奶小方（不需要淡奶油）</h6>
                                    <p>作者：小钰钰</p>
                                </dd>
                            </a> 
                        </div>
                        <div className={"zan"}>
                            <li>
                                <img src={require('../../assets/images/zan.png')} alt=""/>
                                <span>点赞</span>
                            </li>
                            <li>
                                <img src={require('../../assets/images/shang.png')} />
                                <span>打赏</span>
                            </li>
                            <li>
                                <img src={require('../../assets/images/ping.png')} />
                                <span>评论</span>
                            </li>
                        </div>
                    </li>
                    <li>
                        <div className={"title"}>
                            <img src="https://image.hongbeibang.com/FnOs-rk9erEuSVo0abmlGs7CD_Qz?460X460&imageView2/1/w/80/h/80" />
                            <div>
                                <i>可可</i>
                                <p>
                                    <span>8秒前</span>
                                    <span>原味奶油曲奇饼干</span>
                                </p>
                            </div>
                        </div>
                        <div className={"text"}>
                            <span>#早餐#</span>
                            <p>没有烘培石板和蒸汽石，面包底下不太脆</p>
                        </div>
                        <div className={"pic"}>
                            <img src="https://image.hongbeibang.com/FqekkwxW8WcwSL_ZIrTzEm08Ugjr?4000X3000&imageView2/1/w/250/h/250"/>
                        </div>
                        <div className={"copy"}>
                            <a href="#">
                                <img src="https://image.hongbeibang.com/FtjmPaHZHNUPKRXdrYg8wyXYgbJd?3456X4608&imageView2/1/w/70/h/70" />
                                <dd>
                                    <h6>椰奶小方（不需要淡奶油）</h6>
                                    <p>作者：小钰钰</p>
                                </dd>
                            </a> 
                        </div>
                        <div className={"zan"}>
                            <li>
                                <img src={require('../../assets/images/zan.png')} alt=""/>
                                <span>点赞</span>
                            </li>
                            <li>
                                <img src={require('../../assets/images/shang.png')} />
                                <span>打赏</span>
                            </li>
                            <li>
                                <img src={require('../../assets/images/ping.png')} />
                                <span>评论</span>
                            </li>
                        </div>
                    </li>
                    
                </ul>
                </div>
            </div>
        )
    }
    componentDidMount() {

    }
}
