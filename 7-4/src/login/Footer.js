import React, { Component } from 'react'
import { Row, Col } from 'antd'
import '../style/login/Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className = "container">
                    <Row className="Footer">
                        <ul>
                            <li>ภาษาไทย</li>
                            <li><a href="">English (UK)</a></li>
                            <li><a href="">日本語</a></li>
                            <li><a href="">中文(简体)</a></li>
                            <li><a href="">Tiếng Việt</a></li>
                            <li><a href="">Français (France)</a></li>
                            <li><a href="">Deutsch</a></li>
                            <li><a href="">Русский</a></li>
                            <li><a href="">Español</a></li>
                            <li><a href="">Português (Brasil)</a></li>
                        </ul>
                    </Row>
                    <Row><div className = "border"></div></Row>
                    <Row className="Footer">
                        <ul>
                            <li><a href="">สมัคร</a></li>
                            <li><a href="">เข้าสู่ระบบ</a></li>
                            <li><a href="">Messenger</a></li>
                            <li><a href="">Facebook Lite</a></li>
                            <li><a href="">Watch</a></li>
                            <li><a href="">ผู้คน</a></li>
                            <li><a href="">เพจ</a></li>
                            <li><a href="">หมวดหมู่เพจ</a></li>
                            <li><a href="">สถานที่</a></li>
                            <li><a href="">เกม</a></li>
                            <li><a href="">ตำแหน่งที่ตั้ง</a></li>
                            <li><a href="">Marketplace</a></li>
                            <li><a href="">กลุ่ม</a></li>
                            <li><a href="">Instagram</a></li>
                            <li><a href="">ในพื้นที่</a></li>
                            <li><a href="">โครงการระดมทุน</a></li>
                            <li><a href="">บริการ</a></li>
                            <li><a href="">เกี่ยวกับ</a></li>
                            <li><a href="">สร้างโฆษณา</a></li>
                            <li><a href="">ผู้พัฒนา</a></li>
                            <li><a href="">ร่วมงานกับ Facebook</a></li>
                            <li><a href="">ความเป็นส่วนตัว</a></li>
                            <li><a href="">คุกกี้</a></li>
                            <li><a href="">ตัวเลือกโฆษณา</a></li>
                            <li><a href="">เงื่อนไข</a></li>
                            <li><a href="">ความช่วยเหลือ</a></li>
                        </ul>
                    </Row>
                </div>
            </div>
        )
    }
}
