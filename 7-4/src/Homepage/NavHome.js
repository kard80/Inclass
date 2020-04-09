import React, { Component } from 'react'
import { Col, Row } from 'antd'
import '../style/Homepage/NavHome.css'

export default class NavHome extends Component {
    render() {
        return (
            <div className="NavHome">
                <Row className="container">
                    <Col class="_4kny">
                        <h1 class="_19ea" data-click="bluebar_logo">
                            <a class="_19eb" data-gt="{&quot;chrome_nav_item&quot;:&quot;logo_chrome&quot;}" href="https://www.facebook.com/?ref=logo" title="ไปที่หน้าหลักของ Facebook">
                                <span class="_2md">Facebook</span>
                            </a>
                        </h1>
                    </Col>
                    <div className="searchText">
                        <input type="text" placeholder="ค้นหา"></input>
                        <button type="submit">
                            <i class="_585_"></i>
                        </button>
                    </div>
                    <div className="part3">
                        <div className="part31">
                            <div>
                                <div>
                                    <a href="">
                                        <img src="https://scontent.fbkk8-2.fna.fbcdn.net/v/t1.0-1/cp0/p40x40/60838208_10210787477721626_1336385976162844672_o.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_eui2=AeH6NHYz6XfI0rQ_xIgw0EI4sRpv03WsBiOxGm_TdawGI4UgPlcmIEG_HUiqeoSvTgo&_nc_ohc=N-Apg3UAKFgAX8ntzps&_nc_ht=scontent.fbkk8-2.fna&oh=ab19c4ecaa17f97e45eb1ed87c6e54a0&oe=5EB60BD1"></img>
                                        <span>กาจน์</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="part31">
                            <div>
                                <div>
                                    <a href="">
                                        <span>หน้าหลัก</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="part33">
                            <div>
                                <div>
                                    <a href="">
                                        <span>สร้าง</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className = "partIcon">
                
                            <div>
                                <div>
                                </div>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </Row>
            </div>
        )
    }
}
