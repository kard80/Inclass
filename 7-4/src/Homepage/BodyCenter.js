import React, { Component } from 'react'
import { Col, Row } from 'antd'
import '../style/Homepage/BodyCenter.css'

export default class BodyCenter extends Component {
    render() {
        return (
            <div className="BodyCenter">
                <Row className="createPost">
                    <span>สร้างโพสต์</span>
                </Row>
                <Row className="whatDoYouThink">
                    <Col>
                        <img src="https://scontent.fbkk8-2.fna.fbcdn.net/v/t1.0-1/cp0/p60x60/60838208_10210787477721626_1336385976162844672_o.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_eui2=AeH6NHYz6XfI0rQ_xIgw0EI4sRpv03WsBiOxGm_TdawGI4UgPlcmIEG_HUiqeoSvTgo&_nc_ohc=N-Apg3UAKFgAX9Kw4xa&_nc_ht=scontent.fbkk8-2.fna&oh=381450b793e05b4adf113ff75b8ae0a0&oe=5EB5A257"></img>
                    </Col>
                    <Col>
                        <textarea placeholder="คุณกำลังคิดอะไรอยู่ กาจน์"></textarea>
                    </Col>
                </Row>
                <Row className="decoration">
                    <div className="_2nc"></div>
                    <div class="_3nc"></div>
                </Row>
                <Row className="lineBreak">
                </Row>
                <Row className="listFunction">
                    <ul>
                        <li>
                            <div class="functionOne">
                                <i class="_4a0a img sp_dXAVgcGQCLS_1_5x sx_944b0f"></i>
                                <span>รูปภาพ/วิดีโอ</span>
                            </div>
                        </li>
                        <li>
                            <div class="functionTwo">
                                <i class="_4a0a img sp_dXAVgcGQCLS_1_5x sx_dad813"></i>
                                <span>แท็กเพื่อน</span>
                            </div>
                        </li>
                        <li>
                            <div class="functionThree">
                                <i class="_4a0a img sp_dXAVgcGQCLS_1_5x sx_b1441e"></i>
                                <span>ความรู้สึก/กิ...</span>
                            </div>
                        </li>
                        <li>
                            <div class="functionFour">
                                <i class="_4a0a img sp_dXAVgcGQCLS_1_5x sx_f36408"></i>
                            </div>
                        </li>
                    </ul>
                </Row>
                <Row className="channel">
                    <Row className="optionChannel">
                        <Col className="optionChannel1">
                            <div className="_1se_"></div>
                            <div className="_3-w6 _3-w4"></div>
                            <div>ฟีดข่าว</div>
                        </Col>
                        <Col className="optionChannel2">
                            <button>
                                <i className="_k_e _2930 _6417 img sp_dXAVgcGQCLS_1_5x sx_8d2e3d"></i>
                                <span>เพื่อน</span>
                                <i className="img sp_CFhzeuTBkdE_1_5x sx_556b7c"></i>
                            </button>
                        </Col>
                    </Row>
                    <Row className="optionChannel">
                        <Col className="optionChannel1">
                            <div className="_1se_"></div>
                            <div>
                                <img className="_3-w4 img _8o _8r img" ></img>
                            </div>
                            <div>สตรอรี่ของคุณ</div>
                        </Col>
                        <Col className="optionChannel2">
                            <button>
                                <i className="_k_e _2930 _6417 img sp_dXAVgcGQCLS_1_5x sx_8d2e3d"></i>
                                <span>เพื่อน</span>
                                <i className="img sp_CFhzeuTBkdE_1_5x sx_556b7c"></i>
                            </button>
                        </Col>
                    </Row>
                    <Row className="buttonPost">
                        <button>โพสต์</button>
                    </Row>
                </Row>
            </div>
        )
    }
}
