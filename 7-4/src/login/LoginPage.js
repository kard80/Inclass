import React, { Component } from 'react'
import Footer from './Footer'
import LeftBody from './LeftBody'
import Navbar from './Navbar'
import RightBody from './RightBody'
import '../style/login/LoginPage.css'

export default class LoginPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="main">
                    <div className="main2">
                        <LeftBody />
                        <RightBody />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
