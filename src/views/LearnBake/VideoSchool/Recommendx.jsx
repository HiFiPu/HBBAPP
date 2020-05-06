import React, {Component} from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import Recommendx from '../../../components/LearnBack/Recommendx'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import LearnBakeDataCreator from '../../../store/actionCreator/LearnBake/index'
// import '../../../assets/style/viewsStyle/xhp.css'
class Index extends Component {
  constructor(props) {
    super(props);
}
 state = {
        data: ["https://image.hongbeibang"],
        imgHeight: 176,
      }
  arr=[]
  render() {
    this.state.data=["https://image.hongbeibang"]
    const {RecommendList} = this.props
    RecommendList[0]===undefined?this.arr=[]:this.arr=RecommendList[0].item
    this.arr.map((v,i)=>{
        if(i==0){
            this.state.data[0]=this.state.data[0]+v.image.substring(25)
        }else{
            this.state.data.push(v.image)
        }
    })
   
    const CategoryList = this.props.RecommendList.slice(1,this.props.RecommendList.length)
    const CategoryListx = this.props.CategoryList
        return (
          // <div></div>
          <div>
            {/* <WingBlank>
            <Carousel className={'ll'}
              autoplay={false}
              infinite
              autoplay
            >
              {this.state.data.map(val => (
             <div className={'kkkk'}>
                  <a
                  key={val.categoryItemId}
                  href="http://www.alipay.com"
                  style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                  <img
                    src={val}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                    //   this.setState({ imgHeight: 'auto' });
                    }}
                  />
                </a>
             </div>
              ))}
            </Carousel>
          </WingBlank> */}
          <div>
               
                {/* 主体内容 */}

                <div className={"content"}>
                    {/* 推荐课程 */}
                  
                    {/* 元气早餐 */}

                    {
                        <Recommendx CategoryList={CategoryListx}></Recommendx>
                    } 
                </div>

                {/* 尾部导航 */}
              
            </div>
          {/* <Recommend CategoryList={CategoryList}></Recommend> */}
          </div>
        );
        
      }
      componentDidMount() {
        // simulate img loading
        // console.log(this.arr,123456)
        // this.props.getLearnBakeContents()
        // document.querySelector('.kkkk').parentElement.parentElement.className='cc'
        // document.querySelector('.ll').parentElement.className='wh'
        // setTimeout(() => {
        //   this.setState({
        //     data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
        //   });
        // }, 100);
      }
}

function mapStateToProps(state){
  console.log(state.learnBakeData.RecommendList,'777777777777777777777777')
  return{RecommendList:state.learnBakeData.RecommendList}
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(LearnBakeDataCreator,dispatch)
} 
export default connect(mapStateToProps,mapDispatchToProps)(Index)