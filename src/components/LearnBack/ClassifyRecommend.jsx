import React, { Component } from 'react';
import '../../assets/style/viewsStyle/LearnBake/ClassifyRecommend.css'
export default class Index extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let arr = []
        let ClassifyObj={}
        const da = this.props.ClassifyData.ClassifyRecommendData[0]
        if(da!=undefined){
            ClassifyObj=da
            
        }
        // console.log(ClassifyObj.classifys,'OOOOOOOOOOOOOOOOOOOOOO')
        if(ClassifyObj.classifys!=undefined){
            arr=ClassifyObj.classifys
        }
        // console.log(arr,'OOOOOOOOOOOOOOOOOOOOOO')
        return (
            

            <div style={{ width: '100%' }}>
                <div className={'let-cont-war'}>
                    <div className={'let-cont-war-titles'}>
        <div className={'let-cont-war-titles-v'}>{ClassifyObj.name}</div>
                    </div>
                    <div className={'.let-cont-war-titles-contents'}>
                   {
                        arr.map(v=>(
                            <a className={'a-list'}>
                                <div className={'a-list-d1'}>
                                    <img className={'a-list-d1-img'} src={v.image}></img>
                                </div>
                        <div className={'a-list-d1-name'}>{v.name}</div>
                            </a>
                        ))
                   }
                     
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
       
    }
}