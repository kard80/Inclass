import React, { Component } from 'react'
import BodyCenter from './BodyCenter'
import BodyLeft from './BodyLeft'
import BodyRight from './BodyRight'
import NavHome from './NavHome'
import {Col, Row} from 'antd'

export default class Homepage extends Component {
    render() {
        return (
            <div>
                <NavHome />
                <BodyLeft />
                <BodyCenter />
                <BodyRight />

            </div>
        )
    }
}
