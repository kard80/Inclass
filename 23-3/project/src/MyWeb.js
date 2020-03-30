import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import homepage from './homepage'
import resume from './resume'
import login from './login'


export default class MyWeb extends Component {
    render() {
        return (
            <div>
                <switch>
                    <Route exact path ="/" component={homepage} />
                    <Route path = "/resume" component = {resume} />
                    <Route path = "/login" component = {login}/>
                </switch>
            </div>
        )
    }
}
