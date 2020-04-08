import React, { Component } from 'react'
import { Row, Col } from 'antd'
import '../style/login/RightBody.css'

export default class RightBody extends Component {
    state = {
        custom: ''
    }

    onChangeCustom = e => {
        this.setState({
            custom: e.currentTarget.value
        })
    }

    render() {
        const date = ['วัน'];
        const month = ['เดือน', 'ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
        const year = ['ปี'];
        for (let i = 1; i <= 31; i++) {
            {date.push(i)}
        }
        for (let i = 2020; i >= 1905; i--) {
            {year.push(i)}
        }
        return (
            <div>
                <Col className="RightBody">
                    <Row className="rowInLeft1">สร้างบัญชีใหม่</Row>
                    <Row className="rowInLeft2">ง่ายและเร็ว</Row>
                    <Row className="rowInLeft">
                        <Col span={24} className="firstInput">
                            <input placeholder="ชื่อ"></input>
                            <input placeholder="นามสกุล"></input>
                        </Col>
                    </Row>
                    <Row>  <input className="textInput" placeholder="หมายเลขโทรศัพท์มือถือหรืออีเมล"></input></Row>
                    <Row><input className="textInput" placeholder="รหัสผ่านใหม่"></input></Row>
                    <Row className="topic">วันเกิด</Row>
                    <Row>
                        <Col className = "dateBox">
                            <select>
                                {date.map(item => (
                                    <option>{item}</option>
                                ))}
                            </select>
                            <select>
                                {month.map(item => (
                                    <option>{item}</option>
                                ))}
                            </select>
                            <select>
                                {year.map(item => (
                                    <option>{item}</option>
                                ))}
                            </select>
                        </Col>
                    </Row>
                    <Row className="topic">เพศ</Row>
                    <Row className="radio">
                        <span><input type="radio" name = "sex"></input><label>หญิง</label></span>
                        <span><input type="radio" name = "sex"></input><label>ชาย</label></span>
                        <span><input type="radio" name = "sex" value = {this.state.custom}></input><label>กำหนดเอง</label></span>
                    </Row>
                    {/* {
                    <div>
                    <select>
                        <option>1</option>
                    </select>
                    <div>ทุกคนสามารเห็นสรรพนามของคุณได้</div>
                    <input placeholder = "เพศ(ระบุหรือไม่ก็ได้)"></input>
                    </div>} */}
                    <Row className="describe">
                        <p>เมื่อคลิก สมัคร แสดงว่าคุณยินยอมตาม <a href="">ข้อกำหนด</a> <a href="">นโยบาย</a> และ<a href="">นโยบายคุกกี้</a>ของเราแล้ว คุณอาจได้รับการแจ้งเตือนทาง SMS จากเราและสามารถเลือกไม่รับได้ทุกเมื่อ</p>
                    </Row>
                    <Row><button>สมัคร</button></Row>
                    <Row className = "mark">
                        <p ><a href="">สร้างเพจ</a> สำหรับบุคคลมีชื่อเสียง วงดนตรี หรือธุรกิจ</p>
                    </Row>
                </Col>
            </div>
        )
    }
}
