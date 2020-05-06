import React, { Component } from 'react';
import '../../assets/style/viewsStyle/LearnBake/ClassifyRecommend.css'
export default class Index extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { name, list } = this.props.ClassifyData
        console.log(name, list, 'JJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ')

        // let arr = []
        // let ClassifyObj={}
        // const da = this.props.ClassifyData.ClassifyRecommendData[0]
        // if(da!=undefined){
        //     ClassifyObj=da

        // }
        // // console.log(ClassifyObj.classifys,'OOOOOOOOOOOOOOOOOOOOOO')
        // if(ClassifyObj.classifys!=undefined){
        //     arr=ClassifyObj.classifys
        // }
        // console.log(arr,'OOOOOOOOOOOOOOOOOOOOOO')
        return (
            <div style={{width:'100%'}}>
                {
                    list.map(v => (
                        <div className={'let-cont-war-titles'}>
                            <div className={'let-cont-war-titles-v'}>{v.name}
                            <div style={{ width: '100%' }}>
                            <div className={'let-cont-war'}>
                                <div className={'.let-cont-war-titles-contents'}>
                                   {
                                       v.list.map(k=>(
                                        <a className={'a-list'}>
                                        <div className={'a-list-d1'}>
                                            <img className={'a-list-d1-img'} src={k.image}></img>
                                        </div>
                                        <div className={'a-list-d1-name'}>{k.name}</div>
                                    </a>
                                       ))
                                   }
                                   

                                </div>
                            </div>
                        </div>
                            </div>
                        </div>
                        // <div style={{ width: '100%' }}>
                        //     <div className={'let-cont-war'}>
                        //         <div className={'let-cont-war-titles'}>
                        //             <div className={'let-cont-war-titles-v'}>{v.name}</div>
                        //         </div>
                        //         <div className={'.let-cont-war-titles-contents'}>
                        //             <a className={'a-list'}>
                        //                 <div className={'a-list-d1'}>
                        //                     <img className={'a-list-d1-img'} src="https://image.hongbeibang.com/Fh_O1DTQZmSyDxDcPI0qshGMr592?400X400&imageView2/1/w/400/h/400"></img>
                        //                 </div>
                        //             </a>

                        //         </div>
                        //     </div>
                        // </div>
                    ))
                }
            </div>


            //     <div style={{ width: '100%' }}>
            //         <div className={'let-cont-war'}>
            //             <div className={'let-cont-war-titles'}>
            // <div className={'let-cont-war-titles-v'}>{ClassifyObj.name}</div>
            //             </div>
            //             <div className={'.let-cont-war-titles-contents'}>
            //            {
            //                 arr.map(v=>(
            //                     <a className={'a-list'}>
            //                         <div className={'a-list-d1'}>
            //                             <img className={'a-list-d1-img'} src={v.image}></img>
            //                         </div>
            //                 <div className={'a-list-d1-name'}>{v.name}</div>
            //                     </a>
            //                 ))
            //            }

            //             </div>
            //         </div>
            //     </div>
        )
    }
    componentDidMount() {

    }
}