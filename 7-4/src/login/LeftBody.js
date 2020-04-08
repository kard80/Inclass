import React, { Component } from 'react'
import { Row, Col } from 'antd'
import '../style/login/LeftBody.css'

export default class LeftBody extends Component {
    render() {
        return (
            <Col className="LeftBody">
                <Row className="rowInLeft">การเข้าสู่ระบบล่าสุด</Row>
                <Row className="rowInLeft">คลิกรูปภาพหรือเพิ่มบัญชี</Row>
                <Row className="userOverview">
                    <div className="user">
                        <img src="https://scontent.fbkk8-2.fna.fbcdn.net/v/t1.0-1/p480x480/60838208_10210787477721626_1336385976162844672_o.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_ohc=yG8a6a7VwB0AX9BCoW-&_nc_ht=scontent.fbkk8-2.fna&_nc_tp=6&oh=f2976670a2310a389f0ad9732c742306&oe=5EB1140A"></img>
                        <div className="text">กาจน์</div>
                    </div>
                    <div className="user">
                        <img src="https://scontent.fbkk8-4.fna.fbcdn.net/v/t1.0-1/p480x480/82533287_2628181037231043_8807830622367121408_n.jpg?_nc_cat=100&_nc_sid=dbb9e7&_nc_ohc=WkTWmMBB0ykAX_RDUTg&_nc_ht=scontent.fbkk8-4.fna&_nc_tp=6&oh=31f2ea223da03c5aea1bf1a948c521d7&oe=5EB21A86"></img>
                        <div className="text">Ratiphapa</div>
                    </div>
                    <div className="user">
                        <div className = "trouble">
                            <i class="img sp_UQETc8Y6QpO_1_5x sx_11f84f"></i>
                        </div>
                        <div className="text">เพิ่มบัญชี</div>
                    </div>
                </Row>
            </Col>
        )
    }
}