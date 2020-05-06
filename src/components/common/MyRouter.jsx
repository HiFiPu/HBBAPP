import React, {Component} from 'react';
import {
    Route,
    Switch,
    Redirect
} from "react-router-dom"
import GuardRouter from "./GuardRouter";

export default class MyRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        // console.log('MyRouter**********',this.props)
        return (
            <Switch>
                {
                    this.props.router.map(v => (
                        <Route exact={v.exact} path={v.path}
                               render={() => <GuardRouter  ackstore={this.props} key={v.path}  {...v}></GuardRouter>}></Route>
                    ))
                }
                <Redirect to={"/Error"} from="*"></Redirect>
            </Switch>
        )
    }
}