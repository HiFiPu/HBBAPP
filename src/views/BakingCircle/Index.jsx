import React, {Component} from 'react';
import "../../assets/style/viewsStyle/BakingCircle/BakingCircle.css"
import { Tabs, WhiteSpace } from 'antd-mobile';
import axios from "axios";
import {
    connect
} from "react-redux";
import {getNew} from "../../store/actionCreator/BakingCircle"
import {getMasterNew} from "../../store/actionCreator/BakingCircle"


class Index extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {circleNew} = this.props;
        console.log(99999999999,circleNew);
        const {masterNew} = this.props;
        console.log(88888888888,masterNew);
        
        const tabs = [
            { title: <img width="27px" height="27px" src={require("../../assets/images/head1.png")}/> },
            { title: '关注' },
            { title: '最新' },
            { title: '达人' },
            { title: <img width="27px" height="27px" src={require("../../assets/images/head3.png")}/> },
          ];
          
          const BakingCircle = () => (
              <div className={"main-c"}>  
            <div>
              <Tabs tabs={tabs} initialPage={2} animated={false} useOnPan={false}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }}>
                </div>
                <div style={{ display: 'flex', height:'600px',alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }}>
                    暂无关注
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }}>
                    <ul className={"main"}>
                        {
                            circleNew.map(v => (
                                <div key={v.sendClientId} className={"publish"}>
                                    <div className={"title"}>
                                        <img src={v.clientImage}/>
                                        <div>
                                            <i>{v.clientName}</i>
                                            <p>
                                                <span>{v.createTime}</span>
                                                <span>{v.coverTitle}</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className={"text"}>
                                        <span>{v.communityName}</span>
                                        <p>{v.introduce}</p>
                                    </div>
                                    <div className={"pic"}>
                                        {
                                            v.image.map(item=>(
                                                <img src={item}/>
                                            ))
                                        }
                                     </div>
                                    <div className={"zan"}>
                                        <li>
                                            <img src={require('../../assets/images/zan.png')} alt="" />
                                            <span>{v.likeNum}</span>
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
                                
                                </div>
                            ))
                        }
                        <input  value={"点击加载更多"}/>
                        </ul> 
                    </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                    <ul className={"cen"}>
                        {
                            masterNew.map(v=>(
                                <div key={v.contentId} className={"spc"}>
                            <div className={"title"}>
                                <img src={v.clientImage} />
                                <div>
                                    <i>
                                        <img src="https://image.hongbeibang.com/Fj1UT_HuSX4MkdcukYhWRpioEyWx?200X200&imageView2/1/w/80/h/80" />
                                        <span>{v.clientName}</span>
                                    </i>
                                    <p>
                                        <span>{v.createTime}</span>
                                    </p>
                                </div>
                            </div>
                            <div className={"show"}>
                            <p><span>{v.communityName}</span>{v.introduce}</p>
                            <div className={"product"}>
                                {
                                    v.image.map(item=>(
                                        <img src={item} />
                                    ))
                                }
                            </div>
                            <div className={"copy"}>
                                <h4>{v.coverTitle}</h4>
                                <p>{v.introduce}</p>
                            </div>     
                            </div>
                            <div className={"zan"}>
                                <li>
                                    <img src={require('../../assets/images/zan.png')} alt="" />
                                    <span>{v.likeNum}</span>
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
                        </div>
                            ))
                        }
                    </ul>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                </div>
              </Tabs>
            </div>
            </div>
          );
        

        
        return (
            <div>
                <BakingCircle></BakingCircle>
                
                {/* <div className={"main-c"}> */}
                {/* 页面轮播 */}
                {/* <ul className={"rotation"}>
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
                </ul> */}
                {/* 标签轮播 */}
                {/* <ul className={"tag"}>
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
                */}
                
                {/* </div> */}
            </div>
        )
    }
    componentDidMount() {
        this.props.getNew.call(this);
        this.props.getMasterNew.call(this);
    } 
}
















function mapStateToProps(state){
    // console.log(222222222,state)
    return {
        pageIndex:state.Circle.pageIndex,
        pageSize:state.Circle.pageSize,
        // circleNew:state.Circle.circleNew,
        circleNew:state.Circle.circleNew,


        masterNew:state.Circle.masterNew
    }
}
function mapDispatchToProps(dispatch){
    return {
        async getNew(){
            // console.log(9666669,this.props)
            const {data} = await axios.get("/v2/feed/getNew",{
                params:{
                    pageIndex:this.props.pageIndex,
                    pageSize:this.props.pageSize,
                }
            });
            console.log("=========",data);
            dispatch(getNew(data.content))
        },
        async getMasterNew(){
            console.log(9666669,this.props)
            const {data} = await axios.get("/v2/feed/getMasterNew",{
                params:{
                    pageIndex:this.props.pageIndex,
                    pageSize:this.props.pageSize,
                }
            });
            console.log("+++++++++",data);
            dispatch(getMasterNew(data.content));
        },





    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Index);
