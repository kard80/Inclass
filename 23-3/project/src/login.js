import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css'
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import './login.css';

const layout = {
    labelCol: { span: 7 },
    wrapperCol: { span: 9 },
};
const tailLayout = {
    wrapperCol: { offset: 10, span: 16 },
};


export default class login extends Component {
    render() {
        return (
            <div>
                <h1>this is login page</h1>
                <Link to="/">Homepage</Link>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    
                >
                    <Form.Item
                        c
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}