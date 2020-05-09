import React, {Component} from 'react';
import "../../../../assets/style/viewsStyle/LearnBake/Skills/Sk_Details.css";
import axios from "axios";
import {
    connect
} from "react-redux";
import sDetailActionCreator from '../../../../store/actionCreator/LearnBake/Skills/SDetail'

class SDetail extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {Sdetail} = this.props;
        const detailStep = this.props.detailStep;
        // console.log(111111111,detailStep);
        const detailIntroduces = this.props.detailIntroduces;
        // console.log(888888888,detailIntroduces)

        return (
            <div>    
                {
                    <div className={"information"}>
                        <video controls="controls" autoplay="autoplay" poster={Sdetail.image}>
                            {
                                detailStep.map(v=>(
                                    <source src={v.sDVideoUrl2} />
                                 ))
                            }
                        </video>
                        <div className={"step"}>
                            <h3>{Sdetail.title}</h3>
                            {
                                detailIntroduces.map(v=>(
                                    <div className={"present"}>
                                        <p dangerouslySetInnerHTML={{ __html:v.introduce }}></p>
                                    </div>
                                 ))
                            }
                        </div>
                    </div>
                }
            </div>
        )
    }

    componentDidMount() {
        this.props.getStartClassByNewbie.call(this);
    }
    
}
function mapStateToProps(state){
    // console.log(4444444444,state)
    return { 
        Sdetail:state.SDetail.Sdetail,
        detailStep:state.SDetail.detailStep,
        detailIntroduces:state.SDetail.detailIntroduces
    }
}
function mapDispatchToProps(dispatch){
    return {
        async getStartClassByNewbie(){
            const {data} = await axios.get("/education/getStartClassByNewbie",{
                params:{
                    educationCourseId:this.props.location.state.courseId
                }
            });
            console.log("=========================",data);
            dispatch(sDetailActionCreator(data))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SDetail);