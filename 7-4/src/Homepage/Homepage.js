import React, { Component } from 'react'
import BodyCenter from './BodyCenter'
import BodyLeft from './BodyLeft'
import BodyRight from './BodyRight'
import NavHome from './NavHome'
import { Col, Row } from 'antd'
import '../style/Homepage/Homepage.css'

export default class Homepage extends Component {
    render() {
        return (
            <div class="Homepage">
                <NavHome />
                <div className="mainBody">
                    <div class="body">
                        <BodyLeft />
                        <BodyCenter />
                        <BodyRight />
                    </div>
                </div>
            </div>
        )
    }
}
