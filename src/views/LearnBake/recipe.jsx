import React, { Component } from 'react';
import '../../assets/style/viewsStyle/search/recipe.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import searchCreators from '../../store/actionCreator/search/search'
class Index extends Component {
    constructor(props) {
        super(props);
    }
    recipeData = []
    materialArr = []
    stepArr = []
    render() {
        console.log(this.props.ArrRecipe)
        if (this.props.ArrRecipe.length > 0) {
            this.recipeData = this.props.ArrRecipe[0].recipe
        }
        if (this.recipeData.material != undefined) {
            this.materialArr = this.recipeData.material
        }
        if (this.recipeData.step != undefined) {
            this.stepArr = this.recipeData.step
        }
        // console.log(this.props, 'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHBBBBBBBBBBBBBBBBBBBBBBBBBBB')
        return (
            <div>
                <div className={'recipe-war'}>
                    <div className={'recipe-war-c'}>
                        {/* hearder */}
                        <div>
                            <div className={'recipe-war-c-top'}>
                                <span className={'recipe-war-c-top-span'} onClick={()=>{this.props.history.go(-1)}}>
                                    <img alt="" title="" src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&amp;imageView2/1/w/48/h/48" className={'recipe-war-c-top-span-img'} />
                                </span>
                                <div className={'recipe-war-c-top-rignt'}>
                                    <div className={'recipe-war-c-top-style'}>收藏</div>
                                </div>
                            </div>
                        </div>
                        {/* conent */}
                        <div className={'recipe-content'}>
                            <div className={'recipe-content-c'}>
                                <div className={'recipe-content-ci'}>
                                    <img src={this.recipeData.coverImage} className={'recipe-content-ci-img'}></img>
                                    <div className={'recipe-content-ci-read'}>
                                        <div className={'recipe-content-ci-read-ti'}>{this.recipeData.coverTitle}</div>
                                        <div className={'recipe-content-ci-read-bott'}>
                                            <div className={'recipe-content-ci-read-bott-l'}>关注</div>
                                            <div className={'recipe-content-ci-read-bott-r'}>
                                                <div className={'recipe-content-ci-read-bott-r-i'}>
                                                    <img src={this.recipeData.clientImage} className={'recipe-content-ci-read-bott-r-img'}></img>
                                                </div>

                                            </div>
                                            <div className={'recipe-content-ci-read-bott-m'}>
                                                <div className={'recipe-content-ci-read-bott-m-span'}>{this.recipeData.clientName}</div>
                                            </div>
                                            <div className={'recipe-content-ci-read-cicle'}>
                                                <div className={'recipe-content-ci-read-cicle-list'}>
                                                    <p className={'recipe-content-ci-read-cicle-list-p'}>
                                                        {this.recipeData.coverSummary}
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* 食材用料 */}
                                <div className={'recipe-center'}>
                                    <div className={'recipe-center-title'}>食材用料</div>
                                    <div className={'recipe-center-li1'}>
                                    <div className={'recipe-center-li1-r'}>
                                        <div className={'recipe-center-li1-r1'}>
                                            <div className={'recipe-center-li1-r101'}></div>
                                        </div>
                                        <div className={'recipe-center-li1-r2'}>
                                            <input type="text" className={'recipe-center-li1-r202'} value={'1'}></input>
                                        </div>
                                        <div className={'recipe-center-li1-r1'}>
                                            <div className={'recipe-center-li1-r202-1'}></div>
                                            <div className={'recipe-center-li1-r202-2'}></div>
                                        </div>
                                    </div>
                                    <span className={'recipe-center-li1-span{'}>
                                        (分量/分)
                                </span>

                                </div>
                                <div className={'recipe-center-o'}>
                                    {
                                        this.materialArr.map(v => (
                                            <div className={'recipe-center-o-list'}>
                                                <div className={'recipe-center-o-list-i'}>{v.name}</div>
                                                <div className={'recipe-center-o-list-i'}></div>
                                            </div>
                                        ))
                                    }

                                </div>
                                {/* 步骤 */}
                                <div className={'recipe-step'}>
                                    <div className={'recipe-step-c'}>
                                        {
                                            this.stepArr.map((v, i) => (
                                                <div className={'recipe-step-c-tent'}>
                                                    <div className={'recipe-step-c-tent-t'}>步骤{i + 1}</div>
                                                    <img className={'recipe-step-c-tent-img'} src={v.image}></img>
                                                    <div className={'recipe-step-c-tent-des'}>
                                                        <div className={'recipe-step-c-tent-des-c'}>
                                                            <div className={'recipe-step-c-tent-des-c-p'}>{v.text}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }

                                    </div>
                                </div>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.getrecipeList.call(this)
    }
}
function mapStateToProps(state) {
    // console.log(state,'SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS')
    return {
        ArrRecipe: state.serchList.GET_RECIPE_LIST
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(searchCreators, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Index)