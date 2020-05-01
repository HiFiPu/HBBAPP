import React, { Component } from 'react';
import { Button } from 'antd-mobile'
import "../../assets/style/viewsStyle/xhp.css"
import { Link } from "react-router-dom"
import {
    connect
} from "react-redux"
import {
    bindActionCreators
} from 'redux';
import learnBackCreator, { learnBack } from '../../store/actionCreator/LearnBake'
class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/* <Button type="primary">This is a button</Button> */}
                {/* 头部  */}
                <header>
                    <img className={'title'} src={require('../../assets/images/head1.png')} alt={''} />
                    <div>
                        <span>
                            <img src={require('../../assets/images/head2.png')} alt={''} />
                        </span>
                        <span>搜索食谱/食材，烘焙/家常菜一应俱全</span>
                    </div>
                    <img className={'title'} src={require('../../assets/images/head3.png')} alt={""} />
                </header>

                {/* 头部导航栏 */}
                <nav>
                    <Link >
                        <figure>
                            <img src={require('../../assets/images/nav1.png')} alt="" />
                        </figure>
                        <figcaption>技巧百科</figcaption>
                    </Link>
                    <Link href="/">
                        <figure>
                            <img src={require('../../assets/images/nav2.png')} alt="" />
                        </figure>
                        <figcaption>视频学堂</figcaption>
                    </Link>
                    <Link href="/">
                        <figure>
                            <img src={require('../../assets/images/nav3.png')} alt="" />
                        </figure>
                        <figcaption>新手教程</figcaption>
                    </Link>
                    <Link href="/">
                        <figure>
                            <img src={require('../../assets/images/nav4.png')} alt="" />
                        </figure>
                        <figcaption>食品分类</figcaption>
                    </Link>
                </nav>

                {/* 主体内容 */}
                <div className={"content"}>
                    {/* 推荐课程 */}
                    <div>
                        <div className={"top"}>
                            <h2>推荐课程</h2>
                        </div>
                        <ul>
                            <li className={"goods"}>
                                <img src="https://image.hongbeibang.com/FrZVi0z0svNqhB9a12gtL96MDQPV?640X900&imageView2/1/w/640/h/896" alt="" />
                                <div>低糖低脂代餐极品：5款爆款手工软欧包</div>
                            </li>
                            <li className={"goods"}>
                                <img src="https://image.hongbeibang.com/FrZVi0z0svNqhB9a12gtL96MDQPV?640X900&imageView2/1/w/640/h/896" alt="" />
                                <div>低糖低脂代餐极品：5款爆款手工软欧包</div>
                            </li>
                        </ul>
                    </div>
                    {/* 元气早餐 */}
                    <div>
                        <div className={"top"}>
                            <h2>元气早餐</h2>
                            <a href="">查看全部</a>
                        </div>
                        <ul>
                            <li className={"goods"}>
                                <img src="https://image.hongbeibang.com/FrZVi0z0svNqhB9a12gtL96MDQPV?640X900&imageView2/1/w/640/h/896" alt="" />
                                <div>低糖低脂代餐极品：5款爆款手工软欧包</div>
                            </li>
                            <li className={"goods"}>
                                <img src="https://image.hongbeibang.com/FrZVi0z0svNqhB9a12gtL96MDQPV?640X900&imageView2/1/w/640/h/896" alt="" />
                                <div>低糖低脂代餐极品：5款爆款手工软欧包</div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className={"top"}>
                            <h2>炎夏甜点</h2>
                            <a href="">查看全部</a>
                        </div>
                        <ul>
                            <li className={"goods"}>
                                <img src="https://image.hongbeibang.com/FrZVi0z0svNqhB9a12gtL96MDQPV?640X900&imageView2/1/w/640/h/896" alt="" />
                                <div>低糖低脂代餐极品：5款爆款手工软欧包</div>
                            </li>
                            <li className={"goods"}>
                                <img src="https://image.hongbeibang.com/FrZVi0z0svNqhB9a12gtL96MDQPV?640X900&imageView2/1/w/640/h/896" alt="" />
                                <div>低糖低脂代餐极品：5款爆款手工软欧包</div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className={"top"}>
                            <h2>推荐课程</h2>
                            <a href="">查看全部</a>
                        </div>
                        <ul>
                            <li className={"goods"}>
                                <img src="https://image.hongbeibang.com/FrZVi0z0svNqhB9a12gtL96MDQPV?640X900&imageView2/1/w/640/h/896" alt="" />
                                <div>低糖低脂代餐极品：5款爆款手工软欧包</div>
                            </li>
                            <li className={"goods"}>
                                <img src="https://image.hongbeibang.com/FrZVi0z0svNqhB9a12gtL96MDQPV?640X900&imageView2/1/w/640/h/896" alt="" />
                                <div>低糖低脂代餐极品：5款爆款手工软欧包</div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className={"top"}>
                            <h2>推荐课程</h2>
                            <a href="">查看全部</a>
                        </div>
                        <ul>
                            <li className={"goods"}>
                                <img src="https://image.hongbeibang.com/FrZVi0z0svNqhB9a12gtL96MDQPV?640X900&imageView2/1/w/640/h/896" alt="" />
                                <div>低糖低脂代餐极品：5款爆款手工软欧包</div>
                            </li>
                            <li className={"goods"}>
                                <img src="https://image.hongbeibang.com/FrZVi0z0svNqhB9a12gtL96MDQPV?640X900&imageView2/1/w/640/h/896" alt="" />
                                <div>低糖低脂代餐极品：5款爆款手工软欧包</div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className={"top"}>
                            <h2>推荐课程</h2>
                            <a href="">查看全部</a>
                        </div>
                        <ul>
                            <li className={"goods"}>
                                <img src="https://image.hongbeibang.com/FrZVi0z0svNqhB9a12gtL96MDQPV?640X900&imageView2/1/w/640/h/896" alt="" />
                                <div>低糖低脂代餐极品：5款爆款手工软欧包</div>
                            </li>
                            <li className={"goods"}>
                                <img src="https://image.hongbeibang.com/FrZVi0z0svNqhB9a12gtL96MDQPV?640X900&imageView2/1/w/640/h/896" alt="" />
                                <div>低糖低脂代餐极品：5款爆款手工软欧包</div>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* 尾部导航 */}
                <footer>
                    <p>
                        Copyright © hongbeibang.com 粤ICP备14090926号-1
                    </p>
                    <p>
                        <img src={require('../../assets/images/footer1.png')} alt="" />
                        <span>粤公网安备 44060602001356号</span>
                    </p>
                </footer>
            </div>
        )
    }
    async componentDidMount() {
        console.log(1111, this.props)
        this.props.getLearnBake.call(this);
    }
}
function mapStateToProps(state) {
    return {
        category: state.learnBakeData.category
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(learnBackCreator, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Index);
